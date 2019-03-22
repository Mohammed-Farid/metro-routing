const Line = require('../models/line');
const { update } = require('./utils/intersections');
const lines = [];

const defaultLines = [
  {
    name: 'الخط الأول',
    stops: [
      'حلوان',
      'عين حلوان',
      'جامعة حلوان',
      'وادي حوف',
      'حدائق حلوان',
      'المعصرة',
      'طرة الاسمنت',
      'كوستيكا',
      'طرة البلد',
      'ثكنات المعادي',
      'المعادي',
      'حدائق المعادي',
      'دار السلام',
      'الزهراء',
      'مار جرجس',
      'الملك الصالح',
      'السيدة زينب',
      'سعد زغلول',
      'السادات',
      'ناصر',
      'عرابي',
      'الشهداء',
      'غمرة',
      'الدمرداش',
      'منشية الصدر',
      'كوبري القبة',
      'حمامات القبة',
      'سراي القبة',
      'حدائق الزيتون',
      'حلمية الزيتون',
      'المطرية',
      'عين شمس',
      'عزبة النخل',
      'المرج',
      'المرج الجديدة',
    ]
  },

  {
    name: 'الخط الثاني',
    stops: [
      'المنيب',
      'ساقية مكي',
      'أم المصريين',
      'الجيزة',
      'فيصل',
      'جامعة القاهرة',
      'البحوث',
      'الدقي',
      'الأوبرا',
      'السادات',
      'محمد نجيب',
      'العتبة',
      'الشهداء',
      'مسرة',
      'روض الفرج',
      'سانتا تريزا',
      'الخلفاوي',
      'المظلات',
      'كلية الزراعة',
      'شبرا الخيمة',
    ]
  },

  {
    name: 'الخط الثالث',
    stops: [
      'العباسية',
      'عبده باشا',
      'الجيش',
      'باب الشعرية',
      'عتبة',
    ]
  }
];

const add = (name, stops) => {
  lines.push(new Line(name, stops));
  update(lines);
}

module.exports = { 'lines': defaultLines, add };