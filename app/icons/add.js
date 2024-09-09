export default function Add(props) {
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
			d="M34 14C34 12.8954 33.1046 12 32 12C30.8954 12 30 12.8954 30 14V30H14C12.8954 30 12 30.8954 12 32C12 33.1046 12.8954 34 14 34H30V50C30 51.1046 30.8954 52 32 52C33.1046 52 34 51.1046 34 50V34H50C51.1046 34 52 33.1046 52 32C52 30.8954 51.1046 30 50 30H34V14Z"
		/>
	);
};