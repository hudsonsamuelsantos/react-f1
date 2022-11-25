import styles from "./Card.module.css"

import Flag from "../assets/flag.png"

import ChevronRight from "../assets/chevron_right.png"

import RectangleRed from "../assets/rectangle_red.png"
import RectangleBlue from "../assets/rectangle_blue.png"

import BahrainFlag from "../assets/bahrain.png"
import SpainFlag from "../assets/spain.png"
import FranceFlag from "../assets/france.png"
import BelguimFlag from "../assets/belgium.png"
import ItalyFlag from "../assets/italy.png"

import MaxVerstappenMD from "../assets/max_verstappen_md.png"

import SergioPerezSM from "../assets/segio_perez_sm.png"
import CharlesLeclercSM from "../assets/charles_leclerc_sm.png"

import CardPilotBackgroundSmall from "../assets/card_pilot_background_small.png"
import CardPilotBackgroundLarge from "../assets/card_pilot_background_large.png"
import CardImageCar from "../assets/card-image-car.png"

export function Card({ raceCard }) {
    const countryFlagsImages = {
        "Bahrain": BahrainFlag,
        "Spain": SpainFlag,
        "France": FranceFlag,
        "Belgium": BelguimFlag,
        "Italy": ItalyFlag
    }

    return (
        <div className={styles.Card}>
            <span className={raceCard.isWithPilots ? styles.CardWithPilotsTitle : styles.CardWithoutPilotsTitle}>
                {raceCard.titleUppercase}
            </span>

            <div className={raceCard.isWithPilots ? styles.CardWithPilotsContentBox : styles.CardWithoutPilotsContentBox}>
                <div className={styles.CardContentText}>
                    <div className={styles.CardDateAndCountryBox}>
                        <div className={styles.DaysAndCountry}>
                            <span className={styles.Days}>
                                {raceCard.days}
                            </span>
                            <img src={countryFlagsImages[raceCard.countryName]} />
                        </div>

                        <div className={styles.MounthBox}>
                            <span className={styles.Mounth}>
                                {raceCard.mounth}
                            </span>
                            <img src={Flag} />
                        </div>

                        <div className={styles.CardDescriptionBox}>
                            <div className={styles.CountryNameBox}>
                                <span className={styles.CountryName}>
                                    {raceCard.countryName}
                                </span>
                                <div className={styles.ChevronRightIcon}>
                                    <img src={ChevronRight} />
                                </div>
                            </div>

                            <span className={styles.Description}>
                                {raceCard.descriptionUppercase}
                            </span>
                        </div>
                    </div>
                </div>

                {raceCard.isWithPilots
                    ? <div className={styles.CardPilotsBox}>
                        <div className={styles.SecondPilotBox}>
                            <img src={SergioPerezSM} className={styles.SmallPilotImage} />

                            <div className={styles.SecondPilotInfo}>
                                <span className={styles.PilotNameAbbreviation}>
                                    <div className={styles.PositionRetactanglesBox}>
                                        <img src={RectangleRed} className={styles.PositionRetactangles} />
                                        <img src={RectangleRed} className={styles.PositionRetactangles} />
                                    </div>

                                    POR
                                </span>
                            </div>

                            <img src={CardPilotBackgroundSmall} className={styles.SmallCardPilotBackground} />
                        </div>

                        <div className={styles.FirstPilotBox}>
                            <img src={MaxVerstappenMD} className={styles.LargePilotImage} />

                            <div className={styles.FirstPilotInfo}>
                                <div className={styles.PositionRetactanglesBox}>
                                    <img src={RectangleBlue} className={styles.PositionRetactangles} />
                                </div>

                                <span className={styles.PilotNameAbbreviation}>
                                    VER
                                </span>
                            </div>

                            <img src={CardPilotBackgroundLarge} className={styles.LargeCardPilotBackground} />
                        </div>

                        <div className={styles.ThirdPilotBox}>
                            <img src={CharlesLeclercSM} className={styles.SmallPilotImage} />

                            <div className={styles.ThirdPilotInfo}>
                                <div className={styles.PositionRetactanglesBox}>
                                    <img src={RectangleRed} className={styles.PositionRetactangles} />
                                    <img src={RectangleRed} className={styles.PositionRetactangles} />
                                    <img src={RectangleRed} className={styles.PositionRetactangles} />
                                </div>

                                <span className={styles.PilotNameAbbreviation}>
                                    LEC
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