import { Home, Building, Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Building size={24} className="text-indigo-400 mr-2" />
              <span className="text-xl font-bold">عقار زين</span>
            </div>
            <p className="text-gray-400 mb-4">
              منصة رائدة في مجال العقارات تقدم حلولاً متكاملة للبيع والشراء والإيجار
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white flex items-center transition"><Home size={16} className="mr-2" /> الرئيسية</a></li>
              <li><a href="/properties" className="text-gray-400 hover:text-white flex items-center transition"><Building size={16} className="mr-2" /> العقارات</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white flex items-center transition"><Mail size={16} className="mr-2" /> تواصل معنا</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center"><Phone size={16} className="mr-2" /> 0112345678</li>
              <li className="flex items-center"><Mail size={16} className="mr-2" /> info@acarzain.com</li>
              <li className="flex items-start">
                <span className="mt-0.5 mr-2">📍</span>
                <span>المملكة العربية السعودية، الرياض، حي الصحافة</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">النشرة البريدية</h3>
            <p className="text-gray-400 mb-4">
              اشترك ليصلك جديد العقارات والعروض الحصرية
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-lg transition">
                اشتراك
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} عقار زين. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
