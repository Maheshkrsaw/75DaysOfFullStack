import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, LogOut, User, Settings, Image as ImageIcon, Search, Bell } from 'lucide-react';

// --- 1. Dummy Data for Posts ---
const POSTS = [
  {
    id: 1,
    username: "wanderlust_rahul",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
    caption: "Switzerland vibes! 🏔️ #travel #nature",
    likes: 1240,
    time: "2 hours ago"
  },
  {
    id: 2,
    username: "tech_guru",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    caption: "My new desk setup for 2026. Minimal and clean. 💻",
    likes: 856,
    time: "5 hours ago"
  },
  {
    id: 3,
    username: "foodie_priya",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    caption: "Sunday Brunch done right! 🥞🍓",
    likes: 2100,
    time: "Just now"
  }
];

// --- 2. Components ---

// Login Screen Component
const LoginScreen = ({ onLogin }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center border border-gray-100">
      <div className="w-16 h-16 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-xl mx-auto mb-6 flex items-center justify-center text-white">
        <ImageIcon size={32} />
      </div>
      <h1 className="text-3xl font-black mb-2 text-gray-800">VibeSnap</h1>
      <p className="text-gray-500 mb-8">Connect with friends and the world.</p>
      
      <button 
        onClick={onLogin}
        className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition shadow-lg shadow-gray-200"
      >
        Login as Guest
      </button>
      <p className="mt-6 text-sm text-gray-400">No password required for demo.</p>
    </div>
  </div>
);

// Navbar with Account Dropdown Logic
const Navbar = ({ user, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 md:px-20 py-3 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white">
          <ImageIcon size={18} />
        </div>
        <span className="text-xl font-bold tracking-tight hidden md:block">VibeSnap</span>
      </div>

      <div className="flex-1 max-w-md mx-10 hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18}/>
          <input className="w-full bg-gray-100 py-2 pl-10 pr-4 rounded-lg outline-none focus:ring-1 focus:ring-gray-300" placeholder="Search" />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Bell size={24} className="text-gray-600 hover:text-black cursor-pointer" />
        <MessageCircle size={24} className="text-gray-600 hover:text-black cursor-pointer" />
        
        {/* Profile Dropdown Container */}
        <div className="relative">
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-transparent hover:border-purple-500 transition focus:outline-none"
          >
            <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
          </button>

          {/* The Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-3 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2">
              {/* User Info Section */}
              <div className="px-4 py-3 border-b border-gray-100 mb-2">
                <p className="font-bold text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">@{user.handle}</p>
              </div>

              {/* Menu Items */}
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                <User size={16} /> My Profile
              </button>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                <Settings size={16} /> Settings
              </button>
              
              <div className="h-px bg-gray-100 my-2"></div>
              
              {/* Logout Button */}
              <button 
                onClick={onLogout}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 font-bold"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

// Main Feed Component
const Feed = () => (
  <div className="max-w-xl mx-auto py-8 px-4">
    {/* Stories Section */}
    <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar mb-4">
      {[1, 2, 3, 4, 5].map((s) => (
        <div key={s} className="flex flex-col items-center gap-1 min-w-[70px]">
          <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
            <div className="w-full h-full bg-white rounded-full p-[2px]">
              <img src={`https://i.pravatar.cc/150?img=${s + 10}`} className="w-full h-full rounded-full object-cover" alt="story" />
            </div>
          </div>
          <span className="text-xs text-gray-500">User {s}</span>
        </div>
      ))}
    </div>

    {/* Posts */}
    <div className="space-y-8">
      {POSTS.map(post => (
        <div key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          {/* Post Header */}
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={post.avatar} className="w-10 h-10 rounded-full object-cover border border-gray-100" alt="avatar" />
              <div>
                <p className="font-bold text-sm">{post.username}</p>
                <p className="text-xs text-gray-500">{post.time}</p>
              </div>
            </div>
            <MoreHorizontal size={20} className="text-gray-500 cursor-pointer" />
          </div>

          {/* Post Image */}
          <img src={post.image} className="w-full object-cover max-h-[500px]" alt="post" />

          {/* Post Actions */}
          <div className="p-4">
            <div className="flex justify-between mb-3">
              <div className="flex gap-4">
                <Heart size={26} className="text-gray-800 hover:text-red-500 cursor-pointer transition" />
                <MessageCircle size={26} className="text-gray-800 hover:text-blue-500 cursor-pointer transition" />
                <Share2 size={26} className="text-gray-800 hover:text-green-500 cursor-pointer transition" />
              </div>
            </div>
            <p className="font-bold text-sm mb-1">{post.likes.toLocaleString()} likes</p>
            <p className="text-sm">
              <span className="font-bold mr-2">{post.username}</span>
              {post.caption}
            </p>
            <p className="text-gray-400 text-xs mt-2 uppercase tracking-wide cursor-pointer">View all 12 comments</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 3. Main App (State Manager) ---
export default function App() {
  const [user, setUser] = useState(null); // Auth State: null = Logged Out

  const handleLogin = () => {
    // Simulating API Login
    setUser({
      name: "Mahesh Singh",
      handle: "mahesh_codes",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
    });
  };

  const handleLogout = () => {
    if(window.confirm("Are you sure you want to log out?")) {
      setUser(null);
    }
  };

  // Logic: Agar user nahi hai to Login dikhao, nahi to Feed dikhao
  if (!user) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-10">
      <Navbar user={user} onLogout={handleLogout} />
      <Feed />
    </div>
  );
}