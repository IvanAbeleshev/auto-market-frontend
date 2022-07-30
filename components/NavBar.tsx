import React from "react";
import A from "./A";
import styles from "../styles/components/navBar.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons';

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
                        <A href="/basket"><FontAwesomeIcon icon={faHeart} /></A>
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
        </>
    )
}

export default NavBar;