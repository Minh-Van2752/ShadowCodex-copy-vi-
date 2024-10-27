const express = require('express');
const cors = require('cors'); // Import gói cors
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Sử dụng middleware cors
app.use(cors()); // Kích hoạt CORS cho tất cả các yêu cầu

// Cấu hình để phục vụ file HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Bắt đầu server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.use(cors({
  origin: 'https://shadow-codex-copy-vi.vercel.app', // Chỉ cho phép yêu cầu từ miền này
}));
