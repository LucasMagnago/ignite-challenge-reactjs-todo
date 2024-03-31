import styles from "./NewTaskBar.module.css";
import { PlusCircle } from "phosphor-react";

export function NewTaskBar() {
	return (
		<form className={styles.newTaskBar}>
			<input name="task" placeholder="Adicione uma nova tarefa" required />
			<button type="submit">
				Criar <PlusCircle size={16} />
			</button>
		</form>
	);
}
