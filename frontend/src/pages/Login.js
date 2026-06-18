import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setUser({ username: email.split('@')[0], avatar: "🌺" });
    navigate('/chat');
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96 rounded-3xl border-4 border-black bg-white p-8 shadow-sticker transform rotate-[1deg]">
        <h1 className="text-center text-4xl font-bold text-dreamPink drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-6">WELCOME BACK!</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-md font-bold mb-1">📬 Email Address</label>
            <input type="email" className="w-full rounded-xl border-2 border-black p-2.5 text-md focus:outline-none bg-gyaruTan" onChange={e => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block text-md font-bold mb-1">🔒 Password</label>
            <input type="password" className="w-full rounded-xl border-2 border-black p-2.5 text-md focus:outline-none bg-gyaruTan" onChange={e => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="w-full rounded-xl border-2 border-black bg-sunshineYellow p-3 text-lg font-bold shadow-[2px_2px_0px_0px_#000] hover:translate-y-0.5 transition-all">Let's Surf In! 🏄‍♀️</button>
        </form>
        <p className="text-center text-xs mt-4 font-bold cursor-pointer text-surfBlue" onClick={() => navigate('/register')}>New around here? Create an account! ✨</p>
      </div>
    </div>
  );
}
