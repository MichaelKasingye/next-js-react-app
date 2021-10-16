import React from 'react'
import Link from 'next/Link'
import styles from '../styles/Home.module.css'

function ArticleList({articles}) {
    console.log(articles);
    return (
        <div className={styles.ArticleList}>

             {articles.map((articles)=>(
<Link href="/article/[id]" as={`/article/${articles.id}`} key={articles.id}>
    <a>
       <h3>{articles.title}</h3>
       <p>{articles.body}</p>
    </a>
</Link>
     ))}


        </div>
    )
}

export default ArticleList
