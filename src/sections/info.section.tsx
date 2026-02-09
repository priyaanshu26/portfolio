import {
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaTelegramPlane,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoMailOutline } from 'react-icons/io5';

import { FloatingButton } from '../components/floating-button';
import { GlowLink } from '../components/glow-box-link';
import { TextHover } from '../components/text-hover.component';

export const InfoSection = () => {
	return (
		<div className='hero-section'>
			<FloatingButton
				label='About Me'
				className='first'
				href={`${import.meta.env.BASE_URL}#about-me`}
			/>
			<FloatingButton
				label='Projects'
				className='third'
				href={`${import.meta.env.BASE_URL}#projects`}
			/>
			<p>Hi, I am</p>
			<TextHover
				text='PRIYANSHU'
				className='name'
			/>
			<p>Software Engineer</p>
			<FloatingButton
				label='Tech'
				className='sec'
				href={`${import.meta.env.BASE_URL}#tech-stack`}
			/>
			<FloatingButton
				label='Download CV'
				className='fourth'
				href='/CV.pdf'
				download='Priyanshu_Choudhary_CV.pdf'
			/>

			<div className='blur'></div>
			<div className='bottom-bar'>
				<GlowLink
					href='https://github.com/priyaanshu26'
					color='rgba(255, 255, 255, 0.4)'
					icon={<FaGithub color='rgba(255, 255, 255,0.9)' />}
					aria-label='github'
					label='GitHub'
				/>
				<GlowLink
					href='https://www.linkedin.com/in/chaudharypriyanshu'
					color='rgb(0, 160, 220, 0.6)'
					icon={<FaLinkedinIn color='rgb(0, 160, 220)' />}
					aria-label='linkedin'
					label='LinkedIn'
				/>
				<GlowLink
					href='https://www.instagram.com/priyaanshu_26'
					color='rgba(225, 48, 108, 0.6)'
					icon={<FaInstagram color='rgb(225, 48, 108)' />}
					aria-label='instagram'
					label='Instagram'
				/>
				<GlowLink
					href='https://t.me/priyaanshu26'
					color='rgba(0, 136, 204, 0.6)'
					icon={<FaTelegramPlane color='rgb(0, 136, 204)' />}
					aria-label='telegram'
					label='Telegram'
				/>
				<GlowLink
					href='https://x.com/priyanshu_5534'
					color='rgba(255, 255, 255, 0.4)'
					icon={<FaXTwitter color='rgba(255, 255, 255, 0.9)' />}
					aria-label='x'
					label='X (Twitter)'
				/>
				<GlowLink
					href='mailto:priyanshu.171561@gmail.com'
					icon={<IoMailOutline color='rgb(255, 60, 60)' />}
					color=' rgb(255, 60, 60, 0.7)'
					aria-label='mail'
					label='Mail'
				/>
			</div>
		</div>
	);
};


