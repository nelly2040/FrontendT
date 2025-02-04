// tours.js

export const TOURS = [
  {
    id: "1",
    name: "Lake Malawi & Victoria Falls Expedition II",
    description: `Unveiling the Jewels of Africa: The Lake Malawi & Victoria Falls Expedition II

Embrace the adventure of a lifetime as we embark on an unforgettable expedition across four breathtaking African countries! Witness the raw power of Victoria Falls, one of the world's natural wonders, and lose yourself in the serenity of Lake Malawi, aptly nicknamed "The Lake of Stars."

Coming hot after our two epic international trips to Uganda (Pearl of Africa Expedition - Murchison Falls) and Ethiopia (Jade Sea Expedition - Omo Valley), this expedition traverses 4 different countries with scenic landscapes, tranquil lakes, hot springs, mountains, forests, mighty waterfalls, and tropical beaches.

Lake Malawi, aka “The Lake of Stars”, and Victoria Falls, aka "Mosi-oa-Tunya", await you on this 20-day journey.`,
    price: 2500,
    duration: "20 Days (August 1 - August 20, 2025)",
    difficulty_level: "Hard",
    max_group_size: 20,
    location: "Lake Malawi & Victoria Falls",
    start_point: "TotalEnergies Sabaki Station, Mlolongo",
    end_point: "Nairobi",
    is_active: true,
    itinerary: [
      {
        title: "Day 1 - August 1, 2025 (Fri)",
        details:
          "Kenya/Tanzania (Nairobi – Manyara). Pickup at TotalEnergies Sabaki Station, Mlolongo.",
      },
      { title: "Day 2 - August 2, 2025", details: "Tanzania (Manyara - Iringa)" },
      { title: "Day 3 - August 3, 2025", details: "Tanzania (Iringa - Mbeya)" },
      { title: "Day 4 - August 4, 2025", details: "Tanzania/Malawi (Mbeya - Chitimba)" },
      { title: "Day 5 - August 5, 2025", details: "Malawi (Chitimba - Kande)" },
      { title: "Day 6 - August 6, 2025", details: "Malawi (Rest Day)" },
      { title: "Day 7 - August 7, 2025", details: "Malawi/Zambia (Kande to Mchinji via Lilongwe)" },
      { title: "Day 8 - August 8, 2025", details: "Zambia (Chipata - Lusaka)" },
      { title: "Day 9 - August 9, 2025", details: "Zambia (Lusaka - Livingstone)" },
      { title: "Day 10 & 11 - August 10 & 11, 2025", details: "Zimbabwe/Zambia (Livingstone - Victoria Falls) (Rest Day)" },
      { title: "Day 12 - August 12, 2025", details: "Zambia (Livingstone - Lusaka)" },
      { title: "Day 13 - August 13, 2025", details: "Zambia (Lusaka – Makupula)" },
      { title: "Day 14 - August 14, 2025", details: "Zambia (Makupula) - Rest Day" },
      { title: "Day 15 - August 15, 2025", details: "Zambia/Tanzania (Makupula - Lake Tanganyika)" },
      { title: "Day 16 - August 16, 2025", details: "Zambia (Lake Tanganyika) - Rest Day" },
      { title: "Day 17 - August 17, 2025", details: "Zambia/Tanzania (Lake Tanganyika - Mbeya)" },
      { title: "Day 18 - August 18, 2025", details: "Tanzania (Mbeya - Iringa)" },
      { title: "Day 19 - August 19, 2025", details: "Tanzania (Iringa - Arusha)" },
      { title: "Day 20 - August 20, 2025 (Wed)", details: "Tanzania/Kenya (Arusha - Nairobi)" },
    ],
  },
  {
    id: "2",
    name: "Masai Mara Luxury Safari",
    description: `Experience the Great Migration in luxury and comfort. Enjoy game drives, bush dinners, and breathtaking wildlife encounters in Kenya's famed Masai Mara National Reserve. Our luxury safari offers premium accommodations, expert guides, and exclusive access to Africa's iconic wildlife.`,
    price: 1500,
    duration: "5 Days",
    difficulty_level: "Moderate",
    max_group_size: 15,
    location: "Masai Mara National Reserve",
    start_point: "Nairobi",
    end_point: "Nairobi",
    is_active: true,
    itinerary: [
      {
        title: "Day 1",
        details: "Depart from Nairobi to Masai Mara, check into the lodge, and enjoy an evening game drive.",
      },
      {
        title: "Day 2",
        details: "Full day safari exploring the Mara with a picnic lunch in the wilderness.",
      },
      {
        title: "Day 3",
        details: "Early morning game drive followed by a visit to a local Maasai village.",
      },
      {
        title: "Day 4",
        details: "Relax at the lodge with an optional bush walk and sundowner drive.",
      },
      {
        title: "Day 5",
        details: "Final game drive in the morning and return to Nairobi.",
      },
    ],
  },
  {
    id: "3",
    name: "Inferno Expedition - Suguta II",
    description: `SUGUTA VALLEY 4X4 EXPEDITION II

Suguta Valley (Suguta Mud Flats) is one of Kenya's most remote and challenging terrains. This extreme 4x4 expedition is reserved for the truly adventurous. Prepare for high temperatures, rugged roads, and an unforgettable off-road experience.`,
    price: 800,
    duration: "6 Days (31 May 2025 - 5 June 2025)",
    difficulty_level: "Hard",
    max_group_size: 12,
    location: "Suguta Valley",
    start_point: "ABC Place, Westlands",
    end_point: "Nairobi",
    is_active: true,
    itinerary: [
      {
        title: "Day 1 - 31st May 2025, Sat",
        details: "Nairobi to Maralal via Nyahururu.",
      },
      {
        title: "Day 2 - 1st June 2025",
        details: "Maralal to Baragoi.",
      },
      {
        title: "Day 3 - 2nd June 2025",
        details: "Baragoi to Suguta Valley.",
      },
      {
        title: "Day 4 - 3rd June 2025",
        details: "Suguta Valley to Baragoi.",
      },
      {
        title: "Day 5 - 4th June 2025",
        details: "Baragoi to Isiolo.",
      },
      {
        title: "Day 6 - 5th June 2025, Wed",
        details: "Isiolo to Nairobi.",
      },
    ],
  },
  {
    id: "4",
    name: "Kapedo & Silale Crater Expedition",
    description: `KAPEDO & SILALE CRATER 4X4 EXPEDITION TOUR

Discover Kenya's Rift Valley secrets on this fearless expedition. Traverse from Nairobi through Nakuru and Baringo, and camp under the stars as you explore Kapedo Falls and the majestic Silale Crater.`,
    price: 600,
    duration: "5 Days (19 October 2024 - 23 October 2024)",
    difficulty_level: "Moderate",
    max_group_size: 10,
    location: "Rift Valley, Kenya",
    start_point: "Nairobi",
    end_point: "Nairobi",
    is_active: true,
    itinerary: [
      {
        title: "Day 1 - October 19, 2024",
        details: "Nairobi to Mogotio.",
      },
      {
        title: "Day 2 - October 20, 2024",
        details: "Mogotio to Kapedo.",
      },
      {
        title: "Day 3 - October 21, 2024",
        details: "Kapedo to Silale.",
      },
      {
        title: "Day 4 - October 22, 2024",
        details: "Silale to Bogoria.",
      },
      {
        title: "Day 5 - October 23, 2024",
        details: "Back to Nairobi.",
      },
    ],
  },
  {
    id: "5",
    name: "2000kms Coast Expedition",
    description: `A 9-Day Off-Road Coastal Odyssey

Unleash the Coastal Explorer Within! Traverse Kenya's off-road trails from Tsavo to Shimba Hills and experience the pristine beaches of Malindi and Diani. Enjoy wild camping, game drives, and unforgettable seaside adventures.`,
    price: 1200,
    duration: "9 Days (Dec 26, 2024 - Jan 3, 2025)",
    difficulty_level: "Moderate",
    max_group_size: 18,
    location: "Malindi, Diani",
    start_point: "TotalEnergies Sabaki Station, Mlolongo",
    end_point: "Nairobi",
    is_active: true,
    itinerary: [
      { title: "Day 1", details: "Nairobi to Malindi." },
      { title: "Day 2", details: "Malindi - Rest Day." },
      { title: "Day 3", details: "Malindi to Diani." },
      { title: "Day 4", details: "Diani - Rest Day." },
      { title: "Day 5", details: "Shimba Hills." },
      { title: "Day 6", details: "Tsavo West." },
      { title: "Day 7", details: "Tsavo West - Rest Day." },
      { title: "Day 8", details: "Tsavo West to Amboseli." },
      { title: "Day 9", details: "Back to Nairobi." },
    ],
  },
  {
    id: "6",
    name: "Cliffhanger Overland Truck Expedition II - Overland Truck",
    description: `Welcome to the World’s End Expedition:

Step into the wild and embark on an unforgettable journey with Mara Nomads to the Malasso Viewpoint of the Lesiolo Escarpment. This overland truck expedition takes you deep into the heart of the Great Rift Valley, where towering cliffs, sweeping valleys, and vast horizons await the bold.

Discover Nature’s Masterpiece:
Gaze upon the steep drops at Malasso Viewpoint—famously dubbed “The World’s End” by explorer Sir Wilfred Thesiger—and enjoy panoramic views of the Losiolo Escarpment and the distant shimmer of Lake Turkana.

Adventure and Culture:
Experience off-grid camping, immerse yourself in Samburu culture, and witness unforgettable sunrises, sunsets, and starry nights.`,
    price: 1800,
    duration: "3 Days (June 13 – June 15, 2025)",
    difficulty_level: "Hard",
    max_group_size: 25,
    location: "Northern Kenya",
    start_point: "Outside Supreme Court, City Hall, CBD",
    end_point: "Nairobi",
    is_active: true,
    itinerary: [
      {
        title: "Day 1 - June 13, 2025 (Friday)",
        details: "Nairobi to Maralal. Pickup at the Meeting and Departure Point Outside Supreme Court, City Hall, CBD.",
      },
      {
        title: "Day 2 - June 14, 2025 (Saturday)",
        details: "Maralal to Malasso Viewpoint. Enjoy breathtaking views of the Losiolo Escarpment and the vast Rift Valley.",
      },
      {
        title: "Day 3 - June 15, 2025 (Sunday)",
        details: "Return journey from Malasso/Maralal back to Nairobi.",
      },
    ],
  },
  {
    id: "7",
    name: "Samburu Safari Adventure",
    description: `Explore the exotic Samburu National Reserve with its unique wildlife and scenic landscapes...`,
    price: { adult: 1200, child: 600 },
    priceKES: { adult: 120000, child: 60000 },
    location: "Samburu National Reserve",
    start_point: "Nairobi",
    end_point: "Nairobi",
    is_active: true,
    duration: "4 Days",
    itinerary: [
      "Day 1: Travel from Nairobi to Samburu, evening game drive",
      "Day 2-3: Full day of game drives, lunch at a lodge, cultural experiences",
      "Day 4: Final morning game drive and return to Nairobi"
    ],
  },
  {
    id: "8",
    name: "Salt Lick Safari in Taita Hills",
    description: `A unique experience at the Taita Hills Wildlife Sanctuary and Salt Lick Lodge...`,
    price: { adult: 1000, child: 500 },
    priceKES: { adult: 100000, child: 50000 },
    location: "Salt Lick, Taita Hills",
    start_point: "Nairobi",
    end_point: "Nairobi",
    is_active: true,
    duration: "3 Days",
    itinerary: [
      "Day 1: Depart Nairobi for Taita Hills, evening safari at Salt Lick",
      "Day 2: Morning and afternoon game drives in the sanctuary",
      "Day 3: Return to Nairobi after a final safari"
    ],
  },
  {
    id: "9",
    name: "Nakuru & Naivasha Explorer",
    description: `Witness the beauty of Lake Nakuru and Lake Naivasha, including game drives and boat rides...`,
    price: { adult: 900, child: 450 },
    priceKES: { adult: 90000, child: 45000 },
    location: "Nakuru & Naivasha",
    start_point: "Nairobi",
    end_point: "Nairobi",
    is_active: true,
    duration: "3 Days",
    itinerary: [
      "Day 1: Depart Nairobi for Lake Nakuru, visit the lake and its wildlife",
      "Day 2: Boat ride at Lake Naivasha, visit Crescent Island",
      "Day 3: Return to Nairobi after a morning game drive"
    ],
  },
  {
    id: "10",
    name: "Tsavo East & West Safari",
    description: `Venture through Tsavo East and West, Kenya's largest National Park...`,
    price: { adult: 950, child: 475 },
    priceKES: { adult: 95000, child: 47500 },
    location: "Tsavo East & West",
    start_point: "Nairobi",
    end_point: "Nairobi",
    is_active: true,
    duration: "4 Days",
    itinerary: [
      "Day 1: Travel to Tsavo East, evening game drive",
      "Day 2: Full day in Tsavo East with a picnic lunch",
      "Day 3: Explore Tsavo West, visit Mzima Springs",
      "Day 4: Morning game drive and return to Nairobi"
    ],
  },
  {
    id: "11",
    name: "Gede Ruins & Malindi Coastal Tour",
    description: `Explore the ancient Gede Ruins, a Swahili coastal settlement, and enjoy the beauty of Malindi...`,
    price: { adult: 700, child: 350 },
    priceKES: { adult: 70000, child: 35000 },
    location: "Gede Ruins, Malindi",
    start_point: "Nairobi",
    end_point: "Nairobi",
    is_active: true,
    duration: "2 Days",
    itinerary: [
      "Day 1: Travel to Malindi, visit the Gede Ruins",
      "Day 2: Boat tour of Malindi, visit local beaches, and return to Nairobi"
    ],
  },
  {
    id: "12",
    name: "Nairobi National Park & Museum Day Trip",
    description: `A day trip exploring Nairobi National Park and its nearby museums...`,
    price: { adult: 400, child: 200 },
    priceKES: { adult: 40000, child: 20000 },
    location: "Nairobi National Park & Museums",
    start_point: "Nairobi",
    end_point: "Nairobi",
    is_active: true,
    duration: "1 Day",
    itinerary: [
      "Morning: Game drive in Nairobi National Park",
      "Afternoon: Visit Nairobi National Museum and Giraffe Centre"
    ],
  },
  {
    id: "13",
    name: "Naivasha & Hell's Gate National Park Adventure",
    description: `Embark on a thrilling tour of Hell's Gate and Lake Naivasha...`,
    price: { adult: 800, child: 400 },
    priceKES: { adult: 80000, child: 40000 },
    location: "Naivasha & Hell's Gate",
    start_point: "Nairobi",
    end_point: "Nairobi",
    is_active: true,
    duration: "2 Days",
    itinerary: [
      "Day 1: Depart Nairobi for Hell's Gate, explore the park on foot and bike",
      "Day 2: Boat ride on Lake Naivasha, visit Crescent Island, return to Nairobi"
    ],
  },
  {
    id: "14",
    name: "Amboseli & Chyulu Hills Safari",
    description: `A wildlife-filled safari at Amboseli National Park and the scenic Chyulu Hills...`,
    price: { adult: 950, child: 475 },
    priceKES: { adult: 95000, child: 47500 },
    location: "Amboseli & Chyulu Hills",
    start_point: "Nairobi",
    end_point: "Nairobi",
    is_active: true,
    duration: "3 Days",
    itinerary: [
      "Day 1: Travel to Amboseli National Park, evening game drive",
      "Day 2: Full day game drive in Amboseli",
      "Day 3: Visit Chyulu Hills and return to Nairobi"
    ],
  }
];
