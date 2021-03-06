import React, {FC} from 'react'
import {Link} from 'gatsby'

import Layout from '~/components/Layout'
import Image from '~/components/Image'
import SEO from '~/components/Seo'

const IndexPage: FC = (): JSX.Element => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Image />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
