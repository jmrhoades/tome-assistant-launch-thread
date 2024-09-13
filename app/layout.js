import "./styles/reset.css";
import "./styles/globals.css";
import "./styles/colors.css";
import "./styles/type.css";
import "./styles/buttons.css";
import "./styles/inputs.css";
import "./styles/ui.css";
import "./styles/thread.css";

import { inter, diatype } from "./fonts/fonts";

export const metadata = {
	title: "Spectral",
	description: "",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${diatype.className} ${diatype.variable}`}>{children}</body>
		</html>
	);
}
