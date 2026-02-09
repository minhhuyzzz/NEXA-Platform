import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, FileBarChart, Award, 
  Settings, LogOut, Search, Download, Filter, 
  CheckCircle2, Clock, MoreVertical, ShieldCheck, UserCheck, Plus 
} from 'lucide-react';

/* --- 1. ĐỊNH NGHĨA CÁC COMPONENT CON TRƯỚC (ĐỂ TRÁNH LỖI) --- */

const MenuBtn = ({ icon, label, active, onClick }) => (
  <button onClick={onClick} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-bold text-sm ${active ? 'bg-blue-50 text-[#3b66f5]' : 'text-slate-400 hover:bg-slate-50'}`}>
    {icon} <span className="tracking-tight">{label}</span>
  </button>
);

const KPICard = ({ title, value, icon, bg }) => (
  <div className="bg-white p-5 rounded-[24px] border border-slate-100 shadow-sm flex items-center gap-4">
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${bg}`}>{icon}</div>
    <div>
      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{title}</h4>
      <p className="text-3xl font-[1000] text-slate-800 tracking-tighter">{value}</p>
    </div>
  </div>
);

const StatusBadge = ({ status }) => {
  const styles = { 
    completed: 'bg-green-50 text-green-600 border-green-100', 
    active: 'bg-blue-50 text-blue-600 border-blue-100', 
    pending: 'bg-orange-50 text-orange-600 border-orange-100' 
  };
  const labels = { completed: 'Đã cấp NFT', active: 'Đang học', pending: 'Chờ duyệt' };

  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full w-fit border ${styles[status] || styles.active}`}>
      {status === 'completed' ? <CheckCircle2 size={12} strokeWidth={3} /> : <UserCheck size={12} strokeWidth={3} />}
      <span className="text-[9px] font-[1000] uppercase tracking-widest">{labels[status] || 'Active'}</span>
    </div>
  );
};

const FilterBtn = ({ label, active, onClick }) => (
  <button onClick={onClick} className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${active ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-500 hover:bg-slate-50'}`}>
    {label}
  </button>
);

/* --- 2. COMPONENT CHÍNH --- */

const OrgUsers = () => {
  console.log("--> ORG USERS PAGE IS RENDERING..."); // Kiểm tra xem trang có chạy không

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const [users, setUsers] = useState([
    { id: 1, name: 'Nguyễn Thị Bích', code: 'SV-2024001', email: 'bich.nguyen@edu.vn', role: 'student', status: 'completed', dept: 'Kế toán' },
    { id: 2, name: 'Lê Văn Cường', code: 'GV-005', email: 'cuong.le@techcorp.com', role: 'staff', status: 'active', dept: 'IT Soft' },
    { id: 3, name: 'Phạm Minh Dũng', code: 'SV-2024088', email: 'dung.pm@iuh.edu.vn', role: 'student', status: 'pending', dept: 'Marketing' },
    { id: 4, name: 'Hoàng Anh Tuấn', code: 'SV-2024102', email: 'tuan.ha@gmail.com', role: 'student', status: 'completed', dept: 'Sales' },
    { id: 5, name: 'Trần Thu Hà', code: 'SV-2024155', email: 'ha.tran@design.com', role: 'student', status: 'active', dept: 'Design' },
  ]);

  useEffect(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem('nexa_user') || '{}');
      if (savedUser.fullName) {
        setUsers(prev => [{
          id: 999,
          name: savedUser.fullName,
          code: 'ADMIN-VIP',
          email: savedUser.email || 'admin@nexa.com',
          role: 'staff',
          status: 'active',
          dept: 'Quản Trị'
        }, ...prev]);
      }
    } catch (e) {
      console.error("Lỗi đọc user:", e);
    }
  }, []);

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          user.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans text-slate-900 overflow-hidden text-left">
      
      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col h-screen shrink-0 z-20">
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#3b66f5] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">N</div>
          <span className="text-[#0F172A] font-[1000] text-2xl tracking-tighter uppercase">NEXA Org</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          <MenuBtn icon={<LayoutDashboard size={20}/>} label="Tổng quan" onClick={() => navigate('/admin')} />
          <MenuBtn active icon={<Users size={20}/>} label="Quản lý Nhân sự" />
          <MenuBtn icon={<FileBarChart size={20}/>} label="Báo cáo ESG" onClick={() => navigate('/admin/esg')} />
          <MenuBtn icon={<Award size={20}/>} label="Chứng chỉ & NFT" onClick={() => navigate('/admin/nft')} />
          <div className="pt-8 pb-4"><div className="h-px bg-slate-100 mx-4"></div></div>
          <MenuBtn icon={<Settings size={20}/>} label="Cài đặt hệ thống" />
        </nav>

        <div className="p-6 border-t border-slate-50">
          <button onClick={() => navigate('/login')} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-red-500 hover:bg-red-50 font-bold text-sm transition-all">
            <LogOut size={20} /> <span className="tracking-tight">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-[#f8fafc]">
        <header className="px-8 py-6 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-10 flex justify-between items-center shrink-0">
          <div>
            <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Hồ sơ Nhân sự</h1>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mt-1">Danh sách thành viên</p>
          </div>
          <button className="flex items-center gap-2 px-5 py-3 bg-[#3b66f5] text-white rounded-xl font-[1000] text-xs uppercase tracking-widest hover:bg-blue-600 shadow-lg shadow-blue-200 transition-all">
            <Plus size={16} strokeWidth={3} /> Thêm mới
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="max-w-7xl mx-auto space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <KPICard title="Tổng thành viên" value={users.length} icon={<Users size={20} className="text-blue-600"/>} bg="bg-blue-50" />
              <KPICard title="Đã cấp NFT" value="128" icon={<ShieldCheck size={20} className="text-green-600"/>} bg="bg-green-50" />
              <KPICard title="Đang xét duyệt" value="12" icon={<Clock size={20} className="text-orange-600"/>} bg="bg-orange-50" />
            </div>

            <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Tìm kiếm..." 
                  className="w-full pl-11 pr-4 py-3 bg-transparent outline-none font-bold text-sm text-slate-700"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="h-8 w-px bg-slate-100"></div>
              <div className="flex gap-2 pr-2">
                <FilterBtn label="Tất cả" active={filterStatus === 'all'} onClick={() => setFilterStatus('all')} />
                <FilterBtn label="Đã cấp NFT" active={filterStatus === 'completed'} onClick={() => setFilterStatus('completed')} />
                <FilterBtn label="Đang học" active={filterStatus === 'active'} onClick={() => setFilterStatus('active')} />
              </div>
            </div>

            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50/50 border-b border-slate-100">
                  <tr>
                    <th className="px-8 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-[0.2em]">Thành viên</th>
                    <th className="px-6 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-[0.2em]">Phòng ban</th>
                    <th className="px-6 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-[0.2em]">Mã số</th>
                    <th className="px-6 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-[0.2em]">Trạng thái</th>
                    <th className="px-8 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-[0.2em] text-right">Tác vụ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-blue-50/20 transition-colors group">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black shadow-md bg-gradient-to-br from-blue-500 to-indigo-600">
                            {user.name ? user.name.charAt(0) : 'U'}
                          </div>
                          <div>
                            <p className="font-[1000] text-sm text-slate-800 uppercase tracking-tight">{user.name}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-600 text-[10px] font-bold uppercase border border-slate-100">{user.dept}</span>
                      </td>
                      <td className="px-6 py-5 font-black text-xs text-slate-500 tracking-widest font-mono">{user.code}</td>
                      <td className="px-6 py-5"><StatusBadge status={user.status} /></td>
                      <td className="px-8 py-5 text-right"><MoreVertical size={18} className="text-slate-300 inline" /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default OrgUsers;