import React,{useState,useContext} from "react";
import { AppContext } from "../../context/AppContext";
import './SetOrder.scss';

export default function SetOrder () {

    const [personalData,setPersonalData] = useState({
        name:'',
        phone:'',
        email:'',
        option:''
    })

    const {finalOrderHandler,removeOrderHanlder}  = useContext(AppContext)

    const personalHanlder = (e) => {
        e.preventDefault()
        finalOrderHandler(personalData)
        setPersonalData({
            name:'',
            phone:'',
            email:'',
            option:''
        })
        removeOrderHanlder('i')
    }

    

    return (
        <div className="set-order container">
            <form action="" className="set-order__form" onSubmit={personalHanlder}>
                <input 
                    value = {personalData.name}
                    required
                    onChange = {(e) => setPersonalData({...personalData,name:e.target.value})}
                    type="text" placeholder="Как вас зовут?..." id="set-order__name" className="set-order__name set-order__input"/>
                <input 
                    value = {personalData.email}
                    required
                    onChange = {(e) => setPersonalData({...personalData,email:e.target.value})}
                    type="email" placeholder="Ваш адрес электронной почты..." id="set-order__email" className="set-order__email set-order__input"/>
                <input 
                    value = {personalData.phone}
                    required
                    onChange = {(e) => setPersonalData({...personalData,phone:e.target.value})}
                    type="phone" placeholder="Ваш номер телефона?..." id="set-order__phone" className="set-order__phone set-order__input"/>
                <p>Способ оплаты:{personalData.option}</p>
                <div className="set-order__bottom">
                    <input
                        id="pay__card"
                        required
                        name="pay"
                        type="radio"
                        value="Карта"
                        onChange = {(e) => {
                            setPersonalData({...personalData,option:e.target.value})
                        }}
                    />
                    <label htmlFor="pay__card" className="pay__label">Карта</label>
                    <input
                        id="pay__cash"
                        required
                        name="pay"
                        type="radio"
                        value="Наличные"
                        onChange = {(e) => setPersonalData({...personalData,option:e.target.value})}
                    />
                    <label htmlFor="pay__cash" className="pay__label">Наличные</label>
                </div>
                <div className="set-order__buttons">
                    <button className="set-order__btn" type="submit">Оформить заказ</button>
                </div>
            </form>
        </div>
    )
}