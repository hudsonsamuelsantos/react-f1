import styles from "./Podium.module.css"

import RectangleBlue from "../assets/rectangle_blue_15_x_40.png"
import RectangleRed from "../assets/rectangle_red_15_x_40.png"

import SergioPerezLG from "../assets/sergio_perez_lg.png"
import MaxVerstappenLG from "../assets/max_verstappen_lg.png"
import CharlesLeclercLG from "../assets/charles_leclerc_lg.png"

import MexicoFlag from "../assets/mexico_34_x_23.png"
import FranceFlag from "../assets/france_34_x_23.png"
import PolandFlag from "../assets/poland_34_x_23.png"

export function Podium() {
    return (
        <div className={styles.Podium}>
            <div className={styles.SecondPilot}>
                <div className={styles.SecondPilotRectanglesBox}>
                    <img src={RectangleBlue} />
                    <img src={RectangleBlue} />
                </div>

                <img src={SergioPerezLG} className={styles.SecondPilotImage} />

                <div className={styles.SecondPilotInfo}>
                    <div className={styles.PilotNameBox}>
                        <div className={styles.FirstNameAndCountry}>
                            <span className={styles.FirstName}>
                                Sergio
                            </span>

                            <img src={MexicoFlag} />
                        </div>

                        <span className={styles.LastName}>
                            PEREZ
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.FirstPilot}>
                <div className={styles.FirstPilotRectanglesBox}>
                    <img src={RectangleBlue} />
                </div>

                <img src={MaxVerstappenLG} className={styles.FirstPilotImage} />

                <div className={styles.FirstPilotInfo}>
                    <div className={styles.PilotNameBox}>
                        <div className={styles.FirstNameAndCountry}>
                            <span className={styles.FirstName}>
                                Max
                            </span>

                            <img src={FranceFlag} />
                        </div>

                        <span className={styles.LastName}>
                            VERSTAPPEN
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.ThirdPilot}>
                <div className={styles.ThirdPilotRectanglesBox}>
                    <img src={RectangleRed} />
                    <img src={RectangleRed} />
                    <img src={RectangleRed} />
                </div>

                <img src={CharlesLeclercLG} className={styles.ThirdPilotImage} />

                <div className={styles.ThirdPilotInfo}>
                    <div className={styles.PilotNameBox}>
                        <div className={styles.FirstNameAndCountry}>
                            <span className={styles.FirstName}>
                                Charles
                            </span>

                            <img src={PolandFlag} />
                        </div>

                        <span className={styles.LastName}>
                            LECLERC
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}