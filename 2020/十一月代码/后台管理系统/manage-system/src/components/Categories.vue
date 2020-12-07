<template>
  <a-layout>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>
        <router-link to="/home" style="font-weight: bold; color: #000">
          首页
        </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>商品管理</a-breadcrumb-item>
      <a-breadcrumb-item>商品分类</a-breadcrumb-item>
    </a-breadcrumb>
    <a-card>
      <a-button type="primary" size="large"> 添加用户 </a-button>
      <a-table
        style="font-size: 12px"
        :row-key="(record) => record.cat_id"
        :columns="table.Columns"
        :data-source="table.data"
        :pagination="false"
        bordered
        :expandIconColumnIndex="1"
      >
        <template #index="{ record, index }">
          <span v-if="record.cat_level == 0">{{ index + 1 }}</span>
        </template>
        <template #cat_deleted="{ record }">
          <CheckCircleTwoTone
            v-if="record.cat_deleted == false"
            twoToneColor="#52c41a"
          />
          <CheckCircleTwoTone
            v-if="record.cat_deleted == true"
            twoToneColor="#52c41a"
          />
        </template>
        <template #level="{ record }">
          <a-tag v-if="record.cat_level == 0" color="blue"> 一级 </a-tag>
          <a-tag v-else-if="record.cat_level == 1" color="green"> 二级 </a-tag>
          <a-tag v-else-if="record.cat_level == 2" color="orange"> 三级 </a-tag>
        </template>
        <template #edit>
          <a-button type="primary"> <EditOutlined />编辑 </a-button>
          <a-button type="danger" style="margin: 0 10px">
            <DeleteOutlined />删除
          </a-button>
        </template>
      </a-table>
      <!-- 分页 -->
      <a-pagination
        style="margin-top: 25px"
        v-model:current="pagetion.pagenum"
        :total="pagetion.total"
        :show-total="(total) => `共 ${pagetion.total} 条`"
        show-size-changer
        @showSizeChange="onShowSizeChange"
        :page-size-options="pagetion.pageSizeOptions"
        @change="handlePageChange"
        show-quick-jumper
      />
    </a-card>
  </a-layout>
</template>

<script>
import { goods } from "@/api";
import { httpGet } from "@/utils/http";
import {
  CheckCircleTwoTone,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons-vue";
export default {
  data() {
    return {
      table: {
        Columns: [
          {
            title: "#",
            key: "index",
            slots: { customRender: "index" },
          },
          {
            title: "分类名称",
            dataIndex: "cat_name",
            key: "cat_name",
          },
          {
            title: "是否有效",
            key: "cat_deleted",
            slots: { customRender: "cat_deleted" },
          },
          {
            title: "排序",
            key: "level",
            slots: { customRender: "level" },
          },
          {
            title: "操作",
            key: "edit",
            slots: { customRender: "edit" },
          },
        ],
      },
      data: [],
      pagetion: {
        pagenum: 1,
        pagesize: 5,
        total: 0,
        pageSizeOptions: ["1", "2", "5", "8", "10"],
      },
    };
  },
  created() {
    this.getTable();
  },
  methods: {
    getTable() {
      //   获取数据
      httpGet(goods.getgood, {
        pagenum: this.pagetion.pagenum,
        pagesize: this.pagetion.pagesize,
      })
        .then((res) => {
          let { meta, data } = res;
          console.log(res);
          if (meta.status == 200) {
            this.table.data = data.result;
            this.pagetion.total = data.total;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 根据每页显示多少条数据不同 重新渲染表格
    onShowSizeChange(current, pageSize) {
      // console.log(current,   );
      this.pagetion.pagenum = current;
      this.pagetion.pagesize = pageSize;
      this.getTable();
    },
    // 页码改变的回调，参数是改变后的页码及每页条数
    handlePageChange(page, pageSize) {
      this.pagetion.pagenum = page;
      this.pagetion.pagesize = pageSize;
      this.getTable();
    },
  },
  components: {
    CheckCircleTwoTone,
    EditOutlined,
    DeleteOutlined,
  },
};
</script>

<style>
</style>