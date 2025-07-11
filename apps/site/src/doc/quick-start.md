## 快速开始

### 安装

你需要在你的项目中安装对应的包：

```bash
npm i @surely-vue/table --save
```

或者

```bash
yarn add @surely-vue/table
```

### 在项目中使用

#### 导入样式：

```css
import '@surely-vue/table/dist/index.less';
```

#### 4.0 及以上版本

该版本组件底层默认依赖 Ant Design Vue 4.x 版本组件库(当然这并不影响你使用其它组件库)，如果你需要使用 Ant Design Vue 3.x 版本组件库，需要额外导入依赖样式：

```css
import '@surely-vue/table/src/style/antdv.less';
```

#### 4.0 以下版本

该版本组件底层依赖 Ant Design Vue （3.x）组件库(当然这并不影响你使用其它组件库)，css 文件是构建后产物，为了避免引用版本不一致导致各种奇怪问题，我们推荐使用 less 来导入原始文件，这样可以避免样式和逻辑依赖版本不一致问题。


> 如使用 less 文件，需要安装 less-loader，并开启 `javascriptEnabled`，可查看下方模板库的配置。

#### 注册组件：

目前该组件底层有部分依赖 Ant Design Vue 组件库(当然这并不影响你使用其它组件库)，css 文件是构建后产物，为了避免引用版本不一致导致各种奇怪问题，我们推荐使用 less 来导入原始文件，这样可以避免样式和逻辑依赖版本不一致问题。

我们建议直接在入口处导入进行全局注册，组件内部会自动注册子组件（`STableColumn`、 `STableColumnGroup`、 `STableSummary`、 `STableSummaryRow`、 `STableSummaryCell`）：

```js
import { createApp } from 'vue';
import STable from '@surely-vue/table';
// eslint-disable-next-line import/no-unresolved
import App from './App.vue';

const app = createApp(App);
app.use(STable);
```

在模板中的对应使用的组件名称为下划线，如：`STable` 对应 `s-table` 等等：

```html
<s-table :columns="columns" :data-source="dataSource"></s-table>
```

### TS 类型提示

如使用全局注册组件，可在`shims-vue.d.ts`中添加如下类型声明：

```ts
declare module 'vue' {
  export interface GlobalComponents {
    STable: typeof import('@surely-vue/table')['STable'];
    STableColumn: typeof import('@surely-vue/table')['STableColumn'];
    STableColumnGroup: typeof import('@surely-vue/table')['STableColumnGroup'];
    STableSummary: typeof import('@surely-vue/table')['STableSummary'];
    STableSummaryRow: typeof import('@surely-vue/table')['STableSummaryRow'];
    STableSummaryCell: typeof import('@surely-vue/table')['STableSummaryCell'];
  }
}
export {};
```

### 去除水印

购买后，你将获得一个授权码，你只需要在使用组件前设置正确的授权码即可：

```js
import { setLicenseKey } from '@surely-vue/table';
setLicenseKey('fdafefdaffklfjajuiefhrdbfdnsafjkasyegwfpqfldfd45f48ew468fr5ds');
```

### 模板库

我们创建了模板仓库供参考，或者可以直接使用该模板进行业务开发：

基于 Vue Cli：https://github.com/surely-vue/surely-vue-starter

基于 Vite：https://github.com/surely-vue/surely-vue-vite-starter

### CDN 引入

```html
//css
<link href="https://unpkg.com/@surely-vue/table/dist/index.min.css" rel="stylesheet" />

// js
<script src="https://unpkg.com/@surely-vue/table"></script>
```

对于生产环境，我们推荐链接到一个明确的版本号和构建文件，以避免新版本造成的不可预期的破坏。

### 暗黑模式

#### 4.0.0+

```js
import { setConfig } from '@surely-vue/table';
setConfig({
  theme: 'dark',
});
```

> 注意：SurelyTable 依赖的 Ant Design Vue 组件的暗黑由 Ant Design Vue 控制

#### 2.5.0+

我们提供了内置的暗黑模式 less 文件，未来我们会完全升级成 css variable 方案。

```css
import '@surely-vue/table/dist/dark.less';
```

你也可以使用 [`@umijs/ssr-darkreader`](https://github.com/chenshuai2144/darkreader) 插件，全局应用暗黑主题。
