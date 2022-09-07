import React from 'react'
import styles from '../styles/components/button.module.scss'

interface IPropsButton{
    children: React.ReactNode
}

const Button = ({children}:IPropsButton) =>{
    return(
    <div className={styles.button}>
        {children}
    </div>
    )
}

export default Button