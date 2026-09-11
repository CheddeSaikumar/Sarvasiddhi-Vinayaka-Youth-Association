export interface ScheduleEvent {
  day: number;
  date: string;
  title: string;
  time: string;
  description: string;
  highlight?: boolean;
}

export interface GalleryYear {
  year: number;
  theme: string;
  photos: { url: string; alt: string; caption: string }[];
}

export const committeeInfo = {
  name: 'Sarvasiddhi Vinayaka Youth Association',
  tagline: 'Devotion • Culture • Community',
  established: 2009,
  description:
    'For over 15 years, the Sarvasiddhi Vinayaka Youth Association has brought our neighborhood together to celebrate Ganesh Chaturthi with grand devotion, cultural programs, and community service. What began as a small gathering has grown into one of the most beloved festivals in our area.',
  festivalDates: 'September 14 – September 18, 2026',
  festivalStartISO: '2026-09-14T17:00:00',
  location: 'Community Mandap, Sector 4 Layout, Pune, Maharashtra 411014',
  contact: {
    phone: '+91 98765 43210',
    email: 'ganesh.committee@example.com',
    address: 'Community Hall, Sector 4 Layout, Pune, MH 411014',
  },
};

export const schedule: ScheduleEvent[] = [
  {
    day: 1,
    date: 'Sep 14, 2026',
    title: 'Ganesh Sthapana & Evening Aarti',
    time: '5:00 PM – 9:00 PM',
    description:
      'The festival begins with the ceremonial installation of Lord Ganesha’s idol at the community mandap, accompanied by Vedic chants, pran pratishtha, and the first evening aarti.',
    highlight: true,
  },
  {
    day: 2,
    date: 'Sep 15, 2026',
    title: 'Evening Aarti & Children’s Cultural Program',
    time: '6:00 PM – 9:00 PM',
    description:
      'Daily evening aarti followed by dance, drama, and music performed by the children of our community, celebrating the stories of Lord Ganesha. Prasad distribution after aarti.',
  },
  {
    day: 3,
    date: 'Sep 16, 2026',
    title: 'Bhajan Sandhya',
    time: '7:00 PM – 9:30 PM',
    description:
      'A soulful evening of devotional bhajans led by renowned local artists and our community choir, followed by evening aarti and prasad.',
    highlight: true,
  },
  {
    day: 4,
    date: 'Sep 17, 2026',
    title: 'Rangoli Contest & Evening Aarti',
    time: '5:30 PM – 9:00 PM',
    description:
      'Annual rangoli competition with prizes for the most creative designs, followed by evening aarti. Community feast (Mahaprasad) served to all attendees after aarti.',
  },
  {
    day: 5,
    date: 'Sep 18, 2026',
    title: 'Ganesh Visarjan (Farewell)',
    time: '5:00 PM – 9:00 PM',
    description:
      'Final evening aarti followed by the grand farewell procession to the immersion point, with dhol, lezim, and heartfelt chants of “Ganpati Bappa Morya!”',
    highlight: true,
  },
];

export const galleryYears: GalleryYear[] = [
  {
    year: 2024,
    theme: 'Eco-Ganesh: A Green Celebration',
    photos: [
      { url: 'https://res.cloudinary.com/izqpbjti/image/upload/f_auto,q_auto/2024-3-M', alt: 'Ganesha idols with flowers', caption: 'Idol adorned with offerings' },
      { url: 'https://res.cloudinary.com/izqpbjti/image/upload/v1787390778/2024-1-main.jpg', alt: 'Grand Ganesha procession', caption: 'Grand procession in Vadodara' },
      { url: 'https://res.cloudinary.com/izqpbjti/image/upload/v1787390776/2024-2-GRP.jpg', alt: 'Decorated Ganesh idol', caption: 'Exquisitely decorated idol' },
      { url: 'https://images.pexels.com/photos/35591621/pexels-photo-35591621.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Flower arrangements', caption: 'Festive floral arrangements' },
      { url: 'https://images.pexels.com/photos/32967231/pexels-photo-32967231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Ganesh idol with flowers', caption: 'Idol with marigold garlands' },
      { url: 'https://images.pexels.com/photos/12087682/pexels-photo-12087682.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Marigold garlands in market', caption: 'Marigold market decoration' },
    ],
  },
  {
    year: 2023,
    theme: 'Tradition Reborn',
    photos: [
      { url: 'https://images.pexels.com/photos/9743193/pexels-photo-9743193.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Ganesh Chaturthi Mumbai crowd', caption: 'Celebration in Mumbai' },
      { url: 'https://images.pexels.com/photos/30184157/pexels-photo-30184157.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Colorful Ganesh idol Mumbai', caption: 'Colorful idol in Mumbai' },
      { url: 'https://images.pexels.com/photos/13944314/pexels-photo-13944314.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Flower decoration', caption: 'Traditional flower decoration' },
      { url: 'https://images.pexels.com/photos/8819317/pexels-photo-8819317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Indian attire with marigolds', caption: 'Festive attire and marigolds' },
      { url: 'https://images.pexels.com/photos/37531064/pexels-photo-37531064.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Marigolds and coconut ritual', caption: 'Ritual arrangement' },
      { url: 'https://images.pexels.com/photos/9908090/pexels-photo-9908090.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Ganesh idol with sweets', caption: 'Idol with flowers and sweets' },
    ],
  },
  {
    year: 2022,
    theme: 'Unity in Devotion',
    photos: [
      { url: 'https://images.pexels.com/photos/10702312/pexels-photo-10702312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Man carrying Ganesha idol', caption: 'Devotee carrying the idol' },
      { url: 'https://images.pexels.com/photos/18249539/pexels-photo-18249539.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Ganesh statue procession', caption: 'Festival procession' },
      { url: 'https://images.pexels.com/photos/12718218/pexels-photo-12718218.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Marigold garland', caption: 'Orange marigold garlands' },
      { url: 'https://images.pexels.com/photos/29215357/pexels-photo-29215357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Marigolds and diyas', caption: 'Diya lighting ceremony' },
      { url: 'https://images.pexels.com/photos/34625778/pexels-photo-34625778.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Yellow marigolds', caption: 'Bright marigold display' },
      { url: 'https://images.pexels.com/photos/39062467/pexels-photo-39062467.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Ganesh celebration Mumbai', caption: 'Devotees in celebration' },
    ],
  },
  {
    year: 2021,
    theme: 'Hope & Light',
    photos: [
      { url: 'https://images.pexels.com/photos/19829756/pexels-photo-19829756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Street Ganesh Chaturthi', caption: 'Street celebration' },
      { url: 'https://images.pexels.com/photos/28157056/pexels-photo-28157056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Parade with statues', caption: 'Grand parade statues' },
      { url: 'https://images.pexels.com/photos/28113204/pexels-photo-28113204.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Ganesh parade', caption: 'Festival parade' },
      { url: 'https://images.pexels.com/photos/28113214/pexels-photo-28113214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Ganesh statue parade', caption: 'Large statue procession' },
      { url: 'https://images.pexels.com/photos/28157061/pexels-photo-28157061.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Ganesha statue parade', caption: 'Cultural artistry on display' },
      { url: 'https://images.pexels.com/photos/8887153/pexels-photo-8887153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Woman arranging flowers', caption: 'Flower arrangement ceremony' },
    ],
  },
  {
    year: 2020,
    theme: 'Devotion at Home',
    photos: [
      { url: 'https://images.pexels.com/photos/13253313/pexels-photo-13253313.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Hindu goddess statue', caption: 'Adorned deity statue' },
      { url: 'https://images.pexels.com/photos/31008400/pexels-photo-31008400.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Decorated elephants', caption: 'Festive elephants' },
      { url: 'https://images.pexels.com/photos/32771171/pexels-photo-32771171.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Chariot procession', caption: 'Traditional chariot' },
      { url: 'https://images.pexels.com/photos/34942854/pexels-photo-34942854.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Temple procession Kerala', caption: 'Temple festival procession' },
      { url: 'https://images.pexels.com/photos/15798145/pexels-photo-15798145.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Temple festival crowd', caption: 'Festival crowd gathering' },
      { url: 'https://images.pexels.com/photos/28635654/pexels-photo-28635654.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Theyyam dance', caption: 'Cultural performance' },
    ],
  },
];

export const donationInfo = {
  upiId: 'ganeshcommittee@upi',
  upiNumber: '+91 98765 43210',
  contactPerson: 'Rajesh Sharma (Treasurer)',
};
