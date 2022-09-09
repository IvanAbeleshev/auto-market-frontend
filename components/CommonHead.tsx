import Head from 'next/head'

interface IPropsCommonHead{
    title?: string,
    aditionalKeywords?: string
}

const CommonHead = ({title, aditionalKeywords}:IPropsCommonHead) =>{
    return(<Head>
        <title>{title? title: "Main" } | YamaGaz</title>
        <meta name="author" content="Abeleshev Ivan" />
        <meta charSet="utf-8" />
        <meta name="keywords" content= {`auto, shop, store, gas, uaz, volga, gazel, магазин, автомагазин, волга, газель, уаз ${aditionalKeywords}`} />
      </Head>)
}

export default CommonHead