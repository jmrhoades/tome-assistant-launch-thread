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
			animate={{ opacity: state === "init" ? 1 : 0 }}
			transition={{ duration: 0.5 }}

		style={{
            pointerEvents: state === "init" ? "auto" : "none"
        }}>
			<Image src={"/logos/spectral.png"} alt={"Spectral"} width={64} height={64} />
			<h2 className={`${diatype.className}`}>Spectral</h2>
			<div className={styles.meta}>
				<Button>
					<Opportunity size={20} />
					Spectral – Closed Lost
				</Button>
				<Button>
					<Image src={"/avatars/owen-tanada.jpg"} alt={"Owen Tanada"} width={18} height={18} />
					Owen Tanada
				</Button>
			</div>
		</motion.div>
	);
}
