"use client";

import * as React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import Clock from "../icons/clock";
import XInCircle from "../icons/x-in-circle";
import styles from "./thread.module.css";
import { diatype, diatypeMono } from "../fonts/fonts";
import StatusHoverCard from "./status-hover-card";

export default function Thread({ state }) {
	const scrollRef = React.useRef();
	const followupRef = React.useRef();

	const variants = {
		visible: i => ({
			opacity: 1,
			transition: {
				delay: i,
				duration: 0.2,
			},
		}),
		hidden: { opacity: 0 },
	};

	const phase1 = state > 0 ? "visible" : "hidden";
	const phase2 = state > 1 ? "visible" : "hidden";

	const delay = React.useRef(0);
	const nextDelay = () => {
		let newDelay = delay.current;
		delay.current = newDelay + 0.2;
		return newDelay;
	};

	const p1 =
		"Spectral is a premier financial institution that offers innovative banking and financial services to individuals and businesses globally. Established in 2009, Spectral has grown to become a trusted name in the banking sector, with headquarters in New York City, New York, and London, United Kingdom.";

	const p1Words = p1.split(" ");

	const p2 =
		"As of August 2024, Spectral employs over 10,000 people across its international offices. The bank reported $4.2 billion in revenue for 2023, demonstrating robust year-over-year growth.";

	const p2Words = p2.split(" ");

	const p3 =
		"Spectral’s business model is built around providing cutting-edge banking solutions, including personal banking, commercial lending, and wealth management services. The bank generates revenue through a diverse range of financial products, including interest income, service fees, and investment banking activities.";

	const p3Words = p3.split(" ");

	const p4 =
		"You should reach out to Claire Emerson, VP of Finance. She is a recent hire on the finance team is likely attached to Spectral’s Operational Efficiency initiative. She could be a crucial decision-maker or influencer. Considering referencing the Senzo case study, given they operate in the same industry.";

	const p4Words = p4.split(" ");

	const contacts = [
		{
			name: "Nathaniel Zhao",
			img: "/avatars/nathaniel-zhao.jpg",
			title: "Chief Financial Officer",
			role: "Executive buyer",
		},
		{
			name: "Claire Emerson",
			img: "/avatars/claire-emerson.jpg",
			title: "Vice President, Finance",
			role: "Decision maker",
		},
		{
			name: "Marcus Blackwell",
			img: "/avatars/marcus-blackwell.jpg",
			title: "Director, Commercial Banking",
			role: "Champion",
		},
		{
			name: "Samantha Patel",
			img: "/avatars/samantha-patel.jpg",
			title: "Director, Financial Planning",
			role: "Champion",
		},
	];

	const emailP1 = "Hi Claire,";
	const emailP1Words = emailP1.split(" ");

	const emailP2 =
		"I hope this message finds you well. Last year we had a few conversations about how we could support Spectral’s financial and operational goals.";
	const emailP2Words = emailP2.split(" ");

	const emailP3 =
		"Since we last spoke, Prism has built a number of a new features that help finance teams automate manual processes and increase accuracy of financial reporting for year end.";
	const emailP3Words = emailP3.split(" ");

	const emailP4 =
		"Would you be open to a brief call next week to explore how Prism can better support your team and strategic initiatives?";
	const emailP4Words = emailP4.split(" ");

	const emailP5 = "Best regards, Owen";
	const emailP5Words = emailP5.split(" ");

	const delayIncrement = 0.075;
	const textIncrement = 0.03;
	const cardIncrement = 0.15;

	const headingStart = delayIncrement * 8;

	const para1Start = headingStart + delayIncrement * 5;
	const para1End = para1Start + p1Words.length * textIncrement;

	const para2Start = para1End + delayIncrement * 2;
	const para2End = para2Start + p2Words.length * textIncrement;

	const para3Start = para2End + delayIncrement * 1;
	const para3End = para3Start + p3Words.length * textIncrement;

	const contactsStart = para3End + delayIncrement * 1;

	const contactsCardsStart = contactsStart + delayIncrement * 4;
	const contactsCardsEnd = contactsCardsStart + contacts.length * cardIncrement;

	const phase2Start = delayIncrement * 2;
	const para4Start = phase2Start + delayIncrement * 2;

	const emailStart = para4Start + p4Words.length * textIncrement + delayIncrement * 2;

	const emailHeaderStart = emailStart + delayIncrement * 1;
	const emailHeaderEnd = emailHeaderStart + delayIncrement * 4;

	const emailPara1Start = emailHeaderEnd + delayIncrement * 5;
	const emailPara1End = emailPara1Start + emailP1Words.length * textIncrement;

	const emailPara2Start = emailPara1End + delayIncrement * 1;
	const emailPara2End = emailPara2Start + emailP2Words.length * textIncrement;

	const emailPara3Start = emailPara2End + delayIncrement * 1;
	const emailPara3End = emailPara3Start + emailP3Words.length * textIncrement;

	const emailPara4Start = emailPara3End + delayIncrement * 1;
	const emailPara4End = emailPara4Start + emailP4Words.length * textIncrement;

	const emailPara5Start = emailPara4End + delayIncrement * 1;
	const emailPara5End = emailPara5Start + emailP5Words.length * textIncrement;

	React.useEffect(() => {
		delay.current = 0;
		if (state === 2) {
			followupRef.current.scrollIntoView({
				block: "start",
				behavior: "smooth",
			});
		}
	}, [state]);

	return (
		<div
			className={`${diatype.className} ${styles.thread} ${diatypeMono.variable}`}
			style={{
				pointerEvents: state > 0 ? "auto" : "none",
			}}
		>
			<div className={styles.threadscroller} ref={scrollRef}>
				<div className={styles.threadcontent}>
					<motion.div
						className={styles.user}
						custom={delayIncrement * 1}
						animate={phase1}
						variants={variants}
						initial={false}
					>
						Company Overview
					</motion.div>

					<div className={styles.system}>
						<h2>
							<motion.span custom={headingStart} animate={phase1} variants={variants} initial={false}>
								Spectral
							</motion.span>
							&nbsp;
							<motion.span
								custom={headingStart + delayIncrement * 1}
								animate={phase1}
								variants={variants}
								initial={false}
							>
								Account
							</motion.span>
							&nbsp;
							<motion.span
								custom={headingStart + delayIncrement * 2}
								animate={phase1}
								variants={variants}
								initial={false}
							>
								Overview
							</motion.span>
						</h2>
						<div className={styles.meta}>
							<motion.div
								custom={headingStart + delayIncrement * 3}
								animate={phase1}
								variants={variants}
								initial={false}
							>
								<StatusHoverCard />
							</motion.div>
							<motion.div
								custom={headingStart + delayIncrement * 4}
								animate={phase1}
								variants={variants}
								initial={false}
							>
								<button>
									<Clock size={18} /> 9 months ago
								</button>
							</motion.div>
						</div>
						<motion.h3
							custom={headingStart + delayIncrement * 5}
							animate={phase1}
							variants={variants}
							initial={false}
						>
							Overview
						</motion.h3>
						<p>
							{p1Words.map((w, i) => (
								<motion.span
									custom={para1Start + i * textIncrement}
									animate={phase1}
									variants={variants}
									initial={false}
									key={i}
								>
									{w}{" "}
								</motion.span>
							))}

							<span className={styles.refgroup}>
								<motion.a
									custom={para1End + delayIncrement * 1}
									animate={phase1}
									variants={variants}
									initial={false}
									href="#"
									className={styles.ref}
								>
									1
								</motion.a>
								<motion.a
									custom={para1End + delayIncrement * 2}
									animate={phase1}
									variants={variants}
									initial={false}
									href="#"
									className={styles.ref}
								>
									2
								</motion.a>
							</span>
						</p>
						<p>
							{p2Words.map((w, i) => (
								<motion.span
									custom={para2Start + i * textIncrement}
									animate={phase1}
									variants={variants}
									initial={false}
									key={i}
								>
									{w}{" "}
								</motion.span>
							))}

							<span className={styles.refgroup}>
								<motion.a
									custom={para2End + delayIncrement * 1}
									animate={phase1}
									variants={variants}
									initial={false}
									href="#"
									className={styles.ref}
								>
									3
								</motion.a>
							</span>
						</p>
						<p>
							{p3Words.map((w, i) => (
								<motion.span
									custom={para3Start + i * textIncrement}
									animate={phase1}
									variants={variants}
									initial={false}
									key={i}
								>
									{w}{" "}
								</motion.span>
							))}
							<span className={styles.refgroup}>
								<motion.a
									custom={para3End + delayIncrement * 1}
									animate={phase1}
									variants={variants}
									initial={false}
									href="#"
									className={styles.ref}
								>
									4
								</motion.a>
							</span>
						</p>
						<h3>
							<motion.span
								custom={contactsStart + delayIncrement * 1}
								animate={phase1}
								variants={variants}
								initial={false}
							>
								Opportunity{" "}
							</motion.span>
							<motion.span
								custom={contactsStart + delayIncrement * 2}
								animate={phase1}
								variants={variants}
								initial={false}
							>
								contacts{" "}
							</motion.span>
						</h3>
						<div className={styles.contacts}>
							{contacts.map((o, i) => (
								<motion.button
									key={i}
									custom={contactsCardsStart + cardIncrement * i}
									animate={phase1}
									variants={variants}
									initial={false}
								>
									<Image src={o.img} alt={o.name} width={44} height={44} />
									<span className={styles.details}>
										<h6>{o.name}</h6>
										<p>{o.title}</p>
										<p>{o.role}</p>
									</span>
								</motion.button>
							))}
						</div>
						<motion.div
							className={styles.sourcesrow}
							custom={contactsCardsEnd + delayIncrement * 1}
							animate={phase1}
							variants={variants}
							initial={false}
						>
							<div className={styles.sources}>
								<div className={styles.pile}>
									<Image src={"/favicons/source-01.jpg"} alt={"Source 1"} width={14} height={14} />
									<Image src={"/favicons/source-02.jpg"} alt={"Source 1"} width={14} height={14} />
									<Image src={"/favicons/source-03.jpg"} alt={"Source 1"} width={14} height={14} />
									<Image src={"/favicons/source-04.jpg"} alt={"Source 1"} width={14} height={14} />
								</div>
								<div className={styles.label}>4 sources</div>
							</div>
						</motion.div>
					</div>

					<motion.div
						ref={followupRef}
						className={styles.followup}
						style={{
							height: state > 1 ? "auto" : 0,
						}}
					>
						<motion.div
							custom={phase2Start}
							animate={phase2}
							variants={variants}
							initial={false}
							className={styles.user}
						>
							what’s the best way to reengage?
						</motion.div>

						<div className={styles.system}>
							<p>
								{p4Words.map((w, i) => (
									<motion.span
										custom={para4Start + i * textIncrement}
										animate={phase2}
										variants={variants}
										initial={false}
										key={i}
									>
										{w}{" "}
									</motion.span>
								))}
							</p>
						</div>

						<motion.div
							className={styles.email}
							custom={emailStart}
							animate={phase2}
							variants={variants}
							initial={false}
						>
							<div className={styles.header}>
								<div className={styles.contact}>
									<motion.span
										custom={emailHeaderStart + delayIncrement * 1}
										animate={phase2}
										variants={variants}
										initial={false}
									>
										<Image
											src={"/avatars/claire-emerson.jpg"}
											alt={"Claire Emerson"}
											width={44}
											height={44}
										/>
									</motion.span>
									<span className={styles.details}>
										<motion.h6
											custom={emailHeaderStart + delayIncrement * 2}
											animate={phase2}
											variants={variants}
											initial={false}
										>
											Claire Emerson
										</motion.h6>
										<motion.p
											custom={emailHeaderStart + delayIncrement * 3}
											animate={phase2}
											variants={variants}
											initial={false}
										>
											Vice President, Finance
										</motion.p>
									</span>
								</div>
								<div className={styles.buttons}>
									<motion.button
										custom={emailHeaderStart + delayIncrement * 4}
										animate={phase2}
										variants={variants}
										initial={false}
									>
										Edit
									</motion.button>
									<motion.button
										custom={emailHeaderStart + delayIncrement * 5}
										animate={phase2}
										variants={variants}
										initial={false}
									>
										Copy
									</motion.button>
								</div>
							</div>
							<div className={styles.content}>
								<p>
									{emailP1Words.map((w, i) => (
										<motion.span
											custom={emailPara1Start + i * textIncrement}
											animate={phase2}
											variants={variants}
											initial={false}
											key={i}
										>
											{w}{" "}
										</motion.span>
									))}
								</p>
								<p>
									{emailP2Words.map((w, i) => (
										<motion.span
											custom={emailPara2Start + i * textIncrement}
											animate={phase2}
											variants={variants}
											initial={false}
											key={i}
										>
											{w}{" "}
										</motion.span>
									))}
								</p>
								<p>
									{emailP3Words.map((w, i) => (
										<motion.span
											custom={emailPara3Start + i * textIncrement}
											animate={phase2}
											variants={variants}
											initial={false}
											key={i}
										>
											{w}{" "}
										</motion.span>
									))}
								</p>
								<p>
									{emailP4Words.map((w, i) => (
										<motion.span
											custom={emailPara4Start + i * textIncrement}
											animate={phase2}
											variants={variants}
											initial={false}
											key={i}
										>
											{w}{" "}
										</motion.span>
									))}
								</p>
								<p>
									{emailP5Words.map((w, i) => (
										<motion.span
											custom={emailPara5Start + i * textIncrement}
											animate={phase2}
											variants={variants}
											initial={false}
											key={i}
										>
											{w}{" "}
										</motion.span>
									))}
								</p>
							</div>
						</motion.div>
						{/* <div className={styles.spacer} ref={lastItemRef} /> */}
					</motion.div>
				</div>
			</div>
		</div>
	);
}
