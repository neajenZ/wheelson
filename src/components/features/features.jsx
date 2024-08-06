import styles from './features.module.scss'

export const CompanieFeatures = () => {
    return (
        <section className={styles.body}>
            <div className="container">
                <div className={styles.header}>
                    <h3>НЕ ПРОСТО ОЧЕРЕДНОЙ ТРЕКЕР</h3>
                    <p>Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <img src="" alt=""/>
                        <h4>Заводи <br/> новых друзей</h4>
                        <p>Находи других пользователей прямо на карте, знакомься. Вместе всегда веселее.</p>
                    </div>
                    <div className={styles.card}>
                        <img src="" alt=""/>
                        <h4>Получай награды, меняй на крипту</h4>
                        <p>За тренировки ты будешь получать реальную крипту.</p>
                    </div>
                    <div className={styles.card}>
                        <img src="" alt=""/>
                        <h4>Получай экипировку от партнеров</h4>
                        <p>Лучшие спортсмены сезона могут рассчитывать на супер призы в виде спорт инвентаря по их основным направлениям спорта от наших партнеров.</p>
                    </div>
                    <div className={styles.card}>
                        <img src="" alt=""/>
                        <h4>Создавай <br/> команды</h4>
                        <p>. Возглавь команду, побеждайте в групповых зачетах, поднимайтесь в рейтингах.</p>
                    </div>
                    <div className={styles.card}>
                        <img src="" alt=""/>
                        <h4>Отслеживай свои рекорды</h4>
                        <p>Все твои достижения по каждой дисциплине всегда под рукой.</p>
                    </div>
                    <div className={styles.card}>
                        <img src="" alt=""/>
                        <h4>Летние и зимние виды спорта</h4>
                        <p>Переключай режим в зависимости от региона и страны Лето/зима.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}