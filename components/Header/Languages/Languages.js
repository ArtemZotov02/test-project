import React from 'react'
import style from './style.module.scss'
import { useRouter } from 'next/router';


export default function Languages() {

  const { locale, locales, defaultLocale, asPath } = useRouter();

  const renderLocales = (localeName, key) => {
    const isCurrent = localeName === locale
    const Component = isCurrent ? 'span' : 'a' ;
    
    return (
        <Component
          {...(!isCurrent ? {href: `/${localeName}${asPath}`} : {})}
          key={`${localeName}${key}`}
          className={style.languagesRow__btn}
        >
          {localeName}
        </Component>
        
    );
  }
   
  return (
    <div className={style.languagesRow}>
        {(locales || [defaultLocale]).map(renderLocales)}
    </div>
  )
}


