/*
  แก้ค่าตรงนี้ก่อนอัปขึ้น GitHub Pages
  - lineUrl: ลิงก์ LINE OA ของร้าน
  - messengerUrl: ลิงก์ Facebook Page Inbox
  - phone: เบอร์โทรร้าน
  - facebookPixelId: ใส่ Pixel ID ถ้ามี ไม่มีก็เว้นว่างได้
*/
window.SALES_PAGE_CONFIG = {
  shopName: "VALUE CLEARANCE",
  tagline: "มือถือจอใหญ่ ราคาคุ้ม พร้อมใช้งาน",
  lineUrl: "https://line.me/R/ti/p/@YOUR_LINE_OA",
  messengerUrl: "https://m.me/YOUR_FACEBOOK_PAGE",
  phone: "YOUR_PHONE_NUMBER",
  facebookPixelId: "",
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
