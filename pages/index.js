import Head from "next/head";
import style from './style.module.scss';
import Banner from '../public/banner.svg'

import Button from '../components/ui/button/Button'

import Image from "next/image";
import useTranslation from 'next-translate/useTranslation'


export default function Home() {
      const {t} = useTranslation()

  return (
    <div>
      <Head>
        <title>Главная</title>
      </Head>
       <div className={style.container}>
          <div className={style.banner}>
            <div className={style.banner__title}>
              <p className={style.banner__title__name}>Meltem</p>
              <span className={style.banner__title__text}>{t('common:bannerTitle')}</span>
              <Button>
                {t('common:bannerProductsBtn')}
              </Button>
            </div>
            <div className={style.banner__img}>
              <Image src={Banner} alt="Banner image"/>
            </div>
            <div className={style.banner__subtitle}>
              <span className={style.banner__subtitle__text}>
                {t('common:bannerSubtitle')}
              </span>
              <p className={style.banner__subtitle__name}>
                Meltem V-II 30-N
              </p>
              <Button>
                {t('common:bannerMoreBtn')}
              </Button>
            </div>
          </div>
       </div>
    </div>
  );
}



