import { Inter } from "next/font/google";
import localFont from "next/font/local";


const inter = Inter({ 
    subsets: ["latin"], 
    variable: "--font-ui",
  });
  
  const diatype = localFont({
      src: "./ABCDiatypeVariable.woff2",
      variable: "--font-diatype",
      weight: "100 900",
  });
  const diatypeMono = localFont({
      src: "./ABCDiatypeMonoVariable.woff2",
      variable: "--font-diatype-mono",
      weight: "100 900",
  });

export { inter, diatype, diatypeMono }
