import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
//import {faHeart as faSolidHeart} from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/components/elementProduct.module.scss";

const ElementProduct = () =>{
return (
    <div className={styles.container}>
        <div className={styles.containerFavorite}>
            <FontAwesomeIcon className={styles.faIcon} icon={faHeart}/>
        </div>
        <img className={styles.imgBox} src="https://i.pinimg.com/564x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg" />
        <div className={styles.containerData}>
            <h4 className={styles.titleBox}>This is text is example title product and will have any length</h4>
            <h4 className={styles.priceBox}>1000uah</h4>
        </div>
    </div>
)

}

export default ElementProduct;