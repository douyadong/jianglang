<template>
  <div id="userSetting">
    <div class="btnList">
      <el-button size="small" type="success" @click="addNewUser">添加用户</el-button>
    </div>
    <el-table :data="tableData4" style="width: 100%">
      <el-table-column prop="username" label="用户名称" width="">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="">
      </el-table-column>
      <el-table-column prop="telephone" label="电话号码" width="">
      </el-table-column>
      <el-table-column prop="wx" label="微信" width="">
      </el-table-column>
      <el-table-column prop="dingding" label="钉钉" width="">
      </el-table-column>
      <el-table-column prop="rolename" label="角色名称" width="">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="auto" min-width="120">
        <template slot-scope="scope">
          <el-button @click="seeUser(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="editUser(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="removeUser(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block pagesize">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100"
        layout="prev, pager, next, jumper" :total="1000">
      </el-pagination>
    </div>
    <!--模态框-->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible" width="70%">
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="80px" :disabled="userDisabled">
        <el-form-item label="用户名">
          <el-input v-model="formInline.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formInline.pwd" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="formInline.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="formInline.telephone" placeholder="电话"></el-input>
        </el-form-item>
        <el-form-item label="微信">
          <el-input v-model="formInline.wx" placeholder="微信"></el-input>
        </el-form-item>
        <el-form-item label="钉钉">
          <el-input v-model="formInline.dingding" placeholder="钉钉"></el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="formInline.rolename" placeholder="请选择角色" :class="'selectUser'">
            <el-option value="超级管理员"></el-option>
            <el-option value="管理员"></el-option>
            <el-option value="用户"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveAddUser">添 加</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        userDisabled: false,
        dialogFormVisible: false,
        formInline: {
          username: '',
          pwd: '',
          email: '',
          telephone: '',
          wx: '',
          dingding: '',
          rolename: ''
        },
        tableData4: [{
            dingding: "dd",
            email: "145366@qq.com",
            pwd: "7c4a8d09ca3762af61e59520943dc26494f8941b",
            roleid: 1,
            rolename: "超级管理员",
            telephone: "17343234576",
            userid: 1,
            username: "Admin",
            wx: "wx22222"
          },
          {
            dingding: "ww2345566666666",
            email: "12345678@qq.com",
            pwd: "7c4a8d09ca3762af61e59520943dc26494f8941b",
            roleid: 1,
            rolename: "管理员",
            telephone: "18345679801",
            userid: 2,
            username: "aa",
            wx: "wx123456"
          },
        ]
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      addNewUser() {
        this.userDisabled = false
        this.userAssign()
      },
      saveAddUser() {
        console.log(this.formInline)
      },
      seeUser(row) {
        this.userDisabled = true
        this.userAssign(row)
      },
      editUser(row) {
        this.userDisabled = false
        this.userAssign(row)
      },
      userAssign(row) {
        if (row) {
          this.formInline = {
            username: row.username,
            pwd: row.pwd,
            email: row.email,
            telephone: row.telephone,
            wx: row.wx,
            dingding: row.dingding,
            rolename: row.rolename
          }
        } else {
          this.formInline = {
            username: '',
            pwd: '',
            email: '',
            telephone: '',
            wx: '',
            dingding: '',
            rolename: ''
          }
        }
        this.dialogFormVisible = true
      },
      removeUser(row) {
        this.$confirm(`确定删除 <strong>${row.username}</strong> 吗?`, '信息', {
          confirmButtonText: '确定',
          cancleButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '删除失败!'
          })
        })
      },
    }
  }

</script>

<style lang="less">


</style>
