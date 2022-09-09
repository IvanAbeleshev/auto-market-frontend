import { Fragment } from 'react'
import styles from '../styles/components/login.module.scss'

const Login = () =>{

    return(
        <div className={styles.mainContainer}>
            <h2>Log in to YamaGaz</h2>
            <form className={styles.form}>
                <label htmlFor="email">Email: <input type="email" name="email" id="email"/></label>
                <label htmlFor="password">Password: <input type="password" name="password" id="password"/></label>
                <input type="submit" value="LogIn" />
            </form>
        </div>
            )

}

export default Login