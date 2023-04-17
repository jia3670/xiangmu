<!--<t emplate>
  <div class="form-box">
    <el-care class="box-card">
      <div slot="header" class="clearfix">
        <span>新用户注册</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="goRegister"
        >
          去登录
        </el-button>
      </div>
      <el-form
        :model="userForm"
        status-icon
        :rules="rules"
        ref="userForm"
        label-width="100p"
        class="demo-userForm"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            v-model="userForm.username"
            placeholder="请输入账号"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userpass">
          <el-input
            type="passowrd"
            placeholder="请输入密码"
            v-model="userForm.userpass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirm">
          <el-input
            type="passowrd"
            placeholder="请再次输入密码"
            v-model="userForm.confirm"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input
            placeholder="请输入昵称"
            v-model="userForm.nickname"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('userForm')"
            >注册</el-button
          >
          <el-button @click="reseForm('userForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-care>
  </div>
</t>

<script>
import "../../assets/css/login_reg.css";
export default {};
</script>

<style>
</style>-->
<template>
  <div class="reg">
    <h2>注册页面</h2>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>