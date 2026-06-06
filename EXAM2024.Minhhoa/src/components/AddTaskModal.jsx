import React, { useState } from 'react';

function AddTaskModal({ show, onClose, onAddTask }) {
  // 1. Khởi tạo các State cục bộ để quản lý dữ liệu trong Form
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('Medium'); // Mặc định chọn mức Medium
  const [error, setError] = useState(''); // Lưu trữ thông điệp lỗi kiểm định dữ liệu

  // Nếu flag 'show' là false thì đóng/ẩn Modal hoàn toàn
  if (!show) return null;

  // 2. Hàm xử lý khi người dùng nhấn nút bấm nộp Form (Add)
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn hành vi tải lại trang mặc định của Form HTML

    // --- CÂU 2: LOGIC VALIDATION (KIỂM ĐỊNH DỮ LIỆU) ---
    const trimmedName = taskName.trim();

    // Tiêu chí 1: Không được phép để trống tên Task
    if (!trimmedName) {
      setError('Tên công việc không được để trống!');
      return;
    }

    // Tiêu chí 2: Không được phép vượt quá 100 ký tự
    if (trimmedName.length > 100) {
      setError('Tên công việc không được vượt quá 100 ký tự!');
      return;
    }

    // Nếu dữ liệu hợp lệ vượt qua các vòng kiểm tra trên -> Xóa bỏ lỗi cũ
    setError('');

    // 3. Khởi tạo đối tượng Task mới đúng cấu trúc CSDL giả lập
    const newTask = {
      id: `task-${Date.now()}`, // Tạo id ngẫu nhiên duy nhất theo mốc thời gian hệ thống
      taskName: trimmedName,
      priority: priority,
      status: 'To Do' // Task mới thêm mặc định sẽ có trạng thái là To Do
    };

    // 4. Gọi hàm Callback truyền ngược Task mới lên Component cha (App.jsx)
    onAddTask(newTask);

    // 5. Reset lại toàn bộ Form để sẵn sàng cho lần nhập tiếp theo và đóng Modal
    setTaskName('');
    setPriority('Medium');
    onClose();
  };

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
         style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1050 }}>
      
      <div className="card shadow-lg border-0 rounded-4 w-100 mx-3" style={{ maxWidth: '600px' }}>
        
        <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center pt-4 px-4 pb-2">
          <h4 className="fw-bold mb-0 text-dark">Add Task</h4>
          <button type="button" className="btn-close shadow-none" onClick={onClose}></button>
        </div>

        <div className="card-body px-4 pb-4">
          <form onSubmit={handleSubmit}>
            
            {/* Trường nhập Tên công việc */}
            <div className="mb-4">
              <label className="form-label text-muted small fw-semibold">Task</label>
              <input 
                type="text" 
                // Sử dụng toán tử ba ngôi để thêm class 'is-invalid' của Bootstrap khi có lỗi
                className={`form-control form-control-lg bg-light border-0 rounded-3 shadow-none text-dark ${error ? 'is-invalid' : ''}`}
                placeholder="Type your task here"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
              {/* Hiển thị thông báo lỗi trực quan ngay dưới ô nhập liệu nếu có lỗi */}
              {error && <div className="invalid-feedback fw-medium mt-1">{error}</div>}
            </div>

            {/* Trường chọn Mức độ ưu tiên (Sử dụng Render linh hoạt theo State) */}
            <div className="mb-4">
              <label className="form-label text-muted small fw-semibold d-block">Priority</label>
              <div className="d-flex gap-2">
                <button 
                  type="button" 
                  className={`btn px-4 rounded-pill fw-medium transition-all ${priority === 'High' ? 'btn-danger text-white' : 'btn-outline-danger'}`}
                  onClick={() => setPriority('High')}
                >
                  High
                </button>
                <button 
                  type="button" 
                  className={`btn px-4 rounded-pill fw-medium transition-all ${priority === 'Medium' ? 'btn-warning text-dark' : 'btn-outline-warning'}`}
                  onClick={() => setPriority('Medium')}
                >
                  Medium
                </button>
                <button 
                  type="button" 
                  className={`btn px-4 rounded-pill fw-medium transition-all ${priority === 'Low' ? 'btn-success text-white' : 'btn-outline-success'}`}
                  onClick={() => setPriority('Low')}
                >
                  Low
                </button>
              </div>
            </div>

            {/* Nút hành động Lưu/Thêm mới */}
            <div className="d-flex justify-content-end mt-4">
              <button type="submit" className="btn btn-secondary px-4 py-2 rounded-3 fw-bold shadow-sm" style={{ minWidth: '100px' }}>
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