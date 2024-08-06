import styles from './footer.module.scss'
import google from '../../shared/images/GooglePlayBtn.svg'
import apple from '../../shared/images/AppStoreBtn.png'

export const Footer = () => {
    return (
        <footer className={styles.body}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <img src="" alt=""/>
                        <div className={styles.links}>
                        </div>
                        <p className={styles.copyright}>© 2024 Alfateam - be the best with us</p>
                    </div>
                    <div className={styles.linksToApplications}>
                        <span>Get the app</span>
                        <div className={styles.actions}>
                            <a href="#">
                                <img src={google} alt=""/>
                            </a>
                            <a href="#">
                                <img src={apple} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}