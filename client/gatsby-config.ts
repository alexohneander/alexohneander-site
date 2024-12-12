import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Alexohneander`,
    siteUrl: `https://alexohneander.de`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
      resolve: `gatsby-source-pocketbase`,
      options: { 
        server: {
            protocol: 'http',
            address: '127.0.0.1',
            port: '8090'
        }, 
        auth: {
            user: 'moin@alexohneander.de',
            password: ''
        } 
      },
    }]
};

export default config;
