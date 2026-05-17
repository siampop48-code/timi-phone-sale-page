/*
  แก้ค่าตรงนี้ก่อนอัปขึ้น GitHub Pages

  สิ่งที่เพิ่มในเวอร์ชันนี้:
  - เมื่อกดรูปสินค้า/ชื่อสินค้า/ปุ่ม "ส่งรุ่นนี้ให้แอดมิน"
    ระบบจะเปิด LINE หรือ Messenger พร้อมข้อมูลรุ่นที่ลูกค้าสนใจ
  - LINE OA สามารถเปิดแชทพร้อมข้อความที่กรอกไว้ล่วงหน้าได้
  - Messenger จะเปิดกล่องแชทพร้อม ref ของรุ่น และระบบจะคัดลอกข้อความสินค้าไว้ให้ลูกค้าวางในแชทอีกชั้นหนึ่ง

  วิธีตั้งค่าแบบเร็ว:
  1) ถ้าใช้ LINE OA เป็นหลัก:
     preferredChat: "line"
     lineOaId: "@ชื่อไลน์ของร้าน"  เช่น "@siampop"

  2) ถ้าใช้ Messenger เป็นหลัก:
     preferredChat: "messenger"
     messengerPageIdOrUsername: "ชื่อเพจหรือ Page ID"

  3) ถ้ายังไม่รู้ค่า ให้แก้เฉพาะ lineUrl / messengerUrl ก่อนก็ได้
*/
window.SALES_PAGE_CONFIG = {
  shopName: "VALUE CLEARANCE",
  tagline: "มือถือจอใหญ่ ราคาคุ้ม พร้อมใช้งาน",

  // เลือกช่องทางหลักเมื่อกดสินค้า: "line" หรือ "messenger"
  preferredChat: "line",

  // LINE OA
  lineUrl: "https://line.me/R/ti/p/@YOUR_LINE_OA",
  lineOaId: "@YOUR_LINE_OA",
  // ถ้ามีลิงก์ LINE OA แบบพิเศษ สามารถใส่เองได้ เช่น https://line.me/R/oaMessage/%40YOUR_LINE_OA/
  // ระบบจะเติมข้อความตามหลัง ? ให้อัตโนมัติ
  lineOaMessageBase: "",

  // Facebook Messenger Page
  messengerUrl: "https://m.me/YOUR_FACEBOOK_PAGE",
  messengerPageIdOrUsername: "YOUR_FACEBOOK_PAGE",

  phone: "YOUR_PHONE_NUMBER",
  facebookPixelId: "",

  // true = เวลากดสินค้า จะคัดลอกข้อความสินค้าไว้ให้ด้วย เผื่อ Messenger/LINE บางเครื่องไม่ใส่ข้อความให้อัตโนมัติ
  autoCopyMessage: true,

  googleForm: {
    enabled: false,
    formAction: "",
    fields: {
      name: "entry.YOUR_NAME_FIELD",
      phone: "entry.YOUR_PHONE_FIELD",
      line: "entry.YOUR_LINE_FIELD",
      province: "entry.YOUR_PROVINCE_FIELD",
      budget: "entry.YOUR_BUDGET_FIELD",
      product: "entry.YOUR_PRODUCT_FIELD",
      note: "entry.YOUR_NOTE_FIELD"
    }
  }
};
