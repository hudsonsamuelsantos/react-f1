import styles from "./ExpansiveCard.module.css"

import { useState } from "react"

import RectangleBlue from "../assets/rectangle_blue_5_x_19.png"
import RectangleRed from "../assets/rectangle_red_5_x_19.png"

import ChevronRight from "../assets/chevron_right_20_x_20.png"

export function ExpansiveCard(props) {
    const [isOpenCard, setIsOpenCard] = useState(false)

    return (
        <div className={isOpenCard ? styles.ExpansiveCard : styles.ExpansiveCardClosed}>
            <div className={isOpenCard ? styles.TopBar : styles.TopBarClosed} onClick={() => setIsOpenCard(!isOpenCard)}>
                <div className={styles.TopBarPilotInfo}>
                    <span className={styles.RankingPosition}>
                        {props.rankingPosition}
                    </span>

                    <img src={props.rectangleColor === "blue" ? RectangleBlue : RectangleRed} />

                    <span className={styles.PilotName}>
                        {props.firstPilotName}

                        <strong> {props.lastPilotName}</strong>
                    </span>

                    <span className={styles.PilotTeam}>
                        {props.team}
                    </span>
                </div>

                <div className={styles.PilotPoints}>
                    <div className={styles.PointsBox}>
                        <div className={styles.Points}>
                            <span className={styles.PointsText}>
                                {`${props.pts} PTS`}
                            </span>
                        </div>
                    </div>

                    <img src={ChevronRight} className={styles.ChevronRight} />
                </div>
            </div>

            <div className={isOpenCard ? styles.BottomBar : styles.BottomBarClosed}>
                <img src={props.pilotImage} className={styles.PilotImage} />

                <div className={styles.BottomBarPilotInfo}>
                    <div className={styles.PilotInfoBar}>
                        <span className={styles.PilotInfoBarTitle}>
                            Team
                        </span>

                        <span className={styles.PilotInfoBarText}>
                            {props.team}
                        </span>
                    </div>

                    <div className={styles.PilotInfoBar}>
                        <span className={styles.PilotInfoBarTitle}>
                            Country
                        </span>

                        <span className={styles.PilotInfoBarText}>
                            {props.country}
                        </span>
                    </div>

                    <div className={styles.PilotInfoBar}>
                        <span className={styles.PilotInfoBarTitle}>
                            Podiuns
                        </span>

                        <span className={styles.PilotInfoBarText}>
                            {props.podiuns}
                        </span>
                    </div>

                    <div className={styles.PilotInfoBar}>
                        <span className={styles.PilotInfoBarTitle}>
                            Points
                        </span>

                        <span className={styles.PilotInfoBarText}>
                            {props.points}
                        </span>
                    </div>

                    <div className={styles.PilotInfoBar}>
                        <span className={styles.PilotInfoBarTitle}>
                            Grand Pix Entered
                        </span>

                        <span className={styles.PilotInfoBarText}>
                            {props.gpEntered}
                        </span>
                    </div>

                    <div className={styles.PilotInfoBar}>
                        <span className={styles.PilotInfoBarTitle}>
                            World Championships
                        </span>

                        <span className={styles.PilotInfoBarText}>
                            {props.worldChampionships}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}