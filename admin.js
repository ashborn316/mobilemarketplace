// M&M MOBILE STORE - Admin Console JavaScript Logic
let listings = [];
let chats = [];
let savedOrders = [];
let adminActiveChatId = null;
let currentDetailListingId = null;
let isFirebaseActive = false;
let db = null;
let currentUser = null;

// Initial Mock Listings (reused from app.js to ensure local modifications fallback safely)
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
    reviews: [],
    description: "Experience the next-generation Apple iPhone 17 in eye-catching Lavender. Featuring the powerful A19 chip, advanced computational photography, and an immersive display."
  }
];

// Custom Toast Message system
function showToast(msg) {
  const toast = document.createElement('div');
  toast.style.position = 'fixed';
  toast.style.bottom = '2rem';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.backgroundColor = '#1e293b';
  toast.style.color = 'white';
  toast.style.padding = '0.75rem 1.5rem';
  toast.style.borderRadius = '30px';
  toast.style.fontSize = '0.85rem';
  toast.style.fontWeight = '500';
  toast.style.zIndex = '9999';
  toast.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.3)';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

// Initialize Admin Application
function initAdminApp() {
  // Load user session
  const storedUser = localStorage.getItem('mm_user');
  if (storedUser) {
    try {
      currentUser = JSON.parse(storedUser);
      if (currentUser && !currentUser.isAdmin) {
        // Not admin, redirect immediately
        window.location.href = 'index.html';
        return;
      }
    } catch (e) {
      currentUser = null;
    }
  }

  // Load listings safely
  const storedListings = localStorage.getItem('abenson_listings');
  if (storedListings) {
    try {
      listings = JSON.parse(storedListings);
    } catch (e) {
      listings = DEFAULT_LISTINGS;
    }
  } else {
    listings = DEFAULT_LISTINGS;
  }

  // Load orders history
  const storedOrders = localStorage.getItem('mm_orders');
  if (storedOrders) {
    try {
      savedOrders = JSON.parse(storedOrders);
    } catch (e) {
      savedOrders = [];
    }
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
          
          if (currentUser && currentUser.isAdmin) {
            renderAdminChats();
            renderAdminChatMessages();
          }
        }
      });
    } catch (e) {
      console.error("Firebase database init failed:", e);
    }
  }

  setupAdminEventListeners();
  syncAdminDashboard();
}

// Setup Event Listeners
function setupAdminEventListeners() {
  // Admin authentication listener
  document.getElementById('adminLoginForm').addEventListener('submit', handleAdminLoginSubmit);
  
  // Admin Chat input listener
  document.getElementById('adminChatInputForm').addEventListener('submit', handleSendAdminChatMessage);

  // Admin Log Out
  document.getElementById('btnAdminLogOut').addEventListener('click', handleAdminLogOut);

  // Modal close listeners
  document.getElementById('btnCloseSellModal').addEventListener('click', () => {
    document.getElementById('sellModal').classList.remove('active');
  });
  document.getElementById('btnCancelSell').addEventListener('click', () => {
    document.getElementById('sellModal').classList.remove('active');
  });
  document.getElementById('sellForm').addEventListener('submit', handleSellFormSubmit);

  // Admin Add Product Button
  document.getElementById('btnAdminAddProduct').addEventListener('click', () => {
    document.getElementById('sellForm').removeAttribute('data-edit-id');
    document.querySelector('#sellModal .modal-title').textContent = "Add Smartphone (Admin)";
    document.getElementById('sellModal').classList.add('active');
  });

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
}

// Sync Admin Dashboard
function syncAdminDashboard() {
  const adminAuthPanel = document.getElementById('adminAuthPanel');
  const adminDashboardView = document.getElementById('adminDashboardView');
  const logoutHeader = document.getElementById('adminLogoutHeader');
  
  if (currentUser && currentUser.isAdmin) {
    adminAuthPanel.style.display = 'none';
    adminDashboardView.style.display = 'block';
    logoutHeader.style.display = 'block';
    
    // Refresh the active admin tab
    const activeTabBtn = document.querySelector('.admin-tab-btn.active');
    const activeTab = activeTabBtn ? activeTabBtn.getAttribute('data-admin-tab') : 'products';
    
    if (activeTab === 'products') {
      renderAdminProducts();
    } else if (activeTab === 'orders') {
      renderAdminOrders();
    } else if (activeTab === 'inventory') {
      renderAdminInventory();
    } else if (activeTab === 'chats') {
      renderAdminChats();
    }
  } else {
    adminAuthPanel.style.display = 'block';
    adminDashboardView.style.display = 'none';
    logoutHeader.style.display = 'none';
  }
}

// Handle Admin Login Submit
function handleAdminLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('adminEmail').value.trim();
  const password = document.getElementById('adminPassword').value;
  
  if (email.toLowerCase() === 'admin@mm-mobile.com' && password === 'admin123') {
    currentUser = {
      name: "Admin Manager",
      email: "admin@mm-mobile.com",
      isAdmin: true
    };
    localStorage.setItem('mm_user', JSON.stringify(currentUser));
    document.getElementById('adminLoginError').style.display = 'none';
    document.getElementById('adminLoginForm').reset();
    syncAdminDashboard();
    showToast("Admin verification successful!");
  } else {
    document.getElementById('adminLoginError').style.display = 'block';
  }
}

// Handle Admin Log Out
function handleAdminLogOut() {
  currentUser = null;
  localStorage.removeItem('mm_user');
  adminActiveChatId = null;
  syncAdminDashboard();
  // Redirect back to user website
  window.location.href = 'index.html';
}

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
    showToast("Smartphone listing deleted.");
  }
}

// Handle Form Submission for new listing or editing (Admin context)
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

  renderAdminProducts();
  renderAdminInventory();
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

// Admin Live Chats Management
function renderAdminChats() {
  const container = document.getElementById('adminChatsList');
  container.innerHTML = '';
  
  if (chats.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: #888; padding: 2rem;">No active chats</div>`;
    return;
  }
  
  chats.forEach(chat => {
    const lastMsg = chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : null;
    const lastText = lastMsg ? lastMsg.text : 'No messages';
    const activeClass = chat.id === adminActiveChatId ? 'active' : '';
    
    let title = "";
    if (chat.isSupport) {
      title = `Support Chat: ${chat.customerName || "Guest User"}`;
    } else {
      const listing = listings.find(l => l.id === chat.listingId);
      title = `${chat.buyerName || "Guest"} (regarding ${listing ? listing.title : 'phone'})`;
    }
    
    const convoEl = document.createElement('div');
    convoEl.className = `admin-convo-item ${activeClass}`;
    convoEl.onclick = () => selectAdminConversation(chat.id);
    convoEl.innerHTML = `
      <span class="admin-convo-title" style="font-weight: 700;">${title}</span>
      <span class="admin-convo-meta" style="font-size: 0.75rem; color: #666;">${lastText}</span>
    `;
    
    container.appendChild(convoEl);
  });
}

function selectAdminConversation(chatId) {
  adminActiveChatId = chatId;
  renderAdminChats();
  renderAdminChatMessages();
}

function renderAdminChatMessages() {
  const messagesContainer = document.getElementById('adminChatMessagesContainer');
  const header = document.getElementById('adminChatActiveHeader');
  const inputForm = document.getElementById('adminChatInputForm');
  
  if (!adminActiveChatId) {
    messagesContainer.innerHTML = `<div class="admin-chat-empty">Select a conversation to start chatting</div>`;
    header.style.display = 'none';
    inputForm.style.display = 'none';
    return;
  }
  
  const chat = chats.find(c => c.id === adminActiveChatId);
  if (!chat) {
    adminActiveChatId = null;
    renderAdminChatMessages();
    return;
  }
  
  header.style.display = 'block';
  inputForm.style.display = 'flex';
  
  let title = "";
  if (chat.isSupport) {
    title = `Support Chat: ${chat.customerName || "Guest User"}`;
  } else {
    const listing = listings.find(l => l.id === chat.listingId);
    title = `${chat.buyerName || "Guest"} (regarding ${listing ? listing.title : 'phone'})`;
  }
  document.getElementById('adminActiveChatName').textContent = title;
  
  messagesContainer.innerHTML = '';
  chat.messages.forEach(msg => {
    const row = document.createElement('div');
    row.className = `msg-row ${msg.sender === 'buyer' ? 'received' : 'sent'}`;
    
    const senderName = msg.sender === 'buyer' ? (chat.isSupport ? (chat.customerName || 'Customer') : (chat.buyerName || 'Customer')) : (chat.isSupport ? 'Support Agent' : 'Seller');
    
    row.innerHTML = `
      <div class="msg-bubble" style="padding: 0.6rem 0.8rem; font-size: 0.85rem;">
        <div style="font-weight: 700; font-size: 0.75rem; margin-bottom: 0.15rem; opacity: 0.85;">${senderName}</div>
        <div>${msg.text}</div>
        <span class="msg-time" style="font-size: 0.65rem; display: block; text-align: right; opacity: 0.7; margin-top: 0.2rem;">${msg.time}</span>
      </div>
    `;
    messagesContainer.appendChild(row);
  });
  
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function handleSendAdminChatMessage(e) {
  e.preventDefault();
  const input = document.getElementById('adminChatInputField');
  const text = input.value.trim();
  if (!text || !adminActiveChatId) return;
  
  const chat = chats.find(c => c.id === adminActiveChatId);
  if (!chat) return;
  
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  const newMessage = {
    sender: "seller", 
    text: text,
    time: timeStr
  };
  
  chat.messages.push(newMessage);
  input.value = '';
  
  if (isFirebaseActive) {
    db.ref('chats/' + chat.id).set(chat);
  } else {
    localStorage.setItem('abenson_chats', JSON.stringify(chats));
    renderAdminChatMessages();
    renderAdminChats();
  }
}

document.addEventListener('DOMContentLoaded', initAdminApp);
