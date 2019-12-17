import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'

const StyledHeader = styled('header')`
  width: 100%;
  margin-bottom: 1rem;
  border-bottom: 1px solid #EEE;
`

const Nav = styled('nav')`
  margin: 0 auto;
  padding: 0 1.5rem;
  line-height: 3rem;

  ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline;
    margin: 0 0.5em 0 0;

    &:first-of-type {
      position: relative;
      margin: 0;
      flex-basis: 100%;

      a {
        color: #BBB;
      }
    }
  }

  a {
    text-decoration: none;
    color: #CCC;
    font-weight: 600;
    transition: all 0.2s;

    &:hover {
      color: #333;
    }
  }
`

const activeLinkStyle = {
  textDecoration: 'underline'
}


const SiteHeader = (props) => {
  const { siteTitle } = props

  return (
    <StyledHeader>
      <Nav>
        <ul>
          <li>
            <Link to="/">
              {siteTitle}
            </Link>
          </li>
          {/* <li> */}
          {/*   <Link to="/about/" activeStyle={activeLinkStyle}> */}
          {/*     about */}
          {/*   </Link> */}
          {/* </li> */}
          <li>
            <a href="https://github.com/stayradiated">
              github
            </a>
          </li>
        </ul>
      </Nav>
    </StyledHeader>
  )
 }

SiteHeader.propTypes = {
  siteTitle: PropTypes.string,
}

SiteHeader.defaultProps = {
  siteTitle: '',
}

export default SiteHeader
