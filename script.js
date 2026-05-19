const CONFIG = window.SALES_PAGE_CONFIG || {};

const products = [
  {
    id: "timi-t1a",
    name: "TIMI T1A",
    category: "tablet",
    price: 1990,
    image: "assets/products/timi-t1a.png",
    badge: "แท็บเล็ต",
    subtitle: "แท็บเล็ตจอใหญ่ ใส่ซิมได้",
    specs: ["จอใหญ่ ดูหนังสบาย", "ใส่ซิมได้", "เหมาะเรียนออนไลน์/ดูวิดีโอ"],
    tags: ["tablet", "large-screen"]
  },
  {
    id: "timi-t25",
    name: "TIMI T25",
    category: "phone",
    price: 1790,
    image: "assets/products/timi-t25.png",
    badge: "ขายดี",
    subtitle: "จอใหญ่ 6.92 นิ้ว แบตอึด",
    specs: ["จอ 6.92 นิ้ว", "แบต 6500mAh", "6+128GB", "Android 13"],
    tags: ["phone", "banking", "large-screen"]
  },
  {
    id: "timi-t20",
    name: "TIMI T20",
    category: "phone",
    price: 1790,
    image: "assets/products/timi-t20.jpg",
    badge: "คุ้ม",
    subtitle: "เครื่องพร้อมใช้ ราคาสบายกระเป๋า",
    specs: ["จอใหญ่", "แบตอึด", "เหมาะใช้งานทั่วไป", "รองรับแอปสำคัญ"],
    tags: ["phone", "banking"]
  },
  {
    id: "timi-t15s",
    name: "TIMI T15s",
    category: "phone",
    price: 1890,
    image: "assets/products/timi-t15s.png",
    badge: "สเปคดี",
    subtitle: "เล่นได้ 2 หน้าจอ จอใหญ่ 6.92 นิ้ว",
    specs: ["MTK 6580A", "จอ 6.92 นิ้ว", "แบต 6500mAh", "ROM สูงสุด 256GB ตามรุ่น"],
    tags: ["phone", "large-screen"]
  },
  {
    id: "timi-t30s",
    name: "TIMI T30s",
    category: "phone",
    price: 1890,
    image: "assets/products/timi-t30s.jpg",
    badge: "NEW",
    subtitle: "จอใหญ่ แบตอึด Android 13",
    specs: ["จอ 6.92 นิ้ว", "แบต 6500mAh", "RAM 6GB ROM 128GB", "Android 13"],
    tags: ["phone", "banking", "large-screen"]
  },
  {
    id: "timi-t3",
    name: "TIMI T3",
    category: "phone",
    price: 1790,
    image: "assets/products/timi-t3.jpg",
    badge: "หลายสี",
    subtitle: "ดีไซน์บางเบา สีให้เลือกเยอะ",
    specs: ["กล้องคู่ AI", "สีสวย", "ใช้งานทั่วไป", "เหมาะเป็นเครื่องสำรอง"],
    tags: ["phone"]
  },
  {
    id: "timi-t29",
    name: "TIMI T29",
    category: "phone",
    price: 1790,
    image: "assets/products/timi-t29.jpg",
    badge: "ราคาพิเศษ",
    subtitle: "จอใหญ่เต็มตา แบตอึดเต็มวัน",
    specs: ["RAM 6GB / ROM 128GB", "จอใหญ่", "แบต 6500mAh", "เหมาะใช้งานประจำวัน"],
    tags: ["phone", "banking", "large-screen"]
  },
  {
    id: "timi-t1s",
    name: "TIMI T-1s / T1s",
    category: "tablet",
    price: 2690,
    image: "assets/products/timi-t1s.jpg",
    badge: "4G LTE",
    subtitle: "แท็บเล็ตจอใหญ่ ใส่ซิมได้",
    specs: ["จอ 10.5 นิ้ว", "Android 15", "แบต 6800mAh", "แถมอุปกรณ์ตามโปร"],
    tags: ["tablet", "large-screen"]
  },
  {
    id: "timi-t18",
    name: "TIMI T18",
    category: "phone",
    price: 1590,
    image: "assets/products/timi-t18.png",
    badge: "ประหยัด",
    subtitle: "จอใหญ่ 6.8 นิ้ว รองรับแอปธนาคาร",
    specs: ["จอ 6.8 นิ้ว", "รองรับแอปธนาคาร", "เหมาะเล่นโซเชียล", "ราคาคุ้ม"],
    tags: ["phone", "banking"]
  },
  {
    id: "twz-v1",
    name: "TWZ V1",
    category: "phone",
    price: 1290,
    image: "assets/products/twz-v1.jpg",
    badge: "ถูกสุด",
    subtitle: "เครื่องเริ่มต้น ราคาประหยัด",
    specs: ["จอ 6.5 นิ้ว", "แบต 3000mAh", "เหมาะใช้งานพื้นฐาน", "เครื่องสำรองคุ้มค่า"],
    tags: ["phone", "lowest"]
  },
  {
    id: "twz-v9",
    name: "TWZ V9",
    category: "phone",
    price: 1390,
    image: "assets/products/twz-v9.png",
    badge: "คุ้มค่า",
    subtitle: "จอใหญ่ 6.82 นิ้ว ราคาดี",
    specs: ["จอ 6.82 นิ้ว", "เหมาะดูวิดีโอ", "เครื่องพร้อมใช้", "ราคาสบายกระเป๋า"],
    tags: ["phone", "large-screen"]
  }
];

const grid = document.querySelector("#productGrid");
const productSelect = document.querySelector("#productSelect");
const form = document.querySelector("#customerLeadForm");
const formNote = document.querySelector("#formNote");
const lineCta = document.querySelector("#lineCta");
const heroLineBtn = document.querySelector("#heroLineBtn");
const countdownEl = document.querySelector("#countdownText");
const heroCountdownEl = document.querySelector("#heroCountdown");
const catalogCountEl = document.querySelector("#catalogCount");
const heroMinPriceEl = document.querySelector("#heroMinPrice");

function money(value) {
  return Number(value).toLocaleString("th-TH");
}

function isPlaceholder(value = "") {
  return !value || value.includes("YOUR_") || value.includes("@YOUR_");
}

function getProduct(productIdOrName) {
  return products.find(product =>
    product.id === productIdOrName ||
    product.name === productIdOrName ||
    `${product.name} - ${money(product.price)} บาท` === productIdOrName ||
    `${product.name} — ${money(product.price)} บาท` === productIdOrName
  );
}

function buildProductMessage(product, source = "Product Click") {
  const pageUrl = window.location.href.split("#")[0];
  const specs = product.specs.slice(0, 4).map(spec => `• ${spec}`).join("\n");

  return [
    "สวัสดีครับ สนใจโปรเคลียร์สต๊อก",
    `รุ่นที่สนใจ: ${product.name}`,
    `ราคาโปร: ${money(product.price)} บาท`,
    `หมวดสินค้า: ${product.category === "tablet" ? "แท็บเล็ต" : "มือถือ"}`,
    "สเปก/จุดเด่น:",
    specs,
    `รหัสสินค้า: ${product.id}`,
    `แหล่งที่มา: ${source}`,
    `ลิงก์หน้าเว็บ: ${pageUrl}`,
    "\nรบกวนแอดมินเช็กสต๊อก สีที่มี และโปรล่าสุดให้หน่อยครับ"
  ].join("\n");
}

function buildGeneralMessage() {
  return [
    "สวัสดีครับ สนใจโปรเคลียร์สต๊อกมือถือ/แท็บเล็ต",
    "รบกวนแอดมินช่วยเช็กสต๊อกและแนะนำรุ่นที่เหมาะกับงบให้หน่อยครับ"
  ].join("\n");
}

function buildLeadMessage(data) {
  // [Form Automation] จัดรูปแบบข้อมูลจากฟอร์มให้พร้อมคัดลอกและส่งต่อเข้า Messenger
  return [
    "สวัสดีครับ ขอเช็กสต๊อกโปรเคลียร์สต๊อก",
    `ชื่อ: ${data.get("name") || "-"}`,
    `เบอร์: ${data.get("phone") || "-"}`,
    `ช่องทางติดต่อ: ${data.get("line") || "-"}`,
    `จังหวัด: ${data.get("province") || "-"}`,
    `งบประมาณ: ${data.get("budget") || "-"}`,
    `รุ่นที่สนใจ: ${data.get("product") || "ให้แอดมินแนะนำ"}`,
    `หมายเหตุ: ${data.get("note") || "-"}`
  ].join("\n");
}

function buildLeadPayload(data) {
  // [Lead Payload] โครงสร้างข้อมูลที่ส่งไป Google Sheets เพื่อให้คอลัมน์อ่านง่ายและต่อแอดได้สะดวก
  const selectedProduct = getProduct(data.get("product"));

  return {
    createdAt: new Date().toISOString(),
    source: "timi-phone-sale-page-root",
    pageUrl: window.location.href.split("#")[0],
    shopName: CONFIG.shopName || "VALUE CLEARANCE",
    name: data.get("name") || "",
    phone: data.get("phone") || "",
    contactId: data.get("line") || "",
    province: data.get("province") || "",
    budget: data.get("budget") || "",
    product: data.get("product") || "",
    productId: selectedProduct?.id || "",
    productName: selectedProduct?.name || "",
    productPrice: selectedProduct?.price || "",
    note: data.get("note") || "",
    referrer: document.referrer || "",
    userAgent: navigator.userAgent || ""
  };
}

function buildLineOaMessageUrl(base, message) {
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  return `${cleanBase}?${encodeURIComponent(message)}`;
}

function buildLineUrl(message) {
  const lineOaMessageBase = (CONFIG.lineOaMessageBase || "").trim();
  if (!isPlaceholder(lineOaMessageBase)) {
    return buildLineOaMessageUrl(lineOaMessageBase, message);
  }

  const lineOaId = (CONFIG.lineOaId || "").trim();
  if (!isPlaceholder(lineOaId)) {
    const encodedLineId = encodeURIComponent(lineOaId);
    return buildLineOaMessageUrl(`https://line.me/R/oaMessage/${encodedLineId}`, message);
  }

  const lineUrl = (CONFIG.lineUrl || "").trim();
  if (!isPlaceholder(lineUrl) && lineUrl.includes("line.me")) {
    return lineUrl;
  }

  return `https://line.me/R/share?text=${encodeURIComponent(message)}`;
}

function getMessengerPage() {
  if (!isPlaceholder(CONFIG.messengerPageIdOrUsername)) return CONFIG.messengerPageIdOrUsername;

  const url = CONFIG.messengerUrl || "";
  if (!isPlaceholder(url) && url.includes("m.me/")) {
    return url.split("m.me/")[1]?.split(/[/?#]/)[0];
  }

  return "";
}

function buildMessengerUrl(product, message, source = "general") {
  const page = getMessengerPage();
  if (!page) return buildLineUrl(message);

  const ref = product
    ? `product_${product.id}_${product.price}`
    : `${source}_clearance_deal`;

  return `https://m.me/${page}?ref=${encodeURIComponent(ref)}`;
}

function buildChatUrl(product, channel = CONFIG.preferredChat || "line") {
  const message = product ? buildProductMessage(product, "Product Card") : buildGeneralMessage();
  if (channel === "messenger") return buildMessengerUrl(product, message, product ? "product_card" : "general_cta");
  return buildLineUrl(message);
}

async function copyText(text) {
  if (!CONFIG.autoCopyMessage) return false;
  if (!navigator.clipboard) return false;

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    return false;
  }
}

async function openProductChat(product, channel = CONFIG.preferredChat || "line") {
  const message = buildProductMessage(product, channel === "messenger" ? "Messenger Product Click" : "LINE Product Click");
  const url = channel === "messenger"
    ? buildMessengerUrl(product, message)
    : buildLineUrl(message);

  await copyText(message);

  localStorage.setItem("latestProductInterest", JSON.stringify({
    createdAt: new Date().toISOString(),
    productId: product.id,
    productName: product.name,
    price: product.price,
    channel
  }));

  if (window.fbq) {
    window.fbq("trackCustom", "ProductInterest", {
      product_id: product.id,
      product_name: product.name,
      price: product.price,
      channel
    });
  }

  if (channel === "messenger") {
    // [Meta Pixel Contact] การคลิกการ์ดสินค้าเพื่อเปิด Messenger ถือเป็น Lead intent สำคัญ
    trackLeadAndContact({
      content_name: product.name,
      content_category: product.category,
      content_ids: [product.id],
      value: product.price,
      currency: "THB",
      contact_source: "product_card"
    });
  }

  openExternalChat(url);

  if (channel === "messenger") {
    showToast(`เปิด Messenger แล้ว ข้อความของ ${product.name} ถูกคัดลอกไว้ให้วางในแชทแล้วครับ`);
  } else {
    showToast(`เปิด LINE พร้อมข้อความ ${product.name} แล้ว กดส่งให้แอดมินได้เลยครับ`);
  }
}

function renderProducts(filter = "all") {
  let list = [...products];

  if (filter === "lowest") {
    list.sort((a, b) => a.price - b.price);
  } else if (filter !== "all") {
    list = list.filter(product => product.tags.includes(filter) || product.category === filter);
  }

  grid.innerHTML = list.map((product, index) => `
    <article class="product-card ${index < 2 ? "is-featured" : ""}" data-id="${product.id}">
      <button class="product-media product-chat-trigger" data-chat-product="${product.id}" data-channel="preferred" aria-label="สนใจ ${product.name} ราคา ${money(product.price)} บาท">
        <span class="badge">${product.badge}</span>
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </button>
      <div class="product-body">
        <button class="product-title-link" data-chat-product="${product.id}" data-channel="preferred" aria-label="ส่งข้อมูล ${product.name} ให้แอดมิน">
          ${product.name}
        </button>
        <p class="subtitle">${product.subtitle}</p>
        <ul class="specs">
          ${product.specs.map(spec => `<li>${spec}</li>`).join("")}
        </ul>
        <div class="price-row">
          <div class="price-wrap">
            <small>ราคาโปรเคลียร์สต๊อก</small>
            <div class="price">${money(product.price)}<small> บาท</small></div>
          </div>
        </div>
        <div class="rush-note">⚡ คลิกสินค้าเพื่อส่งชื่อรุ่นเข้าแชทอัตโนมัติ แอดมินจะตอบโปรตรงรุ่นได้เร็วขึ้น</div>
        <div class="card-actions">
          <button class="btn btn-primary" data-chat-product="${product.id}" data-channel="preferred">ทักแอดมินรุ่นนี้</button>
          <button class="btn btn-ghost" data-reserve-product="${product.id}">กรอกฟอร์ม</button>
        </div>
      </div>
    </article>
  `).join("");
}

function populateSelect() {
  productSelect.innerHTML += products.map(product =>
    `<option value="${product.name} - ${money(product.price)} บาท">${product.name} — ${money(product.price)} บาท</option>`
  ).join("");
}

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showToast(text) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = text;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4200);
}

function setFormNote(text, state = "") {
  // [Form UX] แจ้งสถานะการบันทึก Lead โดยไม่รบกวน flow การเปิด Messenger
  if (!formNote) return;
  formNote.textContent = text;
  formNote.classList.toggle("is-success", state === "success");
  formNote.classList.toggle("is-warning", state === "warning");
}

function openExternalChat(url) {
  // [Messenger Automation] เปิดแชททันทีจาก gesture ของผู้ใช้ ลดโอกาส popup ถูกบล็อก
  const chatWindow = window.open(url, "_blank");
  if (chatWindow) {
    chatWindow.opener = null;
    return;
  }

  window.location.href = url;
}

function submitToGoogleForm(data) {
  // [Legacy Google Form] เก็บไว้เผื่อยังต้องใช้ Google Form endpoint เดิมในอนาคต
  const gf = CONFIG.googleForm || {};
  if (!gf.enabled || !gf.formAction) return false;

  const payload = new FormData();
  const fieldMap = gf.fields || {};
  Object.keys(fieldMap).forEach(key => {
    payload.append(fieldMap[key], data.get(key) || "");
  });

  fetch(gf.formAction, { method: "POST", mode: "no-cors", body: payload });
  return true;
}

function submitLeadToGoogleSheets(leadPayload) {
  const sheets = CONFIG.googleSheets || {};
  const webAppUrl = CONFIG.googleSheetsUrl || sheets.webAppUrl;

  // [Google Sheets] วาง Web App URL ใน config.js > googleSheetsUrl หรือ googleSheets.webAppUrl
  if (!sheets.enabled || isPlaceholder(webAppUrl)) {
    return Promise.resolve({ skipped: true });
  }

  // [Google Sheets] ส่งแบบ no-cors + text/plain เพื่อให้ทำงานกับ Google Apps Script Web App บน static hosting
  return fetch(webAppUrl, {
    method: "POST",
    mode: "no-cors",
    keepalive: true,
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(leadPayload)
  })
    .then(() => ({ ok: true }))
    .catch(error => {
      console.warn("Google Sheets lead capture failed:", error);
      return { ok: false, error };
    });
}

function trackMetaEvent(eventName, params = {}) {
  // [Meta Pixel Event] ฟังก์ชันกลางสำหรับยิง Standard Events: ViewContent, Lead, Contact
  if (typeof window.fbq !== "function") return;

  window.fbq("track", eventName, {
    shop_name: CONFIG.shopName || "VALUE CLEARANCE",
    page_url: window.location.href.split("#")[0],
    ...params
  });
}

function trackMetaCustomEvent(eventName, params = {}) {
  // [Meta Pixel Custom] แยก custom event ไว้เพื่อไม่ปนกับ Standard Events ที่ใช้ทำแคมเปญ
  if (typeof window.fbq !== "function") return;

  window.fbq("trackCustom", eventName, {
    shop_name: CONFIG.shopName || "VALUE CLEARANCE",
    page_url: window.location.href.split("#")[0],
    ...params
  });
}

function trackLeadAndContact(params = {}) {
  // [Meta Pixel Standard Events] ยิงทั้ง Lead และ Contact เมื่อมีเจตนาติดต่อหรือส่งฟอร์ม
  trackMetaEvent("Lead", params);
  trackMetaEvent("Contact", params);
}

function initViewContentTracking() {
  // [Meta Pixel ViewContent] รอให้หน้าโหลดเสร็จก่อนยิง ViewContent เพื่อบันทึกการดู Sale Page
  const sendViewContent = () => {
    trackMetaEvent("ViewContent", {
      content_name: "Timi Clearance Sale Page",
      content_category: "clearance_sale",
      value: Math.min(...products.map(product => product.price)),
      currency: "THB"
    });
  };

  if (document.readyState === "complete") {
    sendViewContent();
    return;
  }

  window.addEventListener("load", sendViewContent, { once: true });
}

function openGeneralChat(location = "general_cta") {
  const channel = CONFIG.preferredChat || "messenger";
  const message = buildGeneralMessage();
  const url = channel === "messenger"
    ? buildMessengerUrl(null, message, location)
    : buildLineUrl(message);

  // [Meta Pixel Contact] ปุ่ม Messenger หลัก เช่น Sticky/Hero ถือเป็น Lead intent
  if (channel === "messenger") {
    trackLeadAndContact({
      content_name: "General Messenger CTA",
      content_category: "clearance_sale",
      contact_source: location
    });
  }

  const copyPromise = copyText(message);
  openExternalChat(url);
  copyPromise.then(copied => showToast(copied
    ? "เปิด Messenger แล้ว ข้อความเริ่มต้นถูกคัดลอกไว้ให้วางในแชทแล้วครับ"
    : "เปิด Messenger แล้ว แจ้งแอดมินว่าต้องการเช็กโปรเคลียร์สต๊อกได้เลยครับ"
  ));
}

function setFilter(filter) {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.filter === filter);
  });
  renderProducts(filter);
  scrollToId("deals");
}

function initShortcuts() {
  document.querySelectorAll("[data-filter-shortcut]").forEach(btn => {
    btn.addEventListener("click", () => setFilter(btn.dataset.filterShortcut));
  });
}

function updateCatalogStats() {
  const minPrice = Math.min(...products.map(product => product.price));
  if (catalogCountEl) catalogCountEl.textContent = `${products.length} รุ่น`;
  if (heroMinPriceEl) heroMinPriceEl.textContent = money(minPrice);
}

function getEndOfDayTime() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
}

function formatCountdown(distance) {
  const totalSeconds = Math.max(0, Math.floor(distance / 1000));
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function startCountdown() {
  const update = () => {
    const deadline = getEndOfDayTime();
    const distance = deadline.getTime() - Date.now();
    const text = formatCountdown(distance);
    if (countdownEl) countdownEl.textContent = text;
    if (heroCountdownEl) heroCountdownEl.textContent = text;
  };
  update();
  setInterval(update, 1000);
}

renderProducts();
populateSelect();
updateCatalogStats();
startCountdown();
initViewContentTracking();
initShortcuts();

if (lineCta) {
  lineCta.href = buildChatUrl(null, CONFIG.preferredChat || "messenger");
}
if (heroLineBtn) {
  heroLineBtn.href = buildChatUrl(null, CONFIG.preferredChat || "messenger");
}

document.querySelectorAll("[data-scroll-to]").forEach(el => {
  el.addEventListener("click", () => scrollToId(el.dataset.scrollTo));
});

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderProducts(btn.dataset.filter);
  });
});

document.addEventListener("click", event => {
  const generalChatBtn = event.target.closest("[data-chat-general]");
  if (generalChatBtn) {
    event.preventDefault();
    openGeneralChat(generalChatBtn.dataset.contactLocation || "general_cta");
    return;
  }

  const chatBtn = event.target.closest("[data-chat-product]");
  if (chatBtn) {
    event.preventDefault();
    const product = getProduct(chatBtn.dataset.chatProduct);
    if (!product) return;
    const channel = chatBtn.dataset.channel === "preferred" ? (CONFIG.preferredChat || "line") : chatBtn.dataset.channel;
    openProductChat(product, channel);
    return;
  }

  const reserveBtn = event.target.closest("[data-reserve-product]");
  if (!reserveBtn) return;
  const product = getProduct(reserveBtn.dataset.reserveProduct);
  if (product) {
    productSelect.value = `${product.name} - ${money(product.price)} บาท`;
    scrollToId("lead-form");
    showToast(`เลือก ${product.name} แล้ว กรอกข้อมูลเพื่อเช็กสต๊อกได้เลยครับ`);
  }
});

form?.addEventListener("submit", event => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = new FormData(form);
  const message = buildLeadMessage(data);
  const leadPayload = buildLeadPayload(data);
  const selectedProduct = getProduct(data.get("product"));
  const channel = CONFIG.preferredChat || "messenger";
  const url = channel === "messenger"
    ? buildMessengerUrl(selectedProduct, message, "form_lead")
    : buildLineUrl(message);

  // [Lead Storage] เก็บ Lead ล่าสุดไว้ใน Local Storage เพื่อสำรองข้อมูลฝั่งหน้าเว็บ
  localStorage.setItem("latestSalesLead", JSON.stringify(leadPayload));

  setFormNote("กำลังบันทึกข้อมูลและเปิด Messenger...", "warning");

  // [Google Sheets] ส่งข้อมูลเข้า Apps Script แบบเบื้องหลัง ไม่บล็อกการเปิด Messenger ของลูกค้า
  submitLeadToGoogleSheets(leadPayload).then(result => {
    if (result.skipped) {
      setFormNote("เปิด Messenger แล้ว หากต้องการเก็บลง Google Sheets ให้ใส่ Web App URL ใน config.js", "warning");
      return;
    }

    setFormNote(
      result.ok ? "บันทึก Lead แล้ว และเปิด Messenger ให้ส่งข้อมูลหาแอดมินเรียบร้อย" : "เปิด Messenger แล้ว แต่ส่งข้อมูลไป Google Sheets ไม่สำเร็จ กรุณาตรวจ Web App URL",
      result.ok ? "success" : "warning"
    );
  });

  // [Legacy Google Form] เรียกไว้เฉพาะกรณีเปิดใช้งาน endpoint เดิมใน config
  submitToGoogleForm(data);
  copyText(message);

  trackLeadAndContact({
    content_name: leadPayload.productName || leadPayload.product || "Clearance Lead Form",
    content_category: selectedProduct?.category || "lead_form",
    content_ids: selectedProduct ? [selectedProduct.id] : [],
    value: selectedProduct?.price || 0,
    currency: "THB",
    contact_source: "lead_form"
  });

  openExternalChat(url);
  showToast("ส่งข้อมูลแล้ว ระบบเปิดแชทพร้อมรายละเอียดให้ส่งหาแอดมินแล้วครับ");
  form.reset();
});
