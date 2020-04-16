module.exports = {
  siteMetadata: {
    title: `Unlimted Words`,
    name: `Unlimited Words`,
    siteUrl: `https://relaxed-meitner-26d08e.netlify.app`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to Unlimted Words, a blog bringing you science and faith.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com`,
      },
      {
        name: `github`,
        url: `https://github.com`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com`,
      },
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
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
