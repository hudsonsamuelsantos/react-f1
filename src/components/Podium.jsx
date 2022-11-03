import styles from "./Podium.module.css"

export function Podium() {
    return (
        <div className={styles.Podium}>
            <div className={styles.SecondPilot}>
                <div className={styles.SecondPilotRectanglesBox}>
                    <img src="src/assets/rectangle_blue_15_x_40.png" />
                    <img src="src/assets/rectangle_blue_15_x_40.png" />
                </div>

                <img src="src/assets/sergio_perez_lg.png" className={styles.SecondPilotImage} />

                <div className={styles.SecondPilotInfo}>
                    <div className={styles.PilotNameBox}>
                        <div className={styles.FirstNameAndCountry}>
                            <span className={styles.FirstName}>
                                Sergio
                            </span>

                            <img src="src/assets/mexico_34_x_23.png" />
                        </div>

                        <span className={styles.LastName}>
                            PEREZ
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.FirstPilot}>
                <div className={styles.FirstPilotRectanglesBox}>
                    <img src="src/assets/rectangle_blue_15_x_40.png" />
                </div>

                <img src="src/assets/max_verstappen_lg.png" className={styles.FirstPilotImage} />

                <div className={styles.FirstPilotInfo}>
                    <div className={styles.PilotNameBox}>
                        <div className={styles.FirstNameAndCountry}>
                            <span className={styles.FirstName}>
                                Max
                            </span>

                            <img src="src/assets/france_34_x_23.png" />
                        </div>

                        <span className={styles.LastName}>
                            VERSTAPPEN
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.ThirdPilot}>
                <div className={styles.ThirdPilotRectanglesBox}>
                    <img src="src/assets/rectangle_red_15_x_40.png" />
                    <img src="src/assets/rectangle_red_15_x_40.png" />
                    <img src="src/assets/rectangle_red_15_x_40.png" />
                </div>

                <img src="src/assets/charles_leclerc_lg.png" className={styles.ThirdPilotImage} />

                <div className={styles.ThirdPilotInfo}>
                    <div className={styles.PilotNameBox}>
                        <div className={styles.FirstNameAndCountry}>
                            <span className={styles.FirstName}>
                                Charles
                            </span>

                            <img src="src/assets/poland_34_x_23.png" />
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