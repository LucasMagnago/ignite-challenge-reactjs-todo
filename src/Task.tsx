import { SpeakerSimpleHigh, Trash } from "phosphor-react";
import styles from "./Task.module.css";
import { ChangeEvent, useState } from "react";

export interface TaskProps {
	task: ITask;
	onCompleteTask: (id: string, completed: boolean) => void;
	onDeleteTask: (id: string) => void;
}

export interface ITask {
	id: string;
	content: string;
	done: boolean;
}

export function Task({ task, onCompleteTask, onDeleteTask }: TaskProps) {
	const [completed, setCompleted] = useState(task.done);

	function handleCompletedChange() {
		setCompleted(!completed);
		handleCompleteTask();
	}

	function handleCompleteTask() {
		onCompleteTask(task.id, completed);
	}

	function handleDeleteTask() {
		onDeleteTask(task.id);
	}

	return (
		<>
			<div className={styles.task}>
				<div className={styles.content}>
					<div className={styles.checkboxWrapper}>
						<input
							id={task.id}
							type="checkbox"
							checked={task.done}
							onChange={handleCompletedChange}
						/>
						<label htmlFor={task.id} />
					</div>
					<p className={task.done ? styles.contentWhenTaskCompleted : ""}>
						{task.content}
					</p>
				</div>
				<button onClick={handleDeleteTask}>
					<Trash />
				</button>
			</div>
		</>
	);
}
