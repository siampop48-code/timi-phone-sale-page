# Sales Page มือถือเคลียร์สต๊อก

Static Sale Page สำหรับอัปขึ้น GitHub Pages, Cloudflare Pages, Netlify หรือโฮสต์ static ทั่วไปได้ทันที พร้อมระบบ Messenger Lead, Google Sheets capture และ Meta Pixel tracking

## โครงสร้างไฟล์

```text
index.html      หน้าเว็บหลัก + Meta Pixel base ใน <head>
styles.css      ดีไซน์/Responsive
script.js       สินค้า, ฟอร์ม Lead, Messenger automation, Google Sheets, Meta events
config.js       จุดตั้งค่า Messenger, Pixel ID, Google Apps Script Web App URL
assets/         รูปสินค้าและรูปแคมเปญ
```

## สิ่งที่ต้องแก้ก่อนใช้งานจริง

เปิด `config.js` แล้วตั้งค่าหลัก:

```js
preferredChat: "messenger",
messengerUrl: "https://m.me/170306732996781",
messengerPageIdOrUsername: "170306732996781",

// วาง Meta Pixel ID จริง
facebookPixelId: "YOUR_META_PIXEL_ID",

googleSheets: {
  enabled: false,
  webAppUrl: "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL"
}
```

ถ้ายังไม่มี Google Apps Script ให้ปล่อย `enabled: false` ไว้ก่อนได้ หน้าเว็บยังเปิด Messenger และคัดลอกข้อความ Lead ได้ตามปกติ

## Messenger Automation

- ปุ่ม Sticky, ปุ่ม Hero และปุ่มบนการ์ดสินค้าเปิด Messenger ที่ `https://m.me/170306732996781`
- URL จะส่งค่า `ref` เช่น source, product id, price เพื่อช่วยระบุแหล่งที่มา
- เพราะ Messenger ไม่รองรับการเติมข้อความยาวผ่าน URL โดยตรง ระบบจึงคัดลอกข้อความสรุปไว้ให้ลูกค้าวางในแชท
- ฟอร์ม Lead จะจัดข้อความจากชื่อ, เบอร์โทร, จังหวัด, งบประมาณ, รุ่นที่เลือก และหมายเหตุให้พร้อมส่งหาแอดมิน

## Google Sheets Capture

ฟอร์มส่งข้อมูลไป Google Apps Script Web App แบบเบื้องหลังด้วย `fetch` ใน `script.js`

ตั้งค่าใน `config.js`:

```js
googleSheets: {
  enabled: true,
  webAppUrl: "https://script.google.com/macros/s/XXXXX/exec"
}
```

ตัวอย่าง Apps Script ฝั่ง Google Sheets:

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads");
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.createdAt,
    data.name,
    data.phone,
    data.line,
    data.province,
    data.budget,
    data.productName || data.product,
    data.productPrice,
    data.note,
    data.source,
    data.pageUrl
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Meta Pixel Events

- `PageView` ยิงจาก Pixel base ใน `<head>`
- `ViewContent` ยิงเมื่อหน้าโหลดเสร็จ
- `Lead` และ `Contact` ยิงเมื่อส่งฟอร์มสำเร็จ หรือคลิกปุ่ม Messenger สำคัญ
- `ProductInterest` เป็น custom event สำหรับคลิกสินค้าแต่ละรุ่น

ถ้าไม่ใส่ `facebookPixelId` หรือยังเป็น `YOUR_META_PIXEL_ID` ระบบจะไม่โหลด Pixel เพื่อป้องกันการยิงข้อมูลผิดบัญชี

## แก้สินค้า/ราคา

แก้ข้อมูลสินค้าใน `products` ที่ `script.js`:

```js
{
  id: "timi-t25",
  name: "TIMI T25",
  price: 1790,
  image: "assets/products/timi-t25.png",
  subtitle: "จอใหญ่ 6.92 นิ้ว แบตอึด",
}
```
