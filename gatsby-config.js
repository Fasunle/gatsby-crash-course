module.exports = {
  siteMetadata: {
    siteUrl: "http://localhost:8000",
    name: "Kehinde Fasunle",
    role: "Developer at Company",
    bio: "My short bio that I will use to introduce myself.",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "mdx-bio",
        path: `${__dirname}/MDX`,
      },
    },
    `gatsby-plugin-mdx`,
    "gatsby-plugin-postcss",
  ],
};
