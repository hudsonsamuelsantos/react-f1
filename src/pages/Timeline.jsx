import styles from "./Timeline.module.css"
import { Header } from "../components/Header"

export function Timeline() {
    return (
        <div className={styles.Timeline}>
            <header>
                <nav>
                    <Header />
                </nav>
            </header>
        </div>
    )
}