import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { Search, Heart, Star, MapPin, Wifi, Car, Coffee, Wind, LayoutGrid, Home as HomeIcon } from 'lucide-react';

// --- 1. Data Generation Logic (24 Items) ---
const generateProperties = () => {
  const types = ["Villa", "Apartment", "Cabin", "Mansion"];
  const locations = ["Goa, India", "Bali, Indonesia", "Paris, France", "Manali, India", "Dubai, UAE", "Kyoto, Japan"];
  const images = [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1600596542815-22b845069566?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80"
  ];

  return Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: `${types[i % 4]} with Great View ${i + 1}`,
    type: types[i % 4],
    location: locations[i % 6],
    rating: (4 + Math.random()).toFixed(1), // Random rating 4.0 - 5.0
    price: (3000 + (i * 200)), // Different price for each
    img: images[i % 4],
    beds: (i % 3) + 2,
    guests: (i % 4) + 2,
    superhost: i % 3 === 0, // Har 3rd property superhost hogi
    desc: "Relax in this unique and tranquil getaway. Enjoy the stunning views and modern amenities."
  }));
};

const PROPERTIES = generateProperties();

// --- 2. Components ---

const Navbar = ({ savedCount }) => (
  <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 py-4 px-6 md:px-10 flex justify-between items-center shadow-sm">
    <Link to="/" className="flex items-center gap-2 text-rose-500">
      {/* Fixed: Used HomeIcon instead of Home to avoid conflict */}
      <HomeIcon size={32} fill="currentColor" />
      <span className="text-xl font-bold hidden md:block">DreamNest</span>
    </Link>

    {/* Search Bar */}
    <div className="hidden md:flex items-center gap-4 bg-white border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer">
      <span className="text-sm font-semibold pl-2">Anywhere</span>
      <span className="border-l h-6 mx-2 border-gray-300"></span>
      <span className="text-sm font-semibold">Any week</span>
      <span className="border-l h-6 mx-2 border-gray-300"></span>
      <div className="bg-rose-500 p-2 rounded-full text-white">
        <Search size={14} strokeWidth={3} />
      </div>
    </div>

    <div className="flex items-center gap-4">
      <Link to="/saved" className="relative text-gray-500 hover:text-rose-500 transition">
        <Heart size={24} />
        {savedCount > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full text-[10px] text-white flex items-center justify-center border-2 border-white">{savedCount}</span>}
      </Link>
      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-300">
        <img src={`https://ui-avatars.com/api/?name=Mahesh+S&background=random`} alt="Profile" />
      </div>
    </div>
  </nav>
);

const FilterBar = ({ selected, onSelect }) => {
  const filters = ["All", "Villa", "Apartment", "Cabin", "Mansion", "Beachfront", "Trending"];
  return (
    <div className="flex gap-4 overflow-x-auto px-6 md:px-10 py-6 border-b border-gray-100 no-scrollbar">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onSelect(filter)}
          className={`flex flex-col items-center gap-2 min-w-[64px] pb-2 border-b-2 transition ${
            selected === filter ? "border-rose-500 text-black" : "border-transparent text-gray-500 hover:text-black hover:border-gray-200"
          }`}
        >
          <LayoutGrid size={24} className={selected === filter ? "text-rose-500" : "text-gray-400"} />
          <span className="text-xs font-medium">{filter}</span>
        </button>
      ))}
    </div>
  );
};

// --- 3. Home Page (Grid of 24 Items) ---
const Home = ({ saved, toggleSave }) => {
  const [filter, setFilter] = useState("All");

  const filteredProperties = useMemo(() => {
    if (filter === "All" || filter === "Trending") return PROPERTIES;
    return PROPERTIES.filter(p => p.type === filter);
  }, [filter]);

  return (
    <div className="pb-20">
      <FilterBar selected={filter} onSelect={setFilter} />
      
      <div className="px-6 md:px-10 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {filteredProperties.map((property) => {
          const isSaved = saved.some(id => id === property.id);
          return (
            <div key={property.id} className="group cursor-pointer">
              <Link to={`/property/${property.id}`}>
                <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 mb-3">
                  <img src={property.img} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  
                  {/* Heart Button */}
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSave(property.id);
                    }}
                    className="absolute top-3 right-3 text-white hover:scale-110 transition z-10"
                  >
                    <Heart size={26} className={`fill-current ${isSaved ? "text-rose-500" : "text-black/50"}`} />
                  </button>

                  {property.superhost && (
                    <span className="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded-md text-xs font-bold shadow-sm">Superhost</span>
                  )}
                </div>
                
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-gray-900 truncate pr-2">{property.location}</h3>
                  <div className="flex items-center gap-1 text-sm font-light">
                    <Star size={14} fill="black" /> {property.rating}
                  </div>
                </div>
                <p className="text-gray-500 text-sm">{property.type} • {property.guests} guests</p>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-semibold text-gray-900">₹{property.price.toLocaleString()}</span>
                  <span className="text-gray-500 font-light">night</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      
      <div className="text-center mt-12 mb-10">
        <p className="text-gray-400 mb-4">You've viewed {filteredProperties.length} properties</p>
        <button className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition">Load More</button>
      </div>
    </div>
  );
};

// --- 4. Property Detail Page ---
const PropertyDetails = () => {
  const { id } = useParams();
  const property = PROPERTIES.find(p => p.id === parseInt(id));

  if (!property) return <div className="p-10 text-center">Loading or Property Not Found...</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 pb-20 animate-in fade-in">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">{property.title}</h1>
      <div className="flex gap-2 text-sm text-gray-500 mb-6 underline">
        <span>{property.rating} reviews</span> • <span>{property.location}</span>
      </div>

      <div className="rounded-2xl overflow-hidden h-[40vh] md:h-[60vh] w-full relative mb-10">
        <img src={property.img} className="w-full h-full object-cover" alt="Main" />
        <button className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg text-sm font-bold shadow-md flex items-center gap-2">
          Show all photos
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <div className="border-b pb-6 mb-6">
            <h2 className="text-2xl font-semibold mb-1">Hosted by Mahesh</h2>
            <p className="text-gray-500">{property.guests} guests • {property.beds} bedrooms • 2 baths</p>
          </div>
          
          <div className="border-b pb-6 mb-6 space-y-4">
             <div className="flex gap-4">
               <HomeIcon size={24} className="text-gray-700"/>
               <div><h3 className="font-bold">Entire home</h3><p className="text-gray-500 text-sm">You’ll have the apartment to yourself.</p></div>
             </div>
             <div className="flex gap-4">
               <MapPin size={24} className="text-gray-700"/>
               <div><h3 className="font-bold">Great location</h3><p className="text-gray-500 text-sm">95% of recent guests gave the location a 5-star rating.</p></div>
             </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div className="flex gap-3 items-center"><Wifi /> Fast Wifi</div>
              <div className="flex gap-3 items-center"><Car /> Free Parking</div>
              <div className="flex gap-3 items-center"><Coffee /> Coffee Maker</div>
              <div className="flex gap-3 items-center"><Wind /> Air Conditioning</div>
            </div>
          </div>
        </div>

        {/* Booking Card */}
        <div className="relative">
          <div className="sticky top-28 border border-gray-200 shadow-xl rounded-xl p-6">
            <div className="flex justify-between items-end mb-4">
              <span className="text-2xl font-bold">₹{property.price.toLocaleString()} <span className="text-base font-light text-gray-500">/night</span></span>
              <span className="text-sm font-bold flex items-center gap-1"><Star size={14}/> {property.rating}</span>
            </div>

            <div className="border rounded-lg mb-4">
              <div className="grid grid-cols-2 border-b">
                <div className="p-3 border-r">
                  <p className="text-[10px] font-bold uppercase">Check-in</p>
                  <p className="text-sm">Feb 15, 2026</p>
                </div>
                <div className="p-3">
                  <p className="text-[10px] font-bold uppercase">Checkout</p>
                  <p className="text-sm">Feb 20, 2026</p>
                </div>
              </div>
              <div className="p-3">
                <p className="text-[10px] font-bold uppercase">Guests</p>
                <p className="text-sm">1 guest</p>
              </div>
            </div>

            <button className="w-full bg-rose-600 text-white font-bold py-3 rounded-lg text-lg hover:bg-rose-700 transition mb-4">
              Reserve
            </button>
            <p className="text-center text-sm text-gray-500">You won't be charged yet</p>
            
            <div className="mt-4 pt-4 border-t space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span className="underline">₹{property.price} x 5 nights</span>
                <span>₹{(property.price * 5).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="underline">Cleaning fee</span>
                <span>₹1,500</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-4 border-t mt-4 text-black">
                <span>Total</span>
                <span>₹{(property.price * 5 + 1500).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 5. Saved/Wishlist Page ---
const Saved = ({ saved }) => {
  const savedList = PROPERTIES.filter(p => saved.includes(p.id));
  
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Wishlists</h1>
      {savedList.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-2xl">
          <h2 className="text-xl font-bold mb-2">Create your first wishlist</h2>
          <p className="text-gray-500 mb-6">As you search, click the heart icon to save your favorite places.</p>
          <Link to="/" className="bg-black text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition">Start exploring</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {savedList.map(property => (
            <Link to={`/property/${property.id}`} key={property.id} className="group">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 mb-3">
                <img src={property.img} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <h3 className="font-bold text-gray-900 truncate">{property.location}</h3>
              <p className="text-gray-500 text-sm">{property.type}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// --- Main App ---
export default function App() {
  const [saved, setSaved] = useState([]);

  const toggleSave = (id) => {
    if (saved.includes(id)) {
      setSaved(saved.filter(item => item !== id));
    } else {
      setSaved([...saved, id]);
    }
  };

  return (
    <Router>
      <div className="font-['Inter'] text-gray-800">
        <Navbar savedCount={saved.length} />
        <Routes>
          <Route path="/" element={<Home saved={saved} toggleSave={toggleSave} />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/saved" element={<Saved saved={saved} />} />
        </Routes>
      </div>
    </Router>
  );
}