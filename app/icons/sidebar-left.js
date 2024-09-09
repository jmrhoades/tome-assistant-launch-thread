export default function SidebarLeft(props) {
	const { size = 20 } = props;
	return (
		<svg className={"icon"} width={size} height={size} viewBox="0 0 64 64">
			<Path />
		</svg>
	);
}

const Path = () => {
	return (
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M8 20C8 15.5817 11.5817 12 16 12H48C52.4183 12 56 15.5817 56 20V44C56 48.4183 52.4183 52 48 52H16C11.5817 52 8 48.4183 8 44V20ZM12 20C12 17.7909 13.7909 16 16 16H23C23.5523 16 24 16.4477 24 17V47C24 47.5523 23.5523 48 23 48H16C13.7909 48 12 46.2091 12 44V20ZM29 16C28.4477 16 28 16.4477 28 17V47C28 47.5523 28.4477 48 29 48H48C50.2091 48 52 46.2091 52 44V20C52 17.7909 50.2091 16 48 16H29Z"
		/>
	);
};
