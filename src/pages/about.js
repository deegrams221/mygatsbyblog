import { css } from "@emotion/core"
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
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        font-style: normal;
      `}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://dianagrams.dev/"
      >
        Portfolio
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/diana-grams/"
      >
        LinkedIn
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/deegrams221/"
      >
        GitHub
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/deegrams221"
      >
        Twitter
      </a>
    </div>
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
