import Head from 'next/head'
import Image from 'next/image'
import ArticleList from '../Components/ArticleList';
import styles from '../styles/Home.module.css'
export default function Home({articles}) {
  // console.log(articles);
  return (
    <div className={styles.container}>
     <h1>home</h1>
<ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const articles = await res.json()

  return{
    props:{
      articles
    },
    revalidate: 8,
  }
}
