import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import styles from "./NewTaskBar.module.css";

export interface NewTaskBarProps {
	onCreateNewTask: (content: string) => void;
}

export function NewTaskBar({ onCreateNewTask }: NewTaskBarProps) {
	const [content, setContent] = useState("");

	function handleCreateNewTask(event: FormEvent) {
		event.preventDefault();

		onCreateNewTask(content);
		setContent("");
	}

	function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
		event.target.setCustomValidity("");
		setContent(event.target.value);
	}

	function handleNewTaskInvalid(event: FormEvent<HTMLInputElement>) {
		event.currentTarget.setCustomValidity("Esse campo é obrigatório");
	}

	return (
		<form onSubmit={handleCreateNewTask} className={styles.newTaskBar}>
			<input
				name="task"
				placeholder="Adicione uma nova tarefa"
				value={content}
				onChange={handleNewTaskChange}
				onInvalid={handleNewTaskInvalid}
				required
			/>
			<button type="submit">
				Criar <PlusCircle size={16} />
			</button>
		</form>
	);
}
