import axios from "axios";
import { NextPageContext } from "next";
import { IProduct } from "../../interfaces/IProduct";
import styles from "../../styles/components/product.module.scss";

interface IPropsProduct{
    dataElement: IProduct;
}

const Product = ({dataElement}:IPropsProduct) =>{

    return(
        <article>
            <h3 className={styles.titleGroup}>Title GROUP</h3>
            <div className={styles.containerTop}>
                <div>
                    <img src={`${process.env.BACKEND_URL}/${dataElement.img}`} />
                </div>
                <div>
                    <h3>{dataElement.full_name}</h3>
                    <h3>{dataElement.price}uah</h3>
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
    const response = await axios.get(`${process.env.BACKEND_URL}/api/product/${query.id}`);
    return{
        props: {
            dataElement: response.data
        }
    }
}

export default Product;