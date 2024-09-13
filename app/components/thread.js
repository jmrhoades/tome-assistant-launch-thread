"use client";

import * as React from "react";
import { animate, motion } from "framer-motion";

import Image from "next/image";
import Clock from "../icons/clock";

import styles from "./thread.module.css";
import { diatype, diatypeMono } from "../fonts/fonts";
import StatusHoverCard from "./status-hover-card";

export default function Thread({ state }) {
	const scrollRef = React.useRef();
	const followupRef = React.useRef();
	const emailContentRef = React.useRef();
	const emailHeightRef = React.useRef();
	const p2MsgRef = React.useRef();
	const threadRef = React.useRef();

	const p2Ref1 = React.useRef();

	const userVariants = {
		hidden: { opacity: 0, y: 0 },
		visible: i => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i,
				duration: 0.1,
			},
		}),
		finished: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0,
			},
		},
	};

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

	const h1 = "About Spectral";
	const h1Words = h1.split(" ");

	const p1 =
		"Spectral is a global financial institution that offers banking services to individuals and businesses. Established in 2009, Spectral has grown to become a trusted name in the banking sector, with headquarters in New York City and London. Spectral employs over 10,000 people and reported $4.2B in revenue for fiscal year 2023.";
	const p1Words = p1.split(" ");

	const h2 = "Account History";
	const h2Words = h2.split(" ");

	const p2 =
		"A past employee at Prism connected with Claire Emerson (Vice President, Finance) at Spectral nine months ago. The “Closed-Lost” decision is marked as “Lost to Competitor”.";

	const p2Words = p2.split(" ");

	const h3 = "Relevant Updates";
	const h3Words = h3.split(" ");

	const p3 =
		"Spectral recently received a fine from the SEC for filing reporting late. There suggests to be a clear indication of operational efficiency improvements in order to file on-time.";

	const p3Words = p3.split(" ");

	const p4 =
		"You should reach out to Claire Emerson, VP of Finance. She evaluated was the main evaluator of your product nine months ago, and is senior enough to have authority over budget. Focus on the ability to nail reporting with speed. Reference the Senzo case study, given they use Prism for a similar use case.";

	const p4Words = p4.split(" ");

	const contacts = [
		{
			name: "Nathaniel Zhao",
			img: "/avatars/nathaniel-zhao.jpg",
			title: "Chief Financial Officer",
			role: "Executive Buyer",
		},
		{
			name: "Claire Emerson",
			img: "/avatars/claire-emerson.jpg",
			title: "Vice President, Finance",
			role: "Champion",
		},
		{
			name: "Marcus Blackwell",
			img: "/avatars/marcus-blackwell.jpg",
			title: "Director, Commercial Banking",
			role: "Key Influencer",
		},
		{
			name: "Samantha Patel",
			img: "/avatars/samantha-patel.jpg",
			title: "Director, Financial Planning",
			role: "Key Influencer",
		},
	];

	const emailP1 = "Hi Claire,";
	const emailP1Words = emailP1.split(" ");

	const emailP2 =
		"Last year we had a few conversations about how we could support Spectral’s operational goals. We’ve got some interesting updates for you.";
	const emailP2Words = emailP2.split(" ");

	const emailP3 =
		"Prism helps finance teams automate manual processes. Senzo, a global bank of similar size, sped up the financial reporting process by 50% while cutting costs by 20%.";
	const emailP3Words = emailP3.split(" ");

	const emailP4 = "Would you be open to a brief call to explore how Prism can help?";
	const emailP4Words = emailP4.split(" ");

	const emailP5 = "Best regards,";
	const emailP5Words = emailP5.split(" ");

	const delayIncrement = 0.075;
	const textIncrement = 0.03;
	const cardIncrement = 0.15;

	const startDelay = 0.25;
	const headingStart = startDelay + 0.5;

	const h1Start = headingStart + delayIncrement * 5;

	const para1Start = h1Start + h1Words.length * textIncrement;
	const para1End = para1Start + p1Words.length * textIncrement;

	const h2Start = para1End + delayIncrement;

	const para2Start = h2Start + h2Words.length * textIncrement;
	const para2End = para2Start + p2Words.length * textIncrement;

	const h3Start = para2End + delayIncrement;

	const para3Start = h3Start + h3Words.length * textIncrement;
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
			//emailHeightRef.current.style.height = "auto"
			animate(emailHeightRef.current, { height: "auto" }, { duration: 0 });

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
		if (state === 1) {
			scrollRef.current.scrollTop = 0;
			animate(scrollRef.current, { y: 0 }, { duration: 0 });
			setEmailFocused(false);
			emailContentRef.current.blur();
		}
		if (state === 2) {
			const msgRect = p2MsgRef.current.getBoundingClientRect();
			const msgBottom = msgRect.bottom;
			const bottomDistAbs = window.innerHeight - 144;
			const yStop1 = bottomDistAbs - msgBottom < 0 ? bottomDistAbs - msgBottom : 0;
			//console.log(msgBottom,  window.innerHeight, yStop1)

			const dur = 0.2;
			const sequence = [
				[scrollRef.current, { y: yStop1 }, { duration: dur }],
				[scrollRef.current, { y: yStop1 - 26 }, { duration: dur, delay: 0.2 }],
				[scrollRef.current, { y: yStop1 - 52 }, { duration: dur, delay: 0.1 }],
				[scrollRef.current, { y: yStop1 - 78 }, { duration: dur, delay: 0.1 }],
				[scrollRef.current, { y: yStop1 - 104 }, { duration: dur, delay: 0.1 }],

				[scrollRef.current, { y: yStop1 - 216 }, { duration: dur, delay: 0.3 }],
				[scrollRef.current, { y: yStop1 - 282 }, { duration: dur, delay: 0.2 }],
				[scrollRef.current, { y: yStop1 - 310 }, { duration: dur, delay: 0.1 }],
				[scrollRef.current, { y: yStop1 - 338 }, { duration: dur, delay: 0.1 }],
				[scrollRef.current, { y: yStop1 - 372 }, { duration: dur, delay: 0.1 }],
				[scrollRef.current, { y: yStop1 - 404 }, { duration: dur, delay: 0.1 }],
				[scrollRef.current, { y: yStop1 - 438 }, { duration: dur, delay: 0.1 }],

				[scrollRef.current, { y: yStop1 - 470 }, { duration: dur, delay: 0.1 }],
				[scrollRef.current, { y: yStop1 - 494 }, { duration: dur, delay: 0.1 }],
				[scrollRef.current, { y: yStop1 - 502 }, { duration: dur, delay: 0.1 }],
				//[scrollRef.current, { y: yStop1 - 526 }, { duration: dur, delay: 0.1 }],
				[scrollRef.current, { y: yStop1 - 560 }, { duration: dur*2, delay: 0.1 }],
			];
			

			animate(sequence);

			const heightSequence = [
				[emailHeightRef.current, { height: 0 }, { duration: dur }],
				[emailHeightRef.current, { height: 0 }, { duration: dur, delay: 0.2 }],
				[emailHeightRef.current, { height: 0 }, { duration: dur, delay: 0.1 }],
				[emailHeightRef.current, { height: 0 }, { duration: dur, delay: 0.1 }],
				[emailHeightRef.current, { height: 0 }, { duration: dur, delay: 0.1 }],

				[emailHeightRef.current, { height: 74 }, { duration: dur, delay: 0.3 }],
				[emailHeightRef.current, { height: 140 }, { duration: dur, delay: 0.2 }],
				[emailHeightRef.current, { height: 168 }, { duration: dur, delay: 0.1 }],
				[emailHeightRef.current, { height: 196 }, { duration: dur, delay: 0.1 }],
				[emailHeightRef.current, { height: 230 }, { duration: dur, delay: 0.1 }],
				[emailHeightRef.current, { height: 262 }, { duration: dur, delay: 0.1 }],
				[emailHeightRef.current, { height: 296 }, { duration: dur, delay: 0.1 }],

				[emailHeightRef.current, { height: 328 }, { duration: dur, delay: 0.1 }],
				[emailHeightRef.current, { height: 352 }, { duration: dur, delay: 0.1 }],
				[emailHeightRef.current, { height: 360 }, { duration: dur, delay: 0.1 }],
				//[emailHeightRef.current, { height: 384 }, { duration: dur, delay: 0.1 }],
				[emailHeightRef.current, { height: 418 }, { duration: dur*2, delay: 0.1 }],
			];

			animate(heightSequence);
		}
	}, [state]);

	return (
		<div
			className={`${diatype.className} ${styles.thread} ${diatypeMono.variable}`}
			style={{
				pointerEvents: state > 0 ? "auto" : "none",
			}}
			ref={threadRef}
		>
			<div className={styles.threadscroller} ref={scrollRef}>
				<div className={styles.threadcontent}>
					<motion.div
						className={styles.user}
						custom={startDelay}
						animate={phase1}
						variants={userVariants}
						initial={false}
					>
						Can you share the latest information on Spectral?
					</motion.div>

					<div className={styles.system}>
						<h2>
							<motion.span custom={headingStart} animate={phase1} variants={variants} initial={false}>
								Spectral’s
							</motion.span>
							&nbsp;
							<motion.span
								custom={headingStart + delayIncrement * 1}
								animate={phase1}
								variants={variants}
								initial={false}
							>
								Operational
							</motion.span>
							&nbsp;
							<motion.span
								custom={headingStart + delayIncrement * 2}
								animate={phase1}
								variants={variants}
								initial={false}
							>
								Challenges
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
								<button className="status-button">
									<Clock size={18} />
									<span className="ui-label">9 months ago</span>
								</button>
							</motion.div>
						</div>
						<h3>
							{h1Words.map((w, i) => (
								<motion.span
									custom={h1Start + i * textIncrement}
									animate={phase1}
									variants={variants}
									initial={false}
									key={i}
								>
									{w}{" "}
								</motion.span>
							))}
						</h3>
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
						<h3>
							{h2Words.map((w, i) => (
								<motion.span
									custom={h2Start + i * textIncrement}
									animate={phase1}
									variants={variants}
									initial={false}
									key={i}
								>
									{w}{" "}
								</motion.span>
							))}
						</h3>
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
						<h3>
							{h3Words.map((w, i) => (
								<motion.span
									custom={h3Start + i * textIncrement}
									animate={phase1}
									variants={variants}
									initial={false}
									key={i}
								>
									{w}{" "}
								</motion.span>
							))}
						</h3>
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
								Relevant{" "}
							</motion.span>
							<motion.span
								custom={contactsStart + delayIncrement * 2}
								animate={phase1}
								variants={variants}
								initial={false}
							>
								Contacts{" "}
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
							What’s the best way to reengage?
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
							custom={emailStart}
							animate={phase2}
							variants={variants}
							initial={false}
							ref={emailHeightRef}
						>
							<motion.div className={styles.emailcontent}>
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
										<br />
										<motion.span
											custom={emailPara5End + 1 * textIncrement}
											animate={phase2}
											variants={variants}
											initial={false}
										>
											Owen
										</motion.span>
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
