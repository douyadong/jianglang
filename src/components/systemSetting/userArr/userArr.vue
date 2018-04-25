<template>
  <div id="userSetting">
    <div class="btnList">
      <el-button size="small" type="success" @click="addNewUserArr">创建用户组</el-button>
      <el-button size="small" type="primary" @click="editUserArr">编辑用户组</el-button>
      <el-button size="small" type="danger" @click="removeUserArr">删除用户组</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
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
    </el-table>
    <div class="block pagesize">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="100"
        layout="prev, pager, next, jumper" :total="1000">
      </el-pagination>
    </div>
    <!--创建用户组 模态框-->
    <el-dialog title="添加用户组" :visible.sync="dialogFormVisible" width="60%">
      <el-form :model="formInline" class="demo-form-inline" label-width="80px" label-position="left">
        <el-form-item label="用户组">
          <el-input v-model="formInline.userArrName" placeholder="请输入用户组名称"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" v-model="formInline.description"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveAddUser">添 加</el-button>
      </div>
    </el-dialog>
    <!--编辑用户组 模态框-->
    <el-dialog title="添加用户组" :visible.sync="editUserArrModel" width="536px">
      <el-form :model="formInline" class="demo-form-inline" label-width="80px">
        <el-form-item label="组名">
          <el-input v-model="editArr.arrName"></el-input>
        </el-form-item>
        <div class="clearfix">
          <el-form-item label="迁移群组" class="f-right">
            <el-select v-model="transferValue" placeholder="请选择" style="width: 200px">
              <el-option v-for="item in transferArr" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="clearfix">
          <el-transfer v-model="value1" :data="data" class="f-right"></el-transfer>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editUserArrModel = false">取 消</el-button>
        <el-button type="primary" @click="saveAddUser">添 加</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    created() {
      this.setTable()
    },
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: false
          });
        }
        return data;
      }
      return {
        currentPage1: 1,
        dialogFormVisible: false,
        editUserArrModel: false,
        tableTitle: '',
        transferArr: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        transferValue: '',
        formInline: {
          userArrName: '',
          description: ''
        },
        editArr: {
          arrName: ''
        },
        tableData: [],
        netArr: [{
          dingding: "dd1",
          email: "511971901@qq.com",
          pwd: "7c4a8d09ca3762af61e59520943dc26494f8941b",
          roleid: 1,
          rolename: "网络管理员",
          telephone: "17343234576",
          userid: 1,
          username: "网络",
          wx: "wx22222"
        }],
        manageArr: [{
          dingding: "dd2",
          email: "643546122@qq.com",
          pwd: "7c4a8d09ca3762af61e59520943dc26494f8941b",
          roleid: 1,
          rolename: "管理组",
          telephone: "17343234576",
          userid: 1,
          username: "管理",
          wx: "wx22222"
        }],
        testArr: [{
          dingding: "dd3",
          email: "9234324@qq.com",
          pwd: "7c4a8d09ca3762af61e59520943dc26494f8941b",
          roleid: 1,
          rolename: "测试用户组",
          telephone: "17343234576",
          userid: 1,
          username: "测试",
          wx: "wx22222"
        }],
        data: generateData(),
        value1: [1, 4, 7]
      }
    },
    watch: {
      $route() {
        this.setTable()
      }
    },
    methods: {
      setTable() {
        switch (this.$route.params.id) {
          case 'netArr':
            this.tableData = this.netArr
            this.tableTitle = '网络管理员组'
            break
          case 'manageArr':
            this.tableData = this.manageArr
            this.tableTitle = '管理组'
            break
          case 'testArr':
            this.tableData = this.testArr
            this.tableTitle = '测试用户组'
            break
        }
      },
      addNewUserArr() {
        console.log(23)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      addNewUserArr() {
        this.dialogFormVisible = true
      },
      editUserArr() {
        this.editUserArrModel = true
      },
      removeUserArr() {
        this.$confirm(`删除 <strong>${this.tableTitle}</strong> 吗`, '信息', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      saveAddUser() {

      }
    }
  }

</script>

<style lang="less">


</style>
