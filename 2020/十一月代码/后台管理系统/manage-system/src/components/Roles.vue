<template>
  <a-layout>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item
        ><router-link to="/home" style="font-weight: bold; color: #000"
          >首页</router-link
        ></a-breadcrumb-item
      >
      <a-breadcrumb-item>用户管理</a-breadcrumb-item>
      <a-breadcrumb-item>用户列表</a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      <a-row>
        <a-col :span="24">
          <a-button type="primary" size="large" @click="roleModal">
            添加用户
          </a-button>
          <!-- 添加用户弹出框 -->
          <a-modal
            title="添加角色"
            cancelText="取消"
            okText="确定"
            v-model:visible="Rolevisible"
            @ok="addRole"
          >
            <a-form>
              <a-row>
                <a-col :span="24">
                  <!-- 角色名称 -->
                  <a-form-item
                    label="角色名称"
                    name="username"
                    :labelCol="{ span: 4 }"
                    :wrapperCol="{ span: 20 }"
                    required
                  >
                    <a-input type="text" v-model:value="roleName" />
                  </a-form-item>
                  <!-- 角色描述 -->
                  <a-form-item
                    has-feedback
                    label="角色描述"
                    name="email"
                    :labelCol="{ span: 4 }"
                    :wrapperCol="{ span: 20 }"
                  >
                    <a-input type="text" v-model:value="roleDesc" />
                  </a-form-item>
                </a-col>
              </a-row>
            </a-form>
          </a-modal>
          <!-- 弹出框end -->
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="24">
          <a-table
            :row-key="(record) => record.id"
            :columns="columns"
            :data-source="roleList"
            :pagination="false"
            childrenColumnName=""
          >
            <template #index="{ index }">
              {{ index + 1 }}
            </template>

            <template #edit="{ record }">
              <!-- 编辑 -->
              <a-button type="primary" size="small">
                <EditOutlined />编辑
              </a-button>
              <a-button type="danger" style="margin: 0 10px" size="small">
                <DeleteOutlined />删除</a-button
              >
              <!-- 分配角色 -->
              <a-button
                type="default"
                style="background-color: #e6a23c; color: #fff"
                size="small"
                @click="headleroleModal(record)"
              >
                <SettingOutlined />分配权限</a-button
              >
            </template>
            <template #expandedRowRender="{ record }">
              <a-row
                v-for="(item1, index1) in record.children"
                :key="item1.id"
                :index="index1"
                :class="['bdbottom vcenter', index1 == 0 ? 'bdtop' : '']"
              >
                <a-col :span="5">
                  <a-tag
                    @close="DelTag($event, record.id, item1.id)"
                    closable
                    color="blue"
                    >{{ item1.authName }}</a-tag
                  >
                </a-col>
                <a-col :span="19">
                  <!-- 二级标签 -->
                  <a-row
                    v-for="(item2, index2) in item1.children"
                    :key="item2.id"
                    :index="index2"
                    :class="['vcenter', index2 == 0 ? '' : 'bdtop']"
                  >
                    <a-col :span="6">
                      <a-tag
                        @close="DelTag($event, record.id, item2.id)"
                        closable
                        color="green"
                        >{{ item2.authName }}</a-tag
                      >
                    </a-col>
                    <a-col :span="18">
                      <!-- 三级 -->
                      <a-tag
                        @close="DelTag($event, record.id, item3.id)"
                        closable
                        color="orange"
                        v-for="item3 in item2.children"
                        :key="item3.id"
                        >{{ item3.authName }}</a-tag
                      >
                    </a-col>
                  </a-row>
                </a-col>
              </a-row>
            </template>
          </a-table>
          <!-- 分配角色模态框 -->
          <a-modal
            v-model:visible="Modelvisible"
            title="提示"
            ok-text="确认"
            cancel-text="取消"
            :afterClose="closeModal"
            @ok="headleOK"
          >
            <a-tree
              checkable
              :tree-data="treeData"
              :replaceFields="{
                children: 'children',
                title: 'authName',
                key: 'id',
              }"
              v-model:checkedKeys="defaultKey"
              defaultExpandAll
            >
            </a-tree>
          </a-modal>
          <!-- 分配角色模态框 end-->
        </a-col>
      </a-row>
    </div>
  </a-layout>
</template>

<script>
import { httpGet, httpPost, httpDelete } from "@/utils/http";
import { role, rights } from "@/api";
// 引入菜单小图标
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons-vue";
// 引入全局提示
import { message, Modal } from "ant-design-vue";
import { createVNode } from "vue";

export default {
  data() {
    return {
      columns: [
        { title: "#", slots: { customRender: "index" }, key: "index" },
        { title: "角色名称", dataIndex: "roleName", key: "roleName" },
        { title: "角色描述", dataIndex: "roleDesc", key: "roleDesc" },
        { title: "操作", key: "level", slots: { customRender: "edit" } },
      ],
      //   角色列表
      roleList: [],
      // 添加角色弹出框状态
      Rolevisible: false,
      // 角色名称
      roleName: "",
      // 角色描述
      roleDesc: "",
      // 分配角色模态框状态
      Modelvisible: false,
      // 限权列表---tree
      treeData: [],
      // 存放选中的限权的id
      defaultKey: [],
      // 角色id
      roelId: "",
    };
  },
  created() {
    this.getRole();
  },
  methods: {
    getRole() {
      httpGet("roles")
        .then((res) => {
          let { meta, data } = res;
          // console.log(res);
          if (meta.status == 200) {
            this.roleList = data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 添加用户弹出框
    roleModal() {
      this.Rolevisible = true;
    },
    // 添加用户
    addRole() {
      // 发起亲求
      httpPost(role.getrole, {
        roleName: this.roleName,
        roleDesc: this.roleDesc,
      })
        .then((res) => {
          let { meta } = res;
          console.log(res);
          if (meta.status == 400) {
            // 添加失败
            this.Rolevisible = false;
            return message.error(meta.msg);
          }
          if (meta.status == 201) {
            // 添加成功
            message.success(meta.msg);
            this.Rolevisible = false;
            this.getRole();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 删除标签
    /**
     * e : 事件对象
     * roleid : 角色id
     * rightid : 权限id
     */
    DelTag(e, roleId, rightId) {
      // 保存this
      let that = this;
      // 解决点击立刻删除标签
      e.preventDefault();
      // 弹出提示
      Modal.confirm({
        title: "提示",
        icon: createVNode(ExclamationCircleOutlined),
        content: "此操作将永久删除这个文件,是否继续?",
        okText: "确认",
        cancelText: "取消",
        // 确认删除
        onOk() {
          // 发请求
          httpDelete(`roles/${roleId}/rights/${rightId}`)
            .then((res) => {
              let { meta } = res;
              if (meta.status == 200) {
                // 删除成功
                // 弹出提示
                message.success(meta.msg);
                // 刷新数据
                that.getRole();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        },
      });
    },
    // 分配权限
    headleroleModal(record) {
      // 保存角色id
      this.roelId = record.id;
      // 发请求获取数据
      httpGet(rights.getTreeData)
        .then((res) => {
          let { meta, data } = res;
          if (meta.status == 200) {
            // 保存数据
            this.treeData = data;
            this.headletreeData(record);
            // 数据获取成功在显示模态框
            this.Modelvisible = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 保存限权id
    headletreeData(node) {
      // 判断是否有children属性
      if (!node.children) {
        // 没有则是第三层，保存id
        return this.defaultKey.push(node.id);
      }
      // 否则循环children属性
      node.children.forEach((ele) => {
        this.headletreeData(ele);
      });
    },
    // 模态框关闭清除选中
    closeModal() {
      this.defaultKey = [];
    },
    // 确认修改限权
    headleOK() {
      // 发请求
      httpPost(`roles/${this.roelId}/rights`, {
        rids: this.defaultKey.join(","),
      })
        .then((res) => {
          let { meta } = res;
          if (meta.status == 200) {
            // 修改成功
            // 弹出提示
            message.success(meta.msg);
            // 关闭模态框
            this.Modelvisible = false;
            // 重新加载
            this.getRole();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    EditOutlined,
    DeleteOutlined,
    SettingOutlined,
  },
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

.bdtop {
  border-top: 1px solid #eee;
}

.bdbottom {
  border-bottom: 1px solid #eee;
}

.vcenter {
  display: flex;
  align-items: center;
}
</style>