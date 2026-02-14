import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Monitor, Code, Smartphone, Send, ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

// --- Navbar (Sticky & Glassmorphism) ---
const Navbar = () => {
  const { pathname } = useLocation();
  const activeClass = (path) => pathname === path ? "text-blue-500 font-bold border-b-2 border-blue-500" : "text-gray-400 hover:text-white transition";

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-black text-white italic tracking-tighter cursor-pointer">NEXUS.</h1>
        <div className="flex gap-8 text-xs uppercase tracking-widest font-semibold">
          <Link to="/" className={activeClass('/')}>Home</Link>
          <Link to="/services" className={activeClass('/services')}>Services</Link>
          <Link to="/work" className={activeClass('/work')}>Work</Link>
          <Link to="/contact" className={activeClass('/contact')}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

// --- Page 1: Home Section ---
const Home = () => (
  <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 bg-black">
    <div className="mb-6 bg-blue-500/10 text-blue-500 border border-blue-500/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
      Digital Innovation Hub
    </div>
    <h1 className="text-6xl md:text-9xl font-black text-white leading-none mb-8">
      CRAFTING <br /> <span className="text-blue-600 italic">FUTURE.</span>
    </h1>
    <p className="max-w-xl text-gray-500 text-lg mb-10 leading-relaxed">
      We design and develop high-end React applications for the next generation of the web.
    </p>
    <Link to="/work" className="group bg-white text-black px-10 py-5 rounded-full font-black flex items-center gap-3 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-2xl shadow-white/5">
      EXPLORE WORK <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
    </Link>
  </section>
);

// --- Page 2: Services Section ---
const Services = () => (
  <section className="py-32 px-6 container mx-auto bg-black min-h-screen pt-40">
    <h2 className="text-5xl font-black text-white mb-20 text-center italic">WHAT WE DO.</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        { icon: <Monitor size={40} />, title: "UI/UX Design", desc: "Creating visually stunning and user-friendly interfaces." },
        { icon: <Code size={40} />, title: "Web Solutions", desc: "Developing scalable apps using the MERN stack." },
        { icon: <Smartphone size={40} />, title: "App Design", desc: "Crafting mobile experiences that feel native." }
      ].map((s, i) => (
        <div key={i} className="p-12 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:bg-blue-600/10 hover:border-blue-500/30 transition-all group">
          <div className="text-blue-500 mb-8 group-hover:scale-110 transition-transform">{s.icon}</div>
          <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
          <p className="text-gray-400 leading-relaxed text-sm uppercase tracking-wider">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

// --- Page 3: Work Section ---
const Work = () => (
  <section className="py-32 px-6 container mx-auto bg-black min-h-screen pt-40 text-center">
    <h2 className="text-5xl font-black text-white mb-20 italic">SELECTED WORK.</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {[1, 2, 3, 4].map(id => (
        <div key={id} className="relative group overflow-hidden rounded-[3rem] bg-zinc-900 aspect-video flex items-center justify-center border border-white/5">
          <span className="text-zinc-800 font-black text-6xl">PROJ {id}</span>
          <div className="absolute inset-0 bg-blue-600/95 flex flex-col items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-700 p-10">
            <h4 className="text-white text-3xl font-black mb-4 uppercase italic">Modern Fintech</h4>
            <p className="text-blue-100 text-sm mb-6">React • Tailwind • Node.js</p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition">
              View Project <ExternalLink size={18}/>
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- Page 4: Contact Section ---
const Contact = () => (
  <section className="py-32 px-6 container mx-auto bg-black min-h-screen pt-40">
    <div className="max-w-4xl mx-auto bg-white/[0.02] border border-white/10 p-12 md:p-20 rounded-[4rem]">
      <h2 className="text-5xl md:text-7xl font-black text-white mb-10 text-center italic">SAY HELLO.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <input placeholder="Full Name" className="bg-zinc-900/50 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-blue-500" />
        <input placeholder="Email Address" className="bg-zinc-900/50 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-blue-500" />
        <textarea placeholder="Tell us about your project..." className="md:col-span-2 bg-zinc-900/50 border border-white/10 p-5 rounded-2xl text-white h-48 outline-none focus:border-blue-500" />
        <button className="md:col-span-2 bg-blue-600 text-white font-black py-6 rounded-2xl flex items-center justify-center gap-4 hover:bg-blue-700 shadow-2xl shadow-blue-900/40 transition-all uppercase tracking-widest">
          Start Project <Send size={20} />
        </button>
      </div>
    </div>
  </section>
);

// --- Main App Wrapper ---
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black font-['Inter'] selection:bg-blue-600 selection:text-white overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <footer className="py-20 border-t border-white/5 bg-black text-center">
          <div className="flex justify-center gap-10 mb-10 text-zinc-500">
            <Github className="hover:text-white cursor-pointer transition" />
            <Linkedin className="hover:text-white cursor-pointer transition" />
            <Mail className="hover:text-white cursor-pointer transition" />
          </div>
          <p className="text-zinc-600 text-[10px] tracking-[0.5em] uppercase font-bold">Nexus Digital Agency © 2026 • Project 03</p>
        </footer>
      </div>
    </Router>
  );
}