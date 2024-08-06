import styles from './intro.module.scss'
import glLine from "../../shared/images/green_left.svg"
import plLine from "../../shared/images/purple_left.png"
import prLine from "../../shared/images/purple_right.png"
import grLine from "../../shared/images/green_right.png"
import phone from "../../shared/images/Mobile.png"
import { useState } from 'react'
import VideoPlayer from './videoPlayer/videoPlayer'

export const Intro = () => {
    const [isActive, setActive] = useState(false)

    return (
        <section className={styles.body}>
            <div className={styles.relativeContainer}>
                <div className={styles.leftLines}>
                    <div className={styles.lineCont}>
                        <img className={styles.purple} src={glLine} alt=""/>
                        <img className={styles.green} src={plLine} alt=""/>
                    </div>

                </div>

                <div className={styles.rightLines}>
                    <div className={styles.lineCont}>
                        <img className={styles.purple} src={prLine} alt=""/>
                        <img className={styles.green} src={grLine} alt=""/>
                    </div>

                </div>
                <div className="container">
                    <div className={styles.wrapper}>
                        <aside className={styles.leftContent}>
                            <h2>Все виды уличного спорта в одном приложении</h2>
                            <p>Регистрируйся, выбирай инвентарь, отслеживай прогресс. Находи других пользователей на карте. Покажи на что способен!</p>
                            <div className={styles.actions}>
                                <button className={styles.getStarted}>
                                    Поехали
                                </button>
                                <button onClick={() => setActive(true)} className={styles.watchVideo}>Watch Video</button>
                                {
                                    isActive && <VideoPlayer setActive={setActive} />
                                }
                            </div>
                        </aside>

                        <div className={styles.mobileBody}>
                            <img src={phone} alt="Wheels Application"/>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}