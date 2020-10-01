import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      I enjoy rock climbing, hiking, and yoga. I worked in special education and
      behavior therapy for 4 years. I'm a US Navy Veteran, have an Associates
      degree in Liberal Arts: Social and Behavior Science, as well as a
      Bachelors degree is Anthropology. I recently completed the Full Stack Web
      Development program at Lambda School, and I'm currently working as a Team
      Lead for Lambda School's computer science unit. I love helping people and
      I think programming is a great way to do that.
    </p>
    <p>
      This blog was created as part of the #100DaysOfGatsby Challenge on
      Twitter. Creating a Gatsby blog from scratch was challenge 1. Over the
      last week, I have gone through all Gatsby's introduction tutorials and put
      this blog togther. I also played a bit with iframe, which you will be able
      to see in my first blog post entitled "Blogging".
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
