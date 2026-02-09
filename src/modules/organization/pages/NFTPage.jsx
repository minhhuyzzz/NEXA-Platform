import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, FileBarChart, Award, 
  Settings, LogOut, Search, Filter, Share2, Download, ShieldCheck, Hexagon
} from 'lucide-react';

/* --- SUB-COMPONENTS --- */

const SidebarItem = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick} 
    className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 font-bold text-sm group
    ${active 
      ? 'bg-amber-50 text-amber-600 shadow-sm translate-x-1' 
      : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600 hover:translate-x-1'}`}
  >
    <div className={`transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>
      {icon}
    </div>
    <span className="tracking-tight">{label}</span>
  </button>
);

const NFTCard = ({ title, recipient, date, id, status }) => (
  <div className="bg-white p-5 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
    {/* Decorative Background */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-400/20 transition-colors"></div>
    
    <div className="flex justify-between items-start mb-6 relative">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-amber-200">
        <Award size={24} strokeWidth={2.5} />
      </div>
      <span className={`px-3 py-1 rounded-full text-[9px] font-[1000] uppercase tracking-widest border ${
        status === 'Minted' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-slate-50 text-slate-500 border-slate-100'
      }`}>
        {status}
      </span>
    </div>

    <div className="relative">
      <h3 className="text-lg font-[1000] text-slate-800 leading-tight mb-1">{title}</h3>
      <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4">Cấp cho: <span className="text-slate-600">{recipient}</span></p>
      
      <div className="flex items-center gap-2 text-[10px] font-medium text-slate-400 bg-slate-50 p-2 rounded-lg border border-slate-100 mb-4">
        <Hexagon size={12} className="text-amber-500" />
        <span className="truncate font-mono">ID: {id}</span>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 py-2 bg-amber-50 text-amber-700 rounded-xl text-[10px] font-[1000] uppercase tracking-wider hover:bg-amber-100 transition-colors flex items-center justify-center gap-2">
          <Share2 size={12} /> Chia sẻ
        </button>
        <button className="p-2 border border-slate-100 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-50">
          <Download size={14} />
        </button>
      </div>
    </div>
  </div>
);

/* --- MAIN COMPONENT --- */

const NFTPage = () => {
  const navigate = useNavigate();

  const nfts = [
    { id: 'NFT-8821', title: 'Kỹ sư AI Cơ bản', recipient: 'Nguyễn Văn A', date: '12/10/2023', status: 'Minted' },
    { id: 'NFT-8822', title: 'Quản trị Năng lượng', recipient: 'Trần Thị B', date: '15/10/2023', status: 'Minted' },
    { id: 'NFT-8823', title: 'Lãnh đạo Số 4.0', recipient: 'Lê Hoàng C', date: '20/10/2023', status: 'Pending' },
    { id: 'NFT-8824', title: 'Kỹ năng Đàm phán', recipient: 'Phạm Minh D', date: '22/10/2023', status: 'Minted' },
    { id: 'NFT-8825', title: 'An toàn Thông tin', recipient: 'Hoàng Anh E', date: '25/10/2023', status: 'Processing' },
    { id: 'NFT-8826', title: 'Marketing Số', recipient: 'Vũ Thị F', date: '28/10/2023', status: 'Minted' },
  ];

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans text-slate-900 overflow-hidden text-left">
      
      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-slate-100 flex flex-col h-screen shrink-0 z-20">
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-amber-200">C</div>
          <span className="text-[#0F172A] font-[1000] text-2xl tracking-tighter uppercase">NEXA Cert</span>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2">
          <SidebarItem icon={<LayoutDashboard size={20}/>} label="Tổng quan" onClick={() => navigate('/admin')} />
          <SidebarItem icon={<Users size={20}/>} label="Quản lý Nhân sự" onClick={() => navigate('/admin/users')} />
          <SidebarItem icon={<FileBarChart size={20}/>} label="Báo cáo ESG" onClick={() => navigate('/admin/esg')} />
          <SidebarItem active icon={<Award size={20}/>} label="Chứng chỉ & NFT" />
          <div className="pt-8 pb-4"><div className="h-px bg-slate-100 mx-4"></div></div>
          <SidebarItem icon={<Settings size={20}/>} label="Cài đặt hệ thống" />
        </nav>
        <div className="p-6 border-t border-slate-50">
          <button onClick={() => navigate('/login')} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-red-500 hover:bg-red-50 font-bold text-sm transition-all">
            <LogOut size={20} /> <span className="tracking-tight">Đăng xuất</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="px-8 py-6 border-b border-slate-100 bg-white/80 backdrop-blur-md flex justify-between items-center shrink-0 sticky top-0 z-10">
          <div>
            <h1 className="text-2xl font-[1000] tracking-tight uppercase text-[#0F172A]">Kho Chứng chỉ Số</h1>
            <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider mt-1">Quản lý và Phát hành NFT</p>
          </div>
          <div className="flex gap-3">
             <div className="relative hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input type="text" placeholder="Tìm kiếm chứng chỉ..." className="pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl outline-none font-bold text-xs w-64 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all" />
            </div>
            <button className="flex items-center gap-2 px-5 py-3 bg-slate-900 text-white rounded-xl font-[1000] text-xs uppercase tracking-widest hover:bg-slate-800 shadow-lg transition-all">
              <ShieldCheck size={16} /> Xác thực
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Filter Bar */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-amber-500 text-white rounded-xl text-[10px] font-bold uppercase tracking-wider shadow-md shadow-amber-200">Tất cả</button>
                <button className="px-4 py-2 bg-white text-slate-500 border border-slate-100 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-slate-50">Đã phát hành</button>
                <button className="px-4 py-2 bg-white text-slate-500 border border-slate-100 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-slate-50">Chờ duyệt</button>
              </div>
              <button className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase hover:text-amber-600 transition-colors">
                <Filter size={14} /> Bộ lọc nâng cao
              </button>
            </div>

            {/* NFT Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {nfts.map((nft, index) => (
                <NFTCard key={index} {...nft} />
              ))}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default NFTPage;