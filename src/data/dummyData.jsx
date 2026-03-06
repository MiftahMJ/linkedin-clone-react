export const currentUser = {
  id: 1,
  name: "Your Name",
  title: "MERN Stack Developer | React | Node.js | MongoDB",
  avatar: "YN",
  coverImage: null,
  location: "Chiniot, Punjab, Pakistan",
  connections: 500,
  profileViews: 142,
  postImpressions: 1204,
  bio: "Passionate full-stack developer specializing in MERN stack. Building scalable web applications.",
  experience: [
    {
      id: 1,
      title: "MERN Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      startDate: "Jan 2023",
      endDate: "Present",
      description: "Building modern web applications using React, Node.js, and MongoDB"
    }
  ],
  education: [
    {
      id: 1,
      school: "University of Engineering",
      degree: "Bachelor of Computer Science",
      startDate: "2019",
      endDate: "2023"
    }
  ],
  skills: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "TypeScript", "TailwindCSS"]
};

export const posts = [
  {
    id: 1,
    author: {
      id: 2,
      name: "Sarah Johnson",
      title: "Senior Software Engineer at Google",
      avatar: "SJ"
    },
    content: "Excited to share that our team just launched a new feature that improves user experience by 40%! Big thanks to everyone involved. 🚀\n\n#WebDevelopment #TeamWork #Innovation",
    image: null,
    timestamp: "2h ago",
    likes: 124,
    comments: 15,
    shares: 8,
    liked: false
  },
  {
    id: 2,
    author: {
      id: 3,
      name: "Michael Chen",
      title: "Product Manager at Microsoft",
      avatar: "MC"
    },
    content: "Just completed an amazing workshop on AI and Machine Learning. The future of technology is incredibly exciting!\n\nKey takeaways:\n✅ AI integration in everyday apps\n✅ Ethical considerations\n✅ Future career opportunities\n\n#AI #MachineLearning #TechTrends",
    image: null,
    timestamp: "5h ago",
    likes: 89,
    comments: 12,
    shares: 5,
    liked: true
  },
  {
    id: 3,
    author: {
      id: 4,
      name: "Emily Rodriguez",
      title: "UX Designer at Figma",
      avatar: "ER"
    },
    content: "Design tip of the day: Always prioritize user feedback over your personal preferences. The best designs solve real problems! 💡\n\n#UXDesign #ProductDesign #UserExperience",
    image: null,
    timestamp: "1d ago",
    likes: 203,
    comments: 28,
    shares: 15,
    liked: false
  }
];

export const connections = [
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Senior Software Engineer at Google",
    avatar: "SJ",
    mutualConnections: 12,
    connected: true
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Product Manager at Microsoft",
    avatar: "MC",
    mutualConnections: 8,
    connected: true
  },
  {
    id: 5,
    name: "David Kim",
    title: "Full Stack Developer at Amazon",
    avatar: "DK",
    mutualConnections: 5,
    connected: false
  }
];

export const suggestedConnections = [
  {
    id: 6,
    name: "Alex Thompson",
    title: "Frontend Developer at Netflix",
    avatar: "AT",
    mutualConnections: 15
  },
  {
    id: 7,
    name: "Jennifer Lee",
    title: "DevOps Engineer at Tesla",
    avatar: "JL",
    mutualConnections: 7
  },
  {
    id: 8,
    name: "Robert Martinez",
    title: "Backend Developer at Spotify",
    avatar: "RM",
    mutualConnections: 10
  }
];

export const jobs = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "Tech Corp",
    location: "Remote",
    type: "Full-time",
    logo: "TC",
    postedDate: "2 days ago",
    applicants: 45,
    description: "Looking for an experienced React developer to join our growing team."
  },
  {
    id: 2,
    title: "MERN Stack Developer",
    company: "Startup Inc",
    location: "Lahore, Pakistan",
    type: "Full-time",
    logo: "SI",
    postedDate: "1 week ago",
    applicants: 78,
    description: "Join our innovative team building cutting-edge web applications."
  },
  {
    id: 3,
    title: "Node.js Backend Developer",
    company: "Digital Solutions",
    location: "Karachi, Pakistan",
    type: "Contract",
    logo: "DS",
    postedDate: "3 days ago",
    applicants: 32,
    description: "We need a skilled backend developer for our exciting new project."
  }
];

export const notifications = [
  {
    id: 1,
    type: "connection",
    user: { name: "Sarah Johnson", avatar: "SJ" },
    message: "accepted your connection request",
    timestamp: "2h ago",
    read: false
  },
  {
    id: 2,
    type: "like",
    user: { name: "Michael Chen", avatar: "MC" },
    message: "liked your post",
    timestamp: "5h ago",
    read: false
  },
  {
    id: 3,
    type: "comment",
    user: { name: "Emily Rodriguez", avatar: "ER" },
    message: "commented on your post",
    timestamp: "1d ago",
    read: true
  },
  {
    id: 4,
    type: "job",
    message: "New job postings match your profile",
    timestamp: "2d ago",
    read: true
  }
];

export const messages = [
  {
    id: 1,
    user: { id: 2, name: "Sarah Johnson", avatar: "SJ", online: true },
    lastMessage: "Thanks for connecting! Let's discuss the project.",
    timestamp: "10m ago",
    unread: 2
  },
  {
    id: 2,
    user: { id: 3, name: "Michael Chen", avatar: "MC", online: false },
    lastMessage: "Sure, I'll send you the details tomorrow.",
    timestamp: "2h ago",
    unread: 0
  },
  {
    id: 3,
    user: { id: 4, name: "Emily Rodriguez", avatar: "ER", online: true },
    lastMessage: "Great work on the design!",
    timestamp: "1d ago",
    unread: 0
  }
];
