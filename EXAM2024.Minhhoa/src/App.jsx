import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTaskModal from './components/AddTaskModal';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Gọi API giả lập đọc file JSON ban đầu
  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) throw new Error('Không thể tải dữ liệu.');
        return response.json();
      })
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  // --- CÂU 3: CHỨC NĂNG THÊM MỚI TƯƠNG ỨNG TRÊN STATE ---
  const handleAddTask = (newTask) => {
    // Sử dụng cơ chế bất biến (Immutability) của React State để tạo một mảng mới hoàn toàn
    // Thêm đối tượng 'newTask' vào cuối danh sách dữ liệu hiện tại
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="min-vh-100 w-100 position-relative" style={{ backgroundColor: '#f4f6f9' }}>
      
      {loading ? (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Đang tải dữ liệu...</span>
          </div>
        </div>
      ) : (
        <TaskList 
          tasks={tasks} 
          onOpenAddModal={() => setIsModalOpen(true)} 
        />
      )}

      {/* Truyền hàm xử lý 'handleAddTask' xuống thông qua prop 'onAddTask' */}
      <AddTaskModal 
        show={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAddTask={handleAddTask}
      />

    </div>
  );
}

export default App;