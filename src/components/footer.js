import React from 'react';
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
    const data = useStaticQuery (graphql`
    query {
        site{
            siteMetadata{
                author
            }
        }
    }
    `)
    return (
        <footer>
            <p>Created by {data.site.siteMetadata.author}, © 2020 Powered by Gatsby,  Illustration by Natasha Remarchuk from Icons8</p>
        </footer>
    )
}

export default Footer;