import styles from './historyOfTrip.module.scss'
import backIco from '../../shared/images/previousStep.svg'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {apiRequests} from "../../shared/api/apiRequests";

export const HistoryOfTrip = () => {
    const [trips, setTrips] = useState([])
    useEffect(() => {
        const getInitialData = async () => {
            await apiRequests.user.trips()
                .then((res) => {
                    setTrips(res.data)
                })
        }
        getInitialData()
    }, []);

    const translateName = (initialName) => {
        switch (initialName) {
            case 'roller_skates':
                return 'Роликовые коньки'
                break;
            case 'skateboard':
                return 'Скейтборд'
                break;
            case 'bike':
                return 'Велосипед'
                break;
            case 'electric_scooters':
                return 'Электросамокат'
                break;
            case 'unicycle':
                return 'Моноколесо'
                break;
        }
    }

    return (
        <div className={'mobile-container'}>
            <header className={'mobile-header'}>
                <Link to={'/profile'}>
                    <img src={backIco} alt=""/>
                </Link>
                <h4>История поездок</h4>
            </header>

            <div className={styles.wrapper}>
                {
                    trips.map((item) => (
                        <div className={styles.card}>
                            <h4>{translateName(item.category)}</h4>
                            <div className={styles.cardWrapper}>
                                <span>Макс. скорость: {item.max_speed} км/ч</span>
                                <span>Дистанция: {item.distance.toFixed(2)} км</span>
                                <span>Продолжительность: {item.duration > 60 ? (item.duration / 60).toFixed(2) : item.duration} мин</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}