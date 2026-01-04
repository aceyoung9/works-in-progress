import React from "react"
import { navigate } from "gatsby"

import { DayPicker, getDefaultClassNames } from "react-day-picker"

import "react-day-picker/style.css"
import "./SidebarCalendar/daypicker.css"

const BigHeatmap = ({ data }) => {
  const dates = data.allMdx.nodes.map((node) => node.frontmatter.date)
  // .filter((dateStr) => dateStr.startsWith("2026"))

  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      disableNavigation
      hideNavigation
      mode="single"
      showWeekNumber
      defaultMonth={new Date(2026, 0)}
      numberOfMonths={
        // 1 + new Date().getMonth() - new Date(dates.at(-1)).getMonth()
        12
      }
      classNames={{
        day_button: `${defaultClassNames.day_button} my-day_button`,
        month_caption: `${defaultClassNames.month_caption} justify-center`,
        months: `${defaultClassNames.months} justify-center`,
        root: `${defaultClassNames.root} pb-12`,
        caption_label: `${defaultClassNames.caption_label} font-light text-lg`,
      }}
      disabled={(calendarDay) =>
        !dates.includes(calendarDay.toISOString().split("T")[0])
      }
      onDayClick={(day, modifiers) => {
        if (modifiers.disabled || modifiers.hidden) return
        navigate(`/${day.toISOString().split("T")[0]}`)
      }}
    />
  )
}

export default BigHeatmap
