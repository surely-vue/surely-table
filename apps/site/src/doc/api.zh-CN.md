## API

### 全局配置

如下配置需要在应用入口处配置，并且只需配置一次即可。

#### 正版授权

```js
import { setLicenseKey } from '@surely-vue/table';
setLicenseKey('联系客服获取授权');
```

#### setConfig （4.0+）

```js
import { setConfig } from '@surely-vue/table';
setConfig(config: {
  animateRows?: boolean; // 是否开启动画
  theme?: 'light' | 'dark'; // 暗黑主题
  primaryColor?: string; // 主题色
  prefixCls?: string; // className 前缀，注意需要同步更改 less 变量：@surely-table-prefix-cls
});
```

### Table

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| animateRows | 是否开启动画 | boolean | true |  |
| autoHeaderHeight | 是否自动表头高度，开启后会全量加载表头部分，有一定的性能损耗 | boolean | false | 2.3 |
| bordered | 是否展示外边框和列边框 | boolean | false |  |
| columns | 表格列的配置描述，具体项见[下表](#column) | array | - |  |
| childrenColumnName | 指定树形结构的列名 | string | `children` |  |
| dataSource | 数据数组 | object\[] |  |  |
| defaultExpandAllRows | 初始时，是否展开所有行 | boolean | false |  |
| defaultExpandedRowKeys | 默认展开的行 | string\[] | - |  |
| deepWatchDataSource | 是否深度监听 dataSource 变化，开启后会对 dataSource 进行深度监听，有一定的性能损耗 | boolean | false | 4.2.0 |
| deepWatchColumns | 是否深度监听 columns 变化，开启后会对 columns 进行深度监听，有一定的性能损耗 | boolean | false | 4.2.0 |
| expandedRowKeys | 展开的行，控制属性 | string\[] | - |  |
| expandedRowRender | 额外的展开行 | Function({record, index, indent, expanded}):VNode \| v-slot:expandedRowRender="{record, index, indent, expanded}" | - |  |
| expandFixed | 控制展开图标是否固定，可选 true `left` `right` | boolean \| string | false |  |
| expandIcon | 自定义展开图标 | Function(props):VNode \| v-slot:expandIcon="props" | - |  |
| expandRowByClick | 通过点击行来展开子行 | boolean | `false` |  |
| expandIconColumnIndex | 自定义展开按钮的列顺序，`-1` 时不展示 | number | - |  |
| footer | 表格尾部 | Function(currentPageData)\|v-slot:footer="currentPageData" |  |  |
| getPopupContainer | 设置表格内各类浮层的渲染节点，如筛选菜单 | (triggerNode) => HTMLElement | `() => TableHtmlElement` |  |
| loading | 页面是否加载中 | boolean\|[object](#loading) | false |  |
| locale | 默认文案设置，目前包括排序、过滤、空数据文案 | object | filterConfirm: `确定` <br> filterReset: `重置` <br> emptyText: `暂无数据` |  |
| pagination | 分页器，参考[配置项](#pagination)，设为 false 时不展示和进行分页 | object |  |  |
| rowClassName | 表格行的类名 | Function(record, index):string | - |  |
| rowKey | 表格行 key 的取值，可以是字符串或一个函数 | string\|Function(record):string | 'key' |  |
| rowSelection | 列表项是否可选择，[配置项](#rowselection) | object | null |  |
| scroll | 表格是否可滚动，也可以指定滚动区域的宽、高，[配置项](#scroll) | object | - |  |
| showHeader | 是否显示表头 | boolean | true |  |
| showSorterTooltip | 表头是否显示下一次排序的 tooltip 提示。当参数类型为对象时，将被设置为 Tooltip 的属性 | boolean \| [Tooltip props](#tooltip) | true |  |
| size | 表格大小 | default \| middle \| small | default |  |
| sortDirections | 支持的排序方式，取值为 `ascend` `descend` | Array | \[`ascend`, `descend`] |  |
| sticky | 设置粘性头部和滚动条 | boolean \| `{offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement, topSummary?: boolean }` | - | topSummary 2.4.7 |
| title | 表格标题 | Function(currentPageData)\|v-slot:title="currentPageData" |  |  |
| indentSize | 展示树形数据时，每层缩进的宽度，以 px 为单位 | number | 15 |  |
| rowExpandable | 设置是否允许行展开 | (record) => boolean | - |  |
| customRow | 设置行属性 | Function(record, index) | - |  |
| headerCell | 个性化头部单元格 | v-slot:headerCell="{title, column}" | - |  |
| bodyCell | 个性化单元格 | v-slot:bodyCell="{text, record, index, column, key, openEditor(4.0.3), closeEditor(4.0.3)}" | - |  |
| customCell | 设置单元格属性, column 如配置了 `customCell`, 优先使用 column.customCell | Function(obj: {record: any; rowIndex: number; column: ColumnType}) | - |  |
| customFilterDropdown | 自定义筛选菜单，需要配合 `column.customFilterDropdown` 使用 | v-slot:customFilterDropdown="[FilterDropdownProps](#filterdropdownprops)" | - |  |
| customFilterIcon | 自定义筛选图标 | v-slot:customFilterIcon="{filtered, column}" | - |  |
| emptyText | 自定义空数据时的显示内容 | v-slot:emptyText | - |  |
| summary | 总结栏 | v-slot:summary | - |  |
| summaryFixed | 固定总结栏 | boolean \| 'top'（2.4.6） \| 'bottom' | - |  |
| rowDragGhost | 自定义拖拽行时的提示内容 | v-slot:rowDragGhost="arg: [RowDragGhostArg](#rowdragghost)" | - | 2.1.0 |
| columnDrag | 列表头是否允许拖拽, [详见](/doc/dragable/) | boolean | - | 2.1.1 |
| columnDragGhost | 自定义拖拽列时的提示内容 | v-slot:columnDragGhost="arg: [ColumnDragGhostArg](#columndragghost)" | - | 2.1.1 |
| xVirtual | 横向是否虚拟滚动 | boolean | - | 2.4.1 |
| ignoreCellKey | 忽略单元格唯一 key，进一步提升自定义组件复用，bodyCell 插槽新增 key 参数，可根据组件情况自行选用。 | boolean | false | 2.4.4 |
| showHeaderScrollbar | 显示表头滚动条 | boolean | false | 2.4.4 |
| rowHeight | 配置行高，组件内部默认会根据 size 自动调整高度，如果需要自定义高度可使用该属性 | number \| ((p: Record<any, any>, isExpandRow: boolean, baseHeight: number) => number | undefined | - |
| menuIcon | 自定义筛选菜单图标 | v-slot:menuIcon="{column, filtered}" | - | 4.0 |
| menuPopup | 自定义筛选菜单弹出内容 | v-slot:menuPopup="[MenuPopupArg](#MenuPopupArg)" | - | 4.0 |
| cellEditor | 自定义单元格编辑器，结合 column.editable 使用 | v-slot:cellEditor="[CellEditorArgs](#CellEditorArgs)" | - | 4.0 |
| rangeSelection | 单元格选择, 开启后单元格内文本无法划词选中 | boolean \| `single`(只能选择一个区间) | `single` | 4.1.0 |
| copyDelimiter | 复制时单元格拼接分隔符 | string | `\t` | 4.1.0 |
| preserveRow | 行是否常驻页面，不受虚拟滚动影响，一般用于合并行，注意：常驻页面会使性能下降 | ` (p: { record: any; index: number }) => boolean` | - | 4.2.9 |
| tooltipDelay | 单元格 tooltip 延时，用于自定义延迟时间 | number | 200 | 4.3.2 |
| xBuff | 横向缓冲区，用于自定义横向缓冲区 | number | 20 | 5.0.3 |
| yBuff | 纵向缓冲区，用于自定义纵向缓冲区 | number | 50 | 5.0.3 |

- `expandFixed`
  - 当设置为 true 或 `left` 且 `expandIconColumnIndex` 未设置或为 0 时，开启固定
  - 当设置为 true 或 `right` 且 `expandIconColumnIndex` 设置为表格列数时，开启固定

### 事件

| 事件名称 | 说明 | 回调参数 | 版本 |
| --- | --- | --- | --- |
| expandedRowsChange | 展开的行变化时触发 | Function(expandedRows) |  |
| change | 分页、排序、筛选变化时触发 | Function(pagination, filters, sorter, { action: 'paginate' \| 'sort' \| 'filter' }) |  |
| expand | 点击展开图标时触发 | Function(expanded, record) |  |
| resizeColumn | 拖动列时触发, 如果不需要内部自动更改宽度，可以返回 `false` | Function(width, column, action: 'start' \| 'move' \| 'end' ) => boolean \| void | 2.0.3 |
| rowDragEnd | 拖拽行结束时触发 | (opt: [DragRowEventInfo](#dragroweventinfo)) => boolean \| Promise \| void | 2.1.0 |
| columnDragEnd | 拖拽列结束时触发 | (opt: [DragColumnEventInfo](#dragcolumneventinfo)) => boolean \| Promise \| void | 2.1.1 |
| cellKeydown | 单元格键盘事件, 返回 false 时，将跳过组件内部处理，如左右切换等 | (event: KeyboardEvent, params: [KeydownPayload](#keydownpayload)) => void | 4.2.1 |
| cellClick | 单元格点击事件 | (event: MouseEvent, params: [CellRenderArgs](#cellrenderargs)) => void | 4.2.2 |
| beforeOpenEditor | 打开编辑器前触发，返回 false 时，将不会打开。注意：主动触发 openEditor 时不会执行此事件 | (params: [CellRenderArgs](#cellrenderargs)) => boolean \| Promise | 4.2.2 |
| beforeCloseEditor | 关闭编辑器前触发，返回 false 时，将不会关闭。 注意：主动触发 closeEditor 时不会执行此事件 | (params: [CellRenderArgs](#cellrenderargs)) => boolean \| Promise | 4.2.2 |
| closeEditor | 关闭编辑器触发。 注意： 和 如下 closeEditor 方法不是同一个 | (params: [CellRenderArgs](#cellrenderargs)) => void | 4.2.6 |
| openEditor | 打开编辑器触发。 注意： 和 如下 openEditor 方法不是同一个 | (params: [CellRenderArgs](#cellrenderargs)) => void | 4.2.6 |

### 方法

| 事件名称 | 说明 | 参数 | 版本 |
| --- | --- | --- | --- |
| scrollTo | 滚动到指定位置, 优先级：left > columnIndex > columnKey | Function(pos: {left?: number; top?: number; columnIndex?: number; columnKey?: Key; rowKey?: Key; }, behavior?: 'auto' \| 'smooth') | 2.0.3 |
| scrollLeft | 当前横向滚动位置 | ComputedRef\<number\> |  |
| scrollTop | 当前纵向滚动位置 | ComputedRef\<number\> |  |
| copySelectedRange | 复制当前选中的单元格 | () => void | 4.1.0 |
| getSelectedRange | 获取当前选中的单元格 | () => [SelectedRangeItem](#selectedrangeitem)[] | 4.1.0 |
| clearAllSelectedRange | 清空当前选中的单元格 | () => void | 4.1.0 |
| appendCellToSelectedRange | 添加单元格到选中区域 | (cell: [AppendCellRange](#appendcellrange)) => void | 4.1.0 |
| closeEditor | 关闭单元格编辑 | (cellInfos?: {columnKey: Key; rowKey: Key}[])=> void | 4.1.13 |
| openEditor | 打开单元格编辑 | (cellInfos?: {columnKey: Key; rowKey: Key}[])=> void | 4.1.13 |

### SelectedRangeItem

```ts
export interface SelectedRangeItem {
  startColumn: ColumnType<DefaultRecordType> | ColumnGroupType<DefaultRecordType>;
  startRow: { rowIndex: number; recordIndexs: number[] };
  endRow: { rowIndex: number; recordIndexs: number[] };
  columns: (ColumnType<DefaultRecordType> | ColumnGroupType<DefaultRecordType>)[];
  flattenData: DefaultRecordType[]; // 当前页面被扁平化处理后的数据，谨慎使用，可能会有变动
}
```

### AppendCellRange

```ts
export interface AppendCellRange {
  columnsKey?: Key[];
  columnStartKey?: Key;
  columnEndKey?: Key;
  rowStartIndex: number;
  rowEndIndex: number;
}
```

### KeydownPayload

```ts
export interface KeydownPayload {
  cellPosition: {
    rowIndex: number;
    column: Column;
  };
  isEditing: boolean;
}
```

#### customRow 用法

适用于 `customRow` `customCell` `customHeaderCell`。遵循[Vue jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx)语法。

```jsx
<Table
  customRow={(record) => {
    return {
      xxx... //属性
      onClick: (event) => {},       // 点击行
      onDblclick: (event) => {},
      onContextmenu: (event) => {},
      onMouseenter: (event) => {},  // 鼠标移入行
      onMouseleave: (event) => {}
    };
  }}
/>
```

### Column

列描述数据对象，是 columns 中的一项，Column 使用相同的 API。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- | --- |
| align | 设置列的对齐方式 | `left` \| `right` \| `center` | `left` |  |
| autoHeight | 是否启用自动行高 | boolean | false |  |
| colSpan | 表头列合并,设置为 0 时，不渲染 | number |  |  |
| dataIndex | 列数据在数据项中对应的路径，支持通过数组查询嵌套路径 | string \| string\[] | - |  |
| defaultFilteredValue | 默认筛选值 | string\[] | - |  |
| defaultSortOrder | 默认排序顺序 | `ascend` \| `descend` | - |  |
| ellipsis | 超过宽度将自动省略。设置为 `true` 时，showTitle 默认为 true | boolean \| { showTitle?: boolean } | false |  |
| tooltip | 单元格是否显示 tooltip，它和 ellipsis.showTitle 是独立不相关的功能，tooltip 内容需要额外通过 `tooltip.titile` 或 `cellTooltip` 插槽传递。设置为 `true` 时，使用 `cellTooltip` 内容。 | boolean \| [CellTooltip](#celltooltip) | false |  |
| filterDropdown | 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互 | VNode | - |  |
| customFilterDropdown | 启用 v-slot:customFilterDropdown，优先级低于 filterDropdown | boolean | false |  |
| filterDropdownOpen | 用于控制自定义筛选菜单是否可见 | boolean | - |  |
| filtered | 标识数据是否经过过滤，筛选图标会高亮 | boolean | false |  |
| filteredValue | 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组 | string\[] | - |  |
| filterIcon | 自定义 filter 图标。 | VNode \| ({filtered: boolean, column: Column}) => vNode | false |  |
| filterMultiple | 是否多选 | boolean | true |  |
| filters | 表头的筛选菜单项 | object\[] | - |  |
| fixed | 列是否固定，可选 `true`(等效于 left) `'left'` `'right'` | boolean\|string | false |  |
| key | Vue 需要的 key，如果已经设置了唯一的 `dataIndex`，可以忽略这个属性 | string | - |  |
| customRender | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格行/列合并,可参考 demo 表格行/列合并 | Function({text, record, index, column}) {} | - |  |
| responsive | 响应式 breakpoint 配置列表。未设置则始终可见。 | [Breakpoint](#breakpoint)\[] | - |  |
| showSorterTooltip | 表头显示下一次排序的 tooltip 提示, 覆盖 table 中 `showSorterTooltip` | boolean \| [Tooltip props](#tooltip) | true |  |
| sorter | 排序函数，本地排序使用一个函数(参考 [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 的 compareFunction)，需要服务端排序可设为 true | Function\|boolean | - |  |
| sortOrder | 排序的受控属性，外界可用此控制列的排序，可设置为 `'ascend'` `'descend'` `false` | boolean\|string | - |  |
| sortDirections | 支持的排序方式，取值为 `'ascend'` `'descend'` | Array | `['ascend', 'descend']` |  |
| title | 列头显示文字 | string | - |  |
| width | 列宽度 | string\|number | - |  |
| minWidth | 拖动列最小宽度，会受到表格自动调整分配宽度影响 | number | 50 |  |
| maxWidth | 拖动列最大宽度，会受到表格自动调整分配宽度影响 | number | - |  |
| resizable | 是否可拖动调整宽度，此时 width 必须是 number 类型, 仅支持叶子结点 | boolean | - |  |
| customCell | 设置单元格属性 | Function(obj: {record: any; rowIndex: number; column: ColumnType}) | - |  |
| customHeaderCell | 设置头部单元格属性 | Function(column) | - |  |
| onFilter | 本地模式下，确定筛选的运行函数, 使用 template 或 jsx 时作为`filter`事件使用 | Function | - |  |
| onFilterDropdownOpenChange | 自定义筛选菜单可见变化时调用，使用 template 或 jsx 时作为`filterDropdownVisibleChange`事件使用 | function(visible) {} | - | 4.0 |
| rowDrag | 当前列添加拖拽手柄, [详见](/doc/dragable/) | boolean \| (arg: { record: RecordType; column: ColumnType }) => boolean | - | 2.1.0 |
| drag | 列表头是否允许拖拽, [详见](/doc/dragable/) | boolean | - | 2.1.1 |
| editable | 单元格是否可编辑 [示例](/doc/edit/) | boolean \| 'cellEditorSlot' \| [`((params: EditableValueParams<RecordType>) => boolean | 'cellEditorSlot')`](#editabletype) | - | 4.0 |
| editableTrigger | 触发编辑状态 | [EditableTrigger](#editabletype) \| [EditableTrigger](#editabletype)[] | 'dblClick' | 4.1.8 |
| valueParser | 将编辑后的字符串值转换为数据源中的值，例如：将 字符串`1,000` 转换为整数`1000`, [示例](/doc/edit/) | [`ValueParserFunc`](#editabletype) | - | 4.0 |
| valueGetter | 将数据源中的值转换为字符串值，例如：将整数`1000` 转换为 字符串`1,000`, [示例](/doc/edit/) | [`ValueGetterFunc`](#editabletype) | - | 4.0 |
| valueSetter | 默认我们将编辑后的值直接赋值给响应式数据源，但有时无法提供有效的 dataIndex 时， 你需要自定义赋值逻辑，可以使用 `valueSetter`, 当 valueSetter 返回 true 时，组件认为编辑成功并退出编辑模式, [示例](/doc/edit/) | [`(params: ValueParserParams<RecordType>) => boolean | promise(4.2.1+)`](#editabletype) | - | 4.0 |
| valueChange | 当单元格值发生变化时触发，你可以通过 `valueChange` 来实现自定义的值变化逻辑, [示例](/doc/edit/) | [`(e: InputEvent, params: ValueParserParams<RecordType>) => void`](#editabletype) | - | 4.0 |
| showMenu | 是否显示列头菜单 | boolean \| 'hover'（hover 时显示） | true | 4.0 |

#### EditableType

```ts
export interface EditableValueParams<RecordType = DefaultRecordType, TValue = any> {
  value: TValue;
  record: RecordType;
  recordIndexs: number[];
  column: ColumnType<RecordType>;
}
export interface ValueParserParams<RecordType = DefaultRecordType, TValue = any> {
  newValue: TValue;
  oldValue: TValue;
  record: RecordType;
  recordIndexs: number[];
  column: ColumnType<RecordType>;
}
export interface ValueParserFunc<T = any, TValue = any> {
  (params: ValueParserParams<T, TValue>): TValue | null | undefined;
}
export interface ValueGetterFunc<T = any, TValue = any> {
  (params: EditableValueParams<T, TValue>): string | null | undefined;
}
export interface CellEditorArgs {
  modelValue: Ref<any>;
  save: () => void;
  onInput: (event: Event, value: any) => void;
  closeEditor: () => void;
  column: ColumnType;
  editorRef: Ref<any>;
  getPopupContainer: () => HTMLElement;
  record: DefaultRecordType; // 4.2.0
  recordIndexs: number[]; // 4.2.0
}

export type EditableTrigger = 'click' | 'dblClick' | 'contextmenu';
```

#### MenuPopupArg

```ts
export type MenuFilterProps = {
  prefixCls: string;
  setSelectedKeys: (selectedKeys: Key[]) => void;
  selectedKeysRef: Ref<Key[]>;
  confirm: () => void;
  clearFilters: () => void;
  filters: ColumnFilterItem[];
};
export interface MenuPopupArg<ColumnT> {
  column: ColumnT;
  event: MouseEvent;
  hidePopup: () => void;
  filter: MenuFilterProps;
}
```

#### Breakpoint

```ts
export type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
```

### CellTooltip

```ts
export interface CellTooltip {
  placement?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom';
  color?: String;
  overlayStyle?: CSSProperties;
  overlayClassName?: String;
  title?: (args: CellRenderArgs) => any;
  align?: TooltipAlignConfig;
  // 默认鼠标移入单元格后就会显示，你可以通过该函数自定义是否显示，isEllipsis 是内部计算出的当前单元格是否触发了 ellipsis
  shouldOpen?: (isEllipsis: boolean, args: CellRenderArgs) => boolean; // 4.2.4
  // 是否允许进入 tooltip，默认允许
  allowEnter?: boolean; // 4.2.4
}
```

### CellRenderArgs

```ts
export type CellRenderArgs = {
  record: any;
  column: ColumnType<DefaultRecordType> | ColumnGroupType<DefaultRecordType>;
  text: any;
  value: any;
  oldValue?: any; // 4.2.5+ only for beforeCloseEditor，组件不会对 oldValue 进行复制，请注意引用类型的数据
  index: number;
  recordIndexs: number[];
  openEditor: () => void;
  closeEditor: () => void;
};
```

### RowDragGhostArg

```ts
interface DragRowsHandleInfo {
  y: number;
  top: number;
  height: number;
  rowKey: Key;
  centerY: number;
  record: DefaultRecordType;
  indexs: number[]; // 这是一个索引数组，用以支持树形结构
}

export interface RowDragGhostArg<RecordT, ColumnT> {
  record: RecordT;
  column: ColumnT;
  icon: VNode;
  allowed: boolean;
  dragging: boolean;
  event: MouseEvent | Touch;
  preTargetInfo: DragRowsHandleInfo | null;
  nextTargetInfo: DragRowsHandleInfo | null;
}
```

### DragRowEventInfo

```ts
export interface DragRowEventInfo {
  top: number;
  height: number;
  record: DefaultRecordType;
  dir: 'down' | 'up';
  rowKey: Key;
  event: MouseEvent | Touch;
  column: ColumnType;
  preTargetInfo: DragRowsHandleInfo | null;
  nextTargetInfo: DragRowsHandleInfo | null;
  fromIndexs: number[]; // 这是一个索引数组，用以支持树形结构
  insertToRowKey: Key;
}
```

### DragColumnEventInfo

```ts
export interface DragColumnEventInfo {
  event: MouseEvent | Touch;
  column: ColumnType;
  targetColumn: ColumnType;
  dir: 'left' | 'right';
}
```

### ColumnDragGhostArg

```ts
export interface ColumnDragGhostArg<ColumnT> {
  column: ColumnT;
  icon: VNode;
  allowed: boolean;
  dragging: boolean;
  event: MouseEvent | Touch;
  targetColumn: ColumnT;
}
```

### ColumnGroup

| 参数  | 说明         | 类型         | 默认值 |
| ----- | ------------ | ------------ | ------ |
| title | 列头显示文字 | string\|slot | -      |

### loading

| 参数             | 说明                                         | 类型          | 默认值    |
| ---------------- | -------------------------------------------- | ------------- | --------- |
| delay            | 延迟显示加载效果的时间（防止闪烁）           | number (毫秒) | -         |
| indicator        | 加载指示符                                   | vNode \| slot | -         |
| size             | 组件大小，可选值为 `small` `default` `large` | string        | 'default' |
| spinning         | 是否为加载中状态                             | boolean       | true      |
| tip              | 当作为包裹元素时，可以自定义描述文案         | string        | -         |
| wrapperClassName | 包装器的类属性                               | string        | -         |

### tooltip

继承自 ant-design-vue 的 [Tooltip](https://www.antdv.com/components/tooltip-cn/) 组件。 最新 API 请参考 ant-design-vue 官网。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| arrowPointAtCenter | 箭头是否指向目标元素中心 | boolean | `false` |  |
| autoAdjustOverflow | 气泡被遮挡时自动调整位置 | boolean | `true` |  |
| color | 背景颜色 | string | 无 |  |
| defaultVisible | 默认是否显隐 | boolean | false |  |
| getPopupContainer | 浮层渲染父节点，默认渲染到 body 上 | Function(triggerNode) | () => document.body |  |
| mouseEnterDelay | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | number | 0.1 |  |
| mouseLeaveDelay | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | number | 0.1 |  |
| overlayClassName | 卡片类名 | string | 无 |  |
| overlayStyle | 卡片样式 | object | 无 |  |
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string | top |  |
| trigger | 触发行为，可选 `hover/focus/click/contextmenu` | string | hover |  |
| visible | 用于手动控制浮层显隐 | boolean | false |  |
| align | 该值将合并到 placement 的配置中，设置参考 [dom-align](https://github.com/yiminghe/dom-align) | Object | 无 |  |
| onVisibleChange | 显示隐藏的回调 | (visible) => void |  |
| showArrow | 是否显示箭头 | boolean | true | 4.3.2 |

### pagination

分页的配置项。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| position | 指定分页显示的位置， 取值为`topLeft` \| `topCenter` \| `topRight` \|`bottomLeft` \| `bottomCenter` \| `bottomRight` | Array | \[`bottomRight`] |  |
| current | 当前页数 | number | - |  |
| pageSize | 每页条数 | number | - |  |
| defaultPageSize | 默认的每页条数 | number | 10 |  |
| disabled | 禁用分页 | boolean | - |  |
| hideOnSinglePage | 只有一页时是否隐藏分页器 | boolean | false |  |
| itemRender | 用于自定义页码的结构，可用于优化 SEO | ({page, type: 'page' \| 'prev' \| 'next', originalElement}) => vNode | - |  |
| pageSizeOptions | 指定每页可以显示多少条 | string\[] | \['10', '20', '30', '40'] |  |
| showLessItems | 是否显示较少页面内容 | boolean | false |  |
| showQuickJumper | 是否可以快速跳转至某页 | boolean | false |  |
| showSizeChanger | 是否可以改变 pageSize | boolean | false |  |
| showTotal | 用于显示数据总量和当前数据顺序 | Function(total, range) | - |  |
| simple | 当添加该属性时，显示为简单分页 | boolean | - |  |
| size | 当为「small」时，是小尺寸分页 | string | "" |  |
| total | 数据总数 | number | 0 |  |
| onChange | 页码改变的回调，参数是改变后的页码及每页条数 | Function(page, pageSize) | noop |  |
| onShowSizeChange | pageSize 变化的回调 | Function(current, size) | noop |  |

### rowSelection

选择功能的配置。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| checkStrictly | checkable 状态下节点选择完全受控（父子数据选中状态不再关联） | boolean | true |  |
| columnWidth | 自定义列表选择框宽度 | string\|number | - |  |
| columnTitle | 自定义列表选择框标题 | string\|VNode\| () => VNode | - | 2.4.6 |
| fixed | 把选择框列固定在左边 | boolean | - |  |
| allowCancelRadio | 是否允许取消单选 | boolean | - | 2.1.0 |
| getCheckboxProps | 选择框的默认属性配置 | Function(record) | - |  |
| hideSelectAll | 隐藏全选勾选框与自定义选择项 | boolean | false |  |
| preserveSelectedRowKeys | 当数据被删除时仍然保留选项的 `key` | boolean | - |  |
| hideDefaultSelections | 去掉『全选』『反选』两个默认选项 | boolean | false |
| selectedRowKeys | 指定选中项的 key 数组，需要和 onChange 进行配合 | string\[] | \[] |
| selections | 自定义选择项 [配置项](#selection), 设为 `true` 时使用默认选择项 | object\[] \| boolean | true |  |
| type | 多选/单选，`checkbox` or `radio` | string | `checkbox` |
| onChange | 选中项发生变化时的回调 | Function(selectedRowKeys, selectedRows) | - |
| onSelect | 用户手动选择/取消选择某列的回调 | Function(record, selected, selectedRows, nativeEvent) | - |
| onSelectAll | 用户手动选择/取消选择所有列的回调 | Function(selected, selectedRows, changeRows) | - |
| onSelectInvert | 用户手动选择反选的回调 | Function(selectedRows) | - |
| onSelectNone | 用户清空选择的回调 | function() | - |  |

### scroll

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| scrollToFirstRowOnChange | 当分页、排序、筛选变化后是否滚动到表格顶部 | boolean | - |
| x | 设置横向滚动，也可用于指定滚动区域的宽，可以设置为像素值，百分比，true 和 ['max-content'](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width#max-content) | string \| number \| true | - |
| y | 设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值 | string \| number | - |

### selection

自定义选择配置项

| 参数     | 说明                     | 类型                                 | 默认值 | 版本 |
| -------- | ------------------------ | ------------------------------------ | ------ | ---- |
| key      | Vue 需要的 key，建议设置 | string                               | -      |      |
| text     | 选择项显示的文字         | string\|VNode \| ()=> VNode (2.4.6+) | -      |      |
| onSelect | 选择项点击回调           | Function(changeableRowKeys)          | -      |      |

### FilterDropdownProps

```ts
interface FilterDropdownProps {
  prefixCls: string;
  setSelectedKeys: (selectedKeys: Key[]) => void;
  selectedKeys: Key[];
  confirm: (param?: FilterConfirmProps) => void;
  clearFilters?: () => void;
  filters?: ColumnFilterItem[];
  visible: boolean;
  column: ColumnType;
}
```

## 注意

在 Table 中，`dataSource` 和 `columns` 里的数据值都需要指定 `key` 值。对于 `dataSource` 默认将每列数据的 `key` 属性作为唯一的标识。

如果你的数据没有这个属性，务必使用 `rowKey` 来指定数据列的主键。若没有指定，控制台会出现缺少 key 的提示，表格组件也会出现各类奇怪的错误。

```jsx
// 比如你的数据主键是 uid
return <Table rowKey="uid" />;
// 或
return <Table rowKey={record => record.uid} />;
```
