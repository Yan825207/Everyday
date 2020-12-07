<template>
  <a-layout>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>
        <router-link to="/home" style="font-weight: bold; color: #000">
          首页
        </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>限权管理</a-breadcrumb-item>
      <a-breadcrumb-item>角色列表</a-breadcrumb-item>
    </a-breadcrumb>
    <a-table :columns="columns" :data-source="tableData">
      <template #index="{ index }">
        {{ index + 1 }}
      </template>
      <template #level="{ text }">
        <a-tag color="blue" v-if="text.level == 0">一级</a-tag>
        <a-tag color="green" v-else-if="text.level == 1">二级</a-tag>
        <a-tag color="orange" v-else-if="text.level == 2">三级</a-tag>
      </template>
    </a-table>
  </a-layout>
</template>

<script>
import { httpGet } from "@/utils/http";
import { rights } from "@/api";

export default {
  created() {
    //   获取表格数据
    this.getTable();
  },
  data() {
    return {
      columns: [
        { title: "#", slots: { customRender: "index" }, key: "index" },
        { title: "限权名称", dataIndex: "authName", key: "authName" },
        { title: "路径", dataIndex: "path", key: "path" },
        { title: "权限等级", key: "level", slots: { customRender: "level" } }
      ],
      //   表格数据
      tableData: []
    };
  },

  methods: {
    getTable() {
      // 发起亲求
      httpGet(rights.getTabData)
        .then(res => {
          let { meta, data } = res;
          console.log(data);
          if (meta.status == 200) {
            //   获取数据成功
            this.tableData = data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.ant-tag {
  padding: 2px 14px;
  font-size: 14px;
}

.ant-tag {
  margin: 7px;
}
</style>
