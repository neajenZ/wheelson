import { useDispatch, useSelector } from 'react-redux'
import { apiRequests } from '../../shared/api/apiRequests'
import styles from './advertisementBanner.module.scss'
import { setUserData } from '../../shared/store/main'
import { useNavigate } from 'react-router-dom'
import img from '../../shared/images/advertisement_picture.png'
import close from '../../shared/images/close.svg'

export const AdvertisementBanner = ({setAdvertisement}) => {
    const {user} = useSelector(state => state.mainSlice)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async () => {
        await apiRequests.user.activatePremium()
            .then((res) => {
                dispatch(setUserData({...user, is_premium: true}))
                setAdvertisement(false)
                navigate('/payment/status', {state: {status: 'success'}})
            })
            .catch(() => {
                navigate('/payment/status', {state: {status: 'error'}})
            })

    }

    return (
        <div className={styles.body}>
            <img className={styles.picture} src={img} alt=""/>
            <button onClick={() => setAdvertisement(false)} className={styles.closeBtn}>
                <img src={close} alt="" />
            </button>
            <div className="mobile-container">
                <div className={styles.header}>
                    <h3>Попробуйте <span>Golden Whells</span></h3>
                    <p>Члены GOLDEN WHEELS на 70% чаще достигают своих целей</p>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.item}>
                        <p>Открыть доступ к геопозиции другим пользователям</p>
                    </div>
                    <div className={styles.item}>
                        <p>Производить обмен сообщениями с другими пользователями которые купили Golden Whells</p>
                    </div>
                    <div className={styles.item}>
                        <p>100% без рекламы</p>
                    </div>
                </div>

                <div className={styles.actions}>
                    <div>Подписка ежемесячно - ₽1 290,00</div>
                    <button onClick={handleSubmit} className={'green-button'}>Попробуйте бесплатно</button>
                </div>

                <div className={styles.info}>
                    <p>Попробовать 7 дней бесплатно <br/>
                        <span>Затем ₽10 290,00 в год</span><br/>
                        Отменить подписку можно в любое время.</p>
                </div>
            </div>
        </div>
    )
}