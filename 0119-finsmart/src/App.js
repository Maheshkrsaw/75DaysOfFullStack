import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AddTransaction from './pages/AddTransaction';

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTx) => {
    setTransactions([newTx, ...transactions]);
  };

  // --- DELETE LOGIC START ---
  const deleteTransaction = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      const updated = transactions.filter(item => item.id !== id);
      setTransactions(updated);
    }
  };
  // --- DELETE LOGIC END ---

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            {/* Yahan onDelete pass kiya gaya hai */}
            <Route path="/" element={
              <Dashboard transactions={transactions} onDelete={deleteTransaction} />
            } />
            <Route path="/add" element={
              <AddTransaction onAdd={addTransaction} />
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;