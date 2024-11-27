import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Collection from "../assets/Api/Collectionapi";
import Pagesapi from '../assets/Api/Pagesapi';
import Elementapi from '../assets/Api/Elementsapi';
import { useAuth } from '../Store/auth';

function Navbar() {
  const { isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="bg-white shadow-sm fixed w-full top-0 z-50 h-16 sm:h-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <NavLink to="/" className="text-xl sm:text-2xl font-bold text-gray-800 hover:text-rose-600 transition-colors">
                Sri
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              <ul className="flex items-center space-x-1">
                {/* Home Dropdown */}
                <div className="relative group">
                  <li className="hover:bg-gray-50 rounded-md">
                    <NavLink to="/" className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-gray-900"> 
                      Home 
                      <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </NavLink>
                  </li>
                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[200px] max-h-[400px] overflow-y-auto">
                    <ul className="py-2">
                      {Collection.map((curElem, index) => (
                        <li key={index} className="hover:bg-gray-50">
                          <NavLink to={curElem.link} className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900">
                            {curElem.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Page Dropdown */}
                <div className='relative group mx-2'>
                  <li className='hover:bg-slate-100 px-3 py-2 rounded-md'>
                    <NavLink to="/" className="flex items-center gap-1"> 
                      Pages
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </NavLink>
                  </li>
                  <div className='absolute left-0 hidden group-hover:block bg-white shadow-lg z-50 rounded-md min-w-[200px] max-h-[400px] overflow-y-auto mt-1'>
                    <ul className='py-2'>
                      {Pagesapi.map((curElem, index) => {
                        const { id, name, path } = curElem;
                        return (
                          <li key={index} className='px-4 py-2 hover:bg-slate-100 transition-colors duration-200'>
                            <NavLink to={path} className='relative block w-full'>{name}</NavLink>
                          </li>
                        );
                      })}
                      <li className='px-4 py-2 hover:bg-slate-200'>
                        <NavLink to="/Layout-collection">Landing...</NavLink>
                      </li>
                      <li className='px-4 py-2 hover:bg-slate-200'>
                        <NavLink to="/Layout-collection">Landing...</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Blog and Portfolio Links - Updated styling */}
                <li className='hover:bg-slate-100 px-3 py-2 rounded-md'>
                  <NavLink to="/Blog" className="block">Vision</NavLink>
                </li>
                <li className='hover:bg-slate-100 px-3 py-2 rounded-md'>
                  <NavLink to="/portfolio" className="block">Portfolio</NavLink>
                </li>

                {/* Elements Dropdown */}
                <div className='relative group mx-2'>
                  <li className='hover:bg-slate-100 px-3 py-2 rounded-md'>
                    <NavLink to="/" className="flex items-center gap-1"> 
                      Elements
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </NavLink>
                  </li>
                  <div className='absolute right-0 hidden group-hover:block bg-white shadow-lg z-50 rounded-md w-[500px] max-h-[600px] overflow-y-auto mt-1'>
                    <div className='grid grid-cols-2 p-4 gap-4'>
                      {Elementapi.map((category) => (
                        <div key={category.category}>
                          <h2 className='font-bold text-gray-800 mb-2 border-b pb-2'>{category.category}</h2>
                          <ul className='space-y-1'>
                            {category.data.map((item) => (
                              <li key={item.id} className='px-3 py-1.5 hover:bg-slate-100 rounded-md transition-colors duration-200'>
                                <NavLink to={item.path} className='relative block w-full'>{item.name}</NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Authentication Links - Updated styling */}
                {isLoggedIn ? (
                  <li className='hover:bg-slate-100 px-3 py-2 rounded-md'>
                    <NavLink to="/logout" className="block">Logout</NavLink>
                  </li>
                ) : (
                  <>
                    <li className='hover:bg-slate-100 px-3 py-2 rounded-md'>
                      <NavLink to="/register" className="block">Register</NavLink>
                    </li>
                    <li className='hover:bg-slate-100 px-3 py-2 rounded-md'>
                      <NavLink to="/login" className="block">Login</NavLink>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>

          {/* Mobile Navigation - Updated */}
          <div 
            className={`lg:hidden fixed inset-0 bg-gray-800/50 z-50 transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <div 
              className={`fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white transform transition-transform duration-300 overflow-y-auto ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              onClick={e => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b px-4 py-3 flex justify-between items-center">
                <span className="font-semibold text-gray-800">Menu</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="py-4">
                {/* Mobile Home Link */}
                <div className="space-y-1">
                  <NavLink 
                    to="/" 
                    className="block px-4 py-2.5 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                  {Collection.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.link}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 pl-8"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>

                {/* Mobile Pages Link */}
                <div className="space-y-1 mt-4">
                  <div className="px-4 py-2.5 text-base font-medium text-gray-700">Pages</div>
                  {Pagesapi.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 pl-8"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>

                {/* Mobile Blog and Portfolio Links */}
                <NavLink to="/Blog" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                  Blog
                </NavLink>
                <NavLink to="/portfolio" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                  Portfolio
                </NavLink>

                {/* Mobile Elements Link */}
                <div className="space-y-1 mt-4">
                  <div className="px-4 py-2.5 text-base font-medium text-gray-700">Elements</div>
                  {Elementapi.map((category) => (
                    <div key={category.category} className="ml-4 space-y-1">
                      <div className="px-3 py-2 text-sm font-medium text-gray-900">{category.category}</div>
                      {category.data.map((item) => (
                        <NavLink
                          key={item.id}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 pl-8"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Mobile Authentication Links */}
                {isLoggedIn ? (
                  <NavLink to="/logout" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                    Logout
                  </NavLink>
                ) : (
                  <>
                    <NavLink to="/register" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                      Register
                    </NavLink>
                    <NavLink to="/login" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                      Login
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Add a spacer div to prevent content from being hidden */}
      <div className="h-16 sm:h-20"></div>
    </>
  );
}

export default Navbar