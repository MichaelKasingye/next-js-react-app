import React from 'react'
import {useRouter} from 'next/router'

function Article({articles}) {
    // const router = useRouter();
// const {id} = router.query
console.log(articles);

return (
    <div>
            <h1>this {articles.id}</h1>
            <h3>{articles.title}</h3>
       <p>{articles.body}</p>
        </div>
    )
}

// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    
//     const articles = await res.json()
//     console.log(articles);

//   return{
//     props:{
//       articles
//     }
//   }
// }
export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    
    const articles = await res.json()
    console.log(articles);

  return{
    props:{
      articles
    }
  }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const articles = await res.json()

    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({
        params: {id: id.toString()}
    }))

    return{
        paths,
        fallback: false
      }
}

export default Article

