'use client';

import { useState, useEffect } from 'react';

// Define the shape of our menu items safely
type MenuItem = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isAvailable: boolean;
};

const CATEGORIES = ['المشويات', 'الشاورما', 'الأكلات الشعبية', 'الحلويات'];

export default function AdminMenuPage() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentItem, setCurrentItem] = useState<Partial<MenuItem>>({});
  const [actionLoading, setActionLoading] = useState(false);

  // Fetch initial data
  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/menu');
      const data = await res.json();
      setItems(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Form Handlers
  const handleOpenAddModal = () => {
    setIsEditMode(false);
    setCurrentItem({
      name: '',
      description: '',
      price: 0,
      category: 'المشويات',
      image: '',
      isAvailable: true
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item: MenuItem) => {
    setIsEditMode(true);
    setCurrentItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentItem({});
  };

  // Image Upload and Automatic Client-Side Compression
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show loading state for image if needed, but the compression is almost instant
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        
        // Auto-scale down large images to max 800px to save database space
        const MAX_SIZE = 800;
        if (width > height) {
          if (width > MAX_SIZE) {
            height *= MAX_SIZE / width;
            width = MAX_SIZE;
          }
        } else {
          if (height > MAX_SIZE) {
            width *= MAX_SIZE / height;
            height = MAX_SIZE;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        
        // Convert to high-performance compressed base64 representation
        const compressedBase64 = canvas.toDataURL('image/webp', 0.8);
        setCurrentItem({ ...currentItem, image: compressedBase64 });
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setActionLoading(true);
    
    try {
      if (isEditMode && currentItem._id) {
        await fetch(`/api/menu/${currentItem._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(currentItem)
        });
      } else {
        await fetch('/api/menu', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(currentItem)
        });
      }
      handleCloseModal();
      fetchItems(); // refresh list
    } catch (error) {
      alert('حدث خطأ أثناء حفظ الصنف');
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('هل أنت متأكد من رغبتك في حذف هذا الصنف نهائياً؟')) return;
    
    try {
      await fetch(`/api/menu/${id}`, { method: 'DELETE' });
      fetchItems();
    } catch (error) {
      alert('حدث خطأ أثناء الحذف');
    }
  };

  const handleToggleStatus = async (item: MenuItem) => {
    try {
      await fetch(`/api/menu/${item._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isAvailable: !item.isAvailable })
      });
      fetchItems();
    } catch (error) {
      alert('حدث خطأ أثناء تغيير حالة الصنف');
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">إدارة المنيو</h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium tracking-wide">
            أضف، عدّل، واحذف أصناف الطعام وعروض المنيو بسهولة تامة.
          </p>
        </div>
        <button 
          onClick={handleOpenAddModal}
          className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-6 py-3.5 rounded-2xl shadow-[0_4px_14px_0_rgba(234,88,12,0.39)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.23)] transition-all flex items-center gap-2 flex-shrink-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          إضافة صنف جديد
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
           <svg className="animate-spin h-10 w-10 text-orange-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-gray-500 font-bold animate-pulse">جاري جلب القائمة...</p>
        </div>
      ) : items.length === 0 ? (
        <div className="bg-white dark:bg-[#111827] border border-gray-100 dark:border-gray-800 rounded-3xl p-16 flex flex-col items-center text-center shadow-sm">
          <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
          </div>
          <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">القائمة فارغة تماماً</h3>
          <p className="text-gray-500 mb-8 max-w-sm">
            يمكنك البدء في إعمار القائمة بإضافة الأطباق اللذيذة ليستمتع بها عملائك.
          </p>
          <button 
            onClick={handleOpenAddModal}
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold px-8 py-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
          >
            إضافة الصنف الأول
          </button>
        </div>
      ) : (
        <div className="bg-white dark:bg-[#111827] rounded-[24px] border border-gray-100/50 dark:border-gray-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-right h-full">
              <thead className="bg-gray-50 dark:bg-gray-900/50 text-gray-500 dark:text-gray-400 font-bold text-sm border-b border-gray-100 dark:border-gray-800">
                <tr>
                  <th className="px-6 py-5 whitespace-nowrap">الصنف</th>
                  <th className="px-6 py-5 whitespace-nowrap">السعر</th>
                  <th className="px-6 py-5 whitespace-nowrap">القسم</th>
                  <th className="px-6 py-5 whitespace-nowrap text-center">الحالة</th>
                  <th className="px-6 py-5 whitespace-nowrap text-center">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50">
                {items.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 overflow-hidden flex-shrink-0 relative border border-gray-200 dark:border-gray-700">
                          {item.image ? (
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">?</div>
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 dark:text-white">{item.name}</div>
                          <div className="text-xs text-gray-500 truncate max-w-[200px] mt-1">{item.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-black text-orange-600 dark:text-orange-500">{item.price} <span className="text-xs text-gray-500 dark:text-gray-400">€</span></div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold leading-5 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleToggleStatus(item)}
                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${item.isAvailable ? 'bg-orange-600' : 'bg-gray-300 dark:bg-gray-700'}`}
                        role="switch"
                        aria-checked="true"
                      >
                        <span aria-hidden="true" className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${item.isAvailable ? '-translate-x-5' : 'translate-x-0'}`}></span>
                      </button>
                    </td>
                    <td className="px-6 py-4">
                       <div className="flex items-center justify-center gap-3">
                         <button onClick={() => handleOpenEditModal(item)} className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors border border-blue-100 dark:border-blue-900/30" title="تعديل">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                         </button>
                         <button onClick={() => handleDelete(item._id)} className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors border border-red-100 dark:border-red-900/30" title="حذف">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                         </button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Modern Modal For Add/Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
           <div className="relative w-full max-w-2xl bg-white dark:bg-[#111827] rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transform scale-100 transition-all">
              
              <div className="px-8 py-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-900/20">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                  {isEditMode ? 'تعديل الصنف' : 'إضافة صنف جديد'}
                </h3>
                <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors bg-white dark:bg-gray-800 rounded-full p-2 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <form onSubmit={handleSave} className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">اسم الصنف</label>
                    <input 
                      type="text" 
                      required
                      value={currentItem.name}
                      onChange={(e) => setCurrentItem({...currentItem, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0B0E14] text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none transition-shadow"
                      placeholder="مثال: دجاج على الفحم"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">الوصف (مكونات أو ميزة)</label>
                    <textarea 
                      required
                      rows={2}
                      value={currentItem.description}
                      onChange={(e) => setCurrentItem({...currentItem, description: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0B0E14] text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none transition-shadow"
                      placeholder="وصف مشوق للصنف..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">القسم</label>
                    <select 
                      value={currentItem.category}
                      onChange={(e) => setCurrentItem({...currentItem, category: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0B0E14] text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none transition-shadow appearance-none cursor-pointer"
                    >
                      {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">السعر (€)</label>
                    <input 
                      type="number" 
                      required
                      step="0.01"
                      min="0"
                      value={currentItem.price}
                      onChange={(e) => setCurrentItem({...currentItem, price: parseFloat(e.target.value)})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0B0E14] text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none transition-shadow text-left"
                      dir="ltr"
                      placeholder="0.00"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">صورة الصنف</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-xl hover:bg-gray-50 dark:hover:bg-[#111827] transition-colors relative h-48 overflow-hidden group">
                      
                      {currentItem.image ? (
                        <>
                          <img src={currentItem.image} alt="Preview" className="absolute inset-0 w-full h-full object-cover rounded-xl" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-white font-bold bg-gray-900/50 px-4 py-2 rounded-lg backdrop-blur-sm cursor-pointer">
                              تغيير الصورة
                            </span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                          </div>
                        </>
                      ) : (
                        <div className="space-y-1 text-center flex flex-col items-center justify-center">
                          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.1-3.1a3.03 3.03 0 00-4.24 0l-10 10m-3.2-3.2a3.03 3.03 0 00-4.24 0L8 35m7-14A5 5 0 1115 11 5 5 0 0115 21z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <div className="flex text-sm text-gray-600 dark:text-gray-400">
                            <label className="relative cursor-pointer bg-white dark:bg-transparent rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500">
                              <span>اختر صورة للصنف</span>
                              <input required type="file" accept="image/*" className="sr-only" onChange={handleImageUpload} />
                            </label>
                            <p className="pl-1">أو اسحبها وأفلتها هنا</p>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                            PNG, JPG, WEBP - الصور سيتم ضغطها تلقائياً
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={handleCloseModal}
                    className="px-6 py-3 rounded-xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                  >
                    إلغاء
                  </button>
                  <button 
                    type="submit" 
                    disabled={actionLoading}
                    className="px-8 py-3 rounded-xl font-bold text-white bg-orange-600 hover:bg-orange-500 shadow-md shadow-orange-500/20 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {actionLoading && (
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                    {isEditMode ? 'حفظ التغييرات' : 'نشر الصنف'}
                  </button>
                </div>
              </form>
           </div>
        </div>
      )}
    </div>
  );
}
