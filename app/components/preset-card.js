"use client";

import styles from "./preset-card.module.css";

export default function PresetCard({ icon, accentColor, heading, body, onClick }) {
	return (
		<button className={styles.Card} onClick={onClick}>
			<div className={styles.Icon} style={{ color: accentColor }}>
				{icon}
			</div>
			<div className={styles.Text}>
				<h4 className={styles.Heading}>{heading}</h4>
				<p className={styles.Body}>{body}</p>
			</div>
		</button>
	);
}
