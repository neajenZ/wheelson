import React, { useEffect } from 'react';
import './successWindow.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import success from '../../shared/images/payment_success.svg'
import error from '../../shared/images/payment_error.svg'

const SuccessPaymentPage = () => {
    const {state} = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (!state.status) return navigate('/profile')
    }, [])
    console.log(state)
    if (state.status === 'success') {
        return (
            <div className="success-screen">
            <div className="purchase">Покупка</div>
            <div className="success-icon">
                <img src={success} alt="" />
            </div>
            <div className="success-text">Успешно</div>
            <div className="subtitle">Пользуйтесь премиумом на здоровье!</div>
            <Link className='green-button' to={'/profile'}>
                Готово
            </Link>
        </div>
        )
    }

    if (state.status === 'error') {
        return (
            <div className="success-screen">
                <div className="purchase">Покупка</div>
                <div className="success-icon">
                    <img src={error} alt="" />
                </div>
                <div className="success-text">Ошибка</div>
                <div className="subtitle">Произошла ошибка</div>
                <Link className='green-button' to={'/profile'}>
                    На главную
                </Link>
            </div>
        );
    }
   
};

export default SuccessPaymentPage;