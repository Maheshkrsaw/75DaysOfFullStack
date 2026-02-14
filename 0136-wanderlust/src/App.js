import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { MapPin, Calendar, DollarSign, CheckSquare, Plus, Trash2, Plane, Hotel, Coffee, Camera, Sun, Briefcase, ArrowRight, Layout } from 'lucide-react';

// --- 1. Mock Data ---
const DESTINATIONS = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    desc: "Tropical paradise with beaches and temples.",
    price: "₹45,000",
    rating: 4.8,
    days: 5
  },
  {
    id: 2,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    desc: "The city of love, art, and fashion.",
    price: "₹85,000",
    rating: 4.7,
    days: 4
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
    desc: "Ancient temples and cherry blossoms.",
    price: "₹90,000",
    rating: 4.9,
    days: 6
  }
];

// --- 2. Components ---

const Navbar = () => (
  <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2 text-rose-500">
        <Plane size={28} className="rotate-[-45deg]" />
        <span className="text-2xl font-black tracking-tighter">WanderLust</span>
      </Link>
      <div className="hidden md:flex gap-8 font-medium text-gray-600">
        <Link to="/" className="hover:text-rose-500">Explore</Link>
        <Link to="/trips" className="hover:text-rose-500">My Trips</Link>
        <Link to="/planner/1" className="hover:text-rose-500">Current Plan</Link>
      </div>
      <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
        <img src="https://ui-avatars.com/api/?name=Mahesh+S&background=random" alt="user" />
      </div>
    </div>
  </nav>
);

// Page 1: Home / Explore
const Home = () => (
  <div className="min-h-screen bg-gray-50 pb-20">
    {/* Hero */}
    <div className="relative h-[50vh] bg-gray-900 flex items-center justify-center text-center px-4">
      <img 
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80" 
        className="absolute inset-0 w-full h-full object-cover opacity-50" 
        alt="hero"
      />
      <div className="relative z-10 text-white">
        <h1 className="text-5xl md:text-7xl font-black mb-4">Plan Your Next Adventure</h1>
        <p className="text-xl opacity-90 mb-8">Build itineraries, track budgets, and explore the world.</p>
        <button className="bg-rose-500 text-white px-8 py-3 rounded-full font-bold hover:bg-rose-600 transition shadow-lg hover:scale-105">
          Start Planning
        </button>
      </div>
    </div>

    {/* Destinations Grid */}
    <div className="container mx-auto px-6 -mt-20 relative z-20">
      <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-md">Trending Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {DESTINATIONS.map(dest => (
          <Link to={`/planner/${dest.id}`} key={dest.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300 group">
            <div className="h-64 overflow-hidden">
              <img src={dest.image} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="dest" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-gray-800">{dest.name}</h3>
                <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-xs font-bold">{dest.days} Days</span>
              </div>
              <p className="text-gray-500 mb-4">{dest.desc}</p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-lg font-bold text-gray-900">{dest.price}</span>
                <span className="flex items-center gap-1 text-sm font-bold text-rose-500">
                   Plan Trip <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

// Page 3: Itinerary Planner (Logic Core)
const Planner = () => {
  const { id } = useParams();
  const dest = DESTINATIONS.find(d => d.id === parseInt(id)) || DESTINATIONS[0];
  const [day, setDay] = useState(1);
  const [activities, setActivities] = useState([
    { id: 1, day: 1, time: "10:00 AM", title: "Visit Beach", type: "Relax" },
    { id: 2, day: 1, time: "01:00 PM", title: "Lunch at Local Cafe", type: "Food" },
  ]);
  const [newActivity, setNewActivity] = useState("");

  const addActivity = () => {
    if (newActivity) {
      setActivities([...activities, { id: Date.now(), day, time: "TBD", title: newActivity, type: "Custom" }]);
      setNewActivity("");
    }
  };

  const removeActivity = (actId) => {
    setActivities(activities.filter(a => a.id !== actId));
  };

  const currentActivities = activities.filter(a => a.day === day);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-end">
             <div>
               <p className="text-sm text-gray-500 uppercase tracking-wide font-bold">Trip to</p>
               <h1 className="text-4xl font-black text-gray-900">{dest.name}</h1>
             </div>
             <div className="flex gap-4">
               <Link to={`/budget/${id}`} className="flex items-center gap-2 text-gray-600 hover:text-rose-500 font-bold"><DollarSign size={20}/> Budget</Link>
               <Link to={`/packing/${id}`} className="flex items-center gap-2 text-gray-600 hover:text-rose-500 font-bold"><Briefcase size={20}/> Packing</Link>
             </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 flex gap-8">
        {/* Day Selector Sidebar */}
        <div className="w-64 space-y-2">
          {Array.from({ length: dest.days }).map((_, i) => (
            <button 
              key={i}
              onClick={() => setDay(i + 1)}
              className={`w-full text-left px-6 py-4 rounded-xl font-bold transition flex justify-between items-center ${day === i + 1 ? 'bg-rose-500 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              Day {i + 1} <span className="opacity-50 text-xs">Oct {10 + i}</span>
            </button>
          ))}
        </div>

        {/* Timeline Content */}
        <div className="flex-1">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 min-h-[500px]">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Sun className="text-yellow-500"/> Itinerary for Day {day}</h2>
            
            <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-200">
              {currentActivities.length === 0 && <p className="pl-10 text-gray-400">No activities planned yet.</p>}
              
              {currentActivities.map(act => (
                <div key={act.id} className="relative pl-10 group">
                  <div className="absolute left-0 top-1 w-8 h-8 bg-rose-100 rounded-full border-4 border-white flex items-center justify-center text-rose-500">
                     {act.type === 'Food' ? <Coffee size={14}/> : <Camera size={14}/>}
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:border-rose-200 transition flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500 font-bold mb-1">{act.time}</p>
                      <h3 className="font-bold text-gray-800">{act.title}</h3>
                    </div>
                    <button onClick={() => removeActivity(act.id)} className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition"><Trash2 size={18}/></button>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Activity Input */}
            <div className="mt-8 pl-10 flex gap-4">
              <input 
                value={newActivity}
                onChange={(e) => setNewActivity(e.target.value)}
                placeholder="Add a place to visit..." 
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-rose-500"
              />
              <button onClick={addActivity} className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800"><Plus size={20}/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Page 4: Budget Tracker
const Budget = () => {
  const categories = [
    { name: "Flights", limit: 30000, spent: 28000, icon: <Plane /> },
    { name: "Hotels", limit: 20000, spent: 15000, icon: <Hotel /> },
    { name: "Food", limit: 10000, spent: 4500, icon: <Coffee /> },
    { name: "Activities", limit: 15000, spent: 2000, icon: <Camera /> },
  ];

  const totalSpent = categories.reduce((acc, c) => acc + c.spent, 0);
  const totalLimit = categories.reduce((acc, c) => acc + c.limit, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-24">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2"><DollarSign /> Trip Budget</h1>
        
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 mb-8 flex justify-between items-center">
           <div>
             <p className="text-gray-500 text-sm font-bold uppercase mb-1">Total Budget</p>
             <h2 className="text-4xl font-black text-gray-900">₹{totalLimit.toLocaleString()}</h2>
           </div>
           <div className="text-right">
             <p className="text-gray-500 text-sm font-bold uppercase mb-1">Total Spent</p>
             <h2 className="text-4xl font-black text-rose-500">₹{totalSpent.toLocaleString()}</h2>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, i) => {
            const pct = (cat.spent / cat.limit) * 100;
            return (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg text-gray-700">{cat.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg">{cat.name}</h3>
                    <p className="text-sm text-gray-500">₹{cat.spent} / ₹{cat.limit}</p>
                  </div>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-500 rounded-full" style={{ width: `${pct}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Page 5: Packing Checklist
const Packing = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Passport", checked: true },
    { id: 2, text: "Chargers & Cables", checked: false },
    { id: 3, text: "Sunscreen", checked: false },
    { id: 4, text: "Swimwear", checked: false },
  ]);
  const [newItem, setNewItem] = useState("");

  const toggle = (id) => {
    setItems(items.map(i => i.id === id ? { ...i, checked: !i.checked } : i));
  };

  const addItem = () => {
    if(newItem) {
      setItems([...items, { id: Date.now(), text: newItem, checked: false }]);
      setNewItem("");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-24">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-2"><CheckSquare /> Packing List</h1>
        
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-2">
            {items.map(item => (
              <div key={item.id} onClick={() => toggle(item.id)} className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-none transition">
                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center ${item.checked ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'}`}>
                  {item.checked && <CheckSquare size={16}/>}
                </div>
                <span className={`text-lg font-medium ${item.checked ? 'text-gray-400 line-through' : 'text-gray-800'}`}>{item.text}</span>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 p-4 border-t flex gap-4">
            <input value={newItem} onChange={e => setNewItem(e.target.value)} placeholder="Add item..." className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none"/>
            <button onClick={addItem} className="bg-black text-white px-6 py-3 rounded-xl font-bold">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Page 6: My Trips Dashboard
const MyTrips = () => (
    <div className="min-h-screen bg-gray-50 p-8 pt-24">
        <div className="container mx-auto max-w-5xl">
            <h1 className="text-3xl font-bold mb-8 flex items-center gap-2"><Layout /> My Trips</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {DESTINATIONS.slice(0, 2).map((dest, i) => (
                    <div key={dest.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex gap-6">
                        <img src={dest.image} className="w-32 h-32 rounded-xl object-cover" alt="trip"/>
                        <div className="flex flex-col justify-center">
                            <span className={`text-xs font-bold px-2 py-1 rounded w-fit mb-2 ${i === 0 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                                {i === 0 ? 'Upcoming' : 'Completed'}
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900">{dest.name}</h3>
                            <p className="text-gray-500 mb-4">Oct 10 - Oct {10 + dest.days}</p>
                            <Link to={`/planner/${dest.id}`} className="text-rose-500 font-bold hover:underline">View Itinerary</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

// --- Main App ---
export default function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planner/:id" element={<Planner />} />
          <Route path="/budget/:id" element={<Budget />} />
          <Route path="/packing/:id" element={<Packing />} />
          <Route path="/trips" element={<MyTrips />} />
        </Routes>
      </div>
    </Router>
  );
}