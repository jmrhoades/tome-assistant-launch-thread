"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import Clock from "../icons/clock";
import XInCircle from "../icons/x-in-circle";
import styles from "./thread.module.css";
import { diatype, diatypeMono } from "../fonts/fonts";
import StatusHoverCard from "./status-hover-card";

export default function Thread({ state }) {
	return (
		<div
			className={`${diatype.className} ${styles.thread} ${diatypeMono.variable}`}
			style={{
				pointerEvents: state !== "init" ? "auto" : "none",
			}}
		>
			<div className={styles.threadscroller}>
				<motion.div
					className={styles.threadcontent}
					initial={{ opacity: 0 }}
					animate={{ opacity: state !== "init" ? 1 : 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className={styles.user}>Company Overview</div>

					<div className={styles.system}>
						<h2>Spectral Account Overview</h2>
						<div className={styles.meta}>
							<StatusHoverCard />
							<button>
								<Clock size={18} /> 9 months ago
							</button>
						</div>

						<h3>Overview</h3>

						<p>
							Spectral is a premier financial institution that offers innovative banking and financial services
							to individuals and businesses globally. Established in 2009, Spectral has grown to become a trusted
							name in the banking sector, with headquarters in New York City, New York, and London, United
							Kingdom.
							<span className={styles.refgroup}>
								<a href="#" className={styles.ref}>
									1
								</a>
								<a href="#" className={styles.ref}>
									2
								</a>
							</span>
						</p>

						<p>
							As of August 2024, Spectral employs over 10,000 people across its international offices. The bank
							reported $4.2 billion in revenue for 2023, demonstrating robust year-over-year growth.
							<span className={styles.refgroup}>
								<a href="#" className={styles.ref}>
									3
								</a>
							</span>
						</p>

						<p>
							Spectral’s business model is built around providing cutting-edge banking solutions, including
							personal banking, commercial lending, and wealth management services. The bank generates revenue
							through a diverse range of financial products, including interest income, service fees, and
							investment banking activities.
							<span className={styles.refgroup}>
								<a href="#" className={styles.ref}>
									4
								</a>
							</span>
						</p>

						<h3>Opportunity contacts</h3>
						<div className={styles.contacts}>
							<button>
								<Image src={"/avatars/nathaniel-zhao.jpg"} alt={"Nathaniel Zhao"} width={44} height={44} />
								<span className={styles.details}>
									<h6>Nathaniel Zhao</h6>
									<p>Chief Financial Officer</p>
									<p>Executive buyer</p>
								</span>
							</button>
							<button>
								<Image src={"/avatars/claire-emerson.jpg"} alt={"Claire Emerson"} width={44} height={44} />
								<span className={styles.details}>
									<h6>Claire Emerson</h6>
									<p>Vice President, Finance</p>
									<p>Decision maker</p>
								</span>
							</button>
							<button>
								<Image src={"/avatars/marcus-blackwell.jpg"} alt={"Marcus Blackwell"} width={44} height={44} />
								<span className={styles.details}>
									<h6>Marcus Blackwell</h6>
									<p>Director, Commercial Banking</p>
									<p>Champion</p>
								</span>
							</button>
							<button>
								<Image src={"/avatars/samantha-patel.jpg"} alt={"Samantha Patel"} width={44} height={44} />
								<span className={styles.details}>
									<h6>Samantha Patel</h6>
									<p>Director, Financial Planning</p>
									<p>Champion</p>
								</span>
							</button>
						</div>

						<div className={styles.sourcesrow}>
							<div className={styles.sources}>
								<div className={styles.pile}>
									<Image src={"/favicons/source-01.jpg"} alt={"Source 1"} width={14} height={14} />
									<Image src={"/favicons/source-02.jpg"} alt={"Source 1"} width={14} height={14} />
									<Image src={"/favicons/source-03.jpg"} alt={"Source 1"} width={14} height={14} />
									<Image src={"/favicons/source-04.jpg"} alt={"Source 1"} width={14} height={14} />
								</div>
								<div className={styles.label}>4 sources</div>
							</div>
						</div>
					</div>

					<div className={styles.user}>what’s the best way to reengage?</div>

					<div className={styles.system}>
						<p>
							You should reach out to Claire Emerson, VP of Finance. She is a recent hire on the finance team is
							likely attached to Spectral’s Operational Efficiency initiative. She could be a crucial
							decision-maker or influencer. Considering referencing the Senzo case study, given they operate in
							the same industry.
						</p>
					</div>

					<div className={styles.email}>
						<div className={styles.header}>
							<div className={styles.contact}>
								<Image src={"/avatars/claire-emerson.jpg"} alt={"Claire Emerson"} width={44} height={44} />
								<span className={styles.details}>
									<h6>Claire Emerson</h6>
									<p>Vice President, Finance</p>
								</span>
							</div>
							<div className={styles.buttons}>
								<button>Edit</button>
								<button>Copy</button>
							</div>
						</div>
						<div className={styles.content}>
							<p>Hi Claire,</p>
							<p>
								I hope this message finds you well. Last year we had a few conversations about how we could
								support Spectral’s financial and operational goals.
							</p>
							<p>
								Since we last spoke, Prism has built a number of a new features that help finance teams automate
								manual processes and increase accuracy of financial reporting for year end.
							</p>
							<p>
								Would you be open to a brief call next week to explore how Prism can better support your team
								and strategic initiatives?
							</p>
							<p>Best regards, Owen</p>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
