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
const lineCta = document.querySelector("#lineCta");

function money(value) {
  return Number(value).toLocaleString("th-TH");
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
      <div class="product-media">
        <span class="badge">${product.badge}</span>
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="product-body">
        <h3>${product.name}</h3>
        <p class="subtitle">${product.subtitle}</p>
        <ul class="specs">
          ${product.specs.map(spec => `<li>${spec}</li>`).join("")}
        </ul>
        <div class="price-row">
          <div class="price">${money(product.price)}<small> บาท</small></div>
        </div>
        <div class="card-actions">
          <button class="btn btn-primary" data-product="${product.id}">จองรุ่นนี้</button>
          <a class="btn btn-ghost" href="${buildChatUrl(product)}" target="_blank" rel="noopener">ทักแชท</a>
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

function buildMessage(productName = "") {
  const selected = productName ? products.find(p => p.name === productName || p.id === productName) : null;
  const productLine = selected ? `${selected.name} ราคา ${money(selected.price)} บาท` : "สนใจมือถือ/แท็บเล็ตโปรเคลียร์สต๊อก";
  return `สวัสดีครับ สนใจ ${productLine} ต้องการเช็กสต๊อกและรายละเอียดเพิ่มเติมครับ`;
}

function buildChatUrl(product) {
  const base = CONFIG.messengerUrl && !CONFIG.messengerUrl.includes("YOUR_") ? CONFIG.messengerUrl : CONFIG.lineUrl;
  const safeBase = base && !base.includes("YOUR_") ? base : "#lead-form";
  const msg = encodeURIComponent(buildMessage(product.id));
  if (safeBase.includes("line.me")) return safeBase;
  if (safeBase.includes("m.me")) return `${safeBase}?ref=${encodeURIComponent(product.id)}`;
  return safeBase + (safeBase.includes("?") ? "&" : "?") + `text=${msg}`;
}

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showToast(text) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = text;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3800);
}

function leadToMessage(data) {
  return [
    "สวัสดีครับ ขอเช็กสต๊อกโปรเคลียร์สต๊อก",
    `ชื่อ: ${data.get("name") || "-"}`,
    `เบอร์: ${data.get("phone") || "-"}`,
    `LINE: ${data.get("line") || "-"}`,
    `จังหวัด: ${data.get("province") || "-"}`,
    `งบประมาณ: ${data.get("budget") || "-"}`,
    `รุ่นที่สนใจ: ${data.get("product") || "ให้แอดมินแนะนำ"}`,
    `หมายเหตุ: ${data.get("note") || "-"}`
  ].join("\n");
}

function submitToGoogleForm(data) {
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

function initPixel() {
  if (!CONFIG.facebookPixelId) return;
  // ใส่ Meta Pixel แบบง่าย ถ้าใส่ ID ใน config.js แล้ว
  const pixelId = CONFIG.facebookPixelId;
  const script = document.createElement("script");
  script.innerHTML = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');`;
  document.head.appendChild(script);
}

renderProducts();
populateSelect();
initPixel();

if (lineCta && CONFIG.lineUrl && !CONFIG.lineUrl.includes("YOUR_")) {
  lineCta.href = CONFIG.lineUrl;
} else if (lineCta) {
  lineCta.href = "#lead-form";
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
  const reserveBtn = event.target.closest("[data-product]");
  if (!reserveBtn) return;
  const product = products.find(p => p.id === reserveBtn.dataset.product);
  if (product) {
    productSelect.value = `${product.name} - ${money(product.price)} บาท`;
    scrollToId("lead-form");
    showToast(`เลือก ${product.name} แล้ว กรอกข้อมูลเพื่อเช็กสต๊อกได้เลยครับ`);
  }
});

form?.addEventListener("submit", async event => {
  event.preventDefault();
  const data = new FormData(form);
  const message = leadToMessage(data);

  localStorage.setItem("latestSalesLead", JSON.stringify({
    createdAt: new Date().toISOString(),
    name: data.get("name"),
    phone: data.get("phone"),
    line: data.get("line"),
    province: data.get("province"),
    budget: data.get("budget"),
    product: data.get("product"),
    note: data.get("note")
  }));

  submitToGoogleForm(data);

  try {
    await navigator.clipboard.writeText(message);
    showToast("ส่งข้อมูลแล้ว และคัดลอกข้อความสำหรับส่งแชทให้แล้วครับ");
  } catch (error) {
    showToast("ส่งข้อมูลแล้ว กรุณาคัดลอกข้อมูลไปส่งในแชทอีกครั้งครับ");
  }

  if (CONFIG.lineUrl && !CONFIG.lineUrl.includes("YOUR_")) {
    window.open(CONFIG.lineUrl, "_blank", "noopener");
  }

  form.reset();
});
