import styles from './enterNumber.module.scss'
import {useState} from "react";
import {CodeInput} from "../enterCode/CodeInput.jsx";
import {apiRequests} from "../../shared/api/apiRequests.js";
import NewPassword from '../setNewPassword/setNewPassword.jsx';

const phoneReg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

export const EnterNumber = () => {
    const [step, setStep] = useState('enterNumber')
    const [numberValue, setNumber] = useState('')

    const handleRequest = async () => {
        await apiRequests.user.requestCode(Number(numberValue))
            .then((res) => {
                if (res.data.status === 'success') {
                    setStep('code')
                }
            })
    }

    const handleChange = (val) => {
        if (phoneReg.test(val) || val === '') {
            setNumber(val)
        }
    }


    return (
        <>
            <div className="mobile-container">
                <div className={styles.body}>
                    <button className={styles.previousStep}>
                        <img src="src/shared/images/previousStep.svg" alt=""/>
                    </button>
                    <header className={styles.header}>
                        <h4>Сброс пароля</h4>
                        <p>Чтобы сбросить пароль, введите номер телефона:</p>
                    </header>

                    {
                        step === 'enterNumber' ? (
                            <div className={styles.container}>
                                <div className={styles.form}>
                                    <div className={styles.choiceCountry}>
                                        <img src="src/shared/images/kz.svg" alt=""/>
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.75 6C6.75 5.58579 6.41421 5.25 6 5.25C5.58579 5.25 5.25 5.58579 5.25 6H6.75ZM5.46967 7.03033C5.76256 7.32322 6.23744 7.32322 6.53033 7.03033L11.3033 2.25736C11.5962 1.96447 11.5962 1.48959 11.3033 1.1967C11.0104 0.903806 10.5355 0.903806 10.2426 1.1967L6 5.43934L1.75736 1.1967C1.46447 0.903806 0.989593 0.903806 0.696699 1.1967C0.403806 1.48959 0.403806 1.96447 0.696699 2.25736L5.46967 7.03033ZM5.25 6V6.5H6.75V6H5.25Z" fill="#C2C2C2"/>
                                        </svg>
                                    </div>
                                    <div className={styles.inputBody}>
                                        <input 
                                            value={numberValue}
                                            onChange={(e) => handleChange(e.target.value)}
                                            type="text" 
                                            placeholder={'Номер телефона'}
                                        />
                                    </div>
                                </div>

                                <div onClick={handleRequest} className={styles.sendBtn}>
                                    <button disabled={numberValue === '' ? true : false}>Отправить код</button>
                                </div>
                            </div>
                        ) : step === 'code' ? <CodeInput number={numberValue} changeStep={setStep} /> : <NewPassword  />
                    }

                </div>

            </div>
        </>
    )
}