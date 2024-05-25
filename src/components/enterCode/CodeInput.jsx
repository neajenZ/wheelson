import{ useState, useRef, useEffect } from 'react';
import '../../App.scss';
import styles from './enterCode.module.scss'
import { apiRequests } from '../../shared/api/apiRequests';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setResetData } from '../../shared/store/main';

export const CodeInput = ({number, changeStep}) => {
    const [isDisabled, setDisabled] = useState(true)
    const [code, setCode] = useState(['', '', '', '']);
    const dispatch = useDispatch()
    const inputRefs = useRef([]);

    const handleInputChange = (value, index) => {
        if (/^\d$/.test(value) || value === '') {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);
            if (value !== '' && index < 3) {
                inputRefs.current[index + 1].focus();
            }
        }
    };


    const handleSubmit = async () => {
        let sendCode = ''
        code.map(i => sendCode += i)
        await apiRequests.user.confirmPassword({
            phone: number,
            code: sendCode
        })
            .then((res) => {
                dispatch(setResetData({
                    number: number,
                    token: res.data.token
                }))
                changeStep('new-password')
            })
    }

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && code[index] === '') {
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    useEffect(() => {
        const emptyCodes = code.filter(i => i === '')

        if (emptyCodes.length === 0) {
            setDisabled(false)
        } else {
            setDisabled(true)
        } 
    }, [code])

    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                {code.map((value, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        autoFocus={index === 0 && true}
                        className={`${styles.input} ${value ? `${styles.filled}` : ''}`}
                        value={value}
                        onChange={(e) => handleInputChange(e.target.value, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        ref={(el) => (inputRefs.current[index] = el)}
                    />
                ))}
            </div>

            <button
                disabled={isDisabled}
                onClick={handleSubmit}
            >Войти</button>
        </div>

    );
};