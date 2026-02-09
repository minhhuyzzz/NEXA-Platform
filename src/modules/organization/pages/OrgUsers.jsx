import React, { useState, useEffect } from 'react';
// Import Sidebar
import OrgSidebar from '../components/OrgSidebar'; 
import { 
  Search, Download, MoreVertical, 
  CheckCircle2, XCircle, Clock
} from 'lucide-react';

const OrgUsers = () => {
  // Dữ liệu mẫu cho bảng nhân sự
  const [users, setUsers] = useState([
    { id: 1, name: 'Nguyễn Thị B', code: 'SV-2024001', email: 'b.nguyen@edu.vn', role: 'student', score: 850, status: 'completed' },
    { id: 2, name: 'Lê Văn C', code: 'GV-005', email: 'c.le@techcorp.com', role: 'staff', score: 920, status: 'active' },
  ]);

  // Lấy dữ liệu người dùng mới từ LocalStorage
  useEffect(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem('nexa_user') || 'null');
      if (savedUser) {
        setUsers(prev => [{
          id: 999,
          name: savedUser.fullName || 'Thành viên mới',
          code: savedUser.idCode || 'N/A',
          email: savedUser.email || 'user@example.com',
          role: savedUser.role || 'student',
          score: 0,
          status: 'active'
        }, ...prev]);
      }
    } catch (error) {
      console.error("Lỗi:", error);
    }
  }, []);

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans text-slate-900 overflow-hidden">
      {/* Sidebar */}
      <OrgSidebar />

      {/* Nội dung chính */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="px-8 py-6 border-b border-slate-100 bg-white flex justify-between items-center shrink-0">
          <div>
            <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Quản lý Nhân sự</h1>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mt-1">
              Tổng số: <span className="text-[#3b66f5]">{users.length}</span> thành viên
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-3 bg-[#1e3a8a] text-white rounded-xl font-bold text-sm shadow-lg">
              <Download size={18} /> Xuất Excel
            </button>
          </div>
        </header>

        {/* Bảng Dữ liệu (Không có biểu đồ) */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50/50">
                <tr>
                  <th className="px-6 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-widest">Học viên</th>
                  <th className="px-6 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-widest">Vai trò</th>
                  <th className="px-6 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-widest">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-blue-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#1e3a8a] font-[1000]">{user.name.charAt(0)}</div>
                        <div>
                          <p className="font-[1000] text-sm text-slate-800">{user.name}</p>
                          <p className="text-[10px] font-bold text-slate-400">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-[1000] uppercase ${user.role === 'student' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'}`}>
                        {user.role === 'student' ? 'Sinh viên' : 'Cán bộ'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                       <StatusBadge status={user.status} />
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

const StatusBadge = ({ status }) => {
  const styles = {
    completed: { bg: 'bg-green-50', text: 'text-green-600', icon: <CheckCircle2 size={12} />, label: 'Đã cấp NFT' },
    active: { bg: 'bg-blue-50', text: 'text-blue-600', icon: <Clock size={12} />, label: 'Đang thi' },
  };
  const current = styles[status] || styles.active;
  return (
    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg w-fit ${current.bg} ${current.text}`}>
      {current.icon}
      <span className="text-[10px] font-[1000] uppercase tracking-wider">{current.label}</span>
    </div>
  );
};

export default OrgUsers;