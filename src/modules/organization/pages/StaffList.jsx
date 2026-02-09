import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, FileBarChart, Award, 
  Settings, LogOut, Search, Plus, CheckCircle2, 
  UserCheck, Clock, MoreVertical, Loader2, ChevronLeft, ChevronRight
} from 'lucide-react';

/* =========================================
   1. SUB-COMPONENTS (Tách nhỏ để tái sử dụng)
   ========================================= */

const SidebarItem = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick} 
    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 font-bold text-sm group
    ${active 
      ? 'bg-blue-50 text-[#3b66f5] shadow-sm translate-x-1' 
      : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600 hover:translate-x-1'}`}
  >
    <div className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
      {icon}
    </div>
    <span className="tracking-tight">{label}</span>
  </button>
);

const StatusBadge = ({ status }) => {
  const config = { 
    completed: { color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-100', label: 'Đã cấp NFT', icon: CheckCircle2 },
    active:    { color: 'text-blue-600',  bg: 'bg-blue-50',  border: 'border-blue-100',  label: 'Đang học',   icon: UserCheck },
    pending:   { color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100', label: 'Chờ duyệt',  icon: Clock }
  };
  const item = config[status] || config.active;
  const Icon = item.icon;

  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full w-fit border ${item.bg} ${item.color} ${item.border} shadow-sm`}>
      <Icon size={12} strokeWidth={3} />
      <span className="text-[9px] font-[1000] uppercase tracking-widest">{item.label}</span>
    </div>
  );
};

const TableRowSkeleton = () => (
  <tr className="animate-pulse border-b border-slate-50">
    <td className="px-8 py-5"><div className="h-10 w-48 bg-slate-100 rounded-xl"></div></td>
    <td className="px-6 py-5"><div className="h-6 w-24 bg-slate-100 rounded-lg"></div></td>
    <td className="px-6 py-5"><div className="h-6 w-20 bg-slate-100 rounded-full"></div></td>
    <td className="px-8 py-5 text-right"><div className="h-8 w-8 bg-slate-100 rounded-full ml-auto"></div></td>
  </tr>
);

/* =========================================
   2. MAIN COMPONENT (Logic chính)
   ========================================= */

const StaffList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  // Giả lập gọi API (Loading Effect)
  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers([
        { id: 1, name: 'Nguyễn Thị Bích', code: 'SV-2024001', email: 'bich.nguyen@edu.vn', status: 'completed', dept: 'Kế toán' },
        { id: 2, name: 'Lê Văn Cường', code: 'GV-005', email: 'cuong.le@techcorp.com', status: 'active', dept: 'IT Soft' },
        { id: 3, name: 'Phạm Minh Dũng', code: 'SV-2024088', email: 'dung.pm@iuh.edu.vn', status: 'pending', dept: 'Marketing' },
        { id: 4, name: 'Hoàng Anh Tuấn', code: 'SV-2024102', email: 'tuan.ha@gmail.com', status: 'completed', dept: 'Sales' },
        { id: 5, name: 'Trần Thu Hà', code: 'SV-2024155', email: 'ha.tran@design.com', status: 'active', dept: 'Design' },
      ]);
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Tối ưu bộ lọc
  const filteredUsers = useMemo(() => {
    return users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans text-slate-900 overflow-hidden text-left">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col h-screen shrink-0 z-20">
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#3b66f5] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200">N</div>
          <span className="text-[#0F172A] font-[1000] text-2xl tracking-tighter uppercase">NEXA Org</span>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2">
          {/* CẬP NHẬT NAVIGATE TẠI ĐÂY */}
          <SidebarItem 
            icon={<LayoutDashboard size={20}/>} 
            label="Tổng quan" 
            onClick={() => navigate('/admin')} 
          />
          <SidebarItem 
            active 
            icon={<Users size={20}/>} 
            label="Quản lý Nhân sự" 
            // Trang hiện tại không cần onClick
          />
          <SidebarItem 
            icon={<FileBarChart size={20}/>} 
            label="Báo cáo ESG" 
            onClick={() => navigate('/admin/esg')} 
          />
          <SidebarItem 
            icon={<Award size={20}/>} 
            label="Chứng chỉ & NFT" 
            onClick={() => navigate('/admin/nft')} 
          />
          
          <div className="pt-8 pb-4"><div className="h-px bg-slate-100 mx-4"></div></div>
          <SidebarItem icon={<Settings size={20}/>} label="Cài đặt hệ thống" />
        </nav>
        <div className="p-6 border-t border-slate-50">
          <button onClick={() => navigate('/login')} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-red-500 hover:bg-red-50 font-bold text-sm transition-all group">
            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" /> 
            <span className="tracking-tight">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="px-8 py-6 border-b border-slate-100 bg-white/80 backdrop-blur-md flex justify-between items-center shrink-0 sticky top-0 z-10">
          <div>
            <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Hồ sơ Nhân sự</h1>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mt-1">Danh sách thành viên tổ chức</p>
          </div>
          <div className="flex gap-3">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-blue-500 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Tìm kiếm thành viên..." 
                className="pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl outline-none font-bold text-xs w-64 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="flex items-center gap-2 px-5 py-3 bg-[#3b66f5] text-white rounded-xl font-[1000] text-xs uppercase tracking-widest hover:bg-blue-600 shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 transition-all">
              <Plus size={16} strokeWidth={3} /> Thêm mới
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="max-w-7xl mx-auto space-y-6">
             <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm overflow-hidden flex flex-col min-h-[500px]">
              
              {/* Table Header */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-slate-50/50 border-b border-slate-100">
                    <tr>
                      <th className="px-8 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-[0.2em]">Học viên</th>
                      <th className="px-6 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-[0.2em]">Phòng ban</th>
                      <th className="px-6 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-[0.2em]">Trạng thái</th>
                      <th className="px-8 py-5 text-[10px] font-[1000] text-slate-400 uppercase tracking-[0.2em] text-right">Tác vụ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {/* Hiệu ứng Loading Skeleton */}
                    {isLoading ? (
                      <>
                        <TableRowSkeleton /><TableRowSkeleton /><TableRowSkeleton /><TableRowSkeleton />
                      </>
                    ) : filteredUsers.length > 0 ? (
                      filteredUsers.map((user) => (
                        <tr key={user.id} className="hover:bg-blue-50/30 transition-colors group cursor-pointer">
                          <td className="px-8 py-5">
                            <div className="flex items-center gap-4 text-left">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black shadow-md group-hover:scale-110 transition-transform">
                                {user.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-[1000] text-sm text-slate-800 uppercase tracking-tight group-hover:text-blue-600 transition-colors">{user.name}</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase">{user.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <span className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-600 text-[10px] font-bold uppercase border border-slate-100 shadow-sm">{user.dept}</span>
                          </td>
                          <td className="px-6 py-5"><StatusBadge status={user.status} /></td>
                          <td className="px-8 py-5 text-right">
                            <button className="p-2 hover:bg-slate-100 rounded-full text-slate-300 hover:text-blue-600 transition-colors">
                              <MoreVertical size={18} />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="py-20 text-center">
                          <div className="flex flex-col items-center justify-center text-slate-300">
                            <Search size={48} className="mb-4 opacity-20" />
                            <p className="text-sm font-bold uppercase tracking-wider">Không tìm thấy kết quả</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination (Footer) */}
              {!isLoading && filteredUsers.length > 0 && (
                <div className="mt-auto px-8 py-6 border-t border-slate-50 flex justify-between items-center bg-white">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Hiển thị {filteredUsers.length} kết quả</span>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-xl border border-slate-100 text-slate-400 hover:bg-slate-50 hover:text-slate-600 disabled:opacity-50" disabled><ChevronLeft size={16}/></button>
                    <button className="p-2 rounded-xl border border-slate-100 text-slate-400 hover:bg-slate-50 hover:text-slate-600"><ChevronRight size={16}/></button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StaffList;