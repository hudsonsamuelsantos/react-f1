import styles from "./Buttons.module.css"

export function Buttons() {
    return (
        <div className={styles.Buttons}>
            <a href="#" className={styles.Link}>
                <span className={styles.Text}>
                    Cronograma
                </span>
            </a>
            <a href="#" className={styles.Link}>
                <span className={styles.Text}>
                    Classificação
                </span>
            </a>
        </div>
    )
}