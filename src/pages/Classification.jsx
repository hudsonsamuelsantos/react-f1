import styles from "./Classification.module.css"
import { Header } from "../components/Header"

export function Classification() {
    return (
        <div className={styles.Classification}>
            <header>
                <Header />
            </header>

            <main>
                <div className={styles.ClassificationBackground}>
                    <span className={styles.ClassificationTitle}>
                        2022 Driver Standings
                    </span>

                    <img src="src/assets/points_effect.png" />
                </div>
            </main>
        </div>
    )
}