import React, { useEffect, useState } from 'react'
import A from './A'
import styles from '../styles/components/navBar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import {faBasketShopping, faGlobe} from '@fortawesome/free-solid-svg-icons'
import ModalWindow from './ModalWindow'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../store/store'
import { selectAuthState, setAuthState } from '../store/authSlice'
import { checkUserByToken } from '../common/requestsToBackEnd'


type IPropsNavBar = {
    children?: React.ReactNode
}

const NavBar = ({children}:IPropsNavBar) =>{

    const [showModalWindow, setShowModalWindow] = useState(false)
    const handleShowWindow: React.MouseEventHandler = (event) =>{
        setShowModalWindow(true)
    }

    const currentAusthState = useSelector(selectAuthState)
    const dispatch = useDispatch()

    useEffect(()=>{
        const token: string | null = localStorage.getItem('token')
       
        if(token && !currentAusthState.authState){
            const checkUser = async()=>{
                const dataUser = await checkUserByToken(token)    
                if(dataUser){
                    const payload = {
                        state: true,
                        token: dataUser.token,
                        user: {
                            email: dataUser.user.email,
                            role: dataUser.user.role }
                        } 
                    dispatch(setAuthState(payload))
                }
            }
            checkUser()
        } 
        }, [])

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
                        {currentAusthState.authState? <A href="/user">{currentAusthState.user?.email}</A> : <div className={styles.cursorLink} onClick={handleShowWindow}>authorization</div>} 
                    </li>
                    <li className={styles.liElement}>
                        {currentAusthState.authState? <A href="/favorites/1"><FontAwesomeIcon icon={faHeart} /></A>:<div className={styles.cursorLink} onClick={handleShowWindow}><FontAwesomeIcon icon={faHeart} /></div>} 
                    </li>
                    <li className={styles.liElement}>
                        <A href="/basket"><FontAwesomeIcon icon={faBasketShopping} /></A>
                    </li>
                </ul>
            </nav>

        </header>

        <main className={styles.mainData}>
            <ModalWindow visible={showModalWindow} setVisible={setShowModalWindow}><Login setVisible={setShowModalWindow} /></ModalWindow>
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