<template>
  <div class="lay" style="padding: 100px 0">
    <s-table
      ref="tableRef"
      :columns="columns"
      :data-source="dataSource"
      :pagination="false"
      :scroll="{ y: 400 }"
      :row-height="54"
      :row-selection="rowSelection"
      :custom-row="customRow"
      @resizeColumn="handleResize"
    >
      <template #expandedRowRender="{ record }">
        <p style="margin: 0">
          {{ record.description }}
        </p>
      </template>
      <template #bodyCell="{ column, recordIndexs }">
        <input v-model="dataSource[recordIndexs[0]][column.key]" style="width: 100%" />
      </template>
    </s-table>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, watch } from 'vue';
import { random } from 'lodash-es';

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const visible = ref(false);
    const tableRef = ref();
    const autoRowHeight = ref(false);
    const virtual = ref(true);
    const loading = ref(false);
    const bordered = ref(true);

    const incomes = new Array(12).fill(1).map((_, index) => ({
      title: `${index + 1} 月`,
      dataIndex: `income_${index + 1}`,
      key: `income_${index + 1}`,
      width: 100,
    }));
    const others = new Array(100).fill(1).map((_, index) => ({
      title: `其它_${index}`,
      dataIndex: `other_${index}`,
      key: `other_${index}`,
      width: 100,
    }));
    const columns = [
      {
        title: '姓名',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: true,
        // maxWidth: 300,
        resizable: true,
        ellipsis: true,
      },
      {
        title: '年龄',
        width: 80,
        dataIndex: 'age',
        key: 'age',
        // maxWidth: 300,
        resizable: true,
        align: 'center',
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: '身份证号',
        dataIndex: 'id',
        key: 'id',
        align: 'center',
        width: 210,
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
        key: 'gender',
        align: 'center',
        width: 70,
      },
      {
        title: '职业',
        dataIndex: 'job',
        key: 'job',
        width: 150,
      },
      {
        title: '公司',
        dataIndex: 'company',
        key: 'company',
        width: 100,
      },
      {
        title: '毕业学校',
        dataIndex: 'school',
        key: 'school',
        width: 150,
        // autoHeight: true,
      },
      { title: '电话', dataIndex: 'phone', key: 'phone', width: 150 },
      { title: '手机', dataIndex: 'telephone', key: 'telephone', width: 150 },
      { title: 'QQ', dataIndex: 'qq', key: 'qq', width: 150 },
      { title: '微信', dataIndex: 'wechat', key: 'wechat', width: 150 },
      { title: '钉钉', dataIndex: 'dingTalk', key: 'dingTalk', width: 150 },
      { title: '国籍', dataIndex: 'country', key: 'country', width: 150 },
      {
        title: '民族',
        dataIndex: 'nationality',
        key: 'nationality',
        width: 100,
      },
      { title: '婚姻', dataIndex: 'marital', key: 'marital', width: 150 },
      { title: '地址', dataIndex: 'address', key: 'address', width: 200 },
      {
        title: '收入',
        key: 'income',
        children: incomes,
        align: 'left',
      },
      {
        title: '其它',
        key: 'other',
        children: others,
      },
      {
        title: '备注',
        dataIndex: 'info',
        key: 'info',
        width: 300,
      },
    ];

    const data = [];
    const nationality = ['汉族', '壮族', '苗族'];
    const marital = ['已婚', '未婚', '未知'];
    const job1 = ['IT_前端', 'IT_Java'];
    const job2 = ['蓝骑士', '黄骑士', ''];
    const gender = ['男', '女'];
    const income1 = [12000, 8900, 18000, 13000, 6800];
    const income2 = [32000, 38900, 28000, 43000, 60800];

    for (let i = 0; i < 50000; i++) {
      const age = random(18, 40);
      const item = {
        // key: i,
        key: i,
        id: '12345678909876xxxx',
        name: `tang ${i}`,
        age,
        address: `Hangzhou xihu no. ${i}`,
        gender: i === 3 ? '男' : gender[random(0, 1)],
        job: i === 3 ? '魂师' : age > 35 ? job2[random(1)] : job1[random(1)],
        company: i === 3 ? '唐门' : 'xxx 大厂',
        school: i === 3 ? '史莱克学院' : `杭州第 ${i} 大学`,
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
      getCheckboxProps: record => {
        if (record.key === 3) {
          return { disabled: true };
        }
        return { disabled: false };
      },
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
    const goToPage = num => {
      pagination.value.current = num;
    };
    const dataSource = ref(data);
    const cols = ref(columns);
    const handleResize = (w, col) => {
      col.width = w;
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
      rowSelection,
      customRow: record => {
        if (record.name === 'tang 3') {
          return {
            style: {
              background: '#fef3ee',
            },
          };
        }
        return {};
      },
    };
  },
});
</script>
