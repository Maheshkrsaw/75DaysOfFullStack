import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { Search, MapPin, Briefcase, DollarSign, Clock, Filter, CheckCircle, Bookmark, Upload, X, Building, LayoutDashboard, FileText } from 'lucide-react';

// --- 1. Dummy Data (Job Database) ---
const JOBS = [
  { id: 1, title: "Senior React Developer", company: "Google", location: "Bangalore", type: "Full Time", salary: "25L - 35L", remote: false, posted: "2 days ago", logo: "G", desc: "We are looking for an expert in React.js and Tailwind CSS." },
  { id: 2, title: "Frontend Engineer", company: "Amazon", location: "Hyderabad", type: "Full Time", salary: "18L - 25L", remote: false, posted: "5 days ago", logo: "A", desc: "Join our retail team to build the next gen shopping experience." },
  { id: 3, title: "Remote UI/UX Designer", company: "Spotify", location: "Remote", type: "Contract", salary: "12L - 18L", remote: true, posted: "1 day ago", logo: "S", desc: "Design beautiful interfaces for our music app." },
  { id: 4, title: "Backend Developer (Node)", company: "Swiggy", location: "Bangalore", type: "Full Time", salary: "20L - 30L", remote: false, posted: "Just now", logo: "Sw", desc: "Scale our delivery infrastructure using Node.js and Microservices." },
  { id: 5, title: "Product Manager", company: "Cred", location: "Mumbai", type: "Full Time", salary: "30L - 50L", remote: false, posted: "3 days ago", logo: "C", desc: "Lead the product vision for our fintech products." },
  { id: 6, title: "React Intern", company: "TechStart", location: "Remote", type: "Internship", salary: "15k/mo", remote: true, posted: "1 week ago", logo: "T", desc: "Learn and grow with our startup team." },
];

// --- 2. Components ---

const Navbar = () => (
  <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2 text-indigo-600">
        <Briefcase size={28} strokeWidth={2.5} />
        <span className="text-2xl font-black tracking-tighter">JobHunt</span>
      </Link>
      <div className="hidden md:flex gap-8 font-medium text-gray-600">
        <Link to="/jobs" className="hover:text-indigo-600">Find Jobs</Link>
        <Link to="/dashboard" className="hover:text-indigo-600">My Dashboard</Link>
        <Link to="/saved" className="hover:text-indigo-600">Saved</Link>
      </div>
      <div className="flex gap-4">
        <button className="text-gray-600 font-bold hover:text-indigo-600">Login</button>
        <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-bold hover:bg-indigo-700 transition">Post a Job</button>
      </div>
    </div>
  </nav>
);

// Page 1: Home
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-indigo-900 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-black mb-6">Find Your Dream Job Today</h1>
        <p className="text-indigo-200 text-lg mb-10 max-w-2xl mx-auto">Thousands of jobs in the leading companies are waiting for you.</p>
        
        <div className="bg-white p-2 rounded-full max-w-2xl mx-auto flex shadow-2xl">
          <div className="flex-1 flex items-center px-6 border-r border-gray-200">
            <Search className="text-gray-400" />
            <input className="w-full p-3 outline-none text-gray-800" placeholder="Job title or keyword" />
          </div>
          <div className="hidden md:flex flex-1 items-center px-6">
            <MapPin className="text-gray-400" />
            <input className="w-full p-3 outline-none text-gray-800" placeholder="Location" />
          </div>
          <button onClick={() => navigate('/jobs')} className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700">Search</button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Featured Companies</h2>
        <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Dummy Logos */}
           <span className="text-2xl font-black text-gray-400">GOOGLE</span>
           <span className="text-2xl font-black text-gray-400">AMAZON</span>
           <span className="text-2xl font-black text-gray-400">NETFLIX</span>
           <span className="text-2xl font-black text-gray-400">META</span>
        </div>
      </div>
    </div>
  );
};

// Page 2: Job Listing (Filter Logic)
const JobList = ({ saved, toggleSave }) => {
  const [filterType, setFilterType] = useState("All");

  const filteredJobs = JOBS.filter(job => {
    if (filterType === "All") return true;
    if (filterType === "Remote") return job.remote;
    return job.type === filterType;
  });

  return (
    <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters */}
      <div className="w-full md:w-1/4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-24">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Filter size={18}/> Filters</h3>
          
          <div className="space-y-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="type" checked={filterType === "All"} onChange={() => setFilterType("All")} /> All Jobs
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="type" checked={filterType === "Full Time"} onChange={() => setFilterType("Full Time")} /> Full Time
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="type" checked={filterType === "Remote"} onChange={() => setFilterType("Remote")} /> Remote Only
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="type" checked={filterType === "Internship"} onChange={() => setFilterType("Internship")} /> Internship
            </label>
          </div>
        </div>
      </div>

      {/* Job Cards */}
      <div className="flex-1 space-y-4">
        <h2 className="font-bold text-gray-700 mb-2">Showing {filteredJobs.length} Jobs</h2>
        {filteredJobs.map(job => (
          <div key={job.id} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition group relative">
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 font-black text-xl">
                {job.logo}
              </div>
              <div className="flex-1">
                <Link to={`/job/${job.id}`} className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition">
                  {job.title}
                </Link>
                <p className="text-gray-500 font-medium">{job.company}</p>
                
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><MapPin size={14}/> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock size={14}/> {job.type}</span>
                  <span className="flex items-center gap-1"><DollarSign size={14}/> {job.salary}</span>
                  <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded text-xs font-bold">{job.posted}</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => toggleSave(job.id)}
              className="absolute top-6 right-6 text-gray-400 hover:text-indigo-600"
            >
              <Bookmark className={saved.includes(job.id) ? "fill-indigo-600 text-indigo-600" : ""} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Page 3: Job Details
const JobDetail = ({ applyJob, applications }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = JOBS.find(j => j.id === parseInt(id));
  const hasApplied = applications.some(app => app.jobId === parseInt(id));

  if (!job) return <div>Job not found</div>;

  return (
    <div className="container mx-auto px-6 py-10 max-w-4xl">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 mb-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-2xl font-black text-gray-400">{job.logo}</div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
              <p className="text-lg text-indigo-600 font-medium">{job.company}</p>
            </div>
          </div>
          {hasApplied ? (
             <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold flex items-center gap-2"><CheckCircle size={18}/> Applied</span>
          ) : (
            <button onClick={() => navigate(`/apply/${job.id}`)} className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition">
              Apply Now
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-b border-gray-100 py-6 mb-8">
           <div><p className="text-gray-400 text-sm">Location</p><p className="font-bold">{job.location}</p></div>
           <div><p className="text-gray-400 text-sm">Salary</p><p className="font-bold">{job.salary}</p></div>
           <div><p className="text-gray-400 text-sm">Job Type</p><p className="font-bold">{job.type}</p></div>
           <div><p className="text-gray-400 text-sm">Posted</p><p className="font-bold">{job.posted}</p></div>
        </div>

        <h3 className="text-xl font-bold mb-4">Job Description</h3>
        <p className="text-gray-600 leading-relaxed mb-6">{job.desc} <br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <h3 className="text-xl font-bold mb-4">Requirements</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
          <li>3+ years of experience in React.js</li>
          <li>Experience with State Management (Redux/Context)</li>
          <li>Strong understanding of CSS and Responsive Design</li>
          <li>Good communication skills</li>
        </ul>
      </div>
    </div>
  );
};

// Page 4: Application Form
const ApplyForm = ({ submitApplication }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = JOBS.find(j => j.id === parseInt(id));

  const handleSubmit = (e) => {
    e.preventDefault();
    submitApplication(job);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 flex justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-2">Apply for {job.title}</h2>
        <p className="text-gray-500 mb-6">at {job.company}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
            <input required className="w-full p-3 border rounded-lg outline-none focus:border-indigo-500" placeholder="Mahesh Singh"/>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
            <input required type="email" className="w-full p-3 border rounded-lg outline-none focus:border-indigo-500" placeholder="mahesh@example.com"/>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Upload Resume (PDF)</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 cursor-pointer">
              <Upload className="mx-auto text-gray-400 mb-2"/>
              <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Cover Letter</label>
            <textarea className="w-full p-3 border rounded-lg h-32 outline-none focus:border-indigo-500" placeholder="Why should we hire you?"></textarea>
          </div>
          
          <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold mt-4 shadow-lg hover:bg-indigo-700">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

// Page 5: Dashboard (Status Tracking)
const Dashboard = ({ applications }) => (
  <div className="container mx-auto px-6 py-10">
    <h1 className="text-3xl font-bold mb-8 flex items-center gap-2"><LayoutDashboard/> Application Dashboard</h1>
    
    {applications.length === 0 ? (
      <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
        <p className="text-gray-500 mb-4">You haven't applied to any jobs yet.</p>
        <Link to="/jobs" className="text-indigo-600 font-bold hover:underline">Find Jobs</Link>
      </div>
    ) : (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="p-4 font-bold text-gray-600">Company</th>
              <th className="p-4 font-bold text-gray-600">Role</th>
              <th className="p-4 font-bold text-gray-600">Date Applied</th>
              <th className="p-4 font-bold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {applications.map((app, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-4 font-bold text-gray-800 flex items-center gap-2">
                   <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs">{app.logo}</div>
                   {app.company}
                </td>
                <td className="p-4 text-gray-600">{app.title}</td>
                <td className="p-4 text-gray-500">Today</td>
                <td className="p-4">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">In Review</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </div>
);

// Page 6: Saved Jobs
const SavedJobs = ({ saved }) => {
  const savedList = JOBS.filter(j => saved.includes(j.id));
  return (
    <div className="container mx-auto px-6 py-10">
       <h1 className="text-3xl font-bold mb-8 flex items-center gap-2"><Bookmark/> Saved Jobs</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {savedList.map(job => (
           <div key={job.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
             <h3 className="font-bold text-lg">{job.title}</h3>
             <p className="text-gray-500 mb-4">{job.company}</p>
             <Link to={`/job/${job.id}`} className="text-indigo-600 font-bold text-sm hover:underline">View Details</Link>
           </div>
         ))}
       </div>
    </div>
  )
}

// --- Main App ---
export default function App() {
  const [applications, setApplications] = useState([]);
  const [saved, setSaved] = useState([]);

  const submitApplication = (job) => {
    setApplications([...applications, { ...job, jobId: job.id }]);
  };

  const toggleSave = (id) => {
    if(saved.includes(id)) setSaved(saved.filter(sid => sid !== id));
    else setSaved([...saved, id]);
  };

  return (
    <Router>
      <div className="font-sans text-gray-900 bg-gray-50 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobList saved={saved} toggleSave={toggleSave} />} />
          <Route path="/job/:id" element={<JobDetail applyJob={submitApplication} applications={applications} />} />
          <Route path="/apply/:id" element={<ApplyForm submitApplication={submitApplication} />} />
          <Route path="/dashboard" element={<Dashboard applications={applications} />} />
          <Route path="/saved" element={<SavedJobs saved={saved} />} />
        </Routes>
      </div>
    </Router>
  );
}