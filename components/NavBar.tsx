import React from 'react'
import A from './A'
import styles from '../styles/components/navBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import {faBasketShopping, faGlobe} from '@fortawesome/free-solid-svg-icons'


type IPropsNavBar = {
    children?: React.ReactNode
}

const NavBar = ({children}:IPropsNavBar) =>{
    return(
        <>
        <header className={styles.container}>
            <nav className={styles.navigation}>
                <A href="/">
                    <img
                        className={styles.logo}
                        src="/img/logo-auto-market.png" />
                </A>
                <ul className={styles.ulNav}>
                    <li className={styles.liElement}>
                        <A href="/catalog">authorization</A>
                    </li>
                    <li className={styles.liElement}>
                        <A href="/favourites"><FontAwesomeIcon icon={faHeart} /></A>
                    </li>
                    <li className={styles.liElement}>
                        <A href="/basket"><FontAwesomeIcon icon={faBasketShopping} /></A>
                    </li>
                </ul>
            </nav>

        </header>

        <main className={styles.mainData}>
            {children}
        </main>

        <footer className={styles.footer}>
            <A href="/">
                <img
                    className={styles.logo}
                    src="/img/logo-auto-market.png" />
            </A>
            <ul className={styles.ulNavFooter}>
                <li className={styles.liElement}>
                    <A href="/favourites">
                        Избранное
                    </A>
                </li>
                <li className={styles.liElement}>
                    <A href="/basket">
                        Корзина
                    </A>
                </li>
                <li className={styles.liElement}>
                    <A href="/contact">
                        Контакты
                    </A>
                </li>
                <li className={styles.liElement}>
                    <A href="/delivery">
                        Доставка и оплата
                    </A>
                </li>
            </ul>
            <div>
                <div className={styles.containerSocialNetwork}>
                    <ul className={styles.ulNav}>
                        <li className={styles.liElement}>
                            Viber
                        </li>
                        <li className={styles.liElement}>
                            Telegram
                        </li>
                    </ul>
                </div>
                <div className={styles.containerLanguage}>
                    <FontAwesomeIcon icon={faGlobe} />
                    <ul className={styles.ulNav}>
                        <li className={styles.liElement}>
                            <A href="/">
                                ua
                            </A>
                        </li>
                        <li className={styles.liElement}>
                            <A href="/">
                                ru
                            </A>
                        </li>
                        <li className={styles.liElement}>
                            <A href="/">
                                eng
                            </A>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    )
}

export default NavBar