import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const BlogList = styled.section`
  display: flex;
  flex-direction: column;
`
const BlogDate = styled.small`
  color: #2c6c4b;
  margin-right: 1rem;
  flex: 1;
  align-self: flex-end;
`
const BlogLink = styled(Link)`
  flex: 5;
`

/*
  https://www.gatsbyjs.org/docs/page-query/#provide-data-to-the-homepage--component
  The "data" prop contains the results of the GraphQL query

  https://www.gatsbyjs.org/docs/location-data-from-props/#example-of-providing-state-to-a-link-component
  "Location" prop represents where the app is currently, 
  where you’d like it to go, and other helpful information.
 */
const BlogListTemplate = ({ data, pageContext, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/blog" : "/blog/" + (currentPage - 1).toString()
  const nextPage = "/blog/" + (currentPage + 1).toString()

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <BlogList>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h6
                  style={{
                    marginBottom: rhythm(1 / 4),
                    marginTop: 0,
                    display: 'flex'
                  }}
                >
                  <BlogDate>{node.frontmatter.date}</BlogDate>&nbsp;
                  <BlogLink style={{ fontSize: '24px' }} to={node.fields.slug}>
                    {title}
                  </BlogLink>
                </h6>
              </header>
            </article>
          )
        })}

{!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
      </BlogList> 
      <Bio />
    </Layout>
  )
}

export default BlogListTemplate

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`

// export const blogListQuery = graphql`
//   query blogListQuery($skip: Int!, $limit: Int!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(
//       sort: { fields: [frontmatter___date], order: DESC }
//       limit: $limit
//       skip: $skip
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//           }
//         }
//       }
//     }
//   }
//  ` 