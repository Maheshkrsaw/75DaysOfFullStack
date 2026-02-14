import React from 'react';
import { Trash2 } from 'lucide-react';

const Dashboard = ({ transactions = [], onDelete }) => {
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, curr) => acc + Number(curr.amount), 0);
    
  const expense = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const balance = income - expense;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm font-medium">Available Balance</p>
          <h2 className={`text-4xl font-bold mt-2 ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ₹{balance.toLocaleString()}
          </h2>
        </div>
        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 font-semibold text-indigo-700">
          <p className="text-sm">Total Income</p>
          <h2 className="text-3xl mt-2">₹{income.toLocaleString()}</h2>
        </div>
        <div className="bg-red-50 p-6 rounded-2xl border border-red-100 font-semibold text-red-700">
          <p className="text-sm">Total Expense</p>
          <h2 className="text-3xl mt-2">₹{expense.toLocaleString()}</h2>
        </div>
      </div>

      {/* List Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b bg-gray-50">
          <h3 className="text-lg font-bold text-gray-700">Recent Transactions</h3>
        </div>
        <ul className="divide-y divide-gray-100">
          {transactions.length === 0 ? (
            <li className="p-10 text-center text-gray-400">No data available.</li>
          ) : (
            transactions.map((item) => (
              <li key={item.id} className="p-4 flex justify-between items-center hover:bg-gray-50 transition group">
                <div className="flex items-center gap-4">
                  {/* Delete Button */}
                  <button 
                    onClick={() => onDelete(item.id)}
                    className="p-2 text-gray-300 hover:text-red-600 hover:bg-red-50 rounded-full transition"
                    title="Delete entry"
                  >
                    <Trash2 size={18} />
                  </button>
                  <div>
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-xs text-gray-400 font-medium uppercase">{item.date}</p>
                  </div>
                </div>
                <p className={`text-lg font-bold ${item.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {item.type === 'income' ? '+' : '-'} ₹{item.amount.toLocaleString()}
                </p>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;