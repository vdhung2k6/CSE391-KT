import React from 'react';

function AddTaskModal({ show, onClose }) {
  // Nếu flag 'show' là false thì không render component này ra màn hình
  if (!show) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
         style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1050 }}>
      
      <div className="card shadow-lg border-0 rounded-4 w-100 mx-3" style={{ maxWidth: '600px' }}>
        
        {/* Header của Cửa sổ nổi */}
        <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center pt-4 px-4 pb-2">
          <h4 className="fw-bold mb-0">Add Task</h4>
          <button type="button" className="btn-close shadow-none" onClick={onClose}></button>
        </div>

        {/* Body chứa Form nhập liệu */}
        <div className="card-body px-4 pb-4">
          <form onSubmit={(e) => e.preventDefault()}>
            
            {/* Trường nhập Tên công việc */}
            <div className="mb-4">
              <label className="form-label text-muted small fw-semibold">Task</label>
              <input 
                type="text" 
                className="form-control form-control-lg bg-light border-0 rounded-3 shadow-none text-secondary" 
                placeholder="Type your task here"
              />
            </div>

            {/* Trường chọn Mức độ ưu tiên */}
            <div className="mb-4">
              <label className="form-label text-muted small fw-semibold d-block">Priority</label>
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-outline-danger px-4 rounded-pill fw-medium">High</button>
                <button type="button" className="btn btn-outline-warning px-4 rounded-pill fw-medium">Medium</button>
                <button type="button" className="btn btn-success px-4 rounded-pill fw-medium text-white">Low</button>
              </div>
            </div>

            {/* Nút hành động Lưu/Thêm mới */}
            <div className="d-flex justify-content-end mt-4">
              <button type="button" className="btn btn-secondary px-4 py-2 rounded-3 fw-bold shadow-sm" style={{ minWidth: '100px' }}>
                Add
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default AddTaskModal;