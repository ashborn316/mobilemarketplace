// Mobile Phone Marketplace Application State & Logic

// Initial Mock Data matching the screenshot
const DEFAULT_LISTINGS = [
  {
    id: "lst_001",
    title: "iPhone 12 Pro max",
    price: 15000,
    condition: "Lightly Used",
    storage: "128gb",
    brand: "apple",
    model: "iPhone 12",
    seller: "christianramirez160490",
    avatarColor: "hsl(210, 70%, 45%)",
    postTime: "5 days ago",
    image: "assets/iphone12.png",
    likes: 7,
    isLiked: false,
    description: "Selling my lightly used iPhone 12 Pro Max. Always kept in case with tempered glass screen protector. FaceID, TrueTone are fully working. Open to all networks. Package includes original box and lightning to USB-C cable."
  },
  {
    id: "lst_002",
    title: "Iphone XS Max 256gb",
    price: 5000,
    condition: "Well Used",
    storage: "256gb",
    brand: "apple",
    model: "iPhone XS",
    seller: "aquilacon1614",
    avatarColor: "hsl(280, 55%, 45%)",
    postTime: "31 minutes ago",
    image: "assets/iphonexs.png",
    likes: 2,
    isLiked: false,
    description: "Good working condition iPhone XS Max 256GB. Battery health is at 78%. Back glass has some minor scratches but no cracks. Screen has light hairline scratch, barely visible when screen is on. Comes with free cute ribbon case!"
  },
  {
    id: "lst_003",
    title: "Iphone 14 plus 1TB",
    price: 16000,
    condition: "Like New",
    storage: "1tb",
    brand: "apple",
    model: "iPhone 14",
    seller: "luckyflower_a025c8",
    avatarColor: "hsl(340, 70%, 45%)",
    postTime: "9 hours ago",
    image: "assets/iphone14.png",
    likes: 2,
    isLiked: false,
    description: "Selling like-new iPhone 14 Plus in beautiful purple. Massive 1TB storage, great for content creators. No scratches, pristine condition. Battery health 95%. Unlocked and includes box + original charging accessories."
  },
  {
    id: "lst_004",
    title: "iPhone 15 Pro Max 512GB Titanium Blue eSIM Factory...",
    price: 32040,
    condition: "Well Used",
    storage: "512gb",
    brand: "apple",
    model: "iPhone 15",
    seller: "sidiniseokjin",
    avatarColor: "hsl(120, 45%, 40%)",
    postTime: "2 minutes ago",
    image: "assets/iphone15.png",
    likes: 0,
    isLiked: false,
    description: "Factory unlocked eSIM iPhone 15 Pro Max in Blue Titanium. 512GB capacity. 100% authentic. Comes with small personalized anime sticker on the back (can be easily removed). Functions perfectly, screen is flawless."
  }
];

// State Management
let listings = [];
let savedSearches = false;

// Live Chat State
let chats = [];
let activeChatId = null;
let currentDetailListingId = null;
let typingTimeout = null;

const DEFAULT_CHATS = [
  {
    id: "chat_lst_001",
    listingId: "lst_001",
    seller: "christianramirez160490",
    avatarColor: "hsl(210, 70%, 45%)",
    messages: [
      { sender: "seller", text: "Hello! Thanks for your interest in the iPhone 12 Pro Max.", time: "1 day ago" },
      { sender: "buyer", text: "Hi! Is the item still available?", time: "1 day ago" },
      { sender: "seller", text: "Yes, it is still available. Fully working, Face ID is fine.", time: "1 day ago" }
    ],
    unread: true
  }
];

// Initialize App
function initApp() {
  // Load data from localStorage or fallback to default
  const storedListings = localStorage.getItem('mm_listings');
  if (storedListings) {
    listings = JSON.parse(storedListings);
  } else {
    listings = DEFAULT_LISTINGS;
    localStorage.setItem('mm_listings', JSON.stringify(listings));
  }

  // Load chats from localStorage
  const storedChats = localStorage.getItem('mm_chats');
  if (storedChats) {
    chats = JSON.parse(storedChats);
  } else {
    chats = DEFAULT_CHATS;
    localStorage.setItem('mm_chats', JSON.stringify(chats));
  }

  // Load Saved Search toggle status
  savedSearches = localStorage.getItem('mm_saved_search') === 'true';
  document.getElementById('saveSearchToggle').checked = savedSearches;

  // Add Event Listeners
  setupEventListeners();

  // Initial Render
  renderListings();
  updateUnreadBadges();
  renderConversations();
}

// Setup Event Listeners
function setupEventListeners() {
  // Search Input
  document.getElementById('searchInput').addEventListener('input', renderListings);

  // Filters
  document.getElementById('filterCategory').addEventListener('change', renderListings);
  document.getElementById('filterSort').addEventListener('change', renderListings);
  document.getElementById('filterModel').addEventListener('change', renderListings);
  document.getElementById('filterStorage').addEventListener('change', renderListings);
  document.getElementById('filterCondition').addEventListener('change', renderListings);

  // Logo Reset
  document.getElementById('logoLink').addEventListener('click', (e) => {
    e.preventDefault();
    resetFilters();
  });

  // Save Search Toggle
  document.getElementById('saveSearchToggle').addEventListener('change', (e) => {
    savedSearches = e.target.checked;
    localStorage.setItem('mm_saved_search', savedSearches);
    showToast(savedSearches ? "Search criteria saved!" : "Search removed from saved list.");
  });

  // Modal Open/Close - Sell Phone
  const sellModal = document.getElementById('sellModal');
  document.getElementById('btnSellPhone').addEventListener('click', () => {
    sellModal.classList.add('active');
  });
  document.getElementById('btnCloseSellModal').addEventListener('click', () => {
    sellModal.classList.remove('active');
  });
  document.getElementById('btnCancelSell').addEventListener('click', () => {
    sellModal.classList.remove('active');
  });

  // Sell Form Submit
  document.getElementById('sellForm').addEventListener('submit', handleSellFormSubmit);

  // Modal Open/Close - Detail
  const detailModal = document.getElementById('detailModal');
  document.getElementById('btnCloseDetailModal').addEventListener('click', () => {
    detailModal.classList.remove('active');
  });

  // Header dummy buttons
  document.getElementById('btnNotifications').addEventListener('click', () => {
    showToast("No new notifications at this time!");
  });
  document.getElementById('btnProfile').addEventListener('click', () => {
    showToast("Profile profile loaded (simulation)");
  });

  // Live Chat Event Listeners
  const chatWidget = document.getElementById('chatWidget');
  const chatFloatingBubble = document.getElementById('chatFloatingBubble');

  // Open Chat from Floating Bubble or Header Message Button
  document.getElementById('btnMessages').addEventListener('click', () => {
    toggleChatWidget(true);
  });
  chatFloatingBubble.addEventListener('click', () => {
    toggleChatWidget(true);
  });

  // Expand/Collapse Chat Window
  document.getElementById('btnExpandChat').addEventListener('click', () => {
    chatWidget.classList.toggle('expanded');
    const container = document.getElementById('chatMessagesContainer');
    if (container) {
      setTimeout(() => {
        container.scrollTop = container.scrollHeight;
      }, 200);
    }
  });

  // Minimize Chat
  document.getElementById('btnMinimizeChat').addEventListener('click', () => {
    toggleChatWidget(false, true); // Keep floating bubble visible
  });

  // Close Chat
  document.getElementById('btnCloseChat').addEventListener('click', () => {
    toggleChatWidget(false, false); // Hide completely
  });

  // Back Button for Mobile layouts
  document.getElementById('btnChatBack').addEventListener('click', () => {
    document.getElementById('chatSidebar').classList.remove('hidden');
  });

  // Sidebar Search
  document.getElementById('chatSearchInput').addEventListener('input', renderConversations);

  // Chat input send
  document.getElementById('chatInputArea').addEventListener('submit', handleSendChatMessage);

  // Suggestion Chips
  document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      sendDirectMessage(e.target.textContent);
    });
  });

  // Detail Modal Actions
  document.getElementById('btnChatSeller').addEventListener('click', () => {
    if (currentDetailListingId) {
      detailModal.classList.remove('active');
      openChatWithSeller(currentDetailListingId);
    } else {
      showToast("Unable to start chat. Listing not found.");
    }
  });

  document.getElementById('btnBuyNow').addEventListener('click', () => {
    showToast("Order initialized! Redirecting to checkout...");
  });
}

// Reset Filters
function resetFilters() {
  document.getElementById('searchInput').value = '';
  document.getElementById('filterCategory').value = 'all';
  document.getElementById('filterSort').value = 'best';
  document.getElementById('filterModel').value = 'all';
  document.getElementById('filterStorage').value = 'all';
  document.getElementById('filterCondition').value = 'all';
  renderListings();
}

// Handle Form Submission
function handleSellFormSubmit(e) {
  e.preventDefault();
  
  const title = document.getElementById('phoneTitle').value.trim();
  const brand = document.getElementById('phoneBrand').value;
  const price = parseFloat(document.getElementById('phonePrice').value);
  const storage = document.getElementById('phoneStorage').value;
  const condition = document.getElementById('phoneCondition').value;
  const seller = document.getElementById('phoneSeller').value.trim();
  const image = document.getElementById('phoneImage').value;
  const description = document.getElementById('phoneDesc').value.trim();

  // Create random profile color
  const hue = Math.floor(Math.random() * 360);
  const avatarColor = `hsl(${hue}, 60%, 45%)`;

  const newListing = {
    id: 'lst_' + Date.now(),
    title,
    price,
    condition,
    storage,
    brand,
    model: title.toLowerCase().includes('samsung') ? 'samsung' : 'iPhone 15', // Simple heuristic
    seller,
    avatarColor,
    postTime: 'Just now',
    image,
    likes: 0,
    isLiked: false,
    description
  };

  // Prepend to Listings
  listings.unshift(newListing);
  localStorage.setItem('mm_listings', JSON.stringify(listings));

  // Reset form and close modal
  document.getElementById('sellForm').reset();
  document.getElementById('sellModal').classList.remove('active');

  // Render & show success Toast
  renderListings();
  showToast("Listing posted successfully!");
}

// Toggle Like
function toggleLike(id) {
  const itemIndex = listings.findIndex(item => item.id === id);
  if (itemIndex !== -1) {
    const item = listings[itemIndex];
    item.isLiked = !item.isLiked;
    if (item.isLiked) {
      item.likes += 1;
    } else {
      item.likes = Math.max(0, item.likes - 1);
    }
    
    // Save state
    localStorage.setItem('mm_listings', JSON.stringify(listings));
    
    // Rerender specific card values instead of full refresh
    const cardElement = document.querySelector(`[data-id="${id}"]`);
    if (cardElement) {
      const likeBtn = cardElement.querySelector('.btn-like');
      const likeCount = likeBtn.querySelector('.like-count');
      
      if (item.isLiked) {
        likeBtn.classList.add('active');
      } else {
        likeBtn.classList.remove('active');
      }
      likeCount.textContent = item.likes;
    }
  }
}

// Show Detail Modal
function openDetailModal(id) {
  currentDetailListingId = id;
  const item = listings.find(item => item.id === id);
  if (!item) return;

  document.getElementById('detailImage').src = item.image;
  document.getElementById('detailTitle').textContent = item.title;
  document.getElementById('detailPrice').textContent = `PHP ${item.price.toLocaleString()}`;
  document.getElementById('detailCondition').textContent = item.condition;
  document.getElementById('detailStorage').textContent = item.storage;
  document.getElementById('detailSeller').textContent = item.seller;
  document.getElementById('detailPosted').textContent = item.postTime;
  document.getElementById('detailDesc').textContent = item.description;

  document.getElementById('detailModal').classList.add('active');
}

// Show Toast
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  
  toastMessage.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Render listings dynamically based on filter and query
function renderListings() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const category = document.getElementById('filterCategory').value;
  const sort = document.getElementById('filterSort').value;
  const modelFilter = document.getElementById('filterModel').value;
  const storageFilter = document.getElementById('filterStorage').value;
  const conditionFilter = document.getElementById('filterCondition').value;

  // Filter listings
  let filtered = listings.filter(item => {
    // Search query match
    const matchesQuery = item.title.toLowerCase().includes(query) ||
                         item.description.toLowerCase().includes(query) ||
                         item.seller.toLowerCase().includes(query);

    // Brand category filter
    const matchesCategory = category === 'all' || item.brand === category;

    // Model filter
    let matchesModel = true;
    if (modelFilter !== 'all') {
      matchesModel = item.title.toLowerCase().includes(modelFilter.toLowerCase());
    }

    // Storage filter
    const matchesStorage = storageFilter === 'all' || item.storage.toLowerCase() === storageFilter.toLowerCase();

    // Condition filter
    const matchesCondition = conditionFilter === 'all' || item.condition.toLowerCase() === conditionFilter.toLowerCase();

    return matchesQuery && matchesCategory && matchesModel && matchesStorage && matchesCondition;
  });

  // Sort listings
  if (sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === 'recent') {
    // Recent sorting by post time or simulation (since ids are sequential if generated)
    filtered.sort((a, b) => b.id.localeCompare(a.id));
  } else {
    // Best match - default order
    // Keep it as original state
  }

  // Update listings count title
  const resultsTitle = document.getElementById('resultsTitle');
  if (filtered.length > 0) {
    resultsTitle.textContent = `${filtered.length.toLocaleString()}+ New and Used Cellphones for Sale in the Philippines | MobileMarket`;
  } else {
    resultsTitle.textContent = `0 Cellphones found in the Philippines | MobileMarket`;
  }

  const container = document.getElementById('listingsGrid');
  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">🔍</div>
        <h3 class="empty-title">No listings found</h3>
        <p class="empty-desc">We couldn't find anything matching your filters or search criteria. Try removing some filters or search for something else.</p>
        <button class="btn-secondary" style="margin-top: 1.5rem;" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('data-id', item.id);

    const initial = item.seller.charAt(0).toUpperCase();

    card.innerHTML = `
      <div class="card-seller">
        <div class="seller-avatar" style="background-color: ${item.avatarColor}">${initial}</div>
        <div class="seller-info">
          <span class="seller-name">${item.seller}</span>
          <span class="post-time">${item.postTime}</span>
        </div>
      </div>
      <div class="card-image-wrapper" onclick="openDetailModal('${item.id}')">
        <img class="card-image" src="${item.image}" alt="${item.title}">
        <span class="condition-badge">${item.condition}</span>
      </div>
      <div class="card-content">
        <h3 class="card-title" onclick="openDetailModal('${item.id}')">${item.title}</h3>
        <div class="card-price">PHP ${item.price.toLocaleString()}</div>
        <div class="card-details">
          <span>${item.storage.toUpperCase()}</span>
          <span class="dot-separator"></span>
          <span>Verified Seller</span>
        </div>
        <div class="card-actions">
          <button class="btn-like ${item.isLiked ? 'active' : ''}" onclick="toggleLike('${item.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <span class="like-count">${item.likes}</span>
          </button>
          <button class="btn-more" title="More Options" onclick="showToast('Listing option panel (demo)')">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
          </button>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// --- Live Chat Helper Functions ---

function toggleChatWidget(open, minimize = false) {
  const widget = document.getElementById('chatWidget');
  const bubble = document.getElementById('chatFloatingBubble');
  
  if (open) {
    widget.classList.add('active');
    bubble.style.display = 'none';
    
    // If a chat is active, focus input
    if (activeChatId) {
      setTimeout(() => {
        const input = document.getElementById('chatInputField');
        if (input) input.focus();
      }, 300);
    }
  } else {
    widget.classList.remove('active');
    if (minimize) {
      bubble.style.display = 'flex';
    } else {
      bubble.style.display = 'none';
    }
  }
}

function updateUnreadBadges() {
  const totalUnread = chats.reduce((acc, c) => acc + (c.unread ? 1 : 0), 0);
  
  const headerBadge = document.getElementById('chatBadge');
  const floatingBadge = document.getElementById('chatFloatingBadge');
  const widgetBadge = document.getElementById('chatWidgetBadge');
  
  if (totalUnread > 0) {
    headerBadge.textContent = totalUnread;
    headerBadge.style.display = 'block';
    
    floatingBadge.textContent = totalUnread;
    floatingBadge.style.display = 'block';
    
    widgetBadge.textContent = totalUnread;
    widgetBadge.style.display = 'inline-block';
  } else {
    headerBadge.style.display = 'none';
    floatingBadge.style.display = 'none';
    widgetBadge.style.display = 'none';
  }
}

function renderConversations() {
  const query = document.getElementById('chatSearchInput').value.toLowerCase().trim();
  const container = document.getElementById('chatConversationsList');
  container.innerHTML = '';
  
  const filteredChats = chats.filter(chat => {
    const listing = listings.find(l => l.id === chat.listingId);
    const itemTitle = listing ? listing.title : 'Mobile Phone';
    return chat.seller.toLowerCase().includes(query) || itemTitle.toLowerCase().includes(query);
  });
  
  if (filteredChats.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 2rem 1rem; font-size: 0.85rem;">No active chats</div>`;
    return;
  }
  
  filteredChats.forEach(chat => {
    const listing = listings.find(l => l.id === chat.listingId);
    const itemTitle = listing ? listing.title : 'Mobile Phone';
    const itemThumb = listing ? listing.image : 'assets/iphone12.png';
    const initial = chat.seller.charAt(0).toUpperCase();
    
    const lastMsg = chat.messages.length > 0 ? chat.messages[chat.messages.length - 1] : null;
    const lastText = lastMsg ? (lastMsg.sender === 'buyer' ? 'You: ' : '') + lastMsg.text : 'No messages yet';
    const lastTime = lastMsg ? lastMsg.time : '';
    
    const itemEl = document.createElement('div');
    itemEl.className = `convo-item ${chat.id === activeChatId ? 'active' : ''} ${chat.unread ? 'unread' : ''}`;
    itemEl.onclick = () => selectConversation(chat.id);
    
    itemEl.innerHTML = `
      <div class="seller-avatar" style="background-color: ${chat.avatarColor}; width: 36px; height: 36px; font-size: 0.9rem; display: flex; align-items: center; justify-content: center; color: var(--bg-primary); font-weight: 600;">${initial}</div>
      <div class="convo-item-details">
        <div class="convo-header-row">
          <span class="convo-name">${chat.seller}</span>
          <span class="convo-time">${lastTime}</span>
        </div>
        <span class="convo-last-msg">${lastText}</span>
      </div>
      <img src="${itemThumb}" class="convo-item-thumb" alt="${itemTitle}">
      ${chat.unread ? '<div class="convo-unread-dot"></div>' : ''}
    `;
    
    container.appendChild(itemEl);
  });
}

function selectConversation(chatId) {
  activeChatId = chatId;
  
  // Mark as read
  const chat = chats.find(c => c.id === chatId);
  if (chat) {
    chat.unread = false;
    localStorage.setItem('mm_chats', JSON.stringify(chats));
  }
  
  updateUnreadBadges();
  renderConversations();
  
  // Update header and layouts
  const listing = listings.find(l => l.id === chat.listingId);
  const itemTitle = listing ? listing.title : 'Mobile Phone';
  const itemPrice = listing ? `PHP ${listing.price.toLocaleString()}` : '';
  const itemThumb = listing ? listing.image : 'assets/iphone12.png';
  const initial = chat.seller.charAt(0).toUpperCase();
  
  document.getElementById('activeChatAvatar').style.backgroundColor = chat.avatarColor;
  document.getElementById('activeChatAvatar').textContent = initial;
  document.getElementById('activeChatAvatar').style.display = 'flex';
  document.getElementById('activeChatAvatar').style.alignItems = 'center';
  document.getElementById('activeChatAvatar').style.justifyContent = 'center';
  document.getElementById('activeChatAvatar').style.color = 'var(--bg-primary)';
  document.getElementById('activeChatAvatar').style.fontWeight = '600';
  document.getElementById('activeChatAvatar').style.width = '32px';
  document.getElementById('activeChatAvatar').style.height = '32px';
  
  document.getElementById('activeChatName').textContent = chat.seller;
  document.getElementById('activeChatStatus').textContent = "Online";
  
  document.getElementById('activeItemImage').src = itemThumb;
  document.getElementById('activeItemTitle').textContent = itemTitle;
  document.getElementById('activeItemPrice').textContent = itemPrice;
  
  // Set detail modal click shortcut
  document.getElementById('activeItemShortcut').onclick = () => {
    openDetailModal(chat.listingId);
  };
  
  // Show active panes, suggestion chips, input areas, hide empty state
  document.getElementById('chatEmptyState').style.display = 'none';
  document.getElementById('chatActiveHeader').style.display = 'flex';
  document.getElementById('chatSuggestions').style.display = 'flex';
  document.getElementById('chatInputArea').style.display = 'flex';
  
  // Hide sidebar to show full chat window
  document.getElementById('chatSidebar').classList.add('hidden');
  
  renderActiveChatMessages();
}

function renderActiveChatMessages() {
  const chat = chats.find(c => c.id === activeChatId);
  const container = document.getElementById('chatMessagesContainer');
  container.innerHTML = '';
  
  if (!chat || chat.messages.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem; font-size: 0.85rem;">No messages yet. Send a greeting to start chatting!</div>`;
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
  
  // Scroll to bottom
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
  
  // Add to active chat
  chat.messages.push({
    sender: "buyer",
    text: text,
    time: timeStr
  });
  
  // Save & Render
  localStorage.setItem('mm_chats', JSON.stringify(chats));
  renderActiveChatMessages();
  renderConversations();
  
  // Trigger simulated typing indicator and response
  triggerSellerReply(chat.id, text);
}

function openChatWithSeller(listingId) {
  const item = listings.find(l => l.id === listingId);
  if (!item) return;
  
  // Check if chat already exists
  let chat = chats.find(c => c.listingId === listingId);
  
  if (!chat) {
    // Create new chat
    chat = {
      id: "chat_" + Date.now(),
      listingId: listingId,
      seller: item.seller,
      avatarColor: item.avatarColor || "hsl(210, 60%, 45%)",
      messages: [],
      unread: false
    };
    chats.unshift(chat);
    localStorage.setItem('mm_chats', JSON.stringify(chats));
  }
  
  // Toggle widget open and select it
  toggleChatWidget(true);
  selectConversation(chat.id);
}

function triggerSellerReply(chatId, buyerMessage) {
  const chat = chats.find(c => c.id === chatId);
  if (!chat) return;
  
  // Cancel previous typing response if user messages fast
  if (typingTimeout) clearTimeout(typingTimeout);
  
  // Delay for typing indicator
  typingTimeout = setTimeout(() => {
    // Show typing bubble in messages container
    const container = document.getElementById('chatMessagesContainer');
    
    // Remove previous typing indicators if any
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
    container.appendChild(typingRow);
    container.scrollTop = container.scrollHeight;
    
    // Update active seller status text to typing
    document.getElementById('activeChatStatus').textContent = "Typing...";
    
    // Delay for final message delivery
    setTimeout(() => {
      // Remove typing indicator
      const typingEl = document.querySelector('.msg-row.typing');
      if (typingEl) typingEl.remove();
      
      document.getElementById('activeChatStatus').textContent = "Online";
      
      const listing = listings.find(l => l.id === chat.listingId);
      const itemTitle = listing ? listing.title : 'mobile phone';
      const sellerReplyText = getMockResponse(buyerMessage, chat.seller, itemTitle);
      
      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      chat.messages.push({
        sender: "seller",
        text: sellerReplyText,
        time: timeStr
      });
      
      // If chat is not active currently, mark as unread
      if (activeChatId !== chat.id) {
        chat.unread = true;
      }
      
      localStorage.setItem('mm_chats', JSON.stringify(chats));
      updateUnreadBadges();
      renderConversations();
      
      if (activeChatId === chat.id) {
        renderActiveChatMessages();
      } else {
        // Trigger notification toast if minimized or on other screen
        showToast(`New message from ${chat.seller}!`);
      }
    }, 1500);
  }, 1000);
}

function getMockResponse(msg, sellerName, itemTitle) {
  const query = msg.toLowerCase();
  
  if (query.includes('available') || query.includes('still have') || query.includes('na ba')) {
    return `Hi! Yes, the ${itemTitle} is still available. Feel free to inspect it upon meetup.`;
  }
  
  if (query.includes('negotiable') || query.includes('price') || query.includes('discount') || query.includes('tawad') || query.includes('last price')) {
    return `Yes, it is slightly negotiable. I can let it go for a bit less if you can meet up today or tomorrow. What is your offer?`;
  }
  
  if (query.includes('meet') || query.includes('location') || query.includes('meetup') || query.includes('where')) {
    return `Sure! We can meet up at SM Megamall, Trinoma, or anywhere near MRT stations. What time are you free?`;
  }
  
  if (query.includes('battery') || query.includes('health') || query.includes('percent')) {
    return `The battery health is currently in good condition (around 82-90% depending on usage). It easily lasts the whole day.`;
  }
  
  if (query.includes('scratch') || query.includes('issue') || query.includes('condition') || query.includes('flaw')) {
    return `No issues at all, Face ID/Fingerprint is working perfectly. There are just some micro-scratches from normal case usage, but no dents or screen cracks!`;
  }
  
  if (query.includes('swap') || query.includes('trade')) {
    return `Sorry, I'm only looking to sell this device to raise cash. No swaps for now!`;
  }

  // Responses based on typical greetings
  if (query.includes('hello') || query.includes('hi') || query.includes('good morning') || query.includes('good afternoon') || query.includes('good evening')) {
    return `Hello! Thanks for reaching out. Are you interested in the ${itemTitle}? Let me know if you have any questions!`;
  }
  
  // Fallbacks
  const defaultAnswers = [
    `Thanks for the message! Let me check on that and get back to you shortly.`,
    `Okay, sounds good! When do you plan to drop by or do a meet-up?`,
    `Sure! Let me know when you are ready to deal. We can coordinate the location.`
  ];
  return defaultAnswers[Math.floor(Math.random() * defaultAnswers.length)];
}

// Start Application on DOM Load
document.addEventListener('DOMContentLoaded', initApp);
