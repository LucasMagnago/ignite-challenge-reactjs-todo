import { EmptyListMessage } from "./EmptyListMessage";
import { TaskProgressInfo } from "./TaskProgressInfo";
import styles from "./Tasks.module.css";

import { Task, TaskProps } from "./Task.tsx";
import { useState } from "react";

export function Tasks() {
	const [tasks, setTasks] = useState([{ id: 1, content: "teste", done: true }]);

	function deleteTask(taskId: number) {
		const tasksWithoutDeletedOne = tasks.filter((task) => {
			return task.id != taskId;
		});

		setTasks(tasksWithoutDeletedOne);
	}

	return (
		<div className={styles.tasks}>
			<TaskProgressInfo />
			<EmptyListMessage show={tasks.length == 0} />
			<div className={styles.taskList}>
				{tasks.map((task) => {
					return (
						<Task
							key={task.id}
							id={task.id}
							content={task.content}
							done={task.done}
							onDeleteTask={deleteTask}
						/>
					);
				})}
			</div>
		</div>
	);
}
