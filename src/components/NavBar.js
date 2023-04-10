import { Link, graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default function NavBar() {
    const data = useStaticQuery(graphql`
    query SiteInfo {
        site {
          siteMetadata {
            title
          }
        }
      }
`)

    const { title } = data.site.siteMetadata;
    return (
        <div className='navbar'>
            <h2>{title}</h2>
            <div className='navbar-link'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/about'>About</Link>
                <Link className='link' to='/projects'>Projects</Link>
            </div>
        </div>
    )
}
