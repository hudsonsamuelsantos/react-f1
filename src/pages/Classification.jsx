import styles from "./Classification.module.css"

import PointsEffect from "../assets/points_effect.png"

import MaxVerstappenExpansiveCardImage from "../assets/max_verstappen_expansive_card.png"
import SergioPerezExpansiveCardImage from "../assets/sergio_perez_expansive_card.png"
import CharlesLeclercExpansiveCardImage from "../assets/charles_leclerc_expansive_card.png"

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
                        rankingPosition="1"
                        firstPilotName="Max"
                        lastPilotName="VERSTAPPEN"
                        team="Red Bull Racing"
                        pts="366"
                        pilotImage={MaxVerstappenExpansiveCardImage}
                        country="Netherlands"
                        podiuns="75"
                        points="1948.5"
                        gpEntered="160"
                        worldChampionships="2"
                        rectangleColor="blue"
                    />

                    <ExpansiveCard
                        rankingPosition="2"
                        firstPilotName="Sergio"
                        lastPilotName="PEREZ"
                        team="Red Bull Racing"
                        pts="253"
                        pilotImage={SergioPerezExpansiveCardImage}
                        country="Mexico"
                        podiuns="24"
                        points="1161"
                        gpEntered="233"
                        worldChampionships="N/A"
                        rectangleColor="blue"
                    />

                    <ExpansiveCard
                        rankingPosition="3"
                        firstPilotName="Charles"
                        lastPilotName="LECLERC"
                        team="Ferrari"
                        pts="252"
                        pilotImage={CharlesLeclercExpansiveCardImage}
                        country="Monaco"
                        podiuns="23"
                        points="827"
                        gpEntered="100"
                        worldChampionships="N/A"
                        rectangleColor="red"
                    />
                </div>
            </main>

            <footer className={styles.Footer}>
                <Footer />
            </footer>
        </div>
    )
}