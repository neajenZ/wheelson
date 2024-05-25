import React from 'react';
import './successWindow.scss';

const SuccessScreen = () => {
    return (
        <div className="success-screen">
            <div className="purchase">Покупка</div>
            <div className="success-icon">
                <div className="checkmark-circle">
                    <div className="checkmark">✔</div>
                </div>
            </div>
            <div className="success-text">Успешно</div>
            <div className="subtitle">Пользуйтесь премиумом на здоровье!</div>
            <button className="done-button">Готово</button>
        </div>
    );
};

export default SuccessScreen;