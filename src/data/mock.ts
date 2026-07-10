// Mock data for Sunny Ceylon Travels
export type Tour = {
  id: string; slug: string; title: string; location: string; days: number; nights: number;
  price: number; rating: number; reviews: number; image: string; category: string; featured?: boolean;
  description: string; highlights: string[];
};
export type Destination = { id: string; name: string; region: string; image: string; tours: number; blurb: string };
export type Hotel = { id: string; name: string; location: string; stars: number; price: number; image: string; rating: number };
export type Activity = { id: string; name: string; image: string; duration: string; price: number; icon: string };
export type Vehicle = { id: string; name: string; type: string; seats: number; image: string; pricePerDay: number; features: string[] };
export type Review = { id: string; name: string; country: string; avatar: string; rating: number; text: string; tour: string };
export type BlogPost = { id: string; slug: string; title: string; excerpt: string; image: string; date: string; author: string; category: string; readTime: number };

const u = (id: string, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const tours: Tour[] = [
  { id: "t1", slug: "cultural-triangle-luxury", title: "Cultural Triangle Luxury Expedition", location: "Sigiriya · Kandy · Dambulla", days: 7, nights: 6, price: 1890, rating: 4.9, reviews: 214, image: u("photo-1588598198321-9735fd52455b"), category: "Cultural", featured: true, description: "An immersive journey through Sri Lanka's ancient kingdoms with private guides and heritage stays.", highlights: ["Private Sigiriya sunrise climb", "Temple of the Tooth ceremony", "Cave temple tour"] },
  { id: "t2", slug: "tea-country-escape", title: "Tea Country Escape by Rail", location: "Nuwara Eliya · Ella", days: 5, nights: 4, price: 1240, rating: 4.8, reviews: 168, image: u("photo-1546484475-7f7bd55792da"), category: "Scenic", featured: true, description: "Ride the world's most beautiful train through emerald tea estates.", highlights: ["First-class observation carriage", "Estate bungalow stay", "Nine Arches Bridge"] },
  { id: "t3", slug: "southern-beach-honeymoon", title: "Southern Beach Honeymoon", location: "Galle · Mirissa · Tangalle", days: 8, nights: 7, price: 2450, rating: 5.0, reviews: 92, image: u("photo-1507525428034-b723cf961d3e"), category: "Beach", featured: true, description: "Sun-drenched shores, private villas and candle-lit dinners on the sand.", highlights: ["Private villa with pool", "Whale watching cruise", "Sunset catamaran"] },
  { id: "t4", slug: "yala-wildlife-safari", title: "Yala Wildlife Safari", location: "Yala National Park", days: 3, nights: 2, price: 780, rating: 4.7, reviews: 145, image: u("photo-1516426122078-c23e76319801"), category: "Wildlife", description: "Track leopards and elephants in Sri Lanka's premier national park.", highlights: ["Two full-day game drives", "Luxury tented camp", "Naturalist guide"] },
  { id: "t5", slug: "ayurveda-wellness-retreat", title: "Ayurveda Wellness Retreat", location: "Bentota", days: 6, nights: 5, price: 1650, rating: 4.9, reviews: 87, image: u("photo-1540555700478-4be289fbecef"), category: "Wellness", description: "Ancient healing traditions in a beachfront sanctuary.", highlights: ["Daily treatments", "Yoga & meditation", "Chef-crafted cuisine"] },
  { id: "t6", slug: "highland-hiking-adventure", title: "Highland Hiking Adventure", location: "Knuckles · Horton Plains", days: 4, nights: 3, price: 890, rating: 4.6, reviews: 63, image: u("photo-1464822759023-fed622ff2c3b"), category: "Adventure", description: "Trek cloud forests and stand at World's End at dawn.", highlights: ["Guided summit hikes", "Eco-lodge stays", "Mini-Adam's Peak sunrise"] },
];

export const destinations: Destination[] = [
  { id: "d1", name: "Sigiriya", region: "Cultural Triangle", image: u("photo-1588598198321-9735fd52455b"), tours: 18, blurb: "The 5th-century rock fortress rising from jungle plains." },
  { id: "d2", name: "Ella", region: "Hill Country", image: u("photo-1546484475-7f7bd55792da"), tours: 22, blurb: "Misty peaks, waterfalls, and the iconic Nine Arches Bridge." },
  { id: "d3", name: "Galle", region: "Southern Coast", image: "https://glitterrebel.com/wp-content/uploads/2021/05/Galle-baach-1536x1152.jpg", tours: 15, blurb: "A colonial fort city framed by the Indian Ocean." },
  { id: "d4", name: "Kandy", region: "Central Province", image: "https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/64166deb-5566-459e-9c4d-a4d8413c97fd/The_Common_Wanderer_-4336.jpg", tours: 20, blurb: "Sacred lakeside capital of the last Sinhalese kingdom." },
  { id: "d5", name: "Mirissa", region: "Southern Coast", image: u("photo-1507525428034-b723cf961d3e"), tours: 12, blurb: "Palm-fringed crescent beach and blue whale waters." },
  { id: "d6", name: "Yala", region: "South-East", image: u("photo-1516426122078-c23e76319801"), tours: 9, blurb: "Home to the world's densest leopard population." },
];

export const hotels: Hotel[] = [
  { id: "h1", name: "Cape Weligama", location: "Weligama", stars: 5, price: 620, image: u("photo-1566073771259-6a8506099945"), rating: 4.9 },
  { id: "h2", name: "Ceylon Tea Trails", location: "Hatton", stars: 5, price: 780, image: u("photo-1582719508461-905c673771fd"), rating: 4.95 },
  { id: "h3", name: "Amangalla", location: "Galle Fort", stars: 5, price: 890, image: u("photo-1571003123894-1f0594d2b5d9"), rating: 4.9 },
  { id: "h4", name: "Wild Coast Tented Lodge", location: "Yala", stars: 5, price: 720, image: u("photo-1544161515-4ab6ce6db874"), rating: 4.85 },
];

export const activities: Activity[] = [
  { id: "a1", name: "Whale Watching", image: u("photo-1568430462989-44163eb1752f"), duration: "5h", price: 95, icon: "Waves" },
  { id: "a2", name: "Surfing Lessons", image: u("photo-1502680390469-be75c86b636f"), duration: "2h", price: 45, icon: "Waves" },
  { id: "a3", name: "Hot Air Balloon", image: u("photo-1507608616759-54f48f0af0ee"), duration: "3h", price: 240, icon: "Wind" },
  { id: "a4", name: "White Water Rafting", image: u("photo-1530866495561-507c9faab2ed"), duration: "4h", price: 65, icon: "Waves" },
  { id: "a5", name: "Elephant Sanctuary", image: u("photo-1503656142023-618e7d1f435a"), duration: "6h", price: 80, icon: "TreePine" },
  { id: "a6", name: "Cooking Class", image: u("photo-1556909114-f6e7ad7d3136"), duration: "3h", price: 55, icon: "ChefHat" },
];

export const vehicles: Vehicle[] = [
  { id: "v1", name: "Toyota KDH Van", type: "Van · 1–9 pax", seats: 9, image: u("photo-1494976388531-d1058494cdd8"), pricePerDay: 85, features: ["AC", "Wi-Fi", "English chauffeur"] },
  { id: "v2", name: "Mercedes E-Class", type: "Luxury Sedan · 1–3 pax", seats: 3, image: u("photo-1503376780353-7e6692767b70"), pricePerDay: 220, features: ["Leather", "Chilled water", "Chauffeur"] },
  { id: "v3", name: "Toyota Land Cruiser", type: "SUV · 1–5 pax", seats: 5, image: u("photo-1533473359331-0135ef1b58bf"), pricePerDay: 190, features: ["4x4", "Roof rack", "Safari-ready"] },
  { id: "v4", name: "Mercedes Sprinter", type: "Luxury Coach · 1–14 pax", seats: 14, image: u("photo-1570733577524-3a047079e80d"), pricePerDay: 320, features: ["Reclining seats", "USB ports", "Ambient lighting"] },
];

export const reviews: Review[] = [
  { id: "r1", name: "Isabella Moreau", country: "France", avatar: u("photo-1494790108377-be9c29b29330", 200), rating: 5, text: "Truly the trip of a lifetime. Every detail was curated with such elegance and warmth. We felt like the only travellers in Sri Lanka.", tour: "Cultural Triangle Luxury" },
  { id: "r2", name: "David Chen", country: "Singapore", avatar: u("photo-1500648767791-00dcc994a43e", 200), rating: 5, text: "From the private chauffeur to the boutique hotels, everything exceeded our expectations. Sunny Ceylon simply understands luxury.", tour: "Tea Country Escape" },
  { id: "r3", name: "Amelia Roberts", country: "United Kingdom", avatar: u("photo-1438761681033-6461ffad8d80", 200), rating: 5, text: "A honeymoon we will talk about forever. The villa in Mirissa, the sunset cruise — flawless.", tour: "Southern Beach Honeymoon" },
  { id: "r4", name: "Marco Rossi", country: "Italy", avatar: u("photo-1507003211169-0a1dd7228f2d", 200), rating: 5, text: "Impeccable service and breathtaking landscapes. Our guide's knowledge brought the ancient sites to life.", tour: "Sigiriya Heritage" },
];

export const blogPosts: BlogPost[] = [
  { id: "b1", slug: "hidden-beaches-of-southern-sri-lanka", title: "10 Hidden Beaches of Southern Sri Lanka", excerpt: "Skip the crowds and discover secluded shores where turquoise waters meet swaying palms.", image: u("photo-1507525428034-b723cf961d3e"), date: "Mar 12, 2026", author: "Ayesha Perera", category: "Beaches", readTime: 7 },
  { id: "b2", slug: "ultimate-tea-country-guide", title: "The Ultimate Tea Country Guide", excerpt: "From colonial bungalows to hidden waterfalls — a slow travel guide to the hill country.", image: u("photo-1546484475-7f7bd55792da"), date: "Feb 28, 2026", author: "Ravi Silva", category: "Culture", readTime: 9 },
  { id: "b3", slug: "spotting-leopards-in-yala", title: "Spotting Leopards in Yala: A Photographer's Journal", excerpt: "Dawn drives, patient waits, and the moment a leopard crossed our path at Block One.", image: u("photo-1516426122078-c23e76319801"), date: "Feb 10, 2026", author: "Nadia Fernando", category: "Wildlife", readTime: 6 },
];

export const stats = [
  { label: "Happy Travellers", value: 12000, suffix: "+" },
  { label: "Curated Tours", value: 180, suffix: "" },
  { label: "Luxury Partners", value: 65, suffix: "" },
  { label: "Years of Craft", value: 18, suffix: "" },
];

export const trustedBy = ["Condé Nast", "Travel + Leisure", "Lonely Planet", "National Geographic", "Forbes", "BBC Travel"];

export const faqs = [
  { q: "Do you arrange visas for Sri Lanka?", a: "We guide every guest through the ETA process and can arrange fast-track approval at no additional cost." },
  { q: "Are your tours fully customisable?", a: "Absolutely. Every itinerary is designed around your interests, pace, and celebrations." },
  { q: "What is included in the price?", a: "Accommodation, private chauffeur, all transfers, daily breakfast, entrance fees, and 24/7 concierge." },
  { q: "Is Sri Lanka safe for solo and female travellers?", a: "Yes. Sri Lanka is one of Asia's safest destinations, and our chauffeur-guides ensure a seamless experience." },
  { q: "Can you cater dietary requirements?", a: "Vegan, vegetarian, gluten-free and allergy-safe menus are arranged in advance with every property." },
  { q: "When is the best time to visit?", a: "December–April is ideal for the south and cultural triangle; May–September suits the east coast." },
];

export const galleryImages = [
  "photo-1588598198321-9735fd52455b","photo-1546484475-7f7bd55792da","photo-1507525428034-b723cf961d3e",
  "photo-1516426122078-c23e76319801","photo-1580835845083-2adcd8ee6291","photo-1602898430243-9b7dfaeae7e7",
  "photo-1568430462989-44163eb1752f","photo-1503656142023-618e7d1f435a","photo-1540555700478-4be289fbecef",
  "photo-1464822759023-fed622ff2c3b","photo-1582719508461-905c673771fd","photo-1566073771259-6a8506099945",
].map(id => u(id, 900));
