import styles from "./TaskProgressInfo.module.css";

export function TaskProgressInfo() {
	return (
		<div className={styles.taskProgressInfo}>
			<p>
				Tarefas Criadas <span>0</span>
			</p>
			<p>
				Concluídas <span>0</span>
			</p>
		</div>
	);
}
