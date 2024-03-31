import { Header } from "./Header";
import { NewTaskBar } from "./NewTaskBar";
import { Tasks } from "./Tasks";

import "./global.css";
import styles from "./App.module.css";

export function App() {
	return (
		<>
			<Header></Header>
			<div className={styles.wrapper}>
				<main>
					<NewTaskBar />
					<Tasks />
				</main>
			</div>
		</>
	);
}
