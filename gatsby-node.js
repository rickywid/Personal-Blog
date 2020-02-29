const path = require(`path`)

//  A Gatsby source plugin for sourcing data into your 
//  Gatsby application from your local filesystem. 
const { createFilePath } = require(`gatsby-source-filesystem`)


/*
  https://www.gatsbyjs.org/docs/node-apis/#createPages

  Tell plugins to add pages. This extension point is called only after the initial 
  sourcing and transformation of nodes plus creation of the GraphQL schema are complete 
  so you can query your data in order to create pages.
*/
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Create blog-list pages
  const postsPerPage = 10
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}

/*
  https://www.gatsbyjs.org/docs/node-apis/#onCreateNode

  onCreateNode is called when a new node is created. Plugins wishing to extend or transform 
  nodes created by other plugins should implement this API.
*/
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    /*
      https://www.gatsbyjs.org/docs/actions/#createNodeField
      
      Extend another node. The new node field is placed under the 
      fields key on the extended node object.
    */
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
