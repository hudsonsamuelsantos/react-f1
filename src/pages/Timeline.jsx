import styles from "./Timeline.module.css"
import { NavBar } from "../components/NavBar"

export function Timeline() {
    return (
        <div className={styles.Timeline}>
            <nav>
                <NavBar />
            </nav>
        </div>
    )
}