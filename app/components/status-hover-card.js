"use client";

import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";

import { motion } from "framer-motion";

import styles from "./staus-hover-card.module.css";
import XInCircle from "../icons/x-in-circle";

export default function StatusHoverCard({ state }) {
	return (
		<HoverCard.Root openDelay={0} closeDelay={50}>
			<HoverCard.Trigger className={styles.button}>
				<button className="status-button">
					<XInCircle size={18} />
					<span className="ui-label">Closed Lost</span>
				</button>
			</HoverCard.Trigger>
			<HoverCard.Portal>
				<HoverCard.Content className={styles.card} sideOffset={10} align={"start"}>
					<section>
						<h6>Reason</h6>
						<p>Lost to competitor</p>
					</section>
					<section>
						<h6>Notes</h6>
						<p>Contact was evaluating competitors. Stopped communication.</p>
					</section>
				</HoverCard.Content>
			</HoverCard.Portal>
		</HoverCard.Root>
	);
}
