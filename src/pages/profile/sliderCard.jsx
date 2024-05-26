import { useState } from 'react';
import styles from './profile.module.scss'



const SliderCard = ({item}) => {
    const [isChoosen, setChoosen] = useState(false)
    
    return (
    <>
        <div 
            onClick={() => setChoosen(prev => !prev)}
            className={`${styles.card} ${isChoosen === true ? styles.choosen : ''}`}
        >
            <div className={styles.head}>
                <img src={item.url} alt=""/>
                {
                    isChoosen && <img src="src/shared/images/choosen.svg" alt=""/>
                }
                
            </div>
            <p>{item.name}</p>
        </div>
    </>
  )
};

export default SliderCard;
