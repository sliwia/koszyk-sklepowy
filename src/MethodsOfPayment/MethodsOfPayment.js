import React, { useState } from 'react';
import './MethodsOfPayment.scss';
import DotpayLogo from '../files/payu_materialy_graficzne/logo_dotpay.png';
import PayuLogo from '../files/payu_materialy_graficzne/payu.png';
import PayLogo from '../files/payu_materialy_graficzne/pay.png';
import { InputWithIcon } from '../ComponentsUI/InputWithIcon/InputWithIcon';


export const MethodsOfPayment = (props) => {
    const [methodDotpay, setMethodDotpay] = useState(true);
    const [methodPayu, setMethodPayu] = useState(false);
    const [methodCashOnDelivery, setMethodCashOnDelivery] = useState(false);

    const checkMethod = (method) => {
        if (method==='dotpay') {
            setMethodDotpay(true);
            setMethodPayu(false);
            setMethodCashOnDelivery(false);
            return
        } else if (method==='payu') {
            setMethodPayu(true);
            setMethodDotpay(false);
            setMethodCashOnDelivery(false);
            return
         }else if (method==='cashOnDelivery') {
            setMethodDotpay(false);
            setMethodPayu(false);
            setMethodCashOnDelivery(true);
            return
        }
    }

    return (
        <>
            <div className="payments-container" >
                <h2>Wybierz metodę płatności</h2>
                <div className="btns-group">
                    <div className={(methodDotpay)? "btn-payment btns-payment--dark":"btn-payment"} onClick={() =>checkMethod('dotpay')}>
                        <img src={DotpayLogo} alt="dotpay-logo" width={140} height={80}/>
                        <span>DotPay</span>
                    </div>
                    <div className={(methodPayu)? "btn-payment btns-payment--dark":"btn-payment"} onClick={() => checkMethod( 'payu')}>
                        <img src={PayuLogo} alt="dotpay-logo" width={80} height={80}/>
                        <span>PayU</span>
                    </div>
                    <div className={(methodCashOnDelivery)? "btn-payment btns-payment--dark":"btn-payment"} onClick={() =>checkMethod('cashOnDelivery')}>
                        <img src={PayLogo} alt="dotpay-logo" width={80} height={80}/>
                        <span>Płatność przy odbiorze</span>
                    </div>
                </div>
                <h2>Podaj dane kontaktowe</h2>
                <div className="personal-form">
                    <div className="item-form">
                        <span>Imię*</span>
                        <InputWithIcon iconType={"user"} type={"text"} placeholderText={""}/>
                    </div>
                    <div className="item-form">
                        <span>Nazwisko*</span>
                        <InputWithIcon iconType={"user"} type={"text"} placeholderText={""}/>
                    </div>
                    <div className="item-form">
                        <span>E-mail*</span>
                        <InputWithIcon iconType={"mail"} type={"text"} placeholderText={""}/>
                    </div>
                    
                </div>
                <span>* pola obowiązkowe</span>
            </div>

        </>
    );
}