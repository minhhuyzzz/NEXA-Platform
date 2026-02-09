import React, { useState, useEffect } from 'react';
import AdminSidebar from '../components/AdminSidebar'; // Đảm bảo bạn đã tạo file này ở bước trước
import { 
  Search, Filter, Download, MoreVertical, 
  Trash2, Edit, CheckCircle2, XCircle, Clock
} from 'lucide-react';

const AdminUsers = () => {
  // 1. Dữ liệu mẫu ban đầu
  const [users, setUsers] = useState([
    { id: 1, name: 'Nguyễn Thị B', code: 'SV-2024001', email: 'b.nguyen@edu.vn', role: 'student', score: 850, status: 'completed' },
    { id: 2, name: 'Lê Văn C', code: 'GV-005', email: 'c.le@techcorp.com', role: 'staff', score: 920, status: 'active' },
    { id: 3, name: 'Phạm Hoàng D', code: 'SV-2024002', email: 'd.pham@edu.vn', role: 'student', score: 450, status: 'pending' },
    { id: 4, name: 'Hoàng Anh E', code: 'SV-2024003', email: 'e.hoang@edu.vn', role: 'student', score: 0, status: 'inactive' },
  ]);

  // 2. Logic "Thần thánh": Lấy user bạn vừa đăng ký từ LocalStorage đưa vào bảng
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('nexa_user'));
    if (savedUser) {
      const newUser = {
        id: 999, // ID giả định
        name: savedUser.fullName,
        code: savedUser.idCode || 'N/A',
        email: savedUser.email || 'user@example.com',
        role: savedUser.role || 'student',
        score: 0, // Mới đăng ký nên điểm bằng 0
        status: 'active' // Trạng thái: Đang hoạt động
      };
      // Đưa user mới lên đầu danh sách
      setUsers(prev => [newUser, ...prev]);
    }
  }, []);

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans text-slate-900 overflow-hidden">
      
      {/* SIDEBAR ADMIN */}
      <AdminSidebar />

      {/* NỘI DUNG CHÍNH */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Header: Tiêu đề & Công cụ */}
        <header className="px-8 py-6 border-b border-slate-100 bg-white flex justify-between items-center shrink-0">
          <div>
            <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Quản lý Nhân sự</h1>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mt-1">
              Tổng số: <span className="text-[#3b66f5]">{users.length}</span> thành viên
            </p>
          </div>

          <div className="flex gap-3">
            {/* Thanh tìm kiếm */}
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#3b66f5]" size={18} />
              <input 
                type="text" 
                placeholder="Tìm kiếm học viên..." 
                className="pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-100 focus:border-[#3b66f5] outline-none font-bold text-sm w-64 transition-all"
              />
            </div>
            
            <button className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-xl font-bold text-sm hover:bg-slate-50 text-slate-600 transition-all">
              <Filter size={18} /> Lọc
            </button>
            <button className="flex items-center gap-2 px-5 py-3 bg-[#1e3a8a] text-white rounded-xl font-bold text-sm hover:bg-blue-900 shadow-lg shadow-blue-900/20 transition-all">
              <Download size={18} /> Xuất Excel
            </button>
          </div>
        </header>

        {/* Bảng Dữ liệu (Table) */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50/50">
                <tr>
                  <th className="px-6 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-widest">Học viên</th>
                  <th className="px-6 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-widest">Mã định danh</th>
                  <th className="px-6 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-widest">Vai trò</th>
                  <th className="px-6 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-widest">Điểm DigComp</th>
                  <th className="px-6 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-widest">Trạng thái</th>
                  <th className="px-6 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-widest text-right">Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-[#1e3a8a] font-[1000] text-sm">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-[1000] text-sm text-slate-800">{user.name}</p>
                          <p className="text-[10px] font-bold text-slate-400">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-sm text-slate-600">{user.code}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-[1000] uppercase tracking-wider ${
                        user.role === 'student' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                      }`}>
                        {user.role === 'student' ? 'Sinh viên' : 'Cán bộ'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div style={{width: `${user.score / 10}%`}} className="h-full bg-[#1e3a8a]"></div>
                        </div>
                        <span className="text-xs font-black">{user.score}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={user.status} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-[#1e3a8a] transition-all">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
};

/* --- Component Trạng thái --- */
const StatusBadge = ({ status }) => {
  const styles = {
    completed: { bg: 'bg-green-50', text: 'text-green-600', icon: <CheckCircle2 size={12} />, label: 'Đã cấp NFT' },
    active: { bg: 'bg-blue-50', text: 'text-blue-600', icon: <Clock size={12} />, label: 'Đang thi' },
    pending: { bg: 'bg-orange-50', text: 'text-orange-600', icon: <Clock size={12} />, label: 'Chờ duyệt' },
    inactive: { bg: 'bg-slate-100', text: 'text-slate-500', icon: <XCircle size={12} />, label: 'Chưa kích hoạt' },
  };

  const current = styles[status] || styles.inactive;

  return (
    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg w-fit ${current.bg} ${current.text}`}>
      {current.icon}
      <span className="text-[10px] font-[1000] uppercase tracking-wider">{current.label}</span>
    </div>
  );
};

export default AdminUsers;