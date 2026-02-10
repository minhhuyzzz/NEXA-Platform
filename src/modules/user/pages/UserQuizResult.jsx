import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Trophy, XCircle, RefreshCcw, Home, Share2, Award } from 'lucide-react';

const UserQuizResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, totalQuestions, passed } = location.state || { score: 0, totalQuestions: 0, passed: false };
  const percentage = Math.round((score / totalQuestions) * 100) || 0;

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans text-slate-900">
      <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl overflow-hidden relative">
        <div className={`h-40 w-full absolute top-0 left-0 ${passed ? 'bg-gradient-to-br from-blue-600 to-indigo-600' : 'bg-gradient-to-br from-red-500 to-orange-500'}`}></div>
        
        <div className="relative z-10 pt-12 px-8 pb-8 text-center">
            <div className="mx-auto w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl mb-6 ring-4 ring-white/50">
                {passed ? <Trophy size={48} className="text-yellow-500 fill-yellow-500 animate-bounce" /> : <XCircle size={48} className="text-red-500" />}
            </div>

            <h1 className="text-3xl font-black text-slate-900 mb-2">{passed ? 'Xin chúc mừng!' : 'Chưa đạt yêu cầu!'}</h1>
            <p className="text-slate-500 font-medium mb-8">{passed ? 'Bạn đã hoàn thành xuất sắc bài kiểm tra.' : 'Hãy ôn tập thêm và thử lại nhé.'}</p>

            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 mb-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                    <div className="text-xs font-bold text-slate-400 uppercase">Điểm số</div>
                    <div className={`text-2xl font-black ${passed ? 'text-blue-600' : 'text-red-500'}`}>{score * 10}</div>
                </div>
                <div className="text-center border-x border-slate-200">
                    <div className="text-xs font-bold text-slate-400 uppercase">Đúng</div>
                    <div className="text-2xl font-black text-slate-800">{score}/{totalQuestions}</div>
                </div>
                <div className="text-center">
                    <div className="text-xs font-bold text-slate-400 uppercase">Tỷ lệ</div>
                    <div className="text-2xl font-black text-slate-800">{percentage}%</div>
                </div>
            </div>

            <div className="space-y-3">
                {passed ? (
                    <button onClick={() => navigate('/user/nft')} className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"><Award size={20} /> Nhận chứng chỉ NFT</button>
                ) : (
                    <button onClick={() => navigate('/user/quiz-take')} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition flex items-center justify-center gap-2"><RefreshCcw size={20} /> Làm lại bài thi</button>
                )}
                <div className="grid grid-cols-2 gap-3">
                    <button onClick={() => navigate('/user/dashboard')} className="py-3 bg-white border-2 border-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-50 transition flex items-center justify-center gap-2"><Home size={18} /> Trang chủ</button>
                    <button className="py-3 bg-white border-2 border-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-50 transition flex items-center justify-center gap-2"><Share2 size={18} /> Chia sẻ</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserQuizResult;