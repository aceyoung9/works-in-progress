import React from "react"
import SidebarCalendar from "./SidebarCalendar"
import HeaderNav from "./HeaderNav"

const EntryLayout = ({ data, location, children, ...rest }) => {
  return (
    <>
      <HeaderNav location={location} />
      <div className="container grid md:grid-cols-3 gap-6">
        <div className="p-6">{/* <SidebarCalendar /> */}</div>
        <div className="col-span-2 text-xl p-6 xl:pr-10 py-8">{children}</div>
      </div>
    </>
  )
}

export default EntryLayout
