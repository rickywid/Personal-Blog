import React from "react"
import styled from 'styled-components';
import { rhythm, scale } from "../utils/typography"

import Navigation from "../components/navigation"

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 36rem;
  padding: 2.25rem 1.125rem;
  text-align: center;

  @media (min-width: 500px) {
    text-align: initial;
  }
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const header = (<h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
        }}
      >
        {title}
      </h1>)

  return (
    <Wrapper>
      <Navigation />
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <small>© {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        </small>
      </footer>
    </Wrapper>
  )
}

export default Layout
