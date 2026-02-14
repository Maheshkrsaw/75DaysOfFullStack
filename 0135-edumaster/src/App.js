import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { BookOpen, PlayCircle, CheckCircle, Award, MessageSquare, Search, Layout, User, Lock, Clock, FileText, ChevronRight } from 'lucide-react';

// --- 1. Mock Data ---
const COURSES = [
  {
    id: 1,
    title: "Full Stack Web Development",
    instructor: "Mahesh Singh",
    duration: "40 Hours",
    progress: 65,
    totalLessons: 20,
    completedLessons: 13,
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=600&q=80",
    modules: [
      { id: 101, title: "Intro to React", duration: "10:00", type: "video", locked: false },
      { id: 102, title: "JSX & Props", duration: "15:30", type: "video", locked: false },
      { id: 103, title: "State Management", duration: "20:00", type: "video", locked: true },
      { id: 104, title: "React Quiz", duration: "5:00", type: "quiz", locked: true }
    ]
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    instructor: "Sarah Design",
    duration: "25 Hours",
    progress: 10,
    totalLessons: 15,
    completedLessons: 2,
    img: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?auto=format&fit=crop&w=600&q=80",
    modules: []
  },
  {
    id: 3,
    title: "Python for Data Science",
    instructor: "Amit Py",
    duration: "50 Hours",
    progress: 0,
    totalLessons: 30,
    completedLessons: 0,
    img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=600&q=80",
    modules: []
  }
];

// --- 2. Components ---

const Sidebar = () => (
  <div className="hidden md:flex flex-col w-64 h-screen bg-slate-900 text-slate-300 p-4 border-r border-slate-800 fixed">
    <div className="flex items-center gap-3 mb-10 text-white px-2">
      <div className="bg-indigo-600 p-2 rounded-lg"><BookOpen size={24}/></div>
      <span className="text-xl font-bold">EduMaster</span>
    </div>
    
    <div className="space-y-2">
      <Link to="/" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-xl transition text-sm font-medium"><Layout size={18}/> Dashboard</Link>
      <Link to="/courses" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-xl transition text-sm font-medium"><Search size={18}/> Browse Courses</Link>
      <Link to="/community" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-xl transition text-sm font-medium"><MessageSquare size={18}/> Community</Link>
      <Link to="/certificates" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-xl transition text-sm font-medium"><Award size={18}/> Certificates</Link>
      <Link to="/profile" className="flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-xl transition text-sm font-medium"><User size={18}/> Profile</Link>
    </div>

    <div className="mt-auto bg-slate-800 p-4 rounded-xl">
      <p className="text-xs text-slate-400 mb-2">Storage Used</p>
      <div className="w-full bg-slate-700 h-2 rounded-full mb-2">
        <div className="bg-indigo-500 h-2 rounded-full w-[75%]"></div>
      </div>
      <p className="text-xs font-bold text-white">7.5 GB / 10 GB</p>
    </div>
  </div>
);

// Page 1: Dashboard
const Dashboard = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold text-slate-800 mb-2">Welcome back, Mahesh! 👋</h1>
    <p className="text-slate-500 mb-8">You have 2 assignments pending this week.</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-indigo-600 text-white p-6 rounded-2xl shadow-lg shadow-indigo-200">
        <div className="flex justify-between items-start mb-4">
          <BookOpen className="opacity-80"/>
          <span className="bg-white/20 text-xs px-2 py-1 rounded">In Progress</span>
        </div>
        <h3 className="text-3xl font-bold">4</h3>
        <p className="text-indigo-200 text-sm">Active Courses</p>
      </div>
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <Clock className="text-orange-500"/>
        </div>
        <h3 className="text-3xl font-bold text-slate-800">12h</h3>
        <p className="text-slate-500 text-sm">Learning Time</p>
      </div>
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <Award className="text-green-500"/>
        </div>
        <h3 className="text-3xl font-bold text-slate-800">2</h3>
        <p className="text-slate-500 text-sm">Certificates Earned</p>
      </div>
    </div>

    <h2 className="text-xl font-bold text-slate-800 mb-6">Continue Learning</h2>
    <div className="space-y-4">
      {COURSES.slice(0, 2).map(course => (
        <div key={course.id} className="bg-white p-4 rounded-xl border border-slate-100 flex gap-4 items-center">
          <img src={course.img} className="w-20 h-20 rounded-lg object-cover" alt="course"/>
          <div className="flex-1">
            <h3 className="font-bold text-slate-800 mb-1">{course.title}</h3>
            <div className="w-full bg-slate-100 h-2 rounded-full mb-2">
               <div className="bg-indigo-600 h-2 rounded-full transition-all duration-1000" style={{width: `${course.progress}%`}}></div>
            </div>
            <p className="text-xs text-slate-500">{course.completedLessons}/{course.totalLessons} Lessons • {course.progress}% Complete</p>
          </div>
          <Link to={`/classroom/${course.id}`} className="bg-slate-900 text-white p-3 rounded-lg hover:bg-indigo-600 transition">
            <PlayCircle size={20}/>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

// Page 2: Course Catalog
const Catalog = () => (
  <div className="p-8">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold text-slate-800">Explore Courses</h2>
      <div className="bg-white border border-slate-200 rounded-lg flex items-center px-3 py-2">
        <Search size={18} className="text-slate-400 mr-2"/>
        <input placeholder="Search topic..." className="outline-none text-sm"/>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {COURSES.map(course => (
        <div key={course.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition group">
          <div className="h-40 overflow-hidden relative">
            <img src={course.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="cover"/>
            <span className="absolute top-3 right-3 bg-white/90 text-xs font-bold px-2 py-1 rounded">{course.duration}</span>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-lg text-slate-800 mb-1">{course.title}</h3>
            <p className="text-sm text-slate-500 mb-4">by {course.instructor}</p>
            <button className="w-full border border-indigo-600 text-indigo-600 py-2 rounded-lg font-bold hover:bg-indigo-600 hover:text-white transition">View Details</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Page 3: Classroom (Video Player & Playlist)
const Classroom = () => {
  const { id } = useParams();
  const course = COURSES.find(c => c.id === parseInt(id));
  const [activeModule, setActiveModule] = useState(course?.modules[0]);

  if (!course || !course.modules) return <div className="p-10">Course content loading or not found...</div>;

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="aspect-video bg-black rounded-2xl mb-6 flex items-center justify-center relative shadow-lg">
           <PlayCircle size={64} className="text-white opacity-80 cursor-pointer hover:scale-110 transition"/>
           <p className="absolute bottom-4 left-4 text-white font-bold">{activeModule?.title}</p>
        </div>
        
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">{activeModule?.title}</h1>
            <p className="text-slate-500">Module {activeModule?.id}</p>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-indigo-700 transition">Mark Complete</button>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100">
           <h3 className="font-bold mb-4">Lesson Notes</h3>
           <p className="text-slate-600 leading-relaxed text-sm">
             In this lesson, we will cover the fundamentals of {activeModule?.title}. Make sure to have your IDE ready.
             React components are the building blocks of any React application...
           </p>
        </div>
      </div>

      {/* Playlist Sidebar */}
      <div className="w-80 bg-white border-l border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-100">
          <h3 className="font-bold text-slate-800">Course Content</h3>
          <p className="text-xs text-slate-500">{course.completedLessons}/{course.totalLessons} Completed</p>
        </div>
        <div className="flex-1 overflow-y-auto">
          {course.modules.map((mod, i) => (
            <div 
              key={mod.id} 
              onClick={() => !mod.locked && setActiveModule(mod)}
              className={`p-4 border-b border-slate-50 cursor-pointer hover:bg-slate-50 transition flex items-center gap-3 ${activeModule?.id === mod.id ? 'bg-indigo-50 border-l-4 border-l-indigo-600' : ''} ${mod.locked ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {mod.locked ? <Lock size={16} className="text-slate-400"/> : 
               mod.type === 'quiz' ? <FileText size={16} className="text-orange-500"/> :
               <PlayCircle size={16} className="text-indigo-600"/>
              }
              <div>
                <p className={`text-sm font-medium ${activeModule?.id === mod.id ? 'text-indigo-700' : 'text-slate-700'}`}>{mod.title}</p>
                <p className="text-xs text-slate-400">{mod.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Page 4: Certificate
const Certificate = () => (
  <div className="p-8 flex flex-col items-center">
    <h2 className="text-2xl font-bold text-slate-800 mb-8">Your Achievements</h2>
    
    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-xl max-w-3xl w-full text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
      <div className="mb-6">
        <Award size={64} className="text-indigo-600 mx-auto mb-4"/>
        <h1 className="text-4xl font-serif text-slate-900 mb-2">Certificate of Completion</h1>
        <p className="text-slate-500">This is to certify that</p>
      </div>
      
      <h2 className="text-3xl font-bold text-indigo-700 mb-2 font-serif">Mahesh Singh</h2>
      <p className="text-slate-500 mb-8">has successfully completed the course</p>
      <h3 className="text-xl font-bold text-slate-800 mb-8">Full Stack Web Development</h3>
      
      <div className="flex justify-between items-end border-t border-slate-100 pt-6">
        <div className="text-left">
          <p className="text-xs text-slate-400">Date</p>
          <p className="font-bold text-slate-700">Feb 12, 2026</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-400">Instructor</p>
          <p className="font-bold text-slate-700 font-serif">Sarah Design</p>
        </div>
      </div>
    </div>
    <button className="mt-8 bg-slate-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-800">Download PDF</button>
  </div>
);

// Page 5: Community
const Community = () => (
    <div className="p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Discussion Forum</h2>
        <div className="bg-white rounded-xl border border-slate-200 p-6 mb-4">
            <div className="flex gap-4 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">JS</div>
                <div>
                    <h3 className="font-bold text-slate-800">How to use useEffect properly?</h3>
                    <p className="text-xs text-slate-500">Posted by John Doe • 2 hours ago</p>
                </div>
            </div>
            <p className="text-slate-600 text-sm mb-4">I am confused about the dependency array in useEffect. Can someone explain when to use it?</p>
            <div className="flex gap-4 text-slate-500 text-sm">
                <span className="flex items-center gap-1"><MessageSquare size={14}/> 12 Replies</span>
                <span className="flex items-center gap-1 cursor-pointer hover:text-indigo-600">Reply</span>
            </div>
        </div>
    </div>
);

// --- Main App ---
export default function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-slate-50 font-sans">
        {/* Sidebar only visible on desktop, or manage with state for mobile */}
        <Sidebar />
        <div className="flex-1 md:ml-64">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Catalog />} />
            <Route path="/classroom/:id" element={<Classroom />} />
            <Route path="/certificates" element={<Certificate />} />
            <Route path="/community" element={<Community />} />
            <Route path="/profile" element={<div className="p-10">Profile (Coming Soon)</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}