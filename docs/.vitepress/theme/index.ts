import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // Custom layout slots can be added here
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Register global components if needed
  }
} satisfies Theme
