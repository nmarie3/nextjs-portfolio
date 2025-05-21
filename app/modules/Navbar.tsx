'use client'
import {useState, useEffect} from 'react';
import { usePathname } from 'next/navigation';
import {BiMenu, BiX} from "react-icons/bi";


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if(currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }else{
        setIsVisible(true);
      }

      lastScrollY = currentScrollY
    }
    window.addEventListener("scroll", controlNavbar)

    return () => window.removeEventListener("scroll", controlNavbar)
  }, [])

  const navLinks = [
    {href: "#hero", label:"Top"},
    {href: "#history", label:"History"},
    {href: "#skills", label:"Skills"},
    {href: "#projects", label:"Projects"},
    {href: "#contact", label:"Contact"},
  ]

  return (
    <div className="mb-5">
    <nav className={`fixed w-full bg-white shadow-md transition-transform duration-300 z-50 ${isVisible ? "translate-y-0" : "-translate-y-full opacity-70"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between">

          {/*desktop*/}
          <div className="hidden sm:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className={`text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-md font-semibold transition-colors ${pathname === link.href ? "text-blue-600" : ""}`}>
                  {link.label}
                </a>
            ))}
          </div>
        </div>

          {/*mobile*/}
          <div className="sm:hidden flex items-center">
            <button onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                {!isMobileOpen ? (
                  <BiMenu className="text-3xl"/>
                ) : (
                  <BiX className="text-3xl"/>
                )}
              </button>
          </div>

          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a key={link.href} 
                  href={link.href} 
                  onClick={() => setIsMobileOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === link.href ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`}
                >
                    {link.label}
                </a>
              ))}
            </div>
          </div>
      </div>

    </nav>
    </div>
  )
}

export default Navbar
