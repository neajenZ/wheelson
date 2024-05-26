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
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.point}>
                            <div className={styles.pointWrapper}>
                                <div className={styles.pointItem}>
                                    <h4>2 квартал 2024</h4>
                                    <div className={styles.pointItemWrapper}>
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.point}>
                            <div className={styles.pointWrapper}>
                                <div className={styles.pointItem}>
                                    <h4>3 квартал 2024</h4>
                                    <div className={styles.pointItemWrapper}>
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.point}>
                            <div className={styles.pointWrapper}>
                                <div className={styles.pointItem}>
                                    <h4>4 квартал 2024</h4>
                                    <div className={styles.pointItemWrapper}>
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.point}>
                            <div className={styles.pointWrapper}>
                                <div className={styles.pointItem}>
                                    <h4>2025</h4>
                                    <div className={styles.pointItemWrapper}>
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
                                        <p>Fusce efficitur</p>
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