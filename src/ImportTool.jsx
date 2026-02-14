import React, { useState } from 'react';
import { supabase } from './services/supabaseClient';
// 👇 Import đúng file dữ liệu bạn đã có
import { questionBank } from './modules/user/data/questions'; 

const ImportTool = () => {
  const [status, setStatus] = useState('Sẵn sàng...');
  const [loading, setLoading] = useState(false);

  const handleImport = async () => {
    setLoading(true);
    setStatus('⏳ Đang xử lý dữ liệu...');

    try {
      // 1. Chuẩn hóa dữ liệu từ file questions.js sang format của Supabase
      const formattedData = questionBank.map((item) => {
        // Chuyển đổi index đáp án (0,1,2,3) thành (A,B,C,D)
        const mapAnswer = ['A', 'B', 'C', 'D'];
        
        return {
          exam_id: 1, // ⚠️ ID của bài thi trong Database (Bạn check lại xem có phải là 1 không nhé)
          question_text: item.question,
          options: item.options, // Supabase tự lưu mảng này thành JSONB
          correct_answer: mapAnswer[item.correct], // Chuyển 1 -> "B"
          // Bạn có thể thêm cột 'topic' vào database nếu muốn lưu cả chủ đề
        };
      });

      setStatus(`📦 Đang đẩy ${formattedData.length} câu hỏi lên Cloud...`);

      // 2. Chia nhỏ thành từng gói (Batch) để tránh lỗi quá tải nếu dữ liệu lớn
      // Supabase giới hạn request, nên ta insert một lần là được nếu < 1000 câu
      const { data, error } = await supabase
        .from('questions')
        .insert(formattedData);

      if (error) throw error;

      setStatus(`✅ THÀNH CÔNG! Đã nhập xong ${formattedData.length} câu hỏi.`);
    } catch (error) {
      console.error(error);
      setStatus(`❌ LỖI: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white space-y-6">
      <h1 className="text-3xl font-bold text-blue-400">⚡ CÔNG CỤ MIGRATE DỮ LIỆU</h1>
      
      <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700 max-w-md w-full text-center">
        <p className="text-slate-300 mb-6 text-lg">{status}</p>
        
        <button 
          onClick={handleImport}
          disabled={loading}
          className={`w-full py-4 rounded-xl font-bold text-lg transition-all 
            ${loading 
              ? 'bg-slate-600 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30'}`}
        >
          {loading ? 'Đang chạy...' : '🚀 BẮT ĐẦU UPLOAD'}
        </button>
      </div>

      <p className="text-slate-500 text-sm">
        Lưu ý: Chỉ chạy tool này 1 lần duy nhất để tránh trùng lặp dữ liệu.
      </p>
    </div>
  );
};

export default ImportTool;