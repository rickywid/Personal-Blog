import React from "react"
import styled from 'styled-components';
import { rhythm, scale } from "../utils/typography"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub, faCodepen, faEnvelope, faLinkedinSquare } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



import Navigation from "../components/navigation"
import { socialLink } from '../data'

library.add(fab, faEnvelope)


const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 40rem;
  padding: 2.25rem 1.125rem;
  text-align: center;

  @media (min-width: 500px) {
    text-align: initial;
  }
`
const SocialLinks = styled.ul`
  margin: 0;
`
const SocialItem = styled.li`
  padding: 0;
  list-style: none;
  display: inline-block;
`
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: 40rem;
  margin: 0 auto;
  padding: 1.125;
  border-top: 1px solid black;
`

const renderSocialIcons = social => {
  if(social.icon === "envelope") {
    return (
      <SocialItem>
        <a href="mailto:rickywid@hotmail.com">
          <FontAwesomeIcon icon="envelope" />
        </a>
      </SocialItem>
    )
  }

  return (
    <SocialItem>
      <a href={social.link}>
        <FontAwesomeIcon icon={["fab", social.icon]} />
      </a>
    </SocialItem>
  )
}



 
const Layout = ({ location, title, children }) => {
  let header;
  if(location.pathname === "/" ||
     location.pathname === "/about" ||
     location.pathname === "/blog"
    ) {
    header = (<h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
          }}
        >
          {title}
        </h1>)
  }

  return (
    <Wrapper>
      <Navigation />
      <header>{header}</header>
      <main>{children}</main>
      <Footer>
        <small>© {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
        </small>
        <SocialLinks>
          {socialLink.map(renderSocialIcons)}
        </SocialLinks>
      </Footer>
    </Wrapper>
  )
}

export default Layout
