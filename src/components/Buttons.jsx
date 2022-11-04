import styles from "./Buttons.module.css"

import { NavLink } from 'react-router-dom'

export function Buttons() {
    return (
        <div className={styles.Buttons}>
            <NavLink to={"/timeline"} className={({ isActive }) => (isActive ? styles.Active : styles.Link)}>
                <span className={styles.Text}>
                    Cronograma
                </span>
            </NavLink>
            <NavLink to={"/classification"} className={({ isActive }) => (isActive ? styles.Active : styles.Link)}>
                <span className={styles.Text}>
                    Classificação
                </span>
            </NavLink>
        </div>
    )
}