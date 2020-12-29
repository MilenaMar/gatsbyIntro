import React from "react"
import {Link} from 'gatsby'
import Layout from "../components/layout"
const IndexPage = () => {
return (
  <Layout>
      <h1>This is a Home page</h1>
      <h2>Hi I am Milena Martinez a Full-stack developer</h2>
      <Link to="/about">About me</Link>
      <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
  </Layout>
)
}

export default IndexPage;