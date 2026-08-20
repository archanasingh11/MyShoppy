import { Product } from "../types";
import { ProductImages } from "../../assets";

export const PRODUCTS: Product[] = [
  // ==========================
  // Kitchen
  // ==========================

  {
    id: 1,
    name: "Premium Non-Stick Fry Pan",
    brand: "Prestige",
    description:
      "Durable non-stick frying pan with heat-resistant handle for everyday cooking.",
    category: "kitchen",
    price: 1299,
    discount: 15,
    rating: 4.8,
    stock: 24,
    featured: true,
    popular: true,
    isNew: false,
    image: ProductImages.fryPan,
  },

  {
    id: 2,
    name: "Stainless Steel Cookware Set",
    brand: "Pigeon",
    description:
      "Premium stainless steel cookware set suitable for gas and induction cooktops.",
    category: "kitchen",
    price: 3499,
    discount: 20,
    rating: 4.7,
    stock: 12,
    featured: true,
    popular: true,
    isNew: true,
    image: ProductImages.cookwareSet,
  },

  {
    id: 3,
    name: "Professional Kitchen Knife Set",
    brand: "Vinod",
    description:
      "High-quality stainless steel knives for chopping, slicing, and dicing.",
    category: "kitchen",
    price: 999,
    discount: 10,
    rating: 4.6,
    stock: 40,
    featured: false,
    popular: true,
    isNew: false,
    image: ProductImages.knife,
  },

  {
    id: 4,
    name: "Bamboo Chopping Board",
    brand: "Cello",
    description:
      "Eco-friendly bamboo chopping board with durable, scratch-resistant surface.",
    category: "kitchen",
    price: 499,
    discount: 5,
    rating: 4.5,
    stock: 36,
    featured: false,
    popular: false,
    isNew: true,
    image: ProductImages.choppingBoard,
  },

  {
    id: 5,
    name: "Measuring Cup Set",
    brand: "Home Puff",
    description:
      "Food-grade measuring cups for accurate cooking and baking measurements.",
    category: "kitchen",
    price: 349,
    discount: 12,
    rating: 4.4,
    stock: 55,
    featured: false,
    popular: false,
    isNew: false,
    image: ProductImages.measuringCups,
  },

  {
    id: 6,
    name: "Insulated Steel Water Bottle",
    brand: "Milton",
    description:
      "Double-wall insulated stainless steel bottle that keeps drinks hot or cold for hours.",
    category: "kitchen",
    price: 799,
    discount: 18,
    rating: 4.9,
    stock: 30,
    featured: true,
    popular: true,
    isNew: false,
    image: ProductImages.waterBottle,
  },

    // ==========================
  // Cleaning
  // ==========================

  {
    id: 7,
    name: "Floor Cleaner",
    brand: "Lizol",
    description:
      "Powerful floor cleaner that removes dirt, germs, and tough stains while leaving a fresh fragrance.",
    category: "cleaning",
    price: 249,
    discount: 10,
    rating: 4.7,
    stock: 45,
    featured: true,
    popular: true,
    isNew: false,
    image: ProductImages.floorCleaner,
  },

  {
    id: 8,
    name: "Glass Cleaner",
    brand: "Colin",
    description:
      "Streak-free glass cleaner for mirrors, windows, and glass surfaces.",
    category: "cleaning",
    price: 199,
    discount: 15,
    rating: 4.6,
    stock: 38,
    featured: false,
    popular: true,
    isNew: false,
    image: ProductImages.glassCleaner,
  },

  {
    id: 9,
    name: "Microfiber Cleaning Cloth",
    brand: "Scotch-Brite",
    description:
      "Soft microfiber cloth for effective dusting and cleaning without scratching surfaces.",
    category: "cleaning",
    price: 149,
    discount: 5,
    rating: 4.5,
    stock: 60,
    featured: false,
    popular: false,
    isNew: true,
    image: ProductImages.cleaningCloth,
  },

  {
    id: 10,
    name: "Mop with Bucket",
    brand: "Gala",
    description:
      "Spin mop with bucket for convenient and efficient floor cleaning.",
    category: "cleaning",
    price: 1299,
    discount: 20,
    rating: 4.8,
    stock: 18,
    featured: true,
    popular: true,
    isNew: false,
    image: ProductImages.mopBucket,
  },

  {
    id: 11,
    name: "Soft Broom",
    brand: "Gala",
    description:
      "Lightweight broom with soft bristles for daily indoor cleaning.",
    category: "cleaning",
    price: 299,
    discount: 8,
    rating: 4.4,
    stock: 55,
    featured: false,
    popular: false,
    isNew: false,
    image: ProductImages.broom,
  },

  {
    id: 12,
    name: "Toilet Cleaner Gel",
    brand: "Harpic",
    description:
      "Thick toilet cleaning gel that removes stains, kills germs, and eliminates odors.",
    category: "cleaning",
    price: 179,
    discount: 12,
    rating: 4.7,
    stock: 42,
    featured: true,
    popular: true,
    isNew: true,
    image: ProductImages.toiletCleaner,
  },

    // ==========================
  // Home Decor
  // ==========================

  {
    id: 13,
    name: "Ceramic Flower Vase",
    brand: "Home Centre",
    description:
      "Elegant ceramic flower vase that enhances the beauty of your living room, bedroom, or office.",
    category: "decor",
    price: 899,
    discount: 15,
    rating: 4.8,
    stock: 20,
    featured: true,
    popular: true,
    isNew: false,
    image: ProductImages.vase,
  },

  {
    id: 14,
    name: "Modern Wall Clock",
    brand: "Ajanta",
    description:
      "Stylish wall clock with a silent movement and modern design for your home.",
    category: "decor",
    price: 1199,
    discount: 20,
    rating: 4.7,
    stock: 18,
    featured: true,
    popular: true,
    isNew: true,
    image: ProductImages.wallClock,
  },

  {
    id: 15,
    name: "Decorative Plant Pot",
    brand: "IKEA",
    description:
      "Minimalist decorative plant pot suitable for indoor plants and modern interiors.",
    category: "decor",
    price: 499,
    discount: 10,
    rating: 4.5,
    stock: 35,
    featured: false,
    popular: false,
    isNew: false,
    image: ProductImages.indoorPlant,
  },

  {
    id: 16,
    name: "Printed Cushion Cover",
    brand: "Spaces",
    description:
      "Soft cotton cushion cover with elegant prints to brighten up your sofa or bed.",
    category: "decor",
    price: 349,
    discount: 12,
    rating: 4.6,
    stock: 50,
    featured: false,
    popular: true,
    isNew: false,
    image: ProductImages.cushionCover,
  },

  {
    id: 17,
    name: "LED Table Lamp",
    brand: "Philips",
    description:
      "Energy-efficient LED table lamp with adjustable brightness for study and bedside use.",
    category: "decor",
    price: 1499,
    discount: 18,
    rating: 4.9,
    stock: 16,
    featured: true,
    popular: true,
    isNew: true,
    image: ProductImages.tableLamp,
  },

  {
    id: 18,
    name: "Artificial Indoor Plant",
    brand: "Home Centre",
    description:
      "Lifelike artificial indoor plant that adds greenery without requiring maintenance.",
    category: "decor",
    price: 699,
    discount: 8,
    rating: 4.7,
    stock: 28,
    featured: false,
    popular: false,
    isNew: true,
    image: ProductImages.artificialPlant,
  },

    // ==========================
  // Storage
  // ==========================

  {
    id: 19,
    name: "Multipurpose Storage Box",
    brand: "Cello",
    description:
      "Durable plastic storage box with lid, perfect for organizing clothes, toys, and household items.",
    category: "storage",
    price: 699,
    discount: 15,
    rating: 4.7,
    stock: 32,
    featured: true,
    popular: true,
    isNew: false,
    image: ProductImages.storageBox,
  },

  {
    id: 20,
    name: "Laundry Basket",
    brand: "Nayasa",
    description:
      "Lightweight laundry basket with ventilation holes and sturdy handles for easy carrying.",
    category: "storage",
    price: 499,
    discount: 10,
    rating: 4.5,
    stock: 28,
    featured: false,
    popular: true,
    isNew: false,
    image: ProductImages.laundryBasket,
  },

  {
    id: 21,
    name: "Drawer Organizer",
    brand: "Amazon Basics",
    description:
      "Compact drawer organizer to neatly arrange cosmetics, stationery, and accessories.",
    category: "storage",
    price: 399,
    discount: 12,
    rating: 4.6,
    stock: 45,
    featured: false,
    popular: false,
    isNew: true,
    image: ProductImages.drawerOrganizer,
  },

  {
    id: 22,
    name: "Shoe Rack",
    brand: "HomeTown",
    description:
      "Space-saving shoe rack with multiple shelves to keep footwear organized.",
    category: "storage",
    price: 1499,
    discount: 20,
    rating: 4.8,
    stock: 18,
    featured: true,
    popular: true,
    isNew: true,
    image: ProductImages.shoeRack,
  },

  {
    id: 23,
    name: "Wardrobe Organizer",
    brand: "IKEA",
    description:
      "Foldable wardrobe organizer for neatly storing clothes, towels, and accessories.",
    category: "storage",
    price: 599,
    discount: 8,
    rating: 4.5,
    stock: 30,
    featured: false,
    popular: false,
    isNew: false,
    image: ProductImages.wardrobeOrganizer,
  },

  {
    id: 24,
    name: "Airtight Container Set",
    brand: "Milton",
    description:
      "Set of airtight food storage containers that keep groceries fresh and organized.",
    category: "storage",
    price: 999,
    discount: 18,
    rating: 4.9,
    stock: 22,
    featured: true,
    popular: true,
    isNew: false,
    image: ProductImages.containerSet,
  },

    // ==========================
  // Utility
  // ==========================

  {
    id: 25,
    name: "Extension Board",
    brand: "Havells",
    description:
      "6-socket extension board with surge protection for safely powering multiple devices.",
    category: "utility",
    price: 899,
    discount: 15,
    rating: 4.8,
    stock: 25,
    featured: true,
    popular: true,
    isNew: false,
    image: ProductImages.extensionBoard,
  },

  {
    id: 26,
    name: "Rechargeable LED Torch",
    brand: "Philips",
    description:
      "Bright rechargeable LED torch with long battery life for emergencies and outdoor use.",
    category: "utility",
    price: 699,
    discount: 10,
    rating: 4.7,
    stock: 30,
    featured: false,
    popular: true,
    isNew: true,
    image: ProductImages.emergencyTorch,
  },

  {
    id: 27,
    name: "Home Tool Kit",
    brand: "Bosch",
    description:
      "Complete household tool kit including screwdriver, hammer, pliers, and measuring tape.",
    category: "utility",
    price: 1999,
    discount: 20,
    rating: 4.9,
    stock: 15,
    featured: true,
    popular: true,
    isNew: false,
    image: ProductImages.toolKit,
  },

  {
    id: 28,
    name: "Plastic Hangers (Pack of 10)",
    brand: "Cello",
    description:
      "Strong and durable plastic hangers suitable for shirts, dresses, and jackets.",
    category: "utility",
    price: 349,
    discount: 8,
    rating: 4.5,
    stock: 60,
    featured: false,
    popular: false,
    isNew: false,
    image: ProductImages.clothesHanger,
  },

  {
    id: 29,
    name: "Foldable Ironing Board",
    brand: "IKEA",
    description:
      "Adjustable ironing board with a heat-resistant cover and foldable design.",
    category: "utility",
    price: 2499,
    discount: 18,
    rating: 4.8,
    stock: 12,
    featured: true,
    popular: false,
    isNew: true,
    image: ProductImages.ironingBoard,
  },

  {
    id: 30,
    name: "Foldable Step Stool",
    brand: "Nilkamal",
    description:
      "Lightweight foldable step stool with anti-slip surface for everyday household use.",
    category: "utility",
    price: 799,
    discount: 12,
    rating: 4.6,
    stock: 28,
    featured: false,
    popular: true,
    isNew: false,
    image: ProductImages.stepStool,
  },

    // ==========================
  // Daily Essentials
  // ==========================

  {
    id: 31,
    name: "Liquid Hand Wash",
    brand: "Dettol",
    description:
      "Antibacterial liquid hand wash that removes germs while keeping hands soft and clean.",
    category: "essentials",
    price: 199,
    discount: 10,
    rating: 4.8,
    stock: 50,
    featured: true,
    popular: true,
    isNew: false,
    image: ProductImages.handWash,
  },

  {
    id: 32,
    name: "Soap Dispenser",
    brand: "Home Centre",
    description:
      "Stylish refillable soap dispenser suitable for kitchens and bathrooms.",
    category: "essentials",
    price: 399,
    discount: 15,
    rating: 4.6,
    stock: 35,
    featured: false,
    popular: true,
    isNew: true,
    image: ProductImages.soapDispenser,
  },

  {
    id: 33,
    name: "Premium Tissue Paper",
    brand: "Origami",
    description:
      "Soft, highly absorbent tissue paper suitable for everyday household use.",
    category: "essentials",
    price: 149,
    discount: 5,
    rating: 4.5,
    stock: 70,
    featured: false,
    popular: false,
    isNew: false,
    image: ProductImages.tissuePaper,
  },

  {
    id: 34,
    name: "Toothbrush Holder",
    brand: "Cello",
    description:
      "Compact toothbrush holder with multiple compartments for organized bathroom storage.",
    category: "essentials",
    price: 249,
    discount: 12,
    rating: 4.4,
    stock: 40,
    featured: false,
    popular: false,
    isNew: true,
    image: ProductImages.toothbrushHolder,
  },

  {
    id: 35,
    name: "Plastic Dustbin",
    brand: "Milton",
    description:
      "Durable plastic dustbin with lid for hygienic waste disposal at home or office.",
    category: "essentials",
    price: 599,
    discount: 15,
    rating: 4.7,
    stock: 26,
    featured: true,
    popular: true,
    isNew: false,
    image: ProductImages.dustbin,
  },

  {
    id: 36,
    name: "Air Freshener Spray",
    brand: "Godrej Aer",
    description:
      "Long-lasting air freshener that keeps your home smelling fresh and pleasant.",
    category: "essentials",
    price: 299,
    discount: 10,
    rating: 4.8,
    stock: 48,
    featured: true,
    popular: true,
    isNew: true,
    image: ProductImages.airFreshener,
  },
];

