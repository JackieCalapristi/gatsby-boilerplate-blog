const path = require("path")

const { createFilePath } = require("gatsby-source-filesystem") 

// First create the slug for posts and pages
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `content`
    })

    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const content = await graphql(`
    {
      posts: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "post" } } }
      ) {
        edges {
          node {
            frontmatter {
              published
            }
            fields {
              slug
            }
          }
        }
      }

      pages: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "page" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // Do nothing more if error
  if (content.error) return;

  const allPosts = content.data.posts.edges;
  const allPages = content.data.pages.edges;

  // Create individual post pages
  allPosts.forEach(({ node }) => {
    if (node.frontmatter.published) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/Post.js`),
        context: {
          // Data passed to the context is available in page queries
          // As graphQL variables
          slug: node.fields.slug
        }
      })
    }
  })

  // Create individual pages
  allPages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/Page.js`),
      context: {
        // Data passed to the context is available in page queries
        // As graphQL variables
        slug: node.fields.slug
      }
    })
  })

} 

// For absolute imports
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    }
  })
}