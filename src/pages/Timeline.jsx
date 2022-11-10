import styles from "./Timeline.module.css"

import BahrainFlag from "../assets/bahrain.png"
import SpainFlag from "../assets/spain.png"
import FranceFlag from "../assets/france.png"
import BelguimFlag from "../assets/belgium.png"
import ItalyFlag from "../assets/italy.png"

import MaxVerstappenMD from "../assets/max_verstappen_md.png"

import SergioPerezSM from "../assets/segio_perez_sm.png"
import CharlesLeclercSM from "../assets/charles_leclerc_sm.png"

import { Header } from "../components/Header"
import { Card } from "../components/Card"
import { Footer } from "../components/Footer"
import { Calendar } from "../components/Calendar";

export function Timeline() {
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

                <div className={styles.FirstCardsBox}>
                    <Card
                        title="TESTING"
                        days="10 - 12"
                        countryImage={BahrainFlag}
                        countryName="Bahrain"
                        mounth="APR"
                        description="FORMULA 1 ARAMCO PRE-SEASON TESTING 2022"
                    />

                    <Card
                        title="ROUND 1"
                        days="20 - 22"
                        countryImage={BahrainFlag}
                        countryName="Bahrain"
                        mounth="MAY"
                        description="FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2022"
                        isWithPilots
                        firstPilotImage={MaxVerstappenMD}
                        secondPilotImage={SergioPerezSM}
                        thirdPilotImage={CharlesLeclercSM}
                        firstPilotNameAbbreviation="VER"
                        secondPilotNameAbbreviation="POR"
                        thirdPilotNameAbbreviation="LEC"

                    />

                    <Card
                        title="ROUND 1"
                        days="24 - 26"
                        countryImage={SpainFlag}
                        countryName="Spain"
                        mounth="MAY"
                        description="FORMULA 1 PIRELLI GRAN PREMIO DE ESPAÑA 2022"
                        isWithPilots
                        firstPilotImage={MaxVerstappenMD}
                        secondPilotImage={SergioPerezSM}
                        thirdPilotImage={CharlesLeclercSM}
                        firstPilotNameAbbreviation="VER"
                        secondPilotNameAbbreviation="POR"
                        thirdPilotNameAbbreviation="LEC"
                    />
                </div>

                <div className={styles.SecondCardsBox}>
                    <Card
                        title="ROUND 1"
                        days="31 - 02"
                        countryImage={FranceFlag}
                        countryName="France"
                        mounth="JUL"
                        description="FORMULA 1 LENOVO GRAND PRIX DE FRANCE 2022"
                        isWithPilots
                        firstPilotImage={MaxVerstappenMD}
                        secondPilotImage={SergioPerezSM}
                        thirdPilotImage={CharlesLeclercSM}
                        firstPilotNameAbbreviation="VER"
                        secondPilotNameAbbreviation="POR"
                        thirdPilotNameAbbreviation="LEC"
                    />

                    <Card
                        title="ROUND 1"
                        days="28 - 30"
                        countryImage={BelguimFlag}
                        countryName="Belgium"
                        mounth="AUG"
                        description="FORMULA 1 ROLEX BELGIAN GRAND PRIX 2022"
                        isWithPilots
                        firstPilotImage={MaxVerstappenMD}
                        secondPilotImage={SergioPerezSM}
                        thirdPilotImage={CharlesLeclercSM}
                        firstPilotNameAbbreviation="VER"
                        secondPilotNameAbbreviation="POR"
                        thirdPilotNameAbbreviation="LEC"
                    />

                    <Card
                        title="ROUND 1"
                        days="04 - 06"
                        countryImage={ItalyFlag}
                        countryName="Italy"
                        mounth="SEP"
                        description="FORMULA 1 PIRELLI GRAN PREMIO D&#8217;ITALIA 2022"
                        isWithPilots
                        firstPilotImage={MaxVerstappenMD}
                        secondPilotImage={SergioPerezSM}
                        thirdPilotImage={CharlesLeclercSM}
                        firstPilotNameAbbreviation="VER"
                        secondPilotNameAbbreviation="POR"
                        thirdPilotNameAbbreviation="LEC"
                    />
                </div>

                <Calendar />

            </main >

            <footer className={styles.Footer}>
                <Footer />
            </footer>
        </div >
    )
}