import styles from "./EmptyListMessage.module.css";
import { ClipboardText } from "phosphor-react";

export function EmptyListMessage({ show = true }) {
	return (
		<div className={show ? styles.emptyListMessage : styles.hide}>
			<ClipboardText size={56} />
			<p>
				<b>Você ainda não tem tarefas cadastradas</b>
				<br />
				Crie tarefas e organize seus itens a fazer
			</p>
		</div>
	);
}
