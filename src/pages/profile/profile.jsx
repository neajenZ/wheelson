import styles from './profile.module.scss'
import {AdvertisementWidjet} from "../../components/advertisementWidjet/advertisementWidjet.jsx";
import {UserRecords} from "../../components/userRecords/userRecords.jsx";
import {Link, useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { apiRequests } from '../../shared/api/apiRequests.js';
import { AdvertisementBanner } from '../../components/advertisementBanner/advertisementBanner.jsx';
import Cookies from 'js-cookie';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import SliderCard from './sliderCard.jsx';
import edit from '../../shared/images/Edit.svg';
import settings from '../../shared/images/settings.svg';
import nextHistory from '../../shared/images/next_history.svg';
import history from '../../shared/images/History.svg';
import img3 from '../../shared/images/bike.svg'
import img1 from '../../shared/images/skate.png'
import placeholder from '../../shared/images/profile.png'

export const Profile = () => {
    const {user, isAuth} = useSelector(state => state.mainSlice)
    const [cards, setCards] = useState([
        {
            name: 'Роликовые коньки',
            url: img1,
            id: 1
        },
        {
            name: 'Скейтборд',
            url: img3,
            id: 2
        },
        {
            name: 'Велосипед',
            url: img3,
            id: 3
        },
        {
            name: 'Электро\nсамокат',
            url: img3,
            id: 4
        },
    ])
    const [advertisement, setAdvertisement] = useState(false)
    const navigate = useNavigate()
    const [picture, setPicture] = useState(placeholder)
    
    useEffect(() => {
        if (!isAuth) return navigate('/auth')
        const getData = async () => {
            await apiRequests.user.getPicture(user.avatar_id)
                .then((res) => {
                    setPicture(URL.createObjectURL(res.data))
                })
        }
        getData()
    }, [])

    if (advertisement) {
        return <AdvertisementBanner setAdvertisement={setAdvertisement} />
    }

    return (
        <div>
            <div className={'mobile-container'}>
                <header className={styles.header}>
                    <h4>Личный кабинет</h4>
                    <Link to='/profile/edit_password'>
                        <img src={settings} alt=""/>
                    </Link>
                </header>
                <div className={styles.profile}>
                    <div className={styles.left}>
                        <img src={picture} alt="Avatar"/>
                        <div className={styles.nameWrapper}>
                            <h4>{user.first_name} {user.last_name}</h4>
                            <span>{ user.is_premium === true ? 'Premium': 'Free' }</span>
                        </div>
                    </div>
                    <Link to={'/profile/edit'}>
                        <img src={edit} alt=""/>
                    </Link>
                </div>
                <AdvertisementWidjet changeAd={() => setAdvertisement(true)} />

                <div className={styles.slider}>
                    <Swiper
                        spaceBetween={12}    
                        slidesPerView={3}
                        slideClass={styles.slideCard}
                    >
                        {
                            cards.map(i => (
                                <SwiperSlide key={i.id}>
                                    <SliderCard item={i} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

                <div className={styles.history}>
                    <div>
                        <img src={history} alt=""/>
                        <h4>История поездок</h4>
                    </div>
                    <button>
                        <img src={nextHistory} alt=""/>
                    </button>
                </div>

                <UserRecords />
            </div>
        </div>
    )
}