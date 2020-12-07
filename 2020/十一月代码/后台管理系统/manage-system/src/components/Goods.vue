<template>
  <a-layout>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>
        <router-link to="/home" style="font-weight: bold; color: #000">
          首页
        </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>商品管理</a-breadcrumb-item>
      <a-breadcrumb-item>商品列表</a-breadcrumb-item>
    </a-breadcrumb>
    <a-card>
      <a-row :gutter="16">
        <a-col class="gutter-row" :span="8">
          <a-form-item :wrapperCol="{ span: 24 }">
            <a-input-search size="large" placeholder="请输入内容" />
          </a-form-item>
        </a-col>
        <a-col class="gutter-row" :span="4">
          <a-button type="primary" size="large"> 添加用户 </a-button>
        </a-col>
      </a-row>
      <a-table
        style="font-size: 12px"
        :row-key="record => record.id"
        :columns="table.Columns"
        :data-source="table.data"
        :pagination="false"
        bordered
        tableLayout="auto"
      >
        <template #index="{ index }">
          {{ index + 1 }}
        </template>

        <template #edit>
          <a-button type="primary">
            <EditOutlined />
          </a-button>
          <a-button type="danger" style="margin: 0 10px">
            <DeleteOutlined />
          </a-button>
        </template>
      </a-table>
      <!-- 分页 -->
      <a-pagination
        style="margin-top: 25px"
        v-model:current="pagetion.pagenum"
        :total="pagetion.total"
        :show-total="total => `共 ${pagetion.total} 条`"
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
import { EditOutlined, DeleteOutlined } from "@ant-design/icons-vue";
export default {
  data() {
    return {
      table: {
        Columns: [
          { title: "#", key: "index", slots: { customRender: "index" } },
          { title: "商品名称", dataIndex: "goods_name", key: "goods_name" },
          {
            title: "商品价格（元）",
            dataIndex: "goods_price",
            key: "goods_price"
          },
          { title: "商品重量", dataIndex: "goods_weight", key: "goods_weight" },
          { title: "创建时间", dataIndex: "add_time", key: "add_time" },
          {
            title: "操作",
            key: "edit",
            slots: { customRender: "edit" }
          }
        ],
        data: []
      },
      //   分页
      pagetion: {
        pagenum: 1,
        pagesize: 10,
        total: 0,
        pageSizeOptions: ["1", "2", "5", "8", "10"]
      }
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    //   获取表格数据
    getTableData() {
      // 发亲求
      httpGet(goods.getgoodsList, {
        pagenum: this.pagetion.pagenum,
        pagesize: this.pagetion.pagesize
      })
        .then(res => {
          let { meta, data } = res;
          if (meta.status == 200) {
            //   数据获取成功
            this.table.data = data.goods;
            // this.pagetion.pagenum = data.pagenum;
            this.pagetion.total = data.total;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 根据每页显示多少条数据不同 重新渲染表格
    onShowSizeChange(current, pageSize) {
      // console.log(current,   );
      this.pagetion.pagenum = current;
      this.pagetion.pagesize = pageSize;
      this.getTableData();
    },
    // 页码改变的回调，参数是改变后的页码及每页条数
    handlePageChange(page, pageSize) {
      this.pagetion.pagenum = page;
      this.pagetion.pagesize = pageSize;
      this.getTableData();
    }
  },
  components: {
    EditOutlined,
    DeleteOutlined
  }
};
</script>

<style></style>
