import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Ketamine, Trauma, and the Future of Mental Health in Canada',
  description: 'An open-science manuscript examining ketamine\'s neuroscience, ethics, and policy implications for trauma care in Canada',

  lang: 'en-US',
  base: '/',

  // Clean URLs without .html extension
  cleanUrls: true,

  // Last updated timestamp
  lastUpdated: true,

  // Head tags for SEO and styling
  head: [
    ['meta', { name: 'author', content: 'Centre for Trauma-Informed Neuroscience (CTIN)' }],
    ['meta', { name: 'keywords', content: 'ketamine, trauma, PTSD, mental health, neuroscience, neuroplasticity, Canada, policy' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Ketamine, Trauma, and the Future of Mental Health in Canada' }],
    ['meta', { property: 'og:description', content: 'An open-science manuscript examining ketamine\'s neuroscience, ethics, and policy implications' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],

  themeConfig: {
    // Site branding
    siteTitle: 'CTIN',
    logo: '/logo.svg',

    // Navigation
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Read', link: '/sections/preface' },
      { text: 'References', link: '/references' },
      {
        text: 'Resources',
        items: [
          { text: 'GitHub Repository', link: 'https://github.com/metakai1/ctin-ketamine' },
          { text: 'Download PDF', link: '#' } // Will be handled by PDFExport component
        ]
      }
    ],

    // Sidebar navigation
    sidebar: [
      {
        text: 'Front Matter',
        collapsed: false,
        items: [
          { text: 'Preface', link: '/sections/preface' },
          { text: 'Acknowledgments', link: '/sections/acknowledgments' },
          { text: 'Author\'s Note', link: '/sections/authors-note' }
        ]
      },
      {
        text: 'Chapters',
        collapsed: false,
        items: [
          {
            text: '1. Introduction',
            link: '/sections/1-introduction',
            items: [
              { text: '1.1 Limits of Existing Paradigms', link: '/sections/1-introduction#_1-1-the-limits-of-existing-paradigms' },
              { text: '1.2 Ketamine as an Inflection Point', link: '/sections/1-introduction#_1-2-ketamine-as-an-inflection-point' },
              { text: '1.3 Ketamine and Canadian Systems', link: '/sections/1-introduction#_1-3-from-molecule-to-mirror-ketamine-and-canadian-systems' },
              { text: '1.4 Purpose and Scope', link: '/sections/1-introduction#_1-4-purpose-and-scope-of-this-book' }
            ]
          },
          {
            text: '2. The Neuroscience of Ketamine',
            link: '/sections/2-neuroscience',
            items: [
              { text: '2.1 Glutamatergic Modulator', link: '/sections/2-neuroscience#_2-1-ketamine-as-a-glutamatergic-modulator' },
              { text: '2.2 Neuroplasticity', link: '/sections/2-neuroscience#_2-2-neuroplasticity-and-synaptogenesis' },
              { text: '2.3 Dissociation', link: '/sections/2-neuroscience#_2-3-dissociation-as-a-neurocognitive-state' },
              { text: '2.4 Clinical Evidence', link: '/sections/2-neuroscience#_2-4-clinical-evidence-summary' }
            ]
          },
          {
            text: '3. Trauma in Canada',
            link: '/sections/3-trauma-canada',
            items: [
              { text: '3.1 Population-Level Phenomenon', link: '/sections/3-trauma-canada#_3-1-trauma-as-a-population-level-phenomenon' },
              { text: '3.2 System Limitations', link: '/sections/3-trauma-canada#_3-2-a-mental-health-system-designed-for-stabilization-not-transformation' },
              { text: '3.3 Societal Costs', link: '/sections/3-trauma-canada#_3-3-the-societal-costs-of-unaddressed-trauma' }
            ]
          },
          {
            text: '4. Ethical Dimensions',
            link: '/sections/4-ethics',
            items: [
              { text: '4.1 Dissociation', link: '/sections/4-ethics#_4-1-dissociation-a-controlled-departure-from-the-self' },
              { text: '4.2 Identity', link: '/sections/4-ethics#_4-2-identity-and-the-neuroplastic-self' },
              { text: '4.3 Agency', link: '/sections/4-ethics#_4-3-agency-vulnerability-and-suggestibility' },
              { text: '4.4 Memory', link: '/sections/4-ethics#_4-4-memory-meaning-and-the-ethics-of-reconsolidation' }
            ]
          },
          {
            text: '5. Social Impact and Access',
            link: '/sections/5-access',
            items: [
              { text: '5.1 Geographic Disparities', link: '/sections/5-access#_5-1-geographic-disparities-in-access-to-care' },
              { text: '5.2 Economic Barriers', link: '/sections/5-access#_5-2-economic-barriers-and-out-of-pocket-costs' },
              { text: '5.3 Cultural Barriers', link: '/sections/5-access#_5-3-cultural-and-historical-barriers-to-mental-health-care' },
              { text: '5.4 Regulatory Barriers', link: '/sections/5-access#_5-4-regulatory-barriers-and-policy-constraints' }
            ]
          },
          {
            text: '6. Policy Considerations',
            link: '/sections/6-policy',
            items: [
              { text: '6.1 Regulatory Frameworks', link: '/sections/6-policy#_6-1-updating-regulatory-frameworks-to-reflect-contemporary-science' },
              { text: '6.2 System Design', link: '/sections/6-policy#_6-2-integrating-neuroscience-into-mental-health-system-design' },
              { text: '6.3 Safety Standards', link: '/sections/6-policy#_6-3-ensuring-safety-through-standards-not-scarcity' },
              { text: '6.4 Equity', link: '/sections/6-policy#_6-4-addressing-equity-as-a-core-policy-objective' }
            ]
          },
          {
            text: '7. The Way Forward',
            link: '/sections/7-way-forward',
            items: [
              { text: '7.1 Aligning Systems', link: '/sections/7-way-forward#_7-1-aligning-systems-with-the-biology-of-healing' },
              { text: '7.2 Ethical Integration', link: '/sections/7-way-forward#_7-2-ethical-integration-protecting-autonomy-within-states-of-vulnerability' },
              { text: '7.3 Equitable Access', link: '/sections/7-way-forward#_7-3-building-equitable-access-a-national-commitment' },
              { text: '7.4 Infrastructure', link: '/sections/7-way-forward#_7-4-scientific-and-policy-infrastructure-for-long-term-evolution' }
            ]
          }
        ]
      },
      {
        text: 'Conclusion',
        link: '/sections/conclusion'
      },
      {
        text: 'References',
        link: '/references'
      }
    ],

    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/metakai1/ctin-ketamine' }
    ],

    // Edit link
    editLink: {
      pattern: 'https://github.com/metakai1/ctin-ketamine/edit/main/docs/:path',
      text: 'Suggest changes to this page'
    },

    // Footer
    footer: {
      message: 'Released under CC0 1.0 Universal (Public Domain)',
      copyright: 'Centre for Trauma-Informed Neuroscience (CTIN)'
    },

    // Search
    search: {
      provider: 'local',
      options: {
        placeholder: 'Search the book...',
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search the book'
          },
          modal: {
            noResultsText: 'No results found',
            resetButtonTitle: 'Clear search',
            footer: {
              selectText: 'to select',
              navigateText: 'to navigate',
              closeText: 'to close'
            }
          }
        }
      }
    },

    // Outline (table of contents on right)
    outline: {
      level: [2, 3],
      label: 'On this page'
    }
  },

  // Markdown configuration
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: false,
    toc: { level: [2, 3] }
  }
})
