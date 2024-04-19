import CloseBtn from '../../public/closeBtn.svg';
import style from './style.module.scss'

import useTranslation from 'next-translate/useTranslation'
import Image from "next/image";

import Button from '../ui/button/Button';
import Modal from '../Modal/Modal';

import { useEffect, useState } from 'react';

export default function ContactForm({modalActive, setModalActive, setModalActiveTwo}) {
    const {t} = useTranslation()

    const [name, setName] = useState('')
    const [number, setNumber] = useState('+380')
    const [nameDirty, setNameDirty] = useState(false)
    const [numberDirty, setNumberDirty] = useState(false)  


    const validatePhoneNumber = (value) => {
        const phoneNumberPattern = /^\+380\d{9}$/;
        return phoneNumberPattern.test(value);
    }
    const handleInput = (e) => {    
        const inputValue = e.target.value;
        if (!inputValue.startsWith('+380')) {
            setNumber('+380' + inputValue.substring(4));
        } else {
            setNumber(inputValue);
        }
    };

    const sendForm = (e) => {
        let isError = false

        if(!name.trim() || name.length < 3) {
            setNameDirty(true)
            isError = true
        } else {
            setNameDirty(false)
        }

        if(validatePhoneNumber(number)) {
            setNumberDirty(false) 
        } else {
            setNumberDirty(true) 
            isError= true
        }

        if(!isError) {
            setModalActive(false)
            setModalActiveTwo(true)
            setTimeout(()=> {
                setModalActiveTwo(false)
            }, 4000)
        }
    }


  return (
    <Modal active={modalActive} setActive={setModalActive}>
        <div className={style.modalBlock}>
            <div className={style.closeModal} onClick={()=>{setModalActive(false)}}>
                <Image src={CloseBtn} alt='close button' width={30}/>
            </div>
                <p className={style.modalBlock__title}>{t('common:request')}</p>
                <span className={style.modalBlock__subtitle}>{t('common:smsContact')}</span>
                <div className={style.modalBlock__form}>
                    <input 
                        type='text' 
                        placeholder='Ваше ім’я*' 
                        value={name}
                        onInput={e => {setName(e.target.value); setNameDirty(false)}}
                        style={{
                            color: nameDirty ? 'red' : '#333333',
                            background: nameDirty ? '#FFCCCC33' : '#FAFAFA',
                            border: `1px solid ${nameDirty ? 'red' : '#333333'}`

                        }}
                    />
                    <input
                        type='tel'    
                        maxLength="13"                                    
                        value={number}
                        placeholder='Номер'
                        onInput={e => {
                            setNumber(e.target.value); 
                            setNumberDirty(false); 
                            handleInput(e)
                        }}
                        style={{
                        color: numberDirty ? 'red' : '#333333',
                        background: numberDirty ? '#FFCCCC33' : '#FAFAFA',
                        border: `1px solid ${numberDirty ? 'red' : '#333333'}`
                        }}
                        pattern="[0-9]*"
                    />
                    <Button onClick={sendForm}>{t('common:sendBtn')}</Button>
                </div>
                <div className={style.modalBlock__rules}>
                    {t('common:agreeRules')}
                    <a>
                        {t('common:rules')}
                    </a>
                </div>
        </div>
    </Modal>
  )
}
