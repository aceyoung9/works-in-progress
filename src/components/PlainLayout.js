import React from "react"
import HeaderNav from "./HeaderNav"

export default function PlainLayout({ location, title, children }) {
  return (
    <>
      <HeaderNav location={location} />
      <div className="container">{children}</div>
    </>
  )
}
