<template>
  <a-layout>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>
        <router-link to="/home" style="font-weight: bold; color: #000">
          首页
        </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>订单管理</a-breadcrumb-item>
      <a-breadcrumb-item>订单列表</a-breadcrumb-item>
    </a-breadcrumb>
    <a-card>
      <a-row>
        <a-col :span="8">
          <a-input-search
            placeholder="请输入内容"
            size="large"
            enter-button="搜索"
          />
        </a-col>
      </a-row>
      <a-table
        :row-key="(record) => record.order_id"
        :pagination="false"
        :columns="tableData.columns"
        :data-source="tableData.orderData"
      >
        <template #index="{ index }">
          {{ index + 1 }}
        </template>
        <template #orderPay="{ record }">
          <a-tag v-if="record.pay_status == 0" color="pink"> 未付款 </a-tag>
          <a-tag v-if="record.pay_status == 1" color="green"> 已付款 </a-tag>
        </template>
        <template #edit>
          <a-tag class="largeTag" color="#409EFF" @click="AddressModal">
            <EditOutlined />
          </a-tag>
          <a-tag class="largeTag" color="#67C23A">
            <EnvironmentOutlined />
          </a-tag>
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
    <!-- 修改地址弹出框 -->
    <a-modal
      v-model:visible="address.visible"
      title="提示"
      ok-text="确认"
      cancel-text="取消"
      :afterClose="headleclose"
    >
      <a-row>
        <a-col :span="24">
          <a-form
            :model="address.ModalFrom"
            :rules="address.rules"
            ref="ruleForm"
          >
            <a-form-item
              name="city"
              label="省市区/县"
              required
              :labelCol="{ span: 4 }"
              :wrapperCol="{ span: 20 }"
            >
              <a-cascader
                size="large"
                placeholder="请选择"
                :options="address.citydata"
                v-model:value="address.ModalFrom.city"
              />
            </a-form-item>
            <a-form-item
              name="addres"
              label="详细地址"
              required
              :labelCol="{ span: 4 }"
              :wrapperCol="{ span: 20 }"
            >
              <a-input v-model:value="address.ModalFrom.addres" />
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
    </a-modal>
    <!-- 修改地址弹出框  end-->
  </a-layout>
</template>

<script>
import { order } from "@/api";
import { httpGet } from "@/utils/http";
import { EditOutlined, EnvironmentOutlined } from "@ant-design/icons-vue";
import cityData from "@/api/citydata";
export default {
  data() {
    return {
      // 分页数据
      pagetion: {
        pagenum: 1,
        pagesize: 10,
        total: 0,
        // 每页显示多少条
        pageSizeOptions: ["1", "2", "5", "8", "10"],
      },
      //   表格数据
      tableData: {
        orderData: [],
        columns: [
          {
            title: "#",
            key: "index",
            slots: { customRender: "index" },
          },
          {
            title: "订单编号",
            dataIndex: "order_number",
            key: "order_number",
          },
          {
            title: "订单价格",
            dataIndex: "order_price",
            key: "order_price",
          },
          {
            title: "是否付款",
            key: "orderPay",
            slots: { customRender: "orderPay" },
          },
          {
            title: "是否发货",
            dataIndex: "is_send",
            key: "is_send",
          },
          {
            title: "下单时间",
            dataIndex: "update_time",
            key: "update_time",
          },
          {
            title: "操作",
            key: "edit",
            slots: { customRender: "edit" },
          },
        ],
      },
      // 修改地址弹出框数据
      address: {
        visible: false,
        ModalFrom: {
          city: [],
          addres: "",
        },
        citydata: [],
        // 验证规则
        rules: {
          addres: [
            {
              required: true,
              message: "请填写详细地址",
              trigger: "blur",
            },
          ],
          city: [
            {
              type: "array",
              required: true,
              message: "请选择地址",
              trigger: "blur",
            },
          ],
        },
      },
    };
  },
  created() {
    this.getTableData();
  },
  methods: {
    // 获取数据
    getTableData() {
      httpGet(order.getorders, {
        pagenum: this.pagetion.pagenum,
        pagesize: this.pagetion.pagesize,
      })
        .then((response) => {
          let { meta, data } = response;
          console.log(response);
          if (meta.status == 200) {
            //   数据获取成功
            this.tableData.orderData = data.goods;
            this.pagetion.pagenum = Number(data.pagenum);
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
      this.getTableData();
    },
    // 页码改变的回调，参数是改变后的页码及每页条数
    handlePageChange(page, pageSize) {
      this.pagetion.pagenum = page;
      this.pagetion.pagesize = pageSize;
      this.getTableData();
    },
    // 修改地址弹出框
    AddressModal() {
      this.address.visible = true;
      this.address.citydata = cityData;
    },
    // 关闭修改地址模态框时清除数据
    headleclose() {
      this.$refs.ruleForm.resetFields();
    },
  },
  components: {
    EditOutlined,
    EnvironmentOutlined,
  },
};
</script>

<style>
.largeTag {
  width: 44px;
  height: 28px;
  text-align: center;
  line-height: 28px;
}
</style>