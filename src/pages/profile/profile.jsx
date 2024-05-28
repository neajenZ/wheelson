import styles from './profile.module.scss'
import {AdvertisementWidjet} from "../../components/advertisementWidjet/advertisementWidjet.jsx";
import {UserRecords} from "../../components/userRecords/userRecords.jsx";
import {Link, useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { apiRequests } from '../../shared/api/apiRequests.js';
import { AdvertisementBanner } from '../../components/advertisementBanner/advertisementBanner.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import SliderCard from './sliderCard.jsx';
import edit from '../../shared/images/Edit.svg';
import nextHistory from '../../shared/images/next_history.svg';
import history from '../../shared/images/hisotry.png';
import img3 from '../../shared/images/bike.svg'
import img3_white from '../../shared/images/bike_white.svg'

import img1 from '../../shared/images/skate.svg'
import img1_white from '../../shared/images/skate_white.svg'

import img2 from '../../shared/images/kon_dark.svg'
import img2_white from '../../shared/images/kon_white.svg'

import img4 from '../../shared/images/samokat_black.svg'
import img4_white from '../../shared/images/samokat_white.svg'

import placeholder from '../../shared/images/profile.png'

export const Profile = () => {
    const {user, isAuth} = useSelector(state => state.mainSlice)
    const [cards, setCards] = useState([
        {
            name: 'Роликовые коньки',
            picture: img2,
            pictureChecked: img2_white,
            id: 1
        },
        {
            name: 'Скейтборд',
            picture: img1,
            pictureChecked: img1_white,
            id: 2
        },
        {
            name: 'Велосипед',
            picture: img3,
            pictureChecked: img3_white,
            id: 3
        },
        {
            name: 'Электро\nсамокат',
            picture: img4,
            pictureChecked: img4_white,
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
                        <img src={require('../../shared/images/settings.svg').default} alt=""/>
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
                        <Link to={'/history_of_trip'}>
                            <img src={nextHistory} alt=""/>
                        </Link>
                    </button>
                </div>

                <UserRecords />
            </div>
        </div>
    )
}