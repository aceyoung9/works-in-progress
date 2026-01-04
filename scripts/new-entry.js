const fs = require("fs")
const path = require("path")

const today = new Date().toISOString()
const todayDayOnly = today.split("T")[0]

const markdownContent = `---
title: Article 2
date: ${today}
---

Hello World. Type your things here.
`

const srcPath = path.resolve("src/entries/")

const filePath = path.join(srcPath, `${todayDayOnly}.mdx`)

try {
  fs.writeFileSync(filePath, markdownContent, "utf8")
  console.log(`Successfully created Markdown file: ${filePath}`)
} catch (err) {
  console.error("Error writing Markdown file:", err)
}
