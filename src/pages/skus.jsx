import React from "react"
import { Link } from "gatsby"
import { Layout, Container } from 'layouts';
//import SEO from "../components/SEO"
import Skus from "../components/Products/Skus"
const skus = () => (
  <Layout>
    <h1>These are the skus and quantity fetched by the graphql query.</h1>
    <Skus />
  </Layout>
)
export default skus