import { useState } from "react";

import { EmptyListMessage } from "./EmptyListMessage";
import { TaskProgressInfo } from "./TaskProgressInfo";
import { Task, TaskProps } from "./Task.tsx";
import { NewTaskBar } from "./NewTaskBar.tsx";

import { v4 as uuidv4 } from "uuid";

import styles from "./Tasks.module.css";

export function Tasks() {
	const [tasks, setTasks] = useState([
		{ id: "1", content: "Estudar react", done: false },
	]);

	function createNewTask(content: string) {
		setTasks([...tasks, { id: uuidv4(), content: content, done: false }]);
	}

	function completeTask(taskId: string, status: boolean) {
		tasks.map((task) => {
			if (task.id == taskId) {
				task.done = status;
			}
		});

		setTasks(tasks);
	}

	function deleteTask(taskId: string) {
		const tasksWithoutDeletedOne = tasks.filter((task) => {
			return task.id != taskId;
		});

		setTasks(tasksWithoutDeletedOne);
	}

	return (
		<div>
			<NewTaskBar onCreateNewTask={createNewTask} />
			<div className={styles.tasks}>
				<TaskProgressInfo
					tasksCreated={tasks.length}
					tasksDone={tasks.filter((task) => task.done == true).length}
				/>
				<EmptyListMessage show={tasks.length == 0} />
				<div className={styles.taskList}>
					{tasks.map((task) => {
						return (
							<Task
								key={task.id}
								task={task}
								onCompleteTask={completeTask}
								onDeleteTask={deleteTask}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
