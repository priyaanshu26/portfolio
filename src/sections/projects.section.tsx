import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SectionTitle } from '../components/section-title.component';
import '../styles/projects.css';

const projects = [
    {
        title: 'AI Chat Assistant',
        description: 'An intelligent chat companion integrated with Gemini AI, featuring real-time stream processing and personalized user interactions.',
        techStack: ['Flutter', 'Firebase', 'Gemini AI'],
        github: 'https://github.com/priyaanshu26',
        live: '#',
        color: 'rgba(66, 133, 244, 0.6)'
    },
    {
        title: 'Full-Stack E-commerce',
        description: 'A scalable e-commerce platform with RBAC, JWT authentication, and real-time inventory management.',
        techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
        github: 'https://github.com/priyaanshu26',
        live: '#',
        color: 'rgba(0, 237, 100, 0.6)'
    },
    {
        title: 'Portfolio Website',
        description: 'A modern, high-performance portfolio featuring sleek animations, glassmorphism, and responsive design.',
        techStack: ['React', 'Vite', 'CSS3', 'Framer Motion'],
        github: 'https://github.com/priyaanshu26',
        live: '#',
        color: 'rgba(255, 255, 255, 0.4)'
    }
];

export const Projects = () => {
    return (
        <section
            className='projects container'
            id='projects'
        >
            <div className='projects-grid'>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className='project-card-wrapper'
                        style={{ '--clr': project.color } as React.CSSProperties}
                    >
                        <div className='project-card'>
                            <div className='project-content'>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className='tech-pills'>
                                    {project.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className='tech-pill'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className='project-links'>
                                    <a
                                        href={project.github}
                                        target='_blank'
                                        rel='noreferrer'
                                        aria-label='GitHub'
                                    >
                                        <FaGithub /> <span>Code</span>
                                    </a>
                                    <a
                                        href={project.live}
                                        target='_blank'
                                        rel='noreferrer'
                                        aria-label='Live Demo'
                                    >
                                        <FaExternalLinkAlt /> <span>Live</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <SectionTitle
                    title='Featured'
                    subTitle='PROJECTS'
                />
            </div>
        </section>
    );
};

