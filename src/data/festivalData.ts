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
    phone: '+91 9441424850',
    // email: 'ganesh.committee@example.com',
    address: 'Community Hall, Sector 4 Layout, Pune, MH 411014',
  },
};

export const schedule: ScheduleEvent[] = [
  {
    day: 1,
    date: 'Sep 14, 2026',
    title: 'Stapana, Pooja, Books Distribution',
    time: '6:30 PM Onwards',
    description: "The festival begins with the ceremonial installation of Lord Ganesha's idol, followed by pooja and the distribution of books to the community.",
    highlight: true,
  },
  {
    day: 2,
    date: 'Sep 15, 2026',
    title: 'Pooja, Kids Activity',
    time: '7:00 PM Onwards',
    description:
      'Evening pooja followed by engaging kids activities for the children of our community.',
  },
  {
    day: 3,
    date: 'Sep 16, 2026',
    title: 'Pooja',
    time: '7:00 PM Onwards',
    description:
      'Evening pooja celebration dedicated to Lord Ganesha.',
    highlight: true,
  },
  {
    day: 4,
    date: 'Sep 17, 2026',
    title: 'Pooja, Games, Cultural Programs',
    time: '7:00 PM Onwards',
    description:
      'Evening pooja followed by games and cultural programs for the entire community.',
  },
  {
    day: 5,
    date: 'Sep 18, 2026',
    title: 'Homam & Nimarjanam (Immersion) Procession',
    time: '5:00 AM & 3:00 PM Onwards',
    description:
      'Early morning homam followed by the grand farewell procession to the immersion point in the afternoon, with heartfelt chants of "Ganpati Bappa Morya!"',
    highlight: true,
  },
];

export const galleryYears: GalleryYear[] = [
  {
    year: 2025,
    theme: 'Unity in Devotion',
    photos: [
      { url: 'https://res.cloudinary.com/izqpbjti/image/upload/v1789309590/main-1.jpg', alt: 'Man carrying Ganesha idol', caption: 'Devotee carrying the idol' },
      { url: 'https://res.cloudinary.com/izqpbjti/image/upload/v1789309590/kids-2.jpg', alt: 'Ganesh statue procession', caption: 'Festival procession' },
      { url: 'https://res.cloudinary.com/izqpbjti/image/upload/v1789309591/final.jpg', alt: 'Marigold garland', caption: 'Orange marigold garlands' },
    ],
  },
  {
    year: 2024,
    theme: 'Eco-Ganesh: A Green Celebration',
    photos: [
      { url: 'https://res.cloudinary.com/izqpbjti/image/upload/f_auto,q_auto/2024-3-M', alt: 'Ganesha idols with flowers', caption: 'Idol adorned with offerings' },
      { url: 'https://res.cloudinary.com/izqpbjti/image/upload/v1787390778/2024-1-main.jpg', alt: 'Grand Ganesha procession', caption: 'Grand procession in Vadodara' },
      { url: 'https://res.cloudinary.com/izqpbjti/image/upload/v1787390776/2024-2-GRP.jpg', alt: 'Decorated Ganesh idol', caption: 'Exquisitely decorated idol' },
      { url: 'https://res.cloudinary.com/izqpbjti/image/upload/v1789308125/2024-homam.jpg', alt: 'homam', caption: 'homam' },
    ],
  },
  {
    year: 2023,
    theme: 'Tradition Reborn',
    photos: [
      { url: 'https://res.cloudinary.com/izqpbjti/image/upload/v1789308618/main-1-24.jpg', alt: 'Ganesh Chaturthi Mumbai crowd', caption: 'Celebration in Mumbai' },
      { url: 'https://res.cloudinary.com/izqpbjti/image/upload/v1789308618/group-3-24.jpg', alt: 'Colorful Ganesh idol Mumbai', caption: 'Colorful idol in Mumbai' },
      { url: 'https://res.cloudinary.com/izqpbjti/image/upload/v1789308618/group-3-24.jpg', alt: 'Flower decoration', caption: 'Traditional flower decoration' },
    ],
  },
];

export const donationInfo = {
  upiId: 'ganeshcommittee@upi',
  upiNumber: '+91 9441424850',
  contactPerson: 'Ragesh',
};
