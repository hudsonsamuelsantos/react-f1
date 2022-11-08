import styles from "./Footer.module.css"

import { NavLink } from "react-router-dom"

import LogoRed from "../assets/logo_red.png"

export function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.FooterBox}>
                <nav className={styles.Navbar}>
                    <img src={LogoRed} className={styles.Logo} />

                    <div className={styles.Buttons}>
                        <NavLink to={"/timeline"} className={({ isActive }) => (isActive ? styles.Active : styles.Link)}>
                            <span className={styles.LinkText}>
                                Cronogramas
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
        </div>
    )
}