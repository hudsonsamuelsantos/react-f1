import styles from "./Footer.module.css"

export function Footer() {
    return (
        <div className={styles.Footer}>
            <nav className={styles.Navbar}>
                <img src="src/assets/logo_red.png" className={styles.Logo} />

                <div className={styles.Buttons}>
                    <a href="#" className={styles.Link}>
                        <span className={styles.LinkText}>
                            Cronograma
                        </span>
                    </a>

                    <a href="#" className={styles.Link}>
                        <span className={styles.LinkText}>
                            Classificação
                        </span>
                    </a>
                </div>
            </nav>

            <span className={styles.FooterText}>
                2003 - 2022 Formula One World Championship Limited
            </span>
        </div>
    )
}