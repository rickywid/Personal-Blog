/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

const Highlight = styled.span`
  color: red;
`

const About = ({location}) => {
 
  const siteTitle = "About Me"

  return (
     <Layout location={location} title={siteTitle}>
      <SEO
        title={siteTitle}
      />
      <div>
        <p>
          I am a
          <Highlight> Web Developer </Highlight>
          with
          <Highlight> 3 years </Highlight>
          of professional experience focusing on
          <Highlight> Front End Development</Highlight>
          . My main responsibilities as a Front End Developer involves translating mockup designs, creating responsive layouts and building single page applications using
          <Highlight> JavaScript </Highlight>
          frameworks such as
          <Highlight> React</Highlight>
          . As a developer I am continuously learning, building and experimenting with different tools and technologies. During my days off, you can catch me cycling and exploring the city.
        </p>
        <ul className="bio-skills">
          <li>
            <Highlight>Languages: </Highlight>
             HTML, CSS, JavaScript/ES6, Python
          </li>
          <li>
            <Highlight>Frameworks: </Highlight>
            React, Angular, Vue, Node/Express, Jquery, MVC
          </li>
          <li>
            <Highlight>Databases: </Highlight>
            Postgres, MongoDB
          </li>
          <li>
            <Highlight>Deployment: </Highlight>
            CircleCI, Heroku, Docker
          </li>
          <li>
            <Highlight>Source Control: </Highlight>
            Git/Github
          </li>
          <li>
            <Highlight>Test Automation: </Highlight>
            Selenium, Jest, React-Testing-Library
          </li>
          <li>
            <Highlight>Operating Systems: </Highlight>
            Linux, Windows
          </li>
        </ul>
        <p>
          If you would like to get in touch, you can contact me via email at
          <Highlight> rickywid@hotmail.com</Highlight>
        </p>
      </div>
    </Layout>
  )
}

export default About
