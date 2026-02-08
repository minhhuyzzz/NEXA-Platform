import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
      <img className="h-40 w-full object-cover" src={course.image} alt={course.title} />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-800 leading-tight">{course.title}</h3>
          <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
            -{course.co2Saved}kg CO2
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-2">Giảng viên: {course.instructor}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-extrabold text-blue-600">{course.price.toLocaleString()}đ</span>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-700">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;