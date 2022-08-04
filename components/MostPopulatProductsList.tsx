import ElementProduct from "./ElementProduct";
import styles from "../styles/components/mostPopularProductList.module.scss";
import A from "./A";

interface IPropsMostPopularProductList{
    name: string;
    idGroup: number;
}

const MostPopularProductList = ({name, idGroup}:IPropsMostPopularProductList) =>{

    return(
        <>
            <h3 className={styles.title}><A href={`/catalog/${idGroup}`}>{name}</A></h3>
            <div className={styles.container}>
                {[1,2,3,4,5,6,7,8,9].slice(0, Number(process.env.COUNT_MOST_POPULAR_ELEMENTS_OF_GROUP)).map(element=><ElementProduct />)}
            </div>
        </>
    )
}

export default MostPopularProductList;