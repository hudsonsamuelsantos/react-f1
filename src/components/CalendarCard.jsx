import styles from "./CalendarCard.module.css"

import CalendarBahrainFlag from "../assets/bahrain_70_x_47.png"
import CalendarSpainFlag from "../assets/spain_70_x_47.png"
import CalendarFranceFlag from "../assets/france_70_x_47.png"
import CalendarBelgiumFlag from "../assets/belgium_70_x_47.png"
import CalendarItalyFlag from "../assets/italy_70_x_47.png"
import CalendarJapanFlag from "../assets/japan_70_x_47.png"
import CalendarEuaFlag from "../assets/eua_70_x_47.png"
import CalendarAustriaFlag from "../assets/austria_70_x_47.png"
import CalendarSaudiArabiaFlag from "../assets/saudi_arabia_70_x_47.png"

export function CalendarCard({ race }) {
    const countryFlagsImages = {
        "BAHRAIN": CalendarBahrainFlag,
        "SPAIN": CalendarSpainFlag,
        "FRANCE": CalendarFranceFlag,
        "BELGIUM": CalendarBelgiumFlag,
        "ITALY": CalendarItalyFlag,
        "JAPAN": CalendarJapanFlag,
        "EUA": CalendarEuaFlag,
        "AUSTRIA": CalendarAustriaFlag,
        "SAUDI ARABIA": CalendarSaudiArabiaFlag,
        "DEFAULT": CalendarBahrainFlag
    }

    return (
        <div className={styles.Card}>
            <div className={styles.CountryBox}>
                <img src={countryFlagsImages[race.countryNameUppercase]} />

                <span className={styles.CountryName}>
                    {race.countryNameUppercase}
                </span>
            </div>

            <span className={styles.Day}>
                {race.day}
            </span>

            <span className={styles.Mounth}>
                {race.mounthAbbreviationUppercase}
            </span>
        </div>
    )
}