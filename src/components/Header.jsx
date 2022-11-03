import styles from "./Header.module.css"
import { Buttons } from "./Buttons"
import { LogoWhite } from "./LogoWhite"

export function Header() {
    return (
        <div className={styles.Header}>
            <LogoWhite />
            <Buttons />
        </div>
    )
}