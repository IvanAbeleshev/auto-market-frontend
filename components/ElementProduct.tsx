import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
//import {faHeart as faSolidHeart} from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/components/elementProduct.module.scss";
import { IProduct } from '../interfaces/IProduct';
import A from "./A";

interface IPropsElementProduct{
    dataElement: IProduct;
}

const ElementProduct = ({dataElement}: IPropsElementProduct) =>{
    return (
    <div className={styles.container}>
        <div className={styles.containerFavorite}>
            <FontAwesomeIcon className={styles.faIcon} icon={faHeart}/>
        </div>
        <img className={styles.imgBox} src={`${process.env.BACKEND_URL}/${dataElement.img}`} />
        <div className={styles.containerData}>
            <h4 className={styles.titleBox}><A href={`/product/${dataElement.id}`}>{dataElement.full_name}</A></h4>
            <h4 className={styles.priceBox}>{dataElement.price}uah</h4>
        </div>
    </div>
)

}

export default ElementProduct;