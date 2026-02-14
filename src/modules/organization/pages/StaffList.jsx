import React, { useEffect, useState } from 'react';
import { 
  Search, Filter, MoreHorizontal, UserPlus, 
  Mail, Building2, GraduationCap, Briefcase 
} from 'lucide-react';
import { supabase } from '../../../services/supabaseClient';

const StaffList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [filterRole, setFilterRole] = useState('all'); // all, learner, school, business

  useEffect(() => {
    const fetchOrgUsers = async () => {
      try {
        setLoading(true);

        // 1. Lấy thông tin người đang đăng nhập (Admin/Giảng viên)
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) return;

        // 2. Lấy Profile chi tiết của người đang đăng nhập để biết họ thuộc Tổ chức nào
        const { data: myProfile, error: myError } = await supabase
          .from('profiles')
          .select('org_name, role') // Quan trọng: Lấy org_name
          .eq('id', user.id)
          .single();

        if (myError) throw myError;
        setCurrentUser(myProfile);

        // 3. Lấy danh sách nhân sự THUỘC CÙNG TỔ CHỨC
        // Logic: Chỉ lấy những ai có org_name GIỐNG org_name của người đang đăng nhập
        let query = supabase
          .from('profiles')
          .select('*')
          .eq('org_name', myProfile.org_name) // 👈 ĐÂY LÀ CHÌA KHÓA PHÂN QUYỀN
          .neq('id', user.id); // Không hiện chính mình trong danh sách

        // Nếu người xem là Giảng viên (school), chỉ cho xem Sinh viên (learner)
        // Admin (business/school) thì được xem hết
        if (myProfile.role === 'school' && myProfile.role !== 'business') {
             // Tùy logic bên bạn, ví dụ Giảng viên chỉ xem được Learner
             // query = query.eq('role', 'learner'); 
        }

        const { data: orgUsers, error: listError } = await query;
        if (listError) throw listError;

        setUsers(orgUsers || []);

      } catch (error) {
        console.error("Lỗi tải danh sách:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrgUsers();
  }, []);

  // Lọc theo UI (Dropdown)
  const filteredUsers = users.filter(user => 
    filterRole === 'all' ? true : user.role === filterRole
  );

  const getRoleBadge = (role) => {
    switch (role) {
      case 'learner': return <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase border border-blue-100">Sinh viên</span>;
      case 'school': return <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-bold uppercase border border-purple-100">Giảng viên</span>;
      case 'business': return <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase border border-orange-100">Quản lý</span>;
      default: return <span className="px-3 py-1 bg-slate-50 text-slate-500 rounded-full text-xs font-bold uppercase">Khác</span>;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="text-3xl font-[1000] text-slate-900 tracking-tight">Nhân sự & Học viên 👥</h1>
          <p className="text-slate-500 font-bold mt-1">
            Danh sách thuộc đơn vị: <span className="text-blue-600 uppercase">{currentUser?.org_name || "Đang tải..."}</span>
          </p>
        </div>
        <button className="flex items-center gap-2 px-5 py-3 bg-[#1e3a8a] text-white rounded-xl font-bold text-sm hover:bg-blue-800 transition shadow-lg shadow-blue-900/20">
            <UserPlus size={18} /> Thêm mới
        </button>
      </div>

      {/* TOOLBAR */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 justify-between">
        <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input type="text" placeholder="Tìm kiếm theo tên hoặc email..." className="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-xl border-none outline-none font-bold text-slate-600 focus:ring-2 focus:ring-blue-100 transition" />
        </div>
        <div className="flex gap-3">
             <select 
                className="px-4 py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-600 text-sm outline-none cursor-pointer hover:border-blue-400 transition"
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
             >
                <option value="all">Tất cả vai trò</option>
                <option value="learner">Sinh viên / Học viên</option>
                <option value="school">Giảng viên</option>
                <option value="business">Quản lý</option>
             </select>
             <button className="p-3 border border-slate-200 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition"><Filter size={20}/></button>
        </div>
      </div>

      {/* TABLE LIST */}
      <div className="bg-white rounded-[24px] border border-slate-100 shadow-sm overflow-hidden">
        {loading ? (
            <div className="p-12 text-center text-slate-400 font-bold">Đang tải danh sách...</div>
        ) : filteredUsers.length === 0 ? (
            <div className="p-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-300"><Users size={32}/></div>
                <p className="text-slate-500 font-bold">Chưa có nhân sự nào trong tổ chức "{currentUser?.org_name}".</p>
                <p className="text-xs text-slate-400 mt-2">Hãy mời họ đăng ký và nhập đúng tên tổ chức này.</p>
            </div>
        ) : (
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-slate-100 bg-slate-50/50 text-xs font-[1000] text-slate-400 uppercase tracking-wider">
                        <th className="p-6">Họ và tên</th>
                        <th className="p-6">Vai trò</th>
                        <th className="p-6">Liên hệ</th>
                        <th className="p-6">Ngày tham gia</th>
                        <th className="p-6 text-right">Tác vụ</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                    {filteredUsers.map((u) => (
                        <tr key={u.id} className="hover:bg-blue-50/30 transition-colors group">
                            <td className="p-6">
                                <div className="flex items-center gap-4">
                                    <img src={u.avatar_url} alt={u.full_name} className="w-10 h-10 rounded-xl object-cover shadow-sm bg-slate-200" />
                                    <div>
                                        <p className="font-bold text-slate-800 text-sm group-hover:text-blue-700 transition">{u.full_name}</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase">{u.org_name}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-6">
                                {getRoleBadge(u.role)}
                            </td>
                            <td className="p-6">
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                                    <Mail size={16} className="text-slate-400"/>
                                    {/* Email nằm trong auth.users nên ở profile public có thể không lấy được trực tiếp nếu chưa sync, tạm hiển thị placeholder hoặc cột email nếu bạn đã thêm */}
                                    <span className="truncate max-w-[150px]">user_{u.id.slice(0,4)}@nexa.edu.vn</span>
                                </div>
                            </td>
                            <td className="p-6">
                                <span className="text-sm font-bold text-slate-500">
                                    {/* Giả lập ngày tham gia */}
                                    {new Date().toLocaleDateString('vi-VN')} 
                                </span>
                            </td>
                            <td className="p-6 text-right">
                                <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-blue-600 transition">
                                    <MoreHorizontal size={20} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
      </div>
    </div>
  );
};

export default StaffList;