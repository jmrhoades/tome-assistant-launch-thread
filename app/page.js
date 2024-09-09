'use client'

import Image from "next/image";
import styles from "./page.module.css";

import { diatype } from "./fonts/fonts";
import { presets } from "./data/presets";

import PresetCard from "./components/preset-card";
import Promptbar from "./components/promptbar";

import Button from "./components/button";
import Add from "./icons/add";
import SidebarLeft from "./icons/sidebar-left";
import Clock from "./icons/clock";
import Opportunity from "./icons/opportunity";

export default function Home() {
	const cards = [presets[presets.length - 3], presets[presets.length - 1], presets[presets.length - 2]];

	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<div className={styles.headerLeft}>
					<Button>
            <SidebarLeft size={24} />
					</Button>

					<Button>
            <Add size={24} />
					</Button>
				</div>
				<div className={styles.headerRight}>
					<Button>
            <Clock size={24} />
					</Button>
				</div>
			</header>
			<main className={styles.main}>
				<div className={styles.home}>
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
				</div>
			</main>
			<footer className={styles.bottom}>
				<div className={styles.cards}>
					{cards.map(o => (
						<PresetCard key={o.id} heading={o.label} body={o.info} accentColor={o.accentColor} icon={o.icon} />
					))}
				</div>

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
