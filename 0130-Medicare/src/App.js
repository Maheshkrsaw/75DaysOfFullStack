import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { Search, MapPin, Star, Calendar, Clock, User, CheckCircle, Stethoscope, Activity, Heart, ChevronRight, ShieldCheck } from 'lucide-react';

// --- 1. Data Source (Doctors Database) ---
const DOCTORS = [
  { id: 1, name: "Dr. Aditi Sharma", specialty: "Cardiologist", exp: "12 Yrs", fee: 1500, rating: 4.9, img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80", hospital: "Apollo Heart Center" },
  { id: 2, name: "Dr. Rahul Verma", specialty: "Dentist", exp: "8 Yrs", fee: 800, rating: 4.7, img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80", hospital: "Smile Dental Clinic" },
  { id: 3, name: "Dr. Priya Singh", specialty: "Neurologist", exp: "15 Yrs", fee: 2000, rating: 4.8, img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80", hospital: "City Neuro Care" },
  { id: 4, name: "Dr. Aman Gupta", specialty: "Orthopedic", exp: "10 Yrs", fee: 1200, rating: 4.6, img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80", hospital: "Bone & Joint Center" },
  { id: 5, name: "Dr. Neha Kapoor", specialty: "Dermatologist", exp: "6 Yrs", fee: 1000, rating: 4.9, img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80", hospital: "Skin Glow Clinic" },
  { id: 6, name: "Dr. Vikram Malhotra", specialty: "General Physician", exp: "20 Yrs", fee: 600, rating: 4.5, img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80", hospital: "City General Hospital" },
];

const SPECIALTIES = [
  { name: "Cardiologist", icon: <Heart className="text-red-500" /> },
  { name: "Dentist", icon: <Activity className="text-blue-500" /> },
  { name: "Neurologist", icon: <Stethoscope className="text-purple-500" /> },
  { name: "Orthopedic", icon: <User className="text-green-500" /> },
];

// --- 2. Navbar Component ---
const Navbar = () => (
  <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2 text-blue-600">
        <div className="bg-blue-100 p-2 rounded-lg"><Stethoscope size={24} /></div>
        <span className="text-2xl font-black tracking-tight">MediCare</span>
      </Link>
      <div className="hidden md:flex gap-6 font-medium text-gray-500">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/doctors" className="hover:text-blue-600">Find Doctors</Link>
        <Link to="/appointments" className="hover:text-blue-600">My Bookings</Link>
      </div>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition">Login</button>
    </div>
  </nav>
);

// --- 3. Page 1: Home ---
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20 px-6 rounded-b-[3rem] mb-12 shadow-xl">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block bg-blue-500/30 px-4 py-1 rounded-full text-sm font-bold mb-4 border border-blue-400">
              Health First
            </div>
            <h1 className="text-5xl font-black mb-6 leading-tight">Find the Best <br/> Doctors Near You.</h1>
            <p className="text-blue-100 text-lg mb-8 max-w-lg">Book appointments with top specialists in your city with just a few clicks. No more waiting lines.</p>
            <div className="flex gap-4">
              <button onClick={() => navigate('/doctors')} className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg transition flex items-center gap-2">
                Book Now <ChevronRight size={20}/>
              </button>
            </div>
          </div>
          <div className="md:w-1/3">
             {/* Abstract Illustration Placeholder */}
             <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center"><CheckCircle className="text-white"/></div>
                 <div><p className="font-bold">Appointment Confirmed</p><p className="text-sm opacity-80">Dr. Sharma • 10:00 AM</p></div>
               </div>
               <div className="h-2 bg-white/20 rounded-full w-full mb-2"></div>
               <div className="h-2 bg-white/20 rounded-full w-2/3"></div>
             </div>
          </div>
        </div>
      </div>

      {/* Specialties */}
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Specialty</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SPECIALTIES.map((spec, i) => (
            <div key={i} onClick={() => navigate('/doctors')} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer flex flex-col items-center text-center gap-4 group">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition">{spec.icon}</div>
              <p className="font-bold text-gray-700">{spec.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 4. Page 2: Doctor List ---
const DoctorList = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Top Rated Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTORS.map(doc => (
            <div key={doc.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition group">
              <div className="flex items-center gap-4 mb-6">
                <img src={doc.img} alt={doc.name} className="w-20 h-20 rounded-2xl object-cover" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{doc.name}</h3>
                  <p className="text-blue-600 font-medium text-sm">{doc.specialty}</p>
                  <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                    <Star size={14} fill="currentColor"/> {doc.rating}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500 mb-6 bg-gray-50 p-3 rounded-xl">
                <div className="flex items-center gap-1"><MapPin size={14}/> {doc.hospital}</div>
                <div className="font-bold text-gray-900">₹{doc.fee}</div>
              </div>
              <Link to={`/doctor/${doc.id}`} className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition">
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 5. Page 3: Doctor Details & Page 4: Slot Selection ---
const DoctorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = DOCTORS.find(d => d.id === parseInt(id));
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Slot Logic
  const slots = ["10:00 AM", "10:30 AM", "11:00 AM", "04:00 PM", "04:30 PM", "05:00 PM"];

  if (!doctor) return <div>Doctor not found</div>;

  return (
    <div className="container mx-auto px-6 py-10 max-w-4xl">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 mb-8">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img src={doctor.img} className="w-full h-full object-cover h-64 md:h-full" alt="doc" />
          </div>
          <div className="p-8 md:w-2/3">
             <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold uppercase">{doctor.specialty}</span>
             <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">{doctor.name}</h1>
             <p className="text-gray-500 mb-6 flex items-center gap-2"><MapPin size={18}/> {doctor.hospital} • {doctor.exp} Experience</p>
             
             <h3 className="font-bold text-gray-800 mb-4">About Doctor</h3>
             <p className="text-gray-500 text-sm leading-relaxed mb-6">Dr. {doctor.name} is a highly experienced specialist dedicated to providing top-quality medical care. With over {doctor.exp} of practice, they have treated thousands of patients successfully.</p>
             
             <div className="flex gap-4">
               <div className="text-center p-4 bg-gray-50 rounded-xl flex-1">
                 <p className="text-xl font-bold text-gray-900">{doctor.rating}</p>
                 <p className="text-xs text-gray-500">Rating</p>
               </div>
               <div className="text-center p-4 bg-gray-50 rounded-xl flex-1">
                 <p className="text-xl font-bold text-gray-900">1000+</p>
                 <p className="text-xs text-gray-500">Patients</p>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Slot Selection Section */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <Clock className="text-blue-600"/> Available Slots
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
          {slots.map((slot) => (
            <button 
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              className={`py-3 rounded-xl text-sm font-bold border transition ${selectedSlot === slot ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 text-gray-600 hover:border-blue-400'}`}
            >
              {slot}
            </button>
          ))}
        </div>
        <button 
          onClick={() => navigate('/book', { state: { doctor, slot: selectedSlot } })}
          disabled={!selectedSlot}
          className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg disabled:opacity-50 hover:bg-gray-800 transition"
        >
          Proceed to Patient Details
        </button>
      </div>
    </div>
  );
};

// --- 6. Page 5: Patient Form ---
const BookingForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { doctor, slot } = state || {}; // Data from previous page

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/success', { state: { doctor, slot } });
  };

  if (!doctor) return <div className="p-10">Please select a doctor first.</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 flex justify-center">
      <div className="bg-white p-8 rounded-3xl shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Patient Details</h2>
        
        {/* Booking Summary */}
        <div className="bg-blue-50 p-4 rounded-xl mb-6 flex items-center gap-4">
          <img src={doctor.img} className="w-12 h-12 rounded-full object-cover" alt="doc"/>
          <div>
            <p className="font-bold text-gray-900">{doctor.name}</p>
            <p className="text-sm text-blue-600">{slot} • Today</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
            <input required className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500" placeholder="Mahesh Singh"/>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Age</label>
            <input required type="number" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500" placeholder="24"/>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
            <input required type="tel" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-blue-500" placeholder="9876543210"/>
          </div>
          <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold mt-4 shadow-lg shadow-blue-200 hover:bg-blue-700 transition">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

// --- 7. Page 6: Success Ticket ---
const Success = () => {
  const { state } = useLocation();
  const { doctor, slot } = state || {};
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative">
        <div className="bg-green-500 h-2"></div>
        <div className="p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-black text-gray-800 mb-2">Booking Confirmed!</h2>
          <p className="text-gray-500 mb-8">Your appointment has been successfully scheduled.</p>
          
          <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300 relative">
            <div className="absolute -left-3 top-1/2 w-6 h-6 bg-white rounded-full"></div>
            <div className="absolute -right-3 top-1/2 w-6 h-6 bg-white rounded-full"></div>
            
            <div className="text-left space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Doctor</span>
                <span className="font-bold text-gray-800">{doctor?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Date</span>
                <span className="font-bold text-gray-800">Today</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Time</span>
                <span className="font-bold text-blue-600">{slot}</span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="text-gray-500 text-sm">Hospital</span>
                <span className="font-bold text-gray-800 text-sm text-right">{doctor?.hospital}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-50 border-t flex justify-center">
          <button onClick={() => navigate('/')} className="text-blue-600 font-bold hover:underline">Go to Home</button>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---
export default function App() {
  return (
    <Router>
      <div className="font-['Inter']">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/doctor/:id" element={<DoctorDetail />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}