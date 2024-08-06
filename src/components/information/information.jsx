import styles from './information.module.scss'
import google from '../../shared/images/GooglePlayBtn.svg'
import apple from '../../shared/images/AppStoreBtn.png'
import phone from '../../shared/images/Phones.png'

export const Information = () => {
    return (
        <section className={styles.body}>
            <div className="container">
                <div className={styles.wrapper}>
                    <aside className={styles.left}>
                        <h3>Спорт объединяет, как и Wheels GO. Заводи новых друзей и приглашай своих</h3>
                        <p>Регистрируйся, выбирай направление, находи единомышленников. Тренируйтесь вместе!</p>
                        <div>
                            <span>Get the app</span>
                            <div className={styles.actions}>
                                <a href="#">
                                    <img src={google} alt=""/>
                                </a>
                                <a href="#">
                                    <img src={apple} alt=""/>
                                </a>
                            </div>
                        </div>
                    </aside>
                    <div className={styles.phones}>
                        <img src={phone} alt="Applications"/>
                    </div>
                </div>
            </div>
        </section>
    )
}