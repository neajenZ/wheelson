import styles from './header.module.scss'
import tgIcon from "../../shared/images/tg.svg"

export const Header = () => {

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <img src="" alt="Wheels" />

                        <nav>
                            <a href="#">Главная</a>
                            <a href="#">Приложение</a>
                            <a href="#">О нас</a>
                        </nav>
                    </div>

                    <a href='https://t.me/Wheelsgoru' target='_blank' className={styles.telegram}>
                        <p>Наш телеграм</p>
                        <img width={40} src={tgIcon} alt="" />
                    </a>
                </div>
            </div>
        </header>
    )
}