export const projects = [
  {
    title: "Candidate Pool Management System",
    date: "Jan 2026 - Apr 2026",
    description: "Built a web app with React and Express.js to replace manual Excel files, making the hiring process much faster for HR.",
    fullDescription: "A web app built for my Senior Project to help HR manage job candidates easily. I replaced their old, messy Excel system with a modern React and Express.js app. It includes candidate filtering, status tracking, and automated emails, which saves HR a lot of time.",
    challenges: [
      "Designed a well-organized SQL Server database so the app can search for candidate data quickly.",
      "Managed complex filtering and sorting in React to help users find the right candidates easily."
    ],
    tags: ["Senior Project", "React", "Express.js", "SQL Server"],
  },
  {
    title: "Concert Ticket Booking Website",
    date: "Jun 2025 - Jul 2025",
    description: "A web app for booking concert tickets. I set up the core system, built the interactive seat map, and handled the booking process.",
    fullDescription: "An online platform for booking concert tickets. I built the core system and main booking pages, letting users select a zone and pick seats from an interactive map with prices updating instantly. \n\n Sold seats are automatically blocked to prevent double bookings, even when multiple users are booking at the same time.",
    challenges: [
      "Prevented double-booking in Django by handling concurrent seat selections safely.",
      "Built an interactive seat map with HTML, CSS, and JavaScript showing available, selected, and sold seats."
    ],
    tags: ["Python", "Django", "JavaScript", "HTML/CSS"],
    imageUrl: "/Concert/4.png"
  },
  {
    title: "Movie Ticket Booking Website",
    date: "Jan 2025 - May 2025",
    description: "A web app for booking movie tickets. I focused on building the showtime selection and seat reservation features.",
    fullDescription: "An online movie ticket booking system. I built the pages where users choose showtimes and reserve their seats. \n\n I created an interactive seat map using JavaScript that clearly shows available seats, and the total price updates automatically as users click.",
    challenges: [
      "Used Flask to stop the same seat from being booked by two different users at the same time.",
      "Built a smooth, easy-to-use seat selection screen with HTML, CSS, and plain JavaScript (no extra libraries)."
    ],
    tags: ["Python", "Flask", "JavaScript", "HTML/CSS"],
    imageUrl: "/Movie/Home.png",
    modalImages: [
      "/Movie/Booking.png",
      "/Movie/Home.png",
      "/Movie/Detail.png"
    ]
  },
  {
    title: "Image Guessing Mobile Game",
    date: "Jan 2024 - May 2024",
    description: "A mobile game built with Thunkable. I created the core gameplay, scoring, life system, and user interface.",
    fullDescription: "A mobile game where players look at image clues and guess the correct word or song title. \n\n I built the main gameplay features, including a scoring system, a life (hearts) system, and increasing difficulty levels. \n\n This project helped me learn mobile app development and how to design clear user interfaces for small screens.",
    challenges: [
      "Optimized image loading time and memory usage to keep the game running smoothly on mobile devices."
    ],
    tags: ["Thunkable", "Mobile Dev"],
    imageUrl: "/Game/Game.png",
    modalImages: [
      "/Game/Game.png",
      "/Game/GameFail.png",
      "/Game/Shop.png"
    ]
  }
];

export const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "TQM Insurance Broker",
    duration: "Jan 2026 - Apr 2026",
    description: [
      "Developed a full-stack Candidate Pool management system utilizing VS Code, React, and Express.js to replace manual Excel-based tracking, streamlining the HR hiring workflow.",
      "Architected database schemas with Microsoft SQL Server and efficiently managed data queries and database administration using DBeaver.",
      "Implemented the frontend architecture for a digital intern Timesheet system using React, integrating with Express.js APIs—rigorously tested via Postman—and a PostgreSQL database for seamless data synchronization.",
      "Maintained efficient version control and collaborative workflows across all projects by utilizing GitLab and SourceTree."
    ]
  }
];

export const educationList = [
  {
    degree: "Bachelor of Science in Information and Communication Technology",
    institution: "Sripatum University",
    institutionUrl: "https://www.spu.ac.th",
    duration: "2023 - 2026",
    description: "GPA: 3.54"
  }
];

export const categories = [
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "JavaScript", "Bootstrap"]
  },
  {
    title: "Backend",
    skills: [".NET", "Express.js (Node.js)", "RESTful APIs"]
  },
  {
    title: "Databases",
    skills: ["Microsoft SQL Server", "PostgreSQL"]
  },
  {
    title: "Tools & Version Control",
    skills: ["VS Code", "GitLab", "SourceTree", "Git", "Postman", "DBeaver", "Figma"]
  }
];

export const contacts = [
  {
    title: "Email",
    value: "rattanaprapa.sin@gmail.com",
    link: "#",
    action: "copy"
  },
  {
    title: "Phone",
    value: "099-062-6040",
    link: "#",
    action: "copy"
  },
  {
    title: "Location",
    value: "Chatuchak, Bangkok",
    link: "https://maps.google.com/?q=Chatuchak, Bangkok"
  },
  {
    title: "LinkedIn",
    value: "LinkedIn Profile",
    link: "https://www.linkedin.com/in/rattanaprapa-sinkrathok-8ab510386"
  }
];
