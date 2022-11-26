import styles from "./Timeline.module.css"

import { useState, useEffect } from "react";

import axios from "axios"

import { Header } from "../components/Header"
import { Card } from "../components/Card"
import { Footer } from "../components/Footer"
import { Calendar } from "../components/Calendar";

export function Timeline() {
    const [racesCards, setracesCards] = useState(null)

    useEffect(() => {
        async function fetch() {
            const url = "https://eowieece7a1eri5.m.pipedream.net"

            const response = await axios.get(url)

            setracesCards(response.data.racesCards)
        }

        fetch()
    }, [])

    return (
        <div className={styles.Timeline}>
            <header>
                <nav>
                    <Header />
                </nav>
            </header>

            <main className={styles.Main}>
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

                {racesCards != null &&
                    <>
                        <div className={styles.FirstCardsBox}>
                            <Card raceCard={racesCards[0]} ></Card>
                            <Card raceCard={racesCards[1]} ></Card>
                            <Card raceCard={racesCards[2]} ></Card>
                        </div>

                        <div className={styles.SecondCardsBox}>
                            <Card raceCard={racesCards[3]} ></Card>
                            <Card raceCard={racesCards[4]} ></Card>
                            <Card raceCard={racesCards[5]} ></Card>
                        </div>
                    </>
                }

                <Calendar />

            </main >

            <footer className={styles.Footer}>
                <Footer />
            </footer>
        </div >
    )
}