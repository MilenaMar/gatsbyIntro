import React from "react"
import {Link} from 'gatsby'
import Footer from "../components/footer"
import Header from "../components/header"

const IndexPage = () => {
  return (
    <div>
    <Header/>
      <h1>This is a Home page</h1>
      <h2>Hi I am Milena a Full-stack developer</h2>
      <Link to="/about">About me</Link>
      <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
      <Footer/>
    </div>
  )
}

export default IndexPage;