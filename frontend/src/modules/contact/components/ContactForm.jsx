import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { contacts } from '../../../data/portfolioData';

export default function ContactForm() {
  const [copiedTitle, setCopiedTitle] = useState('');

  const handleClick = (e, contact) => {
    if (contact.action === 'copy') {
      e.preventDefault();
      navigator.clipboard.writeText(contact.value);
      setCopiedTitle(contact.title);
      setTimeout(() => setCopiedTitle(''), 2000);
    }
  };

  const getIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes('email')) return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>;
    if (t.includes('location')) return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;
    if (t.includes('linkedin')) return <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
    if (t.includes('github')) return <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
    return <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>;
  };

  return (
    <section className="py-10 lg:py-40 bg-white dark:bg-[#050505]" id="contact">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
          
          {/* Left Column: Heading */}
          <div className="flex-1 lg:py-8 animate-fade-up">
            <h2 className="text-2xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              Let's work <br className="hidden lg:block"/> together.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md font-light leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          {/* Right Column: Contact List */}
          <div className="flex-[1.2] relative">
            
            {/* Copied Alert Toast */}
            <div className="absolute -top-16 right-0 z-20">
              <AnimatePresence>
                {copiedTitle && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-slate-800 text-white px-5 py-2.5 rounded-lg shadow-xl text-sm font-medium"
                  >
                    Copied to clipboard!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col border-t border-slate-200 dark:border-slate-800">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group relative flex items-center justify-between py-8 md:py-10 border-b border-slate-200 dark:border-slate-800 cursor-pointer overflow-hidden animate-fade-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={(e) => handleClick(e, contact)}
                >
                  {/* Background Hover Highlight */}
                  <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800/50 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>

                  <div className="relative z-10 flex items-center gap-6 w-full px-4 md:px-6">
                    {/* Icon */}
                    <div className="w-14 h-14 shrink-0 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-sm group-hover:scale-110">
                      {getIcon(contact.title)}
                    </div>
                    
                    {/* Text block */}
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                        {contact.title}
                      </span>
                      <span className="text-base text-slate-500 dark:text-slate-400 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {contact.value}
                      </span>
                    </div>

                    {/* Arrow */}
                    <div className="shrink-0 text-slate-300 dark:text-slate-700 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <svg className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
