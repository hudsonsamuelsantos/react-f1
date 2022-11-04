import styles from "./Card.module.css"

import Flag from "../assets/flag.png"
import ChevronRight from "../assets/chevron_right.png"
import RectangleRed from "../assets/rectangle_red.png"
import RectangleBlue from "../assets/rectangle_blue.png"
import CardPilotBackgroundSmall from "../assets/card_pilot_background_small.png"
import CardPilotBackgroundLarge from "../assets/card_pilot_background_large.png"
import CardImageCar from "../assets/card-image-car.png"

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
                            <img src={Flag} />
                        </div>

                        <div className={styles.CardDescriptionBox}>
                            <div className={styles.CountryNameBox}>
                                <span className={styles.CountryName}>
                                    {props.countryName}
                                </span>
                                <div className={styles.ChevronRightIcon}>
                                    <img src={ChevronRight} />
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
                                        <img src={RectangleRed} className={styles.PositionRetactangles} />
                                        <img src={RectangleRed} className={styles.PositionRetactangles} />
                                    </div>

                                    {props.secondPilotNameAbbreviation}
                                </span>
                            </div>

                            <img src={CardPilotBackgroundSmall} className={styles.SmallCardPilotBackground} />
                        </div>

                        <div className={styles.FirstPilotBox}>
                            <img src={props.firstPilotImage} className={styles.LargePilotImage} />

                            <div className={styles.FirstPilotInfo}>
                                <div className={styles.PositionRetactanglesBox}>
                                    <img src={RectangleBlue} className={styles.PositionRetactangles} />
                                </div>

                                <span className={styles.PilotNameAbbreviation}>
                                    {props.firstPilotNameAbbreviation}
                                </span>
                            </div>

                            <img src={CardPilotBackgroundLarge} className={styles.LargeCardPilotBackground} />
                        </div>

                        <div className={styles.ThirdPilotBox}>
                            <img src={props.thirdPilotImage} className={styles.SmallPilotImage} />

                            <div className={styles.ThirdPilotInfo}>
                                <div className={styles.PositionRetactanglesBox}>
                                    <img src={RectangleRed} className={styles.PositionRetactangles} />
                                    <img src={RectangleRed} className={styles.PositionRetactangles} />
                                    <img src={RectangleRed} className={styles.PositionRetactangles} />
                                </div>

                                <span className={styles.PilotNameAbbreviation}>
                                    {props.thirdPilotNameAbbreviation}
                                </span>
                            </div>

                            <img src={CardPilotBackgroundSmall} className={styles.SmallCardPilotBackground} />
                        </div>
                    </div>

                    : <div className={styles.CardImageBox}>
                        <img src={CardImageCar} />
                    </div>
                }
            </div>
        </div>
    )
}