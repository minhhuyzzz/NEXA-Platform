import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';

const Marketplace = () => {
  // Giả lập dữ liệu (Dummy Data) - Để không tốn tiền thuê database lúc này
  const [courses] = useState([
    {
      id: 1,
      title: "Kỹ năng số cho Freelancer 4.0",
      instructor: "TS. Nguyễn Văn A",
      price: 299000,
      co2Saved: 2.5,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500"
    },
    {
      id: 2,
      title: "Phân tích dữ liệu với Python (Green AI)",
      instructor: "Expert Trần Thị B",
      price: 599000,
      co2Saved: 4.8,
      image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?w=500"
    },
    {
      id: 3,
      title: "Thiết kế UI/UX Bền vững",
      instructor: "Designer Lê C",
      price: 0, // Khóa học miễn phí để thu hút User
      co2Saved: 1.2,
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?w=500"
    }
  ]);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Sàn Kỹ Năng NEXA</h1>
          <div className="flex gap-4">
            <select className="border-gray-300 rounded-lg text-sm focus:ring-green-500">
              <option>Tất cả danh mục</option>
              <option>Kỹ năng số</option>
              <option>AI & Dữ liệu</option>
            </select>
            <select className="border-gray-300 rounded-lg text-sm focus:ring-green-500">
              <option>Lọc theo CO2 tiết kiệm</option>
              <option>Nhiều nhất</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;