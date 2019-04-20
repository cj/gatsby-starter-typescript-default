/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/* eslint-disable import/no-extraneous-dependencies */
import React, {FC, useMemo} from 'react'
import Helmet, {HelmetProps} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

export interface Props {
  description?: string
  lang?: string
  keywords?: string[]
  meta?: HelmetProps['meta']
  title: string
}

const SEO: FC<Props> = ({
  description = '',
  lang = 'en',
  meta = [],
  keywords = [],
  title,
}): JSX.Element => {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  )

  const metaDescription = useMemo(
    (): string => description || site.siteMetadata.description,
    [description, site.siteMetadata.description],
  )

  const metaFields = useMemo((): Props['meta'] => {
    const keywordMetas =
      keywords.length > 0
        ? [{name: `keywords`, content: keywords.join(`, `)}]
        : []

    return [
      {
        name: `description`,
        content: metaDescription,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: metaDescription,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: site.siteMetadata.author,
      },
      {
        name: `twitter:title`,
        content: title,
      },
      {
        name: `twitter:description`,
        content: metaDescription,
      },
      ...keywordMetas,
      ...meta,
    ]
  }, [keywords, meta])

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metaFields}
    />
  )
}
export default SEO
