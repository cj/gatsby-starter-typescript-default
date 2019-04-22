import {Link} from 'gatsby'
import React, {FC} from 'react'

export interface Props {
  siteTitle: string
}

const Header: FC<Props> = ({siteTitle}): JSX.Element => (
  <header className="bg-primary">
    <div className="container py-4">
      <h1 className="m-0">
        <Link to="/" className="text-white text-decoration-none">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
