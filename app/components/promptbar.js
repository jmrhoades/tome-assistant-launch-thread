"use client";

import * as React from "react";

import styles from "./promptbar.module.css";
import PromptbarMenu from "./promptbar-menu";
import ArrowUp from "../icons/arrow-up";

export default function Promptbar({ value = "", handleSubmit, handleMenuSelection }) {
	const ref = React.useRef();

	React.useEffect(() => {
		const rect = ref.current.getBoundingClientRect();
		document.body.style.setProperty("--promptbar-menu-width", rect.width + "px");
	}, []);

	const [input, setInput] = React.useState(value);
	const handleInputChange = e => {
		setInput(e.target.value);
	};

	return (
		<div className={styles.PromptBar} ref={ref}>
			<PromptbarMenu handleMenuSelection={handleMenuSelection} />

			<form onSubmit={handleSubmit} className={styles.TextAreaWrap}>
				<textarea
					rows={1}
					value={input}
					placeholder="Send a message…"
					onChange={handleInputChange}
					onKeyDown={e => {
						if (e.key === "Enter" && e.shiftKey == false) {
							handleSubmit(input);
							setInput("");
							e.target.parentNode.dataset.replicatedValue = "";
							e.target.blur();
							e.preventDefault();
						}
					}}
					onInput={e => {
						e.target.parentNode.dataset.replicatedValue = e.target.value;
					}}
				/>
			</form>

			<button
				className={styles.SendButton}
				disabled={input.trim().length === 0}
				onClick={e => {
					handleSubmit(input);
					setInput("");
					e.target.parentNode.dataset.replicatedValue = "";
				}}
			>
				<ArrowUp size={24} />
			</button>
		</div>
	);
}
