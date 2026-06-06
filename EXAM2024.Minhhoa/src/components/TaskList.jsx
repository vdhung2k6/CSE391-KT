import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onOpenAddModal }) {
  return (
    <div className="container py-5" style={{ maxWidth: '850px' }}>
      
      {/* Thanh tiêu đề và nút kích hoạt Add Task */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-black text-dark mb-0 display-6" style={{ fontWeight: '800' }}>Task List</h1>
        <button 
          className="btn btn-primary px-4 py-2 rounded-3 border-0 fw-bold d-flex align-items-center gap-2 shadow"
          style={{ backgroundColor: '#6f42c1' }}
          onClick={onOpenAddModal}
        >
          <i className="bi bi-plus-lg fs-6"></i> Add Task
        </button>
      </div>

      {/* Danh sách lặp qua các phần tử dữ liệu để hiển thị */}
      <div className="task-container mt-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>

    </div>
  );
}

export default TaskList;