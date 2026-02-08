type TFloatingBtn = {
	className?: string;
	label: string;
	onClick?: () => void;
	href?: string;
	download?: boolean | string;
};
export const FloatingButton = ({ label, className, href, download }: TFloatingBtn) => {
	return (
		<a
			href={href}
			className={`floating-btn ${className}`}
			download={download}
		>
			<div>{label}</div>
			<span></span>
		</a>
	);
};
