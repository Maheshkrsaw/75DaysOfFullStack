import { Link } from 'react-router-dom';
import { LayoutDashboard, PlusCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">FinSmart</h1>
        <div className="flex space-x-6">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition font-medium">
            <LayoutDashboard size={20} /> Dashboard
          </Link>
          <Link to="/add" className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition shadow-md">
            <PlusCircle size={20} /> Add New
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;