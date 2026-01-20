# Graphic Designer Website - Vén Màn Bí Ẩn Nghề Thiết Kế Đồ Họa

Trang web giới thiệu chi tiết về nghề Graphic Designer được phát triển bởi Nhóm Học Tin Cùng Bảo Khánh.

## 📋 Cấu Trúc Dự Án

```
Tin12/
├── index.html          # Trang chính
├── styles.css          # Định dạng CSS
├── script.js           # Xử lý JavaScript
├── config.json         # Cấu hình (chỉnh sửa file này để cập nhật nội dung)
├── images/             # Thư mục chứa hình ảnh (cần tạo)
├── README.md           # File hướng dẫn này
```

## 🚀 Bắt Đầu

### 1. **Tạo Thư Mục Hình Ảnh**
Tạo thư mục `images/` trong cùng thư mục với `index.html`

### 2. **Chuẩn Bị Files Cần Thiết**

Bạn cần cung cấp những files sau:

#### Hình Ảnh:
- **Logo Nhóm**: `images/logo-nhom.png` (hoặc định dạng khác)
- **Mindmap**: `images/mindmap-3-video.png` (hoặc định dạng khác)

#### Links Podcast:
- **Podcast 1 URL**: Link đến tập podcast về "Làm Gì?"
- **Podcast 2 URL**: Link đến tập podcast về "Kiến Thức & Kỹ Năng"
- **Podcast 3 URL**: Link đến tập podcast về "Cơ Hội & Thăng Tiến"

#### Thông Tin Liên Hệ:
- Email
- Số điện thoại
- Địa chỉ

#### Slogan:
- Khẩu hiệu/Mô tả ngắn của nhóm

### 3. **Cập Nhật Nội Dung**

#### Cách 1: Chỉnh Sửa `config.json` (Khuyến Nghị)

Mở file `config.json` và cập nhật:

```json
{
  "teamLogo": {
    "src": "images/logo-nhom.png"
  },
  "podcasts": [
    {
      "url": "https://your-podcast1-link.com"
    },
    {
      "url": "https://your-podcast2-link.com"
    },
    {
      "url": "https://your-podcast3-link.com"
    }
  ],
  "slogan": {
    "text": "Khẩu hiệu của bạn tại đây"
  },
  "mindmap": {
    "src": "images/mindmap-3-video.png"
  },
  "contact": {
    "email": "email@example.com",
    "phone": "(+84) XXX-XXXX-XXX",
    "address": "Địa chỉ của nhóm"
  }
}
```

Sau đó, thêm dòng này vào cuối `<head>` trong `index.html`:
```html
<script>
  // Load config from JSON file
  loadConfigFromFile('config.json');
</script>
```

#### Cách 2: Sửa Trực Tiếp Trong `script.js`

Mở file `script.js` và cập nhật object `config` ở đầu file:

```javascript
const config = {
    teamLogo: {
        src: 'images/logo-nhom.png'
    },
    // ... và các cấu hình khác
};
```

### 4. **Mở Trang Web**

- Mở file `index.html` trong trình duyệt
- Hoặc sử dụng Live Server trong VS Code (mở `index.html` > chuột phải > "Open with Live Server")

## 📄 Nội Dung Trang Web

Trang web bao gồm các section sau:

1. **Navigation Bar** - Menu điều hướng sticky
2. **Hero Section** - Tiêu đề chính
3. **About Section** - Giới thiệu nhóm
4. **Podcast Section** - 3 podcast chính
5. **Slogan Section** - Khẩu hiệu
6. **Professional Description** - Mô tả chi tiết nghề nghiệp:
   - Công việc và nhánh phổ biến
   - Kiến thức & kỹ năng
   - Đường học tập
   - Cơ hội việc làm & thăng tiến
7. **Mindmap Section** - Tóm gọn 3 video
8. **Contact Section** - Thông tin liên hệ
9. **Categories Section** - Danh mục
10. **Footer** - Chân trang

## 🎨 Đặc Điểm Thiết Kế

- **Responsive Design**: Thích ứng với mọi kích thước màn hình
- **Modern UI**: Giao diện hiện đại với gradient color
- **Smooth Animations**: Hiệu ứng chuyển động mượt
- **Fast Loading**: Tối ưu hiệu suất

### Các Màu Chính:
- **Primary**: Indigo (#6366f1)
- **Secondary**: Pink (#ec4899)
- **Accent**: Amber (#f59e0b)

## 🔧 Chỉnh Sửa CSS

Tất cả các biến CSS được định nghĩa trong `:root` ở đầu `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    --accent-color: #f59e0b;
    /* ... */
}
```

Bạn có thể thay đổi các giá trị này để tùy chỉnh màu sắc.

## 📱 Responsive Breakpoints

- **Tablet**: 768px
- **Mobile**: 480px

## ⚙️ Các Function Hữu Ích (JavaScript)

### `updateConfig(newConfig)`
Cập nhật cấu hình từ object JavaScript:
```javascript
updateConfig({
    contact: {
        email: { value: 'newemail@example.com' }
    }
});
```

### `loadConfigFromFile(jsonFile)`
Tải cấu hình từ file JSON:
```javascript
loadConfigFromFile('config.json');
```

### `exportConfig()`
Xuất cấu hình hiện tại dưới dạng JSON (dùng trong console):
```javascript
console.log(exportConfig());
```

## 🐛 Gỡ Lỗi

Mở Developer Tools (F12) và kiểm tra Console để xem các thông báo:
- Log cấu hình khi trang tải
- Cảnh báo nếu các element không tìm thấy
- Lỗi khi tải file hình ảnh

## 📝 Ghi Chú

- **Hình ảnh**: Hãy đảm bảo các file hình ảnh được đặt trong thư mục `images/`
- **Links Podcast**: Nên sử dụng links đầy đủ (https://...)
- **Mobile First**: Trang web được thiết kế cho mobile trước, sau đó responsive lên desktop

## 🎯 Cải Thiện Trong Tương Lai

- [ ] Thêm form liên hệ (contact form)
- [ ] Thêm blog/news section
- [ ] Tích hợp email notifications
- [ ] Thêm comment section cho podcast
- [ ] SEO optimization

## 📞 Liên Hệ Hỗ Trợ

Nếu có bất kỳ câu hỏi, vui lòng liên hệ với nhóm qua thông tin contact trên trang web.

---

**Phiên bản**: 1.0  
**Cập nhật lần cuối**: Tháng 01, 2026  
**Nhóm Học Tin Cùng Bảo Khánh** © 2026
