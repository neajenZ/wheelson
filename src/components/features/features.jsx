import styles from './features.module.scss'

export const CompanieFeatures = () => {
    return (
        <section className={styles.body}>
            <div className="container">
                <div className={styles.header}>
                    <h3>tristique sit amet augue.</h3>
                    <p>Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <img src="" alt=""/>
                        <h4>Надежность</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                    </div>
                    <div className={styles.card}>
                        <img src="" alt=""/>
                        <h4>Гибкость</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                    </div>
                    <div className={styles.card}>
                        <img src="" alt=""/>
                        <h4>Удобный</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                    </div>
                    <div className={styles.card}>
                        <img src="" alt=""/>
                        <h4>Приватность</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                    </div>
                    <div className={styles.card}>
                        <img src="" alt=""/>
                        <h4>Быстрая помощь</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                    </div>
                    <div className={styles.card}>
                        <img src="" alt=""/>
                        <h4>Организованность</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}