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

    const personalHanlder = (e) => {
        e.preventDefault()
        finalOrderHandler(personalData)
        setPersonalData({
            name:'',
            phone:'',
            email:'',
            option:''
        })
    }

    const {finalOrderHandler}  = useContext(AppContext)

    return (
        <div className="set-order container">
            <form action="" className="set-order__form" onSubmit={personalHanlder}>
                <label htmlFor="set-order__name">
                    <h3>Как вас зовут?...</h3>
                </label>
                <input 
                    value = {personalData.name}
                    onChange = {(e) => setPersonalData({...personalData,name:e.target.value})}
                    type="text" placeholder="Как вас зовут?..." id="set-order__name" className="set-order__name"/>
                <label htmlFor="set-order__email">
                    <h3>Ваш адрес электронной почты...</h3>
                </label>
                <input 
                    value = {personalData.email}
                    onChange = {(e) => setPersonalData({...personalData,email:e.target.value})}
                    type="email" placeholder="Ваш адрес электронной почты..." id="set-order__email" className="set-order__email"/>
                <label htmlFor="set-order__phone">
                    <h3>Ваш номер телефона?...</h3>
                </label>
                <input 
                    value = {personalData.phone}
                    onChange = {(e) => setPersonalData({...personalData,phone:e.target.value})}
                    type="phone" placeholder="Ваш номер телефона?..." id="set-order__phone" className="set-order__phone"/>
                <p>Способ оплаты:{personalData.option}</p>
                <input
                    id="pay__card"
                    name="pay"
                    type="radio"
                    value="Карта"
                    onChange = {(e) => setPersonalData({...personalData,option:e.target.value})}
                />
                <label htmlFor="pay__card">Карта</label>
                <input
                    id="pay__cash"
                    name="pay"
                    type="radio"
                    value="Наличные"
                    onChange = {(e) => setPersonalData({...personalData,option:e.target.value})}
                />
                <label htmlFor="pay__cash">Наличные</label>
                <button>Оформить заказ</button>
            </form>
        </div>
    )
}