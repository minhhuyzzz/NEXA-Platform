import React from 'react';
import { calculateGreenImpact } from '../../../utils/greenImpact';

const LearnerDashboard = () => {
  // Giả lập dữ liệu từ API
  const stats = {
    completedTests: 5,
    coursesEnrolled: 2,
    totalHours: 12,
    kmSaved: 50,
    pagesSaved: 100
  };

  const co2Saved = calculateGreenImpact(stats.kmSaved, stats.pagesSaved, stats.totalHours);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-green-700 mb-6">Chào mừng cộng sự NEXA!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Ví Xanh */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-green-500">
          <p className="text-sm text-gray-500 font-medium">Tác động bền vững</p>
          <h2 className="text-4xl font-bold text-green-600 mt-2">{co2Saved} kg</h2>
          <p className="text-xs text-green-500 mt-1">CO2 đã được cắt giảm ✨</p>
        </div>

        {/* Card 2: Tiến độ học tập */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-blue-500">
          <p className="text-sm text-gray-500 font-medium">Kỹ năng đã đánh giá</p>
          <h2 className="text-4xl font-bold text-blue-600 mt-2">{stats.completedTests}</h2>
          <p className="text-xs text-blue-500 mt-1">Chuẩn năng lực DigComp</p>
        </div>

        {/* Card 3: Xếp hạng Xanh */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-yellow-500">
          <p className="text-sm text-gray-500 font-medium">Danh hiệu</p>
          <h2 className="text-2xl font-bold text-yellow-600 mt-2">Đại sứ Cây Non</h2>
          <p className="text-xs text-yellow-500 mt-1">Sắp đạt hạng Cây Đại Ngàn</p>
        </div>
      </div>
    </div>
  );
};

export default LearnerDashboard;