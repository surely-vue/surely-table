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
import '@surely-vue/table/dist/index.css'
```

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
