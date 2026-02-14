import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Kanban, PlusSquare, Users, Settings, Bell, Search, CheckCircle, Clock, AlertCircle, MoreVertical } from 'lucide-react';

// --- 1. Heavy Dummy Data (Context) ---
const INITIAL_TASKS = [
  { id: 1, title: "Fix Navbar Responsiveness", assignee: "Rahul K.", priority: "High", status: "In Progress", due: "Today" },
  { id: 2, title: "Integrate Payment Gateway", assignee: "Mahesh S.", priority: "High", status: "Pending", due: "Tomorrow" },
  { id: 3, title: "Update User Profile UI", assignee: "Sneha P.", priority: "Medium", status: "Done", due: "Yesterday" },
  { id: 4, title: "Optimize Database Queries", assignee: "Amit V.", priority: "High", status: "In Progress", due: "Feb 20" },
  { id: 5, title: "Write API Documentation", assignee: "Rahul K.", priority: "Low", status: "Pending", due: "Feb 22" },
  { id: 6, title: "Fix Login Bug on Safari", assignee: "Mahesh S.", priority: "Critical", status: "Pending", due: "Today" },
  { id: 7, title: "Deploy to Production", assignee: "DevOps Team", priority: "High", status: "Done", due: "Feb 10" },
];

const TEAM_MEMBERS = [
  { id: 1, name: "Mahesh S.", role: "Senior Developer", email: "mahesh@tech.com", status: "Online" },
  { id: 2, name: "Rahul Kumar", role: "UI/UX Designer", email: "rahul@tech.com", status: "Away" },
  { id: 3, name: "Sneha Patel", role: "Product Manager", email: "sneha@tech.com", status: "Busy" },
  { id: 4, name: "Amit Verma", role: "Backend Lead", email: "amit@tech.com", status: "Online" },
];

// --- 2. Sidebar Component (Persistent Layout) ---
const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? "bg-indigo-600 text-white shadow-lg" : "text-gray-400 hover:bg-gray-800 hover:text-white";

  return (
    <div className="w-64 bg-[#1e1e2d] h-screen fixed left-0 top-0 flex flex-col p-6 text-white">
      <h1 className="text-2xl font-bold mb-10 flex items-center gap-2">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg"></div> TaskMaster
      </h1>
      
      <div className="space-y-2 flex-1">
        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-4">Main Menu</p>
        <Link to="/" className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isActive('/')}`}>
          <LayoutDashboard size={20} /> Dashboard
        </Link>
        <Link to="/board" className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isActive('/board')}`}>
          <Kanban size={20} /> Task Board
        </Link>
        <Link to="/team" className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isActive('/team')}`}>
          <Users size={20} /> Team Members
        </Link>
        <Link to="/create" className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isActive('/create')}`}>
          <PlusSquare size={20} /> Create Task
        </Link>
      </div>

      <div className="pt-6 border-t border-gray-700">
        <Link to="/settings" className="flex items-center gap-3 p-3 rounded-xl text-gray-400 hover:text-white">
          <Settings size={20} /> Settings
        </Link>
      </div>
    </div>
  );
};

// --- 3. Page 1: Dashboard (Analytics) ---
const Dashboard = ({ tasks }) => {
  const total = tasks.length;
  const pending = tasks.filter(t => t.status === "Pending").length;
  const progress = tasks.filter(t => t.status === "In Progress").length;
  const done = tasks.filter(t => t.status === "Done").length;

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
      
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 text-sm">Total Tasks</p>
              <h3 className="text-4xl font-bold text-gray-800 mt-2">{total}</h3>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><LayoutDashboard size={24}/></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <p className="text-gray-500 text-sm">Pending</p>
            <h3 className="text-4xl font-bold text-orange-500 mt-2">{pending}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <p className="text-gray-500 text-sm">In Progress</p>
            <h3 className="text-4xl font-bold text-blue-500 mt-2">{progress}</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <p className="text-gray-500 text-sm">Completed</p>
            <h3 className="text-4xl font-bold text-green-500 mt-2">{done}</h3>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 border-b">
              <th className="pb-3">Task Name</th>
              <th className="pb-3">Assignee</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Due Date</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {tasks.slice(0, 5).map(task => (
              <tr key={task.id} className="group hover:bg-gray-50">
                <td className="py-4 font-medium text-gray-800">{task.title}</td>
                <td className="py-4 text-gray-500 flex items-center gap-2">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-xs font-bold text-indigo-600">
                    {task.assignee.charAt(0)}
                  </div>
                  {task.assignee}
                </td>
                <td className="py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    task.status === "Done" ? "bg-green-100 text-green-600" :
                    task.status === "Pending" ? "bg-orange-100 text-orange-600" : "bg-blue-100 text-blue-600"
                  }`}>
                    {task.status}
                  </span>
                </td>
                <td className="py-4 text-gray-500 text-sm">{task.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- 4. Page 2: Task Board (Detailed List) ---
const TaskBoard = ({ tasks }) => (
  <div className="p-8">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-3xl font-bold text-gray-800">All Tasks</h2>
      <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
        <Search size={18} /> Filter
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map(task => (
        <div key={task.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="flex justify-between items-start mb-4">
            <span className={`px-2 py-1 rounded text-xs font-bold ${
              task.priority === "High" || task.priority === "Critical" ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600"
            }`}>
              {task.priority}
            </span>
            <MoreVertical size={16} className="text-gray-400 cursor-pointer" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-gray-800">{task.title}</h3>
          <p className="text-sm text-gray-500 mb-6">Assigned to <span className="text-indigo-600 font-medium">{task.assignee}</span></p>
          
          <div className="flex justify-between items-center border-t pt-4">
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Clock size={14} /> {task.due}
            </div>
            <div className={`flex items-center gap-1 text-xs font-bold ${
               task.status === "Done" ? "text-green-600" : "text-blue-600"
            }`}>
              {task.status === "Done" ? <CheckCircle size={14}/> : <AlertCircle size={14}/>}
              {task.status}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 5. Page 3: Team Members ---
const Team = () => (
  <div className="p-8">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Team Members</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {TEAM_MEMBERS.map(member => (
        <div key={member.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-6">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {member.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
            <p className="text-indigo-600 font-medium text-sm">{member.role}</p>
            <p className="text-gray-400 text-sm mt-1">{member.email}</p>
            <div className="flex items-center gap-2 mt-3">
              <span className={`w-2 h-2 rounded-full ${member.status === 'Online' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
              <span className="text-xs text-gray-500">{member.status}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- 6. Page 4: Create Task Form ---
const CreateTask = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ id: Date.now(), title, priority, assignee: "Me", status: "Pending", due: "Tomorrow" });
    alert("Task Created Successfully!");
  };

  return (
    <div className="p-8 max-w-2xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Create New Task</h2>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <div>
          <label className="block text-gray-700 font-bold mb-2">Task Title</label>
          <input 
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="e.g. Fix Homepage Header"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Priority</label>
            <select 
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Critical</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Assign To</label>
            <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none">
              <option>Mahesh S.</option>
              <option>Rahul K.</option>
              <option>Sneha P.</option>
            </select>
          </div>
        </div>
        <button className="w-full bg-indigo-600 text-white p-4 rounded-xl font-bold hover:bg-indigo-700 transition">
          Create Task
        </button>
      </form>
    </div>
  );
};

// --- Main App & Layout ---
export default function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const addTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  return (
    <Router>
      <div className="flex min-h-screen bg-[#f4f7fe] font-sans">
        {/* Sidebar Fixed */}
        <Sidebar />
        
        {/* Main Content Area (Padding Left for Sidebar) */}
        <div className="flex-1 ml-64">
          {/* Top Header */}
          <header className="bg-white p-6 shadow-sm flex justify-between items-center sticky top-0 z-40">
            <div className="relative w-96">
              <Search className="absolute left-3 top-3 text-gray-400" size={20}/>
              <input className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg outline-none" placeholder="Search for tasks..."/>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"><Bell size={20} className="text-gray-600"/></button>
              <div className="w-10 h-10 bg-indigo-600 rounded-full text-white flex items-center justify-center font-bold">M</div>
            </div>
          </header>

          {/* Dynamic Pages */}
          <Routes>
            <Route path="/" element={<Dashboard tasks={tasks} />} />
            <Route path="/board" element={<TaskBoard tasks={tasks} />} />
            <Route path="/create" element={<CreateTask onAddTask={addTask} />} />
            <Route path="/team" element={<Team />} />
            <Route path="/settings" element={<div className="p-8">Settings Page (Coming Soon)</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}