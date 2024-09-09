import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import styles from "./promptbar-menu.module.css";
import { presets } from "../data/presets";
import Icon from "./icon";

export default function PromptbarMenu(props) {
	return (
		<DropdownMenu.Root modal={false}>
			<DropdownMenu.Trigger asChild>
				<button className={styles.MenuButton} aria-label="Preset commands">
					<Icon size={24} name={"menu"} />
				</button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content className={styles.Menu} side={"top"} sideOffset={14} align={"end"} alignOffset={-6}>
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
								<Icon name={o.icon} size={24} />

								{o.label}
							</div>
							<div className={styles.Trailing}>
								<Icon size={24} name={"return"} />
							</div>
						</DropdownMenu.Item>
					))}
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
}
