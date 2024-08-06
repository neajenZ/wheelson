import styles from './ourAchievements.module.scss'

export const OurAchievements = () => {
    return (
        <div className={styles.body}>
            <div className="container">
                <div className={styles.wrapper}>
                    <aside className={styles.left}>
                        <h3>Наш прогресс <br/> с начала работы:</h3>
                        <p>С нашими сверхспособностями мы достигли этого</p>
                    </aside>

                    <div className={styles.content}>
                        <div className={styles.item}>
                            <img src="" alt=""/>
                            <div>
                                <h4>2000+</h4>
                                <span>Пользователей в <br/> телеграм канале</span>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <img src="" alt=""/>
                            <div>
                                <h4>100+</h4>
                                <span>Активных бета-тестеров</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}