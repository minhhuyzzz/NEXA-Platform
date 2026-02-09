import React, { useState, useEffect } from 'react';
// CHÚ Ý: Import Sidebar để nó hiện bên trái
import OrgSidebar from '../components/OrgSidebar'; 
import { 
  Search, Download, MoreVertical, 
  CheckCircle2, Clock, Filter
} from 'lucide-react';

const OrgUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Nguyễn Thị B', code: 'SV-2024001', email: 'b.nguyen@edu.vn', role: 'student', score: 850, status: 'completed' },
    { id: 2, name: 'Lê Văn C', code: 'GV-005', email: 'c.le@techcorp.com', role: 'staff', score: 920, status: 'active' },
  ]);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('nexa_user') || 'null');
    if (savedUser) {
      setUsers(prev => [{
        id: 999,
        name: savedUser.fullName || 'Trần Minh Huy', // Hiển thị đúng tên bạn
        code: savedUser.idCode || 'N/A',
        email: savedUser.email || 'huy.tm@iuh.edu.vn',
        role: savedUser.role || 'student',
        score: 0,
        status: 'active'
      }, ...prev]);
    }
  }, []);

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans text-slate-900 overflow-hidden">
      {/* HIỂN THỊ SIDEBAR Ở ĐÂY */}
      <OrgSidebar />

      {/* PHẦN NỘI DUNG BÊN PHẢI (BẢNG DANH SÁCH) */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="px-8 py-6 border-b border-slate-100 bg-white flex justify-between items-center shrink-0">
          <div>
            <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Quản lý Nhân sự</h1>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mt-1">
              Tổng số: <span className="text-[#3b66f5] font-black">{users.length}</span> học viên
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-3 bg-[#1e3a8a] text-white rounded-xl font-[1000] text-xs uppercase tracking-widest hover:bg-blue-900 shadow-lg transition-all">
              <Download size={18} /> Xuất dữ liệu
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50/50">
                <tr>
                  <th className="px-8 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-[0.2em]">Học viên</th>
                  <th className="px-8 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-[0.2em]">Mã số</th>
                  <th className="px-8 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-[0.2em]">Vai trò</th>
                  <th className="px-8 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-[0.2em]">Trạng thái</th>
                  <th className="px-8 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-[0.2em] text-right">Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-blue-50/20 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-[#1e3a8a] flex items-center justify-center text-white font-black text-sm shadow-md">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-[1000] text-sm text-slate-800 uppercase tracking-tighter">{user.name}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5 font-black text-xs text-slate-500 tracking-widest">{user.code}</td>
                    <td className="px-8 py-5">
                      <span className={`px-4 py-1.5 rounded-full text-[9px] font-[1000] uppercase tracking-widest ${
                        user.role === 'student' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                      }`}>
                        {user.role === 'student' ? 'Sinh viên' : 'Cán bộ'}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl w-fit ${user.status === 'completed' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                        {user.status === 'completed' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                        <span className="text-[9px] font-[1000] uppercase tracking-widest">
                          {user.status === 'completed' ? 'Đã cấp NFT' : 'Đang thi'}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="p-2 hover:bg-slate-100 rounded-xl text-slate-400 transition-all">
                        <MoreVertical size={20} />
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

export default OrgUsers;