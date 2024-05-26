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


export const Profile = () => {
    const {user, isAuth} = useSelector(state => state.mainSlice)
    const [cards, setCards] = useState([
        {
            name: 'Роликовые коньки',
            url: '/src/shared/images/skate.png'
        },
        {
            name: 'Скейтборд',
            url: '/src/shared/images/skate.svg'
        },
        {
            name: 'Велосипед',
            url: '/src/shared/images/bike.svg'
        },
        {
            name: 'Электро\nсамокат',
            url: '/src/shared/images/bike.svg'
        },
    ])
    const [advertisement, setAdvertisement] = useState(false)
    const navigate = useNavigate()
    const [picture, setPicture] = useState('/src/shared/images/profile.png')
    
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
                        <img src="src/shared/images/settings.svg" alt=""/>
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
                        <img src="src/shared/images/Edit.svg" alt=""/>
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
                                <SwiperSlide key={i.url}>
                                    <SliderCard item={i} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    {/* <h4>Направление спорта</h4>
                    <div className={styles.sliderWrapper}>
                        <div className={styles.card}>
                            <div className={styles.head}>
                                <img src="src/shared/images/skate.png" alt=""/>
                                <img src="src/shared/images/choosen.svg" alt=""/>
                            </div>
                            <p>Роликовые коньки</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.head}>
                                <img src="src/shared/images/skate.png" alt=""/>
                                <img src="src/shared/images/choosen.svg" alt=""/>
                            </div>
                            <p>Скейтборд</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.head}>
                                <img src="src/shared/images/skate.png" alt=""/>
                                <img src="src/shared/images/choosen.svg" alt=""/>
                            </div>
                            <p>Велосипед</p>
                        </div>
                    </div> */}
                </div>

                <div className={styles.history}>
                    <div>
                        <img src="src/shared/images/History.svg" alt=""/>
                        <h4>История поездок</h4>
                    </div>
                    <button>
                        <img src="src/shared/images/next_history.svg" alt=""/>
                    </button>
                </div>

                <UserRecords />
            </div>
        </div>
    )
}