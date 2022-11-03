import styles from "./Footer.module.css"
import { NavLink } from "react-router-dom"

export function Footer() {
    return (
        <div className={styles.Footer}>
            <nav className={styles.Navbar}>
                <img src="src/assets/logo_red.png" className={styles.Logo} />

                <div className={styles.Buttons}>
                    <NavLink to={"/timeline"} className={({ isActive }) => (isActive ? styles.Active : styles.Link)}>
                        <span className={styles.LinkText}>
                            Cronograma
                        </span>
                    </NavLink>

                    <NavLink to={"/classification"} className={({ isActive }) => (isActive ? styles.Active : styles.Link)}>
                        <span className={styles.LinkText}>
                            Classificação
                        </span>
                    </NavLink>
                </div>
            </nav>

            <span className={styles.FooterText}>
                2003 - 2022 Formula One World Championship Limited
            </span>
        </div>
    )
}