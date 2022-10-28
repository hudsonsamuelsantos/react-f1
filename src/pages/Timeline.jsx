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

            <main>
                <div className={styles.TitleAndSubtitleBox}>
                    <div className={styles.TitleBox}>
                        <h1 className={styles.Title}>
                            F1 Cronograma 2022
                        </h1>
                    </div>
                    <span className={styles.Subtitle}>
                        CALENDÁRIO DE CORRIDA DO CAMPEONATO MUNDIAL DE FÓRMULA 1 2022 DA FIA
                    </span>
                </div>
            </main>
        </div>
    )
}