import styles from "./Card.module.css"

export function Card(props) {
    return (
        <div className={styles.Card}>
            <span className={props.isWithPilots ? styles.CardWithPilotsTitle : styles.CardWithoutPilotsTitle}>
                {props.title}
            </span>

            <div className={props.isWithPilots ? styles.CardWithPilotsContentBox : styles.CardWithoutPilotsContentBox}>
                <div className={styles.CardContentText}>
                    <div className={styles.CardDateAndCountryBox}>
                        <div className={styles.DaysAndCountry}>
                            <span className={styles.Days}>
                                {props.days}
                            </span>
                            <img src={props.countryImage} />
                        </div>

                        <div className={styles.MounthBox}>
                            <span className={styles.Mounth}>
                                {props.mounth}
                            </span>
                            <img src="src/assets/flag.png" />
                        </div>

                        <div className={styles.CardDescriptionBox}>
                            <div className={styles.CountryNameBox}>
                                <span className={styles.CountryName}>
                                    {props.countryName}
                                </span>
                                <div className={styles.ChevronRightIcon}>
                                    <img src="src/assets/chevron_right.png" />
                                </div>
                            </div>

                            <span className={styles.Description}>
                                {props.description}
                            </span>
                        </div>
                    </div>
                </div>

                {props.isWithPilots
                    ? <div className={styles.CardPilotsBox}>
                        <div className={styles.SecondPilotBox}>
                            <img src={props.secondPilotImage} className={styles.SmallPilotImage} />

                            <div className={styles.SecondPilotInfo}>
                                <span className={styles.PilotNameAbbreviation}>
                                    <div className={styles.PositionRetactanglesBox}>
                                        <img src="src/assets/rectangle_red.png" className={styles.PositionRetactangles} />
                                        <img src="src/assets/rectangle_red.png" className={styles.PositionRetactangles} />
                                    </div>

                                    {props.secondPilotNameAbbreviation}
                                </span>
                            </div>

                            <img src="src/assets/card_pilot_background_small.png" className={styles.SmallCardPilotBackground} />
                        </div>

                        <div className={styles.FirstPilotBox}>
                            <img src={props.firstPilotImage} className={styles.LargePilotImage} />

                            <div className={styles.FirstPilotInfo}>
                                <div className={styles.PositionRetactanglesBox}>
                                    <img src="src/assets/rectangle_blue.png" className={styles.PositionRetactangles} />
                                </div>

                                <span className={styles.PilotNameAbbreviation}>
                                    {props.firstPilotNameAbbreviation}
                                </span>
                            </div>

                            <img src="src/assets/card_pilot_background_large.png" className={styles.LargeCardPilotBackground} />
                        </div>

                        <div className={styles.ThirdPilotBox}>
                            <img src={props.thirdPilotImage} className={styles.SmallPilotImage} />

                            <div className={styles.ThirdPilotInfo}>
                                <div className={styles.PositionRetactanglesBox}>
                                    <img src="src/assets/rectangle_red.png" className={styles.PositionRetactangles} />
                                    <img src="src/assets/rectangle_red.png" className={styles.PositionRetactangles} />
                                    <img src="src/assets/rectangle_red.png" className={styles.PositionRetactangles} />
                                </div>

                                <span className={styles.PilotNameAbbreviation}>
                                    {props.thirdPilotNameAbbreviation}
                                </span>
                            </div>

                            <img src="src/assets/card_pilot_background_small.png" className={styles.SmallCardPilotBackground} />
                        </div>
                    </div>

                    : <div className={styles.CardImageBox}>
                        <img src="src/assets/card-image-car.png" />
                    </div>
                }
            </div>
        </div>
    )
}