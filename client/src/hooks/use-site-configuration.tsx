import { graphql, useStaticQuery } from "gatsby"

export const useSiteConfiguration = () => {
  const data = useStaticQuery(graphql`
    query {
  	  pocketbaseSiteConfiguration{
        page_title
        page_description
        logo
      }
    }
  `)

  return data.pocketbaseSiteConfiguration
}
