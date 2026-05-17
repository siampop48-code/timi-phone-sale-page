# Sales Page มือถือเคลียร์สต๊อก

ไฟล์นี้เป็น Sales Page แบบ Static Website สำหรับอัปขึ้น GitHub Pages ได้ทันที ใช้รูปแคมเปญและรูปสินค้าที่เตรียมไว้ในโฟลเดอร์ `assets/`

## โครงสร้างไฟล์

```text
index.html      หน้าเว็บหลัก
styles.css      ดีไซน์/Responsive
script.js       ข้อมูลสินค้า + ระบบกรองสินค้า + ฟอร์ม Lead
config.js       ตั้งค่าร้าน, LINE, Messenger, Pixel, Google Form
assets/         รูปสินค้าและรูปแคมเปญ
```

## วิธีอัปขึ้น GitHub Pages

1. สร้าง Repository ใหม่ใน GitHub เช่น `phone-clearance-salespage`
2. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ขึ้นไปที่ Repository
3. ไปที่ `Settings` > `Pages`
4. Source เลือก `Deploy from a branch`
5. Branch เลือก `main` และ Folder เลือก `/root`
6. กด Save แล้วรอ GitHub สร้างลิงก์เว็บให้

## สิ่งที่ควรแก้ก่อนใช้งานจริง

เปิดไฟล์ `config.js` แล้วแก้:

```js
lineUrl: "https://line.me/R/ti/p/@YOUR_LINE_OA",
messengerUrl: "https://m.me/YOUR_FACEBOOK_PAGE",
phone: "YOUR_PHONE_NUMBER",
facebookPixelId: "",
```

ถ้ายังไม่มี Pixel ให้เว้นว่างไว้ก่อนได้

## วิธีแก้ราคา/สินค้า

เปิดไฟล์ `script.js` แล้วแก้ในตัวแปร `products` เช่น:

```js
{
  id: "timi-t25",
  name: "TIMI T25",
  price: 1790,
  image: "assets/products/timi-t25.png",
  subtitle: "จอใหญ่ 6.92 นิ้ว แบตอึด",
}
```

## การเก็บข้อมูลลูกค้า

ตอนนี้ฟอร์มจะเก็บข้อมูลล่าสุดไว้ใน Local Storage และคัดลอกข้อความให้ลูกค้านำไปส่งแชทได้ทันที

ถ้าต้องการส่งข้อมูลเข้า Google Sheets:

1. สร้าง Google Form พร้อมช่อง: ชื่อ, เบอร์, LINE, จังหวัด, งบประมาณ, รุ่นที่สนใจ, หมายเหตุ
2. ตั้งค่าให้ Google Form ส่งคำตอบเข้า Google Sheets
3. นำ `formResponse` URL และ `entry.xxxxx` ของแต่ละช่องมาใส่ใน `config.js`
4. เปลี่ยน `enabled: false` เป็น `enabled: true`

ตัวอย่าง:

```js
googleForm: {
  enabled: true,
  formAction: "https://docs.google.com/forms/d/e/FORM_ID/formResponse",
  fields: {
    name: "entry.111111111",
    phone: "entry.222222222",
    line: "entry.333333333",
    province: "entry.444444444",
    budget: "entry.555555555",
    product: "entry.666666666",
    note: "entry.777777777"
  }
}
```

## หมายเหตุ

- หน้าเว็บนี้เป็น Static Website ใช้ได้กับ GitHub Pages, Cloudflare Pages, Netlify และโฮสต์ฟรีทั่วไป
- รูปภาพในโฟลเดอร์ `assets/campaign/` คือภาพแคมเปญที่ใช้เป็น Hero/โฆษณา
- รูปภาพในโฟลเดอร์ `assets/products/` คือรูปสินค้าแต่ละรุ่น
