import axios from 'axios'
import { NextPageContext } from 'next'
import Button from '../../components/Button'
import { IProduct } from '../../interfaces/IProduct'
import styles from '../../styles/pages/product.module.scss'

interface IPropsProduct{
    dataElement: IProduct
}

const Product = ({dataElement}:IPropsProduct) =>{

    return(
        <article>
            <h3 className={styles.titleGroup}>Title GROUP</h3>
            <div className={styles.containerTop}>
                <div>
                    <img src={`${process.env.BACKEND_URL}/${dataElement.img}`} />
                </div>
                <div className={styles.containerNameAndPrice}>
                    <h3 className={styles.nameContainer}>{dataElement.full_name}</h3>
                    <div className={styles.priceAndDiscount}>
                        <div className={styles.priceContainer}>
                            <h2 className={styles.actualPrice}>{dataElement.price}uah</h2>
                            <h3 className={styles.oldPrice}>{dataElement.price}uah</h3>
                        </div>
                        {dataElement.price-dataElement.price==0&&<h2 className={styles.discountContainer}>-{dataElement.price-dataElement.price}%</h2>}
                    </div>
                </div>
            </div>

            <div className={styles.containerBottom}>
                <div className={styles.descriptionBox}>
                    <h3 className={styles.descriptionTitleBox}>
                        Description and characteristics
                    </h3>
                    <div className={styles.desriptionData}>
                        {dataElement.unit}
                        {dataElement.remainder}
                    </div>
                </div>

                <div className={styles.buttonContainer}>
                    <Button>
                        Purchase    
                    </Button>
                    <Button>
                        add to basket    
                    </Button>
                </div>
            </div>
        </article>
    )
}

interface NextPageContextExtend extends NextPageContext{
    query:{
        id: string
    }
}

export const getServerSideProps = async ({query}:NextPageContextExtend) => {
    const response = await axios.get(`${process.env.BACKEND_URL}/api/product/${query.id}`)
    return{
        props: {
            dataElement: response.data
        }
    }
}

export default Product