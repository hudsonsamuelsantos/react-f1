import styles from "./Classification.module.css"

import PointsEffect from "../assets/points_effect.png"

import { Header } from "../components/Header"
import { Podium } from "../components/Podium"
import { ExpansiveCard } from "../components/ExpansiveCard"
import { Footer } from "../components/Footer"

export function Classification() {

    return (
        <div className={styles.Classification}>
            <header className={styles.Header}>
                <nav>
                    <Header />
                </nav>
            </header>

            <main className={styles.Main}>
                <div className={styles.ClassificationBackground}>
                    <span className={styles.ClassificationTitle}>
                        2022 Driver Standings
                    </span>

                    <img src={PointsEffect} />
                </div>

                <div className={styles.PodiumBox}>
                    <Podium />
                </div>

                <div className={styles.ExpansiveCardsBox}>
                    <ExpansiveCard
                        pilotName="Max Verstappen"
                    />

                    <ExpansiveCard
                        pilotName="Sergio Perez"
                    />

                    <ExpansiveCard
                        pilotName="Charles Leclerc"
                    />
                </div>
            </main>

            <footer className={styles.Footer}>
                <Footer />
            </footer>
        </div>
    )
}