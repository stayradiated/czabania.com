import React from 'react'
import styled from '@emotion/styled'

const StyledFooter = styled('footer')`
  border-top: 1px solid #eee;

  color: #aaa;
  text-align: center;
  line-height: 3rem;

  a {
    color: #686de0;
    text-decoration: none;
  }
`

const SiteFooter = () => {
  return (
    <StyledFooter>© {new Date().getFullYear()} George Czabania</StyledFooter>
  )
}

export default SiteFooter
