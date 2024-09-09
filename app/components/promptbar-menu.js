"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import styles from "./promptbar-menu.module.css";
import { presets } from "../data/presets";
import Return from "../icons/return";
import Menu from "../icons/menu";

export default function PromptbarMenu(props) {
	return (
		<DropdownMenu.Root modal={false}>
			<DropdownMenu.Trigger asChild>
				<button className={styles.MenuButton} aria-label="Preset commands">
					<Menu size={24} />
				</button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content className={styles.Menu} side={"top"} sideOffset={14} align={"start"} alignOffset={-6}>
					{presets.map(o => (
						<DropdownMenu.Item
							key={o.id}
							className={styles.MenuItem}
							onSelect={e => {
								props.handleMenuSelection({
									id: o.id,
									prompt: o.prompt,
								});
							}}
						>
							<div className={styles.Leading}>
								{o.icon}
								{o.label}
							</div>
							<div className={styles.Trailing}>
								<Return size={24} />
							</div>
						</DropdownMenu.Item>
					))}
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
}
