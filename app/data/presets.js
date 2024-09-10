import BarChart from "../icons/bar-chart";
import Building from "../icons/building";
import Globe from "../icons/globe";
import Heart from "../icons/heart";
import People from "../icons/people";
import PersonCircle from "../icons/person-circle";
import Table from "../icons/table";

export const presets = [
	{
		id: "executive-top-of-mind",
		label: "Executive top of mind",
		info: "News and recent talking points of top leadership",
		icon: <PersonCircle size={24} />,
		prompt: "Executive top of mind",
		accentColor: "var(--text-color-sand)",
	},
	{
		id: "business-strategy-and-initiatives",
		label: "Business strategy & initiatives",
		info: "Identify top initiative and leadership driving them",
		icon: <Table size={24} />,
		prompt: "Business strategy & initiatives",
		accentColor: "var(--text-color-sand)",
	},
	{
		id: "corporate-structure",
		label: "Corporate structure",
		info: "Key executives, corporate structure, and size",
		icon: <People size={24} />,
		prompt: "Corporate structure",
		accentColor: "var(--text-color-sand)",
	},
	{
		id: "financial-health",
		label: "Financial health",
		info: "Revenue, growth, and competitive landscape",
		icon: <BarChart size={24} />,
		prompt: "Financials",
		accentColor: "var(--text-color-sand)",
	},
	{
		id: "account-summary",
		label: "Account summary",
		info: "Summary of key findings and insights from research",
		icon: <Globe size={24} />,
		prompt: "Account summary",
		accentColor: "var(--text-color-purple)",
	},
	{
		id: "value-drivers",
		label: "Value drivers",
		info: "How to deliver value to top company initiatives",
		icon: <Heart size={24} />,
		prompt: "Value drivers",
		accentColor: "var(--text-color-sand)",
	},
	{
		id: "company-industry-overview",
		label: "Company overview",
		info: "Key facts about the company and industry",
		icon: <Building size={24} />,
		prompt: "Company & industry overview",
		accentColor: "var(--text-color-mint)",
	},
];
