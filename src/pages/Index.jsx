import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-white shadow">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Office Stationery Store</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#home" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-gray-800">About</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-gray-800">Products</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        <section id="home" className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Store</h2>
          <p className="text-gray-600">Your one-stop shop for all office stationery needs.</p>
        </section>

        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600">We provide high-quality office stationery products to help you stay organized and productive.</p>
        </section>

        <section id="products" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Product 1</h3>
              <p className="text-gray-600">Description of product 1.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Product 2</h3>
              <p className="text-gray-600">Description of product 2.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Product 3</h3>
              <p className="text-gray-600">Description of product 3.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <form className="bg-white p-6 rounded-lg shadow">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 mb-2">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
              <textarea id="message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Send</button>
          </form>
        </section>
      </main>

      <footer className="w-full bg-white shadow py-4">
        <div className="container mx-auto text-center text-gray-600">
          &copy; 2023 Office Stationery Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;