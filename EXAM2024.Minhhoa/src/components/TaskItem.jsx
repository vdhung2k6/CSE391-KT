import React from 'react';

// Component con hiển thị chi tiết từng Task trong danh sách
function TaskItem({ task }) {
  // Hàm bổ trợ để lấy class CSS tương ứng với mức độ ưu tiên (Priority)
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High': return 'text-danger fw-bold'; // Đỏ [cite: 25, 40]
      case 'Medium': return 'text-warning fw-bold'; // Vàng [cite: 35, 41]
      case 'Low': return 'text-success fw-bold'; // Xanh lá [cite: 30, 42]
      default: return 'text-secondary';
    }
  };

  // Hàm bổ trợ hiển thị Icon trạng thái tiến độ theo mockup hình ảnh
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Done': 
        return <i className="bi bi-check-circle-fill text-primary fs-4"></i>; // Vòng tròn hoàn thành [cite: 28]
      case 'In Progress': 
        return <i className="bi bi-circle-half text-primary fs-4"></i>; // Vòng tròn đang làm nửa vời [cite: 33]
      default: 
        return <i className="bi bi-circle text-muted fs-4"></i>; // Vòng tròn trống rỗng (To Do) [cite: 23]
    }
  };

  return (
    <div className="card shadow-sm mb-3 border-0 bg-white py-2 px-3 rounded-4">
      <div className="card-body d-flex align-items-center justify-content-between p-2">
        
        {/* Cột hiển thị Tên Task */}
        <div className="flex-grow-1 me-3">
          <small className="text-muted d-block small-label">Task</small>
          <span className={`fs-5 ${task.status === 'Done' ? 'text-decoration-line-through text-muted' : 'text-dark fw-semibold'}`}>
            {task.taskName}
          </span>
        </div>

        {/* Cột hiển thị Độ ưu tiên */}
        <div className="me-4 text-start" style={{ minWidth: '90px' }}>
          <small className="text-muted d-block small-label">Priority</small>
          <span className={getPriorityClass(task.priority)}>{task.priority}</span>
        </div>

        {/* Cột hiển thị Badge Trạng thái */}
        <div className="me-4">
          <span className="badge bg-light text-dark border px-3 py-2 rounded-pill shadow-xs">
            {task.status}
          </span>
        </div>

        {/* Cột hiển thị Icon Trạng thái Tiến độ */}
        <div className="me-4 cursor-pointer">
          {getStatusIcon(task.status)}
        </div>

        {/* Nhóm nút chức năng Hành động (Sửa / Xóa) */}
        <div className="d-flex gap-2">
          <button className="btn btn-link text-dark p-1 m-0 border-0 shadow-none">
            <i className="bi bi-pencil-square fs-5"></i>
          </button>
          <button className="btn btn-link text-danger p-1 m-0 border-0 shadow-none">
            <i className="bi bi-trash3 fs-5"></i>
          </button>
        </div>

      </div>
    </div>
  );
}

export default TaskItem;