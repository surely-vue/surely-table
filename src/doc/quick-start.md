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

导入样式：

```css
import '@surely-vue/table/dist/index.less'
```

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
