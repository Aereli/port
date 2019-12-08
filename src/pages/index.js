import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Menu from "../components/menu"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header/>
    <Menu/>
    <Image/>
  </Layout>
)

export default IndexPage
