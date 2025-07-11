## API

### Table

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- | --- |
| autoHeaderHeight | Whether the height of the header is automatic, after it is turned on, the header part will be loaded in full, and there is a certain performance loss | boolean | false | 2.3 |
| bordered | Whether to show all table borders | boolean | `false` |  |
| childrenColumnName | The column contains children to display | string | `children` |  |
| columns | Columns of table [config](#column) | array | - |  |
| dataSource | Data record array to be displayed | any\[] | - |  |
| defaultExpandAllRows | Expand all rows initially | boolean | `false` |  |
| defaultExpandedRowKeys | Initial expanded row keys | string\[] | - |  |
| deepWatchDataSource | Whether to deeply watch dataSource, when dataSource is a reactive object, you need to turn on this option | boolean | false | 4.2.0 |
| deepWatchColumns | Whether to deeply watch columns, when columns is a reactive object, you need to turn on this option | boolean | false | 4.2.0 |
| expandedRowKeys | Current expanded row keys | string\[] | - |  |
| expandedRowRender | Expanded container render for each row | Function({record, index, indent, expanded}):VNode\|v-slot | - |  |
| expandFixed | Set column to be fixed: `true`(same as left) `'left'` `'right'` | boolean \| string | false |  |
| expandIcon | Customize row expand Icon. | Function(props):VNode \| v-slot:expandIcon="props" | - |  |
| expandRowByClick | Whether to expand row by clicking anywhere in the whole row | boolean | `false` |  |
| expandIconColumnIndex | Customize expand icon column index. Not render when `-1` | 0 |  |
| footer | Table footer renderer | Function(currentPageData)\| v-slot:footer="currentPageData" |  |
| indentSize | Indent size in pixels of tree data | number | 15 |  |
| loading | Loading status of table | boolean\|[object](#loading) | `false` |
| locale | i18n text including filter, sort, empty text, etc | object | filterConfirm: 'Ok' <br /> filterReset: 'Reset' <br /> emptyText: 'No Data' |  |
| pagination | Config of pagination. You can ref table pagination [config](#pagination), hide it by setting it to `false` | object |  |  |
| rowClassName | Row's className | Function(record, index):string | - |  |
| rowKey | Row's unique key, could be a string or function that returns a string | string\|Function(record, index):string | `key` |  |
| rowSelection | Row selection [config](#rowselection) | object | null |  |
| scroll | Whether the table can be scrollable, [config](#scroll) | object | - |  |
| showHeader | Whether to show table header | boolean | `true` |  |
| sortDirections | Supported sort way, could be `ascend`, `descend` | Array | \[`ascend`, `descend`] |  |
| showSorterTooltip | The header show next sorter direction tooltip. It will be set as the property of Tooltip if its type is object | boolean \| [Tooltip props](#tooltip) | true |  |
| size | Size of table | `default` \| `middle` \| `small` \| `large` | `default` |
| sticky | Set sticky header and scroll bar | boolean \| `{offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement, topSummary?: boolean}` | - | topSummary 2.4.7 |
| title | Table title renderer | Function(currentPageData)\| v-slot:title="currentPageData" |  |  |
| customRow | Set props on per row | Function(record, index) | - |  |
| customCell | Set props on per cell, column.customCell will override this | Function(obj: {record: any; rowIndex: number; column: ColumnType}) | - |  |
| getPopupContainer | the render container of dropdowns in table | (triggerNode) => HTMLElement | `() => TableHtmlElement` |  |
| headerCell | custom head cell by slot | v-slot:headerCell="{title, column}" | - |  |
| bodyCell | custom body cell by slot | v-slot:bodyCell="{text, record, index, column, openEditor(4.0.3), closeEditor(4.0.3)}" | - |  |
| customFilterDropdown | Customized filter overlay，need set `column.customFilterDropdown` | v-slot:customFilterDropdown="[FilterDropdownProps](#filterdropdownprops)" | - |  |
| customFilterIcon | Customized filter icon | v-slot:customFilterIcon="{filtered, column}" | - |  |
| emptyText | Customize the display content when empty data | v-slot:emptyText | - |  |
| summary | Summary content | v-slot:summary | - |  |
| summaryFixed | fixed summmary content | boolean \| 'top'（2.4.6） \| 'bottom' | - |  |
| rowDragGhost | Customize the prompt content when dragging a row, [more](/doc/dragable) | v-slot:rowDragGhost="arg: [RowDragGhostArg](#rowdragghost)" | - | 2.1.0 |
| columnDrag | Whether the column header can be dragged or not, [more](/doc/dragable) | boolean | - | 2.1.1 |
| columnDragGhost | Customize the prompt content when dragging a column | v-slot:columnDragGhost="arg: [ColumnDragGhostArg](#columndraghost)" | - | 2.1.1 |
| xVirtual | Whether to scroll horizontally | boolean | - | 2.4.1 |
| ignoreCellKey | The unique key of the cell is ignored, and the reuse of custom components is further improved. The key parameter is added to the bodyCell slot, which can be selected according to the situation of the component. | boolean | false | 2.4.4 |
| showHeaderScrollbar | show header scrollbar | boolean | false | 2.4.4 |
| rowHeight | Configure the row height. By default, the component will automatically adjust the height according to size. If you need to customize the height, you can use this property | number \| ((p: Record<any, any>, isExpandRow: boolean, baseHeight: number) => number | undefined | - |  |
| menuIcon | custom header menu icon | v-slot:menuIcon="{column, filtered}" | - | 4.0 |
| menuPopup | custom menu popup content | v-slot:menuPopup="[MenuPopupArg][#MenuPopupArg]" | - | 4.0 |
| cellEditor | custom editor cell，need column.editable | v-slot:cellEditor="[CellEditorArgs](#CellEditorArgs)" | - | 4.0 |
| rangeSelection | cell selection, cell canot selection text when enable | boolean \| `single`(只能选择一个区间) | `single` | 4.1.0 |
| copyDelimiter | cell delimiter when copying | string | `\t` | 4.1.0 |
| preserveRow | Whether the row is permanent on the page and is not affected by virtual scrolling. It is generally used to merge rows. | ` (p: { record: any; index: number }) => boolean` | - | 4.2.9 |
| tooltipDelay | Cell tooltip delay, used to customize the delay time | number | 200 | 4.3.2 |
| xBuff | Customize the horizontal buffer, used to customize the horizontal buffer | number | 20 | 5.0.3 |
| yBuff | Customize the vertical buffer, used to customize the vertical buffer | number | 50 | 5.0.3 |

- `expandFixed`
  - When set to true or `left` and `expandIconColumnIndex` is not set or is 0, enable fixed
  - When set to true or `right` and `expandIconColumnIndex` is set to the number of table columns, enable fixed

### Events

| Events Name | Description | Arguments | Version |
| --- | --- | --- | --- | --- |
| change | Callback executed when pagination, filters or sorter is changed | Function(pagination, filters, sorter, { action: 'paginate' \| 'sort' \| 'filter' }) |  |  |
| expand | Callback executed when the row expand icon is clicked | Function(expanded, record) |  |  |
| expandedRowsChange | Callback executed when the expanded rows change | Function(expandedRows) |  |  |
| resizeColumn | Triggered when the column is dragged. If you do not need to automatically change the width internally, you can return `false` | Function(width, column, action: 'start' \| 'move' \| 'end' ) => boolean \| void | 2.0.3 |
| rowDragEnd | Triggered when the dragged row ends | (opt: [DragRowEventInfo](#dragroweventinfo)) => boolean \| Promise \| void | 2.1.0 |
| columnDragEnd | Triggered when the drag column ends | (opt: [DragColumnEventInfo](#dragcolumneventinfo)) => boolean \| Promise \| void | 2.1.1 |
| cellKeydown | Cell keyboard event, when false is returned, internal processing of the component will be skipped, such as left and right switching, etc. | (event: KeyboardEvent, opt: [KeydownPayload](#keydownpayload)) => void | 4.2.1 |
| cellClick | cell click event | (event: MouseEvent, params: [CellRenderArgs](#cellrenderargs)) => void | 4.2.2 |
| beforeOpenEditor | Triggered before the editor is opened, when false is returned, the editor will not be opened. Tip: not trigger when use openEditor method | (params: [CellRenderArgs](#cellrenderargs)) => boolean | Promise | 4.2.2 |
| beforeCloseEditor | Triggered before the editor is closed, when false is returned, the editor will not be closed. Tip: not trigger when use closeEditor method | (params: [CellRenderArgs](#cellrenderargs)) => boolean | Promise | 4.2.2 |
| closeEditor | Triggered the editor is opened | (params: [CellRenderArgs](#cellrenderargs)) => void | 4.2.6 |
| openEditor | Triggered the editor is closed | (params: [CellRenderArgs](#cellrenderargs)) => void | 4.2.6 |

### Method

| Event name | Description | Parameters | Version |
| --- | --- | --- | --- |
| scrollTo | Scroll to the specified position, priority: left > columnIndex > columnKey | Function(pos: {left?: number; top?: number; columnIndex?: number; columnKey?: Key; rowKey?: Key; }, behavior ?:'auto' \| 'smooth') | 2.0.3 |
| scrollLeft | current horizontal scroll position | ComputedRef\<number\> |  |
| scrollTop | Current vertical scroll position | ComputedRef\<number\> |  |
| copySelectedRange | Copy the currently selected cell | () => void | 4.1.0 |
| getSelectedRange | Get the currently selected cell | () => [SelectedRangeItem](#selectedrangeitem)[] | 4.1.0 |
| clearAllSelectedRange | Clear the currently selected cell | () => void | 4.1.0 |
| appendCellToSelectedRange | Add cell to selected range | (cell: [AppendCellRange](#appendcellrange)) => void | 4.1.0 |

### SelectedRangeItem

```ts
export interface SelectedRangeItem {
  startColumn: ColumnType<DefaultRecordType> | ColumnGroupType<DefaultRecordType>;
  startRow: { rowIndex: number; recordIndexs: number[] };
  endRow: { rowIndex: number; recordIndexs: number[] };
  columns: (ColumnType<DefaultRecordType> | ColumnGroupType<DefaultRecordType>)[];
  flattenData: DefaultRecordType[]; // The data after the current page has been flattened, use with caution, there may be changes
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

#### customRow usage

Same as `customRow` `customCell` `customHeaderCell`. Follow [Vue jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx) syntax。

```jsx
<Table
  customRow={(record) => {
    return {
      xxx, // props
      onClick: (event) => {},       // click row
      onDblclick: (event) => {}, // double click row
      onContextmenu: (event) => {}  // right button click row
      onMouseenter: (event) => {}   // mouse enter row
      onMouseleave: (event) => {}   // mouse leave row
    };
  }}
/>
```

### Column

One of the Table `columns` prop for describing the table's columns, Column has the same API.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- | --- |
| animateRows | use animate for row | boolean | true |  |
| align | specify how content is aligned | 'left' \| 'right' \| 'center' | 'left' |  |
| autoHeight | Whether to enable automatic row height | boolean | false |  |
| ellipsis | ellipsize cell content. | boolean | false |  |
| tooltip | Whether the cell displays the tooltip, it is independent and unrelated to ellipsis.showTitle. The content of the tooltip needs to be passed through the `tooltip.titile` or `cellTooltip` slot. When set to `true`, the content of `cellTooltip` is used. | boolean \| [CellTooltip](#celltooltip) | false |  |
| colSpan | Span of this column's title | number |  |  |
| dataIndex | Display field of the data record, support nest path by string array | string \| string\[] | - |  |
| defaultFilteredValue | Default filtered values | string\[] | - |  |
| defaultSortOrder | Default order of sorted values: `'ascend'` `'descend'` `null` | string | - |  |
| ellipsis | The ellipsis cell content | boolean \| {showTitle?: boolean } | false |  |
| filterDropdown | Customized filter overlay | VNode | - |  |
| customFilterDropdown | use v-slot:customFilterDropdown，Priority is lower than filterDropdown | boolean | false |  |
| filterDropdownOpen | Whether `filterDropdown` is open | boolean | - | 4.0 |
| filtered | Whether the `dataSource` is filtered | boolean | `false` |  |
| filteredValue | Controlled filtered value, filter icon will highlight | string\[] | - |  |
| filterIcon | Customized filter icon | ({filtered: boolean, column: Column}) | `false` |  |
| filterMultiple | Whether multiple filters can be selected | boolean | `true` |  |
| filters | Filter menu config | object\[] | - |  |
| fixed | Set column to be fixed: `true`(same as left) `'left'` `'right'` | boolean\|string | `false` |  |
| key | Unique key of this column, you can ignore this prop if you've set a unique `dataIndex` | string | - |  |
| customRender | Renderer of the table cell. The return value should be a VNode, or an object for colSpan/rowSpan config | Function({text, record, index}) {} | - |  |
| responsive | The list of breakpoints at which to display this column. Always visible if not set. | [Breakpoint](#breakpoint)\[] | - |  |
| sorter | Sort function for local sort, see [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)'s compareFunction. If you need sort buttons only, set to `true` | Function\|boolean | - |  |
| sortOrder | Order of sorted values: `'ascend'` `'descend'` `false` | boolean\|string | - |  |
| sortDirections | supported sort way, could be `'ascend'`, `'descend'` | Array | `['ascend', 'descend']` |  |
| title | Title of this column | string | - |  |
| minWidth | Drag the minimum width of the column, it will be affected by the automatic adjustment and distribution of the table width | number | 50 |  |
| maxWidth | Drag the maximum width of the column, it will be affected by the automatic adjustment and distribution of the table width | number | - |  |
| resizable | Whether the width can be adjusted by dragging, at this time width must be number type. Only support leaf node | boolean | - |  |
| width | Width of this column | string\|number | - |  |
| customCell | Set props on per cell | Function(obj: {record: any; rowIndex: number; column: ColumnType}) | - |  |
| customHeaderCell | Set props on per header cell | Function(column) | - |  |
| onFilter | Callback executed when the confirm filter button is clicked, Use as a `filter` event when using template or jsx | Function | - |  |
| onFilterDropdownOpenChange | Callback executed when `filterDropdownOpen` is changed, Use as a `filterDropdownOpen` event when using template or jsx | function(visible) {} | - | 4.0 |
| rowDrag | Add a drag handle to the current column, [more](/doc/dragable) | boolean \| (arg: { record: RecordType; column: ColumnType }) => boolean | - | 2.1.0 |
| drag | Whether the list header is allowed to drag, [more](/doc/dragable) | boolean | - | 2.1.1 |
| editable | Whether the cell can be edited [example](/doc/edit/) | boolean \| 'cellEditorSlot' \| [`((params: EditableValueParams<RecordType>) => boolean | 'cellEditorSlot')`](#editabletype) | - | 4.0 |
| editableTrigger | how to trigger cell to edited | [EditableTrigger](#editabletype) \| [EditableTrigger](#editabletype)[] | 'dblClick' | 4.1.8 |
| valueParser | Convert the edited string value to the value in the data source, for example: convert the string `1,000` to the integer `1000`, [example](/doc/edit/) | [`ValueParserFunc`](#editabletype) | - | 4.0 |
| valueGetter | Convert the value in the data source to a string value, for example: convert an integer `1000` to a string `1,000`, [example](/doc/edit/) | [`ValueGetterFunc`](#editabletype) | - | 4.0 |
| valueSetter | By default, we directly assign the edited value to the responsive data source, but sometimes when a valid dataIndex cannot be provided, you need to customize the assignment logic, you can use `valueSetter`, when the valueSetter returns true, the component considers the edit successful And exit edit mode, [example](/doc/edit/) | [`(params: ValueParserParams<RecordType>) => boolean | promise(4.2.1+)`](#editabletype) | - | 4.0 |
| valueChange | Triggered when the cell value changes, you can use `valueChange` to implement custom value change logic, [example](/doc/edit/) | [`(e: InputEvent, params: ValueParserParams<RecordType >) => void`](#editabletype) | - | 4.0 |
| showMenu | Whether to show the column menu, [example](/doc/basic#header-menu) | boolean \| 'hover' | - | 4.0 |

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
  shouldOpen?: (isEllipsis: boolean, args: CellRenderArgs) => boolean; // 4.2.4
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
  oldValue?: any; // 4.2.5+ only for beforeCloseEditor
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
  indexs: number[]; // This is an indexed array to support the tree structure
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
  fromIndexs: number[]; // This is an indexed array to support the tree structure
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

| Property | Description               | Type         | Default |
| -------- | ------------------------- | ------------ | ------- |
| title    | Title of the column group | string\|slot | -       |

### loading

| Property | Description | Type | Default Value |
| --- | --- | --- | --- |
| delay | specifies a delay in milliseconds for loading state (prevent flush) | number (milliseconds) | - |
| indicator | vue node of the spinning indicator | vNode \|slot | - |
| size | size of Spin, options: `small`, `default` and `large` | string | `default` |
| spinning | whether Spin is spinning | boolean | true |
| tip | customize description content when Spin has children | string | - |
| wrapperClassName | className of wrapper when Spin has children | string | - |

### tooltip

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| arrowPointAtCenter | Whether the arrow is pointed at the center of target | boolean | `false` |  |
| autoAdjustOverflow | Whether to adjust popup placement automatically when popup is off screen | boolean | `true` |  |
| color | The background color | string | - |  |
| defaultVisible | Whether the floating tooltip card is visible by default | boolean | `false` |  |
| getPopupContainer | The DOM container of the tip, the default behavior is to create a `div` element in `body`. | Function(triggerNode) | () => document.body |  |
| mouseEnterDelay | Delay in seconds, before tooltip is shown on mouse enter | number | 0.1 |  |
| mouseLeaveDelay | Delay in seconds, before tooltip is hidden on mouse leave | number | 0.1 |  |
| overlayClassName | Class name of the tooltip card | string | - |  |
| overlayStyle | Style of the tooltip card | object | - |  |
| placement | The position of the tooltip relative to the target, which can be one of `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string | `top` |  |
| trigger | Tooltip trigger mode | `hover` \| `focus` \| `click` \| `contextmenu` | `hover` |  |
| visible | Whether the floating tooltip card is visible or not | boolean | `false` |  |
| align | this value will be merged into placement's config, please refer to the settings [dom-align](https://github.com/yiminghe/dom-align) | Object | - |  |
| onVisibleChange | Callback executed when visibility of the tooltip card is changed | (visible) => void | - |  |
| showArrow | Whether to show the arrow | boolean | true | 4.3.2 |

### pagination

Properties for pagination.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| position | Specify the position of `Pagination`, could be`topLeft` \| `topCenter` \| `topRight` \|`bottomLeft` \| `bottomCenter` \| `bottomRight` | Array | \[`bottomRight`] |
| current | current page number | number | - |  |
| pageSize | number of data items per page | number | - |  |
| defaultCurrent | default initial page number | number | 1 |  |
| defaultPageSize | default number of data items per page | number | 10 |  |
| disabled | Disable pagination | boolean | - |  |
| hideOnSinglePage | Whether to hide pager on single page | boolean | false |  |
| itemRender | to customize item innerHTML | (page, type: 'page' \| 'prev' \| 'next', originalElement) => vNode \| v-slot | - |  |
| pageSizeOptions | specify the sizeChanger options | string\[] | \['10', '20', '30', '40'] |  |
| showLessItems | Show less page items | boolean | false |  |
| showQuickJumper | determine whether you can jump to pages directly | boolean | false |  |
| showSizeChanger | determine whether `pageSize` can be changed | boolean | false |  |
| showTitle | Show page item's title | boolean | true |  |
| showTotal | to display the total number and range | Function(total, range) | - |  |
| simple | whether to use simple mode | boolean | - |  |
| size | specify the size of `Pagination`, can be set to `small` | string | "" |  |
| total | total number of data items | number | 0 |  |
| onChange | a callback function, executed when the page number is changed, and it takes the resulting page number and pageSize as its arguments | Function(page, pageSize) | noop |  |
| onShowSizeChange | a callback function, executed when `pageSize` is changed | Function(current, size) | noop |  |

### rowSelection

Properties for row selection.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| checkStrictly | Check table row precisely; parent row and children rows are not associated | boolean | true |  |
| columnWidth | Set the width of the selection column | string\|number | - |  |
| columnTitle | Set the title of the selection column | string\|VNode\| () => VNode | - | 2.4.6 |
| fixed | Fixed selection column on the left | boolean | - |  |
| allowCancelRadio | Whether to allow cancellation of radio selection | boolean | - | 2.1.0 |
| getCheckboxProps | Get Checkbox or Radio props | Function(record) | - |  |
| hideSelectAll | Hide the selectAll checkbox and custom selection | boolean | false |  |
| preserveSelectedRowKeys | Keep selection `key` even when it removed from `dataSource` | boolean | - |  |
| hideDefaultSelections | Remove the default `Select All` and `Select Invert` selections | boolean | `false` |  |
| selectedRowKeys | Controlled selected row keys | string\[] | \[] |  |
| selections | Custom selection [config](#rowselection), only displays default selections when set to `true` | object\[] \| boolean | - |  |
| type | `checkbox` or `radio` | `checkbox` \| `radio` | `checkbox` |  |
| onChange | Callback executed when selected rows change | Function(selectedRowKeys, selectedRows) | - |  |
| onSelect | Callback executed when select/deselect one row | Function(record, selected, selectedRows, nativeEvent) | - |  |
| onSelectAll | Callback executed when select/deselect all rows | Function(selected, selectedRows, changeRows) | - |  |
| onSelectInvert | Callback executed when row selection is inverted | Function(selectedRows) | - |  |
| onSelectNone | Callback executed when row selection is cleared | function() | - |  |

### scroll

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| scrollToFirstRowOnChange | Whether to scroll to the top of the table when paging, sorting, filtering changes | boolean | - |
| x | Set horizontal scrolling, can also be used to specify the width of the scroll area, could be number, percent value, true and ['max-content'](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width#max-content) | string \| number \| true | - |
| y | Set vertical scrolling, can also be used to specify the height of the scroll area, could be string or number | string \| number | - |

### selection

Custom selection config

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| key | Unique key of this selection | string | - |  |
| text | Display text of this selection | string\|VNode \| ()=> VNode | - |  |
| onSelect | Callback executed when this selection is clicked | Function(changeableRowKeys) | - |  |

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
