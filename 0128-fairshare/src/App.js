import React, { useState } from 'react';
import { Users, Receipt, ArrowRight, Plus, Trash2, RotateCcw, CheckCircle, Wallet } from 'lucide-react';

// --- Components for Each Step ---

// Step 1: Add Friends
const StepFriends = ({ friends, addFriend, removeFriend, nextStep }) => {
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (name.trim()) {
      addFriend(name);
      setName("");
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Who's involved?</h2>
      <p className="text-gray-500 mb-6">Add everyone who is splitting the bill.</p>

      <div className="flex gap-2 mb-6">
        <div className="relative flex-1">
          <Users className="absolute left-3 top-3.5 text-gray-400" size={20} />
          <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter name (e.g. Rahul)"
          />
        </div>
        <button onClick={handleAdd} className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition">
          <Plus size={24} />
        </button>
      </div>

      <div className="space-y-3 mb-8 max-h-60 overflow-y-auto">
        {friends.length === 0 && <p className="text-center text-gray-400 py-4">No friends added yet.</p>}
        {friends.map((friend, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-white border rounded-xl shadow-sm">
            <span className="font-semibold text-gray-700">{friend}</span>
            <button onClick={() => removeFriend(index)} className="text-red-400 hover:text-red-600">
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <button 
        onClick={nextStep} 
        disabled={friends.length < 2}
        className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:gap-4 transition-all"
      >
        Next Step <ArrowRight size={20} />
      </button>
    </div>
  );
};

// Step 2: Add Expenses
const StepExpenses = ({ friends, expenses, addExpense, removeExpense, nextStep, prevStep }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [payer, setPayer] = useState(friends[0]);

  const handleAdd = () => {
    if (desc && amount) {
      addExpense({ id: Date.now(), desc, amount: parseFloat(amount), payer });
      setDesc("");
      setAmount("");
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Add Expenses</h2>
      <p className="text-gray-500 mb-6">Who paid for what?</p>

      <div className="bg-gray-50 p-4 rounded-2xl mb-6 space-y-4 border border-gray-200">
        <input 
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Description (e.g. Dinner)"
          className="w-full p-3 rounded-lg border outline-none"
        />
        <div className="flex gap-4">
          <input 
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount (₹)"
            className="w-1/2 p-3 rounded-lg border outline-none"
          />
          <select 
            value={payer} 
            onChange={(e) => setPayer(e.target.value)}
            className="w-1/2 p-3 rounded-lg border outline-none bg-white"
          >
            {friends.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
        <button onClick={handleAdd} className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700">
          Add Expense
        </button>
      </div>

      <div className="space-y-3 mb-8 max-h-48 overflow-y-auto">
        {expenses.map((exp) => (
          <div key={exp.id} className="flex justify-between items-center p-3 bg-white border rounded-xl">
            <div>
              <p className="font-bold text-gray-800">{exp.desc}</p>
              <p className="text-xs text-gray-500">Paid by {exp.payer}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-indigo-600">₹{exp.amount}</span>
              <button onClick={() => removeExpense(exp.id)} className="text-gray-400 hover:text-red-500"><Trash2 size={16}/></button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button onClick={prevStep} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold">Back</button>
        <button onClick={nextStep} disabled={expenses.length === 0} className="flex-1 bg-black text-white py-3 rounded-xl font-bold disabled:opacity-50">Calculate</button>
      </div>
    </div>
  );
};

// Step 3: Result (The Problem Solving Logic)
const StepResult = ({ friends, expenses, reset }) => {
  // --- CORE LOGIC ---
  const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  const fairShare = totalExpense / friends.length;

  // Calculate Balance per person
  const balances = friends.map(friend => {
    const paid = expenses
      .filter(e => e.payer === friend)
      .reduce((acc, curr) => acc + curr.amount, 0);
    return { name: friend, paid, balance: paid - fairShare };
  });

  return (
    <div className="animate-in zoom-in duration-500">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
          <CheckCircle size={32} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Settlement</h2>
        <p className="text-gray-500">Total Spent: <span className="font-bold text-black">₹{totalExpense}</span></p>
        <p className="text-gray-500">Per Person: <span className="font-bold text-black">₹{fairShare.toFixed(2)}</span></p>
      </div>

      <div className="space-y-4 mb-8">
        {balances.map((person) => (
          <div key={person.name} className="flex justify-between items-center p-4 bg-white border rounded-xl shadow-sm">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${person.balance >= 0 ? 'bg-green-500' : 'bg-red-500'}`}>
                {person.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-gray-800">{person.name}</p>
                <p className="text-xs text-gray-500">Paid ₹{person.paid}</p>
              </div>
            </div>
            <div className={`font-bold ${person.balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {person.balance >= 0 ? `Gets ₹${person.balance.toFixed(2)}` : `Owes ₹${Math.abs(person.balance).toFixed(2)}`}
            </div>
          </div>
        ))}
      </div>

      <button onClick={reset} className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition">
        <RotateCcw size={20} /> Start New Split
      </button>
    </div>
  );
};

// --- Main App ---
export default function App() {
  const [step, setStep] = useState(1);
  const [friends, setFriends] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addFriend = (name) => setFriends([...friends, name]);
  const removeFriend = (index) => setFriends(friends.filter((_, i) => i !== index));

  const addExpense = (expense) => setExpenses([...expenses, expense]);
  const removeExpense = (id) => setExpenses(expenses.filter(e => e.id !== id));

  const reset = () => {
    setFriends([]);
    setExpenses([]);
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-600 p-8 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Wallet />
            <span className="font-bold tracking-wider uppercase opacity-80">FairShare</span>
          </div>
          <h1 className="text-3xl font-black">Split Bills Easily</h1>
          
          {/* Progress Bar */}
          <div className="flex gap-2 mt-6">
            <div className={`h-1 flex-1 rounded-full ${step >= 1 ? 'bg-white' : 'bg-indigo-400'}`}></div>
            <div className={`h-1 flex-1 rounded-full ${step >= 2 ? 'bg-white' : 'bg-indigo-400'}`}></div>
            <div className={`h-1 flex-1 rounded-full ${step >= 3 ? 'bg-white' : 'bg-indigo-400'}`}></div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8">
          {step === 1 && <StepFriends friends={friends} addFriend={addFriend} removeFriend={removeFriend} nextStep={() => setStep(2)} />}
          {step === 2 && <StepExpenses friends={friends} expenses={expenses} addExpense={addExpense} removeExpense={removeExpense} nextStep={() => setStep(3)} prevStep={() => setStep(1)} />}
          {step === 3 && <StepResult friends={friends} expenses={expenses} reset={reset} />}
        </div>
      </div>
    </div>
  );
}