import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TakeTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  // Giả lập bộ câu hỏi (Sau này sẽ lấy từ Database)
  const questions = [
    {
      id: 1,
      text: "Bạn thường xử lý dữ liệu trên Excel bằng cách nào?",
      options: ["Thủ công từng dòng", "Sử dụng Pivot Table", "Viết Script/VBA", "Chưa biết dùng Excel"]
    },
    {
      id: 2,
      text: "Bạn có biết cách bảo mật thông tin cá nhân trên môi trường mạng không?",
      options: ["Rất rõ", "Biết cơ bản", "Không quan tâm lắm", "Hoàn toàn không"]
    }
  ];

  const handleAnswer = (option) => {
    const newAnswers = [...answers, { q: questions[currentQuestion].text, a: option }];
    if (currentQuestion < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Khi làm xong bài
      console.log("Kết quả gửi lên AI:", newAnswers);
      alert("Đang dùng AI phân tích lộ trình cho bạn...");
      navigate('/learner/dashboard'); // Chuyển về Dashboard để xem kết quả AI
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 p-8 bg-white rounded-2xl shadow-xl">
      <div className="mb-8">
        <span className="text-green-600 font-bold text-sm">Câu hỏi {currentQuestion + 1}/{questions.length}</span>
        <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
          <div 
            className="bg-green-500 h-2 rounded-full transition-all" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-6">{questions[currentQuestion].text}</h2>

      <div className="grid grid-cols-1 gap-4">
        {questions[currentQuestion].options.map((opt, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(opt)}
            className="p-4 text-left border-2 border-gray-100 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-gray-700 font-medium"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TakeTest;