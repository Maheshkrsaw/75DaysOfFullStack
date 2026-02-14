import React from 'react';

const Dashboard = ({ transactions = [] }) => {
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, curr) => acc + Number(curr.amount), 0);
    
  const expense = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  const balance = income - expense;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm font-medium">Available Balance</p>
          <h2 className={`text-4xl font-bold mt-2 ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ₹{balance.toLocaleString()}
          </h2>
        </div>
        <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
          <p className="text-indigo-600 text-sm font-medium">Total Income</p>
          <h2 className="text-3xl font-bold mt-2">₹{income.toLocaleString()}</h2>
        </div>
        <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
          <p className="text-red-600 text-sm font-medium">Total Expense</p>
          <h2 className="text-3xl font-bold mt-2">₹{expense.toLocaleString()}</h2>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b bg-gray-50">
          <h3 className="text-lg font-bold">Transaction History</h3>
        </div>
        <ul className="divide-y divide-gray-100">
          {transactions.length === 0 ? (
            <li className="p-10 text-center text-gray-400">No data available. Start by adding a record!</li>
          ) : (
            transactions.map((item) => (
              <li key={item.id} className="p-4 flex justify-between items-center hover:bg-gray-50 transition">
                <div>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{item.date}</p>
                </div>
                <p className={`text-lg font-bold ${item.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {item.type === 'income' ? '+' : '-'} ₹{item.amount}
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