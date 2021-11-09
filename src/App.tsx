import { defineComponent } from 'vue';
import SurelyTable from '@surely-vue/table';

interface DataItem {
  rowKey: number;
  name: string;
  age: number;
  address: string;
}

const data: DataItem[] = [];
for (let i = 0; i < 100000; i++) {
  data.push({
    rowKey: i,
    name: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${i}`,
    age: i + 1,
    address: `London Park no. ${i}`,
  });
}

export default defineComponent({
  setup() {
    return () => (
      <SurelyTable
        virtual
        dataSource={data}
        columns={[
          {
            title: 'Full NameFull NameFull NameFull NameFull NameFull Name',
            width: 200,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
            maxWidth: 300,
            resizable: true,
            colSpan: 2,
            onFilter: (value: any, record) => record.name.includes(value),
            slots: { filterIcon: 'filterIcon' },
            filters: [
              {
                text: 'Joe',
                value: 'Joe',
              },
              {
                text: 'Jim',
                value: 'Jim',
              },
              {
                text: 'Submenu',
                value: 'Submenu',
                children: [
                  {
                    text: 'Green',
                    value: 'Green',
                  },
                  {
                    text: 'Black',
                    value: 'Black',
                  },
                ],
              },
            ],
          },
          {
            title: 'Age',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
            sorter: (a, b) => a.age - b.age,
          },
          {
            title: 'ColumnColumnColumnColumnColumnColumn',
            children: [
              {
                title: 'Column 1',
                dataIndex: 'address',
                key: '1',
                width: 150,
              },
              {
                title: 'Column 2',
                dataIndex: 'address',
                key: '2',
                width: 150,
                resizable: true,
              },
            ],
          },
          {
            title: 'Column 3',
            dataIndex: 'address',
            key: '3',
            width: 150,
          },
          {
            title: 'Column 4',
            dataIndex: 'address',
            key: '4',
            width: 150,
          },
          { title: 'Column 8', dataIndex: 'address', key: '8', width: 150 },
          {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
          },
        ]}
      />
    );
  },
});
