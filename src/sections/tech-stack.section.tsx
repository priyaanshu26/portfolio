import { motion } from 'framer-motion';
import {
	BiLogoCPlusPlus,
	BiLogoPostgresql,
	BiLogoPython,
	BiLogoTypescript,
} from 'react-icons/bi';
import { DiMongodb, DiSqllite } from 'react-icons/di';
import {
	FaFigma,
	FaGitAlt,
	FaGithub,
	FaJava,
	FaNodeJs,
	FaReact,
	FaRobot,
} from 'react-icons/fa';
import { RiFlutterFill } from 'react-icons/ri';
import {
	SiAnaconda,
	SiCanva,
	SiCss3,
	SiDart,
	SiExpress,
	SiFirebase,
	SiFlask,
	SiGooglecloud,
	SiHtml5,
	SiJavascript,
	SiNetlify,
	SiNextdotjs,
	SiPrisma,
	SiScikitlearn,
	SiStreamlit,
	SiTailwindcss,
	SiVercel,
} from 'react-icons/si';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'Programming Languages',
		items: [
			{
				title: 'JavaScript',
				icon: <SiJavascript color='rgb(247, 223, 30)' />,
				color: 'rgba(247, 223, 30, 0.6)',
			},
			{
				title: 'TypeScript',
				icon: <BiLogoTypescript color='rgb(0, 122, 204)' />,
				color: 'rgba(0, 122, 204, 0.6)',
			},
			{
				title: 'Python',
				icon: <BiLogoPython color='rgb(255, 224, 82)' />,
				color: 'rgb(255, 224, 82, 0.6)',
			},
			{
				title: 'Dart',
				icon: <SiDart color='rgb(0, 129, 203)' />,
				color: 'rgb(0, 129, 203, 0.6)',
			},
			{
				title: 'Java',
				icon: <FaJava color='rgb(237, 30, 36)' />,
				color: 'rgba(237, 30, 36, 0.6)',
			},
			{
				title: 'C',
				icon: <BiLogoCPlusPlus color='rgb(0, 89, 156)' />,
				color: 'rgba(0, 89, 156, 0.6)',
			},
		],
	},
	{
		heading: 'Frontend & App Dev',
		items: [
			{
				title: 'Flutter',
				icon: <RiFlutterFill color='rgb(0, 182, 255)' />,
				color: 'rgba(0, 182, 255, 0.6)',
			},
			{
				title: 'React JS',
				icon: <FaReact color='rgb(97, 219, 251)' />,
				color: 'rgb(97, 219, 251, 0.6)',
			},
			{
				title: 'Next JS',
				icon: <SiNextdotjs color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'Tailwind CSS',
				icon: <SiTailwindcss color='rgb(6, 182, 212)' />,
				color: 'rgb(6, 182, 212, 0.7)',
			},
			{
				title: 'HTML5',
				icon: <SiHtml5 color='rgb(227, 79, 38)' />,
				color: 'rgba(227, 79, 38, 0.6)',
			},
			{
				title: 'CSS3',
				icon: <SiCss3 color='rgb(21, 114, 182)' />,
				color: 'rgba(21, 114, 182, 0.6)',
			},
		],
	},
	{
		heading: 'Backend & Databases',
		items: [
			{
				title: 'Node JS',
				icon: <FaNodeJs color='rgb(104, 160, 99)' />,
				color: 'rgb(104, 160, 99)',
			},
			{
				title: 'Express JS',
				icon: <SiExpress color='rgba(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'Flask',
				icon: <SiFlask color='rgba(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'Firebase',
				icon: <SiFirebase color='rgb(255, 202, 40)' />,
				color: 'rgb(255, 202, 40, 0.6)',
			},
			{
				title: 'MongoDB',
				icon: <DiMongodb color='rgb(0, 237, 100)' />,
				color: 'rgb(0, 237, 100, 0.7)',
			},
			{
				title: 'Postgres',
				icon: <BiLogoPostgresql color='rgb(51, 103, 145)' />,
				color: 'rgba(51, 103, 145, 0.6)',
			},
			{
				title: 'SQLite',
				icon: <DiSqllite color='rgb(0, 124, 191)' />,
				color: 'rgb(0, 124, 191, 0.6)',
			},
			{
				title: 'Prisma',
				icon: <SiPrisma color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
		],
	},
	{
		heading: 'AI & Data Science',
		items: [
			{
				title: 'scikit-learn',
				icon: <SiScikitlearn color='rgb(247, 147, 30)' />,
				color: 'rgba(247, 147, 30, 0.6)',
			},
			{
				title: 'Anaconda',
				icon: <SiAnaconda color='rgb(68, 179, 64)' />,
				color: 'rgba(68, 179, 64, 0.6)',
			},
			{
				title: 'Streamlit',
				icon: <SiStreamlit color='rgb(255, 75, 75)' />,
				color: 'rgba(255, 75, 75, 0.6)',
			},
			{
				title: 'AI Assistants',
				icon: <FaRobot color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
		],
	},
	{
		heading: 'Tools & DevOps',
		items: [
			{
				title: 'Git',
				icon: <FaGitAlt color='rgb(240, 80, 50)' />,
				color: 'rgba(240, 80, 50, 0.6)',
			},
			{
				title: 'GitHub',
				icon: <FaGithub color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'Google Cloud',
				icon: <SiGooglecloud color='rgb(66, 133, 244)' />,
				color: 'rgb(66, 133, 244, 0.6)',
			},
			{
				title: 'Vercel',
				icon: <SiVercel color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'Netlify',
				icon: <SiNetlify color='rgb(0, 189, 184)' />,
				color: 'rgba(0, 189, 184, 0.6)',
			},
			{
				title: 'Figma',
				icon: <FaFigma color='rgb(242, 78, 30)' />,
				color: 'rgba(242, 78, 30, 0.6)',
			},
			{
				title: 'Canva',
				icon: <SiCanva color='rgb(0, 196, 204)' />,
				color: 'rgba(0, 196, 204, 0.6)',
			},
		],
	},
];

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				<SectionTitle
					title='Tech'
					subTitle='STACK'
				/>
			</motion.div>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: index * 0.15 }}
					>
						<p>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};
