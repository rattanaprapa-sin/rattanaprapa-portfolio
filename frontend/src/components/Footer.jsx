import React from 'react';
import { contacts } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 lg:py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl text-slate-800 dark:text-white mb-2">
              Portfolio<span className="text-blue-600">.</span>
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Designed & Built by Rattanaprapa Sinkrathok
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={(e) => {
                  if (contact.action === 'copy') {
                    e.preventDefault();
                    navigator.clipboard.writeText(contact.value);
                    alert(`Copied: ${contact.value}`);
                  }
                }}
              >
                {contact.title}
              </a>
            ))}
          </div>

        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
