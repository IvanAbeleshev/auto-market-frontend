import { useEffect } from 'react'
import styles from '../styles/components/bottomMessage.module.scss'

interface IPropsBottomMessage{
    visible: boolean,
    setVisible: Function,
    children: React.ReactNode,
    timeout?: number
}

const BottomMessage = ({visible, setVisible, children, timeout}:IPropsBottomMessage) =>{
    useEffect(()=>{
        setTimeout(()=>setVisible(false), timeout || 5000)
    },[visible])
    return(
        visible?<div className={styles.container}>{children}</div>:<></>
    )
}

export default BottomMessage