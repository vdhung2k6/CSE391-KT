import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTaskModal from './components/AddTaskModal';

function App() {
  // 1. Khởi tạo State để quản lý danh sách công việc động (ban đầu là mảng rỗng)
  const [tasks, setTasks] = useState([]);
  
  // 2. Quản lý trạng thái đóng/mở của cửa sổ nổi AddTaskModal
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // 3. Quản lý trạng thái Loading để giao diện chuyên nghiệp hơn trong lúc đợi tải dữ liệu
  const [loading, setLoading] = useState(true);

  // 4. Sử dụng useEffect để tự động fetch dữ liệu từ file JSON ngay khi ứng dụng khởi chạy
  useEffect(() => {
    // Thực hiện hàm fetch gọi dữ liệu từ đường dẫn public
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Không thể tải dữ liệu từ tệp tin JSON');
        }
        return response.json(); // Chuyển đổi phản hồi thành định dạng mảng JSON
      })
      .then((data) => {
        setTasks(data); // Cập nhật mảng dữ liệu động vào State
        setLoading(false); // Tắt hiệu ứng loading
      })
      .catch((error) => {
        console.error('Đã xảy ra lỗi hệ thống khi fetch dữ liệu:', error);
        setLoading(false);
      });
  }, []); // Mảng phụ thuộc rỗng [] đảm bảo hàm này chỉ chạy duy nhất 1 lần khi component mount

  return (
    <div className="min-vh-100 w-100 position-relative" style={{ backgroundColor: '#f4f6f9' }}>
      
      {/* Kỹ thuật Render có điều kiện (Conditional Rendering) dựa trên trạng thái loading */}
      {loading ? (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
          <div className="spinner-border text-primary" role="status" style={{ color: '#6f42c1' }}>
            <span className="visually-hidden">Đang tải dữ liệu...</span>
          </div>
        </div>
      ) : (
        // Truyền State 'tasks' đã được đổ dữ liệu động xuống cho Component con hiển thị
        <TaskList 
          tasks={tasks} 
          onOpenAddModal={() => setIsModalOpen(true)} 
        />
      )}

      {/* Cửa sổ nổi Thêm công việc mới */}
      <AddTaskModal 
        show={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>
  );
}

export default App;