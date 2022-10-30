import styles from "./Timeline.module.css"
import { Header } from "../components/Header"
import { Card } from "../components/Card"

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

                <div className={styles.FirstCardsBox}>
                    <Card
                        title="TESTING"
                        days="10 - 12"
                        countryImage="src/assets/bahrain.png"
                        countryName="Bahrain"
                        mounth="APR"
                        description="FORMULA 1 ARAMCO PRE-SEASON TESTING 2022"
                    />
                    <Card
                        title="ROUND 1"
                        days="20 - 22"
                        countryImage="src/assets/bahrain.png"
                        countryName="Bahrain"
                        mounth="MAY"
                        description="FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2022"
                        isWithPilots
                    />
                    <Card
                        title="ROUND 1"
                        days="24 - 26"
                        countryImage="src/assets/spain.png"
                        countryName="Spain"
                        mounth="MAY"
                        description="FORMULA 1 PIRELLI GRAN PREMIO DE ESPAÑA 2022"
                        isWithPilots
                    />
                </div>

                <div className={styles.SecondCardsBox}>
                    <Card
                        title="ROUND 1"
                        days="31 - 02"
                        countryImage="src/assets/france.png"
                        countryName="France"
                        mounth="JUL"
                        description="FORMULA 1 LENOVO GRAND PRIX DE FRANCE 2022"
                    />
                    <Card
                        title="ROUND 1"
                        days="28 - 30"
                        countryImage="src/assets/belgium.png"
                        countryName="Belgium"
                        mounth="AUG"
                        description="FORMULA 1 ROLEX BELGIAN GRAND PRIX 2022"
                        isWithPilots
                    />
                    <Card
                        title="ROUND 1"
                        days="04 - 06"
                        countryImage="src/assets/italy.png"
                        countryName="Italy"
                        mounth="SEP"
                        description="FORMULA 1 PIRELLI GRAN PREMIO D&#8217;ITALIA 2022"
                        isWithPilots
                    />
                </div>
            </main>
        </div>
    )
}