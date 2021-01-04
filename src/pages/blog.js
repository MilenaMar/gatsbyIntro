import React from "react"
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery (graphql`
  query{
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            date
          }
        }
      }
    }
  }`)
  return (
    <Layout>
      <h1>My Post</h1>
      <ol>
      {data.allMarkdownRemark.edges.map((e)=> 
      <li>
      <h2>{e.node.frontmatter.title}</h2>
       <p>{e.node.frontmatter.date}</p>
      </li> 
      )}
      </ol>
      </Layout>
  )
}

export default BlogPage;