import { ITypeProduct } from '../interfaces/ITypeProduct'
import styles from '../styles/components/productGroupPanel.module.scss'
import A from './A'

interface IPropsProductPanel{
    products: ITypeProduct[]
}

const ProductGroupPanel = ({products}: IPropsProductPanel): JSX.Element  => {
    return(
    <ul className={styles.widhtStyle}>
        {
        products?.map(element=><li className={styles.liElement} key={element.id}><A href={`/catalog/${element.id}/1`}>{element.name}</A></li>)
        }
    </ul>)
}

export default ProductGroupPanel