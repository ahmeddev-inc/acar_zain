import HeroSection from "../components/HeroSection";
import PropertyCard from "../components/PropertyCard";
import { Property } from "../types/Property";

const Home = () => {
  // بيانات تجريبية للعقارات
  const featuredProperties: Property[] = [
    {
      id: "1",
      title: "ڤيلا فاخرة للبيع في الرياض",
      description: "ڤيلا حديثة بمساحة 450م² في حي الرمال، 5 غرف نوم، 4 حمامات، مسبح خاص",
      price: 2500000,
      type: "sale",
      imageUrl: ""
    },
    {
      id: "2",
      title: "شقة للإيجار في جدة",
      description: "شقة فاخرة في برج بحري، 3 غرف نوم، اطلالة مميزة على البحر، تشطيب سوبر لوكس",
      price: 12000,
      type: "rent",
      imageUrl: ""
    },
    {
      id: "3",
      title: "أرض سكنية في الدمام",
      description: "أرض سكنية مميزة في حي العقيق، مساحة 600م²، موقع استراتيجي قريب من الخدمات",
      price: 800000,
      type: "sale",
      imageUrl: ""
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* قسم العقارات المميزة */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">العقارات المميزة</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              مجموعة مختارة من أفضل العقارات المميزة في مختلف مناطق المملكة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
      
      {/* قسم التصنيفات */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">تصفح حسب النوع</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-indigo-50 rounded-xl p-8 text-center hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">عقارات للبيع</h3>
              <p className="text-gray-600 mb-6">
                تصفح مجموعة واسعة من العقارات المعروضة للبيع بأسعار تنافسية
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition">
                تصفح العقارات
              </button>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-8 text-center hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">عقارات للإيجار</h3>
              <p className="text-gray-600 mb-6">
                اكتشف خيارات الإيجار المناسبة لك في مختلف الأحياء والمدن
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition">
                تصفح العقارات
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
