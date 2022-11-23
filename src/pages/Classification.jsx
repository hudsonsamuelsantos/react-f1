import styles from "./Classification.module.css"

import { useEffect, useState } from "react"

import axios from "axios"

import PointsEffect from "../assets/points_effect.png"

import { Header } from "../components/Header"
import { Podium } from "../components/Podium"
import { ExpansiveCard } from "../components/ExpansiveCard"
import { Footer } from "../components/Footer"

export function Classification() {

    const [pilotsInfo, setPilotsInfo] = useState(null)

    useEffect(() => {
        async function fetch() {
            const url = "https://eowieece7a1eri5.m.pipedream.net"

            const response = await axios.get(url)

            setPilotsInfo(response.data.pilotsInfo)
        }

        fetch()
    }, [])

    console.log(pilotsInfo)

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
                    {pilotsInfo != null && (
                        <>
                            <ExpansiveCard
                                pilotInfo={pilotsInfo.maxVerstappen}
                            />

                            <ExpansiveCard
                                pilotInfo={pilotsInfo.sergioPerez}
                            />

                            <ExpansiveCard
                                pilotInfo={pilotsInfo.charlesLeclerc}
                            />
                        </>
                    )}
                </div>
            </main>

            <footer className={styles.Footer}>
                <Footer />
            </footer>
        </div>
    )
}