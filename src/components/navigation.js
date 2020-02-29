/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const Nav = styled.nav`
    ul {
        margin: 0;
        text-align: right;

        li {
            display: inline-block;
            margin-right: 1rem;
        }
    }
`
const Navigation = () => {
  return (
    <Nav>
        <ul>
            <li>
                <Link to={`/`}>Portfolio</Link>
            </li>
            <li>
                <Link to={`/about`}>About</Link>
            </li>
            <li>
                <Link to={`/blog`}>Blog</Link>
            </li>
        </ul>
    </Nav>
  )
}

export default Navigation
