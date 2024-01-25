import w_blouse1 from './w_blouse1.jpg';
import w_blouse2 from './w_blouse2.jpg';
import w_coverall from './w_coverall.jpg';
import w_dress1 from './w_dress1.jpg';
import w_dress2 from './w_dress2.jpg';
import w_dress3 from './w_dress3.jpg';
import w_elegantDress1 from './w_elegant-dress1.jpg';
import w_elegantDress2 from './w_elegant-dress2.jpg';
import w_jeans1 from './w_jeans1.jpg';
import w_jeans2 from './w_jeans2.jpg';
import w_jeans3 from './w_jeans3.jpg';
import w_jeans4 from './w_jeans4.jpg';
import w_skirt from './w_skirt.jpg';
import w_top1 from './w_top1.jpg';
import w_top2 from './w_top2.jpg';
import w_top3 from './w_top3.jpg';
import m_blackShirt from './m_blackShirt.jpg';
import m_BrownCoat from './m_BrownCoat.jpg';
import m_HoodieSweatpants from './m_Hoodie&Sweatpants.jpg';
import m_jacket from './m_jacket.jpg';
import m_shirt from './m_shirt.jpg';
import m_suit from './m_suit.jpg';
import m_sweater from './m_sweater.jpg';
import m_trousers from './m_trousers.jpg';
import m_trousers1 from './m_trousers1.jpg';
import m_Vest from './m_Vest.jpg';
import m_watch from './m_watch.jpg';
import k_coverall from './k_coverall.jpg';
import k_coverall1 from './k_coverall1.jpg';
import k_hoodedJacket from './k_hoodedJacket.jpg';
import k_jumpsuit from './k_jumpsuit.jpg';
import k_set from './k_set.jpg';
import k_sweater from './k_sweater.jpg';
import k_topShorts from './k_top&shorts.jpg';
import k_topShortsDino from './k_top&shortsDino.jpg';
import k_tracksuitSet from './k_tracksuitSet.jpg';
import k_warmjumpsuit from './k_warmJumpsuit.jpg';

let all_product = [
  {
    id: 1,
    name: 'Cappuccino blouse',
    category: 'women',
    image: w_blouse1,
    new_price: '$23',
    old_price: '$30',
  },
  {
    id: 2,
    name: 'Orange blouse',
    category: 'women',
    image: w_blouse2,
    new_price: '$29',
    old_price: '$35',
  },
  {
    id: 3,
    name: 'Coverall',
    category: 'women',
    image: w_coverall,
    new_price: '$63',
    old_price: '$78',
  },
  {
    id: 4,
    name: 'Summer dress',
    category: 'women',
    image: w_dress1,
    new_price: '$61',
    old_price: '$70',
  },
  {
    id: 5,
    name: 'Summer dress 2',
    category: 'women',
    image: w_dress2,
    new_price: '$58',
    old_price: '$59',
  },
  {
    id: 6,
    name: 'Summer dress 3',
    category: 'women',
    image: w_dress3,
    new_price: '$58',
    old_price: '$67',
  },
  {
    id: 7,
    name: 'Elegant dress',
    category: 'women',
    image: w_elegantDress1,
    new_price: '$89',
    old_price: '$110',
  },
  {
    id: 8,
    name: 'Purple elegant dress',
    category: 'women',
    image: w_elegantDress2,
    new_price: '$87',
    old_price: '$95',
  },
  {
    id: 10,
    name: 'Flared Jeans',
    category: 'women',
    image: w_jeans1,
    new_price: '$48',
    old_price: '$56',
  },
  {
    id: 11,
    name: 'Jeans',
    category: 'women',
    image: w_jeans2,
    new_price: '$50',
    old_price: '$60',
  },
  {
    id: 12,
    name: 'Jeans',
    category: 'women',
    image: w_jeans3,
    new_price: '$50',
    old_price: '$58',
  },
  {
    id: 13,
    name: 'Jeans Teddy Bear',
    category: 'women',
    image: w_jeans4,
    new_price: '$58',
    old_price: '$65',
  },
  {
    id: 14,
    name: 'Skirt',
    category: 'women',
    image: w_skirt,
    new_price: '$45',
    old_price: '$55',
  },
  {
    id: 15,
    name: 'Top',
    category: 'women',
    image: w_top1,
    new_price: '$25',
    old_price: '$30',
  },
  {
    id: 16,
    name: 'Elegant Top',
    category: 'women',
    image: w_top2,
    new_price: '$50',
    old_price: '$55',
  },
  {
    id: 17,
    name: 'Tops',
    category: 'women',
    image: w_top3,
    new_price: '$45',
    old_price: '$50',
  },
  {
    id: 18,
    name: 'Black shirt',
    category: 'men',
    image: m_blackShirt,
    new_price: '$40',
    old_price: '$46',
  },
  {
    id: 19,
    name: 'Brown coat',
    category: 'men',
    image: m_BrownCoat,
    new_price: '$90',
    old_price: '$99',
  },
  {
    id: 20,
    name: 'Hoodie & Sweatpants',
    category: 'men',
    image: m_HoodieSweatpants,
    new_price: '$100',
    old_price: '$120',
  },
  {
    id: 21,
    name: 'Jacket',
    category: 'men',
    image: m_jacket,
    new_price: '$85',
    old_price: '$90',
  },
  {
    id: 22,
    name: 'Shirt',
    category: 'men',
    image: m_shirt,
    new_price: '$56',
    old_price: '$70',
  },
  {
    id: 23,
    name: 'Suit',
    category: 'men',
    image: m_suit,
    new_price: '$150',
    old_price: '$200',
  },
  {
    id: 24,
    name: 'Sweater',
    category: 'men',
    image: m_sweater,
    new_price: '$78',
    old_price: '$80',
  },
  {
    id: 25,
    name: 'Trousers',
    category: 'men',
    image: m_trousers,
    new_price: '$60',
    old_price: '$58',
  },
  {
    id: 26,
    name: 'Trousers',
    category: 'men',
    image: m_trousers1,
    new_price: '$70',
    old_price: '$75',
  },
  {
    id: 27,
    name: 'Vest',
    category: 'men',
    image: m_Vest,
    new_price: '$68',
    old_price: '$73',
  },
  {
    id: 28,
    name: 'Watch',
    category: 'men',
    image: m_watch,
    new_price: '$80',
    old_price: '$88',
  },
  {
    id: 29,
    name: 'Coverall',
    category: 'kids',
    image: k_coverall,
    new_price: '$68',
    old_price: '$80',
  },
  {
    id: 29,
    name: 'Coverall',
    category: 'kids',
    image: k_coverall1,
    new_price: '$70',
    old_price: '$75',
  },
  {
    id: 29,
    name: 'Hooded jacket',
    category: 'kids',
    image: k_hoodedJacket,
    new_price: '$60',
    old_price: '$68',
  },
  {
    id: 29,
    name: 'Jumpsuit',
    category: 'kids',
    image: k_jumpsuit,
    new_price: '$70',
    old_price: '$76',
  },
  {
    id: 29,
    name: 'Set',
    category: 'kids',
    image: k_set,
    new_price: '$80',
    old_price: '$87',
  },
  {
    id: 29,
    name: 'Sweater',
    category: 'kids',
    image: k_sweater,
    new_price: '$62',
    old_price: '$70',
  },
  {
    id: 29,
    name: 'Top & shorts',
    category: 'kids',
    image: k_topShorts,
    new_price: '$68',
    old_price: '$74',
  },
  {
    id: 29,
    name: 'Top & Short Dinosaur',
    category: 'kids',
    image: k_topShortsDino,
    new_price: '$70',
    old_price: '$75',
  },
  {
    id: 29,
    name: 'Tracksuit set',
    category: 'kids',
    image: k_tracksuitSet,
    new_price: '$40',
    old_price: '$46',
  },
  {
    id: 29,
    name: 'Warm Jumpsuit',
    category: 'kids',
    image: k_warmjumpsuit,
    new_price: '$60',
    old_price: '$67',
  },
];
export default all_product;
