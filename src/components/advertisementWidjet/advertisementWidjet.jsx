
import styles from './advertisementWidjet.module.scss'

export const AdvertisementWidjet = ({changeAd}) => {
    return (
        <div onClick={() => changeAd()} className={styles.body}>
            <div className={styles.header}>
                <span>
                    Golden Wheels
                </span>

                <button>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6.1C0.502944 6.1 0.1 6.50294 0.1 7C0.1 7.49706 0.502944 7.9 1 7.9L1 6.1ZM13.6364 7.6364C13.9879 7.28492 13.9879 6.71507 13.6364 6.3636L7.90883 0.636039C7.55736 0.284567 6.98751 0.284567 6.63604 0.636039C6.28457 0.987511 6.28457 1.55736 6.63604 1.90883L11.7272 7L6.63604 12.0912C6.28457 12.4426 6.28457 13.0125 6.63604 13.364C6.98751 13.7154 7.55736 13.7154 7.90883 13.364L13.6364 7.6364ZM1 7.9L13 7.9L13 6.1L1 6.1L1 7.9Z" fill="black"/>
                    </svg>
                </button>
            </div>

            <div className={styles.wrapper}>
                <h4>Купите полную версию</h4>
                <p>Подпишитесь сейчас и получите доступ ко всем примиальным функциям Wheels on!</p>
            </div>
        </div>
    )
}