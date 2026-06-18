import React from 'react';

export default function ServerList() {
  const servers = ['🌸', '🐬', '🍹', '🏄‍♀️', '🐱'];
  return (
    <div className="w-20 bg-surfBlue border-r-4 border-black flex flex-col items-center py-6 space-y-4">
      {servers.map((emoji, index) => (
        <button key={index} className="w-14 h-14 bg-white rounded-full border-2 border-black text-2xl flex items-center justify-center shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:rounded-2xl hover:bg-sunshineYellow transition-all transform hover:scale-105 active:scale-95">
          {emoji}
        </button>
      ))}
    </div>
  );
}
