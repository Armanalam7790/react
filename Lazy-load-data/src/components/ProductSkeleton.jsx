const ProductSkeleton = () => {
  return (
    <div className="w-64 bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      
      {/* Image */}
      <div className="w-full h-40 bg-gray-300"></div>

      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>

        <div className="flex justify-between mt-3">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/6"></div>
        </div>

        <div className="h-8 bg-gray-300 rounded mt-4"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;