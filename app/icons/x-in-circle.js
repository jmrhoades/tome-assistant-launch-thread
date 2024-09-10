export default function XInCircle(props) {
	const { size = 20 } = props;
	return (
		<svg className={"icon"} width={size} height={size} viewBox="0 0 64 64">
			<Path />
		</svg>
	);
}

const Path = () => {
	return (
		<>
			<path d="M22.5858 22.5858C23.3668 21.8047 24.6332 21.8047 25.4142 22.5858L32 29.1716L38.5858 22.5858C39.3668 21.8047 40.6332 21.8047 41.4142 22.5858C42.1953 23.3668 42.1953 24.6332 41.4142 25.4142L34.8284 32L41.4142 38.5858C42.1953 39.3668 42.1953 40.6332 41.4142 41.4142C40.6332 42.1953 39.3668 42.1953 38.5858 41.4142L32 34.8284L25.4142 41.4142C24.6332 42.1953 23.3668 42.1953 22.5858 41.4142C21.8047 40.6332 21.8047 39.3668 22.5858 38.5858L29.1716 32L22.5858 25.4142C21.8047 24.6332 21.8047 23.3668 22.5858 22.5858Z" />
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M8 32C8 18.7452 18.7452 8 32 8C45.2548 8 56 18.7452 56 32C56 45.2548 45.2548 56 32 56C18.7452 56 8 45.2548 8 32ZM32 12C20.9543 12 12 20.9543 12 32C12 43.0457 20.9543 52 32 52C43.0457 52 52 43.0457 52 32C52 20.9543 43.0457 12 32 12Z"
			/>
		</>
	);
};
