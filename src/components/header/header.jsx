import styles from './header.module.scss'


export const Header = () => {

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <img src="" alt="Wheels"/>

                    <nav>
                        <a href="#">Блок 1</a>
                        <a href="#">Блок 1</a>
                        <a href="#">Блок 1</a>
                        <a href="#">Блок 1</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}