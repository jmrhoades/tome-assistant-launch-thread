export default function BarChart(props) {
	const { size = 20 } = props;
	return (
		<svg className={"icon"} width={size} height={size} viewBox="0 0 64 64">
			<Path />
		</svg>
	);
};

const Path = () => {
	return (
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M36 14C36 11.7909 37.7909 10 40 10H49C51.2091 10 53 11.7909 53 14V50C53 52.2091 51.2091 54 49 54H14C11.7909 54 10 52.2091 10 50V38C10 35.7909 11.7909 34 14 34H23V26C23 23.7909 24.7909 22 27 22H36V14ZM36 26H27V50H36V26ZM40 50H49V14H40V50ZM23 50V38H14V50H23Z"
		/>
	);
};