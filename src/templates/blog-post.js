import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Meta from '../components/meta'

import '../styles/global.css'

const BlogLayout = styled(Layout)`
  .gatsby-resp-image-image,
  .gatsby-resp-image-background-image {
    border-radius: 4px;
  }
`

const Title = styled('h1')`
  color: #686DE0;
`

const Content = styled('div')`
  margin: 0 1rem;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const { previous, next } = this.props.pageContext

    if (post == null) {
      return <div>Loading...</div>
    }

    console.log(post.frontmatter)

    return (
      <BlogLayout
        location={this.props.location}
      >
        <SEO title={post.frontmatter.title} description={post.excerpt} />

        <Meta
          tag={post.frontmatter.tag} 
          date={post.frontmatter.date} 
        />

        <Content>
          <Title>{post.frontmatter.title}</Title>

          <MDXRenderer>{post.body}</MDXRenderer>

          <hr
            style={{
              marginBottom: '0.5rem',
            }}
          />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </Content>
      </BlogLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tag
      }
      body
    }
  }
`
