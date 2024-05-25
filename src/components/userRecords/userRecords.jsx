import styles from './userRecords.module.scss'

export const UserRecords = () => {

    return (
        <div className={styles.body}>
            <h4>Ваши рекорды</h4>

            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <img src="src/shared/images/distance.svg" alt=""/>
                    <div className={styles.wrapper}>
                        <span>Расстояние</span>
                        <h4>45,39 км</h4>
                    </div>
                </div>

                <div className={styles.item}>
                    <img src="src/shared/images/duration.svg" alt=""/>
                    <div className={styles.wrapper}>
                        <span>Продолжительность</span>
                        <h4>45,39 км</h4>
                    </div>
                </div>

                <div className={styles.item}>
                    <img src="src/shared/images/speed.svg" alt=""/>
                    <div className={styles.wrapper}>
                        <span>Макс. скорость</span>
                        <h4>45,39 км</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}