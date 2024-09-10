"use client";

import styles from "./toolbar.module.css";
import Button from "./button";

import Add from "../icons/add";
import SidebarLeft from "../icons/sidebar-left";
import Clock from "../icons/clock";

export default function Toolbar() {
	return (
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
	);
}
