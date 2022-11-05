import styles from "./Timeline.module.css"

import BahrainFlag from "../assets/bahrain.png"
import SpainFlag from "../assets/spain.png"
import FranceFlag from "../assets/france.png"
import BelguimFlag from "../assets/belgium.png"
import ItalyFlag from "../assets/italy.png"

import CalendarBahrainFlag from "../assets/bahrain_70_x_47.png"
import CalendarSpainFlag from "../assets/spain_70_x_47.png"
import CalendarFranceFlag from "../assets/france_70_x_47.png"
import CalendarBelgiumFlag from "../assets/belgium_70_x_47.png"
import CalendarItalyFlag from "../assets/italy_70_x_47.png"
import CalendarJapanFlag from "../assets/japan_70_x_47.png"
import CalendarEuaFlag from "../assets/eua_70_x_47.png"
import CalendarAustriaFlag from "../assets/austria_70_x_47.png"
import CalendarSaudiArabiaFlag from "../assets/saudi_arabia_70_x_47.png"

import MaxVerstappenMD from "../assets/max_verstappen_md.png"

import SergioPerezSM from "../assets/segio_perez_sm.png"
import CharlesLeclercSM from "../assets/charles_leclerc_sm.png"

import { Header } from "../components/Header"
import { Card } from "../components/Card"
import { CalendarCard } from "../components/CalendarCard"
import { Footer } from "../components/Footer"

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

                <div className={styles.CalendarBox}>
                    <div className={styles.Calendar}>
                        <CalendarCard
                            countryImage={CalendarBahrainFlag}
                            countryName="BAHRAIN"
                            day="10"
                            mounth="APR"
                        />

                        <CalendarCard
                            countryImage={CalendarBahrainFlag}
                            countryName="BAHRAIN"
                            day="20"
                            mounth="APR"
                        />

                        <CalendarCard
                            countryImage={CalendarSpainFlag}
                            countryName="SPAIN"
                            day="24"
                            mounth="MAY"
                        />

                        <CalendarCard
                            countryImage={CalendarFranceFlag}
                            countryName="FRANCE"
                            day="31"
                            mounth="JUL"
                        />

                        <CalendarCard
                            countryImage={CalendarBelgiumFlag}
                            countryName="BELGIUM"
                            day="28"
                            mounth="AUG"
                        />

                        <CalendarCard
                            countryImage={CalendarItalyFlag}
                            countryName="ITALY"
                            day="04"
                            mounth="SEP"
                        />

                        <CalendarCard
                            countryImage={CalendarJapanFlag}
                            countryName="JAPAN"
                            day="11"
                            mounth="SEP"
                        />

                        <CalendarCard
                            countryImage={CalendarEuaFlag}
                            countryName="EUA"
                            day="13"
                            mounth="SEP"
                        />

                        <CalendarCard
                            countryImage={CalendarAustriaFlag}
                            countryName="AUSTRIA"
                            day="21"
                            mounth="SEP"
                        />

                        <CalendarCard
                            countryImage={CalendarSaudiArabiaFlag}
                            countryName="SAUDI ARABIA"
                            day="27"
                            mounth="SEP"
                        />
                    </div>
                </div>
            </main>

            <footer className={styles.Footer}>
                <Footer />
            </footer>
        </div>
    )
}