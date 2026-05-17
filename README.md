# Sales Page มือถือเคลียร์สต๊อก

ไฟล์นี้เป็น Sales Page แบบ Static Website สำหรับอัปขึ้น GitHub Pages ได้ทันที ใช้รูปแคมเปญและรูปสินค้าที่เตรียมไว้ในโฟลเดอร์ `assets/`

## โครงสร้างไฟล์

```text
index.html      หน้าเว็บหลัก
styles.css      ดีไซน์/Responsive
script.js       ข้อมูลสินค้า + ระบบกรองสินค้า + ฟอร์ม Lead + ลิงก์ส่งรุ่นเข้าแชท
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

เปิดไฟล์ `config.js` แล้วแก้ข้อมูลร้านของคุณ:

```js
preferredChat: "line", // ใช้ "line" หรือ "messenger"

// ถ้าใช้ LINE OA เป็นหลัก
lineUrl: "https://line.me/R/ti/p/@YOUR_LINE_OA",
lineOaId: "@YOUR_LINE_OA",

// ถ้าใช้ Messenger เป็นหลัก
messengerUrl: "https://m.me/YOUR_FACEBOOK_PAGE",
messengerPageIdOrUsername: "YOUR_FACEBOOK_PAGE",

phone: "YOUR_PHONE_NUMBER",
facebookPixelId: "",
```

ถ้ายังไม่มี Pixel ให้เว้นว่างไว้ก่อนได้

## ระบบส่งข้อมูลสินค้าที่ลูกค้าคลิกเข้าแชท

เวอร์ชันนี้แก้ให้แล้ว:

- ลูกค้ากดที่รูปสินค้า ชื่อสินค้า หรือปุ่ม `ส่งรุ่นนี้ให้แอดมิน`
- ระบบจะเปิด LINE OA หรือ Messenger ตามค่าที่ตั้งใน `preferredChat`
- ข้อความจะมีข้อมูลรุ่น ราคา จุดเด่น รหัสสินค้า และลิงก์หน้าเว็บ
- ระบบคัดลอกข้อความไว้ให้อัตโนมัติ เผื่อบางเครื่องไม่เติมข้อความในช่องแชท

ตัวอย่างข้อความที่แอดมินจะได้รับเมื่อผู้ใช้กดส่ง:

```text
สวัสดีครับ สนใจโปรเคลียร์สต๊อก
รุ่นที่สนใจ: TIMI T25
ราคาโปร: 1,790 บาท
หมวดสินค้า: มือถือ
สเปก/จุดเด่น:
• จอ 6.92 นิ้ว
• แบต 6500mAh
• 6+128GB
• Android 13
รหัสสินค้า: timi-t25
แหล่งที่มา: LINE Product Click
ลิงก์หน้าเว็บ: https://yourdomain.github.io/phone-clearance-salespage/

รบกวนแอดมินเช็กสต๊อก สีที่มี และโปรล่าสุดให้หน่อยครับ
```

หมายเหตุ: GitHub Pages เป็นเว็บ Static จึงไม่มีระบบหลังบ้านที่ส่งข้อความหาแอดมินเองทันทีแบบไม่ผ่านการกดยืนยันของลูกค้า วิธีที่ปลอดภัยและทำได้ฟรีคือเปิดแชทพร้อมข้อความรุ่นที่สนใจ แล้วให้ลูกค้ากดส่งข้อความหาแอดมิน

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

ตอนนี้ฟอร์มจะเก็บข้อมูลล่าสุดไว้ใน Local Storage เปิดแชทพร้อมข้อมูลลูกค้า และคัดลอกข้อความให้ลูกค้านำไปส่งแชทได้ทันที

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


## จุดที่แก้เพิ่มในเวอร์ชันนี้

- เพิ่ม `preferredChat` ใน `config.js`
- เพิ่ม `lineOaId` และ `lineOaMessageBase` สำหรับเปิด LINE OA พร้อมข้อความสินค้า
- เพิ่ม `messengerPageIdOrUsername` สำหรับเปิด Messenger พร้อม ref ของรุ่นสินค้า
- เปลี่ยนการ์ดสินค้าให้คลิกที่รูป/ชื่อสินค้าแล้วส่งข้อมูลรุ่นเข้าแชทได้
- ปุ่ม `ส่งรุ่นนี้ให้แอดมิน` จะสร้างข้อความเฉพาะรุ่น เช่น รุ่น ราคา สเปก และรหัสสินค้า
- ฟอร์ม Lead หลังส่งแล้วจะเปิดแชทพร้อมข้อมูลลูกค้าให้แอดมินทันที
