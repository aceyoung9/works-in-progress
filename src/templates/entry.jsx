import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import EntryLayout from "../components/EntryLayout"

const shortcodes = { Link } // Provide common components here

export default function EntryTemplate({ data, children }) {
  return (
    <EntryLayout>
      <h1 className="underline mt-0">{data.mdx.frontmatter.title}</h1>
      <div className="mt-2 text-base mb-8 font-light">
        Posted {data.mdx.frontmatter.date}
      </div>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </EntryLayout>
  )
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
