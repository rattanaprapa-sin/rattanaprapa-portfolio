import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { categories } from '../../../data/portfolioData';
import { 
  FaLaptopCode, FaServer, FaDatabase, FaTools,
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap,
  FaGitlab, FaGithub, FaNodeJs
} from 'react-icons/fa';
import { 
  SiExpress, SiPostgresql, 
  SiPostman, SiDbeaver
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { VscSourceControl } from 'react-icons/vsc';

const categoryIcons = {
  'Frontend': <FaLaptopCode />,
  'Backend': <FaServer />,
  'Databases': <FaDatabase />,
  'Tools & Version Control': <FaTools />,
};

const skillIcons = {
  'React': <FaReact className="text-[#61DAFB]" />,
  'HTML': <FaHtml5 className="text-[#E34F26]" />,
  'CSS': <FaCss3Alt className="text-[#1572B6]" />,
  'JavaScript': <FaJsSquare className="text-[#F7DF1E]" />,
  'Bootstrap': <FaBootstrap className="text-[#7952B3]" />,
  'Express.js (Node.js)': <FaNodeJs className="text-[#339933]" />,
  'RESTful APIs': <TbApi className="text-gray-500 dark:text-gray-400" />,
  'Microsoft SQL Server': <FaDatabase className="text-[#CC292B]" />,
  'PostgreSQL': <SiPostgresql className="text-[#336791]" />,
  'GitLab': <FaGitlab className="text-[#FCA121]" />,
  'SourceTree': <VscSourceControl className="text-[#0052CC]" />,
  'GitHub': <FaGithub className="text-[#181717] dark:text-white" />,
  'Postman': <SiPostman className="text-[#FF6C37]" />,
  'DBeaver': <SiDbeaver className="text-[#382923] dark:text-[#E2D6C8]" />,
};

// --- Magnetic Hover Card Component ---
const MagneticCard = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);
  
  // Smooth spring physics for the tilt
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  // Map mouse position to rotation angles (subtle 2 degree max tilt)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-2deg", "2deg"]);

  // Dynamic template for spotlight background (bypasses React renders)
  const background = useMotionTemplate`radial-gradient(800px circle at ${spotX}px ${spotY}px, rgba(59,130,246,0.1), transparent 40%)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Tilt tracking (-0.5 to 0.5)
    x.set((mouseX / width) - 0.5);
    y.set((mouseY / height) - 0.5);
    
    // Pixel tracking for spotlight
    spotX.set(mouseX);
    spotY.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Reset to flat position via Framer Spring
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative rounded-3xl p-[1px] bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-700/50 dark:to-slate-800/50 group ${className}`}
    >
      {/* Mouse Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background }}
      />
      
      {/* Solid Inner Box */}
      <div className="relative h-full w-full rounded-[23px] bg-white dark:bg-slate-800/95 p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] flex flex-col border border-white/50 dark:border-slate-700/30 overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
};

export default function SkillSet() {
  return (
    <section className="py-12 lg:py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden" id="skills">
      {/* Background Decorators */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500 dark:from-white dark:to-slate-400 mb-4"
          >
            My Tech Stack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            A curated list of technologies I use to build robust and beautiful applications.
          </motion.p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" 
          style={{ perspective: "1000px" }}
        >
          {categories.map((category) => {
            let colSpan = "md:col-span-1";
            if (category.title === 'Frontend' || category.title === 'Tools & Version Control') {
              colSpan = "md:col-span-2";
            }

            return (
              <MagneticCard key={category.title} className={colSpan}>
                
                {/* Category Header */}
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-sm border border-blue-100 dark:border-slate-700">
                    <span className="text-2xl">{categoryIcons[category.title] || <FaTools />}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills Badges */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {category.skills.map(skill => (
                    <div 
                      key={skill} 
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300"
                    >
                      {skillIcons[skill] && <span className="text-xl drop-shadow-sm">{skillIcons[skill]}</span>}
                      <span className="font-semibold text-sm text-slate-700 dark:text-slate-200">{skill}</span>
                    </div>
                  ))}
                </div>

              </MagneticCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
