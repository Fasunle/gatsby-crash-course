require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: "http://localhost:8000",
    name: "Kehinde Fasunle",
    role: "Developer at Company",
    bio: "My short bio that I will use to introduce myself.",
  },
  plugins: [
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "mdx-bio",
        path: `${__dirname}/MDX`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-mdx`,
    "gatsby-plugin-postcss",
  ],
};
