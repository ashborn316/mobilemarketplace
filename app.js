// M&M MOBILE STORE - Full Smartphone Marketplace, Cart Drawer & Admin Dashboard

// Initial Mock Listings
const DEFAULT_LISTINGS = [
  {
    id: "lst_001",
    title: "Apple iPhone 17 256GB Lavender",
    price: 57990,
    originalPrice: 63990,
    discount: "-9%",
    condition: "Brand New",
    storage: "256gb",
    ram: "12gb",
    is5G: true,
    brand: "apple",
    brandLabel: "Apple",
    isNew: true,
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    seller: "mm_official",
    avatarColor: "hsl(220, 80%, 40%)",
    postTime: "1 hour ago",
    image: "assets/iphone15.png",
    likes: 84,
    isLiked: false,
    badges: ["BACK TO SCHOOL", "BUY NOW PAY LATER"],
    colorOptions: ["Lavender", "Titanium Gray", "Deep Purple"],
    storageOptions: ["256GB", "512GB", "1TB"],
    specs: {
      screen: "6.3 inches Super Retina XDR",
      processor: "Apple A19 Bionic Pro Chip",
      ram: "12 GB LPDDR6",
      storage: "256 GB NVMe",
      camera: "48MP Main + 48MP Telephoto + 12MP UltraWide",
      battery: "4200 mAh with 30W Fast Charging"
    },
    reviews: [
      {
        author: "Mark S.",
        rating: 5,
        comment: "Loving the new Lavender color! Screen is incredibly smooth and battery life lasts almost 2 days. Highly recommended!",
        photos: ["assets/iphone15.png"]
      },
      {
        author: "Sarah G.",
        rating: 4,
        comment: "Outstanding camera system, although it charges a bit slower than some Android flagships. Build quality is solid.",
        photos: []
      }
    ],
    description: "Experience the next-generation Apple iPhone 17 in eye-catching Lavender. Featuring the powerful A19 chip, advanced computational photography, and an immersive display. Covered by 1-year official Apple warranty."
  },
  {
    id: "lst_002",
    title: "Samsung Galaxy A15 5G (Free Case & Adapter)",
    price: 20990,
    originalPrice: 27990,
    discount: "-25%",
    condition: "Brand New",
    storage: "128gb",
    ram: "8gb",
    is5G: true,
    brand: "samsung",
    brandLabel: "Samsung",
    isNew: true,
    isFeatured: true,
    isBestSeller: false,
    inStock: true,
    seller: "mm_official",
    avatarColor: "hsl(220, 80%, 40%)",
    postTime: "2 hours ago",
    image: "assets/iphone12.png",
    likes: 120,
    isLiked: false,
    badges: ["BACK TO SCHOOL", "BUY NOW PAY LATER", "FREEBIES"],
    colorOptions: ["Blue Black", "Light Blue", "Yellow"],
    storageOptions: ["128GB", "256GB"],
    specs: {
      screen: "6.5 inches Super AMOLED 90Hz",
      processor: "MediaTek Dimensity 6100+",
      ram: "8 GB RAM",
      storage: "128 GB (Expandable)",
      camera: "50MP Main + 5MP UltraWide + 2MP Macro",
      battery: "5000 mAh with 25W Charging"
    },
    reviews: [
      {
        author: "Dexter L.",
        rating: 5,
        comment: "Exceptional value! The free charger and transparent cover in the box were a huge plus. Screen is nice and bright.",
        photos: []
      }
    ],
    description: "The Samsung Galaxy A15 5G offers high-speed connectivity and gorgeous visuals. Bundle package includes a FREE clear protective case and a Samsung travel adapter."
  },
  {
    id: "lst_003",
    title: "Apple iPhone 15 Pro Max 512GB Blue Titanium",
    price: 68000,
    originalPrice: 75000,
    discount: "-9%",
    condition: "Like New",
    storage: "512gb",
    ram: "8gb",
    is5G: true,
    brand: "apple",
    brandLabel: "Apple",
    isNew: false,
    isFeatured: false,
    isBestSeller: true,
    inStock: true,
    seller: "ramirez_deals",
    avatarColor: "hsl(340, 70%, 45%)",
    postTime: "3 hours ago",
    image: "assets/iphone15.png",
    likes: 42,
    isLiked: false,
    badges: ["BUY NOW PAY LATER"],
    colorOptions: ["Blue Titanium", "Natural Titanium"],
    storageOptions: ["256GB", "512GB", "1TB"],
    specs: {
      screen: "6.7 inches LTPO Super Retina 120Hz",
      processor: "Apple A17 Pro Chip",
      ram: "8 GB RAM",
      storage: "512 GB",
      camera: "48MP Main + 12MP Periscope Zoom + 12MP UltraWide",
      battery: "4441 mAh with wireless charging"
    },
    reviews: [
      {
        author: "Christian R.",
        rating: 5,
        comment: "Excellent phone, practically zero scratches. FaceID is instant, battery health is at 96% as advertised.",
        photos: ["assets/iphone15.png"]
      }
    ],
    description: "Lightweight titanium chassis, revolutionary zoom capabilities. Selling this pristine like-new iPhone 15 Pro Max eSIM version. Original box included."
  },
  {
    id: "lst_004",
    title: "Xiaomi Redmi Note 13 Pro+ 5G 512GB",
    price: 21999,
    originalPrice: 23999,
    discount: "-8%",
    condition: "Brand New",
    storage: "512gb",
    ram: "12gb",
    is5G: true,
    brand: "xiaomi",
    brandLabel: "Xiaomi",
    isNew: false,
    isFeatured: true,
    isBestSeller: true,
    inStock: true,
    seller: "mm_official",
    avatarColor: "hsl(220, 80%, 40%)",
    postTime: "4 hours ago",
    image: "assets/iphonexs.png",
    likes: 31,
    isLiked: false,
    badges: ["BACK TO SCHOOL", "FREEBIES"],
    colorOptions: ["Midnight Black", "Aurora Purple", "Moonlight White"],
    storageOptions: ["256GB", "512GB"],
    specs: {
      screen: "6.67 inches CrystalRes AMOLED 120Hz",
      processor: "MediaTek Dimensity 7200-Ultra",
      ram: "12 GB LPDDR5",
      storage: "512 GB UFS 3.1",
      camera: "200MP Main + 8MP UltraWide + 2MP Macro",
      battery: "5000 mAh with 120W HyperCharge"
    },
    reviews: [
      {
        author: "Ken T.",
        rating: 5,
        comment: "The 120W charging is insane! It charges from 0 to 100% in less than 25 minutes. Screen is gorgeous too.",
        photos: []
      }
    ],
    description: "Flagship-level specs. Features a 200MP OIS camera, curved AMOLED display, and IP68 water resistance. Covered under 18-month Xiaomi official warranty."
  },
  {
    id: "lst_005",
    title: "OPPO Reno11 5G 256GB Wave Green",
    price: 22999,
    originalPrice: 24999,
    discount: "-8%",
    condition: "Brand New",
    storage: "256gb",
    ram: "12gb",
    is5G: true,
    brand: "oppo",
    brandLabel: "OPPO",
    isNew: false,
    isFeatured: false,
    isBestSeller: false,
    inStock: true,
    seller: "mm_official",
    avatarColor: "hsl(220, 80%, 40%)",
    postTime: "5 hours ago",
    image: "assets/iphone14.png",
    likes: 18,
    isLiked: false,
    badges: ["BACK TO SCHOOL"],
    colorOptions: ["Wave Green", "Rock Grey"],
    storageOptions: ["256GB"],
    specs: {
      screen: "6.7 inches Curved OLED 120Hz",
      processor: "MediaTek Dimensity 7050",
      ram: "12 GB RAM",
      storage: "256 GB UFS 2.2",
      camera: "50MP Main + 32MP Telephoto Portrait + 8MP UltraWide",
      battery: "5000 mAh with 67W SuperVOOC"
    },
    reviews: [],
    description: "The portrait expert. Reno11 5G showcases a textured Wave Green finish, professional portrait mode lenses, and an elegant slim profile. Official OPPO warranty."
  },
  {
    id: "lst_006",
    title: "Vivo V30 5G 512GB Aura Light Green",
    price: 24999,
    originalPrice: 26999,
    discount: "-7%",
    condition: "Brand New",
    storage: "512gb",
    ram: "12gb",
    is5G: true,
    brand: "vivo",
    brandLabel: "Vivo",
    isNew: false,
    isFeatured: false,
    isBestSeller: true,
    inStock: true,
    seller: "mm_official",
    avatarColor: "hsl(220, 80%, 40%)",
    postTime: "Yesterday",
    image: "assets/iphone14.png",
    likes: 29,
    isLiked: false,
    badges: ["BACK TO SCHOOL", "FREEBIES"],
    colorOptions: ["Aura Green", "Noble Black"],
    storageOptions: ["256GB", "512GB"],
    specs: {
      screen: "6.78 inches Curved AMOLED 120Hz",
      processor: "Qualcomm Snapdragon 7 Gen 3",
      ram: "12 GB RAM",
      storage: "512 GB",
      camera: "50MP Main + 50MP UltraWide + Aura Portrait Ring",
      battery: "5000 mAh with 80W Fast Charger"
    },
    reviews: [
      {
        author: "Mila J.",
        rating: 4,
        comment: "Excellent aura light system. Front camera takes the best selfies I have ever seen. Green color is really elegant.",
        photos: ["assets/iphone14.png"]
      }
    ],
    description: "Stand out in portraits. Aura Light Portrait 2.0 system, dual 50MP cameras, and Snapdragon efficiency. Sealed local set."
  },
  {
    id: "lst_007",
    title: "Realme 12 Pro+ 5G 256GB Blue",
    price: 25999,
    originalPrice: 28999,
    discount: "-10%",
    condition: "Brand New",
    storage: "256gb",
    ram: "8gb",
    is5G: true,
    brand: "realme",
    brandLabel: "Realme",
    isNew: true,
    isFeatured: true,
    isBestSeller: false,
    inStock: false,
    seller: "mm_official",
    avatarColor: "hsl(220, 80%, 40%)",
    postTime: "3 days ago",
    image: "assets/iphone12.png",
    likes: 15,
    isLiked: false,
    badges: ["BACK TO SCHOOL"],
    colorOptions: ["Submarine Blue", "Navigator Beige"],
    storageOptions: ["256GB", "512GB"],
    specs: {
      screen: "6.7 inches Curved OLED 120Hz",
      processor: "Qualcomm Snapdragon 7s Gen 2",
      ram: "8 GB RAM",
      storage: "256 GB UFS 3.1",
      camera: "50MP Main + 64MP Periscope Telephoto + 8MP UltraWide",
      battery: "5000 mAh with 67W SuperVOOC"
    },
    reviews: [],
    description: "Designed in partnership with luxury watchmakers, Realme 12 Pro+ boasts a premium vegan leather back, periscope portrait lens, and curved design."
  }
];

// App States
let listings = [];
let chats = [];
let cartItems = [];
let activeChatId = null;
let adminActiveChatId = null;
let currentDetailListingId = null;
let typingTimeout = null;
let isFirebaseActive = false;
let db = null;

let currentFilterCategory = "all";
let currentShowcaseFilter = "all";

// Account States
let currentUser = null;
let savedOrders = [];

// Static Pages Content Database
const STATIC_PAGES = {
  about: {
    title: "About Us",
    body: `<h3>Welcome to M&M MOBILE STORE</h3>
           <p>M&M MOBILE STORE is a premier online smartphone marketplace in the Philippines. Established in 2026, we aim to bridge the gap between verified mobile sellers and smart shoppers looking for high-quality iOS and Android devices at the best prices.</p>
           <p>We source authentic devices directly from manufacturers and official distributors, guaranteeing 100% genuine products with full warranty coverages and fast delivery channels.</p>`
  },
  privacy: {
    title: "Privacy Policy",
    body: `<h3>Our Commitment to Your Privacy</h3>
           <p>We value your privacy rights. M&M MOBILE STORE is committed to safeguarding your personal coordinates, transaction logs, and billing details under the Data Privacy Act of 2012.</p>
           <p>We only collect data necessary to processes your orders (e.g. shipping addresses, email, phone numbers) and communicate tracking details. We never trade or lease your data to unauthorized entities.</p>`
  },
  terms: {
    title: "Terms & Conditions",
    body: `<h3>User Agreement</h3>
           <p>By browsing and placing orders at M&M MOBILE STORE, you consent to our terms of service. Prices listed are inclusive of local taxes but exclude shipping fees (flat ₱99 nationwide).</p>
           <p>Smartphone purchases are subject to availability. Listings posted by third-party sellers are verified by our team, but meetups are carried out at the buyers' discretion.</p>`
  },
  refund: {
    title: "Return & Refund Policy",
    body: `<h3>Hassle-Free Returns</h3>
           <p>We provide a <strong>7-day replacement guarantee</strong> for hardware factory defects. If your smartphone develops issues, return the item with its receipt and original box packaging to any store branch.</p>
           <p>Refunds are processed within 3-5 business days via GCash, Maya, or bank transfer once our technical teams verify the defect.</p>`
  },
  faqs: {
    title: "Frequently Asked Questions",
    body: `<h3>Common Questions</h3>
           <strong>Q: Is cash on delivery supported?</strong><br>
           <p>A: Yes! We support Cash on Delivery nationwide, as well as GCash, Maya, and credit/debit cards.</p>
           <strong>Q: How long does next-day shipping take?</strong><br>
           <p>A: Orders placed before 2 PM are shipped out the same day for next-day arrival in Metro Manila.</p>
           <strong>Q: Do the phones carry official warranty?</strong><br>
           <p>A: Yes, brand new units are covered under official local distributor warranties for 12 months.</p>`
  }
};

// Default System Chats
const DEFAULT_CHATS = [];

// Initialize Application
function initApp() {
  // Load listings safely
  const storedListings = localStorage.getItem('abenson_listings');
  if (storedListings) {
    try {
      listings = JSON.parse(storedListings);
      // Clean and migrate old listings
      listings = listings.map(item => {
        if (!item) return null;
        if (!item.ram) item.ram = "8gb";
        if (item.is5G === undefined) item.is5G = true;
        if (!item.brand) item.brand = "other";
        if (!item.brandLabel) item.brandLabel = "Smartphone";
        if (item.inStock === undefined) item.inStock = true;
        if (!item.specs) {
          item.specs = {
            screen: "6.5 inches AMOLED",
            processor: "Octa-Core CPU",
            ram: item.ram.toUpperCase(),
            storage: (item.storage || "128gb").toUpperCase(),
            camera: "50MP Main",
            battery: "5000 mAh"
          };
        }
        if (!item.colorOptions) item.colorOptions = ["Standard Black", "Platinum White"];
        if (!item.storageOptions) item.storageOptions = [(item.storage || "128gb").toUpperCase()];
        if (!item.reviews) item.reviews = [];
        return item;
      }).filter(item => item !== null);
      
      // Ensure only phone-related items exist
      listings = listings.filter(item => 
        item.title && (
          item.title.toLowerCase().includes('iphone') || 
          item.title.toLowerCase().includes('galaxy') || 
          item.title.toLowerCase().includes('redmi') || 
          item.title.toLowerCase().includes('oppo') || 
          item.title.toLowerCase().includes('vivo') ||
          item.title.toLowerCase().includes('realme') ||
          item.brand === 'apple' ||
          item.brand === 'samsung' ||
          item.brand === 'xiaomi' ||
          item.brand === 'oppo' ||
          item.brand === 'vivo' ||
          item.brand === 'realme'
        )
      );
      
      if (listings.length < 3) {
        listings = DEFAULT_LISTINGS;
      }
    } catch (e) {
      console.error("Error parsing listings:", e);
      listings = DEFAULT_LISTINGS;
    }
  } else {
    listings = DEFAULT_LISTINGS;
    localStorage.setItem('abenson_listings', JSON.stringify(listings));
  }

  // Load user session
  const storedUser = localStorage.getItem('mm_user');
  if (storedUser) {
    try {
      currentUser = JSON.parse(storedUser);
      if (currentUser && currentUser.isAdmin) {
        window.location.href = 'admin.html';
        return;
      }
    } catch (e) {
      currentUser = null;
    }
  }

  // Load orders history
  const storedOrders = localStorage.getItem('mm_orders');
  if (storedOrders) {
    try {
      savedOrders = JSON.parse(storedOrders);
    } catch (e) {
      savedOrders = [];
    }
  } else {
    savedOrders = [
      { id: "ORD-9281728", items: "Apple iPhone 15 Pro Max 512GB", price: 68000, date: "2026-06-01", status: "Delivered", payment: "GCash", customer: "Juan Dela Cruz" }
    ];
    localStorage.setItem('mm_orders', JSON.stringify(savedOrders));
  }

  // Load cart items
  const storedCart = localStorage.getItem('mm_cart');
  if (storedCart) {
    try {
      cartItems = JSON.parse(storedCart);
      if (!Array.isArray(cartItems)) cartItems = [];
    } catch (e) {
      cartItems = [];
    }
  } else {
    cartItems = [];
  }

  // Load chats (with Firebase Realtime Database fallback)
  const storedChats = localStorage.getItem('abenson_chats');
  if (storedChats) {
    try {
      chats = JSON.parse(storedChats);
    } catch (e) {
      chats = DEFAULT_CHATS;
    }
  } else {
    chats = DEFAULT_CHATS;
    localStorage.setItem('abenson_chats', JSON.stringify(chats));
  }

  // Check if Firebase is available
  if (typeof firebase !== 'undefined') {
    try {
      const firebaseConfig = {
        apiKey: "AIzaSyAe5qGSrGQoEa1rdibUl9FUyMiKCYhqx2k",
        authDomain: "anime-studio2026.firebaseapp.com",
        projectId: "anime-studio2026",
        storageBucket: "anime-studio2026.firebasestorage.app",
        messagingSenderId: "295294896512",
        appId: "1:295294896512:web:320b5853af7f2b406a5965",
        databaseURL: "https://anime-studio2026-default-rtdb.asia-southeast1.firebasedatabase.app"
      };

      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      db = firebase.database();
      isFirebaseActive = true;
      console.log("Firebase Database is active with explicit config!");

      // Sync active chats from database in real-time
      db.ref('chats').on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const remoteChats = [];
          Object.keys(data).forEach(key => {
            if (data[key]) remoteChats.push(data[key]);
          });
          chats = remoteChats;
          localStorage.setItem('abenson_chats', JSON.stringify(chats));
          
          // Trigger UI updates
          updateUnreadBadges();
          renderConversations();
          if (activeChatId) renderActiveChatMessages();
          
          const adminChatsPanel = document.getElementById('adminChatsPanel');
          if (adminChatsPanel && adminChatsPanel.classList.contains('active') && (currentUser && currentUser.isAdmin)) {
            renderAdminChats();
            renderAdminChatMessages();
          }
        } else {
          // Initialize DB with defaults if empty
          DEFAULT_CHATS.forEach(c => {
            db.ref('chats/' + c.id).set(c);
          });
        }
      });
    } catch (e) {
      console.error("Firebase database init failed:", e);
    }
  }

  setupEventListeners();
  renderListings();
  updateUnreadBadges();
  ensureUserSupportChatExists();
  renderConversations();
  syncAccountDashboard();
  renderCartDrawer();
  updateCartBadge();
}

// Setup Event Listeners
function setupEventListeners() {
  // Filters and Search Bar
  document.getElementById('searchInput').addEventListener('input', renderListings);
  document.getElementById('btnSearchSubmit').addEventListener('click', renderListings);
  document.getElementById('filterCategory').addEventListener('change', (e) => {
    currentFilterCategory = e.target.value;
    updateCategoryNavActive();
    renderListings();
  });
  document.getElementById('filterSort').addEventListener('change', renderListings);
  document.getElementById('filterCondition').addEventListener('change', renderListings);
  document.getElementById('filterStorage').addEventListener('change', renderListings);
  document.getElementById('filterRAM').addEventListener('change', renderListings);
  document.getElementById('filterMinPrice').addEventListener('input', renderListings);
  document.getElementById('filterMaxPrice').addEventListener('input', renderListings);
  document.getElementById('filter5G').addEventListener('change', renderListings);

  // Scrollbar Category Links
  document.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = e.target.getAttribute('data-category');
      document.getElementById('filterCategory').value = cat;
      currentFilterCategory = cat;
      updateCategoryNavActive();
      renderListings();
    });
  });

  // Showcase Tabs (Featured, New Arrivals, Best Sellers, Offers)
  document.querySelectorAll('.showcase-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.showcase-tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      
      currentShowcaseFilter = e.target.getAttribute('data-showcase');
      
      const titleMap = {
        all: "MOBILE DEALS",
        featured: "FEATURED SMARTPHONES",
        "new-arrivals": "NEW ARRIVALS",
        "best-sellers": "BEST SELLERS",
        discounts: "SPECIAL OFFERS & DISCOUNTS"
      };
      document.getElementById('showcaseSectionTitle').textContent = titleMap[currentShowcaseFilter] || "MOBILE DEALS";
      renderListings();
    });
  });

  // Header Logo click reset
  document.getElementById('logoLink').addEventListener('click', (e) => {
    e.preventDefault();
    resetFilters();
  });

  // Back to Top scroll trigger
  const backToTopBtn = document.getElementById('btnBackToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Sticky Bottom Navigation Tabs (SPA View Toggles)
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
      const target = e.target.closest('.nav-tab');
      target.classList.add('active');

      const tabId = target.id;
      // Hide all panels
      document.getElementById('homepageContent').style.display = 'none';
      document.getElementById('accountContent').style.display = 'none';

      if (tabId === 'navHome') {
        document.getElementById('homepageContent').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (tabId === 'navCategories') {
        document.getElementById('homepageContent').style.display = 'block';
        document.getElementById('filterCategory').focus();
        showToast("Filter brands panel focused!");
      } else if (tabId === 'navProfile') {
        document.getElementById('accountContent').style.display = 'block';
        syncAccountDashboard();
      }
    });
  });

  // Shopping Cart Drawer Triggers
  document.getElementById('btnCart').addEventListener('click', () => {
    toggleCartDrawer(true);
  });
  document.getElementById('btnCloseCartDrawer').addEventListener('click', () => {
    toggleCartDrawer(false);
  });
  document.getElementById('cartDrawerOverlay').addEventListener('click', () => {
    toggleCartDrawer(false);
  });
  document.getElementById('btnCartCheckout').addEventListener('click', () => {
    if (cartItems.length === 0) {
      showToast("Your cart is empty!");
      return;
    }
    toggleCartDrawer(false);
    // Open checkout modal populated with Cart details
    openCartCheckoutModal();
  });

  // Sell Modal Trigger
  const sellModal = document.getElementById('sellModal');
  document.getElementById('btnSellPhone').addEventListener('click', () => {
    // Reset edit state on the form
    document.getElementById('sellForm').removeAttribute('data-edit-id');
    document.querySelector('#sellModal .modal-title').textContent = "List a Phone for Sale";
    sellModal.classList.add('active');
  });
  document.getElementById('btnCloseSellModal').addEventListener('click', () => {
    sellModal.classList.remove('active');
  });
  document.getElementById('btnCancelSell').addEventListener('click', () => {
    sellModal.classList.remove('active');
  });
  document.getElementById('sellForm').addEventListener('submit', handleSellFormSubmit);

  // Close Detail Modal
  document.getElementById('btnCloseDetailModal').addEventListener('click', () => {
    document.getElementById('detailModal').classList.remove('active');
  });

  // Live Chat triggers
  const chatFloatingBubble = document.getElementById('chatFloatingBubble');
  chatFloatingBubble.addEventListener('click', () => {
    toggleChatWidget(true);
    const mySupportChatId = ensureUserSupportChatExists();
    if (!activeChatId) selectConversation(mySupportChatId);
  });
  document.getElementById('btnMinimizeChat').addEventListener('click', () => toggleChatWidget(false));
  document.getElementById('btnCloseChat').addEventListener('click', () => toggleChatWidget(false));
  document.getElementById('btnChatBack').addEventListener('click', () => {
    document.getElementById('chatSidebar').classList.remove('hidden');
  });
  document.getElementById('chatSearchInput').addEventListener('input', renderConversations);
  document.getElementById('chatInputArea').addEventListener('submit', handleSendChatMessage);

  // Detail Modal Actions
  document.getElementById('btnChatSeller').addEventListener('click', () => {
    if (currentDetailListingId) {
      document.getElementById('detailModal').classList.remove('active');
      openChatWithSeller(currentDetailListingId);
    }
  });

  document.getElementById('btnAddToCart').addEventListener('click', () => {
    if (currentDetailListingId) {
      handleAddToCartAction(currentDetailListingId);
    }
  });

  document.getElementById('btnBuyNow').addEventListener('click', () => {
    if (currentDetailListingId) {
      const item = listings.find(l => l.id === currentDetailListingId);
      if (item) {
        document.getElementById('detailModal').classList.remove('active');
        openCheckoutModal(item);
      }
    }
  });

  // Checkout Modal triggers
  const checkoutModal = document.getElementById('checkoutModal');
  document.getElementById('btnCloseCheckoutModal').addEventListener('click', () => checkoutModal.classList.remove('active'));
  document.getElementById('btnCancelCheckout').addEventListener('click', () => checkoutModal.classList.remove('active'));
  document.getElementById('checkoutForm').addEventListener('submit', handlePlaceOrder);

  // Auth Layout tabs (Account Panel)
  document.getElementById('btnAuthTabLogin').addEventListener('click', () => {
    document.getElementById('btnAuthTabLogin').classList.add('active');
    document.getElementById('btnAuthTabRegister').classList.remove('active');
    document.getElementById('registerNameGroup').style.display = 'none';
    document.getElementById('btnAuthSubmit').textContent = 'Sign In';
  });
  document.getElementById('btnAuthTabRegister').addEventListener('click', () => {
    document.getElementById('btnAuthTabRegister').classList.add('active');
    document.getElementById('btnAuthTabLogin').classList.remove('active');
    document.getElementById('registerNameGroup').style.display = 'block';
    document.getElementById('btnAuthSubmit').textContent = 'Create Account';
  });

  // Auth form submit
  document.getElementById('authForm').addEventListener('submit', handleAuthFormSubmit);
  document.getElementById('btnLogOut').addEventListener('click', handleLogOut);

  // Dashboard Sub-tabs
  document.querySelectorAll('.dash-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.dash-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.dash-panel').forEach(p => p.classList.remove('active'));
      
      e.target.classList.add('active');
      const targetPanel = e.target.getAttribute('data-dash');
      
      if (targetPanel === 'wishlist') {
        document.getElementById('dashWishlist').classList.add('active');
        renderWishlist();
      } else if (targetPanel === 'orders') {
        document.getElementById('dashOrders').classList.add('active');
        renderOrderHistory();
      } else if (targetPanel === 'track') {
        document.getElementById('dashTrack').classList.add('active');
      }
    });
  });

  // Tracking details search
  document.getElementById('btnTrackOrderSearch').addEventListener('click', handleTrackSearch);

  // Admin Sub-tabs toggling
  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
      
      e.target.classList.add('active');
      const targetPanel = e.target.getAttribute('data-admin-tab');
      
      if (targetPanel === 'products') {
        document.getElementById('adminProductsPanel').classList.add('active');
        renderAdminProducts();
      } else if (targetPanel === 'orders') {
        document.getElementById('adminOrdersPanel').classList.add('active');
        renderAdminOrders();
      } else if (targetPanel === 'inventory') {
        document.getElementById('adminInventoryPanel').classList.add('active');
        renderAdminInventory();
      } else if (targetPanel === 'chats') {
        document.getElementById('adminChatsPanel').classList.add('active');
        renderAdminChats();
      }
    });
  });

  // Admin Add Product Button
  document.getElementById('btnAdminAddProduct').addEventListener('click', () => {
    document.getElementById('sellForm').removeAttribute('data-edit-id');
    document.querySelector('#sellModal .modal-title').textContent = "Add Smartphone (Admin)";
    document.getElementById('sellModal').classList.add('active');
  });

  // Footer Static Information Pages Modal triggers
  document.querySelectorAll('.info-page-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageKey = e.target.getAttribute('data-page');
      const pageData = STATIC_PAGES[pageKey];
      if (pageData) {
        document.getElementById('infoModalTitle').textContent = pageData.title;
        document.getElementById('infoModalBody').innerHTML = pageData.body;
        document.getElementById('infoModal').classList.add('active');
      }
    });
  });

  document.getElementById('btnCloseInfoModal').addEventListener('click', () => {
    document.getElementById('infoModal').classList.remove('active');
  });
  document.getElementById('btnCloseInfoModalFooter').addEventListener('click', () => {
    document.getElementById('infoModal').classList.remove('active');
  });

  // Admin authentication listener
  document.getElementById('adminLoginForm').addEventListener('submit', handleAdminLogin);
  
  // Admin Chat input listener
  document.getElementById('adminChatInputForm').addEventListener('submit', handleSendAdminChatMessage);
}

// Reset Filters
function resetFilters() {
  document.getElementById('searchInput').value = '';
  document.getElementById('filterCategory').value = 'all';
  document.getElementById('filterSort').value = 'best';
  document.getElementById('filterCondition').value = 'all';
  document.getElementById('filterStorage').value = 'all';
  document.getElementById('filterRAM').value = 'all';
  document.getElementById('filterMinPrice').value = '';
  document.getElementById('filterMaxPrice').value = '';
  document.getElementById('filter5G').checked = false;

  currentFilterCategory = 'all';
  currentShowcaseFilter = 'all';
  
  document.querySelectorAll('.showcase-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.showcase-tab-btn[data-showcase="all"]').classList.add('active');
  document.getElementById('showcaseSectionTitle').textContent = "MOBILE DEALS";

  updateCategoryNavActive();
  renderListings();
}

function updateCategoryNavActive() {
  document.querySelectorAll('.category-link').forEach(link => {
    const linkCat = link.getAttribute('data-category');
    if (linkCat === currentFilterCategory) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Render Listings Grid
function renderListings() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const category = currentFilterCategory;
  const sort = document.getElementById('filterSort').value;
  const conditionFilter = document.getElementById('filterCondition').value;
  const storageFilter = document.getElementById('filterStorage').value;
  const ramFilter = document.getElementById('filterRAM').value;
  const minPrice = parseFloat(document.getElementById('filterMinPrice').value) || 0;
  const maxPrice = parseFloat(document.getElementById('filterMaxPrice').value) || Infinity;
  const only5G = document.getElementById('filter5G').checked;

  let filtered = listings.filter(item => {
    const matchesQuery = item.title.toLowerCase().includes(query) ||
                         item.description.toLowerCase().includes(query) ||
                         item.brandLabel.toLowerCase().includes(query);

    // Brands Category filter
    let matchesCategory = true;
    if (category !== 'all') {
      matchesCategory = item.brand === category;
    }

    // Showcase Category Filter (Featured, New, Best Seller, Offers)
    let matchesShowcase = true;
    if (currentShowcaseFilter === 'featured') {
      matchesShowcase = item.isFeatured;
    } else if (currentShowcaseFilter === 'new-arrivals') {
      matchesShowcase = item.isNew;
    } else if (currentShowcaseFilter === 'best-sellers') {
      matchesShowcase = item.isBestSeller;
    } else if (currentShowcaseFilter === 'discounts') {
      matchesShowcase = !!item.discount;
    }

    const matchesCondition = conditionFilter === 'all' || (item.condition || "Brand New").toLowerCase() === conditionFilter.toLowerCase();
    const matchesStorage = storageFilter === 'all' || (item.storage || "128gb").toLowerCase() === storageFilter.toLowerCase();
    const matchesRAM = ramFilter === 'all' || (item.ram || "8gb").toLowerCase() === ramFilter.toLowerCase();
    const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
    const matches5G = !only5G || !!item.is5G;

    return matchesQuery && matchesCategory && matchesShowcase && matchesCondition && matchesStorage && matchesRAM && matchesPrice && matches5G;
  });

  if (sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  }

  const container = document.getElementById('listingsGrid');
  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3 class="empty-title">No matching smartphones</h3>
        <p class="empty-desc">Adjust your specifications or brand filters and try again.</p>
        <button class="btn-secondary" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-id', item.id);

    let badgesHtml = '';
    if (item.badges) {
      item.badges.forEach(badge => {
        let badgeClass = 'pill-bts';
        if (badge === 'BUY NOW PAY LATER') badgeClass = 'pill-bnpl';
        if (badge === 'FREEBIES') badgeClass = 'pill-freebies';
        badgesHtml += `<span class="marketing-pill ${badgeClass}">${badge}</span>`;
      });
    }

    // Availability text
    const stockStatus = item.inStock ? '' : '<span class="card-sale-badge" style="background-color:#ef4444; margin-left: 4px;">OUT OF STOCK</span>';

    card.innerHTML = `
      <div class="card-top-tags">
        <span class="card-brand-label">${item.brandLabel}</span>
        <div style="display:flex;">
          ${item.isNew ? '<span class="card-sale-badge new">NEW</span>' : '<span class="card-sale-badge">SALE</span>'}
          ${stockStatus}
        </div>
      </div>
      <div class="card-image-wrapper" onclick="openDetailModal('${item.id}')">
        <img class="card-image" src="${item.image}" alt="${item.title}">
        ${item.discount ? `<span class="card-discount-pill">${item.discount}</span>` : ''}
      </div>
      <div class="card-content">
        <h3 class="card-title" onclick="openDetailModal('${item.id}')">${item.title}</h3>
        <div class="price-row">
          <div class="card-price">₱${item.price.toLocaleString()}</div>
          ${item.originalPrice ? `<div class="card-old-price">₱${item.originalPrice.toLocaleString()}</div>` : ''}
        </div>
        <div class="card-marketing-badges">
          ${badgesHtml}
        </div>
        <div class="card-actions">
          <button class="btn-like ${item.isLiked ? 'active' : ''}" onclick="toggleLike('${item.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <span class="like-count">${item.likes}</span>
          </button>
          <button class="btn-more" onclick="showToast('Loading actions panel...')">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Show Product Details Modal
function openDetailModal(id) {
  currentDetailListingId = id;
  const item = listings.find(item => item.id === id);
  if (!item) return;

  document.getElementById('detailImage').src = item.image;
  document.getElementById('detailTitle').textContent = item.title;
  document.getElementById('detailPrice').textContent = `₱${item.price.toLocaleString()}`;
  document.getElementById('detailBrandLabel').textContent = item.brandLabel;
  document.getElementById('detailDesc').textContent = item.description;

  // Stock status
  const stockBadge = document.getElementById('detailAvailability');
  if (item.inStock) {
    stockBadge.textContent = "In Stock";
    stockBadge.className = "availability-badge";
    document.getElementById('btnBuyNow').removeAttribute('disabled');
    document.getElementById('btnBuyNow').style.opacity = '1';
    document.getElementById('btnAddToCart').removeAttribute('disabled');
    document.getElementById('btnAddToCart').style.opacity = '1';
  } else {
    stockBadge.textContent = "Out of Stock";
    stockBadge.className = "availability-badge out-of-stock";
    document.getElementById('btnBuyNow').setAttribute('disabled', 'true');
    document.getElementById('btnBuyNow').style.opacity = '0.5';
    document.getElementById('btnAddToCart').setAttribute('disabled', 'true');
    document.getElementById('btnAddToCart').style.opacity = '0.5';
  }

  // Specifications
  document.getElementById('specScreen').textContent = item.specs.screen;
  document.getElementById('specProcessor').textContent = item.specs.processor;
  document.getElementById('specRAM').textContent = item.specs.ram;
  document.getElementById('specStorage').textContent = item.specs.storage;
  document.getElementById('specCamera').textContent = item.specs.camera;
  document.getElementById('specBattery').textContent = item.specs.battery;
  document.getElementById('spec5G').textContent = item.is5G ? "Yes" : "No";

  // Storage pills
  const storageBox = document.getElementById('detailStorageOptions');
  storageBox.innerHTML = '';
  item.storageOptions.forEach((opt, idx) => {
    const pill = document.createElement('span');
    pill.className = `pill-option ${idx === 0 ? 'active' : ''}`;
    pill.textContent = opt;
    pill.onclick = (e) => {
      storageBox.querySelectorAll('.pill-option').forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
    };
    storageBox.appendChild(pill);
  });

  // Color pills
  const colorBox = document.getElementById('detailColorOptions');
  colorBox.innerHTML = '';
  item.colorOptions.forEach((opt, idx) => {
    const pill = document.createElement('span');
    pill.className = `pill-option ${idx === 0 ? 'active' : ''}`;
    pill.textContent = opt;
    pill.onclick = (e) => {
      colorBox.querySelectorAll('.pill-option').forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
    };
    colorBox.appendChild(pill);
  });

  // Reviews list render
  const reviewsContainer = document.getElementById('reviewsContainer');
  reviewsContainer.innerHTML = '';
  
  if (!item.reviews || item.reviews.length === 0) {
    reviewsContainer.innerHTML = `<p style="font-size: 0.8rem; color: #888; text-align: center; padding: 1rem;">No reviews yet for this smartphone.</p>`;
  } else {
    item.reviews.forEach(rev => {
      const revCard = document.createElement('div');
      revCard.className = 'review-card';

      let starsHtml = '★'.repeat(rev.rating) + '☆'.repeat(5 - rev.rating);
      let photosHtml = '';
      if (rev.photos && rev.photos.length > 0) {
        rev.photos.forEach(ph => {
          photosHtml += `<img src="${ph}" class="review-photo-img" alt="Buyer Photo">`;
        });
      }

      revCard.innerHTML = `
        <div class="review-header">
          <span class="review-author">${rev.author}</span>
          <span class="review-rating">${starsHtml}</span>
        </div>
        <p class="review-comment">${rev.comment}</p>
        ${photosHtml ? `<div class="review-photos">${photosHtml}</div>` : ''}
      `;
      reviewsContainer.appendChild(revCard);
    });
  }

  document.getElementById('detailModal').classList.add('active');
}

// Shopping Cart Drawer Toggle
function toggleCartDrawer(open) {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('cartDrawerOverlay');
  if (open) {
    drawer.classList.add('active');
    overlay.classList.add('active');
  } else {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
  }
}

// Add Item To Cart
function handleAddToCartAction(listingId) {
  const item = listings.find(l => l.id === listingId);
  if (!item) return;

  const activeStorage = document.querySelector('#detailStorageOptions .pill-option.active')?.textContent || "Default Storage";
  const activeColor = document.querySelector('#detailColorOptions .pill-option.active')?.textContent || "Default Color";

  // Check if same item, storage, and color already exists in cart
  const existing = cartItems.find(c => c.listingId === listingId && c.selectedStorage === activeStorage && c.selectedColor === activeColor);

  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems.push({
      id: 'cart_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      listingId: listingId,
      title: item.title,
      image: item.image,
      price: item.price,
      selectedStorage: activeStorage,
      selectedColor: activeColor,
      quantity: 1
    });
  }

  localStorage.setItem('mm_cart', JSON.stringify(cartItems));
  updateCartBadge();
  renderCartDrawer();
  document.getElementById('detailModal').classList.remove('active');
  toggleCartDrawer(true);
  showToast("Added to Cart!");
}

// Update Cart Quantity
function updateCartQuantity(cartItemId, delta) {
  const item = cartItems.find(c => c.id === cartItemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cartItems = cartItems.filter(c => c.id !== cartItemId);
  }

  localStorage.setItem('mm_cart', JSON.stringify(cartItems));
  updateCartBadge();
  renderCartDrawer();
}

// Remove Item from Cart
function removeFromCart(cartItemId) {
  cartItems = cartItems.filter(c => c.id !== cartItemId);
  localStorage.setItem('mm_cart', JSON.stringify(cartItems));
  updateCartBadge();
  renderCartDrawer();
}

// Update Cart Badge Icon count
function updateCartBadge() {
  const badge = document.getElementById('cartCount');
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalQty;
}

// Render Cart Drawer Content
function renderCartDrawer() {
  const container = document.getElementById('cartItemsContainer');
  container.innerHTML = '';

  if (cartItems.length === 0) {
    container.innerHTML = `<div class="empty-list-msg" style="border:none; padding: 4rem 1rem;">Your shopping cart is empty.</div>`;
    document.getElementById('cartSubtotalAmount').textContent = '₱0';
    document.getElementById('cartTotalAmount').textContent = '₱0';
    return;
  }

  let subtotal = 0;
  cartItems.forEach(item => {
    subtotal += item.price * item.quantity;
    const card = document.createElement('div');
    card.className = 'cart-item-card';

    card.innerHTML = `
      <img src="${item.image}" class="cart-item-thumb" alt="${item.title}">
      <div class="cart-item-details">
        <span class="cart-item-title">${item.title}</span>
        <span class="cart-item-spec">${item.selectedStorage} &bull; ${item.selectedColor}</span>
        <span class="cart-item-price">₱${item.price.toLocaleString()}</span>
        <div class="cart-item-qty-row">
          <button class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)">-</button>
          <span class="qty-val">${item.quantity}</span>
          <button class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)">+</button>
        </div>
      </div>
      <button class="btn-remove-cart-item" onclick="removeFromCart('${item.id}')">Remove</button>
    `;
    container.appendChild(card);
  });

  const total = subtotal + 99;
  document.getElementById('cartSubtotalAmount').textContent = `₱${subtotal.toLocaleString()}`;
  document.getElementById('cartTotalAmount').textContent = `₱${total.toLocaleString()}`;
}

// Checkout Modal Open (Single item Buy Now)
function openCheckoutModal(item) {
  document.getElementById('checkoutItemName').textContent = item.title;
  document.getElementById('checkoutItemPrice').textContent = `₱${item.price.toLocaleString()}`;
  
  const activeStorage = document.querySelector('#detailStorageOptions .pill-option.active')?.textContent || "Default Storage";
  const activeColor = document.querySelector('#detailColorOptions .pill-option.active')?.textContent || "Default Color";
  document.getElementById('checkoutItemSpecs').textContent = `${activeStorage} - ${activeColor}`;

  const total = item.price + 99;
  document.getElementById('checkoutTotalAmount').textContent = `₱${total.toLocaleString()}`;

  // Populate shipping if logged in
  if (currentUser) {
    document.getElementById('shipName').value = currentUser.name || '';
    document.getElementById('shipEmail').value = currentUser.email || '';
  }

  // Set checkout type
  document.getElementById('checkoutForm').setAttribute('data-checkout-type', 'single');
  document.getElementById('checkoutModal').classList.add('active');
}

// Checkout Modal Open (Multi-item from Cart Drawer)
function openCartCheckoutModal() {
  const names = cartItems.map(c => `${c.title} (x${c.quantity})`).join(', ');
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  document.getElementById('checkoutItemName').textContent = `${totalQty} Smartphones in Cart`;
  
  let subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  document.getElementById('checkoutItemPrice').textContent = `₱${subtotal.toLocaleString()}`;
  document.getElementById('checkoutItemSpecs').textContent = names;

  const total = subtotal + 99;
  document.getElementById('checkoutTotalAmount').textContent = `₱${total.toLocaleString()}`;

  if (currentUser) {
    document.getElementById('shipName').value = currentUser.name || '';
    document.getElementById('shipEmail').value = currentUser.email || '';
  }

  document.getElementById('checkoutForm').setAttribute('data-checkout-type', 'cart');
  document.getElementById('checkoutModal').classList.add('active');
}

// Handle Order Placement
function handlePlaceOrder(e) {
  e.preventDefault();
  
  const shipName = document.getElementById('shipName').value.trim();
  const phoneName = document.getElementById('checkoutItemName').textContent;
  const priceText = document.getElementById('checkoutTotalAmount').textContent.replace('₱', '').replace(/,/g, '');
  const priceVal = parseFloat(priceText);
  const payment = document.querySelector('input[name="paymentMethod"]:checked').value;
  const checkoutType = document.getElementById('checkoutForm').getAttribute('data-checkout-type');
  
  const orderId = 'ORD-' + Math.floor(Math.random() * 9000000 + 1000000);
  const orderDate = new Date().toISOString().split('T')[0];

  const newOrder = {
    id: orderId,
    items: phoneName,
    price: priceVal,
    date: orderDate,
    status: "Processing Order",
    payment: payment,
    customer: shipName
  };

  savedOrders.unshift(newOrder);
  localStorage.setItem('mm_orders', JSON.stringify(savedOrders));

  // If order was placed from Cart Drawer, clear cart
  if (checkoutType === 'cart') {
    cartItems = [];
    localStorage.removeItem('mm_cart');
    updateCartBadge();
    renderCartDrawer();
  }

  document.getElementById('checkoutForm').reset();
  document.getElementById('checkoutModal').classList.remove('active');

  // Trigger support chat message update
  chats.forEach(c => {
    if (c.isSupport) {
      c.messages.push({
        sender: "seller",
        text: `Success! Order ${orderId} has been registered under ${payment} payment. Status: Processing.`,
        time: "Just now"
      });
    }
  });
  localStorage.setItem('abenson_chats', JSON.stringify(chats));
  updateUnreadBadges();
  renderConversations();

  showToast(`Order Placed! ID: ${orderId}`);
}

// Authentications Form Submit
function handleAuthFormSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('authEmail').value.trim();
  const password = document.getElementById('authPassword').value;
  const isRegister = document.getElementById('btnAuthSubmit').textContent.includes('Create');
  const name = document.getElementById('authName').value.trim() || "User Client";

  const isAdmin = email.toLowerCase() === 'admin@mm-mobile.com' && password === 'admin123';

  currentUser = {
    email,
    name: isRegister ? name : email.split('@')[0],
    isAdmin: isAdmin
  };

  localStorage.setItem('mm_user', JSON.stringify(currentUser));
  document.getElementById('authForm').reset();
  
  if (isAdmin) {
    window.location.href = 'admin.html';
    return;
  }
  
  // Initialize and switch to the authenticated user's support chat
  const mySupportChatId = ensureUserSupportChatExists();
  activeChatId = mySupportChatId;
  
  syncAccountDashboard();
  renderConversations();
  renderActiveChatMessages();
}

function handleLogOut() {
  currentUser = null;
  localStorage.removeItem('mm_user');
  activeChatId = null;
  adminActiveChatId = null;
  syncAccountDashboard();
  ensureUserSupportChatExists();
  renderConversations();
}

// Sync UI of dashboard page
function syncAccountDashboard() {
  const authPanel = document.getElementById('authPanel');
  const dashboardPanel = document.getElementById('dashboardPanel');
  
  if (currentUser) {
    authPanel.style.display = 'none';
    dashboardPanel.style.display = 'block';
    
    document.getElementById('userNameDisplay').textContent = currentUser.name;
    document.getElementById('userEmailDisplay').textContent = currentUser.email;
    
    renderWishlist();
    renderOrderHistory();
  } else {
    authPanel.style.display = 'block';
    dashboardPanel.style.display = 'none';
  }
}

// Render Order History list
function renderOrderHistory() {
  const container = document.getElementById('ordersContainer');
  container.innerHTML = '';
  
  if (savedOrders.length === 0) {
    container.innerHTML = `<p class="empty-list-msg">You haven't placed any orders yet.</p>`;
    return;
  }
  
  savedOrders.forEach(ord => {
    const card = document.createElement('div');
    card.className = 'order-history-card';
    
    card.innerHTML = `
      <div class="order-history-details">
        <span class="order-id-label">${ord.id}</span>
        <span class="order-item-desc">${ord.items}</span>
        <span class="order-date-price">${ord.date} &bull; ₱${ord.price.toLocaleString()}</span>
      </div>
      <span class="order-status-badge">${ord.status}</span>
    `;
    container.appendChild(card);
  });
}

// Track orders search
function handleTrackSearch() {
  const input = document.getElementById('trackOrderIdInput').value.trim();
  const resultBox = document.getElementById('trackResultBox');
  
  if (!input) {
    showToast("Please enter an Order ID!");
    return;
  }
  
  const order = savedOrders.find(o => o.id.toLowerCase() === input.toLowerCase());
  
  resultBox.style.display = 'block';
  if (order) {
    resultBox.innerHTML = `
      <div class="track-state-title">Status: ${order.status}</div>
      <p style="font-size:0.8rem; color:#4b5563;">Delivery Method: ${order.payment}</p>
      <span class="track-state-time">Last update: June 12, 2:00 PM</span>
    `;
  } else {
    resultBox.innerHTML = `
      <div class="track-state-title" style="color: #b91c1c;">Order Not Found</div>
      <p style="font-size:0.8rem; color:#ef4444;">Please double check your Order ID (e.g. ORD-1234567).</p>
    `;
  }
}

// Render Wishlist
function renderWishlist() {
  const container = document.getElementById('wishlistContainer');
  container.innerHTML = '';
  
  const liked = listings.filter(l => l.isLiked);
  
  if (liked.length === 0) {
    container.innerHTML = `<p class="empty-list-msg">No items in your wishlist yet.</p>`;
    return;
  }
  
  liked.forEach(item => {
    const box = document.createElement('div');
    box.className = 'card';
    box.style.paddingBottom = '0.5rem';
    
    box.innerHTML = `
      <div class="card-image-wrapper" onclick="openDetailModal('${item.id}')" style="padding-top: 100%;">
        <img class="card-image" src="${item.image}">
      </div>
      <div style="padding: 0.5rem;">
        <h4 style="font-size:0.78rem; font-weight:700; height:2rem; overflow:hidden;" onclick="openDetailModal('${item.id}')">${item.title}</h4>
        <div style="font-size:0.85rem; font-weight:800; color:#0c4ea3; margin-top:2px;">₱${item.price.toLocaleString()}</div>
      </div>
    `;
    container.appendChild(box);
  });
}

// Toggle likes
function toggleLike(id) {
  const itemIndex = listings.findIndex(item => item.id === id);
  if (itemIndex !== -1) {
    const item = listings[itemIndex];
    item.isLiked = !item.isLiked;
    if (item.isLiked) {
      item.likes += 1;
      showToast("Added to Wishlist!");
    } else {
      item.likes = Math.max(0, item.likes - 1);
      showToast("Removed from Wishlist");
    }
    
    localStorage.setItem('abenson_listings', JSON.stringify(listings));
    renderListings();
    if (currentUser) renderWishlist();
  }
}

// Handle Form Submission for new listing or editing
function handleSellFormSubmit(e) {
  e.preventDefault();
  
  const title = document.getElementById('phoneTitle').value.trim();
  const brand = document.getElementById('phoneBrand').value;
  const price = parseFloat(document.getElementById('phonePrice').value);
  const storage = document.getElementById('phoneStorage').value;
  const condition = document.getElementById('phoneCondition').value;
  const ram = document.getElementById('phoneRAM').value;
  const is5G = document.getElementById('phone5G').checked;
  const seller = document.getElementById('phoneSeller').value.trim();
  const image = document.getElementById('phoneImage').value;
  const description = document.getElementById('phoneDesc').value.trim();

  const brandLabelMap = {
    apple: "Apple",
    samsung: "Samsung",
    xiaomi: "Xiaomi",
    oppo: "OPPO",
    vivo: "Vivo",
    realme: "Realme",
    other: "Other"
  };

  const editId = document.getElementById('sellForm').getAttribute('data-edit-id');

  if (editId) {
    // Editing Mode
    const item = listings.find(l => l.id === editId);
    if (item) {
      item.title = title;
      item.brand = brand;
      item.brandLabel = brandLabelMap[brand] || "Smartphone";
      item.price = price;
      item.originalPrice = price * 1.15;
      item.storage = storage;
      item.ram = ram;
      item.is5G = is5G;
      item.seller = seller;
      item.image = image;
      item.description = description;
      item.specs.ram = ram.toUpperCase();
      item.specs.storage = storage.toUpperCase();

      showToast("Listing edited successfully!");
    }
  } else {
    // Add Mode
    const newListing = {
      id: 'lst_' + Date.now(),
      title,
      price,
      originalPrice: price * 1.15,
      discount: "-13%",
      condition,
      storage,
      ram,
      is5G,
      brand,
      brandLabel: brandLabelMap[brand] || "Smartphone",
      isNew: true,
      isFeatured: false,
      isBestSeller: false,
      inStock: true,
      seller,
      avatarColor: `hsl(${Math.floor(Math.random() * 360)}, 65%, 45%)`,
      postTime: 'Just now',
      image,
      likes: 0,
      isLiked: false,
      badges: ["BACK TO SCHOOL"],
      colorOptions: ["Standard Black", "Platinum White"],
      storageOptions: [storage.toUpperCase()],
      specs: {
        screen: "6.5 inches HD+ IPS Display",
        processor: "Octa-Core CPU",
        ram: ram.toUpperCase(),
        storage: storage.toUpperCase(),
        camera: "50MP Main Lens",
        battery: "5000 mAh standard pack"
      },
      reviews: [],
      description
    };
    listings.unshift(newListing);
    showToast("Smartphone listing added successfully!");
  }

  localStorage.setItem('abenson_listings', JSON.stringify(listings));
  document.getElementById('sellForm').reset();
  document.getElementById('sellModal').classList.remove('active');

  renderListings();
  // Rerender admin screens if currently active
  if (document.getElementById('adminContent').style.display === 'block') {
    renderAdminProducts();
    renderAdminInventory();
  }
}

// --- ADMIN DASHBOARD RENDER & ACTIONS ---

// Admin Panel: Render Smartphone Products Manager List
function renderAdminProducts() {
  const container = document.getElementById('adminProductsList');
  container.innerHTML = '';

  listings.forEach(item => {
    const row = document.createElement('div');
    row.className = 'admin-product-row';

    row.innerHTML = `
      <div class="admin-prod-thumb-info">
        <img src="${item.image}" class="admin-prod-thumb" alt="">
        <div class="admin-prod-details">
          <span class="admin-prod-title">${item.title}</span>
          <span class="admin-prod-meta">Price: ₱${item.price.toLocaleString()} &bull; Storage: ${item.storage.toUpperCase()} &bull; RAM: ${item.ram.toUpperCase()}</span>
        </div>
      </div>
      <div class="admin-prod-actions">
        <button class="btn-toggle-stock ${item.inStock ? '' : 'out'}" onclick="adminToggleStock('${item.id}')">
          ${item.inStock ? 'In Stock' : 'Out of Stock'}
        </button>
        <button class="btn-secondary-sm" onclick="adminEditProduct('${item.id}')">Edit</button>
        <button class="btn-secondary-sm" style="color: #ef4444; border-color: rgba(239, 68, 68, 0.2);" onclick="adminDeleteProduct('${item.id}')">Delete</button>
      </div>
    `;
    container.appendChild(row);
  });
}

// Admin Panel: Toggle stock status
function adminToggleStock(id) {
  const item = listings.find(l => l.id === id);
  if (item) {
    item.inStock = !item.inStock;
    localStorage.setItem('abenson_listings', JSON.stringify(listings));
    renderAdminProducts();
    renderAdminInventory();
    renderListings();
    showToast(`${item.title} stock status updated.`);
  }
}

// Admin Panel: Trigger Product Editing
function adminEditProduct(id) {
  const item = listings.find(l => l.id === id);
  if (!item) return;

  // Pre-fill form fields
  document.getElementById('phoneTitle').value = item.title;
  document.getElementById('phoneBrand').value = item.brand;
  document.getElementById('phonePrice').value = item.price;
  document.getElementById('phoneStorage').value = item.storage.toLowerCase();
  document.getElementById('phoneCondition').value = item.condition;
  document.getElementById('phoneRAM').value = item.ram.toLowerCase();
  document.getElementById('phone5G').checked = item.is5G;
  document.getElementById('phoneSeller').value = item.seller;
  document.getElementById('phoneImage').value = item.image;
  document.getElementById('phoneDesc').value = item.description;

  // Set edit attribute
  document.getElementById('sellForm').setAttribute('data-edit-id', id);
  document.querySelector('#sellModal .modal-title').textContent = "Edit Smartphone Listing (Admin)";

  // Open modal
  document.getElementById('sellModal').classList.add('active');
}

// Admin Panel: Delete listing
function adminDeleteProduct(id) {
  if (confirm("Are you sure you want to delete this smartphone listing?")) {
    listings = listings.filter(l => l.id !== id);
    localStorage.setItem('abenson_listings', JSON.stringify(listings));
    renderAdminProducts();
    renderAdminInventory();
    renderListings();
    showToast("Smartphone listing deleted.");
  }
}

// Admin Panel: Render Orders Ledger List
function renderAdminOrders() {
  const container = document.getElementById('adminOrdersList');
  container.innerHTML = '';

  if (savedOrders.length === 0) {
    container.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 2rem;">No orders registered in ledger.</td></tr>`;
    return;
  }

  savedOrders.forEach(ord => {
    const row = document.createElement('tr');
    
    // Status color picker
    let statusClass = "";
    if (ord.status === "Delivered") statusClass = "style='color: #166534;'";
    else if (ord.status === "Cancelled") statusClass = "style='color: #b91c1c;'";

    row.innerHTML = `
      <td style="font-weight: 700;">${ord.id}</td>
      <td>
        <div style="font-weight: 600;">${ord.customer || "Guest"}</div>
        <div style="font-size: 0.7rem; color: #64748b;">Date: ${ord.date}</div>
      </td>
      <td>${ord.items}</td>
      <td style="font-weight: 700; color: #0c4ea3;">₱${ord.price.toLocaleString()}</td>
      <td ${statusClass}><strong>${ord.status}</strong></td>
      <td>
        <select class="admin-order-status-select" onchange="adminUpdateOrderStatus('${ord.id}', this.value)">
          <option value="Processing Order" ${ord.status === 'Processing Order' ? 'selected' : ''}>Processing</option>
          <option value="Shipped" ${ord.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
          <option value="Delivered" ${ord.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
          <option value="Cancelled" ${ord.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
        </select>
      </td>
    `;
    container.appendChild(row);
  });
}

// Admin Panel: Update status of customer order
function adminUpdateOrderStatus(orderId, newStatus) {
  const order = savedOrders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    localStorage.setItem('mm_orders', JSON.stringify(savedOrders));
    renderAdminOrders();
    showToast(`Order ${orderId} updated to ${newStatus}`);
  }
}

// Admin Panel: Render Smartphone Stock Levels
function renderAdminInventory() {
  const container = document.getElementById('adminInventoryList');
  container.innerHTML = '';

  listings.forEach(item => {
    const card = document.createElement('div');
    
    // Low stock representation
    const stockCount = item.inStock ? 15 : 0;
    const isLow = stockCount === 0;
    card.className = `inventory-stock-card ${isLow ? 'low' : ''}`;

    card.innerHTML = `
      <div class="inventory-meta">
        <h4>${item.title}</h4>
        <span>Brand: ${item.brandLabel} &bull; Condition: ${item.condition}</span>
      </div>
      <div class="stock-count-badge">${stockCount}</div>
    `;
    container.appendChild(card);
  });
}

// --- Live Chat Dialog Helpers ---

function toggleChatWidget(open) {
  const widget = document.getElementById('chatWidget');
  if (open) {
    widget.classList.add('active');
    if (activeChatId) {
      setTimeout(() => {
        const input = document.getElementById('chatInputField');
        if (input) input.focus();
      }, 200);
    }
  } else {
    widget.classList.remove('active');
  }
}

function updateUnreadBadges() {
  const totalUnread = chats.reduce((acc, c) => acc + (c.unread ? 1 : 0), 0);
  const floatingBadge = document.getElementById('chatFloatingBadge');
  const widgetBadge = document.getElementById('chatWidgetBadge');
  
  if (totalUnread > 0) {
    floatingBadge.textContent = totalUnread;
    floatingBadge.style.display = 'flex';
    widgetBadge.textContent = totalUnread;
    widgetBadge.style.display = 'inline-block';
  } else {
    floatingBadge.style.display = 'none';
    widgetBadge.style.display = 'none';
  }
}

function renderConversations() {
  const query = document.getElementById('chatSearchInput').value.toLowerCase().trim();
  const container = document.getElementById('chatConversationsList');
  container.innerHTML = '';
  
  const buyerEmail = currentUser ? currentUser.email : "guest@mm-mobile.com";
  const buyerSession = sessionStorage.getItem('mm_guest_id') || '';
  const mySupportChatId = getCurrentUserSupportChatId();

  // Filter chats to show only my support chat or listing chats where I am the buyer
  const myChats = chats.filter(chat => {
    if (chat.isSupport) {
      return chat.id === mySupportChatId;
    } else {
      return chat.buyerEmail === buyerEmail || (buyerEmail === "guest@mm-mobile.com" && chat.buyerSession === buyerSession);
    }
  });

  const filteredChats = myChats.filter(chat => {
    return chat.seller.toLowerCase().includes(query);
  });
  
  if (filteredChats.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 1.5rem 0.5rem; font-size: 0.75rem;">No chats</div>`;
    return;
  }
  
  filteredChats.forEach(chat => {
    const initial = chat.seller.charAt(0).toUpperCase();
    const lastMsg = chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : null;
    const lastText = lastMsg ? (lastMsg.sender === 'buyer' ? 'You: ' : '') + lastMsg.text : 'No messages';
    const lastTime = lastMsg ? lastMsg.time : '';
    
    const itemEl = document.createElement('div');
    itemEl.className = `convo-item ${chat.id === activeChatId ? 'active' : ''} ${chat.unread ? 'unread' : ''}`;
    itemEl.onclick = () => selectConversation(chat.id);
    
    let avatarMarkup = '';
    if (chat.isSupport) {
      avatarMarkup = `<img src="assets/support_agent_avatar.png" class="convo-item-thumb" style="border-radius: 50%;" alt="Support">`;
    } else {
      avatarMarkup = `<div class="seller-avatar" style="background-color: ${chat.avatarColor}; width: 32px; height: 32px; font-size: 0.8rem; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; border-radius: 50%;">${initial}</div>`;
    }

    itemEl.innerHTML = `
      ${avatarMarkup}
      <div class="convo-item-details">
        <div class="convo-header-row">
          <span class="convo-name">${chat.seller}</span>
          <span class="convo-time">${lastTime}</span>
        </div>
        <span class="convo-last-msg">${lastText}</span>
      </div>
      ${chat.unread ? '<div class="convo-unread-dot"></div>' : ''}
    `;
    
    container.appendChild(itemEl);
  });
}

function selectConversation(chatId) {
  activeChatId = chatId;
  
  const chat = chats.find(c => c.id === chatId);
  if (chat) {
    chat.unread = false;
    localStorage.setItem('abenson_chats', JSON.stringify(chats));
  }
  
  updateUnreadBadges();
  renderConversations();
  
  const initial = chat.seller.charAt(0).toUpperCase();
  const avatarEl = document.getElementById('activeChatAvatar');
  
  if (chat.isSupport) {
    avatarEl.innerHTML = `<img src="assets/support_agent_avatar.png" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;" alt="Abby">`;
    avatarEl.style.backgroundColor = 'transparent';
    document.getElementById('activeItemShortcut').style.display = 'none';
  } else {
    avatarEl.textContent = initial;
    avatarEl.style.backgroundColor = chat.avatarColor;
    avatarEl.style.width = '32px';
    avatarEl.style.height = '32px';
    avatarEl.style.borderRadius = '50%';
    avatarEl.style.display = 'flex';
    avatarEl.style.alignItems = 'center';
    avatarEl.style.justifyContent = 'center';
    avatarEl.style.color = 'white';
    avatarEl.style.fontWeight = '700';

    const listing = listings.find(l => l.id === chat.listingId);
    if (listing) {
      document.getElementById('activeItemImage').src = listing.image;
      document.getElementById('activeItemTitle').textContent = listing.title;
      document.getElementById('activeItemPrice').textContent = `₱${listing.price.toLocaleString()}`;
      document.getElementById('activeItemShortcut').style.display = 'flex';
      document.getElementById('activeItemShortcut').onclick = () => {
        openDetailModal(chat.listingId);
      };
    } else {
      document.getElementById('activeItemShortcut').style.display = 'none';
    }
  }
  
  document.getElementById('activeChatName').textContent = chat.seller;
  document.getElementById('activeChatStatus').textContent = "Online";
  
  document.getElementById('chatEmptyState').style.display = 'none';
  document.getElementById('chatActiveHeader').style.display = 'flex';
  document.getElementById('chatSuggestions').style.display = 'flex';
  document.getElementById('chatInputArea').style.display = 'flex';
  
  if (window.innerWidth <= 640) {
    document.getElementById('chatSidebar').classList.add('hidden');
  }
  
  renderSuggestionChips(chat.isSupport);
  renderActiveChatMessages();
}

function renderSuggestionChips(isSupport) {
  const chipsContainer = document.getElementById('chatSuggestions');
  chipsContainer.innerHTML = '';
  
  let options = [];
  if (isSupport) {
    options = [
      "Track my delivery status",
      "List of store branches",
      "Available promo codes",
      "Return and Refund policy"
    ];
  } else {
    options = [
      "Is this still available?",
      "Can we meet up today?",
      "Is the price negotiable?",
      "What is the battery health?"
    ];
  }
  
  options.forEach(opt => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'suggestion-chip';
    chip.textContent = opt;
    chip.onclick = () => sendDirectMessage(opt);
    chipsContainer.appendChild(chip);
  });
}

function renderActiveChatMessages() {
  const chat = chats.find(c => c.id === activeChatId);
  const container = document.getElementById('chatMessagesContainer');
  container.innerHTML = '';
  
  if (!chat || chat.messages.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem 1rem; font-size: 0.75rem;">Start the conversation!</div>`;
    return;
  }
  
  chat.messages.forEach(msg => {
    const row = document.createElement('div');
    row.className = `msg-row ${msg.sender === 'buyer' ? 'sent' : 'received'}`;
    
    row.innerHTML = `
      <div class="msg-bubble">
        <div>${msg.text}</div>
        <span class="msg-time">${msg.time}</span>
      </div>
    `;
    container.appendChild(row);
  });
  
  container.scrollTop = container.scrollHeight;
}

function handleSendChatMessage(e) {
  e.preventDefault();
  const input = document.getElementById('chatInputField');
  const text = input.value.trim();
  if (!text) return;
  
  sendDirectMessage(text);
  input.value = '';
}

function sendDirectMessage(text) {
  if (!activeChatId) return;
  
  const chat = chats.find(c => c.id === activeChatId);
  if (!chat) return;
  
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  const newMessage = {
    sender: "buyer",
    text: text,
    time: timeStr
  };
  
  chat.messages.push(newMessage);
  
  if (isFirebaseActive) {
    db.ref('chats/' + chat.id).set(chat).then(() => {
      triggerAutoReply(chat, text);
    });
  } else {
    localStorage.setItem('abenson_chats', JSON.stringify(chats));
    renderActiveChatMessages();
    renderConversations();
    triggerAutoReply(chat, text);
  }
}

function openChatWithSeller(listingId) {
  const item = listings.find(l => l.id === listingId);
  if (!item) return;
  
  const buyerEmail = currentUser ? currentUser.email : "guest@mm-mobile.com";
  const buyerName = currentUser ? currentUser.name : "Guest";
  const buyerSession = sessionStorage.getItem('mm_guest_id') || 'guest_temp';
  
  // Find if listing chat already exists for this specific buyer
  let chat = chats.find(c => c.listingId === listingId && 
                             (c.buyerEmail === buyerEmail || (buyerEmail === "guest@mm-mobile.com" && c.buyerSession === buyerSession)));
  
  if (!chat) {
    chat = {
      id: "chat_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
      listingId: listingId,
      seller: item.seller,
      buyerName: buyerName,
      buyerEmail: buyerEmail,
      buyerSession: buyerSession,
      avatarColor: item.avatarColor || "hsl(220, 60%, 45%)",
      messages: [
        { sender: "seller", text: `Hi! Thanks for your interest in my ${item.title}. How can I help you?`, time: "Just now" }
      ],
      unread: false,
      isSupport: false
    };
    chats.unshift(chat);
    
    if (isFirebaseActive) {
      db.ref('chats/' + chat.id).set(chat);
    } else {
      localStorage.setItem('abenson_chats', JSON.stringify(chats));
    }
  }
  
  toggleChatWidget(true);
  selectConversation(chat.id);
}

function triggerAutoReply(chat, buyerMessage) {
  if (typingTimeout) clearTimeout(typingTimeout);
  
  // Do not auto-reply if admin dashboard chats view is active
  const adminChatsPanel = document.getElementById('adminChatsPanel');
  const isAdminViewingChats = adminChatsPanel && adminChatsPanel.classList.contains('active') && (currentUser && currentUser.isAdmin);
  if (isAdminViewingChats) return;

  typingTimeout = setTimeout(() => {
    const container = document.getElementById('chatMessagesContainer');
    
    const existingTyping = document.querySelector('.msg-row.typing');
    if (existingTyping) existingTyping.remove();
    
    const typingRow = document.createElement('div');
    typingRow.className = "msg-row received typing";
    typingRow.innerHTML = `
      <div class="msg-bubble typing-bubble">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;
    if (container) {
      container.appendChild(typingRow);
      container.scrollTop = container.scrollHeight;
    }
    
    const statusEl = document.getElementById('activeChatStatus');
    if (statusEl) statusEl.textContent = "Typing...";
    
    setTimeout(() => {
      const typingEl = document.querySelector('.msg-row.typing');
      if (typingEl) typingEl.remove();
      
      const statusEl2 = document.getElementById('activeChatStatus');
      if (statusEl2) statusEl2.textContent = "Online";
      
      let replyText = "";
      if (chat.isSupport) {
        replyText = getSupportResponse(buyerMessage);
      } else {
        const listing = listings.find(l => l.id === chat.listingId);
        const itemTitle = listing ? listing.title : 'phone';
        replyText = getSellerResponse(buyerMessage, chat.seller, itemTitle);
      }
      
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      chat.messages.push({
        sender: "seller",
        text: replyText,
        time: timeStr
      });
      
      if (activeChatId !== chat.id) {
        chat.unread = true;
      }
      
      if (isFirebaseActive) {
        db.ref('chats/' + chat.id).set(chat);
      } else {
        localStorage.setItem('abenson_chats', JSON.stringify(chats));
        updateUnreadBadges();
        renderConversations();
        
        if (activeChatId === chat.id) {
          renderActiveChatMessages();
        } else {
          showToast(`New message from ${chat.seller}!`);
        }
      }
    }, 1200);
  }, 600);
}

function getSupportResponse(msg) {
  const query = msg.toLowerCase();
  
  if (query.includes('delivery') || query.includes('status') || query.includes('track')) {
    return "Next-day shipping is active for smartphone orders placed before 2 PM in Metro Manila! You can track shipping in the Account tab or by checking mm-mobile.com/track.";
  }
  
  if (query.includes('store') || query.includes('branch') || query.includes('location')) {
    return "M&M MOBILE STORE branches are located in SM Megamall, Trinoma, and Shangri-La Plaza. Open daily from 10 AM to 9 PM.";
  }
  
  if (query.includes('promo') || query.includes('discount') || query.includes('code')) {
    return "Use code 'MMSCHOOL' to enjoy up to PHP 2,000 off on selected 5G smartphones!";
  }
  
  if (query.includes('return') || query.includes('refund') || query.includes('policy')) {
    return "We offer a 7-day swap/refund guarantee for factory defect issues on all smartphones. Bring the unit in its original box with receipt to any M&M Mobile branch.";
  }
  
  return "I'm your M&M Mobile assistant. Ask me about store locations, phone trade-ins, next-day shipping, or return policies!";
}

function getSellerResponse(msg, sellerName, itemTitle) {
  const query = msg.toLowerCase();
  
  if (query.includes('available') || query.includes('still have') || query.includes('na ba')) {
    return `Hi! Yes, the ${itemTitle} is available. I've only used it for a short time.`;
  }
  
  if (query.includes('negotiable') || query.includes('price') || query.includes('discount') || query.includes('tawad') || query.includes('last price')) {
    return `Yes, the price is slightly negotiable. I can offer PHP 1,000 off if you can meet up today.`;
  }
  
  if (query.includes('meet') || query.includes('location') || query.includes('meetup') || query.includes('where')) {
    return `We can meet up at SM Megamall or Trinoma. What time are you free?`;
  }
  
  if (query.includes('battery') || query.includes('health') || query.includes('percent')) {
    return `Battery health is 100% since it's brand new and sealed.`;
  }
  
  if (query.includes('hello') || query.includes('hi') || query.includes('good morning') || query.includes('good afternoon') || query.includes('good evening')) {
    return `Hello! Are you interested in the ${itemTitle}? Let me know if you want to meetup.`;
  }
  
  return `Thanks for your inquiry about the ${itemTitle}. Let me know if you would like to arrange meetup details.`;
}



// Helper Functions for Buyer-Specific Support Chats
function getCurrentUserSupportChatId() {
  if (currentUser) {
    const cleanId = currentUser.email.replace(/[^a-zA-Z0-9]/g, '_');
    return `chat_support_${cleanId}`;
  }
  
  // Guest user fallback (persistent in current browser session)
  let guestId = sessionStorage.getItem('mm_guest_id');
  if (!guestId) {
    guestId = 'guest_' + Math.floor(1000 + Math.random() * 9000);
    sessionStorage.setItem('mm_guest_id', guestId);
  }
  return `chat_support_${guestId}`;
}

function ensureUserSupportChatExists() {
  const chatId = getCurrentUserSupportChatId();
  let chat = chats.find(c => c.id === chatId);
  if (!chat) {
    const customerName = currentUser ? currentUser.name : (sessionStorage.getItem('mm_guest_id') ? "Guest (" + sessionStorage.getItem('mm_guest_id').split('_')[1] + ")" : "Guest User");
    const customerEmail = currentUser ? currentUser.email : "guest@mm-mobile.com";
    chat = {
      id: chatId,
      listingId: null,
      seller: "M&M Mobile Support",
      customerName: customerName,
      customerEmail: customerEmail,
      avatarColor: "hsl(220, 80%, 45%)",
      messages: [
        { sender: "seller", text: "Hello! Welcome to M&M MOBILE STORE. I'm your mobile shopping assistant. How can I help you today?", time: "Just now" }
      ],
      unread: false,
      isSupport: true
    };
    chats.unshift(chat);
    if (isFirebaseActive) {
      db.ref('chats/' + chatId).set(chat);
    } else {
      localStorage.setItem('abenson_chats', JSON.stringify(chats));
    }
  }
  return chatId;
}

document.addEventListener('DOMContentLoaded', initApp);
