type TFloatingBtn = {
	className?: string;
	label: string;
	onClick?: () => void;
	href?: string;
	download?: boolean | string;
	target?: string;
	rel?: string;
};
export const FloatingButton = ({
	label,
	className,
	href,
	download,
	target,
	rel,
}: TFloatingBtn) => {
	return (
		<a
			href={href}
			className={`floating-btn ${className}`}
			download={download}
			target={target}
			rel={rel}
		>
			<div>{label}</div>
			<span></span>
		</a>
	);
};
