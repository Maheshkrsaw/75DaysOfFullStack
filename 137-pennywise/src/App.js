import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, PlusCircle, History, PieChart, Target, Settings, Wallet, ArrowUpCircle, ArrowDownCircle, TrendingUp, AlertCircle, Trash2 } from 'lucide-react';

// --- 1. Initial Data ---
const INITIAL_TRANSACTIONS = [
  { id: 1, title: "Salary", amount: 50000, type: "income", category: "Salary", date: "2026-02-01" },
  { id: 2, title: "Rent", amount: 12000, type: "expense", category: "Housing", date: "2026-02-02" },
  { id: 3, title: "Grocery", amount: 4500, type: "expense", category: "Food", date: "2026-02-05" },
  { id: 4, title: "Netflix", amount: 649, type: "expense", category: "Entertainment", date: "2026-02-10" },
  { id: 5, title: "Freelance", amount: 8000, type: "income", category: "Side Hustle", date: "2026-02-11" },
  { id: 6, title: "Dining Out", amount: 1200, type: "expense", category: "Food", date: "2026-02-12" },
];

const INITIAL_BUDGETS = [
  { category: "Food", limit: 6000 },
  { category: "Housing", limit: 15000 },
  { category: "Entertainment", limit: 2000 },
  { category: "Transport", limit: 3000 },
];

// --- 2. Components ---

// Sidebar Navigation
const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? "bg-emerald-600 text-white shadow-lg" : "text-gray-500 hover:bg-emerald-50 hover:text-emerald-700";
  
  const menu = [
    { path: "/", name: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { path: "/add", name: "Add New", icon: <PlusCircle size={20} /> },
    { path: "/history", name: "History", icon: <History size={20} /> },
    { path: "/analytics", name: "Analytics", icon: <PieChart size={20} /> },
    { path: "/budgets", name: "Budgets", icon: <Target size={20} /> },
    { path: "/settings", name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="hidden md:flex flex-col w-64 bg-white h-screen border-r border-gray-100 p-6 fixed">
      <div className="flex items-center gap-2 mb-10 text-emerald-700">
        <Wallet size={32} />
        <h1 className="text-2xl font-black tracking-tight">PennyWise</h1>
      </div>
      <div className="space-y-2">
        {menu.map((item) => (
          <Link key={item.path} to={item.path} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${isActive(item.path)}`}>
            {item.icon} {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

// Page 1: Dashboard
const Dashboard = ({ transactions }) => {
  const income = transactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
  const expense = transactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);
  const balance = income - expense;

  return (
    <div className="p-8 animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
      
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 rounded-2xl text-white shadow-xl">
          <p className="text-emerald-100 font-medium mb-1">Total Balance</p>
          <h3 className="text-4xl font-black">₹{balance.toLocaleString()}</h3>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 font-medium">Income</p>
            <h3 className="text-2xl font-bold text-emerald-600">+₹{income.toLocaleString()}</h3>
          </div>
          <ArrowUpCircle size={40} className="text-emerald-500 bg-emerald-50 rounded-full p-1"/>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 font-medium">Expense</p>
            <h3 className="text-2xl font-bold text-red-500">-₹{expense.toLocaleString()}</h3>
          </div>
          <ArrowDownCircle size={40} className="text-red-500 bg-red-50 rounded-full p-1"/>
        </div>
      </div>

      {/* Recent List */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800">Recent Transactions</h3>
          <Link to="/history" className="text-emerald-600 font-bold text-sm hover:underline">View All</Link>
        </div>
        <div className="space-y-4">
          {transactions.slice(0, 3).map((t) => (
            <div key={t.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${t.type === 'income' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                  {t.type === 'income' ? <TrendingUp size={20}/> : <Wallet size={20}/>}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{t.title}</p>
                  <p className="text-xs text-gray-500">{t.date}</p>
                </div>
              </div>
              <span className={`font-bold ${t.type === 'income' ? 'text-emerald-600' : 'text-red-600'}`}>
                {t.type === 'income' ? '+' : '-'} ₹{t.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Page 2: Add Transaction
const AddTransaction = ({ onAdd }) => {
  const [form, setForm] = useState({ title: "", amount: "", type: "expense", category: "Food" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...form, id: Date.now(), amount: Number(form.amount), date: new Date().toISOString().split('T')[0] });
    setForm({ title: "", amount: "", type: "expense", category: "Food" });
    alert("Added successfully!");
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Add New</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Title</label>
          <input required className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 ring-emerald-500" placeholder="e.g. Shopping" value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Amount</label>
            <input required type="number" className="w-full p-4 bg-gray-50 rounded-xl outline-none" placeholder="0.00" value={form.amount} onChange={e => setForm({...form, amount: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Type</label>
            <select className="w-full p-4 bg-gray-50 rounded-xl outline-none" value={form.type} onChange={e => setForm({...form, type: e.target.value})}>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>
        </div>
        <div>
           <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
           <select className="w-full p-4 bg-gray-50 rounded-xl outline-none" value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
             <option>Food</option>
             <option>Housing</option>
             <option>Transport</option>
             <option>Entertainment</option>
             <option>Salary</option>
             <option>Side Hustle</option>
           </select>
        </div>
        <button className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition">Save Transaction</button>
      </form>
    </div>
  );
};

// Page 3: History
const HistoryList = ({ transactions, onDelete }) => (
  <div className="p-8">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">History</h2>
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      {transactions.map((t) => (
        <div key={t.id} className="flex justify-between items-center p-6 border-b border-gray-50 hover:bg-gray-50 transition group">
          <div>
            <p className="font-bold text-gray-800 text-lg">{t.title}</p>
            <p className="text-sm text-gray-400">{t.category} • {t.date}</p>
          </div>
          <div className="flex items-center gap-6">
            <span className={`font-bold text-lg ${t.type === 'income' ? 'text-emerald-600' : 'text-red-600'}`}>
              {t.type === 'income' ? '+' : '-'} ₹{t.amount}
            </span>
            <button onClick={() => onDelete(t.id)} className="text-gray-300 hover:text-red-500 transition"><Trash2 size={18}/></button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Page 4: Analytics (Custom CSS Chart Logic)
const Analytics = ({ transactions }) => {
  // Logic: Calculate total expense per category
  const categories = ["Food", "Housing", "Entertainment", "Transport"];
  const expenses = transactions.filter(t => t.type === 'expense');
  const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Spending Analysis</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Logic: Bar Chart using Divs */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="font-bold text-xl mb-6">Expense Distribution</h3>
          <div className="space-y-6">
            {categories.map(cat => {
              const amount = expenses.filter(t => t.category === cat).reduce((acc, curr) => acc + curr.amount, 0);
              const percentage = totalExpense > 0 ? (amount / totalExpense) * 100 : 0;
              
              return (
                <div key={cat}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-600">{cat}</span>
                    <span className="font-bold text-gray-800">{Math.round(percentage)}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-full transition-all duration-1000" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-emerald-900 text-white p-8 rounded-3xl flex flex-col justify-center text-center">
          <PieChart size={64} className="mx-auto mb-6 text-emerald-300"/>
          <h3 className="text-2xl font-bold mb-2">Total Spent</h3>
          <p className="text-5xl font-black text-emerald-300 mb-4">₹{totalExpense.toLocaleString()}</p>
          <p className="text-emerald-200">Across {categories.length} categories</p>
        </div>
      </div>
    </div>
  );
};

// Page 5: Budgets (Progress Logic)
const Budgets = ({ transactions, budgets }) => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Monthly Budgets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {budgets.map((budget, index) => {
          const spent = transactions
            .filter(t => t.type === 'expense' && t.category === budget.category)
            .reduce((acc, curr) => acc + curr.amount, 0);
          
          const percentage = Math.min(100, (spent / budget.limit) * 100);
          const isOverBudget = spent > budget.limit;

          return (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{budget.category}</h3>
                  <p className="text-sm text-gray-500">Limit: ₹{budget.limit.toLocaleString()}</p>
                </div>
                {isOverBudget && <AlertCircle className="text-red-500" />}
              </div>
              
              <div className="mb-2 flex justify-between text-sm font-bold">
                <span className={isOverBudget ? "text-red-500" : "text-emerald-600"}>₹{spent} spent</span>
                <span className="text-gray-400">{Math.round(percentage)}%</span>
              </div>

              <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${isOverBudget ? 'bg-red-500' : 'bg-emerald-500'}`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Page 6: Settings
const SettingsPage = () => (
  <div className="p-8">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Settings</h2>
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 max-w-xl">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
           <img src="https://ui-avatars.com/api/?name=Mahesh+S" alt="User"/>
        </div>
        <div>
          <h3 className="font-bold text-lg">Mahesh Singh</h3>
          <p className="text-sm text-gray-500">Premium Member</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="flex justify-between items-center border-b pb-4">
          <span className="font-medium">Currency</span>
          <span className="font-bold text-emerald-600">INR (₹)</span>
        </div>
        <div className="flex justify-between items-center border-b pb-4">
          <span className="font-medium">Theme</span>
          <span className="font-bold text-gray-800">Light</span>
        </div>
        <div className="flex justify-between items-center border-b pb-4">
          <span className="font-medium">Notifications</span>
          <span className="font-bold text-green-600">Enabled</span>
        </div>
        <button className="text-red-500 font-bold hover:underline">Delete All Data</button>
      </div>
    </div>
  </div>
);

// --- Main App ---
export default function App() {
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);
  
  const addTx = (newTx) => setTransactions([newTx, ...transactions]);
  const deleteTx = (id) => setTransactions(transactions.filter(t => t.id !== id));

  return (
    <Router>
      <div className="flex min-h-screen bg-[#f8fafc] font-sans">
        <Sidebar />
        <div className="flex-1 md:ml-64">
          <Routes>
            <Route path="/" element={<Dashboard transactions={transactions} />} />
            <Route path="/add" element={<AddTransaction onAdd={addTx} />} />
            <Route path="/history" element={<HistoryList transactions={transactions} onDelete={deleteTx} />} />
            <Route path="/analytics" element={<Analytics transactions={transactions} />} />
            <Route path="/budgets" element={<Budgets transactions={transactions} budgets={INITIAL_BUDGETS} />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}