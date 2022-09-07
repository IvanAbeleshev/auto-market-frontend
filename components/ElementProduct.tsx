import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
//import {faHeart as faSolidHeart} from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/components/elementProduct.module.scss'
import { IProduct, IShortProduct } from '../interfaces/IProduct'
import A from './A'

interface IPropsElementProduct{
    dataElement: IShortProduct
}

const ElementProduct = ({dataElement}: IPropsElementProduct) =>{
    console.log(dataElement)
    return (
    <div className={styles.container}>
        <div className={styles.containerFavorite}>
            <FontAwesomeIcon className={styles.faIcon} icon={faHeart}/>
        </div>
        <img className={styles.imgBox} src={dataElement.mainNameImg?`${process.env.BACKEND_URL}/${dataElement.mainNameImg}`: '/imageNotFound.png'} />
        <div className={styles.containerData}>
            <h4 className={styles.titleBox}><A href={`/product/${dataElement.id}`}>{dataElement.fullName}</A></h4>
            <h4 className={styles.priceBox}>{dataElement.actualPrice}uah</h4>
        </div>
    </div>
)

}

export default ElementProduct