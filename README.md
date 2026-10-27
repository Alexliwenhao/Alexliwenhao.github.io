# Alex · AI 产品

个人 AI 产品合集站点，线上地址：**https://alexliwenhao.github.io/**

- 中文首页：`/`
- English：`/en/`
- 首版产品：AI Shell Desktop

## 本地开发

需要 Node.js 20+：

```sh
npm install
npm run dev       # 本地开发，默认 http://localhost:4321
npm run build     # 生产构建，输出到 dist/
npm run preview   # 预览构建产物
npm run check     # Astro / TypeScript 检查
```

## 新增产品

1. 把截图放进 `src/assets/products/<slug>/`。
2. 在 `src/data/products.ts` 的 `products` 数组追加一条 `Product`。
3. 提交并 push 到 `main`。

卡片、中文/英文详情页和图片优化都会自动生成，不需要新增路由。

## 部署

push 到 `main` 后，GitHub Actions（`.github/workflows/deploy.yml`）自动构建并发布到 GitHub Pages。

首次部署前需确认仓库 **Settings → Pages → Source** 为 **GitHub Actions**。

## 目录

```
src/
  assets/products/      产品截图
  components/           页面组件
  data/products.ts      产品数据（中英文）
  i18n/ui.ts            界面文案
  layouts/              基础布局
  pages/                路由（中文 /、英文 /en/）
  styles/global.css     设计令牌与全局样式
```

## 说明

站点固定深色主题，不依赖外部字体或 UI 框架。产品截图来自对应产品仓库。
