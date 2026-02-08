import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

type PropsType = {
	color: string;
	icon: React.ReactNode;
	href: string;
	label?: string;
} & DetailedHTMLProps<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
>;
export const GlowLink = ({ color, icon, href, label, ...props }: PropsType) => {
	return (
		<div className='glow-box-parent'>
			<div className='glow-box-title'>{label}</div>
			<a
				target='_blank'
				href={href}
				className='glow-box glow-link'
				style={{
					'--clr': color,
				}}
				{...props}
			>
				{icon}
			</a>
		</div>
	);
};
