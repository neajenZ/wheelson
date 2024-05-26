import styles from './ourAchievements.module.scss'

export const OurAchievements = () => {
    return (
        <div className={styles.body}>
            <div className="container">
                <div className={styles.wrapper}>
                    <aside className={styles.left}>
                        <h3>Наши достижения с <br/> начало выпуска</h3>
                        <p>С нашими сверхспособностями мы достигли этого</p>
                    </aside>

                    <div className={styles.content}>
                        <div className={styles.item}>
                            <img src="" alt=""/>
                            <div>
                                <h4>10,000+</h4>
                                <span>Загрузок в день</span>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <img src="" alt=""/>
                            <div>
                                <h4>2 Million</h4>
                                <span>Пользователи</span>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <img src="" alt=""/>
                            <div>
                                <h4>500+</h4>
                                <span>Загрузок в день</span>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <img src="" alt=""/>
                            <div>
                                <h4>140</h4>
                                <span>Загрузок в день</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}