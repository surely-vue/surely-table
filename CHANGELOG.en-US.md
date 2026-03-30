## Changelog

`@surely-vue/table` strictly follows [Semantic Versioning 2.0.0](http://semver.org/).

#### Release Cycle

- Patch version: Routine bugfix updates every weekend. (Emergency bugfixes can be released at any time)
- Minor version: A backward-compatible version with new features released every month.
- Major version: Contains breaking changes and new features, not within the release cycle.

---

> Note: The detailed changelog below is currently in Chinese. We are working on translating it.

## 5.1.2

- 🐞 Fix Excel export skipping columns that only have `dataIndex` (without `key`) in grouped header scenarios, causing header and data misalignment

## 5.1.1

- 🌟 Export supports header `colSpan`/`rowSpan` merging
- 🌟 Export supports `customRender` returning `{ props: { colSpan, rowSpan } }` for data cell merging
- 🌟 Export supports `customHeaderCell` header merge info
- 🌟 `processCellCallback` adds `index` and `recordIndexs` parameters

## 5.1.0

- 🌟 Add exportDataAsCsv method to export CSV file
- 🌟 Add exportDataAsExcel method to export Excel file

## 5.0.16

- 🌟 Add ensureRowVisible method to ensure new row is visible
- 🐞 Fix emptyText slot not interactive issue when data is empty

## 5.0.15

- 🐞 Fix sub-table responsiveness issue

## 5.0.14

- 🌟 Add customHeaderCheckbox slot for custom header checkbox
- 🐞 Fix row height calculation error when autoHeight is enabled

## 5.0.12 / 5.0.13

- 🐞 Fix row height calculation error when merging rows in autoHeight

## 5.0.10

- 🐞 Fix watermark mask issue

## 5.0.9

- 🐞 Fix HeaderCellTitle custom element update rendering issue

## 5.0.8

- 🐞 Fix row height calculation error when merging rows in autoHeight

## 5.0.5 / 5.0.6 / 5.0.7

- 🐞 Fix vue-demi dependency issue

## 5.0.4

- 🐞 Fix scrolling issue in low version Firefox

## 5.0.3

- 🌟 Add `yBuff` property for custom vertical buffer
- 🌟 Add `xBuff` property for custom horizontal buffer

## 5.0.2

- 🐞 Fix Tooltip zIndex issue

## 5.0.1

- 🐞 Fix valueSetter triggering twice in edit mode [#271](https://github.com/surely-vue/surely-table/issues/271)
- 🐞 Fix non-fixed summary row being covered

## 5.0.0

- 🌟 Optimize cell rendering to improve performance
- 🌟 Optimize `tooltip` component to improve performance
- 🌟 Remove `rowHoverDelay` property

## 4.3.17

- 🐞 Fix Checkbox selection jumping issue

## 4.3.16

- 🐞 Fix Checkbox selection exception when disabled

## 4.3.15

- 🐞 Fix range selection border issue
- 🐞 Fix unable to range select from bottom to top

## 4.3.14

- 🌟 Checkbox allows box selection
- 🌟 Optimize automatic height calculation to avoid flickering

## 4.3.13

- 🌟 Fix range selection triggering all cell updates issue, improving performance

## 4.3.12

- 🐞 Fix range selection cell triggering horizontal scroll issue

## 4.3.11

- 🐞 Fix memory leak issue when data is empty

## 4.3.10

- 🐞 Fix defaultPageSize invalid issue

## 4.3.8/4.3.9

- 🐞 Optimize scrollbar performance

## 4.3.7

- 🐞 Fix X-axis scrollbar memory leak issue

## 4.3.6

- 🐞 Fix Y-axis scrollbar memory leak issue

## 4.3.5

- 🐞 Fix multiple triggering of page change event issue

## 4.3.4

- 🐞 Fix scrollbar not showing in new version of firefox

## 4.3.3

- 🐞 Fix rowSelection.getCheckboxProps not responding to changes [#223](https://github.com/surely-vue/surely-table/issues/223)

## 4.3.2

- 🐞 Fix current not syncing after pagination data source change
- 🌟 tooltip adds showArrow to hide arrow
- 🌟 Add tooltipDelay for custom delay time

## 4.3.0/4.3.1

- 🐞 Fix right-click menu position error
- 🌟 Optimize tooltip to avoid unable to click when cell click speed is too fast

## 4.2.13

- 🐞 Fix row drag sorting error [#214](https://github.com/surely-vue/surely-table/issues/214)

## 4.2.12

- 🐞 Fix defaultSorderOrder invalid issue
- 🐞 Fix tooltip overlayStyle invalid issue

## 4.2.11

- 🐞 Fix memory leak issue

## 4.2.10

- 🌟 Column width drag column does not participate in automatic allocation to avoid flickering
- 🐞 Fix Tooltip position issue

## 4.2.9

- 🌟 Add preserveRow to keep rows resident in the page, not affected by virtual scrolling
- 🐞 Fix beforeOpenEditor called multiple times
- 🐞 Fix tooltip width adaptive issue and isEllipsis calculation error when page zooms

## 4.2.8

- 🐞 Fix style centering and shadow issues when data is empty
- 🐞 Right-click menu covered issue

## 4.2.7

- 🐞 Fix missing oldValue in onBeforeCloseEditor after active open

## 4.2.6

- 🌟 Add onCloseEditor, onOpenEditor events
- 🌟 Auto focus input when switching with tab key

## 4.2.5

- 🌟 onBeforeCloseEditor adds oldValue
- 🐞 Fix Tooltip console output overlayStyle warning issue

## 4.2.4

- 🌟 Tooltip adds `shouldOpen` `allowEnter` properties
- 🐞 Fix issue where closing editor in a cell closes all open editor cells
- 🐞 Fix extra bottom border issue when data is empty

## 4.2.3

- 🐞 Fix scrollbar flickering when dragging column width [#187](https://github.com/surely-vue/surely-table/issues/187)
- 🐞 Fix tooltip console output warning issue in autoHeight [#188](https://github.com/surely-vue/surely-table/issues/188)

## 4.2.2

- 🌟 Add onCellClick event for listening to cell click events
- 🌟 Add beforeOpenEditor event
- 🌟 Add beforeCloseEditor event
- 🐞 Fix automatic row height invalid issue in cell edit mode

## 4.2.1

- 🌟 valueSetter supports promise [#184](https://github.com/surely-vue/surely-table/issues/184)
- 🌟 Add onCellKeydown event for listening to cell keyboard events [#179](https://github.com/surely-vue/surely-table/issues/179)
- 🐞 Fix width calculation exception when screen zooms [#176](https://github.com/surely-vue/surely-table/issues/176)

## 4.2.0

- 🌟 cellEditor adds record, recordIndexs parameters
- 🌟 Rollback default deep watch introduced in 4.1.10, add deepWatchDataSource, deepWatchColumns config for deep watching data source and column config changes
- 🐞 Fix input box keyboard unable to move left and right issue

## 4.1.13

- 🌟 Add multiple cell simultaneous editing function

## 4.1.12

- 🐞 Fix onShowSizeChange error

## 4.1.11

- 🐞 Fix error when controlled pagination

## 4.1.10

- 🐞 Fix border style issue
- 🐞 Fix Chrome low version browser unable to render data issue

## 4.1.9

- 🐞 Fix cell copy failure issue

## 4.1.8

- 🐞 Fix cell double click unable to copy issue
- 🌟 Add editableTrigger custom trigger edit mode event

## 4.1.6

- 🐞 Fix slot type hint error

## 4.1.5

- 🐞 Fix input, textarea etc. form items in cell unable to select and copy issue

## 4.1.4

- 🐞 Fix unable to box select cells in Firefox

## 4.1.2

- 🐞 Fix multiple scrollbars showing when row drag sorting

## 4.1.1

- 🐞 Fix height property invalid issue

## 4.1.0

- 🐞 Fix KeepAlive activation position out of sync issue [#164](https://github.com/surely-vue/table/issues/164)
- 🐞 Fix copying only the last column when box selecting multiple cells from right to left [#163](https://github.com/surely-vue/table/issues/163)

## 4.1.0-beta.6

- 🌟 Optimize scrolling performance on Mac, avoid white screen when dragging scrollbar

## 4.1.0-beta.5

- 🐞 Fix popup not closing when clicking table [#162](https://github.com/surely-vue/table/issues/140)

## 4.1.0-beta.3

- 🌟 Add copy delimiter `copyDelimiter`

## 4.1.0-beta.2

- 🐞 Remove irrelevant log info

## 4.1.0-beta.1

- 🌟 Add cell multiple selection
- 🌟 Improve Tab accessibility

## 4.0.8

- 🐞 Fix unstable scrollbar issue in low version browsers [#140](https://github.com/surely-vue/table/issues/140)
- 🐞 Fix triggering full bodyCell execution when hovering

## 4.0.5

- 🐞 Fix drag ghost content misalignment when dragging tree structure [#147](https://github.com/surely-vue/table/issues/147)

## 4.0.4

- 🐞 Fix scrollTo method scrolling misalignment issue

## 4.0.3

- 🌟 Header menu adds filter related parameters, customizable filter items
- 🌟 Edit mode adds cellEditor slot, customizable edit components, such as date, select box etc.

## 4.0.2

- 🐞 Fix edited cell value not updating when losing focus

## 4.0.1

- 🌟 Optimize header menu animation

## 4.0.0

- 🌟 Brand new design
- 🌟 Support Ant Design Vue 4.x version
- 🌟 Add global config setConfig, more convenient to switch themes and animations
- 🌟 Built-in edit mode, higher performance, better experience
- 🌟 Add header menu, can aggregate more operations into menu popup

## 3.0.8

- 🌟 Support slot type hints, requires vue 3.3 and above

## 3.0.7

- 🐞 Fix tree table selection issue [#137](https://github.com/surely-vue/table/issues/138)

## 3.0.6

- 🌟 Add typings global declaration file for business use

## 3.0.5

- 🐞 Fix Tooltip invalid issue [#138](https://github.com/surely-vue/table/issues/138)

## 3.0.4

- 🌟 Expose `scrollLeft` `srollTop` values

## 3.0.3

- 🌟 Add class name when hovering [#124](https://github.com/surely-vue/table/issues/124)
- 🐞 Fix expandIcon slot invalid issue [#123](https://github.com/surely-vue/table/issues/123)

## 3.0.2

- 🐞 Fix expand, expandedRowsChange events not triggering issue [#113](https://github.com/surely-vue/table/issues/120)

## 3.0.1

- 🌟 Right-click menu adds active hide method `hidePopup` [#116](https://github.com/surely-vue/table/issues/116)
- 🐞 Fix scrollbar exception issue when browser zooms [#113](https://github.com/surely-vue/table/issues/113)

## 3.0.0

- 🌟 Performance optimization, avoid triggering component render when hovering

## 2.5.3

- 🐞 Fix tree structure unable to expand issue [#101](https://github.com/surely-vue/table/issues/101)

## 2.5.2

- 🐞 Fix `rowExpandable` unable to disable issue [#99](https://github.com/surely-vue/table/issues/99)

## 2.5.1

- 🐞 Fix console warning issue under `vue@3.2.45` [#95](https://github.com/surely-vue/table/issues/95)

## 2.5.0

- 🌟 Add dark theme less file
- 🌟 Add right-click menu function
- 🐞 Fix scrollbar appearing when dragging header

## 2.4.11

`2022-09-29`

- 🐞 Fix scroll.x invalid issue
- 🐞 Fix header scrollbar covering table content issue

## 2.4.10

`2022-09-20`

- 🐞 Fix display exception caused by column dragging [#82](https://github.com/surely-vue/table/issues/82)
- 🐞 Fix header grouping display exception in virtual scrolling

## 2.4.9

`2022-09-01`

- 🐞 Fix white screen issue under vue 3.2.38 version [#79](https://github.com/surely-vue/table/issues/79)
- 🌟 scroll.x supports dynamic adjustment
- 🌟 Expand icon and indent placeholder add root node, convenient for custom styles [#78](https://github.com/surely-vue/table/issues/78)

## 2.4.8

`2022-08-31`

- 🐞 Fix `summaryFixed` type reminder issue
- 🌟 Optimize triggering sort operation when dragging column width
- 🐞 Fix `onSelectAll` first parameter error issue

## 2.4.7

`2022-08-10`

- 🌟 Add `sticky.topSummary` for sticky top summary row
- 🐞 Fix `summaryFixed` type reminder issue

## 2.4.6

`2022-08-05`

- 🌟 `summaryFixed` supports top sticky
- 🌟 `rowSelection` columnTitle supports function
- 🌟 `selection` text supports function
- 🐞 Fix scroll width adaptive issue [#67](https://github.com/surely-vue/table/issues/67)
- 🐞 Fix `rowSelection` columnTitle not taking effect issue [#64](https://github.com/surely-vue/table/issues/64)

## 2.4.5

`2022-07-27`

- 🐞 Fix `ignoreCellKey` default value error issue

## 2.4.4

`2022-07-27`

- 🌟 Add `ignoreCellKey` to further improve component reuse and performance
- 🌟 Add `showHeaderScrollbar` to show header scrollbar

## 2.4.3

`2022-07-16`

- 🌟 Compatible with antdv 3.3.0-beta

## 2.4.2

`2022-07-15`

- 🐞 Fix scrollX config invalid issue

## 2.4.1

`2022-07-08`

- 🌟 Add xVirtual property to control whether horizontal virtual scrolling
- 🐞 Fix merged cell hidden issue after scrolling merged columns

## 2.4.0

`2022-06-08`

### Note: This version requires Vue 3.2.34 and above

- 🌟 Use triggerRef to improve drag performance, adjust Vue minimum version to 3.2.34
- 🐞 Fix original data not changing after dragging issue [#45](https://github.com/surely-vue/table/issues/45)
- 🐞 Increase background color weight of selected row when zebra stripe, selection, sorting

## 2.3.3

`2022-06-07`

- 🌟 Optimize Chrome 102 version scrolling stutter issue (still not as smooth as others, but acceptable, and confirmed to be a Chrome issue, eventually waiting for chrome fix, expected to be fixed in chrome 104 version)
- 🐞 Fix expand icon misalignment issue in Firefox split screen mode

## 2.3.2

`2022-05-25`

- 🐞 Fix error issue in Vue 3.2.34 and above

## 2.3.1

`2022-05-14`

- 🐞 Fix extra scrollbar issue in special scenarios [#20](https://github.com/surely-vue/table/issues/20)

## 2.3.0

`2022-05-12`

- 🌟 Add header auto height [#32](https://github.com/surely-vue/table/issues/32)
- 🐞 Fix missing issue after scrolling when merged column span is large [#29](https://github.com/surely-vue/table/issues/29)

## 2.2.3

`2022-04-29`

- 🐞 Fix less error issue under antdv2 [#36](https://github.com/surely-vue/table/issues/21)

## 2.2.2

`2022-04-09`

- 🐞 Fix unable to click history state page number after page change and resetting initial value

## 2.2.1

`2022-04-01`

- 🐞 Fix change event triggering twice when `pageSize` changes [#18](https://github.com/surely-vue/table/issues/18)
- 🐞 Fix cell cached content not updating after enabling drag [#21](https://github.com/surely-vue/table/issues/21)

## 2.2.0

`2022-03-19`

- 🌟 Optimize table initialization performance
- 🌟 Compatible with antdv 3.1 css var
  - Theme color uses `@surely-primary-color` inheriting `@primary-color`, avoiding conflict with antdv, changing `@primary-color` will sync `@surely-primary-color` by default, unless `@surely-primary-color` is customized again
  - `@surely-primary-color` is a css var, convenient for custom colors
- 🌟 Add `rowHoverDelay` for optimizing table row hover performance [#17](https://github.com/surely-vue/table/issues/17)

## 2.1.1

`2022-02-19`

- 🔥 Support column drag
- 🌟 Optimize drag column width performance
- 🐞 Fix row drag scroll misalignment issue after page scroll
- 🐞 Fix error issue when header grouping children is empty

## 2.1.0

`2022-02-12`

- 🔥 Support row drag sorting (tree structure, sub-table both supported)
- 🌟 Optimize radio, checkbox components, further improve performance (involving row selection component, filter selection component)
- 🌟 Add `allowCancelRadio` config whether to allow cancelling radio
- 🌟 Optimize summary bar shadow and border 1px misalignment issue when fixed column
- 🐞 Fix summary bar fixed column cell scrollbar issue under safari
- 🐞 Fix summary bar position error issue when specifying height
- 🐞 Fix merged column invalid issue

## 2.0.10

`2022-01-17`

- 🐞 Fix height error issue caused by animation in popup

## 2.0.9

`2022-01-16`

- 🐞 Fix merged row height calculation error
- 🌟 Optimize merged column fault tolerance, prevent error caused by illegal config

## 2.0.7

`2021-12-27`

- 🌟 Tooltip not displayed when empty

## 2.0.6

`2021-12-26`

- 🌟 Add high performance tooltip function, customizable cell hint content
- 🐞 Fix header cell background color becoming transparent when hovering header

## 2.0.5

`2021-12-13`

- 🌟 Support mounting undeclared attributes to root element, such as class, style etc.
- 🌟 Adjust customHeaderCell attribute mounting element
- 🐞 Fix rendering missing issue caused by getting width/height error under animation
- 🐞 Fix background color missing issue after table summary content wrap

#### Documentation

- 🌟 Add custom background color example [View](https://www.surelyvue.com/doc/custom#bg-color)

## 2.0.4

`2021-12-12`

- 🌟 Hide summary bar scrollbar under Mac
- 🌟 expandRender supports function attribute
- 🌟 table body background color adjusted from cell to row, convenient for using customRow to define background color
- 🐞 Fix width not changing when resizeColumn controlled changes width

## 2.0.3

`2021-12-06`

- 🌟 `resizeColumn` adds action parameter, used to judge start, end.
- 🌟 `resizeColumn` adds controlled mode when return value is `false`, internal no longer automatically changes width.
- 🌟 Add `scrollTo`, control scroll position [demo](/doc/basic#scroll)
- 🐞 Fix dynamic columns error issue [#8](https://github.com/surely-vue/table/issues/8)

## 2.0.2

`2021-11-26`

- 🌟 Add CDN import support
- 🌟 Optimize internationalization support

## 2.0.1

`2021-11-25`

- 🐞 Optimize package.json, reduce dependencies, while avoiding introducing different vue files issue

## 2.0

`2021-11-25`

🔥 🔥 🔥 Official Release

## 1.0

Not recommended to use this version, can be ignored, we start directly from 2.0
