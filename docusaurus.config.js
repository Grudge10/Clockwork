// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Seed of Hope",
  tagline: "Growing a better future, one seed at a time",
  url: "https://seedofhope.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Grudge10/Seed-Of-Hope/find/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Grudge10/Seed-Of-Hope/find/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // The application ID provided by Algolia
      appId: 'FN0UVM57MW',

      // Public API key: it is safe to commit it
      apiKey: '35a6107282bbb88203f03f97f52a9708',

      indexName: 'netlify_592ff0d4-fe1e-4932-97f9-ee402dbd842a_main_all',

      // Optional: see doc section below
      contextualSearch: false,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
//       replaceSearchResultPathname: {
//         from: '/docs/', // or as RegExp: /\/docs\//
//         to: '/',
//       },

      // Optional: Algolia search parameters
//       searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
        iteId: '592ff0d4-fe1e-4932-97f9-ee402dbd842a',
    branch: 'main',
    selector: 'div#search',
      },
      navbar: {
        title: "Seed of Hope",
        logo: {
          alt: "Seed of Hope's logo",
          src: "img/sprout.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            to: "/seed-of-hope-team",
            label: "About Us",
            position: "right",
          },
          {
            href: "https://github.com/Grudge10/Seed-Of-Hope",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Welcome",
                to: "/docs/intro",
              },
              {
                label: "Farmers",
                to: "/docs/farmers/who-are-farmers",
              },
              {
                label: "Supporting Farmers",
                to: "/docs/category/supporting-farmers"
              },
            ],
          },
          {
            title: "SOH Team",
            items: [
              {
                label: "SOH Team Leader",
                to: "https://github.com/Grudge10",
              },
              {
                label: "Communications Specialist",
                to: "https://github.com/Eka-07",
              },
              {
                label: "Outreach and Partnerships Manager",
                to: "https://github.com/HanMe0.png",
              },
              {
                label: "Project Manager",
                to: "https://github.com/Hxan06",
              },
              {
                label: "Sustainability Coordinator",
                to: "https://github.com/Ahyra",
              },
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/Grudge10/Seed-Of-Hope",
              },
            ],
          },
        ],
        copyright: `Copyright © 2023 Seed of Hope, Made with ❤️ by the Seed of Hope Team`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
