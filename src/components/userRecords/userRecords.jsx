import styles from './userRecords.module.scss'
import dur from '../../shared/images/duration.png'
import distance from '../../shared/images/km.png'
import speed from '../../shared/images/speed_limit.png'



export const UserRecords = () => {

    return (
        <div className={styles.body}>
            <h4>Ваши рекорды</h4>

            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <img src={distance} alt=""/>
                    <div className={styles.wrapper}>
                        <span>Расстояние</span>
                        <h4>45,39 км</h4>
                    </div>
                </div>

                <div className={styles.item}>
                    <img src={dur} alt=""/>
                    <div className={styles.wrapper}>
                        <span>Продолжительность</span>
                        <h4>45,39 км</h4>
                    </div>
                </div>

                <div className={styles.item}>
                    <img src={speed} alt=""/>
                    <div className={styles.wrapper}>
                        <span>Макс. скорость</span>
                        <h4>45,39 км</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}