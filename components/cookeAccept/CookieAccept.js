import React, { useEffect, useState } from 'react'
import Button from '../ui/button/Button'
import useTranslation from 'next-translate/useTranslation'
import style from './style.module.scss'
import Cookies from 'js-cookie'


export default function CookieAccept() {
    const {t} = useTranslation()

    const [showAcceptCookie, setShowAcceptCookie] = useState(false)

    const acceptCookies = () => {
        Cookies.set('isCookieShow', true, { expires: 7, path:'/'})
        setShowAcceptCookie(false);
    }
    useEffect (()=>{
        // Cookies.remove('isCookieShow')
        const cookie = Cookies.get('isCookieShow')
        if (cookie !== 'true') {
            setShowAcceptCookie(true)
        }
    },[])

  return (
    <>
        {showAcceptCookie && (
            <div className={style.cookieBlock}>
                <p className={style.cookieBlock__text}>
                    {t('common:cookiesText')}
                    <a>сookies.</a>
                </p>
                <Button onClick={acceptCookies}>
                    {t('common:cookiesAccept')}
                </Button>
            </div>
        )}
    </>
  )
}
