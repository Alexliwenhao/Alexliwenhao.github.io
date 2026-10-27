# AI 产品合集站设计（首版）

- 日期：2026-10-27
- 状态：已确认，待实现
- 目标仓库：`Alexliwenhao/alexliwenhao.github.io`
- 线上地址：https://alexliwenhao.github.io/

## 1. 背景与目标

为 Alex 建立一个可直接访问的个人 AI 产品合集站，首版展示 AI Shell Desktop，后续按同一数据模型持续增加产品。

成功标准：

- 直接访问 `https://alexliwenhao.github.io/` 可看到完整站点，无需登录。
- 中文在 `/`，英文在 `/en/`，页头可切换。
- 新增一个产品只需增加数据条目与图片，自动生成卡片与详情页。
- 每次 push 到 `main` 自动构建并发布。

## 2. 非目标

- 不做后台、CMS、评论、用户系统、搜索和筛选。
- 不接自定义域名，使用 `github.io` 域名。
- 不做亮色主题；站点固定深色科技风。
- 首版不展示 AI Shell Desktop 之外的任何产品。

## 3. 技术选型

- Astro 静态站（`.astro` 组件 + TypeScript，无 UI 框架）。
- 纯 CSS 变量与组件内 scoped 样式，不引入 Tailwind 等样式框架。
- 图片使用 Astro 内置资源管线（sharp）优化。
- npm 管理依赖，Node.js 22。
- GitHub Actions 构建并部署到 GitHub Pages，Pages Source 设为 GitHub Actions。
- 新项目目录：`D:\myProject\alexliwenhao.github.io`，与 `dsh-desktop` 仓库完全独立。

## 4. 路由与页面

| 路由 | 内容 |
| --- | --- |
| `/` | 中文首页 |
| `/en/` | 英文首页 |
| `/products/aishell-desktop/` | 中文产品详情 |
| `/en/products/aishell-desktop/` | 英文产品详情 |

i18n 配置：`defaultLocale: 'zh'`，`locales: ['zh', 'en']`，`prefixDefaultLocale: false`。

首页结构：

1. Header：左侧站点标识 `Alex · AI`，导航“产品 / 关于 / GitHub”，右侧语言切换。
2. Hero：眉标 `AI PRODUCTS · 2026`；主标题“把 AI 放进真实工作流”；一段个人定位；按钮“查看产品”“GitHub ↗”。
3. 产品区：标题“产品 / PRODUCTS”，产品卡片网格。
4. 关于：2-3 句个人简介 + GitHub 链接。
5. Footer：版权、Astro 标识、独立项目声明。

详情页结构：返回链接 → 产品头部（名称、简介、标签、操作按钮）→ 封面大图 → 亮点列表 → 截图画廊 → 独立项目声明。

## 5. 数据模型

`src/data/products.ts`：

```ts
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
```

界面文案放 `src/i18n/ui.ts`，按 `zh` / `en` 提供字典，并提供 `t(lang)` 与语言切换 URL 辅助函数。

## 6. 视觉系统

- 背景 `#08090c`，面板 `#0d0f14`，正文 `#f2f5f7`，次要文字 `#98a2b3`。
- 强调色：青色 `#38e1ff` → 紫色 `#8b5cf6`，仅用于光晕、边框高亮和按钮。
- 顶部两处低透明度径向渐变光晕；卡片 1px 半透明边框、16px 圆角、hover 轻微上浮与光晕。
- 字体使用系统栈（含 PingFang SC / Microsoft YaHei），等宽字体用于眉标和标签。
- 移动端单列；首版不引入滚动动画，避免额外 JS。

## 7. 首版产品内容

名称：AI Shell Desktop

- 中文一句话：把终端、文件与 AI 对话放进同一个窗口。
- 英文一句话：Terminal, files, and AI chat in one window.
- 中文简介：基于 DeepSeek Harness 的 Windows / macOS 桌面客户端。AI 只在你打开的真实终端里工作：选中现场输出即可引用进对话，计划模式让高危命令必须经你确认后再执行。
- 英文简介：A Windows and macOS desktop client built on DeepSeek Harness. The AI works only inside the real terminals you open: quote live output straight into the conversation, and Plan Mode requires your approval before any command runs.
- 亮点：
  1. 终端即上下文 / Terminal as context：在终端里选中真实回显，一键引用进对话 / Select live output in the terminal and quote it into the conversation in one click.
  2. 一终端一会话 / One terminal, one session：每个终端绑定独立会话，切换终端即切换对话，互不串台 / Every terminal is bound to its own conversation, so switching terminals switches context without cross-talk.
  3. 人在回路 / Human in the loop：`/plan` 计划模式下命令逐条提交，由你点击执行 / In `/plan` mode each command is submitted as a card and runs only after you approve it.
  4. 不碰本机 / Remote only：AI 只能操作你打开的远端终端，本机 shell 与文件不在其能力范围内 / The AI can only operate the remote terminals you open; your local shell and files stay out of reach.
- 标签：Electron、DeepSeek Harness、SSH、Terminal、AI Agent
- 链接：
  - GitHub：https://github.com/Alexliwenhao/shell-desktop
  - Releases：https://github.com/Alexliwenhao/shell-desktop/releases/latest
  - 用户指南：https://github.com/Alexliwenhao/shell-desktop/blob/master/docs/user-guide.md
- 声明：独立开源项目，与深度求索不存在隶属、合作、授权或背书关系。

图片素材复用 `dsh-desktop` 的 `docs/screenshots/`：

- 封面：`20-theme-dark-overview.png`
- 画廊：`09-ai-conversation.png`、`13-plan-command-card.png`、`15-file-panel.png`、`22-theme-light-overview.png`

截图中的内网 IP 已存在于公开仓库，首版按原样复用；后续如需对外投放再统一打码。

## 8. 组件

- `BaseLayout.astro`：head、meta、hreflang、Header、Footer。
- `Header.astro`、`Footer.astro`。
- `Hero.astro`、`ProductCard.astro`、`SectionHeading.astro`。
- `src/styles/global.css`：设计令牌与基础样式。
- `src/i18n/ui.ts`、`src/data/products.ts`。
- 路由文件：`src/pages/index.astro`、`src/pages/en/index.astro`、`src/pages/products/[slug].astro`、`src/pages/en/products/[slug].astro`。

## 9. 构建与部署

`.github/workflows/deploy.yml`：

- 触发：push 到 `main`、手动 `workflow_dispatch`。
- 权限：`contents: read`、`pages: write`、`id-token: write`。
- 构建：`actions/checkout@v4` + `withastro/action@v3`（Node 22）。
- 部署：`actions/deploy-pages@v4`。

Astro 配置：`site: 'https://alexliwenhao.github.io'`，`base: '/'`。

仓库创建后通过 REST API 开启 Pages：`POST /repos/Alexliwenhao/alexliwenhao.github.io/pages`，`build_type: "workflow"`。

## 10. 维护流程

新增产品：

1. 把图片放入 `src/assets/products/<slug>/`。
2. 在 `src/data/products.ts` 追加一条 `Product`。
3. push 到 `main`，等待 Actions 完成。

不需要新增路由或复制页面。

## 11. 验收标准

- `npm run build` 本地通过，无类型错误。
- Actions 部署成功，`https://alexliwenhao.github.io/` 与 `/en/` 均返回 200。
- 首页产品卡片、详情页、语言切换、GitHub / Releases / 文档链接可用。
- 移动端单列布局正常，无横向滚动。
- 新增产品的维护步骤写入仓库 README。
