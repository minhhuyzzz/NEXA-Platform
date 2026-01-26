import { useState } from 'react';
import { supabase } from '../../../api/supabaseClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else alert("Đăng nhập thành công! Đang chuyển hướng về Dashboard...");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <form onSubmit={handleLogin} className="p-8 bg-white shadow-2xl rounded-2xl w-96 border-b-8 border-green-600">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Đăng nhập NEXA</h2>
        <input 
          type="email" placeholder="Email của bạn" 
          className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-green-500 outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" placeholder="Mật khẩu" 
          className="w-full p-3 border rounded-lg mb-6 focus:ring-2 focus:ring-green-500 outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-green-600 text-white p-3 rounded-lg font-bold hover:bg-green-700 transition">
          Vào Hệ Sinh Thái Xanh
        </button>
      </form>
    </div>
  );
};

export default Login;