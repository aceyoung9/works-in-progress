import * as React from "react"
import { useStaticQuery, navigate, graphql } from "gatsby"

import { DayPicker, getDefaultClassNames } from "react-day-picker"

import "react-day-picker/style.css"
import "./daypicker.css"

const SidebarCalendar = () => {
  const defaultClassNames = getDefaultClassNames()

  const {
    allMdx: { nodes },
  } = useStaticQuery(graphql`
    query DateQuery {
      allMdx(sort: { frontmatter: { date: ASC } }) {
        nodes {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  `)

  const allDates = nodes.map((post) => post.frontmatter.date)

  return (
    <DayPicker
      disableNavigation
      hideNavigation
      mode="single"
      showWeekNumber
      defaultMonth={allDates[0] && new Date(allDates[0])}
      classNames={{
        caption_label: `${defaultClassNames.caption_label} mx-auto`,
        day_button: `${defaultClassNames.day_button} my-day_button`,
      }}
      disabled={(calendarDay) =>
        !allDates.includes(calendarDay.toISOString().split("T")[0])
      }
      onDayClick={(day, modifiers) => {
        if (modifiers.disabled || modifiers.hidden) return
        navigate(`/${day.toISOString().split("T")[0]}`)
      }}
    />
  )
}

export default SidebarCalendar
