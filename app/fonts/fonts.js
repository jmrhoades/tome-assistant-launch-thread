import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-ui",
});

const diatype = localFont({
	src: "./ABCDiatypeVariable.woff2",
	weight: "100 900",
    variable: "--font-diatype",
});

const diatypeMono = localFont({
	src: "./ABCDiatypeMonoVariable.woff2",
	weight: "100 900",
    variable: "--font-diatype-mono",
});

export { inter, diatype, diatypeMono };
