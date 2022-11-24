import styles from "./ExpansiveCard.module.css"

import { useState, useEffect } from "react"

import axios from "axios"

import MaxVerstappenExpansiveCardImage from "../assets/max_verstappen_expansive_card.png"
import SergioPerezExpansiveCardImage from "../assets/sergio_perez_expansive_card.png"
import CharlesLeclercExpansiveCardImage from "../assets/charles_leclerc_expansive_card.png"

import RectangleBlue from "../assets/rectangle_blue_5_x_19.png"
import RectangleRed from "../assets/rectangle_red_5_x_19.png"

import ChevronRight from "../assets/chevron_right_20_x_20.png"

export function ExpansiveCard({ pilotName }) {
    const [isOpenCard, setIsOpenCard] = useState(false)

    const [pilotInfo, setPilotInfo] = useState(null)

    const pilotsNames = {
        "Max Verstappen": "maxVerstappen",
        "Sergio Perez": "sergioPerez",
        "Charles Leclerc": "charlesLeclerc"
    }

    useEffect(() => {
        async function fetch() {
            const url = "https://eowieece7a1eri5.m.pipedream.net"

            const response = await axios.get(url)

            if (!pilotName) {
                setPilotInfo(response.data.pilotsInfo.maxVerstappen)
            } else {
                setPilotInfo(response.data.pilotsInfo[pilotsNames[pilotName]])
            }
        }

        fetch()
    }, [])

    const pilotsImages = {
        "Max Verstappen": MaxVerstappenExpansiveCardImage,
        "Sergio Perez": SergioPerezExpansiveCardImage,
        "Charles Leclerc": CharlesLeclercExpansiveCardImage
    }

    return (
        <>
            {pilotInfo != null && (
                <div className={isOpenCard ? styles.ExpansiveCard : styles.ExpansiveCardClosed}>
                    <div className={isOpenCard ? styles.TopBar : styles.TopBarClosed} onClick={() => setIsOpenCard(!isOpenCard)}>
                        <div className={styles.TopBarPilotInfo}>
                            <span className={styles.RankingPosition}>
                                {pilotInfo.rankingPosition}
                            </span>

                            <img src={pilotInfo.rankingPosition === "1" || pilotInfo.rankingPosition === "2" ? RectangleBlue : RectangleRed} />

                            <span className={styles.PilotName}>
                                {pilotInfo.firstPilotName}

                                <strong> {pilotInfo.lastPilotNameUppercase}</strong>
                            </span>

                            <span className={styles.PilotTeam}>
                                {pilotInfo.team}
                            </span>
                        </div>

                        <div className={styles.PilotPoints}>
                            <div className={styles.PointsBox}>
                                <div className={styles.Points}>
                                    <span className={styles.PointsText}>
                                        {`${pilotInfo.pts} PTS`}
                                    </span>
                                </div>
                            </div>

                            <img src={ChevronRight} className={styles.ChevronRight} />
                        </div>
                    </div>

                    <div className={isOpenCard ? styles.BottomBar : styles.BottomBarClosed}>
                        <img src={pilotsImages[pilotInfo.name]} className={styles.PilotImage} />

                        <div className={styles.BottomBarPilotInfo}>
                            <div className={styles.PilotInfoBar}>
                                <span className={styles.PilotInfoBarTitle}>
                                    Team
                                </span>

                                <span className={styles.PilotInfoBarText}>
                                    {pilotInfo.team}
                                </span>
                            </div>

                            <div className={styles.PilotInfoBar}>
                                <span className={styles.PilotInfoBarTitle}>
                                    Country
                                </span>

                                <span className={styles.PilotInfoBarText}>
                                    {pilotInfo.country}
                                </span>
                            </div>

                            <div className={styles.PilotInfoBar}>
                                <span className={styles.PilotInfoBarTitle}>
                                    Podiuns
                                </span>

                                <span className={styles.PilotInfoBarText}>
                                    {pilotInfo.podiuns}
                                </span>
                            </div>

                            <div className={styles.PilotInfoBar}>
                                <span className={styles.PilotInfoBarTitle}>
                                    Points
                                </span>

                                <span className={styles.PilotInfoBarText}>
                                    {pilotInfo.points}
                                </span>
                            </div>

                            <div className={styles.PilotInfoBar}>
                                <span className={styles.PilotInfoBarTitle}>
                                    Grand Pix Entered
                                </span>

                                <span className={styles.PilotInfoBarText}>
                                    {pilotInfo.gpEntered}
                                </span>
                            </div>

                            <div className={styles.PilotInfoBar}>
                                <span className={styles.PilotInfoBarTitle}>
                                    World Championships
                                </span>

                                <span className={styles.PilotInfoBarText}>
                                    {pilotInfo.worldChampionships}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}