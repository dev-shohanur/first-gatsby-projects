import { Link, graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';

export default function Projects({ data }) {
    const projects = data.projects.nodes;
    const contact = data.contact.siteMetadata.contact;
    console.log(data);
    return (
        <Layout>
            <section>
                <div className="container">
                    <h2>Projects</h2>
                    <h5>This is Projects Page</h5>
                    <div className='projects'>
                        {projects.map(project => (
                            <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
                                <div>
                                    <img src={project.frontmatter.thumb} />
                                    <h3>{project.frontmatter.title}</h3>
                                    <p>{project.frontmatter.stack}</p>

                                </div>
                            </Link>
                        ))}

                    </div>
                    <p className='email-title'>Like What you see? Email me at {contact} for a quote!</p>
                </div>
            </section>
        </Layout>
    )
}


export const query = graphql`
query projectsPage {
    projects: allMarkdownRemark(sort: {frontmatter: {title: DESC}}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
