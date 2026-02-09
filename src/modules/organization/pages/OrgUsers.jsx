import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, FileBarChart, Award, 
  Settings, LogOut, Download, CheckCircle2, Clock, MoreVertical 
} from 'lucide-react';

const OrgUsers = () => {
  const navigate = useNavigate();

  // Dữ liệu mẫu (Chỉ có bảng, KHÔNG CÓ BIỂU ĐỒ)
  const [users, setUsers] = useState([
    { id: 1, name: 'Nguyễn Thị B', code: 'SV-2024001', email: 'b.nguyen@edu.vn', role: 'student', score: 850, status: 'completed' },
    { id: 2, name: 'Lê Văn C', code: 'GV-005', email: 'c.le@techcorp.com', role: 'staff', score: 920, status: 'active' },
  ]);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('nexa_user') || 'null');
    if (savedUser) {
      setUsers(prev => [{
        id: 999,
        name: savedUser.fullName || 'Trần Minh Huy',
        code: savedUser.idCode || 'N/A',
        email: savedUser.email || 'user@example.com',
        role: savedUser.role || 'student',
        score: 0,
        status: 'active'
      }, ...prev]);
    }
  }, []);

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans text-slate-900 overflow-hidden text-left">
      
      {/* 1. SIDEBAR (Tích hợp sẵn để không bị lỗi file) */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col h-screen shrink-0">
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#3b66f5] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">N</div>
          <span className="text-[#0F172A] font-[1000] text-2xl tracking-tighter uppercase">NEXA Org</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          <button onClick={() => navigate('/admin')} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm text-slate-400 hover:bg-slate-50">
             <LayoutDashboard size={20}/> <span className="tracking-tight">Tổng quan</span>
          </button>
          
          <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm bg-blue-50 text-[#3b66f5]">
             <Users size={20}/> <span className="tracking-tight">Quản lý Nhân sự</span>
          </button>
          
          <button onClick={() => navigate('/admin/esg')} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm text-slate-400 hover:bg-slate-50">
             <FileBarChart size={20}/> <span className="tracking-tight">Báo cáo ESG</span>
          </button>
          
          <button onClick={() => navigate('/admin/nft')} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm text-slate-400 hover:bg-slate-50">
             <Award size={20}/> <span className="tracking-tight">Chứng chỉ & NFT</span>
          </button>
          
          <div className="pt-8 pb-4"><div className="h-px bg-slate-100 mx-4"></div></div>
          
          <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm text-slate-400 hover:bg-slate-50">
             <Settings size={20}/> <span className="tracking-tight">Cài đặt hệ thống</span>
          </button>
        </nav>

        <div className="p-6 border-t border-slate-50">
          <button onClick={() => navigate('/login')} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-red-500 hover:bg-red-50 font-bold text-sm transition-all">
            <LogOut size={20} /> <span className="tracking-tight">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* 2. NỘI DUNG CHÍNH (CHỈ CÓ BẢNG TABLE - KHÔNG CÓ CHART) */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="px-8 py-6 border-b border-slate-100 bg-white flex justify-between items-center shrink-0">
          <div>
            <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Quản lý Nhân sự</h1>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mt-1">Danh sách thành viên</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#1e3a8a] text-white rounded-xl font-[1000] text-xs uppercase tracking-widest hover:bg-blue-900 shadow-lg shadow-blue-900/20 transition-all">
            <Download size={18} /> Xuất Excel
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50/50">
                <tr>
                  <th className="px-8 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-[0.2em]">Học viên</th>
                  <th className="px-8 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-[0.2em]">Mã số</th>
                  <th className="px-8 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-[0.2em]">Trạng thái</th>
                  <th className="px-8 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-[0.2em] text-right">Hành động</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-blue-50/20 transition-colors">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-[#1e3a8a] font-black">{user.name.charAt(0)}</div>
                        <div>
                          <p className="font-[1000] text-sm text-slate-800 uppercase tracking-tighter">{user.name}</p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5 font-black text-xs text-slate-500 tracking-widest">{user.code}</td>
                    <td className="px-8 py-5">
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl w-fit ${user.status === 'completed' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                        {user.status === 'completed' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                        <span className="text-[9px] font-[1000] uppercase tracking-widest">{user.status === 'completed' ? 'Đã cấp NFT' : 'Đang thi'}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <MoreVertical size={18} className="inline text-slate-300" />
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