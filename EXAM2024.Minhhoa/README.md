# 📝 DỰ ÁN BÀI THI: ỨNG DỤNG QUẢN LÝ CÔNG VIỆC (TASK LIST)

* [cite_start]**Môn học:** Nền tảng phát triển Web [cite: 2]
* [cite_start]**Hình thức thi:** Vấn đáp (Thực hành 75 phút) [cite: 4]
* [cite_start]**Mã đề:** 2024.Minhhoa [cite: 4]
* [cite_start]**Tên thư mục dự án:** EXAM2024.Minhhoa [cite: 11]
* [cite_start]**Cơ sở đào tạo:** Khoa Công nghệ thông tin - Trường Đại học Thủy Lợi [cite: 1]

---

## 🧑‍💻 THÔNG TIN SINH VIÊN
* **Họ và tên:** Vũ Duy Hưng
* **Lớp học phần:** 66KTPM1 / Nền tảng phát triển Web
* **Ngành học:** Kỹ thuật phần mềm

---

## 🛠️ CÔNG NGHỆ SỬ DỤNG
* **Framework chính:** ReactJS (Vite Bundler)
* [cite_start]**Giao diện & Responsive:** Bootstrap 5 & Bootstrap Icons [cite: 18, 61]
* [cite_start]**Quản lý mã nguồn:** Git [cite: 15]
* [cite_start]**Môi trường chạy:** NodeJS (Hỗ trợ chạy Offline 100% không cần Internet) 

---

## 📋 NỘI DUNG HIỆN THỰC HÓA THEO ĐỀ BÀI

### 🔹 Câu 1: Xây dựng Giao diện Tĩnh (4 điểm)
* [cite_start]Dựng cấu trúc giao diện danh sách công việc đúng theo Mockup thiết kế[cite: 18].
* Tự dựng cửa sổ nổi (Modal Form) thêm mới bằng CSS thuần và các class Bootstrap 5 mà không cần cài đặt thư viện bên ngoài, tối ưu tốc độ tải trang.
* [cite_start]Thiết kế linh hoạt, tự động chuyển màu sắc nhãn (Badge) và biểu tượng tiến độ (Icon Status) dựa trên thuộc tính `priority` (High - Đỏ, Medium - Vàng, Low - Xanh) và `status` (To Do, In Progress, Done)[cite: 18].
* [cite_start]Hỗ trợ hiển thị thích ứng (Responsive) mượt mà trên mọi kích thước màn hình PC, Tablet và Mobile[cite: 61].

### 🔹 Câu 2: Giả lập CSDL & Xử lý Ràng buộc dữ liệu (3 điểm)
* [cite_start]Tạo tệp cơ sở dữ liệu giả lập `public/data.json` chứa cấu trúc danh sách tối thiểu 5 công việc mẫu[cite: 52].
* [cite_start]**Logic Form Validation:** Kiểm tra điều kiện nhập liệu của ô tính năng tên Task[cite: 53]:
    * Bắt lỗi và không cho phép gửi Form nếu chuỗi trống hoặc chỉ chứa khoảng trắng.
    * [cite_start]Giới hạn độ dài chuỗi ký tự nhập vào không được phép vượt quá **100 ký tự**[cite: 53].
    * [cite_start]Hiển thị thông báo lỗi trực quan ngay dưới ô nhập bằng class `is-invalid` và `invalid-feedback` của Bootstrap[cite: 54].

### 🔹 Câu 3: Tư duy ReactJS & Xử lý Dữ liệu Động (3 điểm)
* Áp dụng kỹ thuật chia nhỏ cấu trúc dự án thành các Component độc lập, dễ bảo trì: `TaskList`, `TaskItem`, và `AddTaskModal`.
* [cite_start]Sử dụng Hook `useEffect()` phối hợp cùng `fetch API` để tự động truy vấn dữ liệu động từ tệp JSON ngay khi ứng dụng vừa khởi chạy[cite: 56].
* Ứng dụng cơ chế quản lý trạng thái React State (`useState`) kết hợp nguyên lý bất biến (Immutability - Spread Operator `[...]`) để thực hiện thêm mới Task vào danh sách và render lại giao diện thời gian thực (Real-time).

---

## 📂 CẤU TRÚC THƯ MỤC MÃ NGUỒN SẠCH (CLEAN CODE)
```text
EXAM2024.Minhhoa/
├── public/
│   └── data.json           # CSDL giả lập chứa danh sách công việc mẫu
├── src/
│   ├── components/         # Thư mục chứa các thành phần giao diện tách rời
│   │   ├── AddTaskModal.jsx# Component Form nổi thêm mới & xử lý Validation
│   │   ├── TaskItem.jsx    # Component dòng hiển thị chi tiết từng công việc
│   │   └── TaskList.jsx    # Component khung bao bọc danh sách chính
│   ├── App.jsx             # Component gốc quản lý State tổng và Fetch dữ liệu
│   ├── index.css           # Tệp tùy chỉnh CSS hiệu ứng hover và Responsive
│   └── main.jsx            # Điểm khởi tạo ứng dụng React với DOM
├── package.json            # Định nghĩa các thư viện phụ thuộc của dự án
└── README.md               # Tài liệu hướng dẫn và thông tin bài thi (File này)