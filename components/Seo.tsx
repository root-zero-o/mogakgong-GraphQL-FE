import Head from "next/head";

const Seo = ({title} : {title : string}) => {
  return (
    <Head>
        <title>{title} | 모각공</title>
    </Head>
  )
}

export default Seo;
