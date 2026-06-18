import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ServerList from '../components/ServerList';
import ChannelList from '../components/ChannelList';
import ChatWindow from '../components/ChatWindow';

// 🌴 CONNECTED DIRECTLY TO YOUR REAL GLOWCORD BACKEND LIVE STREAM
const socket = io('https://glowcordd.onrender.com');

export default function MainDashboard({ user }) {
  const [currentChannel, setCurrentChannel] = useState('general-chat');

  useEffect(() => {
    if (!socket) return;
    socket.emit('join_channel', currentChannel);
    console.log(`📡 Stream routing shifted over onto room: #${currentChannel}`);
  }, [currentChannel]);

  return (
    <div className="flex h-screen w-screen p-3 box-border bg-gradient-to-tr from-dreamPink via-tropicalTeal to-surfBlue">
      <div className="flex h-full w-full bg-white/90 backdrop-blur-sm border-4 border-black rounded-[2.5rem] overflow-hidden shadow-sticker">
        <ServerList />
        <ChannelList 
          currentChannel={currentChannel} 
          setCurrentChannel={setCurrentChannel} 
          user={user} 
        />
        <ChatWindow 
          socket={socket} 
          currentChannel={currentChannel} 
          user={user} 
        />
      </div>
    </div>
  );
}
