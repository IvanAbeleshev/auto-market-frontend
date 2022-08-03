import { useRouter } from "next/router";
import CommonHead from "../../components/CommonHead";

const groupCatalog = () =>{
    const dataRoute = useRouter();
    return (
        <>
            {
                //maybe will use redux to save cuurent catalogname and id for title
            }
            <CommonHead title="Catalog"/>
            <h1>this page with id: {dataRoute.query.idGroup}</h1>
        </>
    )
}

export default groupCatalog;