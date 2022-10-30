import styles from "./Card.module.css"

export function Card(props) {
    return (
        <div className={styles.Card}>
            <span className={styles.CardTitle}>
                {props.title}
            </span>

            <div className={styles.CardContentBox}>
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
                    ? <div>com pilotos</div>

                    : <div className={styles.CardImageBox}>
                        <img src="src/assets/card-image-car.png" />
                    </div>
                }
            </div>
        </div>
    )
}