import React, { useState, useEffect, useRef } from 'react';

export default function ChatWindow({ socket, currentChannel, user }) {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    setChatLog([]); // Reset feed log view when clicking over onto different channel rooms
    
    socket.on('receive_message', (data) => {
      if (data.channelId === currentChannel) {
        setChatLog((prev) => [...prev, data]);
      }
    });

    return () => socket.off('receive_message');
  }, [socket, currentChannel]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatLog]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const msgData = {
      channelId: currentChannel,
      sender: user.username,
      avatar: user.avatar,
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    socket.emit('send_message', msgData);
    setMessage('');
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      {/* Top Header Channel Title Bar */}
      <div className="h-14 border-b-4 border-black flex items-center px-6 bg-tropicalTeal">
        <span className="text-2xl font-bold text-black drop-shadow-[1px_1px_0px_#fff]">✨ #{currentChannel}</span>
      </div>

      {/* Main Conversation Stream Box */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4">
        {chatLog.map((msg, index) => (
          <div key={index} className="flex items-start space-x-3 transform transition-all animate-[fadeIn_0.2s_ease-out]">
            <div className="h-10 w-10 rounded-xl border-2 border-black bg-gyaruTan flex items-center justify-center text-lg shadow-[1px_1px_0px_rgba(0,0,0,1)]">{msg.avatar}</div>
            <div className="bg-gyaruTan/40 border border-black/10 rounded-2xl p-3 max-w-[70%] shadow-sm">
              <div className="flex items-baseline space-x-2">
                <span className="font-bold text-sm text-surfBlue">{msg.sender}</span>
                <span className="text-[10px] text-gray-400 font-bold">{msg.time}</span>
              </div>
              <p className="text-md text-black/90 font-medium mt-0.5 whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Message Input Form container element */}
      <form onSubmit={handleSend} className="p-4 bg-white border-t-4 border-black flex items-center space-x-2">
        <input type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder={`Message #${currentChannel}... ✨`} className="flex-1 border-2 border-black rounded-xl p-3 text-md focus:outline-none bg-gyaruTan shadow-innerSticker" />
        <button type="submit" className="bg-sunshineYellow border-2 border-black font-bold px-5 py-3 rounded-xl shadow-[2px_2px_0px_#000] hover:translate-y-0.5 active:translate-y-1 transition-all">Send 🌴</button>
      </form>
    </div>
  );
}
