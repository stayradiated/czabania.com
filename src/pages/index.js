import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Meta from '../components/meta'

const Bio = styled('div')`
margin: 0 1rem 0.5em;

h2 {
  margin: 0;
}
`

const Article = styled('article')`
margin: 0 0 0.5em;
padding-bottom: 0.5rem;

h3 {
  margin: 0 1rem 0.5em;
  margin-bottom: .5rem;
  text-align: left;
}

h3 a {
  color: #686DE0;
  padding: 0 0.125rem;
  transition: all 150ms linear;
  text-decoration: none;
  &:focus,
  &:active,
  &:hover {
    color: #380f6b;
    text-decoration: underline;
  }
}

.image {
  margin: 1rem;
  border-radius: 4px;
}

p {
  margin: 0 1rem;
}
`

class Index extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <Bio>
          <h2>Kia ora, I'm George.</h2>
          <p>
            This is where I share my love of photography, technology and
            programming, along with weekly updates about projects I'm currently
            working on.
          </p>
        </Bio>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Article key={node.fields.slug}>
              <Meta tag={node.frontmatter.tag} date={node.frontmatter.date} />
              <h3>
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              {node.frontmatter.thumbnail && 
                <Img 
                  className='image'
                  fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                />}
              <p
                dangerouslySetInnerHTML={{ __html: node.excerpt }}
              />
            </Article>
          )
        })}
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 120)
          fields {
            slug
          }
          frontmatter {
            tag
            date(formatString: "Do MMMM YYYY")
            title
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 840, maxHeight: 180, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Index
