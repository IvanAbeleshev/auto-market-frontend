import { FormEventHandler, useState } from 'react'
import styles from '../styles/components/login.module.scss'
import stylesButton from '../styles/components/button.module.scss'
import axios from 'axios'
import { IUser } from '../interfaces/IUser'
import { useDispatch } from 'react-redux'
import { setAuthState } from '../store/authSlice'

const Login = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handlerEmailInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(event.target.value)
    }

    const handlerPasswordInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(event.target.value)
    }

    const submitHandler: FormEventHandler = async (event) =>{
        event.preventDefault()
        const data: IUser = {
            email: email,
            password: password
        }
        const resultQuery = await axios.post(process.env.BACKEND_URL+'/api/user/login', data)
        if(resultQuery.status ===200){
            dispatch(setAuthState({...resultQuery.data.data, state: true}))
            //escape form modal window
            
        }
        
    }

    return(
        <div className={styles.mainContainer}>
            <h2 className={styles.headLine}>Log in to YamaGaz</h2>
            <form className={styles.form} onSubmit={submitHandler}>
                <div className={styles.rowLabelInput}>
                    <label className={styles.label} htmlFor="email">Email:</label>
                    <input className={styles.input} type="email" name="email" id="email" required pattern="\S+.*" value={email} onChange={handlerEmailInput} />
                </div>

                <div className={styles.rowLabelInput}>
                    <label className={styles.label} htmlFor="password">Password:</label>
                    <input className={styles.input} type="password" name="password" id="password" required pattern="\S+.*" value={password} onChange={handlerPasswordInput} />
                </div>

                <input className={stylesButton.button} type="submit" value="LogIn" />
            </form>
        </div>
            )

}

export default Login