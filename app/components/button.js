'use client'

export default function Button(props) {
	const { size = 24, name = "sidebar-left-outline" } = props;
	return <button>{props.children}</button>;
};
