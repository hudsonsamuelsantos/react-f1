import styles from "./Header.module.css"

import logoWhite from "../assets/logoWhite.png"

import { Buttons } from "./Buttons"

export function Header() {
    return (
        <div className={styles.Header}>
            <div className={styles.HeaderBox}>
                <img src={logoWhite} />

                <Buttons />
            </div>
        </div>
    )
}