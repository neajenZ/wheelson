import { useDispatch, useSelector } from 'react-redux';
import { apiRequests } from '../../shared/api/apiRequests';
import styles from './setNewPassword.module.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { setUserData } from '../../shared/store/main';

const NewPassword = () => {
    const [passwordValue, setPassword] = useState('')
    const dispatch = useDispatch()
    const {mainSlice} = useSelector(state => state)
    const navigate = useNavigate()
    const handleSubmit = async () => {
        const body = {
            token: mainSlice.token,
            phone: mainSlice.number,
            password: passwordValue
        }
        await apiRequests.user.resetPassword(body)
            .then((res) => {
                if (res.data.status === 'success') {
                    
                    apiRequests.user.authorization({phone: body.phone, password: body.password})
                        .then((res) => {
                            Cookies.set('accessToken', res.data.access_token)
                            Cookies.set('refreshToken', res.data.refresh_token)

                            apiRequests.user.getData()
                                .then((res) => {
                                    dispatch(setUserData(res.data))
                                    navigate('/profile')
                                })
                        })
                }
            })
    }


  return (
    <div className={styles.wrapper}>
        <div className="main-input">
            <label htmlFor="">Новый пароль</label>
            <input type="text" value={passwordValue} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleSubmit} className="green-button">Сохранить</button>
    </div>
  )
};

export default NewPassword;
