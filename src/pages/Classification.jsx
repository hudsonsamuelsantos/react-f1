import styles from "./Classification.module.css"

import PointsEffect from "../assets/points_effect.png"

import { Header } from "../components/Header"
import { Podium } from "../components/Podium"

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

                    <img src={PointsEffect} />
                </div>

                <div className={styles.PodiumBox}>
                    <Podium />
                </div>
            </main>
        </div>
    )
}