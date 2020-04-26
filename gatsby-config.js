module.exports = {
  siteMetadata: {
    title: `Words Unlimited`,
    name: `Words Unlimited`,
    siteUrl: `https://wordsunlimited8.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Words Unlimited, A blog connecting mind, body, and spirit.`,
      maxWidth: 900,
    },
    social: [
      // {
      //   name: `twitter`,
      //   url: `https://twitter.com`,
      // },
      {
        name: `instagram`,
        url: `https://instagram.com/wordsunlimited8/`,
      },
      // {
      //   name: `linkedin`,
      //   url: `https://www.linkedin.com`,
      // },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Unlimited Words`,
        short_name: `Unlimited Words`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
