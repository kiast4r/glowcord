import React from 'react';

export default function ChannelList({ currentChannel, setCurrentChannel, user }) {
  const channels = ['general-chat', 'outfit-inspo', 'playlist-drops', 'venting-room'];

  return (
    <div className="w-64 bg-gyaruTan border-r-4 border-black flex flex-col justify-between p-4">
      <div>
        <h2 className="text-2xl font-bold text-hibiscusRed drop-shadow-[1px_1px_0px_#000] tracking-wider mb-4 border-b-2 border-black pb-2">🌺 DREAMIN'</h2>
        <div className="space-y-1.5">
          {channels.map(chan => (
            <div key={chan} onClick={() => setCurrentChannel(chan)} className={`cursor-pointer font-bold rounded-xl p-2.5 text-md transition-all flex items-center border-2 ${currentChannel === chan ? 'bg-dreamPink text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]' : 'border-transparent hover:bg-white/60'}`}>
              <span className="mr-2 opacity-60">#</span> {chan}
            </div>
          ))}
        </div>
      </div>
      
      {/* Active User profile card block */}
      <div className="bg-white border-2 border-black p-2 rounded-2xl flex items-center space-x-2.5 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
        <div className="h-10 w-10 rounded-full bg-sunshineYellow border-2 border-black flex items-center justify-center text-xl">{user?.avatar}</div>
        <div className="overflow-hidden">
          <p className="font-bold text-sm text-black truncate">{user?.username}</p>
          <p className="text-xs text-gray-500 font-bold">#0001</p>
        </div>
      </div>
    </div>
  );
}
