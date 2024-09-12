"use client";

import * as React from "react";
import { animate, motion } from "framer-motion";

import Image from "next/image";
import Clock from "../icons/clock";
import XInCircle from "../icons/x-in-circle";
import styles from "./thread.module.css";
import { diatype, diatypeMono } from "../fonts/fonts";
import StatusHoverCard from "./status-hover-card";

export default function Thread({ state }) {
	const scrollRef = React.useRef();
	const followupRef = React.useRef();
	const emailContentRef = React.useRef();
	const p2MsgRef = React.useRef();

	const p2Ref1 = React.useRef();

	const variants = {
		hidden: { opacity: 0 },
		visible: i => ({
			opacity: 1,
			transition: {
				delay: i,
				duration: 0.2,
			},
		}),
		finished: {
			opacity: 1,
			transition: {
				duration: 0,
			},
		},
	};

	const phase1 = state === 2 ? "finished" : state === 1 ? "visible" : "hidden";

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

	const [emailFocused, setEmailFocused] = React.useState(false);

	const onEditClick = e => {
		console.log(emailFocused);
		if (emailFocused) {
			setEmailFocused(false);
			emailContentRef.current.blur();
		} else {
			setEmailFocused(true);
			emailContentRef.current.focus();
		}
		e.stopPropagation();
		e.preventDefault();
	};

	const onEmailContentFocus = e => {
		setEmailFocused(true);
		e.preventDefault();
	};

	const onEmailContentBlur = e => {
		setEmailFocused(false);
		e.preventDefault();
	};

	React.useEffect(() => {
		delay.current = 0;
		if (state === 1) {
			scrollRef.current.scrollTop = 0;
			setEmailFocused(false);
			emailContentRef.current.blur();
		}
		if (state === 2) {
			const scrollRect = scrollRef.current.getBoundingClientRect();
			const scrollHeight = scrollRect.height;
			const contentHeight = scrollRef.current.scrollHeight;
			const scrollTop = scrollRef.current.scrollTop;

			const msgRect = p2MsgRef.current.getBoundingClientRect();
			const msgBottom = msgRect.bottom;

			//const bottomOffset = window.innerHeight;

			const scrollY1 = msgBottom - scrollHeight - scrollTop + 100;
			if (scrollY1 > 0) {
				animate(scrollTop, scrollY1, {
					onUpdate: latest => (scrollRef.current.scrollTop = latest),
				});
			}

			const scrollY2 = scrollY1 + 124;
			const scrollY2T = 1000;
			setTimeout(() => {
				animate(scrollY1, scrollY2, {
					onUpdate: latest => (scrollRef.current.scrollTop = latest),
				});
			}, scrollY2T);

			const scrollY3 = scrollY2 + 148;
			const scrollY3T = scrollY2T + 1000;
			setTimeout(() => {
				animate(scrollY2, scrollY3, {
					onUpdate: latest => (scrollRef.current.scrollTop = latest),
				});
			}, scrollY3T);

			

			const scrollY4 = scrollY3 + 80;
			const scrollY4T = scrollY3T + 500;
			setTimeout(() => {
				animate(scrollY3, scrollY4, {
					onUpdate: latest => (scrollRef.current.scrollTop = latest),
				});
			}, scrollY4T);

			const scrollY5 = scrollY4 + 130;
			const scrollY5T = scrollY4T + 750;
			setTimeout(() => {
				animate(scrollY4, scrollY5, {
					onUpdate: latest => (scrollRef.current.scrollTop = latest),
				});
			}, scrollY5T);

			const scrollY6 = scrollY5 + 194;
			const scrollY6T = scrollY5T + 1000;
			setTimeout(() => {
				animate(scrollY5, scrollY6, {
					onUpdate: latest => (scrollRef.current.scrollTop = latest),
				});
			}, scrollY6T);

			const scrollY7 = scrollY6 + 288;
			const scrollY7T = scrollY6T + 500;
			setTimeout(() => {
				animate(scrollY6, scrollY7, {
					onUpdate: latest => (scrollRef.current.scrollTop = latest),
				});
			}, scrollY7T);

			const scrollY8 = scrollY7 + 352;
			const scrollY8T = scrollY7T + 500;
			setTimeout(() => {
				animate(scrollY7, scrollY8, {
					onUpdate: latest => (scrollRef.current.scrollTop = latest),
				});
			}, scrollY8T);

			console.log(msgBottom, scrollHeight, contentHeight, scrollTop);

			// p2MsgRef.current.scrollIntoView({
			// 	block: "end",
			// 	behavior: "smooth",
			// });

			//animate(scrollRef.current, {y:-100});
		}
	}, [state]);

	const phase2EmailBg = {
		hidden: { height: 0, opacity: 1 },
		visible: i => ({
			height: [
				0, 80, 80, 80, 80, 130, 130, 194, 194, 194, 194, 194, 194, 288, 288, 288, 288, 288, 288, 288, 288, 352, 352,
				418,
			],
			opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			transition: {
				delay: emailStart,
				duration: 3,
				ease: "linear",
				//times: [0, 0.5, 0.5, 1.0, 1.0, 1.5, 1.5, 2.0, 2.0, 2.5, 2.5, 3.0]
			},
		}),
		finished: {
			height: "100%",
			transition: {
				duration: 0,
			},
		},
	};

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
							ref={p2MsgRef}
							custom={phase2Start}
							animate={phase2}
							variants={variants}
							initial={false}
							className={styles.user}
						>
							what’s the best way to reengage?
						</motion.div>

						<div className={styles.system}>
							<p ref={p2Ref1}>
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
							// custom={emailStart}
							// animate={phase2}
							// variants={variants}
							// initial={false}
						>
							<motion.div
								className={styles.emailcontent}
								animate={phase2}
								variants={phase2EmailBg}
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
											onMouseDown={onEditClick}
										>
											{emailFocused ? "Done" : "Edit"}
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
								<div
									className={styles.content}
									contentEditable={true}
									ref={emailContentRef}
									onFocus={onEmailContentFocus}
									onBlur={onEmailContentBlur}
								>
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
						</motion.div>
						{/* <div className={styles.spacer} ref={lastItemRef} /> */}
					</motion.div>
				</div>
			</div>
		</div>
	);
}
