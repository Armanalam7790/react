import React from "react";

const ProductCard = ({product}) => {
    console.log(product);
    
  return (
    <div className="w-64 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      
      {/* Image */}
      <img
        src={product.thumbnail}
        alt="product"
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.category}</h2>
        <p className="text-gray-500 text-sm mt-1">
        {product.brand}
        </p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-green-600 font-bold">${product.price}</span>
          <span className="text-yellow-500 text-sm">⭐ 4.7</span>
        </div>

        <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;