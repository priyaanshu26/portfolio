import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Education',
		items: [
			{
				title: 'Bachelor of Technology – Computer Science Engineering',
				place: 'Darshan University, Rajkot, Gujarat',
				timePeriod: 'Expected May 2027',
				description: '',
			},
			{
				title: 'Higher Secondary Certificate (HSC)',
				place: 'Om Shanti English Medium School, Morbi',
				timePeriod: 'June 2023',
				description: '',
			},
			{
				title: 'Secondary School Certificate (SSC)',
				place: 'Om Shanti English Medium School, Morbi',
				timePeriod: 'May 2020',
				description: '',
			},
		],
	},
	{
		title: 'Certification',
		items: [
			{
				title: 'Database Management Essentials',
				place: 'Coursera',
				timePeriod: '2025',
				description: '',
			},
			{
				title: 'Stack Web Development',
				place: 'Apna College',
				timePeriod: '2024',
				description: '',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p>👋 Hey, I'm Priyanshu Choudhary, a Full Stack & Flutter Developer.</p>
					<p>
						I am a Computer Science Engineering undergraduate with hands-on
						experience in <strong>Flutter, Firebase, React, Node.js, and Python</strong>.
						I focus on building scalable, user-centric applications across mobile
						and web platforms.
					</p>
					<p>
						Alongside full-stack development, I have practical exposure to
						<strong> AI-integrated systems</strong>, including implementing
						AI-powered assistants and intelligent features within applications.
						I am passionate about applying AI/ML to real-world problem solving
						and automation.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
