import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      This blog was created as part of the #100DaysOfGatsby Challenge on Twitter. Creating a Gatsby blog from scratch was challenge 1. Over the last week, I have gone through all Gatsby's introduction tutorials and put this blog togther. I also played a bit with iframe, which you will be able to see in my first blog post entitled "Blogging".
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
