export const projects = [
  {
    title: 'Applicant Management System',
    date: 'Jan 2026 - Apr 2026',
    description:
      'Built a web app to replace Excel for HR, helping managers track candidates and reassign tasks.',
    fullDescription:
      'Built a web app for my Senior Project to help HR manage job candidates instead of using Excel. The system stores all data in one central database, so managers can track progress through a dashboard and reassign tasks when someone is on leave.',
    challenges: [
      'Some candidates had more than one phone number, so I created a separate table to store multiple phone numbers for each person.',
      'I added a check that flags duplicate names and existing employees, alerting HR when they enter a matching name.',
    ],
    tags: ['Senior Project', 'React', 'Express.js', 'SQL Server'],
  },
  {
    title: 'Concert Ticket Booking Website',
    date: 'Aug 2025 - Nov 2025',
    description:
      'Developed a concert ticket booking platform with an interactive seating map and seat selection system.',
    fullDescription:
      'An online platform for booking concert tickets, built with a team. I was responsible for the booking flow logic, the interactive seat map, and price calculation — users can select zones and pick specific seats, with prices shown for each zone.',
    challenges: [
      'Needed to keep seat availability updated as users made selections, so I built booking logic that links each order to the selected seats and price.',
      'Built an interactive seat map showing seat availability and pricing for each zone.',
    ],
    tags: ['Python', 'Django', 'JavaScript', 'HTML/CSS'],
    imageUrl: '/Concert/4.png',
    modalImages: ['/Concert/1.png', '/Concert/2.png', '/Concert/4.png'],
  },
  {
    title: 'Movie Ticket Booking Website',
    date: 'Jan 2025 - May 2025',
    description:
      'Built a movie ticket reservation system with showtime selection and an interactive seat map.',
    fullDescription:
      'An online movie ticket booking system. I developed the frontend pages for selecting showtimes and reserving seats. Using pure JavaScript, I created a seat map that shows available seats and updates the total price automatically as users make their selections.',
    challenges: [
      "Stored each user's booking selections, such as showtime and seats, so the choices carried over between pages.",
      'Built the interface without using any external libraries.',
    ],
    tags: ['Python', 'Flask', 'JavaScript', 'HTML/CSS'],
    imageUrl: '/Movie/Home.png',
    modalImages: ['/Movie/Booking.png', '/Movie/Home.png', '/Movie/Detail.png'],
  },
  {
    title: 'Image Guessing Mobile Game',
    date: 'Jan 2024 - May 2024',
    description:
      'Developed a mobile trivia game using Thunkable, featuring a scoring system and a user-friendly interface.',
    fullDescription:
      'A mobile game where players look at image clues to guess correct words or song titles. I built the main gameplay loop, including a scoring system, a life (hearts) system, and different difficulty levels. This project helped me improve my mobile app design skills for smaller screens.',
    challenges: ['Optimized image loading and memory usage for mobile devices.'],
    tags: ['Thunkable', 'Mobile Dev'],
    imageUrl: '/Game/Game.png',
    modalImages: ['/Game/Game.png', '/Game/GameFail.png', '/Game/Shop.png'],
  },
];

export const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'TQM Insurance Broker',
    duration: 'Jan 2026 - Apr 2026',
    description: [
      'Applicant Management System: Replaced a manual, Excel-based HR hiring workflow by developing a full-stack web application. Built the user interface with React, developed backend services with Express.js, and architected the underlying database schemas using Microsoft SQL Server and DBeaver.',
      'Digital Timesheet System: Implemented the frontend architecture for an intern time-tracking system. Engineered complex conditional logic in React to gate task inputs and clock-outs based on active clock-in status, seamlessly integrating with Express.js APIs and a PostgreSQL database.',
      'Development Workflow: Maintained clean code repositories and ensured smooth version control across all active projects utilizing GitLab and SourceTree.',
    ],
  },
];

export const educationList = [
  {
    degree: 'Bachelor of Science in Information and Communication Technology',
    institution: 'Sripatum University',
    institutionUrl: 'https://www.spu.ac.th',
    duration: '2023 - 2026',
    description: 'GPA: 3.55',
  },
];

export const categories = [
  {
    title: 'Frontend',
    skills: ['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    title: 'Backend',
    skills: ['Express.js (Node.js)', 'RESTful APIs'],
  },
  {
    title: 'Databases',
    skills: ['Microsoft SQL Server', 'PostgreSQL'],
  },
  {
    title: 'Tools & Version Control',
    skills: ['GitLab', 'SourceTree', 'GitHub', 'Postman', 'DBeaver'],
  },
];

export const contacts = [
  {
    title: 'Email',
    value: 'rattanaprapa.sin@gmail.com',
    link: '#',
    action: 'copy',
  },
  {
    title: 'Location',
    value: 'Bangkok, Thailand',
    link: 'https://maps.google.com/?q=Bangkok, Thailand',
  },
  {
    title: 'LinkedIn',
    value: 'Rattanaprapa Sinkrathok',
    link: 'https://www.linkedin.com/in/rattanaprapa-sinkrathok-8ab510386',
  },
];
