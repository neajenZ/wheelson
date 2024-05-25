import styles from './information.module.scss'


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
                                    <img src="src/shared/images/GooglePlayBtn.svg" alt=""/>
                                </a>
                                <a href="#">
                                    <img src="src/shared/images/AppStoreBtn.png" alt=""/>
                                </a>
                            </div>
                        </div>
                    </aside>
                    <div className={styles.phones}>
                        <img src="src/shared/images/Phones.png" alt="Applications"/>
                    </div>
                </div>
            </div>
        </section>
    )
}