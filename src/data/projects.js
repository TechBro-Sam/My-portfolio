// Mock data for projects section
export const projects = [
    {
    id:1,
    title: "Health & Fitness Tracker",
    category: "mobile",
    shortDescription: "A mobile fitness app built with Flutter, featuring workout tracking and analytics.",
    description: "A comprehensive health and fitness mobile application that allows users to track workouts, nutrition, and progress over time. The app includes custom workout routines, nutrition tracking, and integration with wearable devices.",
    technologies: ["Flutter", "Dart", "Firebase", "Health APIs"],
    features: [
      "Personalized workout and meal plans",
      "Progress tracking with visual charts and statistics",
      "Integration with Apple Health and Google Fit",
      "Social features for workout sharing and challenges",
      "Offline workout logging capability"
    ],
    challenges: "Integrating with various health platforms and wearable devices required handling multiple APIs and data formats. Ensuring data privacy and security for sensitive health information was also a significant focus of the development process.",
    liveUrl: "#",
    repoUrl: "https://github.com/"
  },
  {
    id: 2,
    title: "Creative Portfolio Website",
    category: "web",
    shortDescription: "A designer portfolio website with advanced animations and interactive elements.",
    description: "A cutting-edge portfolio website for a digital artist featuring advanced animations, interactive page transitions, and a performant image gallery. The site incorporates WebGL effects and dynamic content loading for an engaging user experience.",
    technologies: ["React", "Three.js", "GSAP", "Framer Motion", "Sanity CMS"],
    features: [
      "Custom WebGL animations and effects",
      "Smooth page transitions using Framer Motion",
      "Dynamic image galleries with lazy loading",
      "CMS integration for content management",
      "Responsive design with mobile-specific interactions"
    ],
    challenges: "Balancing impressive visual effects with performance was a key challenge. We implemented code splitting, asset optimization, and selective animation rendering based on device capabilities to ensure a smooth experience across all devices.",
    liveUrl: "#",
    repoUrl: "https://github.com/"
  },
  {
    id: 3,
    title: "Task Management Platform",
    category: "web",
    shortDescription: "A collaborative task management web application with real-time updates.",
    description: "A comprehensive task management system designed for remote teams. Features include real-time collaboration, document sharing, timeline views, and automated workflow capabilities to enhance team productivity.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    features: [
      "Real-time task updates and collaboration",
      "Kanban, list, and calendar views",
      "Document attachment and preview functionality",
      "Automated workflows and reminders",
      "Team performance analytics dashboard"
    ],
    challenges: "Implementing real-time synchronization across multiple clients while maintaining data consistency required careful architecture planning. We used a combination of WebSockets for live updates and a robust state management system to ensure data integrity.",
    liveUrl: "#",
    repoUrl: "https://github.com/"
  },
  {
    id: 4,
    title: "Food Reciepe web-site",
    category: "ui",
    shortDescription: "A suite of interactive data visualization components for complex datasets.",
    description: "A library of modular, customizable data visualization components designed for integration into financial and scientific applications. The suite includes interactive charts, graphs, and specialized visualization tools for complex data analysis.",
    technologies: ["React.js", "jsx", "React", "SVG", "Canvas"],
    features: [
      "Interactive charts with drill-down capabilities",
      "Dynamic data filtering and sorting",
      "Animation and transition effects",
      "Responsive design that adapts to container size",
      "Accessibility features for screen readers"
    ],
    challenges: "Creating visualizations that are both visually engaging and accessible required innovative approaches. We implemented custom keyboard navigation, ARIA attributes, and alternative text descriptions while maintaining the interactive nature of the visualizations.",
    liveUrl: "#",
    repoUrl: "https://github.com/"
  }
];