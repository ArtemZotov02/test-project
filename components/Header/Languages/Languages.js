import React from 'react'
import style from './style.module.scss'
import { useRouter } from 'next/router';
import classNames from 'classnames';

export default function Languages({menuOpen}) {

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
    <div className={classNames([{[style.active]:menuOpen}, style.languagesRow])}>
        {(locales || [defaultLocale]).map(renderLocales)}
    </div>
  )
}


