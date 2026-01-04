import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const HeaderNav = ({ location }) => {
  const staticQueryData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = !!location && location.pathname === rootPath

  return (
    <header className="container p-6 flex gap-2 justify-stretch">
      <Link
        to="/"
        className={`text-4xl font-bold italic font-stretch-expanded uppercase ${
          isRootPath ? `is-root-path` : ""
        }`}
      >
        {staticQueryData.site.siteMetadata.title}
      </Link>{" "}
      (by Ace Young)
      <div className="grow self-center-safe text-right uppercase font-bold md:text-xl">
        <Link to="/about">About</Link>
      </div>
    </header>
  )
}

export default HeaderNav
