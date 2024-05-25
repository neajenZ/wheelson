import styles from './loginIntro.module.scss'


export const LoginIntro = ({setAuthState}) => {
    
    return (
        <div>

            <div className={styles.body}>
                <div className="mobile-container">
                    <div className={styles.container}>
                        <div className={styles.wrapper}>
                            <h3>Отслеживайте свою активность и достигайте <span>фитнес-целей</span></h3>
                            <p>Наше стильное и функциональное приложение оснащен множеством функций, которые помогут вам оставаться на правильном пути и мотивировать вас.</p>
                            <button onClick={() => setAuthState('enterNumber')}>Войти</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}