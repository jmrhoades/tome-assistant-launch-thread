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

	const onPresetClick = e => {
		console.log("onPresetClick");
		setState("chat");
	};

	const [state, setState] = React.useState("init");

	return (
		<div className={styles.page}>
			<Toolbar />

			<main className={styles.main}>
				<Home state={state} />
				<Thread state={state} />
			</main>

			<footer className={styles.bottom}>

        {state === "init" && (
				<motion.div
					className={styles.cards}
					initial={{ opacity: 0 }}
					animate={{ opacity: state === "init" ? 1 : 0 }}
					transition={{ duration: 0.5 }}
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
				//handleSubmit={handleSubmit}
				//handleMenuSelection={handlePresetSelection}
				/>
			</footer>
		</div>
	);
}
