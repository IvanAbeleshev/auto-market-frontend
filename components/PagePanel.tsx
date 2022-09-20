import styles from '../styles/components/pagePanel.module.scss'
import A from './A'

interface IPropsPagePanel{
    paternLink: string,
    countElement: number,
    countElementsOnPage: number,
    currentPage: number    
}

interface IPageData{
    title: string,
    id: number,
    current: boolean
}

const getArrayPages = ({countElement, countElementsOnPage, currentPage}: IPropsPagePanel):IPageData[] =>{
    const countPages = countElement/countElementsOnPage===Math.trunc(countElement/countElementsOnPage)?Math.trunc(countElement/countElementsOnPage):Math.trunc(countElement/countElementsOnPage)+1 
    const arrayResult: IPageData[] = []
    if(countPages<9){
        for(let index=0; index<9; index++){
            arrayResult.push({title: String(index+1), id: index+1, current: index+1===currentPage})
        }
    }else if(countPages>1){
        //before currentpage
        if(currentPage<6){
            for(let index=0; index<7; index++){
                arrayResult.push({title: String(index+1), id: index+1, current: index+1===currentPage})
            }
            arrayResult.push({title: '...', id: 8, current: false})
            arrayResult.push({title: String(countPages), id: countPages, current: false})
        }else if(currentPage>=6 && (countPages-5)> currentPage){
            arrayResult.push({title: '1', id: 1, current: false})
            arrayResult.push({title: '...', id: currentPage-3, current: false})
            arrayResult.push({title: String(currentPage-2), id: currentPage-2, current: false})
            arrayResult.push({title: String(currentPage-1), id: currentPage-1, current: false})
            arrayResult.push({title: String(currentPage), id: currentPage, current: true})
            arrayResult.push({title: String(currentPage+1), id: currentPage+1, current: false})
            arrayResult.push({title: String(currentPage+2), id: currentPage+2, current: false})
            arrayResult.push({title: '...', id: currentPage+3, current: false})
            arrayResult.push({title: String(countPages), id: countPages, current: false})
        }else{
            arrayResult.push({title: '1', id: 1, current: false})
            arrayResult.push({title: '...', id: countPages-7, current: false})    
            for(let index=countPages-7; index<countPages; index++){
                arrayResult.push({title: String(index+1), id: index+1, current: index+1===currentPage})   
            }
        }
    }
    return arrayResult
}

const PagePanel = (props: IPropsPagePanel) =>{
    const arrayResult = getArrayPages(props)
    return(arrayResult.length>0?
        <div className={styles.containerPanel}>
            {props.currentPage>1?<A href={props.paternLink+String(props.currentPage-1)}><h2>{"<"}</h2></A>:<h2>{"<"}</h2>}
            <div className={styles.containerPageLink}>
                {arrayResult.map(element=><div key={element.id}><A href={props.paternLink+String(element.id)}><h2 className={element.current?styles.currentPage:''}>{element.title}</h2></A></div>)}
            </div>
            {arrayResult.at(-1)?.id !== props.currentPage?<A href={props.paternLink+String(props.currentPage+1)}><h2>{">"}</h2></A>:<h2>{">"}</h2>}
        </div>
        :
        <></>
    )
}

export default PagePanel