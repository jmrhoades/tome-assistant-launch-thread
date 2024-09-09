export default function Building(props) {
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
			d="M15 13.9999C14.4477 13.9999 14 14.4476 14 14.9999V50.0001H32V14.9999C32 14.4476 31.5523 13.9999 31 13.9999H15ZM36 50.0001H50V28.9999C50 28.4476 49.5523 27.9999 49 27.9999H36V50.0001ZM36 23.9999V14.9999C36 12.2385 33.7614 9.99988 31 9.99988H15C12.2386 9.99988 10 12.2385 10 14.9999V52.0001C10 53.1046 10.8954 54.0001 12 54.0001H52C53.1046 54.0001 54 53.1046 54 52.0001V28.9999C54 26.2385 51.7614 23.9999 49 23.9999H36Z"
		/>
	);
};