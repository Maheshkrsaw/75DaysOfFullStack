import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { Home, Search, Library, Heart, Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2, ListMusic, PlusSquare, ArrowLeft, Mic2, Disc } from 'lucide-react';

// --- 1. Data (Songs & Albums) ---
const SONGS = [
  { id: 1, title: "Midnight City", artist: "M83", album: "Hurry Up, We're Dreaming", duration: "4:03", cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=300&q=80" },
  { id: 2, title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", duration: "3:20", cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=300&q=80" },
  { id: 3, title: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", duration: "3:23", cover: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=300&q=80" },
  { id: 4, title: "Peaches", artist: "Justin Bieber", album: "Justice", duration: "3:18", cover: "https://images.unsplash.com/photo-1621360841013-c768371e93cf?auto=format&fit=crop&w=300&q=80" },
  { id: 5, title: "Save Your Tears", artist: "The Weeknd", album: "After Hours", duration: "3:35", cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=300&q=80" },
  { id: 6, title: "Montero", artist: "Lil Nas X", album: "Montero", duration: "2:17", cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=300&q=80" },
];

const ALBUMS = [
  { id: 101, title: "Top Hits 2026", artist: "Various Artists", cover: "https://images.unsplash.com/photo-1459749411177-287ce3276916?auto=format&fit=crop&w=400&q=80", desc: "The hottest tracks right now." },
  { id: 102, title: "Lo-Fi Beats", artist: "Chill Vibes", cover: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?auto=format&fit=crop&w=400&q=80", desc: "Beats to study and relax to." },
  { id: 103, title: "Rock Classics", artist: "Legends", cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=400&q=80", desc: "Guitar riffs that changed the world." },
  { id: 104, title: "Workout Pump", artist: "Fitness Pro", cover: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=400&q=80", desc: "Get stronger with these beats." },
];

// --- 2. Sidebar Component ---
const Sidebar = () => (
  <div className="w-64 bg-black h-screen fixed left-0 top-0 p-6 flex flex-col text-gray-400">
    <div className="flex items-center gap-2 text-white mb-10 px-2">
      <Disc size={32} className="animate-spin-slow" />
      <span className="text-2xl font-bold tracking-tight">MelodyStream</span>
    </div>
    
    <div className="space-y-4 mb-8">
      <Link to="/" className="flex items-center gap-4 hover:text-white transition px-2 py-1"><Home size={24}/> Home</Link>
      <Link to="/search" className="flex items-center gap-4 hover:text-white transition px-2 py-1"><Search size={24}/> Search</Link>
      <Link to="/library" className="flex items-center gap-4 hover:text-white transition px-2 py-1"><Library size={24}/> Your Library</Link>
    </div>

    <div className="pt-6 border-t border-gray-800 space-y-4">
      <Link to="/create-playlist" className="flex items-center gap-4 hover:text-white transition px-2 py-1"><PlusSquare size={24} className="text-gray-400"/> Create Playlist</Link>
      <Link to="/liked" className="flex items-center gap-4 hover:text-white transition px-2 py-1"><Heart size={24} className="text-purple-500 fill-purple-500"/> Liked Songs</Link>
    </div>
  </div>
);

// --- 3. Bottom Player Component (Persistent) ---
const Player = ({ currentSong, isPlaying, togglePlay, next, prev }) => {
  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#181818] border-t border-[#282828] p-4 px-6 flex justify-between items-center z-50 text-white">
      {/* Song Info */}
      <div className="flex items-center gap-4 w-[30%]">
        <img src={currentSong.cover} className="w-14 h-14 rounded shadow-lg animate-pulse" alt="cover"/>
        <div>
          <h4 className="font-bold text-sm hover:underline cursor-pointer">{currentSong.title}</h4>
          <p className="text-xs text-gray-400 hover:underline cursor-pointer">{currentSong.artist}</p>
        </div>
        <Heart size={18} className="text-green-500 ml-4 cursor-pointer"/>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center w-[40%]">
        <div className="flex items-center gap-6 mb-2">
          <Shuffle size={18} className="text-gray-400 hover:text-white cursor-pointer"/>
          <SkipBack size={24} className="text-gray-400 hover:text-white cursor-pointer" onClick={prev} fill="currentColor"/>
          <button onClick={togglePlay} className="bg-white rounded-full p-2 hover:scale-105 transition">
            {isPlaying ? <Pause size={24} className="text-black" fill="black"/> : <Play size={24} className="text-black" fill="black" className="ml-1"/>}
          </button>
          <SkipForward size={24} className="text-gray-400 hover:text-white cursor-pointer" onClick={next} fill="currentColor"/>
          <Repeat size={18} className="text-gray-400 hover:text-white cursor-pointer"/>
        </div>
        <div className="w-full flex items-center gap-2 text-xs text-gray-400">
          <span>0:45</span>
          <div className="h-1 bg-gray-600 rounded-full w-full">
            <div className="h-full bg-white w-[30%] rounded-full hover:bg-green-500"></div>
          </div>
          <span>{currentSong.duration}</span>
        </div>
      </div>

      {/* Volume */}
      <div className="flex items-center justify-end gap-3 w-[30%]">
        <Mic2 size={18} className="text-gray-400 hover:text-white"/>
        <ListMusic size={18} className="text-gray-400 hover:text-white"/>
        <Volume2 size={18} className="text-gray-400 hover:text-white"/>
        <div className="w-24 h-1 bg-gray-600 rounded-full">
          <div className="h-full bg-white w-[70%] rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

// --- Page 1: Home ---
const HomeView = ({ playSong }) => (
  <div className="bg-gradient-to-b from-[#1e1e2d] to-[#121212] min-h-screen p-8 pt-4 pb-32 ml-64 text-white">
    <h2 className="text-3xl font-bold mb-6">Good Afternoon</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
      {ALBUMS.slice(0, 6).map(album => (
        <div key={album.id} className="bg-white/5 flex items-center gap-4 rounded overflow-hidden hover:bg-white/10 transition cursor-pointer group">
          <img src={album.cover} className="w-20 h-20 shadow-lg" alt="cover"/>
          <span className="font-bold flex-1">{album.title}</span>
          <button className="mr-4 bg-green-500 rounded-full p-3 shadow-lg opacity-0 group-hover:opacity-100 transition hover:scale-105 hover:bg-green-400">
            <Play size={20} fill="black" className="text-black ml-1"/>
          </button>
        </div>
      ))}
    </div>

    <h2 className="text-2xl font-bold mb-6">Made For You</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {ALBUMS.map(album => (
        <div key={album.id} className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition group cursor-pointer">
          <div className="relative mb-4">
            <img src={album.cover} className="w-full aspect-square object-cover rounded shadow-lg" alt="cover"/>
            <button onClick={() => playSong(SONGS[0])} className="absolute bottom-2 right-2 bg-green-500 rounded-full p-3 shadow-xl opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
              <Play size={24} fill="black" className="text-black ml-1"/>
            </button>
          </div>
          <h3 className="font-bold mb-1 truncate">{album.title}</h3>
          <p className="text-sm text-gray-400 line-clamp-2">{album.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

// --- Page 2: Search/Explore ---
const SearchView = () => {
  const categories = ["Pop", "Hip-Hop", "Rock", "Indie", "Focus", "Mood", "Decades", "K-Pop"];
  const colors = ["bg-red-500", "bg-orange-500", "bg-yellow-600", "bg-green-600", "bg-blue-600", "bg-purple-600", "bg-pink-600", "bg-indigo-600"];

  return (
    <div className="bg-[#121212] min-h-screen p-8 ml-64 pb-32 text-white">
      <h2 className="text-3xl font-bold mb-6">Browse All</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className={`${colors[i]} h-48 rounded-xl p-4 relative overflow-hidden cursor-pointer hover:scale-105 transition`}>
            <h3 className="text-2xl font-bold">{cat}</h3>
            <img 
              src={`https://source.unsplash.com/random/200x200?${cat}`} 
              className="absolute -bottom-4 -right-4 w-28 h-28 rotate-[25deg] shadow-2xl rounded-lg" 
              alt="cat" 
              onError={(e) => e.target.style.display = 'none'} // Fallback if image fails
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Page 3: Liked Songs (List View) ---
const LikedSongs = ({ playSong, currentSong, isPlaying }) => (
  <div className="bg-gradient-to-b from-purple-800 to-[#121212] min-h-screen ml-64 pb-32 text-white">
    <div className="p-8 flex items-end gap-6 h-80">
      <div className="w-52 h-52 bg-gradient-to-br from-indigo-500 to-purple-300 shadow-2xl flex items-center justify-center">
        <Heart size={80} className="text-white fill-white"/>
      </div>
      <div>
        <p className="uppercase text-sm font-bold">Playlist</p>
        <h1 className="text-7xl font-black mb-6">Liked Songs</h1>
        <p className="text-gray-300 font-medium">Mahesh Singh • {SONGS.length} songs</p>
      </div>
    </div>

    <div className="bg-black/20 p-8">
      <div className="flex items-center gap-8 mb-8">
        <button className="bg-green-500 rounded-full p-4 hover:scale-105 transition hover:bg-green-400">
           {isPlaying ? <Pause size={28} fill="black"/> : <Play size={28} fill="black" className="ml-1"/>}
        </button>
        <Heart size={32} className="text-green-500 fill-green-500 cursor-pointer"/>
        <ArrowLeft size={32} className="text-gray-400 hover:text-white cursor-pointer"/>
      </div>

      <table className="w-full text-left text-gray-400">
        <thead>
          <tr className="border-b border-gray-700 text-sm uppercase">
            <th className="pb-2 w-10">#</th>
            <th className="pb-2">Title</th>
            <th className="pb-2">Album</th>
            <th className="pb-2 text-right"><ClockIcon /></th>
          </tr>
        </thead>
        <tbody>
          {SONGS.map((song, i) => (
            <tr 
              key={song.id} 
              onClick={() => playSong(song)}
              className={`hover:bg-white/10 rounded-md group cursor-pointer transition ${currentSong?.id === song.id ? "text-green-500" : ""}`}
            >
              <td className="py-3 pl-2">
                <span className="group-hover:hidden">{i + 1}</span>
                <Play size={16} className="hidden group-hover:block text-white" fill="white"/>
              </td>
              <td className="py-3">
                <div className="flex items-center gap-4">
                  <img src={song.cover} className="w-10 h-10" alt="cover"/>
                  <div>
                    <p className={`font-bold text-base ${currentSong?.id === song.id ? "text-green-500" : "text-white"}`}>{song.title}</p>
                    <p className="text-sm">{song.artist}</p>
                  </div>
                </div>
              </td>
              <td className="py-3">{song.album}</td>
              <td className="py-3 text-right pr-4">{song.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// Helper Icon
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;

// --- Main App (State Manager) ---
export default function App() {
  const [currentSong, setCurrentSong] = useState(SONGS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextSong = () => {
    const currentIndex = SONGS.findIndex(s => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % SONGS.length;
    setCurrentSong(SONGS[nextIndex]);
  };

  const prevSong = () => {
    const currentIndex = SONGS.findIndex(s => s.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + SONGS.length) % SONGS.length;
    setCurrentSong(SONGS[prevIndex]);
  };

  return (
    <Router>
      <div className="font-sans bg-[#121212] min-h-screen text-white">
        <Sidebar />
        
        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<HomeView playSong={playSong} />} />
          <Route path="/search" element={<SearchView />} />
          <Route path="/liked" element={<LikedSongs playSong={playSong} currentSong={currentSong} isPlaying={isPlaying} />} />
          <Route path="/library" element={<div className="ml-64 p-10">Library (Coming Soon)</div>} />
          <Route path="/create-playlist" element={<div className="ml-64 p-10">Create Playlist (Coming Soon)</div>} />
        </Routes>

        {/* Persistent Player */}
        <Player 
          currentSong={currentSong} 
          isPlaying={isPlaying} 
          togglePlay={togglePlay} 
          next={nextSong}
          prev={prevSong}
        />
      </div>
    </Router>
  );
}