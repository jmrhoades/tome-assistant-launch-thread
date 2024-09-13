"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import styles from "./home.module.css";
import { diatype } from "../fonts/fonts";
import Button from "./button";
import Opportunity from "../icons/opportunity";

export default function Home({ state }) {
	return (
		<motion.div
			className={styles.home}
			initial={{ opacity: 0 }}
			animate={{ opacity: state === 0 ? 1 : 0 }}
			transition={{ duration: 0 }}

		style={{
            pointerEvents: state === 0 ? "auto" : "none"
        }}>
			<Image src={"/logos/spectral.png"} alt={"Spectral"} width={64} height={64} />
			<h2 className={`${diatype.className}`}>Spectral</h2>
			<div className={styles.meta}>
				<Button>
					<Opportunity size={20} />
					<span className="ui-label">Spectral – Closed Lost</span>
				</Button>
				<Button>
					<Image src={"/avatars/owen-tanada.jpg"} alt={"Owen Tanada"} width={18} height={18} />
					<span className="ui-label">Owen Tanada</span>
				</Button>
			</div>
		</motion.div>
	);
}
