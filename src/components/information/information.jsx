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
                        <h3>Находи новые знакомства с помощью своего мобильного телефона</h3>
                        <p>Загрузите приложение, чтобы отслеживать других людей разделяющих твое хобби, пиши, знакомься, будь на связи !</p>
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