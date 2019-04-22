/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, {FC, ReactNode} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {Container} from 'react-bootstrap'

import Header from '~/components/Header'
import './styles.scss'

export interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({children}): JSX.Element => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container className="mt-4">
        <main>{children}</main>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    </>
  )
}

export default Layout
