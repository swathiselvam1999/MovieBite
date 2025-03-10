import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryTerm = e.target.search.value;
    e.target.reset();
    return navigate(`search?q=${queryTerm}`);
  };

  const activeClass = "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
  const inActiveClass = "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 relative">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          
          {/* Logo*/}
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Moviebite</span>
          </NavLink>

          {/* Search Bar for Desktop */}
          <div className="relative hidden md:block ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                name="search"
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </form>
          </div>

          {/* Mobile & Desktop Menu */}
          <div className={`${isMenuOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-search">

            {/* Search Bar for Mobile */}
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  name="search"
                  type="text"
                  id="search-navbar-mobile"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </form>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li><NavLink to="/" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Home</NavLink></li>
              <li><NavLink to="/movies/popular" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Popular</NavLink></li>
              <li><NavLink to="/movies/top" className={({ isActive }) => isActive ? activeClass : inActiveClass}>TopRated</NavLink></li>
              <li><NavLink to="/movies/upcoming" className={({ isActive }) => isActive ? activeClass : inActiveClass}>Upcoming</NavLink></li>
            </ul>

            {/* Dark Mode Toggle */}
            <button onClick={() => setDarkMode(!darkMode)} className="m-5 hidden md:block">
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className='flex items-center absolute top-[0rem] right-[0.5rem]'>
  
            <button onClick={() => setDarkMode(!darkMode)} className="m-5 block md:hidden">
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="  inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>

          </div>

          
        </div>
      </nav>
    </header>
  );
};

export default Header;
