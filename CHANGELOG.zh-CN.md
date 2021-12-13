## 更新日志

`@surely-vue/table` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

- 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
- 次版本号：每月发布一个带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。

---

## 2.0.5

`2021-12-13`

- 🌟 支持根元素挂载未声明属性，如 class、style 等
- 🌟 调整 customHeaderCell 属性挂载元素
- 🐞 修复在动画下，获取宽高错误导致渲染缺失问题
- 🐞 修复表合计内容换行后背景色缺失问题

#### 文档

- 🌟 新增自定义背景色示例 [查看](https://www.surely.cool/doc/custom#bg-color)

## 2.0.4

`2021-12-12`

- 🌟 隐藏 Mac 下总结栏滚动条
- 🌟 expandRender 支持函数属性
- 🌟 table body 背景色从 cell 调整到 row 上，方便使用 customRow 定义背景色
- 🐞 修复 resizeColumn 受控改变 width 时，宽度不改变问题

## 2.0.3

`2021-12-06`

- 🌟 `resizeColumn` 新增 action 参数，用于判断开始、结束。
- 🌟 `resizeColumn` 新增返回值为 `false` 时受控模式，内部不再自动更改宽度。
- 🌟 新增 `scrollTo`, 控制滚动位置 [demo](/doc/basic#scroll)
- 🐞 修复动态 columns 报错问题 [#8](https://github.com/surely-vue/table/issues/8)

## 2.0.2

`2021-11-26`

- 🌟 新增 CDN 引入支持
- 🌟 优化国际化支持

## 2.0.1

`2021-11-25`

- 🐞 优化 package.json，减少依赖，同时避免引入不同 vue 文件问题

## 2.0

`2021-11-25`

🔥 🔥 🔥 正式发布

## 1.0

该版本不建议使用，可以忽略，我们直接从 2.0 开始
