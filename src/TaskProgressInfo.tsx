import styles from "./TaskProgressInfo.module.css";

export interface TaskProgressInfoProps {
	tasksCreated: number;
	tasksDone: number;
}
export function TaskProgressInfo({
	tasksCreated,
	tasksDone,
}: TaskProgressInfoProps) {
	return (
		<div className={styles.taskProgressInfo}>
			<p>
				Tarefas Criadas <span>{tasksCreated}</span>
			</p>
			<p>
				Concluídas{" "}
				<span>
					{tasksDone} de {tasksCreated}
				</span>
			</p>
		</div>
	);
}
