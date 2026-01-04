import * as React from "react"
import { graphql } from "gatsby"
import PlainLayout from "../components/PlainLayout"

export default function AboutPage({ data, location }) {
  return (
    <PlainLayout location={location}>
      <div className="lg:max-w-3xl 2xl:max-w-4xl lg:ml-auto text-xl px-6 pt-8">
        <h1 className="font-bold underline mb-7">What is this all about?</h1>
        <p>
          I’d like to get back into painting in 2026, and I feel like I’ve been
          very out of practice with making visual art.
        </p>
        <p>
          It has, admittedly been years since I've painted regularly; even
          sketching, doodling, and making smaller pieces that don’t need to be
          “finished” feels a little unfamiliar, like I’m learning to ride a bike
          again.
        </p>
        <p>
          Beyond that, my painting process has been mildly toxic and fraught for
          as long as I can remember, and perhaps this has been bad for my mental
          health and character development. I find myself getting really
          self-conscious about whether my paintings are good enough. I’d like to
          make my little art pieces without worrying about whether they’re
          meaningful or worthwhile or marketable.
        </p>
        <p>
          And so, my goal is to make (and share) at least one snippet of
          whatever I’m working on, whether it’s a little journal piece or an
          in-progress shot. I’ve formatted a heat-map view to keep me on track
          and give me that little dopamine-boost when I post things. Plus I love
          having an excuse to make a single-purpose statically-generated
          website.
        </p>
        <p>
          I’m going for quantity over quality with this project. There’s a
          chance I abandon this year-long project too, if past performance is
          any indication.
        </p>
        <p>
          Should you feel so inspired, you are invited to fork this repo. If I
          get my shit together, I may transform the repo into a Gatsby Template.
          I don’t promise to make the code extra good; I’m merely a humble bike
          mechanic these days.
        </p>
        <h3>Elsewhere on the internet</h3>
        <ul>
          <li>
            <a href="//aceyoung.xyz">aceyoung.xyz</a>
          </li>
          <li>
            Instagram:{" "}
            <a href="https://www.instagram.com/acepaint289/">@acepaint289</a>
          </li>
        </ul>
      </div>
    </PlainLayout>
  )
}

export const pageQuery = graphql`
  {
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
