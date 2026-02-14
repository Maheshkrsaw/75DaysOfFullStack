import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CheckCircle, Trash2, Plus, Home, Info, LayoutGrid } from 'lucide-react';

// --- Navbar Component ---
const Navbar = () => (
  <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-full shadow-2xl z-50">
    <div className="flex gap-10 text-white">
      <Link to="/" className="hover:scale-110 transition"><Home size={24} /></Link>
      <Link to="/categories" className="hover:scale-110 transition"><LayoutGrid size={24} /></Link>
      <Link to="/about" className="hover:scale-110 transition"><Info size={24} /></Link>
    </div>
  </nav>
);

// --- Home (Todo) Component ---
const TodoHome = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([{ id: Date.now(), text: input, completed: false }, ...tasks]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="w-full max-w-md animate-in fade-in zoom-in duration-500">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 p-8 rounded-[2rem] shadow-2xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Focus.</h1>
          <p className="text-white/60 text-sm mt-2">What's on your mind?</p>
        </header>
        
        <div className="flex gap-2 mb-8">
          <input 
            className="flex-1 bg-white/10 border border-white/20 p-4 rounded-2xl text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-white/40 transition"
            placeholder="New task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <button onClick={addTask} className="bg-white text-indigo-600 p-4 rounded-2xl hover:bg-indigo-50 transition active:scale-95 shadow-xl">
            <Plus size={24} />
          </button>
        </div>

        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
          {tasks.length === 0 ? (
            <p className="text-center text-white/40 py-10 italic">List is empty</p>
          ) : (
            tasks.map(task => (
              <div key={task.id} className="flex justify-between items-center bg-white/10 p-4 rounded-2xl border border-white/5 group transition-all">
                <div className="flex items-center gap-4 cursor-pointer" onClick={() => toggleTask(task.id)}>
                  <CheckCircle size={22} className={task.completed ? "text-green-400" : "text-white/20"} />
                  <span className={`text-white text-lg transition-all ${task.completed ? "line-through opacity-40" : ""}`}>
                    {task.text}
                  </span>
                </div>
                <button onClick={() => deleteTask(task.id)} className="text-white/20 group-hover:text-red-400 transition-colors">
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-6">
        <Routes>
          <Route path="/" element={<TodoHome />} />
          <Route path="/about" element={<div className="text-white text-center">Focus App v1.0</div>} />
          <Route path="/categories" element={<div className="text-white">Coming Soon...</div>} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}