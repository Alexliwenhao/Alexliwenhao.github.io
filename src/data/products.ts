import type { ImageMetadata } from 'astro';

import cover from '../assets/products/aishell-desktop/dark-overview.png';
import aiConversation from '../assets/products/aishell-desktop/ai-conversation.png';
import planCommandCard from '../assets/products/aishell-desktop/plan-command-card.png';
import filePanel from '../assets/products/aishell-desktop/file-panel.png';
import lightOverview from '../assets/products/aishell-desktop/light-overview.png';
import quoteToChat from '../assets/products/aishell-desktop/quote-to-chat.png';

export interface LocalizedText {
  zh: string;
  en: string;
}

export interface ProductLink {
  label: LocalizedText;
  href: string;
}

export interface ProductHighlight {
  title: LocalizedText;
  body: LocalizedText;
}

export interface Product {
  slug: string;
  name: string;
  tagline: LocalizedText;
  description: LocalizedText;
  highlights: ProductHighlight[];
  tags: string[];
  cover: ImageMetadata;
  gallery: { src: ImageMetadata; alt: LocalizedText }[];
  links: ProductLink[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: 'aishell-desktop',
    name: 'AI Shell Desktop',
    tagline: {
      zh: '把终端、文件与 AI 对话放进同一个窗口',
      en: 'Terminal, files, and AI chat in one window',
    },
    description: {
      zh: '基于 DeepSeek Harness 的 Windows / macOS 桌面客户端。AI 只在你打开的真实终端里工作：选中现场输出即可引用进对话，计划模式让高危命令必须经你确认后再执行。',
      en: 'A Windows and macOS desktop client built on DeepSeek Harness. The AI works only inside the real terminals you open: quote live output straight into the conversation, and Plan Mode requires your approval before any command runs.',
    },
    highlights: [
      {
        title: { zh: '终端即上下文', en: 'Terminal as context' },
        body: {
          zh: '在终端里选中真实回显，一键引用进对话。',
          en: 'Select live output in the terminal and quote it into the conversation in one click.',
        },
      },
      {
        title: { zh: '一终端一会话', en: 'One terminal, one session' },
        body: {
          zh: '每个终端绑定独立会话，切换终端即切换对话，互不串台。',
          en: 'Every terminal is bound to its own conversation, so switching terminals switches context without cross-talk.',
        },
      },
      {
        title: { zh: '人在回路', en: 'Human in the loop' },
        body: {
          zh: '`/plan` 计划模式下命令逐条提交，由你点击执行。',
          en: 'In `/plan` mode each command is submitted as a card and runs only after you approve it.',
        },
      },
      {
        title: { zh: '不碰本机', en: 'Remote only' },
        body: {
          zh: 'AI 只能操作你打开的远端终端，本机 shell 与文件不在其能力范围内。',
          en: 'The AI can only operate the remote terminals you open; your local shell and files stay out of reach.',
        },
      },
    ],
    tags: ['Electron', 'DeepSeek Harness', 'SSH', 'Terminal', 'AI Agent'],
    cover,
    gallery: [
      {
        src: quoteToChat,
        alt: {
          zh: '在终端选中内容并引用进 AI 对话',
          en: 'Selecting terminal output and quoting it into the AI conversation',
        },
      },
      {
        src: aiConversation,
        alt: {
          zh: '右侧 AI 对话面板',
          en: 'AI conversation panel on the right',
        },
      },
      {
        src: planCommandCard,
        alt: {
          zh: '计划模式下的待执行命令卡片',
          en: 'Pending command card in Plan Mode',
        },
      },
      {
        src: filePanel,
        alt: {
          zh: '远端主机文件面板',
          en: 'Remote host file panel',
        },
      },
      {
        src: lightOverview,
        alt: {
          zh: '浅色主题下的总览界面',
          en: 'Overview in the light theme',
        },
      },
    ],
    links: [
      {
        label: { zh: 'GitHub', en: 'GitHub' },
        href: 'https://github.com/Alexliwenhao/shell-desktop',
      },
      {
        label: { zh: '下载', en: 'Download' },
        href: 'https://github.com/Alexliwenhao/shell-desktop/releases/latest',
      },
      {
        label: { zh: '文档', en: 'Docs' },
        href: 'https://github.com/Alexliwenhao/shell-desktop/blob/master/docs/user-guide.md',
      },
    ],
    featured: true,
  },
];
