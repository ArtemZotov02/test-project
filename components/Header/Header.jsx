//img and stile
import logo from '../../public/logo.svg'
import quality from '../../public/quality.svg';
import style from './style.module.scss'

//library
import classNames from 'classnames';
import useTranslation from 'next-translate/useTranslation'

//module
import Image from "next/image";
import Link from 'next/link';

//components
import Modal from '../Modal/Modal';
import Languages from './Languages/Languages';
import Button from '../ui/button/Button';
import ContactForm from '../contactForm/ContactForm';

//hooks
import { useEffect, useState } from 'react';


export default function Headers() {
    const [modalActive, setModalActive] = useState(true);
    const [modalActiveTwo, setModalActiveTwo] = useState(false)

    const [menuOpen, setMenuOpen] = useState(false)


    // const {locale} = useRouter()
    const {t} = useTranslation()


  return (
    <div className={style.container}>
        <div className={style.header}>
            <Link href='/'>
                <Image src={logo} alt='Logo' className={style.header__logo}/>
            </Link>
            <nav className={style.header__nav} >
                <ul className={style.header__nav__list}>
                    <li>{t('common:company')}</li>
                    <li>{t('common:products')}</li>
                    <li>{t('common:articles')}</li>
                    <li>{t('common:decision')}</li>
                    <li>{t('common:contacts')}</li>
                </ul>
            </nav>
            <div className={style.header__actions}>
                <a href='tel:+0800000000'>0 (800) 00-00-00</a>
                <Button 
                    onClick={() => {setModalActive(!modalActive), 
                    setMenuOpen(false)}}
                    className={style.modalBtn}
                >
                    {t('common:btnContact')}
                    
                </Button>
                <div className={style.modalRow}>
                    {modalActive && 
                        <ContactForm modalActive={modalActive} setModalActive={setModalActive} setModalActiveTwo={setModalActiveTwo}/>
                    }
                    {modalActiveTwo && 
                        <Modal className={style.asd} active={modalActiveTwo} setActive={setModalActiveTwo}>
                            <div className={style.modalBlockTwo}>
                                <Image src={quality} alt='done icons'/>
                                <p>{t('common:doneApplication')}</p>
                                <span>{t('common:dataSent')}</span>
                            </div>
                        </Modal>
                    }
                </div>

                <Languages/>
            </div>
            <div className={classNames([{[style.active]:menuOpen}, style.burgerMenu])} onClick={()=>{setMenuOpen(!menuOpen)}}>
                    <span></span>
                    <span></span>
            </div>
            {menuOpen && (
                <div className={style.mobileMenu}>
                    <ul>
                        <li>{t('common:company')}</li>
                        <li>{t('common:products')}</li>
                        <li>{t('common:articles')}</li>
                        <li>{t('common:decision')}</li>
                        <li>{t('common:contacts')}</li>
                    </ul>
                    <a href='tel:+0800000000'>0 (800) 00-00-00</a>
                    <Languages/>
                </div>
            )}      
        </div>
    </div>
    
  )
}

