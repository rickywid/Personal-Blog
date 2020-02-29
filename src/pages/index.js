import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { data } from '../data'

 const Project = styled.div`
  display: flex;
  margin-bottom: 4rem;
`;

 const ProjectImage = styled.img`
  align-self: flex-start;
  flex: 1;
  margin-right: 1rem;
 `
 const ProjectDetail = styled.div`
   flex: 3;
 `
 const ProjectName = styled.h3`
   margin-bottom: 1rem;
   margin-top: 0;
 `
 const ProjectTechnologies = styled.ul`
   margin-bottom: 1rem;
   margin-left: 0;
 `
 const ProjectTechnologyList = styled.li`
  padding: 0;
  list-style: none;
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 0;
 `
 const ProjectTechnologyName = styled.p`
   font-size: 16px;
   color: grey;
 `
 const ProjectButtons = styled.div`
   a {
     margin-right: 1rem;
     border: 1px solid black;
     padding: 5px 10px;
     background: black;
     color: white;
     text-shadow: none;

     &:hover {
       background white;
       color: black;
     }
   }
 `

/*
  https://www.gatsbyjs.org/docs/page-query/#provide-data-to-the-homepage--component
  The "data" prop contains the results of the GraphQL query

  https://www.gatsbyjs.org/docs/location-data-from-props/#example-of-providing-state-to-a-link-component
  "Location" prop represents where the app is currently, 
  where you’d like it to go, and other helpful information.
 */

 class BlogIndex extends React.Component {
  constructor({data, location}) {
    super({data, location})
      this.data = data;
      this.location = location;
  }

  renderProjects = (project) => {
    return (
      <Project>
        <ProjectImage src={project.img} alt={project.name} />
        <ProjectDetail className="project-detail">
          <ProjectName className="highlight">{project.name}</ProjectName>
          <ProjectTechnologies>
            {project.skills.map(skill => (
              <ProjectTechnologyList className="skill">
                <ProjectTechnologyName className="skill-item">{skill}</ProjectTechnologyName>
              </ProjectTechnologyList>
            ))
            }
          </ProjectTechnologies>
          <p className="project-desc">
            {project.description}
          </p>
          <ProjectButtons className="button-group">
            <a href={project.links.source} className="source" rel="noopener noreferrer" target="_blank">View Source</a>
            <a href={project.links.demo} className="demo highlight" rel="noopener noreferrer" target="_blank">Website</a>
          </ProjectButtons>
        </ProjectDetail>
      </Project>
    );
  }

  render() {
    return (
      <Layout location={this.location} title={this.data.site.siteMetadata.title}>
        <SEO title={this.data.site.siteMetadata.title} />
        {data.map(this.renderProjects)}
        <Bio />
      </Layout>
    )
   }
 }

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`