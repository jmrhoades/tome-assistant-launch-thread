"use client";

import * as React from "react";
import { motion } from "framer-motion";

import styles from "./page.module.css";

import { presets } from "./data/presets";

import PresetCard from "./components/preset-card";
import Promptbar from "./components/promptbar";

import Thread from "./components/thread";
import Home from "./components/home";
import Toolbar from "./components/toolbar";

export default function Index() {
	const cards = [presets[presets.length - 3], presets[presets.length - 1], presets[presets.length - 2]];

	const maxState = 2;
	const [state, setState] = React.useState(0);

	const onPresetClick = e => {
		setState(1);
	};

	const handleSubmit = input => {
		if (input.trim().length > 0) {
			setState(2);
		}
	};

	const onKeyDown = e => {
		//console.log("Key down:", e.key, e.metaKey, e.repeat);

		let stopPropagation = false;

		if (e.repeat) return;

		if (e.key === "ArrowRight") {
			setState(s => {
				let nS = s + 1;
				if (nS > maxState) nS = maxState;
				return nS;
			});
			stopPropagation = true;
		}

		if (e.key === "ArrowLeft") {
			setState(s => {
				let nS = s - 1;
				if (nS < 0) nS = 0;
				return nS;
			});
			stopPropagation = true;
		}

		if (stopPropagation) {
			e.preventDefault();
			e.stopPropagation();
		}
	};

	React.useEffect(() => {
		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.removeEventListener("keydown", onKeyDown);
		};
	}, []);

	return (
		<div className={styles.page}>
			<Toolbar />

			<main className={styles.main}>
				<Home state={state} />
				<Thread state={state} />
			</main>

			<footer className={styles.bottom}>
				{state === 0 && (
					<motion.div
						className={styles.cards}
						initial={{ opacity: 0 }}
						animate={{ opacity: state === 0 ? 1 : 0 }}
						transition={{ duration: 0.25 }}
					>
						{cards.map(o => (
							<PresetCard
								key={o.id}
								heading={o.label}
								body={o.info}
								accentColor={o.accentColor}
								icon={o.icon}
								onClick={onPresetClick}
							/>
						))}
					</motion.div>
				)}

				<Promptbar
					//input={input}
					//handleInputChange={handleInputChange}
					handleSubmit={handleSubmit}
					//handleMenuSelection={handlePresetSelection}
				/>
			</footer>
		</div>
	);
}
