
import axios from 'axios';
import Link from 'next/link';
import { IoWatchSharp } from "react-icons/io5";
import { FaStar, FaStarHalfAlt, FaHeart, FaHome } from 'react-icons/fa';
import { GiClothes } from 'react-icons/gi';

async function singleItem(id) {
    const res = await axios.get(`http://localhost:3000/products/${id}`);
    return res.data;
}

const singleProduct =async ({params}) => {
    const { id } = await params;

    const item = await singleItem(id);
  
    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-indigo-50 to-indigo-100 p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <div className="md:flex">
          {/* Product Image Section */}
          <div className="md:w-1/2 bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center p-8">
            <div className="relative w-full h-64 flex items-center justify-center">
              <div className="absolute w-48 h-48 bg-indigo-300 rounded-lg transform rotate-12"></div>
              <div className="absolute w-48 h-48 bg-indigo-400 rounded-lg transform -rotate-6"></div>
              <div className="relative z-10 text-indigo-700">
                <GiClothes className="text-8xl mx-auto" />
                <IoWatchSharp className="text-8xl mx-auto" />
              </div>
            </div>
          </div>
          
          {/* Product Details Section */}
          <div className="p-8 md:w-1/2">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-800 bg-indigo-100 rounded-full uppercase tracking-wide">
                  {item.category}
                </span>
                <h2 className="mt-4 text-2xl font-bold text-indigo-600">{item.name}</h2>
              </div>
              <button className="text-indigo-300 hover:text-indigo-600 transition-colors">
                <FaHeart className="text-2xl" />
              </button>
            </div>
            
            <div className="mt-6">
              {/* Rating */}
              <div className="flex items-center">
                <div className="flex text-amber-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <span className="ml-2 text-sm text-gray-600">{item.rating.rate}/5 ({item.rating.count} purchases)</span>
              </div>
              
              {/* Short Description */}
              <p className="mt-4 text-gray-800 font-bold">{item.short_description}</p>
              
              {/* Long Description */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Description</h3>
                <p className="mt-2 text-sm text-gray-600">
                  {item.long_description}
                </p>
              </div>
              
              {/* Price and Add to Cart */}
              <div className="mt-8 flex flex-col items-start gap-5 justify-between">
                <div>
                  <span className="text-3xl font-bold text-indigo-600">${item.price}</span>
                  <span className="block text-sm text-green-600">In stock • {item.rating.count}+ purchased</span>
                </div>
                <div>
                    <Link href={"/allProducts"}>
                    <button className="flex items-center justify-center px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg">
                  <FaHome  className="mr-2" />
                  Back to Products
                </button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default singleProduct;