/*
  แก้ค่าตรงนี้ก่อนอัปขึ้น GitHub Pages

  สิ่งที่เพิ่มในเวอร์ชันนี้:
  - Messenger ถูกตั้งเป็นช่องทางหลักของ Sale Page
  - เมื่อกดสินค้า/ปุ่มทักแชท ระบบจะเปิด Messenger พร้อม ref ของรุ่น/แหล่งที่มา
  - ระบบจะคัดลอกข้อความสรุป Lead หรือข้อมูลสินค้าไว้ให้ลูกค้าวางในแชทอีกชั้นหนึ่ง
  - ระบบรองรับการส่งข้อมูลไป Google Apps Script Web App เพื่อเก็บลง Google Sheets
  - Meta Pixel ถูกฝังใน <head> และยิง ViewContent, Lead, Contact ตามพฤติกรรมลูกค้า

  วิธีตั้งค่าแบบเร็ว:
  1) Messenger หลักของร้าน:
     preferredChat: "messenger"
     messengerUrl: "https://m.me/170306732996781"
     messengerPageIdOrUsername: "170306732996781"

  2) Meta Pixel:
     facebookPixelId: "วาง Pixel ID ที่นี่"

  3) Google Sheets:
     googleSheetsUrl: "วาง URL ของ Google Apps Script Web App ที่นี่"
     googleSheets.enabled: true
     googleSheets.webAppUrl: "วาง URL ของ Google Apps Script Web App ที่นี่"
*/
window.SALES_PAGE_CONFIG = {
  shopName: "VALUE CLEARANCE",
  tagline: "มือถือจอใหญ่ ราคาคุ้ม พร้อมใช้งาน",

  // [Chat Channel] เลือกช่องทางหลักเมื่อกดสินค้า: "messenger" คือค่าแนะนำสำหรับหน้านี้
  preferredChat: "messenger",

  // [LINE Fallback] เก็บไว้เป็นช่องทางสำรอง หากอนาคตต้องกลับไปใช้ LINE OA
  lineUrl: "https://line.me/R/ti/p/@YOUR_LINE_OA",
  lineOaId: "@YOUR_LINE_OA",
  // ถ้ามีลิงก์ LINE OA แบบพิเศษ สามารถใส่เองได้ เช่น https://line.me/R/oaMessage/%40YOUR_LINE_OA/
  // ระบบจะเติมข้อความตามหลัง ? ให้อัตโนมัติ
  lineOaMessageBase: "",

  // [Messenger] ลิงก์หลักของเพจ Facebook ที่ใช้รับ Lead จาก Sale Page
  messengerUrl: "https://m.me/170306732996781",
  messengerPageIdOrUsername: "170306732996781",

  phone: "YOUR_PHONE_NUMBER",
  // TODO: รอใส่ Pixel ID จาก Meta Events Manager เมื่อพบ Pixel/Data source ที่ถูกต้อง
  facebookPixelId: "",

  // [Messenger Automation] true = คัดลอกข้อความสรุปไว้ให้ลูกค้าวางใน Messenger เพราะ m.me ไม่รองรับ prefill ข้อความยาวโดยตรง
  autoCopyMessage: true,

  // [Google Sheets] Web App URL จาก Apps Script สำหรับบันทึก Lead เข้า Google Sheets
  googleSheetsUrl: "https://script.google.com/macros/s/AKfycbyaj0XPTR7laRkSAHMVWZaZtSeGnejkvhW45q8i0pRAoW2O400bATjP-mih1FFodAeHwA/exec",

  googleSheets: {
    // [Google Sheets] true = เปิดการส่งข้อมูลฟอร์มไป Google Sheets แบบเบื้องหลัง
    enabled: true,
    // [Google Sheets] วาง URL ที่ได้จาก Deploy > Web app เช่น https://script.google.com/macros/s/XXXXX/exec
    webAppUrl: "https://script.google.com/macros/s/AKfycbyaj0XPTR7laRkSAHMVWZaZtSeGnejkvhW45q8i0pRAoW2O400bATjP-mih1FFodAeHwA/exec"
  }
};
