import { useEffect, useState } from 'react';
import styles from './editPassword.module.scss'
import {Link, useNavigate} from "react-router-dom";
import { apiRequests } from '../../shared/api/apiRequests';
import { useSelector } from 'react-redux';
import step from "../../shared/images/previousStep.svg"
export const EditPassword = () => {
    const navigate = useNavigate()
    const {isAuth} = useSelector(state => state.mainSlice)
    const [password, setPassword] = useState({
        old_password: '',
        new_password: '',
        repeat_password: ''
    })

    useEffect(() => {
        if (!isAuth) return navigate('/auth')
    }, [])

    const handleSubmit = async () => {
        if (password.repeat_password !== password.new_password) {
            return alert('Пароли не совпадают')
        }
        await apiRequests.user.updatePassword({
            old_password: password.old_password,
            new_password: password.new_password
        })
            .then((res) => {
                alert('Пароль успешно изменён')
            })
    }

    return (
        <div className={'mobile-container'}>
            <header className="mobile-header">
                <Link to={'/profile'}>
                    <img src={step} alt=""/>
                </Link>
                <h4>Поменять пароль</h4>
            </header>

            <div className={styles.form}>
                <div className="main-input">
                    <input value={password.old_password} onChange={(e) => setPassword(
                        prev => ({
                            ...prev,
                            old_password: e.target.value
                        })
                    )} type="text" placeholder={'Текущий пароль'}/>
                </div>
                <div className="main-input">
                    <input value={password.new_password} onChange={(e) => setPassword(
                        prev => ({
                            ...prev,
                            new_password: e.target.value
                        })
                    )} type="text" placeholder={'Новый пароль'}/>
                </div>
                <div className="main-input">
                    <input value={password.repeat_password} onChange={(e) => setPassword(
                        prev => ({
                            ...prev,
                            repeat_password: e.target.value
                        })
                    )} type="text" placeholder={'Повторите пароль'} />
                </div>
            </div>

            <button onClick={handleSubmit} className={'green-button'}>Сохранить изменения</button>
        </div>
    )
}