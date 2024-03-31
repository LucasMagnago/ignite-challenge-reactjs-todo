import { SpeakerSimpleHigh, Trash } from "phosphor-react";
import styles from "./Task.module.css";

export interface TaskProps {
	id: number;
	content: string;
	done: boolean;
	onDeleteTask: (number: number) => void;
}

export function Task({ id, content, done, onDeleteTask }: TaskProps) {
	function handleDeleteComment() {
		onDeleteTask(id);
	}

	return (
		<>
			<div className={styles.task}>
				<div className={styles.content}>
					<div className={styles.checkboxWrapper}>
						<input type="checkbox" checked={done} />
						<label htmlFor="customCheckbox"></label>
					</div>
					<p>{content}</p>
				</div>
				<button onClick={handleDeleteComment}>
					<Trash />
				</button>
			</div>
		</>
	);
}
