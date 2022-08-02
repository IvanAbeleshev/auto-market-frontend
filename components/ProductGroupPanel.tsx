import { ITypeProduct } from "../interfaces/interfaceIncomingData";

interface IPropsProductPanel{
    products: ITypeProduct[]
}

const ProductGroupPanel = ({products}: IPropsProductPanel): JSX.Element  => {
    return(
    <ul>
        {
        products?.map(element=><li key={element.id}>{element.name}</li>)
        }
    </ul>)
}

export default ProductGroupPanel;