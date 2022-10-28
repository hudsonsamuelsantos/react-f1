import styles from "./NavBar.module.css"
import { Buttons } from "./Buttons"
import { LogoWhite } from "./LogoWhite"

export function NavBar() {
    return (
        <div className={styles.NavBar}>
            <LogoWhite />
            <Buttons />
        </div>
    )
}