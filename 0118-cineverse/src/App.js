import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { Search, Play, Star, Heart, ArrowLeft, Trash2 } from 'lucide-react';

// --- 1. Expanded Movie Data ---
const MOVIES = [
  { id: 1, title: "Inception", rating: 8.8, year: 2010, category: "Sci-Fi", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80", desc: "A thief who steals corporate secrets through the use of dream-sharing technology." },
  { id: 2, title: "Interstellar", rating: 8.6, year: 2014, category: "Sci-Fi", img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=600&q=80", desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." },
  { id: 3, title: "The Dark Knight", rating: 9.0, year: 2008, category: "Action", img: "https://images.unsplash.com/photo-1509347528160-9a9e33742cd4?auto=format&fit=crop&w=600&q=80", desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham." },
  { id: 4, title: "Avengers: Endgame", rating: 8.4, year: 2019, category: "Action", img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=600&q=80", desc: "After the devastating events of Infinity War, the universe is in ruins." },
  { id: 5, title: "Parasite", rating: 8.6, year: 2019, category: "Drama", img: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=600&q=80", desc: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family." },
  { id: 6, title: "Joker", rating: 8.4, year: 2019, category: "Drama", img: "https://images.unsplash.com/photo-1601991393693-0176461f008f?auto=format&fit=crop&w=600&q=80", desc: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society." },
  { id: 7, title: "Dune", rating: 8.2, year: 2021, category: "Sci-Fi", img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=600&q=80", desc: "Paul Atreides must travel to the most dangerous planet in the universe to ensure the future of his family." },
  { id: 8, title: "Spider-Man", rating: 8.9, year: 2023, category: "Animation", img: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=600&q=80", desc: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People." },
];

// --- 2. Navbar Component ---
const Navbar = ({ favoritesCount }) => (
  <nav className="flex justify-between items-center p-6 bg-black/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-gray-800">
    <Link to="/" className="text-3xl font-black text-red-600 tracking-tighter uppercase cursor-pointer">CineVerse</Link>
    <div className="flex gap-8 font-medium text-gray-300">
      <Link to="/" className="hover:text-white transition">Home</Link>
      <Link to="/favorites" className="hover:text-white transition flex items-center gap-2">
        My List 
        {favoritesCount > 0 && <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{favoritesCount}</span>}
      </Link>
    </div>
  </nav>
);

// --- 3. Home Page (Grid & Search) ---
const Home = ({ favorites, onToggleFavorite }) => {
  const [query, setQuery] = useState("");
  
  const filteredMovies = MOVIES.filter(movie => 
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#141414] text-white p-6 pt-10">
      <div className="max-w-xl mx-auto mb-12 relative group">
        <Search className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-red-500 transition" size={20} />
        <input 
          className="w-full bg-[#2b2b2b] p-3 pl-12 rounded-full outline-none focus:ring-2 focus:ring-red-600 transition text-gray-200"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <h2 className="text-2xl font-bold mb-6 border-l-4 border-red-600 pl-3">Trending Now</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredMovies.map(movie => {
          const isLiked = favorites.some(fav => fav.id === movie.id); // Check if already liked

          return (
            <div key={movie.id} className="group relative rounded-xl overflow-hidden cursor-pointer shadow-lg bg-[#1f1f1f]">
              {/* Image & Hover Zoom */}
              <Link to={`/movie/${movie.id}`}>
                <img src={movie.img} alt={movie.title} className="w-full h-96 object-cover group-hover:scale-110 transition duration-700 ease-in-out opacity-80 group-hover:opacity-100" />
              </Link>

              {/* Like Button (Hover pe dikhega) */}
              <button 
                onClick={(e) => {
                  e.preventDefault(); // Ye zaroori hai taaki click karne par movie open na ho jaye
                  onToggleFavorite(movie);
                }}
                className="absolute top-4 right-4 bg-black/50 p-3 rounded-full hover:bg-white/20 transition backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0 duration-300"
              >
                <Heart 
                  size={24} 
                  className={isLiked ? "fill-red-600 text-red-600" : "text-white"} 
                />
              </button>

              {/* Bottom Info */}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-4 pt-10">
                <h3 className="text-lg font-bold text-white mb-1 truncate">{movie.title}</h3>
                <div className="flex justify-between text-xs text-gray-300 font-medium">
                  <span>{movie.category}</span>
                  <span className="flex items-center gap-1 text-yellow-400"><Star size={12} fill="currentColor" /> {movie.rating}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// --- 4. Movie Detail Page ---
const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = MOVIES.find(m => m.id === parseInt(id));

  if (!movie) return <div className="text-white text-center mt-20 text-2xl">Movie not found</div>;

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <div className="relative h-[80vh]">
        <img src={movie.img} className="w-full h-full object-cover opacity-40 mask-image-gradient" alt={movie.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
        
        <div className="absolute bottom-10 left-6 md:left-20 max-w-3xl animate-in slide-in-from-bottom-10 fade-in duration-700">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-300 mb-8 hover:text-white transition"><ArrowLeft size={20} /> Back to Browse</button>
          
          <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tight">{movie.title}</h1>
          
          <div className="flex items-center gap-4 mb-8 text-sm md:text-base font-medium text-gray-300">
            <span className="border border-gray-600 px-3 py-1 rounded">{movie.year}</span>
            <span className="bg-red-600 text-white px-3 py-1 rounded font-bold">{movie.category}</span>
            <span className="flex items-center gap-1 text-green-400 font-bold"><Star size={16} fill="currentColor"/> {movie.rating} Rating</span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">{movie.desc}</p>
          
          <div className="flex gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-200 transition transform hover:scale-105">
              <Play fill="currentColor" size={24} /> Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 5. Favorites Page (My List) ---
const Favorites = ({ favorites, onRemove }) => (
  <div className="min-h-screen bg-[#141414] text-white p-6 pt-10">
    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
      <Heart className="text-red-600 fill-red-600" /> My List ({favorites.length})
    </h2>

    {favorites.length === 0 ? (
      <div className="text-center mt-20 opacity-50">
        <p className="text-xl">Your list is empty.</p>
        <Link to="/" className="text-red-500 hover:underline mt-4 inline-block">Go add some movies!</Link>
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {favorites.map(movie => (
          <div key={movie.id} className="relative rounded-xl overflow-hidden group bg-[#1f1f1f]">
            <img src={movie.img} alt={movie.title} className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 transition" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{movie.title}</h3>
              <p className="text-sm text-gray-400">{movie.year}</p>
            </div>
            <button 
              onClick={() => onRemove(movie)}
              className="absolute top-2 right-2 bg-red-600/80 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition hover:bg-red-600"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    )}
  </div>
);

// --- 6. Main App Wrapper (State Logic Here) ---
export default function App() {
  const [favorites, setFavorites] = useState([]);

  // Logic: Add agar nahi hai, Remove agar hai
  const toggleFavorite = (movie) => {
    if (favorites.some(fav => fav.id === movie.id)) {
      setFavorites(favorites.filter(fav => fav.id !== movie.id)); // Remove
    } else {
      setFavorites([...favorites, movie]); // Add
    }
  };

  return (
    <Router>
      <Navbar favoritesCount={favorites.length} />
      <Routes>
        <Route path="/" element={<Home favorites={favorites} onToggleFavorite={toggleFavorite} />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} onRemove={toggleFavorite} />} />
      </Routes>
    </Router>
  );
}
