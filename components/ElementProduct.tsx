import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
//import {faHeart as faSolidHeart} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/components/elementProduct.module.scss'
import { IShortProduct } from '../interfaces/IProduct'
import A from './A'
import { useSelector } from 'react-redux'
import { selectAuthState } from '../store/authSlice'
import { MouseEventHandler, useState } from 'react'
import ModalWindow from './ModalWindow'
import Login from './Login'
import { addProductToFavorites } from '../common/requestsToBackEnd'

interface IPropsElementProduct{
    dataElement: IShortProduct
}

const ElementProduct = ({dataElement}: IPropsElementProduct) =>{
    const [visibleModalWindow, setVisibleModalWindow] = useState(false)
    const currentAuthState = useSelector(selectAuthState)

    const handleClickFavor:MouseEventHandler=(event)=>{
        if(!currentAuthState.authState){
            setVisibleModalWindow(true)
            return
        }   
        //create query to add or remove goods on favor
        addProductToFavorites(dataElement.id, currentAuthState.token)
    }

    return (
    <div className={styles.container}>
        <ModalWindow visible ={visibleModalWindow} setVisible={setVisibleModalWindow}><Login setVisible={setVisibleModalWindow}/></ModalWindow>
        <div className={styles.containerFavorite}>
            <div onClick={handleClickFavor}><FontAwesomeIcon className={styles.faIcon} icon={faHeart} /></div>  
        </div>
        <img className={styles.imgBox} src={dataElement.mainNameImg?`${process.env.BACKEND_URL}/${dataElement.mainNameImg}`: '/imageNotFound.png'} />
        <div className={styles.containerData}>
            <h4 className={styles.titleBox}><A href={`/product/${dataElement.id}`}>{dataElement.name}</A></h4>
            <h4 className={styles.priceBox}>{dataElement.actualPrice}uah</h4>
        </div>
    </div>
)

}

export default ElementProduct