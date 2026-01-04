import * as React from "react"
import { graphql } from "gatsby"
import PlainLayout from "../components/PlainLayout"
import BigHeatmap from "../components/BigHeatmap"

const IndexPage = ({ data, location }) => (
  <PlainLayout location={location}>
    <div className="p-12 text-2xl">
      <p>{data.site.siteMetadata.description}.</p>
    </div>
    <BigHeatmap data={data} />
  </PlainLayout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
    allMdx(sort: { frontmatter: { date: ASC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`
