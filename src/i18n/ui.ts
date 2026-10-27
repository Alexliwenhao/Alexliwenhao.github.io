export type Lang = 'zh' | 'en';

const dict = {
  zh: {
    siteTitle: 'Alex · AI 产品',
    siteDescription: 'Alex 独立构建的 AI 桌面工具与实验合集。',
    navProducts: '产品',
    navAbout: '关于',
    navGithub: 'GitHub',
    switchLabel: 'EN',
    switchTitle: 'Switch to English',
    heroEyebrow: 'AI PRODUCTS · 2026',
    heroTitleTop: '把 AI 放进',
    heroTitleBottom: '真实工作流',
    heroLead: '我是 Alex，这里收录我独立构建的 AI 桌面工具与实验。',
    ctaProducts: '查看产品',
    ctaGithub: 'GitHub ↗',
    productsEyebrow: 'PRODUCTS',
    productsTitle: '产品',
    productDetail: '查看详情',
    github: 'GitHub',
    download: '下载',
    docs: '文档',
    back: '返回首页',
    highlightsEyebrow: 'HIGHLIGHTS',
    highlightsTitle: '亮点',
    galleryEyebrow: 'SCREENS',
    galleryTitle: '界面',
    aboutEyebrow: 'ABOUT',
    aboutTitle: '关于',
    aboutBody:
      '我关注 AI 与真实工作流的结合，持续构建桌面端的 AI 工具。这里是我独立完成的项目合集，会不断更新。',
    footerRights: '保留所有权利。',
    footerBuilt: '由 Astro 构建 · 托管于 GitHub Pages',
    footerIndependent: '本站展示的项目均为个人独立作品。',
    productDisclaimer:
      'AI Shell Desktop 是独立开源项目，与深度求索不存在隶属、合作、授权或背书关系。',
    notFoundTitle: '页面不存在',
    notFoundBody: '你访问的页面不存在或已移动。',
    notFoundCta: '返回首页',
  },
  en: {
    siteTitle: 'Alex · AI Products',
    siteDescription: 'AI desktop tools and experiments built independently by Alex.',
    navProducts: 'Products',
    navAbout: 'About',
    navGithub: 'GitHub',
    switchLabel: '中文',
    switchTitle: '切换到中文',
    heroEyebrow: 'AI PRODUCTS · 2026',
    heroTitleTop: 'Put AI into',
    heroTitleBottom: 'real workflows',
    heroLead:
      'I’m Alex. This is a growing collection of AI desktop tools and experiments I build independently.',
    ctaProducts: 'Explore products',
    ctaGithub: 'GitHub ↗',
    productsEyebrow: 'SELECTED WORK',
    productsTitle: 'Products',
    productDetail: 'View details',
    github: 'GitHub',
    download: 'Download',
    docs: 'Docs',
    back: 'Back to home',
    highlightsEyebrow: 'HIGHLIGHTS',
    highlightsTitle: 'What makes it different',
    galleryEyebrow: 'SCREENS',
    galleryTitle: 'Inside the app',
    aboutEyebrow: 'ABOUT',
    aboutTitle: 'About',
    aboutBody:
      'I care about bringing AI into real workflows and keep building desktop AI tools. This site collects the projects I build independently, and it will keep growing.',
    footerRights: 'All rights reserved.',
    footerBuilt: 'Built with Astro · Hosted on GitHub Pages',
    footerIndependent: 'All projects shown here are independent personal work.',
    productDisclaimer:
      'AI Shell Desktop is an independent open-source project and is not affiliated with, endorsed by, or sponsored by DeepSeek.',
    notFoundTitle: 'Page not found',
    notFoundBody: 'The page you requested does not exist or has moved.',
    notFoundCta: 'Back to home',
  },
};

export type UI = typeof dict.zh;

export function t(lang: Lang): UI {
  return dict[lang];
}
