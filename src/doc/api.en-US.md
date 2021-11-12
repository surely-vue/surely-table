## API

### Table

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| bordered | Whether to show all table borders | boolean | `false` |  |
| childrenColumnName | The column contains children to display | string | `children` |  |
| columns | Columns of table [config](#Column) | array | - |  |
| dataSource | Data record array to be displayed | any\[] | - |  |
| defaultExpandAllRows | Expand all rows initially | boolean | `false` |  |
| defaultExpandedRowKeys | Initial expanded row keys | string\[] | - |  |
| expandedRowKeys | Current expanded row keys | string\[] | - |  |
| expandedRowRender | Expanded container render for each row | Function({record, index, indent, expanded}):VNode\|v-slot | - |  |
| expandFixed | Set column to be fixed: `true`(same as left) `'left'` `'right'` | boolean \| string | false |  |
| expandIcon | Customize row expand Icon. | Function(props):VNode \| v-slot:expandIcon="props" | - |  |
| expandRowByClick | Whether to expand row by clicking anywhere in the whole row | boolean | `false` |  |
| expandIconColumnIndex | Customize expand icon column index. Not render when `-1` | 0 |  |
| footer | Table footer renderer | Function(currentPageData)\| v-slot:footer="currentPageData" |  |
| indentSize | Indent size in pixels of tree data | number | 15 |  |
| loading | Loading status of table | boolean\|[object](/components/spin) | `false` |
| locale | i18n text including filter, sort, empty text, etc | object | filterConfirm: 'Ok' <br /> filterReset: 'Reset' <br /> emptyText: 'No Data' |  |
| pagination | Config of pagination. You can ref table pagination [config](#pagination), hide it by setting it to `false` | object |  |  |
| rowClassName | Row's className | Function(record, index):string | - |  |
| rowKey | Row's unique key, could be a string or function that returns a string | string\|Function(record, index):string | `key` |  |
| rowSelection | Row selection [config](#rowSelection) | object | null |  |
| scroll | Whether the table can be scrollable, [config](#scroll) | object | - |  |
| showHeader | Whether to show table header | boolean | `true` |  |
| sortDirections | Supported sort way, could be `ascend`, `descend` | Array | \[`ascend`, `descend`] |  |
| showSorterTooltip | The header show next sorter direction tooltip. It will be set as the property of Tooltip if its type is object | boolean \| [Tooltip props](/components/tooltip/#API) | true |  |
| size | Size of table | `default` \| `middle` \| `small` \| `large` | `default` |
| sticky | Set sticky header and scroll bar | boolean \| `{offsetHeader?: number, offsetScroll?: number, getContainer?: () => HTMLElement}` | - |  |
| title | Table title renderer | Function(currentPageData)\| v-slot:title="currentPageData" |  |  |
| customHeaderRow | Set props on per header row | Function(column, index) | - |  |
| customRow | Set props on per row | Function(record, index) | - |  |
| getPopupContainer | the render container of dropdowns in table | (triggerNode) => HTMLElement | `() => TableHtmlElement` |  |
| headerCell | custom head cell by slot | v-slot:headerCell="{title, column}" | - |  |
| bodyCell | custom body cell by slot | v-slot:bodyCell="{text, record, index, column}" | - |  |
| customFilterDropdown | Customized filter overlay，need set `column.customFilterDropdown` | v-slot:customFilterDropdown="[FilterDropdownProps](#FilterDropdownProps)" | - |  |
| customFilterIcon | Customized filter icon | v-slot:customFilterIcon="{filtered, column}" | - |  |
| emptyText | Customize the display content when empty data | v-slot:emptyText | - |  |
| summary | Summary content | v-slot:summary | - |  |
| transformCellText | The data can be changed again before rendering, generally used for the default configuration of empty data. You can configured globally through [ConfigProvider](/components/config-provider-cn/) | Function({ text, column, record, index }) => any, The `text` here is the data processed by other defined cell api, and it may be of type VNode \| string \| number | - |  |

- `expandFixed`
  - When set to true or `left` and `expandIconColumnIndex` is not set or is 0, enable fixed
  - When set to true or `right` and `expandIconColumnIndex` is set to the number of table columns, enable fixed

### Events

| Events Name | Description | Arguments |
| --- | --- | --- | --- |
| change | Callback executed when pagination, filters or sorter is changed | Function(pagination, filters, sorter, { currentDataSource }) |  |
| expand | Callback executed when the row expand icon is clicked | Function(expanded, record) |  |
| expandedRowsChange | Callback executed when the expanded rows change | Function(expandedRows) |  |
| resizeColumn | Triggered when the column is dragged | Function(width, column) |

#### customRow usage

Same as `customRow` `customHeaderRow` `customCell` `customHeaderCell`. Follow [Vue jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx) syntax。

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
  customHeaderRow={(column) => {
    return {
      onClick: () => {},        // click header row
    };
  }}
/>
```

### Column

One of the Table `columns` prop for describing the table's columns, Column has the same API.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| align | specify how content is aligned | 'left' \| 'right' \| 'center' | 'left' |  |
| autoHeight | Whether to enable automatic row height | boolean | false |  |
| ellipsis | ellipsize cell content, not working with sorter and filters for now.<br />tableLayout would be `fixed` when `ellipsis` is true. | boolean | false |  |
| colSpan | Span of this column's title | number |  |  |
| dataIndex | Display field of the data record, support nest path by string array | string \| string\[] | - |  |
| defaultFilteredValue | Default filtered values | string\[] | - |  |
| defaultSortOrder | Default order of sorted values: `'ascend'` `'descend'` `null` | string | - |  |
| ellipsis | The ellipsis cell content, not working with sorter and filters for now.<br />tableLayout would be `fixed` when `ellipsis` is `true` or `{ showTitle?: boolean }` | boolean \| {showTitle?: boolean } | false |  |
| filterDropdown | Customized filter overlay | VNode | - |  |
| customFilterDropdown | use v-slot:customFilterDropdown，Priority is lower than filterDropdown | boolean | false |  |
| filterDropdownVisible | Whether `filterDropdown` is visible | boolean | - |  |
| filtered | Whether the `dataSource` is filtered | boolean | `false` |  |
| filteredValue | Controlled filtered value, filter icon will highlight | string\[] | - |  |
| filterIcon | Customized filter icon | ({filtered: boolean, column: Column}) | `false` |  |
| filterMultiple | Whether multiple filters can be selected | boolean | `true` |  |
| filters | Filter menu config | object\[] | - |  |
| fixed | Set column to be fixed: `true`(same as left) `'left'` `'right'` | boolean\|string | `false` |  |
| key | Unique key of this column, you can ignore this prop if you've set a unique `dataIndex` | string | - |  |
| customRender | Renderer of the table cell. The return value should be a VNode, or an object for colSpan/rowSpan config | Function({text, record, index}) {} | - |  |
| responsive | The list of breakpoints at which to display this column. Always visible if not set. | [Breakpoint](#Breakpoint)\[] | - |  |
| sorter | Sort function for local sort, see [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)'s compareFunction. If you need sort buttons only, set to `true` | Function\|boolean | - |  |
| sortOrder | Order of sorted values: `'ascend'` `'descend'` `false` | boolean\|string | - |  |
| sortDirections | supported sort way, could be `'ascend'`, `'descend'` | Array | `['ascend', 'descend']` |  |
| title | Title of this column | string | - |  |
| minWidth | Drag the minimum width of the column, it will be affected by the automatic adjustment and distribution of the table width | number | 50 |  |
| maxWidth | Drag the maximum width of the column, it will be affected by the automatic adjustment and distribution of the table width | number | - |  |
| resizable | Whether the width can be adjusted by dragging, at this time width must be number type | boolean | - |  |
| width | Width of this column | string\|number | - |  |
| customCell | Set props on per cell | Function(record, rowIndex) | - |  |
| customHeaderCell | Set props on per header cell | Function(column) | - |  |
| onFilter | Callback executed when the confirm filter button is clicked, Use as a `filter` event when using template or jsx | Function | - |  |
| onFilterDropdownVisibleChange | Callback executed when `filterDropdownVisible` is changed, Use as a `filterDropdownVisible` event when using template or jsx | function(visible) {} | - |  |

#### Breakpoint

```ts
type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
```

### ColumnGroup

| Property | Description               | Type         | Default |
| -------- | ------------------------- | ------------ | ------- |
| title    | Title of the column group | string\|slot | -       |

### pagination

Properties for pagination.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| position | Specify the position of `Pagination`, could be`topLeft` \| `topCenter` \| `topRight` \|`bottomLeft` \| `bottomCenter` \| `bottomRight` | Array | \[`bottomRight`] |

More about pagination, please check [`Pagination`](/components/pagination/).

### rowSelection

Properties for row selection.

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| checkStrictly | Check table row precisely; parent row and children rows are not associated | boolean | true |  |
| columnWidth | Set the width of the selection column | string\|number | - |  |
| columnTitle | Set the title of the selection column | string\|VNode | - |  |
| fixed | Fixed selection column on the left | boolean | - |  |
| getCheckboxProps | Get Checkbox or Radio props | Function(record) | - |  |
| hideSelectAll | Hide the selectAll checkbox and custom selection | boolean | false |  |
| preserveSelectedRowKeys | Keep selection `key` even when it removed from `dataSource` | boolean | - |  |
| hideDefaultSelections | Remove the default `Select All` and `Select Invert` selections | boolean | `false` |  |
| selectedRowKeys | Controlled selected row keys | string\[] | \[] |  |
| selections | Custom selection [config](#rowSelection), only displays default selections when set to `true` | object\[] \| boolean | - |  |
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

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique key of this selection | string | - |
| text | Display text of this selection | string\|VNode | - |
| onSelect | Callback executed when this selection is clicked | Function(changeableRowKeys) | - |

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
