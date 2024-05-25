import styles from './intro.module.scss'


export const Intro = () => {
    return (
        <section className={styles.body}>
            <div className={styles.relativeContainer}>
                <div className={styles.leftLines}>
                    <div className={styles.lineCont}>
                        <img className={styles.purple} src="src/shared/images/green_left.svg" alt=""/>
                        <img className={styles.green} src="src/shared/images/purple_left.png" alt=""/>
                    </div>

                </div>
                <div className={styles.rightLines}>
                    <div className={styles.lineCont}>
                        <img className={styles.purple} src="src/shared/images/purple_right.png" alt=""/>
                        <img className={styles.green} src="src/shared/images/green_right.png" alt=""/>
                    </div>

                </div>
                <div className="container">
                    <div className={styles.wrapper}>
                        <aside className={styles.leftContent}>
                            <h2>Все коллеги по хобби в твоем мобильном телефоне</h2>
                            <p>tincidunt est vitae elit feugiat, in venenatis purus lacinia. Cras quis luctus augue. Donec mi turpis, rhoncus scelerisque velit feugiat, </p>
                            <div className={styles.actions}>
                                <button className={styles.getStarted}>
                                    Get Started
                                </button>
                                <button className={styles.watchVideo}>Watch Video</button>
                            </div>
                        </aside>

                        <div className={styles.mobileBody}>
                            <img src="src/shared/images/Mobile.png" alt="Wheels Application"/>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}