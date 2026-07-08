// Single source of truth for the Motherland Cafe demo.
// Swap this file's exports to reskin the entire site for another cafe.

const IMG = '/images/motherland';

export const motherlandData = {
  slug: 'motherland',
  brand: {
    name: 'Motherland Cafe',
    wordmark: 'Motherland Cafe',
    tagline: 'Chowringhee · Kolkata',
    established: 'Est. Kolkata'
  },

  nav: [
    { label: 'The Space', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Reserve', href: '#reserve' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit', href: '#location' }
  ],

  hero: {
    eyebrow: '4.7 ★ · 2,535 Google reviews · Open 8 AM – 9:30 PM',
    headline: 'Where Chowringhee comes to work, eat, and stay a while.',
    sub: "Coffee, comfort food, and a table that's yours for as long as you need it. Open 8 AM to 9:30 PM, every day.",
    primaryCta: { label: 'Reserve a table', href: '#reserve' },
    secondaryCta: { label: 'See the menu', href: '#menu' },
    image: `${IMG}/01.jpg`,
    imageAlt: "Motherland Cafe's warm interior, Chowringhee, Kolkata",
    ratingBadge: { score: '4.7', label: 'on Google', reviews: '2,535 reviews' },
    hoursPill: 'Open today · 8:00 AM – 9:30 PM'
  },

  about: {
    eyebrow: 'The Space',
    headline: 'A cafe that lives at the pace of your day.',
    body: [
      "Tucked into Chowringhee Mansion on Dr. Md. Ishaque Road, Motherland is the kind of place you walk into for a cortado and end up spending an afternoon. Sunlit corners, a menu that runs breakfast through dinner, and staff who remember your usual by the third visit.",
      "Reliable wifi, real plug points, and tables built for a laptop plus a plate — a genuine work-friendly cafe that still feels like a cafe, not a coworking floor."
    ],
    image: `${IMG}/02.jpg`,
    imageAlt: 'A quiet corner at Motherland with natural light',
    amenities: [
      { label: 'Fast wifi', icon: 'wifi' },
      { label: 'Work-friendly', icon: 'laptop' },
      { label: 'All-day breakfast', icon: 'sun' },
      { label: 'Vegetarian & vegan', icon: 'leaf' },
      { label: 'Gluten-free options', icon: 'wheat' },
      { label: 'Indoor seating', icon: 'chair' },
      { label: 'Card & UPI', icon: 'card' },
      { label: 'Takeaway & delivery', icon: 'bag' }
    ]
  },

  menu: {
    eyebrow: 'On the menu',
    headline: 'The plates and pours regulars keep coming back for.',
    sub: 'A cafe menu built around all-day breakfast, third-wave coffee and honest comfort food. Full menu on request.',
    items: [
      {
        title: 'Avocado Toast',
        category: 'All-day breakfast',
        description: 'Smashed avocado, chilli oil, poached egg on sourdough. The most-loved plate on the menu.',
        image: `${IMG}/03.jpg`
      },
      {
        title: 'Cheesecake of the Day',
        category: 'From the bakery',
        description: 'Rotating flavours from our pastry counter. Ask what came out of the oven this morning.',
        image: `${IMG}/04.jpg`
      },
      {
        title: 'Cortado & Specialty Coffee',
        category: 'Coffee bar',
        description: 'Espresso pulled tight, milk textured fine. Also on offer: pour-overs, cold brew and kombucha on tap.',
        image: `${IMG}/06.jpg`
      },
      {
        title: 'Handmade Pasta',
        category: 'From the kitchen',
        description: 'Tagliatelle and rigatoni tossed to order — a Chowringhee lunch that punches above its price.',
        image: `${IMG}/05.jpg`
      },
      {
        title: 'Crepes & Weekend Brunch',
        category: 'Weekend menu',
        description: 'Sweet and savoury crepes, a proper brunch spread — the reason weekend tables book out.',
        image: `${IMG}/07.jpg`
      }
    ]
  },

  reserve: {
    eyebrow: 'Book a table',
    headline: 'Reserve a table — or a desk for the day.',
    sub: "We'll confirm on WhatsApp within a few minutes. Weekends fill fast — try to book by Thursday.",
    image: `${IMG}/02.jpg`,
    whatsappNumber: '919748077790',
    perks: [
      'Confirmation on WhatsApp within minutes',
      'Free rebooking up to 2 hours before your slot',
      'Groups of 6+ — reply to the confirmation and we\'ll pull tables together'
    ]
  },

  reviews: {
    eyebrow: 'Guest book',
    headline: 'What Chowringhee is saying.',
    aggregate: { score: '4.7', reviews: '2,535', source: 'Google' },
    items: [
      {
        author: 'Ankit Mishra',
        badge: 'Local Guide · 97 reviews',
        rating: 5,
        body: 'Loved everything about this place! Location, food, atmosphere, staff behavior and price — all of them on point.',
        when: '2 months ago'
      },
      {
        author: 'Aritra Basak',
        badge: 'Local Guide · 39 reviews',
        rating: 5,
        body: 'The best cafe out there in that area. From the food to the ambience everything is very soothing and superb. A must-try place for anyone looking for a good, calm cafe to hang out.',
        when: '9 months ago'
      },
      {
        author: 'Google visitor',
        badge: 'Verified review',
        rating: 5,
        body: 'The ambiance, the design, the members really know their place and how to run it. Great food, great coffee, great vibe.',
        when: 'Recent'
      }
    ]
  },

  location: {
    eyebrow: 'Find us',
    headline: 'A minute from Park Street. Easier by foot than by car.',
    address: 'Block-D, A/3 Dr. Md. Ishaque Road (formerly Kyd Street), Chowringhee Mansion, Kolkata, West Bengal 700016',
    placeId: 'ChIJ0TEkW1Z3AjoR8aRW6XSq528',
    mapsUrl: 'https://maps.google.com/?cid=8063601076937860337',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Motherland+Cafe+Kolkata&destination_place_id=ChIJ0TEkW1Z3AjoR8aRW6XSq528',
    plusCode: 'H942+78 Kolkata, West Bengal',
    hours: [
      { day: 'Monday', open: '8:00 AM', close: '9:30 PM' },
      { day: 'Tuesday', open: '8:00 AM', close: '9:30 PM' },
      { day: 'Wednesday', open: '8:00 AM', close: '9:30 PM' },
      { day: 'Thursday', open: '8:00 AM', close: '9:30 PM' },
      { day: 'Friday', open: '8:00 AM', close: '9:30 PM' },
      { day: 'Saturday', open: '8:00 AM', close: '9:30 PM' },
      { day: 'Sunday', open: '8:00 AM', close: '9:30 PM' }
    ],
    modes: ['Dine-in', 'Drive-through', 'Takeaway', 'No-contact delivery']
  },

  contact: {
    eyebrow: 'Say hi',
    headline: "Questions, events, or a table for twelve?",
    sub: 'The fastest way to reach us is WhatsApp. We usually reply within the hour during opening hours.',
    phone: '+91 97480 77790',
    phoneTel: '+919748077790',
    whatsappNumber: '919748077790',
    whatsappText: "Hi Motherland — I saw your website and wanted to get in touch.",
    email: 'hello@motherlandcafe.in',
    socials: [
      { label: 'Instagram', href: 'https://www.instagram.com/', handle: '@motherlandcafe' }
    ]
  },

  footer: {
    tagline: "Chowringhee's all-day cafe & coworking space.",
    columns: [
      {
        title: 'Visit',
        links: [
          { label: 'Directions', href: 'https://www.google.com/maps/dir/?api=1&destination=Motherland+Cafe+Kolkata&destination_place_id=ChIJ0TEkW1Z3AjoR8aRW6XSq528' },
          { label: 'Hours', href: '#location' }
        ]
      },
      {
        title: 'Explore',
        links: [
          { label: 'The Space', href: '#about' },
          { label: 'Menu', href: '#menu' },
          { label: 'Reviews', href: '#reviews' }
        ]
      },
      {
        title: 'Book',
        links: [
          { label: 'Reserve a table', href: '#reserve' },
          { label: 'Reserve a desk', href: '#reserve' },
          { label: 'Private events', href: '#contact' }
        ]
      }
    ]
  }
};

export default motherlandData;
