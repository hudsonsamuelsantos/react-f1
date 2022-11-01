import styles from "./CalendarCard.module.css"

export function CalendarCard(props) {
    return (
        <div className={styles.Card}>
            <div className={styles.CountryBox}>
                <img src={props.countryImage} />

                <span className={styles.CountryName}>
                    {props.countryName}
                </span>
            </div>

            <span className={styles.Day}>
                {props.day}
            </span>

            <span className={styles.Mounth}>
                {props.mounth}
            </span>
        </div>
    )
}