import ElementProduct from "./ElementProduct";
import styles from "../styles/components/ProductList.module.scss";
import A from "./A";
import { IProduct } from "../interfaces/IProduct";

interface IPropsProductList{
    name: string;
    idGroup: number;
    limit?: boolean;
    dataElemets?:IProduct[];
}

const ProductList = ({dataElemets, name, idGroup, limit=false}:IPropsProductList) =>{

    return(
        <>{console.log(dataElemets)}
            <h3 className={styles.title}><A href={`/catalog/${idGroup}`}>{name}</A></h3>
            <div className={styles.container}>
                {
                    limit?
                    dataElemets?.slice(0, Number(process.env.COUNT_MOST_POPULAR_ELEMENTS_OF_GROUP)).map(element=><ElementProduct key={element.id} dataElement={element} />):
                    dataElemets?.map(element=><ElementProduct key={element.id} dataElement={element}/>)}
            </div>
        </>
    )
}

export default ProductList;