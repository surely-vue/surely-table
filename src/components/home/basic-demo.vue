<template>
  <div class="lay">
    <s-table
      ref="tableRef"
      :columns="columns"
      :data-source="dataSource"
      :pagination="false"
      :scroll="{ y: 400 }"
      :row-height="54"
      :row-selection="rowSelection"
      @resizeColumn="handleResize"
    >
      <template #footer>
        <div class="table-footer">
          本表格数据非真实数据，仅做表格示例展示使用；
          <br />
          <!-- <br />
          右键可以快速复制行列，或自定义其它功能；
          <br />
          姓名、年龄列宽可以拖动调整哦，点击年龄排序，体验动画效果，然后快速拖动到最右侧，快速输入编辑吧；
          <br /> -->
          更多功能点击右上角 Doc 查看文档！！！
        </div>
      </template>
      <template #expandedRowRender="{ record }">
        <p style="margin: 0">
          {{ record.description }}
        </p>
      </template>
      <template #bodyCell="{ column, record, recordIndexs }">
        <template v-if="column.dataIndex === 'health'">
          <a-rate
            :value="record.health"
            disabled
            :style="record.health < 3 ? `color: #f81d22` : ''"
          />
        </template>
        <template v-else-if="column.dataIndex === 'info'">
          <div>
            <a-input
              v-if="record.info"
              v-model:value="dataSource[recordIndexs[0]].info"
              style="margin: -5px 0"
            />
            <template v-else>
              {{ record.info }}
            </template>
          </div>
        </template>
        <template v-else-if="column.key === 'action'">
          <span>
            <a @click="visible = true">详情</a>
            <a-divider type="vertical" />
            <a @click="handleDelete(recordIndexs[0])">删除</a>
          </span>
        </template>
        <!-- <template v-else-if="column.dataIndex === 'job'">
          <img v-if="record.jobImg" :src="record.jobImg" alt="" width="15" height="15" />
          {{ record.job }}
        </template> -->
        <template v-else-if="column.dataIndex === 'id'">
          <span class="custom-cell-id">
            {{ record.id }}
            <copy-outlined @click="copyValue(record.id)" />
          </span>
        </template>
      </template>
      <template #contextmenuPopup="args">
        <ul class="popup">
          <li
            class="popup-item"
            :class="!args.column.dataIndex && 'disabled'"
            @click="copyClick(args, 'cell')"
          >
            <copy-outlined />
            复制
          </li>
          <li class="popup-item" @click="copyClick(args, 'record')">
            <copy-outlined />
            复制整行
          </li>
          <li
            class="popup-item"
            :class="!args.column.dataIndex && 'disabled'"
            @click="copyClick(args, 'column')"
          >
            <copy-outlined />
            复制整列
          </li>
        </ul>
      </template>
    </s-table>
    <a-modal v-model:open="visible" title="你可以展示更多详情" @ok="visible = false">
      <p>弹窗似乎小了点</p>
      <p>但没关系，</p>
      <p>你可以自定义调整到任何你想要的大小</p>
      <p>或者根据内容自动调整</p>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch, nextTick } from 'vue';
import { CopyOutlined } from '@ant-design/icons-vue';
import { random } from 'lodash-es';
import { message } from 'ant-design-vue';
import { useInjectGlobalConfig } from '../../context';
import type { ContextmenuPopupArg } from '@surely-vue/table';

export default defineComponent({
  name: 'App',
  components: {
    // SearchOutlined,
    // DownOutlined,
    CopyOutlined,
  },
  setup() {
    const { isMobile } = useInjectGlobalConfig();
    const visible = ref(false);
    const tableRef = ref<any>();
    const autoRowHeight = ref(false);
    const virtual = ref(true);
    const loading = ref(false);
    const bordered = ref(true);
    const selectedRowKeys = ref([]);
    const expandedRowKeys = ref([]);
    const inputRef = ref();
    const editableState = reactive<Record<string, boolean>>({});

    const incomes = new Array(12).fill(1).map((_, index) => ({
      title: `${index + 1} 月`,
      dataIndex: `income_${index + 1}`,
      key: `income_${index + 1}`,
      width: 100,
    }));
    // const others = new Array(100).fill(1).map((_, index) => ({
    //   title: `其它_${index}`,
    //   dataIndex: `other_${index}`,
    //   key: `other_${index}`,
    //   width: 100,
    // }));
    const columns = [
      {
        title: '姓名',
        width: 150,
        minWidth: 80,
        dataIndex: 'name',
        key: 'name',
        fixed: !isMobile.value,
        // maxWidth: 300,
        resizable: true,
        ellipsis: true,
        rowDrag: true,
        editable: true,
      },
      {
        title: '年龄',
        width: 80,
        dataIndex: 'age',
        key: 'age',
        // maxWidth: 300,
        resizable: true,
        align: 'center',
        sorter: (a: any, b: any) => a.age - b.age,
        editable: true,
      },
      {
        title: '身份证号',
        dataIndex: 'id',
        key: 'id',
        align: 'center',
        width: 210,
        editable: true,
      },
      // {
      //   title: '健康指数',
      //   dataIndex: 'health',
      //   key: 'health',
      //   align: 'center',
      //   width: 170,
      // },
      // {
      //   title: '出生日期',
      //   width: 100,
      // },
      {
        title: '性别',
        dataIndex: 'gender',
        align: 'center',
        width: 70,
        editable: true,
      },
      {
        title: '职业',
        dataIndex: 'job',
        width: 150,
        editable: true,
      },
      {
        title: '公司',
        dataIndex: 'company',
        width: 100,
        editable: true,
      },
      {
        title: '毕业学校',
        dataIndex: 'school',
        width: 150,
        editable: true,
        // autoHeight: true,
      },
      { title: '电话', dataIndex: 'phone', width: 150, editable: true },
      { title: '手机', dataIndex: 'telephone', width: 150, editable: true },
      { title: 'QQ', dataIndex: 'qq', width: 150, editable: true },
      { title: '微信', dataIndex: 'wechat', width: 150, editable: true },
      { title: '钉钉', dataIndex: 'dingTalk', width: 150, editable: true },
      { title: '国籍', dataIndex: 'country', width: 150, editable: true },
      { title: '民族', dataIndex: 'nationality', width: 100, editable: true },
      { title: '婚姻', dataIndex: 'marital', width: 150, editable: true },
      { title: '地址', dataIndex: 'address', width: 200, editable: true },
      {
        title: '收入',
        key: 'income',
        children: incomes,
        align: 'left',
        editable: true,
      },
      // {
      //   title: '其它',
      //   key: 'other',
      //   children: others,
      // },
      // {
      //   title: '备注',
      //   dataIndex: 'info',
      //   key: 'info',
      //   width: 300,
      //   resizable: true,
      // },
      {
        title: '操作',
        key: 'action',
        width: 120,
        fixed: !isMobile.value ? 'right' : false,
      },
    ];

    interface DataItem {
      key: number;
      name: string;
      age: number;
      address: string;
      [key: string]: any;
    }

    const data: DataItem[] = [];
    const nationality = ['汉族', '壮族', '苗族'];
    const marital = ['已婚', '未婚', '未知'];
    const job1 = ['IT_前端', 'IT_Java'];
    const job2 = ['蓝骑士', '黄骑士', ''];
    const gender = ['男', '女'];
    const income1 = [12000, 8900, 18000, 13000, 6800];
    const income2 = [32000, 38900, 28000, 43000, 60800];

    for (let i = 0; i < 10000; i++) {
      const age = random(18, 40);
      const item = {
        // key: i,
        key: i,
        id: '12345678909876xxxx',
        name: `tang ${i}`,
        age,
        address: `Hangzhou xihu no. ${i}`,
        gender: gender[random(0, 1)],
        job: age > 35 ? job2[random(1)] : job1[random(1)],
        company: 'xxx 大厂',
        school: `杭州第 ${i} 大学`,
        phone: '0571-88888888',
        telephone: `1851088xxx${random(0, 9)}`,
        qq: '123456xxx',
        wechat: '987654xxx',
        dingTalk: `**aoe_${i}`,
        country: '中国',
        nationality: nationality[random(0, 2)],
        marital: marital[random(0, 2)],
        health: age > 30 ? random(1, 3) : random(4, 5),
        info: '大家自己编辑吧，造数据也挺难的',
        jobImg: '',
        description: '你可以展示更多数据，甚至是子表格也没有任何问题',
      };
      switch (item.job) {
        case 'IT_前端':
          item.jobImg =
            'https://next-antdv.oss-cn-beijing.aliyuncs.com/fe.png?x-oss-process=image/resize,m_fixed,h_15,w_15';
          break;
        case 'IT_Java':
          item.jobImg =
            'https://next-antdv.oss-cn-beijing.aliyuncs.com/java.png?x-oss-process=image/resize,m_fixed,h_15,w_15';
          break;
        case '蓝骑士':
          item.jobImg =
            'https://next-antdv.oss-cn-beijing.aliyuncs.com/ele.png?x-oss-process=image/resize,m_fixed,h_15,w_15';
          break;
        case '黄骑士':
          item.jobImg =
            'https://next-antdv.oss-cn-beijing.aliyuncs.com/meituan.png?x-oss-process=image/resize,m_fixed,h_15,w_15';
          break;
        default:
          break;
      }
      if (age > 35) {
        new Array(12).fill(1).forEach((_, index) => {
          item[`income_${index + 1}`] = income1[random(0, 4)];
        });
      } else {
        new Array(12).fill(1).forEach((_, index) => {
          item[`income_${index + 1}`] = income2[random(0, 4)];
        });
      }
      data.push(item);
    }
    const rowSelection = reactive({
      type: 'checkbox',
    });
    watch(rowSelection, () => {
      console.log(rowSelection);
    });
    const rowHeight = ref((data, baseHeight) => (autoRowHeight.value ? undefined : baseHeight));
    const pagination = ref({
      current: 1,
      pageSize: data.length,
      showSizeChanger: true,
    });
    const changeAutoHeight = () => {
      autoRowHeight.value = !autoRowHeight.value;
    };
    const changeVirtual = () => {
      virtual.value = !virtual.value;
    };
    const changeLoading = () => {
      loading.value = !loading.value;
    };
    const changeBordered = () => {
      bordered.value = !bordered.value;
    };
    const goToPage = (num: number) => {
      pagination.value.current = num;
    };
    const handleEditable = (rowIndex: number, dataIndex: string, status: boolean) => {
      editableState[`${rowIndex}-${dataIndex}`] = status;
      if (status) {
        nextTick(() => {
          inputRef.value.focus();
        });
      }
    };
    const getRowProps = ({ rowIndex }: any) => {
      return rowIndex < 2
        ? {
            class: 'editable-row',
          }
        : {};
    };
    const changeRowSelectionType = () => {
      rowSelection.type = rowSelection.type === 'checkbox' ? 'radio' : 'checkbox';
    };
    const handleChange = (e, record: any) => {
      const index = dataSource.value.findIndex(d => d.key == record.key);
      dataSource.value[index].info = e.target.value;
    };
    const dataSource = ref(data);
    const handleDelete = index => {
      dataSource.value.splice(index, 1);
      // triggerRef()
      dataSource.value = [].concat(dataSource.value);
    };
    const cols = ref(columns);
    const handleResize = (w, col) => {
      col.width = w;
    };

    const copyValue = val => {
      console.log('copyValue', val);
      const input = document.createElement('input');
      input.setAttribute('readonly', 'readonly');
      input.setAttribute('value', val);
      document.body.appendChild(input);
      input.select();
      if (document.execCommand('copy')) {
        document.execCommand('copy');
        message.info('复制成功');
      }
      document.body.removeChild(input);
    };
    const copyClick = (args: ContextmenuPopupArg<any, any>, type: 'cell' | 'column' | 'record') => {
      if (type === 'cell') {
        if (args.column.key === 'operation') return;
        copyValue(args.text);
      } else if (type === 'column') {
        if (args.column.key === 'operation') return;
        const { dataIndex } = args.column;
        copyValue(data.map(d => d[dataIndex]).join('\r\n'));
      } else {
        const record = args.record;
        copyValue(
          columns
            .map((c: any) => (c.dataIndex ? record[c.dataIndex] : ''))
            .filter(c => !!c)
            .join(' '),
        );
      }
      args.hidePopup();
    };
    return {
      handleResize,
      visible,
      tableRef,
      dataSource,
      columns: cols,
      size: ref('default'),
      rowHeight,
      autoRowHeight,
      changeAutoHeight,
      resizeRowsHeight: () => tableRef.value.resizeRowsHeight(),
      changeVirtual,
      changeLoading,
      virtual,
      loading,
      pagination,
      goToPage,
      bordered,
      changeBordered,
      selectedRowKeys,
      expandedRowKeys,
      rowSelection,
      changeRowSelectionType,
      getRowProps,
      editableState,
      handleEditable,
      inputRef,
      handleChange,
      handleDelete,
      copyValue,
      copyClick,
    };
  },
});
</script>
<style lang="less">
.editable-cell {
  position: relative;
}

.editable-cell-value-wrap {
  padding: 1px 12px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.super-table-row-hover.editable-row .editable-cell-value-wrap {
  padding: 0px 11px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}
.custom-row-class .surely-table-cell {
  background-color: #fef3ee !important;
}
.custom-cell-id {
  .anticon {
    color: #1677ff;
  }
}
.popup {
  width: 120px;
  .popup-item {
    cursor: pointer;
    padding: 8px;
    &:hover {
      background-color: var(--surely-table-row-hover-bg);
    }
    &.disabled {
      color: var(--surely-table-disabled-color);
      cursor: not-allowed;
    }
  }
}
</style>
