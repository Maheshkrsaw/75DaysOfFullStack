import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, CheckCircle } from 'lucide-react';

// --- Dummy Products Data ---
const PRODUCTS = [
  { id: 1, name: "Wireless Headphones", price: 2999, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80", category: "Audio" },
  { id: 2, name: "Smart Watch Gen 5", price: 4999, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80", category: "Wearable" },
  { id: 3, name: "Mechanical Keyboard", price: 3500, img: "https://images.unsplash.com/photo-1587829741301-dc798b91a95e?auto=format&fit=crop&w=600&q=80", category: "Tech" },
  { id: 4, name: "Nike Air Jordan", price: 8999, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80", category: "Fashion" },
  { id: 5, name: "Gaming Mouse", price: 1499, img: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80", category: "Tech" },
  { id: 6, name: "Polaroid Camera", price: 6500, img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80", category: "Camera" },
];

// --- Navbar Component ---
const Navbar = ({ cartCount }) => (
  <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-indigo-600 tracking-tight">ShopZone.</Link>
      <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition">
        <ShoppingBag size={24} className="text-gray-700" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </Link>
    </div>
  </nav>
);

// --- Page 1: Shop (Product List) ---
const Shop = ({ addToCart }) => (
  <div className="bg-gray-50 min-h-screen py-10 px-6">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group">
            <div className="h-64 overflow-hidden relative">
              <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <button 
                onClick={() => addToCart(product)}
                className="absolute bottom-4 right-4 bg-white text-indigo-600 p-3 rounded-full shadow-lg translate-y-20 group-hover:translate-y-0 transition duration-300 hover:bg-indigo-600 hover:text-white"
              >
                <Plus size={20} />
              </button>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-400 font-medium mb-1">{product.category}</p>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-xl font-bold text-indigo-600">₹{product.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Page 2: Cart Page ---
const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  // Logic: Reduce function to calculate total
  const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  if (cart.length === 0) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-6">
      <ShoppingBag size={80} className="text-gray-300 mb-6" />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
      <Link to="/" className="text-indigo-600 font-medium hover:underline">Start Shopping</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8">Shopping Cart ({cart.length})</h2>
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Cart Items List */}
          <div className="flex-1 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm flex gap-4 items-center">
                <img src={item.img} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{item.name}</h3>
                  <p className="text-gray-500">₹{item.price.toLocaleString()}</p>
                </div>
                
                {/* Quantity Controls */}
                <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                  <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:bg-white rounded-md transition"><Minus size={16} /></button>
                  <span className="font-bold w-4 text-center">{item.qty}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:bg-white rounded-md transition"><Plus size={16} /></button>
                </div>

                <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 p-2">
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Checkout Summary */}
          <div className="md:w-80 h-fit bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
            <h3 className="text-lg font-bold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2 text-gray-500">
              <span>Subtotal</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-4 text-gray-500">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-xl mb-6">
              <span>Total</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
            <Link to="/checkout" className="block w-full bg-indigo-600 text-white text-center py-3 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Page 3: Checkout Success ---
const Checkout = ({ clearCart }) => {
  useEffect(() => {
    clearCart(); // Page load hote hi cart empty kar do
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 text-center">
      <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Order Placed!</h2>
        <p className="text-gray-500 mb-8">Thank you for your purchase. Your order #12345 has been confirmed.</p>
        <Link to="/" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all">
          Continue Shopping <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
};

// --- Main App Logic (The Brain) ---
export default function App() {
  const [cart, setCart] = useState([]);

  // Logic: Agar item pehle se hai to qty badhao, nahi to naya add karo
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  // Logic: Quantity update karna (0 hone par remove nahi karna, user khud remove karega)
  const updateQuantity = (id, delta) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === id) {
        return { ...item, qty: Math.max(1, item.qty + delta) }; // Min qty 1 rahegi
      }
      return item;
    }));
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <Router>
      <div className="font-['Inter'] text-gray-900">
        <Navbar cartCount={cart.reduce((acc, item) => acc + item.qty, 0)} />
        <Routes>
          <Route path="/" element={<Shop addToCart={addToCart} />} />
          <Route path="/cart" element={
            <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
          } />
          <Route path="/checkout" element={<Checkout clearCart={clearCart} />} />
        </Routes>
      </div>
    </Router>
  );
}