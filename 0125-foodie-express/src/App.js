import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Star, Clock, MapPin, Plus, Minus, ChevronRight, CheckCircle, Utensils } from 'lucide-react';

// --- 1. Complex Data Structure ---
const RESTAURANTS = [
  {
    id: 1,
    name: "Burger King",
    rating: 4.5,
    time: "25-30 min",
    price: "₹350 for two",
    img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80",
    tags: ["Burger", "American", "Fast Food"],
    menu: [
      { id: 101, name: "Whopper Burger", price: 199, desc: "Flame grilled patty with signature sauce.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" },
      { id: 102, name: "Cheesy Fries", price: 129, desc: "Crispy fries loaded with cheese sauce.", img: "https://images.unsplash.com/photo-1585109649139-36680186f9d7?auto=format&fit=crop&w=400&q=80" },
      { id: 103, name: "Chicken Wings", price: 249, desc: "Spicy buffalo wings (6 pcs).", img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=400&q=80" }
    ]
  },
  {
    id: 2,
    name: "Pizza Hut",
    rating: 4.1,
    time: "35-40 min",
    price: "₹500 for two",
    img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
    tags: ["Pizza", "Italian"],
    menu: [
      { id: 201, name: "Margherita Pizza", price: 299, desc: "Classic cheese and basil pizza.", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=400&q=80" },
      { id: 202, name: "Pepperoni Feast", price: 459, desc: "Loaded with double pepperoni slices.", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80" }
    ]
  },
  {
    id: 3,
    name: "Starbucks Coffee",
    rating: 4.8,
    time: "15-20 min",
    price: "₹400 for two",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    tags: ["Coffee", "Beverages"],
    menu: [
      { id: 301, name: "Cappuccino", price: 240, desc: "Rich espresso with steamed milk foam.", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80" },
      { id: 302, name: "Croissant", price: 180, desc: "Buttery, flaky pastry.", img: "https://images.unsplash.com/photo-1555507036-ab1f40388085?auto=format&fit=crop&w=400&q=80" }
    ]
  },
  {
    id: 4,
    name: "Sushi House",
    rating: 4.6,
    time: "45-50 min",
    price: "₹800 for two",
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    tags: ["Japanese", "Sushi", "Healthy"],
    menu: [
      { id: 401, name: "Salmon Roll", price: 350, desc: "Fresh salmon with avocado.", img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=400&q=80" }
    ]
  },
];

// --- 2. Components ---

const Navbar = ({ cartCount }) => (
  <nav className="sticky top-0 z-50 bg-white shadow-sm py-4 px-6 flex justify-between items-center">
    <Link to="/" className="flex items-center gap-2">
      <div className="bg-orange-500 p-2 rounded-xl text-white">
        <Utensils size={24} />
      </div>
      <h1 className="text-2xl font-black text-gray-800 tracking-tight">FoodieX</h1>
    </Link>
    
    <div className="flex items-center gap-6">
      <div className="hidden md:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-600">
        <MapPin size={16} className="text-orange-500" />
        <span>Patna, Bihar</span>
      </div>
      <Link to="/cart" className="relative p-2 hover:bg-orange-50 rounded-full transition">
        <ShoppingBag size={24} className="text-gray-700" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
            {cartCount}
          </span>
        )}
      </Link>
    </div>
  </nav>
);

// --- 3. Home Page ---
const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-10 md:p-20 text-center rounded-b-[3rem] shadow-xl mb-10">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Craving Something?</h1>
        <p className="text-orange-100 text-lg mb-8">Order from the best restaurants in town.</p>
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-4 text-gray-400" />
          <input className="w-full p-4 pl-12 rounded-full text-gray-900 outline-none shadow-lg" placeholder="Search for biryani, pizza..." />
        </div>
      </div>

      {/* Restaurant List */}
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RESTAURANTS.map((res) => (
            <Link to={`/restaurant/${res.id}`} key={res.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img src={res.img} alt={res.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute bottom-4 right-4 bg-white px-2 py-1 rounded-lg text-xs font-bold shadow flex items-center gap-1">
                  <Clock size={12} /> {res.time}
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{res.name}</h3>
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded font-bold flex items-center gap-1">
                    {res.rating} <Star size={10} fill="currentColor" />
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-4">{res.tags.join(", ")}</p>
                <div className="border-t pt-3 flex justify-between text-xs font-medium text-gray-400 uppercase tracking-wide">
                  <span>{res.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 4. Restaurant Menu Page ---
const RestaurantDetail = ({ addToCart, cart }) => {
  const { id } = useParams();
  const restaurant = RESTAURANTS.find(r => r.id === parseInt(id));

  if (!restaurant) return <div>Not Found</div>;

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Restaurant Header */}
      <div className="h-64 relative">
        <img src={restaurant.img} className="w-full h-full object-cover" alt={restaurant.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 md:p-10">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">{restaurant.name}</h1>
            <p className="text-gray-300">{restaurant.tags.join(" • ")} • {restaurant.time}</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="container mx-auto px-6 py-10 max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">Recommended Menu</h2>
        <div className="space-y-6">
          {restaurant.menu.map((item) => {
            const inCart = cart.find(c => c.id === item.id);
            return (
              <div key={item.id} className="flex justify-between items-center border-b pb-6">
                <div className="flex-1 pr-4">
                  <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 font-bold mb-2">₹{item.price}</p>
                  <p className="text-gray-400 text-sm line-clamp-2">{item.desc}</p>
                </div>
                <div className="relative w-32 h-32 rounded-xl overflow-hidden shadow-md shrink-0">
                  <img src={item.img} className="w-full h-full object-cover" alt={item.name} />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24">
                    {inCart ? (
                      <div className="bg-white text-green-600 font-bold py-2 rounded-lg shadow flex justify-between px-3 items-center border">
                        <span>{inCart.qty}</span>
                        <span className="text-xs uppercase">Added</span>
                      </div>
                    ) : (
                      <button 
                        onClick={() => addToCart(item)}
                        className="w-full bg-white text-green-600 font-bold py-2 rounded-lg shadow hover:bg-gray-50 border uppercase text-sm"
                      >
                        ADD
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// --- 5. Cart Page ---
const Cart = ({ cart, updateQty, total }) => {
  const navigate = useNavigate();

  if (cart.length === 0) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center">
      <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" className="w-40 mb-6 opacity-50" alt="empty" />
      <h2 className="text-2xl font-bold text-gray-800">Your Cart is Empty</h2>
      <Link to="/" className="mt-4 text-orange-600 font-bold hover:underline">Browse Restaurants</Link>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <ShoppingBag className="text-orange-500" /> Order Summary
        </h2>
        
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 border-2 border-green-600 rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{item.name}</h3>
                  <p className="text-gray-500 text-sm">₹{item.price} x {item.qty}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 border px-2 py-1 rounded-lg">
                <button onClick={() => updateQty(item.id, -1)} className="text-gray-500 hover:text-orange-600"><Minus size={16}/></button>
                <span className="font-bold text-green-600">{item.qty}</span>
                <button onClick={() => updateQty(item.id, 1)} className="text-gray-500 hover:text-green-600"><Plus size={16}/></button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t mt-8 pt-4 space-y-2 text-gray-600">
          <div className="flex justify-between"><span>Item Total</span><span>₹{total}</span></div>
          <div className="flex justify-between"><span>Delivery Fee</span><span className="text-green-600">FREE</span></div>
          <div className="flex justify-between"><span>Platform Fee</span><span>₹5</span></div>
        </div>

        <div className="border-t mt-4 pt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">To Pay</span>
          <span className="text-xl font-bold text-gray-900">₹{total + 5}</span>
        </div>

        <button 
          onClick={() => navigate('/success')}
          className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl mt-8 shadow-lg shadow-orange-200 hover:bg-orange-700 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

// --- 6. Order Success Page ---
const Success = ({ clearCart }) => {
  React.useEffect(() => { clearCart(); }, []);
  
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6 text-center">
      <div className="bg-white p-12 rounded-3xl shadow-xl">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
          <CheckCircle size={50} className="text-green-600" />
        </div>
        <h2 className="text-3xl font-black text-gray-800 mb-2">Yummy!</h2>
        <p className="text-gray-500 mb-8">Your food is being prepared. It will arrive in 25 mins.</p>
        <Link to="/" className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-green-700 transition">
          Order More
        </Link>
      </div>
    </div>
  );
};

// --- Main App Logic ---
export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) return { ...item, qty: Math.max(0, item.qty + delta) };
      return item;
    }).filter(item => item.qty > 0)); // 0 hone par remove
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const clearCart = () => setCart([]);

  return (
    <Router>
      <div className="font-['Inter']">
        <Navbar cartCount={cart.reduce((a, b) => a + b.qty, 0)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail addToCart={addToCart} cart={cart} />} />
          <Route path="/cart" element={<Cart cart={cart} updateQty={updateQty} total={total} />} />
          <Route path="/success" element={<Success clearCart={clearCart} />} />
        </Routes>
      </div>
    </Router>
  );
}