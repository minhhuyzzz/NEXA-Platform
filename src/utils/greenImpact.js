// src/utils/greenImpact.js
export const calculateGreenImpact = (distanceKm = 0, pagesSaved = 0, hoursOnline = 0) => {
  const CO2_TRANSPORT = 0.12; // kg CO2/km
  const CO2_PAPER = 0.005;    // kg CO2/trang
  const CO2_FACILITY = 0.5;   // kg CO2/giờ học tập trung

  const totalSaved = (distanceKm * CO2_TRANSPORT) + 
                     (pagesSaved * CO2_PAPER) + 
                     (hoursOnline * CO2_FACILITY);
                     
  return totalSaved.toFixed(3); // Trả về số kg CO2 tiết kiệm được
};