import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { User, Book, Briefcase, Star, Download, ArrowRight, Trash2, Plus, FileText, CheckCircle } from 'lucide-react';

// --- 1. Components (Steps) ---

// Navbar & Stepper
const Header = ({ step }) => (
  <div className="bg-slate-900 text-white p-6 sticky top-0 z-50 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center gap-2 font-bold text-2xl">
        <FileText className="text-blue-400" /> CareerCraft
      </div>
      <div className="hidden md:flex gap-2">
        {[1, 2, 3, 4, 5].map(num => (
          <div key={num} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 ${step >= num ? 'bg-blue-500 border-blue-500' : 'border-gray-600 text-gray-400'}`}>
            {num}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Step 1: Personal Info
const PersonalInfo = ({ data, update, next }) => {
  const handleChange = (e) => update({ ...data, [e.target.name]: e.target.value });
  
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><User className="text-blue-600"/> Personal Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input name="fullName" value={data.fullName} onChange={handleChange} placeholder="Full Name" className="p-4 border rounded-xl bg-gray-50 focus:ring-2 ring-blue-500 outline-none" />
        <input name="role" value={data.role} onChange={handleChange} placeholder="Job Title (e.g. Frontend Dev)" className="p-4 border rounded-xl bg-gray-50 focus:ring-2 ring-blue-500 outline-none" />
        <input name="email" value={data.email} onChange={handleChange} placeholder="Email" className="p-4 border rounded-xl bg-gray-50 focus:ring-2 ring-blue-500 outline-none" />
        <input name="phone" value={data.phone} onChange={handleChange} placeholder="Phone" className="p-4 border rounded-xl bg-gray-50 focus:ring-2 ring-blue-500 outline-none" />
        <textarea name="summary" value={data.summary} onChange={handleChange} placeholder="Professional Summary" className="md:col-span-2 p-4 border rounded-xl bg-gray-50 focus:ring-2 ring-blue-500 outline-none h-32" />
      </div>
      <button onClick={next} className="w-full mt-8 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition">Next: Education</button>
    </div>
  );
};

// Step 2: Education
const Education = ({ data, update, next, back }) => {
  const handleChange = (e) => update({ ...data, education: { ...data.education, [e.target.name]: e.target.value } });

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl animate-in fade-in slide-in-from-right-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Book className="text-blue-600"/> Education</h2>
      <div className="space-y-6">
        <input name="degree" value={data.education.degree} onChange={handleChange} placeholder="Degree (e.g. BCA)" className="w-full p-4 border rounded-xl bg-gray-50" />
        <input name="college" value={data.education.college} onChange={handleChange} placeholder="College / University" className="w-full p-4 border rounded-xl bg-gray-50" />
        <div className="grid grid-cols-2 gap-6">
          <input name="year" value={data.education.year} onChange={handleChange} placeholder="Year (e.g. 2024)" className="p-4 border rounded-xl bg-gray-50" />
          <input name="grade" value={data.education.grade} onChange={handleChange} placeholder="Grade / CGPA" className="p-4 border rounded-xl bg-gray-50" />
        </div>
      </div>
      <div className="flex gap-4 mt-8">
        <button onClick={back} className="flex-1 bg-gray-200 py-4 rounded-xl font-bold">Back</button>
        <button onClick={next} className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold">Next: Experience</button>
      </div>
    </div>
  );
};

// Step 3: Experience (Dynamic List)
const Experience = ({ data, update, next, back }) => {
  const [job, setJob] = useState({ title: "", company: "", year: "" });

  const addJob = () => {
    if (job.title && job.company) {
      update({ ...data, experience: [...data.experience, job] });
      setJob({ title: "", company: "", year: "" });
    }
  };

  const removeJob = (index) => {
    const newExp = data.experience.filter((_, i) => i !== index);
    update({ ...data, experience: newExp });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl animate-in fade-in slide-in-from-right-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Briefcase className="text-blue-600"/> Experience</h2>
      
      {/* List of added jobs */}
      <div className="mb-6 space-y-3">
        {data.experience.map((exp, i) => (
          <div key={i} className="flex justify-between items-center p-4 bg-blue-50 border border-blue-100 rounded-xl">
            <div>
              <p className="font-bold">{exp.title}</p>
              <p className="text-sm text-gray-600">{exp.company} • {exp.year}</p>
            </div>
            <button onClick={() => removeJob(i)} className="text-red-500 hover:bg-red-100 p-2 rounded-lg"><Trash2 size={18}/></button>
          </div>
        ))}
      </div>

      {/* Add New Job Form */}
      <div className="bg-gray-50 p-6 rounded-xl border border-dashed border-gray-300">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input value={job.title} onChange={e => setJob({...job, title: e.target.value})} placeholder="Job Title" className="p-3 border rounded-lg" />
          <input value={job.company} onChange={e => setJob({...job, company: e.target.value})} placeholder="Company" className="p-3 border rounded-lg" />
          <input value={job.year} onChange={e => setJob({...job, year: e.target.value})} placeholder="Years (e.g. 2022-2024)" className="col-span-2 p-3 border rounded-lg" />
        </div>
        <button onClick={addJob} className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 font-bold"><Plus size={18}/> Add Position</button>
      </div>

      <div className="flex gap-4 mt-8">
        <button onClick={back} className="flex-1 bg-gray-200 py-4 rounded-xl font-bold">Back</button>
        <button onClick={next} className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold">Next: Skills</button>
      </div>
    </div>
  );
};

// Step 4: Skills
const Skills = ({ data, update, next, back }) => {
  const [skill, setSkill] = useState("");

  const addSkill = (e) => {
    if (e.key === 'Enter' && skill) {
      update({ ...data, skills: [...data.skills, skill] });
      setSkill("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-xl animate-in fade-in slide-in-from-right-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Star className="text-blue-600"/> Skills</h2>
      <p className="text-gray-500 mb-4">Type a skill and press Enter</p>
      
      <input 
        value={skill} 
        onChange={e => setSkill(e.target.value)} 
        onKeyPress={addSkill}
        placeholder="e.g. React, Java, Communication..." 
        className="w-full p-4 border rounded-xl bg-gray-50 mb-6 focus:ring-2 ring-blue-500 outline-none" 
      />

      <div className="flex flex-wrap gap-3 mb-8">
        {data.skills.map((s, i) => (
          <span key={i} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold flex items-center gap-2">
            {s} <button onClick={() => update({...data, skills: data.skills.filter((_, idx) => idx !== i)})} className="hover:text-red-500">×</button>
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        <button onClick={back} className="flex-1 bg-gray-200 py-4 rounded-xl font-bold">Back</button>
        <button onClick={next} className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold">Generate Resume</button>
      </div>
    </div>
  );
};

// Step 5: Final Preview (A4 Layout)
const FinalResume = ({ data, back }) => {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gray-500 py-10 flex flex-col items-center">
      
      {/* Controls - Hidden during print */}
      <div className="mb-6 flex gap-4 print:hidden">
        <button onClick={back} className="bg-white px-6 py-3 rounded-xl font-bold shadow-lg">Edit Details</button>
        <button onClick={handlePrint} className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2 hover:bg-blue-700">
          <Download size={20}/> Download PDF
        </button>
      </div>

      {/* A4 Paper */}
      <div className="bg-white w-[210mm] min-h-[297mm] shadow-2xl p-12 print:shadow-none print:w-full">
        {/* Header */}
        <div className="border-b-2 border-gray-800 pb-8 mb-8">
          <h1 className="text-5xl font-black text-gray-900 uppercase tracking-tight">{data.fullName}</h1>
          <p className="text-xl text-blue-600 font-bold mt-2">{data.role}</p>
          <div className="flex gap-6 mt-4 text-gray-600 text-sm">
            <span>{data.email}</span>
            <span>•</span>
            <span>{data.phone}</span>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Profile</h3>
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Experience</h3>
          <div className="space-y-6">
            {data.experience.length === 0 && <p className="text-gray-400 italic">No experience added.</p>}
            {data.experience.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-bold text-lg text-gray-800">{exp.title}</h4>
                  <span className="text-sm font-bold text-gray-500">{exp.year}</span>
                </div>
                <p className="text-blue-600 font-medium">{exp.company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Two Columns: Education & Skills */}
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Education</h3>
            <h4 className="font-bold text-lg">{data.education.degree}</h4>
            <p className="text-gray-600">{data.education.college}</p>
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-blue-600 font-bold">{data.education.year}</span>
              <span className="font-bold">Grade: {data.education.grade}</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((s, i) => (
                <span key={i} className="bg-gray-100 px-3 py-1 rounded text-sm font-bold text-gray-700">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---
export default function App() {
  // Central State for all steps
  const [step, setStep] = useState(1);
  const [resumeData, setResumeData] = useState({
    fullName: "Mahesh Singh",
    role: "Full Stack Developer",
    email: "mahesh@example.com",
    phone: "+91 98765 43210",
    summary: "Passionate developer with a knack for building clean, user-friendly web applications. Eager to solve real-world problems through code.",
    education: { degree: "", college: "", year: "", grade: "" },
    experience: [],
    skills: ["React", "JavaScript"]
  });

  // Steps Navigation Logic
  const next = () => setStep(s => s + 1);
  const back = () => setStep(s => s - 1);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Hide Header on Final Preview (Step 5) */}
      {step < 5 && <Header step={step} />}
      
      {step === 1 && <PersonalInfo data={resumeData} update={setResumeData} next={next} />}
      {step === 2 && <Education data={resumeData} update={setResumeData} next={next} back={back} />}
      {step === 3 && <Experience data={resumeData} update={setResumeData} next={next} back={back} />}
      {step === 4 && <Skills data={resumeData} update={setResumeData} next={next} back={back} />}
      {step === 5 && <FinalResume data={resumeData} back={back} />}
    </div>
  );
}