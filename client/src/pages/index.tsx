import * as React from "react"
import { graphql } from 'gatsby'
import type { HeadFC, PageProps } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
  query SiteConfiguration {
  	pocketbaseSiteConfiguration{
      page_title
      page_description
      logo
    }
  }
`

const IndexPage: React.FC<PageProps> = ({data}) => {
  return (
    <Layout>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">{data.pocketbaseSiteConfiguration.page_title}</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = ({data}) => <title>{ data.pocketbaseSiteConfiguration.page_title } | Startseite</title>
