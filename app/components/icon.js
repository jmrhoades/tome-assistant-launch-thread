export default function Icon(props) {
	const { size = 24, name = "sidebar-left" } = props;
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 64 64"
			style={{
				display: "block",
				overflow: "visible",
				position: "relative",
				pointerEvents: "none",
				flexShrink: 0,
				fill: "currentcolor",
			}}
		>
			
		</svg>
	);
};
