import { Link } from "wouter";
import { Home, Building, Mail, LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Building className="text-indigo-600" size={28} />
        <span className="text-xl font-bold text-gray-800">عقار زين</span>
      </div>

      <div className="hidden md:flex space-x-8">
        <Link href="/" className="flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition">
          <Home size={18} className="mr-1" /> الرئيسية
        </Link>
        <Link href="/properties" className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition">
          <Building size={18} className="mr-1" /> العقارات
        </Link>
        <Link href="/contact" className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition">
          <Mail size={18} className="mr-1" /> تواصل معنا
        </Link>
      </div>

      <Link href="/login" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md flex items-center transition">
        <LogIn size={18} className="mr-2" /> تسجيل دخول
      </Link>
    </nav>
  );
};

export default Navbar;
