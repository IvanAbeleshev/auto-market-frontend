import { useState } from 'react'
import styles from '../styles/components/bottomMessage.module.scss'

const BottomMessage = () =>{
    const[visible, setVisible] = useState(false)

    return(
        visible?<div className={styles.container}>that is bottomMessage</div>:<></>
    )
}

export default BottomMessage