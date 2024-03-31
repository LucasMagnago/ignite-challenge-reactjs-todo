import styles from "./Header.module.css";
import todoLogo from "./assets/todo-logo.svg";
export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.title}>
				<img src={todoLogo} />
				<span>to</span>
				<span>do</span>
			</div>
		</header>
	);
}
