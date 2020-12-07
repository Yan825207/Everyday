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
      <!-- 添加用户 -->
      <a-form>
        <a-row>
          <a-col :span="12">
            <a-row :gutter="16">
              <a-col class="gutter-row" :span="16">
                <a-form-item :wrapperCol="{ span: 24 }">
                  <a-input-search size="large" placeholder="请输入内容" />
                </a-form-item>
              </a-col>
              <a-col class="gutter-row" :span="8">
                <a-button type="primary" size="large" @click="addUserModal">
                  添加用户
                </a-button>
                <a-modal
                  title="添加用户"
                  cancelText="取消"
                  okText="确定"
                  v-model:visible="visible"
                  :confirm-loading="confirmLoading"
                  @ok="subUserModal"
                  @cancel="cancelAdd"
                >
                  <a-form :rules="rules" :model="form" ref="ruleForm">
                    <a-row>
                      <a-col :span="24">
                        <!-- 用户名 -->
                        <a-form-item
                          required
                          has-feedback
                          label="用户名"
                          name="username"
                          :labelCol="{ span: 4 }"
                          :wrapperCol="{ span: 20 }"
                        >
                          <a-input type="text" v-model:value="form.username" />
                        </a-form-item>
                        <!-- 密码 -->
                        <a-form-item
                          required
                          has-feedback
                          label="密码"
                          name="password"
                          :labelCol="{ span: 4 }"
                          :wrapperCol="{ span: 20 }"
                        >
                          <a-input-password v-model:value="form.password" />
                        </a-form-item>

                        <!-- 邮箱 -->
                        <a-form-item
                          required
                          has-feedback
                          label="邮箱"
                          name="email"
                          :labelCol="{ span: 4 }"
                          :wrapperCol="{ span: 20 }"
                        >
                          <a-input type="text" v-model:value="form.email" />
                        </a-form-item>

                        <!-- 手机号 -->
                        <a-form-item
                          required
                          has-feedback
                          label="手机号"
                          name="mobile"
                          :labelCol="{ span: 4 }"
                          :wrapperCol="{ span: 20 }"
                        >
                          <a-input type="text" v-model:value="form.mobile" />
                        </a-form-item>
                      </a-col>
                    </a-row>
                  </a-form>
                </a-modal>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-form>
      <!-- 表格 -->
      <a-table
        :row-key="(record) => record.id"
        :columns="tableColumns"
        :data-source="tableData"
        :pagination="false"
        bordered
      >
        <template #mg_state="{ text }">
          <a-switch
            v-model:checked="text.mg_state"
            :id="text.id"
            @change="switchChange"
          />
        </template>

        <template #operation="{ text }">
          <!-- 编辑 -->
          <a-button type="primary" @click="editData(text.id)">
            <EditOutlined />
          </a-button>
          <!-- 编辑用户模态框 -->
          <a-modal
            title="添加用户"
            cancelText="取消"
            okText="确定"
            v-model:visible="Editvisible"
            :confirm-loading="confirmLoading"
            @ok="editSubData(text.id)"
            @cancel="cancelSub"
          >
            <a-form :rules="Editrules" :model="Editform" ref="EditruleForm">
              <a-row>
                <a-col :span="24">
                  <!-- 用户名 -->
                  <a-form-item
                    label="用户名"
                    name="username"
                    :labelCol="{ span: 4 }"
                    :wrapperCol="{ span: 20 }"
                  >
                    <a-input
                      type="text"
                      v-model:value="Editform.username"
                      disabled
                    />
                  </a-form-item>
                  <!-- 邮箱 -->
                  <a-form-item
                    required
                    has-feedback
                    label="邮箱"
                    name="email"
                    :labelCol="{ span: 4 }"
                    :wrapperCol="{ span: 20 }"
                  >
                    <a-input type="text" v-model:value="Editform.email" />
                  </a-form-item>

                  <!-- 手机号 -->
                  <a-form-item
                    required
                    has-feedback
                    label="手机号"
                    name="mobile"
                    :labelCol="{ span: 4 }"
                    :wrapperCol="{ span: 20 }"
                  >
                    <a-input type="text" v-model:value="Editform.mobile" />
                  </a-form-item>
                </a-col>
              </a-row>
            </a-form>
          </a-modal>
          <!-- 编辑用户模态框   end-->
          <!-- 删除 -->
          <a-button
            type="danger"
            style="margin: 0 10px"
            @click="delectData(text.id)"
          >
            <DeleteOutlined
          /></a-button>
          <!-- 分配角色 -->
          <a-button
            type="default"
            style="background-color: #e6a23c; color: #fff"
            @click="headlerole(text)"
          >
            <SettingOutlined
          /></a-button>
          <!-- 分配角色模态框 -->
          <a-modal
            v-model:visible="rolevisible"
            title="分配角色"
            ok-text="确认"
            cancel-text="取消"
            @ok="headleChangeRole(text.id)"
          >
            <p>当前用户: {{ userinfo.username }}</p>
            <p>当前的角色: {{ userinfo.role_name }}</p>
            <p>
              分配新角色
              <a-select
                style="width: 120px"
                placeholder="请选择"
                v-model:value="roleSelect"
                @change="handleChange"
              >
                <a-select-option
                  :value="item.id"
                  v-for="item in roleList"
                  :key="item.id"
                >
                  {{ item.roleName }}
                </a-select-option>
              </a-select>
            </p>
          </a-modal>
        </template>
      </a-table>
      <!-- 分页 -->
      <a-pagination
        style="margin-top: 25px"
        v-model:current="current"
        :total="total"
        :show-total="(total) => `共 ${total} 条`"
        show-size-changer
        @showSizeChange="onShowSizeChange"
        :page-size-options="pageSizeOptions"
        :defaultPageSize="2"
        @change="handlePageChange"
        show-quick-jumper
      />
    </div>
  </a-layout>
</template>

<script>
// 引入请求方法 httpGet
import { httpGet, httpPost, httpPut, httpDelete } from "@/utils/http";

// 引入请求路径
import { user } from "@/api";
// 引入小图标
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
  created() {
    // 调用获取用户数据的方法
    this.getUsers();
  },
  data() {
    // 自定义校验规则----邮箱
    let checkemail = async (rule, value) => {
      if (value == "") {
        return Promise.reject("请输入邮箱");
      }
      if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(value)) {
        return Promise.reject("邮箱格式不正确");
      } else {
        return Promise.resolve();
      }
    };
    let checkmobile = async (rule, value) => {
      if (value == "") {
        return Promise.reject("请输入手机号");
      }
      if (!/^1[3|4|5|7|8][0-9]{9}$/.test(value)) {
        return Promise.reject("手机号格式不正确");
      } else {
        return Promise.resolve();
      }
    };
    return {
      // 表格列配置
      tableColumns: [
        { title: "#", dataIndex: "index", key: "index" },
        { title: "姓名", dataIndex: "username", key: "username" },
        { title: "邮箱", dataIndex: "email", key: "email" },
        { title: "电话", dataIndex: "mobile", key: "mobile" },
        { title: "角色", dataIndex: "role_name", key: "role_name" },
        { title: "状态", key: "mg_state", slots: { customRender: "mg_state" } },
        {
          title: "操作",
          key: "operation",
          slots: { customRender: "operation" },
        },
      ],
      // 表格数据
      tableData: [],
      // 分页
      current: 1,
      // 每页显示几条数据
      pagesize: 2,
      total: 0,
      // 指定每页可以显示多少条
      pageSizeOptions: ["1", "2", "5", "10"],

      // 添加用户弹出框
      visible: false,
      confirmLoading: false,
      // 表单数据
      form: {
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
      // 表单验证规则
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
          {
            min: 3,
            max: 16,
            message: "用户名长度在3-16个字符之间",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            min: 3,
            max: 16,
            message: "密码长度在3-16个字符之间",
            trigger: "blur",
          },
        ],
        email: [{ validator: checkemail, trigger: "blur" }],
        mobile: [{ validator: checkmobile, trigger: "blur" }],
      },
      // 编辑用户模态框状态
      Editvisible: false,
      // 编辑用户数据
      Editform: {},
      // 编辑用户验证规则
      Editrules: {
        email: [{ validator: checkemail, trigger: "blur" }],
        mobile: [{ validator: checkmobile, trigger: "blur" }],
      },
      // 编辑用户数据
      edituserData: [],
      // 删除模态框状态
      delmodal: false,
      // 分配角色模态框状态
      rolevisible: false,
      // 编辑用户信息
      userinfo: {},
      // 角色信息
      roleList: [],
      // 保存下拉id
      roleSelect: null,
    };
  },
  methods: {
    // 获取用户数据
    getUsers() {
      httpGet(user.GetUsers, {
        pagenum: this.current,
        pagesize: this.pagesize,
      })
        .then((response) => {
          console.log(response);
          let { meta, data } = response;
          // 如果后台返回的状态码为200,则代表请求成
          if (meta.status == 200) {
            // 设置表格数据
            this.tableData = data.users;
            // 设置当前页码
            this.current = data.pagenum;
            // 设置数据总数
            this.total = data.total;
            // 给每条数据添加序号(index)属性
            this.tableData.forEach((ele, index) => {
              ele.index = index + 1;
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 根据每页显示多少条数据不同 重新渲染表格
    onShowSizeChange(current, pageSize) {
      // console.log(current,   );
      this.current = current;
      this.pagesize = pageSize;
      this.getUsers(current, pageSize);
    },
    // 页码改变的回调，参数是改变后的页码及每页条数
    handlePageChange(page, pageSize) {
      this.current = page;
      this.pagesize = pageSize;
      this.getUsers(page, pageSize);
    },
    // 显示模态框
    addUserModal() {
      this.visible = true;
    },
    // 添加用户
    subUserModal() {
      // 点击确认，校验表单
      this.$refs.ruleForm
        .validate()
        .then(() => {
          // 发起亲求
          httpPost(user.Adduser, {
            username: this.form.username,
            password: this.form.password,
            email: this.form.email,
            mobile: this.form.mobile,
          })
            .then((res) => {
              let { meta } = res;
              if (meta.status == 400) {
                // 添加失败 清除
                this.$refs.ruleForm.resetFields();
                return message.error(meta.msg);
              }
              if (meta.status == 201) {
                // 数据添加成功
                // 提示用户添加成功
                message.success(meta.msg);
                // 模态框消失
                this.visible = false;
                // 重新加载页面
                this.getUsers();
                // 重置表单
                this.$refs.ruleForm.resetFields();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    // 取消添加
    cancelAdd() {
      // 重置表单
      this.$refs.ruleForm.resetFields();
    },
    // 编辑用户---回显用户
    editData(id) {
      console.log(id);
      //模态框显示
      this.Editvisible = true;
      // 发起请求
      httpGet(user.getuser + `/${id}`)
        .then((res) => {
          let { meta, data } = res;
          if (meta.status == 200) {
            // 数据获取成功
            // 保存数据
            this.Editform = data;
            console.log(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 提交修改数据
    editSubData(id) {
      // 点击确认验证表单
      this.$refs.EditruleForm.validate()
        .then(() => {
          // 验证成功，发起请求
          httpPut(user.subuser + `/${id}`, {
            email: this.Editform.email,
            mobile: this.Editform.mobile,
          })
            .then((res) => {
              let { meta } = res;
              if (meta.status == 200) {
                // 数据更新成功
                // 模态框消失
                this.Editvisible = false;
                // 更新数据
                this.getUsers();
                // 重置表单
                this.$refs.EditruleForm.resetFields();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          // 表单验证失败
          console.log(err);
        });
    },
    // 取消修改用户数据
    cancelSub() {
      message.error("取消修改用户");
    },
    // 删除数据
    delectData(id) {
      // 保存this
      let that = this;
      this.delmodal = true;
      Modal.confirm({
        title: "提示",
        icon: createVNode(ExclamationCircleOutlined),
        content: "此操作将永久删除该用户，是否继续？",
        okText: "确认",
        cancelText: "取消",
        onOk() {
          // 点击确认发起亲求
          httpDelete(user.deluser + `/${id}`).then((res) => {
            let { meta } = res;
            console.log(res);
            if (meta.status == 400) {
              // 关闭模态框
              this.delmodal = false;
              // 用户删除失败
              return message.error(meta.msg);
            }
            if (meta.status == 200) {
              // 更新数据
              that.getUsers();
              // 用户删除成功
              message.success(meta.msg);
              // 关闭模态框
              that.delmodal = true;
            }
          });
        },
        onCancel() {
          // 取消删除
          message.error("取消删除用户");
        },
      });
    },
    // 分配新角色
    headlerole(data) {
      // 分配角色模态框显示
      this.rolevisible = true;
      // 存储用户数据---回显
      this.userinfo = data;
      // 获取角色列表
      httpGet("roles")
        .then((res) => {
          let { meta, data } = res;
          if (meta.status == 200) {
            // 获取数据成功
            this.roleList = data;
            console.log(this.roleList);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleChange(value) {
      console.log(value);
    },
    // 更改角色
    headleChangeRole(id) {
      // 如果未设置角色，则不发起请求
      if (this.roleSelect == null) {
        return message.error("请选择一个角色");
      }
      httpPut(`users/${id}/role`, {
        rid: this.roleSelect,
      })
        .then((res) => {
          let { meta } = res;
          if (meta.status == 400) {
            // 角色更改成功

            // 模态框消失
            this.rolevisible = false;
            // 弹出提示
            return message.success(meta.msg);
          }
          if (meta.status == 200) {
            // 角色更改成功
            // 弹出提示
            message.success(meta.msg);
            // 模态框消失
            this.rolevisible = false;
            // 重置
            this.roleSelect = null;
            // 刷新页面
            this.getUsers();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 改变用户状态
    switchChange(state, event) {
      // 获取id
      let id = event.target.id;
      // 发起亲求
      httpPut(`users/${id}/state/${state}`)
        .then((res) => {
          let { meta } = res;
          if (meta.status == 200) {
            // 状态更改成功
            message.success(meta.msg);
            // 刷新页面
            this.getUsers();
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

<style></style>
