import React, { useEffect, useState } from 'react';

function Projects() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('priceAsc');
  const [categories, setCategories] = useState(['All', 'Electronics', 'Clothing', 'Jewelery']);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const countUp = () => setCount(prev => prev * 2);
  const countDown = () => setCount(prev => prev / 2);

  const handleAddToCart = (item) => {
    setCart(prev => [...prev, item]);
  };

  const handleRemoveFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  
  const filteredData = data
    .filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
      (selectedCategory === 'All' || item.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortOption === 'priceAsc') {
        return a.price - b.price;
      } else if (sortOption === 'priceDesc') {
        return b.price - a.price;
      } else {
        return a.title.localeCompare(b.title);
      }
    });

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-gray-800 text-white p-6 flex flex-col sm:flex-row sm:items-center justify-between shadow-lg sticky top-0 z-50">
        <h1 className="text-2xl font-semibold"> My Store</h1>

        
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-4 py-2 mt-4 sm:mt-0 rounded-lg w-full sm:w-80 bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200 ease-in"
        />

        <div className="text-sm sm:text-base mt-2 sm:mt-0">Counter: {count}</div>
      </div>

    
      <div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        <select
          onChange={handleCategoryChange}
          value={selectedCategory}
          className="px-4 py-2 rounded-lg w-full sm:w-auto bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200 ease-in"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>

        
        <select
          onChange={handleSortChange}
          value={sortOption}
          className="px-4 py-2 rounded-lg w-full sm:w-auto bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500 transition duration-200 ease-in"
        >
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="nameAsc">Name: A to Z</option>
          <option value="nameDesc">Name: Z to A</option>
        </select>
      </div>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="bg-white border p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <h2 className="text-md font-semibold mb-2 text-gray-800">{item.title}</h2>
              <img
                src={item.image}
                alt={item.title}
                className="h-40 object-contain mx-auto mb-4 rounded-md shadow-md"
              />
              <p className="text-sm text-gray-600 mb-4">{item.description.slice(0, 100)}...</p>
              <p className="font-bold text-green-700 mb-4">${item.price}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="w-full py-3 bg-sky-200 text-sky-800 font-semibold rounded-md hover:bg-sky-300 transition duration-200 ease-in"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;