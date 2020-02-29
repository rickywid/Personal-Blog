import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

/*
  https://www.gatsbyjs.org/docs/page-query/#provide-data-to-the-homepage--component
  The "data" prop contains the results of the GraphQL query

  https://www.gatsbyjs.org/docs/location-data-from-props/#example-of-providing-state-to-a-link-component
  "Location" prop represents where the app is currently, 
  where you’d like it to go, and other helpful information.
 */
const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      index
      <Bio />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`