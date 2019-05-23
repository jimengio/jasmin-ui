## Jasmin UI

Demo http://fe.jimu.io/jasmin-ui

#### Usage

```bash
yarn add @jimengio/jasmin-ui
```

Or

```bash
npm install @jimengio/jasmin-ui
```

注：项目入口文件要引入 css 文件

```ts
import "@jimengio/jasmin-ui/lib/assets/antd/antd.min.css"
```

安装开发依赖

```ts
yarn install
```

启动项目

```bash
yarn dev
```

编译

```bash
yarn release
```

### Colored Tabs

Compared to tabs:

* DOM structure too simple, not many properties.
* No animations.
* Allow customizing styles, especially when used in dark background.

```tsx
import {ColoredTabs, IColoredTab } from "@jimengio/jasmin-ui";

let tabs: IColoredTab[] = [
  { value: "factory", display: "工厂" },
  { value: "material", display: "物料" },
  { value: "analysis", display: "分析结果" },
  { value: "process", display: "制程" },
];

<ColoredTabs value={tab} tabs={tabs} onChange={setTab} />

<ColoredTabs
  value={tab}
  tabs={tabs}
  onChange={setTab}
  tabClassName={styleTab}
  activeTabClassName={styleActiveTab}
  highlightClassName={styleTabHighlight}
/>
```
