import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "HappyPrompt - Prompt 提示詞管理工具與 AI 知識庫",
  tagline:
    "一鍵儲存與插入你的 AI Prompt 指令，內建跨職能專業提示詞庫。讓你像工程師一樣駕馭 AI，施展你的 AI 魔法 ✨",
  favicon: "/img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://www.happyprompt.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kdchang-labs", // Usually your GitHub org/user name.
  projectName: "happyprompt", // repo

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        googleTagManager: {
          containerId: "GTM-5L4DZ8LM", // GTM
        },
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/resources",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: "ALL",
          postsPerPage: 10,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: undefined,
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        // index hash
        hashed: true,
        // language
        language: ["en", "zh"],
        // highlight term
        highlightSearchTermsOnTargetPage: true,
        // docs route base path
        docsRouteBasePath: "/resources",
        blogRouteBasePath: "/blog",
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "https://www.happyprompt.net/img/logo.png",
    // colorMode: {
    //   respectPrefersColorScheme: true,
    // },
    // algolia: {
    //   appId: "HHT6LFI2CT",
    //   apiKey: "ff0205c345c78cc43d0b19adf2c47826",
    //   indexName: "prod_NAME",
    //   contextualSearch: true,
    //   searchPagePath: "search",
    // },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "HappyPrompt",
      logo: {
        alt: "HappyPrompt Logo",
        src: "img/logo.png",
      },
      items: [
        { to: "/blog", label: "最新文章", position: "left" },
        { to: "/about", label: "關於我們", position: "left" },
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "職涯技能樹",
        // },
        {
          href: "/resources",
          label: "學習資源",
          position: "left",
        },
        // {
        //   href: "https://facebook.com/groups/kdchang.ai",
        //   label: "AI 程式設計交流社群",
        //   position: "left",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "學習資源",
              to: "/resources",
            },
            {
              label: "最新文章",
              to: "/blog",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // {
            //   label: "Facebook Group",
            //   href: "https://facebook.com/groups/kdchang.ai",
            // },
            {
              label: "Follow us on Facebook",
              href: "https://www.facebook.com/kdchang.ai",
            },
            {
              label: "Follow us on Instagram",
              href: "https://www.instagram.com/kdchang.ai",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Contact Us",
              to: "mailto:happyprompt.net@gmail.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HappyPrompt, Inc. Built with ❤️ by <a target="_blank" href="https://www.kdchang.com">KD Chang</a> in Taiwan.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
