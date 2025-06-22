
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'timeline', 'projects', 'leadership', 'clubs', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'projects', label: 'Projects' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'clubs', label: 'Clubs & Initiatives' },
    { id: 'contact', label: 'Contact' },
  ];

  const rolePages = [
    { path: '/', label: 'Home' },
    { path: '/programmer', label: 'Programmer' },
    { path: '/music', label: 'Music' },
    { path: '/tech-leader', label: 'Tech Leader' },
    { path: '/teacher', label: 'Teacher' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => isHomePage ? scrollToSection('home') : navigate('/')}
            className="text-xl font-bold text-gray-900 hover:text-sky-600 transition-colors"
          >
            Advik Punugu
          </button>
          
          <div className="flex items-center space-x-8">
            {isHomePage && (
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors hover:text-sky-600 ${
                      activeSection === item.id ? 'text-sky-600' : 'text-gray-600'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-sky-600 transition-colors">
                <span>Navigate</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {rolePages.map((page) => (
                  <DropdownMenuItem
                    key={page.path}
                    onClick={() => navigate(page.path)}
                    className={`cursor-pointer ${
                      location.pathname === page.path ? 'bg-sky-50 text-sky-600' : ''
                    }`}
                  >
                    {page.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};
