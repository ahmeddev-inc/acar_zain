import { Link } from "wouter";
import { Property } from "../types/Property";
import { Bed, Bath, Ruler } from "lucide-react";

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800">{property.title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            property.type === "sale" 
              ? "bg-blue-100 text-blue-800" 
              : "bg-green-100 text-green-800"
          }`}>
            {property.type === "sale" ? "للبيع" : "للإيجار"}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>
        
        <div className="flex items-center mb-6">
          <div className="flex items-center mr-4">
            <Bed size={18} className="text-gray-500 mr-1" />
            <span className="text-gray-700">4</span>
          </div>
          <div className="flex items-center mr-4">
            <Bath size={18} className="text-gray-500 mr-1" />
            <span className="text-gray-700">3</span>
          </div>
          <div className="flex items-center">
            <Ruler size={18} className="text-gray-500 mr-1" />
            <span className="text-gray-700">320m²</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-indigo-700">
            {property.price.toLocaleString()} {property.type === "sale" ? "ريال" : "ريال/شهرياً"}
          </span>
          <Link href={`/property/${property.id}`}>
            <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium py-2 px-4 rounded-lg transition">
              التفاصيل
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
