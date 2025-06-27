import {
Code2,
GraduationCap,
Briefcase,
Award,
Mail,
Phone,
Rocket,
Heart,
Coffee,
BookOpen,
Zap,
Database,
Server,
Cloud,
MapPin
} from 'lucide-react';

import  { FiGithub, FiLinkedin,FiTwitter} from 'react-icons/fi';

import PROJECT_IMG_1 from '../assets/images/project-1.png';
import PROJECT_IMG_2 from '../assets/images/project-2.png';
import PROJECT_IMG_3 from '../assets/images/project-3.png';
import PROJECT_IMG_4 from '../assets/images/project-4.png';
import PROJECT_IMG_5 from '../assets/images/project-5.png';
import PROJECT_IMG_6 from '../assets/images/project-6.png';
import PROJECT_IMG_7 from '../assets/images/project-7.png';


export const SKILLS_CATEGORIES = [
    {
        title:'Frontend',
        icon:Code2,
        description:'Building the visual and interactive elements of a website or application that users interact with directly.',
        skills: [
            { name: 'React', level: 95, color:'bg-blue-500' },
            { name: 'TypeScript', level: 90, color:'bg-blue-600' },
            { name: 'Next.js', level: 90, color:'bg-gray-800' },
            { name: 'Tailwind CSS', level: 85, color:'bg-cyan-500' },
           ],
    },
    {
        title:'Backend',
        icon:Server,
        description:'Developing the server-side logic, database interactions, and application architecture that power the frontend.',
        skills: [
            { name: 'Node.js', level: 90, color:'bg-yellow-500' },
            { name: 'Nest.js', level: 85, color:'bg-grey-700' },
            { name: 'Asp.Net', level: 95, color:'bg-green-500' },
            { name: 'Rest Api', level: 98, color:'bg-orange-500' },
           ],
    },
    {
        title:'Database',
        icon:Database,
        description:'Designing and managing databases to store, retrieve, and manipulate data efficiently.',
        skills: [
            { name: 'MongoDB', level: 90, color:'bg-green-500' },
            { name: 'PostgreSQL', level: 85, color:'bg-purple-500' },
            { name: 'MySQL', level: 80, color:'bg-blue-700' },
            { name: 'MSSql', level: 80, color:'bg-blue-700' },
           ],
    },
    {
        title:'Dev Tools',
        icon:Zap,
        description:'Utilizing tools and technologies that enhance development efficiency and collaboration.',
        skills: [
            { name: 'Git', level: 95, color:'bg-red-500' },
            { name: 'Docker', level: 85, color:'bg-blue-500' },
            { name: 'CI/CD', level: 80, color:'bg-yellow-600' },
           ],
    },
    {
        title:'DevOps',
        icon:Cloud,
        description:'Managing the deployment, scaling, and monitoring of applications in production environments.',
        skills: [
            { name: 'Docker', level: 85, color:'bg-blue-500' },
            { name: 'Kubernetes', level: 80, color:'bg-blue-600' },
            { name: 'AWS', level: 75, color:'bg-blue-700' },
           ],
    },
    {
        title:'Design',
        icon:Heart,
        description:'Creating visually appealing and user-friendly interfaces through design principles and tools.',
        skills: [
            { name: 'Figma', level: 90, color:'bg-pink-500' },
            { name: 'Adobe XD', level: 85, color:'bg-pink-600' },
           ],
    }
]

export const TECH_STACK = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Nest.js",
    "Asp.Net",
    "Rest Api",
    "MongoDB",
    "PostgreSQL",
    "Slack",
    "Teams",
    "Xunit",
    "Git",
    "Docker",
    "Podman",
    "Github Actions",
    "Azure DevOps",
] 

export const PROJECTS = [
    {
        id:1,
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce application with user authentication, product management, and payment processing.',
        image: PROJECT_IMG_1,
        tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
        category: 'Full Stack',
    },
    {
        id:2,
        title: 'Portfolio Website',
        description: 'A personal portfolio website showcasing my projects, skills, and experience.',
        image: PROJECT_IMG_2,
        tags: ['Next.js', 'Tailwind CSS'],
        liveUrl: '#',
        githubUrl: '#',
        featured: true,
        category: 'Frontend',
    },
    {
        id:3,
        title: 'Blog Platform',
        description: 'A blogging platform with user authentication, post creation, and commenting features.',
        image: PROJECT_IMG_3,
        tags: ['React', 'Node.js', 'MongoDB'],
        liveUrl: '#',
        githubUrl: '#',
        featured: false,
        category: 'Full Stack',
    },
    {
        id:4,
        title: 'Real-time Chat Application',
        description: 'A real-time chat application with user authentication and message broadcasting.',
        image: PROJECT_IMG_4,
        tags: ['React', 'Socket.io', 'Node.js'],
        liveUrl: '#',
        githubUrl: '#',
        featured: true,
        category: 'Full Stack',
    },
    {
        id:5,
        title: 'Task Management Tool',
        description: 'A task management tool for teams to collaborate on projects and track progress.',
        image: PROJECT_IMG_5,
        tags: ['React', 'Node.js', 'PostgreSQL'],
        liveUrl: 'https://task-manager.com',
        githubUrl: '#',
        featured: false,
        category: 'Full Stack',
    },
    {
        id:6,
        title:'Weather App',
        description:'A weather application that provides real-time weather updates and forecasts.',
        image:PROJECT_IMG_6,
        tags:['React', 'API Integration'],
        liveUrl:'#',
        githubUrl:'#',
    },
    {
      id:7,
      title:'Social Media Dashboard',
      description:'A dashboard for managing social media accounts and analyzing engagement metrics.',
      image:PROJECT_IMG_7,
      tags:['React', 'API Integration'],
      liveUrl:'#',
      githubUrl:'#',
    }
]

export const JOURNEY_STEPS = [
    {
        year: '2018',
        title: 'Started Learning Web Development',
        company: 'Self-taught',
        description: 'Began my journey into web development with HTML, CSS, and JavaScript.',
        icon: GraduationCap,
        color: 'bg-blue-500',
    },
    {
        year: '2019',
        title: 'First Internship',
        company: 'Tech Startup',
        description: 'Gained practical experience in web development and learned about version control with Git.',
        icon: Briefcase,
        color: 'bg-green-500',
    },
    {
        year: '2020',
        title: 'Joined a Software Company',
        company: 'Web Solutions Inc.',
        description: 'Worked on various projects, focusing on frontend development with React.',
        icon: Award,
        color: 'bg-yellow-500',
    },
    {
        year: '2021',
        title: 'Freelancing and Open Source Contributions',
        company: 'Freelancer',
        description: 'Contributed to open source projects and worked on freelance web development projects.',
        icon: Mail,
        color: 'bg-purple-500',
    },
    {
        year: '2022',
        title: 'Full Stack Developer Role',
        company: 'Tech Innovations Ltd.',
        description: 'Transitioned to a full stack developer role, working with Node.js and MongoDB.',
        icon: Phone,
        color:'bg-red-500'
    },
    {
        year: '2023',
        title: 'Current Position',
        company: 'Global Tech Solutions',
        description: 'Currently working as a Senior Full Stack Developer, leading projects and mentoring junior developers.',
        icon: Rocket,
        color: 'bg-orange-500',
    },
    {
        year: '2024',
        title: 'Continuous Learning',
        company: 'Self-improvement',
        description: 'Continuously learning new technologies and improving my skills in web development.',
        icon: BookOpen,
        color: 'bg-teal-500',
    },
    {
        year: '2025',
        title: 'Future Aspirations',
        company: 'Tech Enthusiast',
        description: 'Aiming to become a tech lead and contribute to innovative projects in the tech industry.',
        icon: MapPin,
        color: 'bg-indigo-500',
    }
]

export const PASSION=[
    {
        icon:Heart,
        title:'Passionate about coding',
        description:'I love solving problems and building applications that make a difference.',
    },
    
    {
        icon:Coffee,
        title:'Coffee Enthusiast',
        description:'Fueling my coding sessions with a good cup of coffee.',
    },
    {
        icon:BookOpen,
        title:'Continuous Learner',
        description:'Always exploring new technologies and improving my skills.',
    },
    {
        icon:Zap,
        title:'Tech Innovator',
        description:'Excited about the future of technology and its impact on society.',
    }
]
export const SOCIAL_LINKS = [
    {
        name: 'GitHub',
        icon: FiGithub,
        url: '#',
        color:'hover:text-gray-400',
        bgColor:'hover:bg-gray-800',
    },
    
    {
        name: 'LinkedIn',
        icon: FiLinkedin,
        url: '#',
        color:'hover:text-blue-600',
        bgColor:'hover:bg-blue-50',
    },
    {
        name: 'Twitter',
        icon: FiTwitter,
        url: '#',
        color:'hover:text-blue-400',
        bgColor:'hover:bg-blue-50',
    }

]
export const CONTACT_INFO = [
    {
        icon: MapPin,
        title: 'Location',
        value: 'Stockholm , Sweden',
    },
    {
        icon: Mail,
        title: 'Email',
        value: 'xxx@sss.sss',
    },
    {
        icon: Phone,
        title: 'Phone',
        value: '+46 123 456 789',
    },
]