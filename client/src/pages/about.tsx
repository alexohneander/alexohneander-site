import * as React from "react"
import { graphql } from "gatsby"
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
      <main>
        <p>Test</p>
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = ({data}) => <title>{ data.pocketbaseSiteConfiguration.page_title } | About</title>
