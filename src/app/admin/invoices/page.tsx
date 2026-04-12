'use client';
import { useState } from 'react';

// Invoice Template Data Structure
type InvoiceItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

export default function InvoicesPage() {
  const [clientName, setClientName] = useState('');
  const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split('T')[0]);
  const [items, setItems] = useState<InvoiceItem[]>([]);
  const [taxRate, setTaxRate] = useState(19); // 19% default for Germany, customizable

  const addItem = () => {
    setItems([...items, { id: Date.now().toString(), name: '', quantity: 1, price: 0 }]);
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: any) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const taxAmount = (subtotal * taxRate) / 100;
  const total = subtotal + taxAmount;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <div className="flex justify-between items-center mb-8 print:hidden">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">مولد الفواتير</h1>
          <p className="text-gray-500 font-medium">قم بإنشاء وطباعة فواتير رسمية واحترافية للعملاء</p>
        </div>
        <button 
          onClick={handlePrint}
          className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl font-bold hover:shadow-lg transition flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          طباعة الفاتورة
        </button>
      </div>

      {/* Control Panel (Hidden on Print) */}
      <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 mb-8 border border-gray-100 dark:border-gray-800 shadow-sm print:hidden">
         <h2 className="text-lg font-bold mb-4 text-orange-600">لوحة التحكم السريعة</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">اسم العميل / الشركة</label>
              <input type="text" value={clientName} onChange={e => setClientName(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#0B0E14] outline-none" placeholder="مثال: شركة النور التكنولوجية" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">تاريخ الفاتورة</label>
              <input type="date" value={invoiceDate} onChange={e => setInvoiceDate(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#0B0E14] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">نسبة الضريبة (VAT %)</label>
              <input type="number" value={taxRate} onChange={e => setTaxRate(Number(e.target.value))} className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#0B0E14] outline-none" />
            </div>
         </div>
      </div>

      {/* The Printable Invoice Paper */}
      <div className="bg-white rounded-none md:rounded-3xl p-8 md:p-12 shadow-2xl mx-auto w-full max-w-4xl min-h-[800px] relative overflow-hidden print:p-0 print:shadow-none print:w-full print:m-0 text-gray-900 border border-gray-200 dark:border-transparent">
        
        {/* Watermark Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none grayscale z-0 hidden print:block md:block">
          <img src="/images/logo.png" alt="Watermark Background" className="w-[600px] h-auto object-contain" />
        </div>

        {/* Invoice Header */}
        <div className="flex justify-between items-start border-b-2 border-gray-100 pb-8 relative z-10">
          <div>
            <img src="/images/logo.png" alt="ميزاب محسان" className="h-24 w-auto mb-3 object-contain" />
            <p className="text-gray-400 text-sm mt-1">شارع المطاعم، المبنى 12، بون، ألمانيا</p>
            <p className="text-gray-400 text-sm">هاتف: +49 123 456 7890</p>
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-black text-gray-200 uppercase tracking-widest mb-2">INVOICE</h2>
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
               <p className="text-sm text-gray-500 font-bold mb-1">رقم الفاتورة: <span className="text-gray-900">#INV-{Math.floor(Math.random() * 10000)}</span></p>
               <p className="text-sm text-gray-500 font-bold">التاريخ: <span className="text-gray-900">{invoiceDate}</span></p>
            </div>
          </div>
        </div>

        {/* Billed To */}
        <div className="py-8 relative z-10">
          <p className="text-sm text-gray-400 font-bold mb-2 uppercase tracking-wide">فاتورة للسادة :</p>
          <h3 className="text-2xl font-black text-gray-800">{clientName || 'اسم العميل / الشركة'}</h3>
        </div>

        {/* Items Table */}
        <div className="relative z-10">
          <table className="w-full text-right mb-8">
            <thead>
              <tr className="border-b-2 border-orange-100">
                <th className="py-3 text-orange-600 font-black">البيان / الصنف</th>
                <th className="py-3 text-orange-600 font-black w-24 text-center">الكمية</th>
                <th className="py-3 text-orange-600 font-black w-32 text-center">السعر (€)</th>
                <th className="py-3 text-orange-600 font-black w-32 text-left">الإجمالي (€)</th>
                <th className="py-3 w-10 print:hidden"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 group">
                  <td className="py-3">
                    <input type="text" value={item.name} onChange={e => updateItem(item.id, 'name', e.target.value)} placeholder="اسم الوجبة أو الخدمة" className="w-full bg-transparent outline-none font-bold text-gray-800 placeholder-gray-300" />
                  </td>
                  <td className="py-3 text-center">
                    <input type="number" min="1" value={item.quantity} onChange={e => updateItem(item.id, 'quantity', Number(e.target.value))} className="w-full bg-transparent outline-none text-center font-bold text-gray-800" />
                  </td>
                  <td className="py-3 text-center">
                    <input type="number" min="0" step="0.01" value={item.price} onChange={e => updateItem(item.id, 'price', Number(e.target.value))} className="w-full bg-transparent outline-none text-center font-bold text-gray-800" dir="ltr" />
                  </td>
                  <td className="py-3 text-left font-black text-gray-900" dir="ltr">
                    {(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="py-3 text-left print:hidden">
                    <button onClick={() => removeItem(item.id)} className="text-red-300 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={addItem} className="text-orange-600 font-bold hover:text-orange-700 flex items-center gap-1 print:hidden mb-12">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            إضافة سطر جديد
          </button>
        </div>

        {/* Totals */}
        <div className="flex justify-end relative z-10 w-full mb-16">
          <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-50 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-500 font-bold">المجموع الفرعي:</span>
              <span className="font-black text-gray-800" dir="ltr">{subtotal.toFixed(2)} €</span>
            </div>
            <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4">
              <span className="text-gray-500 font-bold">الضريبة ({taxRate}%):</span>
              <span className="font-black text-gray-800" dir="ltr">{taxAmount.toFixed(2)} €</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-black text-orange-600">الإجمالي:</span>
              <span className="text-2xl font-black text-orange-600" dir="ltr">{total.toFixed(2)} €</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-gray-100 text-center relative z-10">
          <h4 className="font-black text-gray-800 mb-1">شكراً لثقتكم بمطعم ميزاب محسان!</h4>
          <p className="text-xs text-gray-400">هذه الفاتورة تم إصدارها إلكترونياً وتعتبر وثيقة رسمية.</p>
        </div>
        
      </div>
    </div>
  );
}
