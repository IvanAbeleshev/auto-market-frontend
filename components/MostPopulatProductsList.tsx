import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
//import {faHeart as faSolidHeart} from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/components/mostPopularProductList.module.scss";

const MostPopularProductList = () =>{

    return(
        <>
        <h3>Funny cat</h3>
        <div className={styles.container}>
            <FontAwesomeIcon icon={faHeart}/>
            <img src="https://i.pinimg.com/564x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg" />
            <div>
                <h4>Billi</h4>
                <h4>1000uah</h4>
            </div>
        </div>
        </>
    )
}

export default MostPopularProductList;