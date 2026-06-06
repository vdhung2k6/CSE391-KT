import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskModal from './components/AddTaskModal';

// Mockup mảng dữ liệu tạm thời để hiển thị cấu trúc tĩnh ban đầu
const initialStaticTasks = [
  { id: '1', taskName: 'Go to gym', priority: 'High', status: 'To Do' }, // [cite: 24, 25, 23]
  { id: '2', taskName: 'Read a book', priority: 'Low', status: 'Done' }, // [cite: 29, 30, 28]
  { id: '3', taskName: 'Go to market', priority: 'Medium', status: 'In Progress' } // [cite: 34, 35, 33]
];

function App() {
  // Quản lý trạng thái đóng/mở của cửa sổ nổi AddTaskModal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-vh-100 w-100 bg-light-gray position-relative" style={{ backgroundColor: '#f4f6f9' }}>
      
      {/* Render danh sách công việc chính */}
      <TaskList 
        tasks={initialStaticTasks} 
        onOpenAddModal={() => setIsModalOpen(true)} 
      />

      {/* Cửa sổ nổi Thêm công việc mới */}
      <AddTaskModal 
        show={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </div>
  );
}

export default App;