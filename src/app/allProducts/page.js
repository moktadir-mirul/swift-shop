import axios from "axios";
import Link from "next/link";

async function getProducts() {
    const res = await axios.get("http://localhost:3000/products");
    return res.data;
}

const allProducts = async () => {
    const products = await getProducts();
    return(
        <div className="w-full">
            <section className="w-11/12 mx-auto py-10">
        <h1 className="font-bold text-center text-4xl md:text-6xl text-indigo-600 pb-8">All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                products.map((item) => (
                   <div key={item._id} className="card bg-indigo-50 shadow-sm">
              <div className="card-body">
                <button className="bg-indigo-500 font-bold text-md text-gray-100 rounded-full px-4 py-1 capitalize">{item.category}</button>
                <h2 className="card-title text-indigo-600 font-bold text-xl">
                  {item.name}
                </h2>
                <p>{item.short_description}</p>
                <div className="card-actions justify-between items-center pt-5">
                  <h1 className="font-bold text-md">Price : ${item.price}</h1>
                  <Link href={`/allProducts/${item._id}`}>
                  <button className="btn bg-indigo-600 text-gray-50 font-bold hover:bg-indigo-800 rounded-sm">
                    Show details
                  </button></Link>
                </div>
              </div>
            </div> 
                ))
            }
        </div>
            </section>
        </div>
    )
};

export default allProducts;