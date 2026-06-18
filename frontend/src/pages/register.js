import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register({ setUser }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setUser({ username, avatar: "🐬" });
    navigate('/chat');
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96 rounded-3xl border-4 border-black bg-white p-8 shadow-sticker transform rotate-[-1deg]">
        <h1 className="text-center text-4xl font-bold text-surfBlue drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] mb-6">JOIN DREAMIN'!</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-md font-bold mb-1">✨ Pick Username</label>
            <input type="text" className="w-full rounded-xl border-2 border-black p-2.5 text-md focus:outline-none bg-gyaruTan" onChange={e => setUsername(e.target.value)} required />
          </div>
          <div>
            <label className="block text-md font-bold mb-1">📬 Email Address</label>
            <input type="email" className="w-full rounded-xl border-2 border-black p-2.5 text-md focus:outline-none bg-gyaruTan" onChange={e => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block text-md font-bold mb-1">🔒 Create Password</label>
            <input type="password" className="w-full rounded-xl border-2 border-black p-2.5 text-md focus:outline-none bg-gyaruTan" onChange={e => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="w-full rounded-xl border-2 border-black bg-dreamPink p-3 text-lg font-bold text-white shadow-[2px_2px_0px_0px_#000] hover:translate-y-0.5 transition-all">Create Profile 🌸</button>
        </form>
      </div>
    </div>
  );
}
