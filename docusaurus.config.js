// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QoEVAVE Database',
  tagline: 'Evaluation Content for Interactive Virtual Environments',
  url: 'https://qoevave.github.io/',
  baseUrl: '/database/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.ico',
  organizationName: 'qoevave', // Usually your GitHub org/user name.
  projectName: 'database', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  staticDirectories: ['public', 'static'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/qoevave/database/tree/gh-pages',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-FSVMCYJVP5',
          anonymizeIP: true,
        },
        googleAnalytics: {
          trackingID: 'G-FSVMCYJVP5',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/icon.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      algolia:{
        appId: 'JUTY2A3KFT',
        apiKey: '7d032914ea803f641b18480d98423d87',
        indexName: 'qoevaveio',
      },
      navbar: {
        title: 'QoEVAVE Database',
        hideOnScroll: false,
        logo: {
          alt: 'QoEVAVE_logo',
          src: 'img/Q-logo.png',
        },
        items: [
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Project',
            items: [
              {
                label: 'Audictive Priority Program',
                href: 'http://www.spp2236-audictive.de/Abstracts/Abstract-11.html',
              },
              {
                label: 'Funding',
                href: 'https://www.dfg.de/en/funded_projects/current_projects_programmes/list/projectdetails/index.jsp?id=422686707&sort=nr_asc&prg=SPP&wb=4',
              },
            ],
          },
          {
            title: 'Partners',
            items: [
              {
                label: 'International Audio Laboratories Erlangen',
                href: 'https://www.audiolabs-erlangen.de/fau',
              },
              {
                label: 'Audiovisual Technology Group TU-Ilmenau',
                href: 'https://www.tu-ilmenau.de/en/university/departments/department-of-electrical-engineering-and-information-technology/profile/institutes-and-groups/audiovisual-technology-group',
              },
            ],
          }
        ],
        logo: {
          alt: 'DFG',
          src: 'img/dfg_logo_schriftzug_weiss.png',
          href: 'https://www.dfg.de/en/funded_projects/current_projects_programmes/list/projectdetails/index.jsp?id=422686707&sort=nr_asc&prg=SPP&wb=4',
          width: 230,
          height: 30,
        },
        copyright: `Copyright © ${new Date().getFullYear()} QoEVAVE`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp'],
      },
    }
  ),
};

module.exports = config;
