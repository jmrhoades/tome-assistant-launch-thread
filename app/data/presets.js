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
        info: "Summary of key findings and insights from research",
		icon: <PersonCircle size={24} />,
		prompt: "Executive top of mind",
        accentColor: "var(--text-color-sand)",
	},
	{
		id: "business-strategy-and-initiatives",
		label: "Business strategy & initiatives",
        info: "Summary of key findings and insights from research",
		icon: <Table size={24} />,
		prompt: "Business strategy & initiatives",
        accentColor: "var(--text-color-sand)",
	},
	{
		id: "corporate-structure",
		label: "Corporate structure",
        info: "Summary of key findings and insights from research",
		icon: <People size={24} />,
		prompt: "Corporate structure",
        accentColor: "var(--text-color-sand)",
	},
	{
		id: "financial-health",
		label: "Financial health",
        info: "Summary of key findings and insights from research",
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
        info: "Summary of key findings and insights from research",
		icon: <Heart size={24} />,
		prompt: "Value drivers",
        accentColor: "var(--text-color-sand)",
	},
	{
		id: "company-industry-overview",
		label: "Company & industry overview",
        info: "Identify top initiative and leadership driving them",
		icon: <Building size={24} />,
		prompt: "Company & industry overview",
        accentColor: "var(--text-color-mint)",
	},
];
