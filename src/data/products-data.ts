import { Product } from '../types/product';

export const productsData: Product[] = [
  // المشويات
  {
    id: '1',
    name: 'كفتة على الفحم',
    description: 'كفتة مشوية على الفحم بنكهة أصيلة، متبّلة بخلطتنا الخاصة، وطعم يخليك ترجع تاني بدون تفكير',
    price: 45,
    category: 'المشويات',
    image: '/images/kofta.jpg',
    isAvailable: true,
  },
  {
    id: '2',
    name: 'برجر على الفحم',
    description: 'برجر لحم طازج مشوي على الفحم، مع صوص مميز وخبز طري… لقمة واحدة وتفهم الفرق',
    price: 30,
    category: 'المشويات',
    image: '/images/burger.jpg',
    isAvailable: true,
  },
  {
    id: '3',
    name: 'دجاج مشوي على الفحم',
    description: 'دجاج متبل بعناية ومشوي على الفحم لحد الكمال، طعم سوداني دافي يفتح النفس',
    price: 35,
    category: 'المشويات',
    image: '/images/chicken-grill.jpg',
    isAvailable: true,
  },

  // الشاورما
  {
    id: '4',
    name: 'شاورما دجاج على الفحم',
    description: 'شاورما دجاج متبّلة ومشوية على الفحم، بطعم مدخن يخليك ما تكتفي من أول مرة',
    price: 15,
    category: 'الشاورما',
    image: '/images/shawarma-chicken.jpg',
    isAvailable: true,
  },
  {
    id: '5',
    name: 'شاورما لحم على الفحم',
    description: 'شرائح لحم متبّلة ومشوية على الفحم، نكهة قوية وتجربة تستاهل تعيشها',
    price: 18,
    category: 'الشاورما',
    image: '/images/shawarma-meat.jpg',
    isAvailable: true,
  },

  // الأكلات الشعبية
  {
    id: '6',
    name: 'لحم مفروم',
    description: 'لحم مفروم بطعم بيتي أصيل، متوازن ومشبع… زي أكل البيت لكن أحلى',
    price: 25,
    category: 'الأكلات الشعبية',
    image: '/images/minced-meat.jpg',
    isAvailable: true,
  },
  {
    id: '7',
    name: 'قلاية',
    description: 'قلاية سودانية بطعم تقليدي غني، خلطة بهارات تخليك تحس بالأصالة في كل لقمة',
    price: 28,
    category: 'الأكلات الشعبية',
    image: '/images/galayeh.jpg',
    isAvailable: true,
  },
  {
    id: '8',
    name: 'فاصوليا بالكرشة',
    description: 'طبق شعبي مميز لعشاق الطعم الحقيقي، دسم ومليان نكهة… للأصحاب الذوق العالي',
    price: 22,
    category: 'الأكلات الشعبية',
    image: '/images/beans.jpg',
    isAvailable: true,
  },

  // الحلويات
  {
    id: '9',
    name: 'كنافة',
    description: 'كنافة ذهبية مقرمشة من بره وناعمة من جوه، متغرقه شيرة… مزاجك هيقولك شكراً',
    price: 20,
    category: 'الحلويات',
    image: '/images/kunafa.jpg',
    isAvailable: true,
  },
  {
    id: '10',
    name: 'بسبوسة',
    description: 'بسبوسة طرية بنكهة لذيذة، متوازنة في الحلاوة وتذوب في الفم بكل سلاسة ',
    price: 15,
    category: 'الحلويات',
    image: '/images/basbousa.jpg',
    isAvailable: true,
  },
  {
    id: '11',
    name: 'قطايف',
    description: 'قطايف بحشوات مميزة وطعم شرقي أصيل، تحلية تختم بيها يومك على مزاج',
    price: 18,
    category: 'الحلويات',
    image: '/images/qatayef.jpg',
    isAvailable: true,
  },
  {
    id: '12',
    name: 'رز باللبن',
    description: 'رز باللبن كريمي ناعم، بطعم هادي ومريح… أبسط حاجة وأحلاها',
    price: 10,
    category: 'الحلويات',
    image: '/images/rice-milk.jpg',
    isAvailable: true,
  }
];

export const categories = ['الكل', 'المشويات', 'الشاورما', 'الأكلات الشعبية', 'الحلويات'];
