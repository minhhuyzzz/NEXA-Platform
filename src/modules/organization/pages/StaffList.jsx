import React from 'react';

const StaffList = () => {
  console.log("--> HELLO WORLD: OrgUsers is running!"); // Dòng này sẽ hiện trong Console nếu file chạy

  return (
    <div style={{ 
      backgroundColor: 'red', 
      color: 'white', 
      height: '100vh', 
      width: '100vw', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontSize: '40px',
      fontWeight: 'bold',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999
    }}>
      TEST KẾT NỐI THÀNH CÔNG!
    </div>
  );
};

export default StaffList;