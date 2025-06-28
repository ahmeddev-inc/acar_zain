import { Link } from "wouter";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-700 to-purple-800 py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          اكتشف أفضل العقارات في المملكة العربية السعودية
        </h1>
        <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
          منصة عقار زين توفر لك تجربة فريدة للعثور على منزل أحلامك أو استثمارك العقاري المثالي
        </p>
        <Link href="/properties">
          <button className="bg-white text-indigo-700 hover:bg-indigo-50 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
            استعرض العقارات
          </button>
        </Link>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;
