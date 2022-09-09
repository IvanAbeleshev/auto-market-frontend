import React, { useEffect, useState } from 'react'
import styles from '../styles/components/modalWindow.module.scss'

interface IPropsModalWindow{
    children: React.ReactNode,
    visible: boolean,
    setVisible: Function
}

const ModalWindow = ({visible, setVisible, children}:IPropsModalWindow) =>{

    useEffect(()=>{
        setVisible(visible)
    },[visible])

    const handleModalContainer:React.MouseEventHandler = () =>{
        setVisible(false)
    }

    const handleModalContent:React.MouseEventHandler = (event) =>{
        event.stopPropagation()
    }

    return(
        visible?
        <div className={styles.modalContainer} onClick={handleModalContainer}>
            <div className={styles.modalContent} onClick={handleModalContent}>
                {children}
            </div>
        </div>
        :
        <></>
    )

}

export default ModalWindow