import styles from './roadMap.module.scss'


export const RoadMap = () => {
    return (
        <section className={styles.body}>
            <div className="container">
                <div className={styles.header}>
                    <h3>Дорожная карта</h3>
                    <p>Curabitur vestibulum rutrum massa, vel tincidunt metus elementum eu. Aenean eu augue et orci laoreet cursus sit amet id velit. Curabitur bibendum turpis id tincidunt finibus. Cras imperdiet mauris vel nibh malesuada vulputate. Ut nec maximus velit. Curabitur vel tincidunt dui.</p>
                </div>

                <div className={styles.wrapperMain}>
                    <div className={styles.line}>
                        <div className={styles.point}>
                            <div className={styles.pointWrapper}>
                                <div className={styles.pointItem}>
                                    <h4>1 квартал 2024</h4>
                                    <div className={styles.pointItemWrapper}>
                                        <p>Подготовка к разработки MVP версии приложения</p>
                                        <p>Разработка основных функций <br/> и архитектуры приложения</p>
                                        <p>Первые итерации разработки и тестирования</p>
                                        <p>Продолжение разработки MVP</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.point}>
                            <div className={styles.pointWrapper}>
                                <div className={styles.pointItem}>
                                    <h4>2 квартал 2024</h4>
                                    <div className={styles.pointItemWrapper}>
                                        <p>Подготовка к выпуску первой тестовой сборки</p>
                                        <p>Подготовка к внутреннему тестированию</p>
                                        <p>Выпуск первой тестовой сборки MVP версии приложения</p>
                                        <p>Сбор обратной связи от первых тестировщиков</p>
                                        <p>Начало работы над привлечением первых пользователей</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.point}>
                            <div className={styles.pointWrapper}>
                                <div className={styles.pointItem}>
                                    <h4>3 квартал 2024</h4>
                                    <div className={styles.pointItemWrapper}>
                                        <p>Активное развитие и вовлечение комьюнити </p>
                                        <p>Официальный запуск MVP версии</p>
                                        <p>Начало разработки M2E интеграции</p>
                                        <p>Начало разработки Web3</p>
                                        <p>Поддержка и развитие комьюнити</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.point}>
                            <div className={styles.pointWrapper}>
                                <div className={styles.pointItem}>
                                    <h4>4 квартал 2024</h4>
                                    <div className={styles.pointItemWrapper}>
                                        <p>Интеграция TON блокчейна</p>
                                        <p>Подготовка к запуску зимней версии </p>
                                        <p>Проведение масштабной рекламной кампании</p>
                                        <p>Разработка и внедрение функции “спортивные клубы”</p>
                                        <p>Анализ результатов года</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}