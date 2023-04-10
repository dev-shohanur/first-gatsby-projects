import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

export default function ProjectsDetails({ data }) {

    const { html } = data.markdownRemark
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className='details container'>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className='featured'>
                    <img src={featuredImg} alt={title} />
                </div>
                <div className='html' dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    )
}

export const query = graphql`
query projectsPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featuredImg
      }
    }
  }
`
