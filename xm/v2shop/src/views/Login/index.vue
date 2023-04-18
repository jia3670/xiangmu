<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>管理员登录</span>
      </div>
      <el-form
        :model="userForm"
        :rules="rules"
        ref="userForm"
        status-icon
        class="demo-userForm"
        label-width="100px "
      >
        <!-- 账号 -->
        <el-form-item label="账号" prop="username">
          <el-input
            type="text"
            v-model="userForm.username"
            auto-complete="off"
            placeholder="请输入账号"
          />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="userForm.password"
            auto-complete="off"
            placeholder="请输入密码"
          >
          </el-input>
        </el-form-item>
        <!-- 提交和重置按钮 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('userForm')">登录</el-button>
          <el-button @click="resetForm('userForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          { min: 6, max: 18, message: "账号长度6到18个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "密码长度6到18个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName){
      this.$refs[formName].validate( valid=>{
        if(valid){
          alert('submit')
        }else{
          this.$message({
            type:'warning',
            message:'请检查登录数据填写是否合法'
          })
        }
      })
    },
    resetForm(formName){
      this.$refs[formName].resetFields()
    }
   }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-card {
  width: 500px;
  height: 300px;
}
</style>