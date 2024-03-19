<template>
  <div class="login-container">
    <div class="login-card">
      <div class="form-group">
        <label for="username">用户名</label>
        <input id="username" type="text" v-model="formData.username" placeholder="请输入用户名" />
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input id="password" type="password" v-model="formData.password" placeholder="请输入密码" />
      </div>
      <button @click=" submitForm()">登录</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import{ getUserInfo} from '@/api/auth'
import { useUserStore } from '@/store/modules/user';

const formData=reactive({
	username:'',
	password:'',
})
const userStore= useUserStore();
const submitForm=()=>{
	userStore.login(formData)
}


</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-card {
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: #007bff;
  cursor: pointer;
  font-size: 1rem;
  text-transform: uppercase;
}

button:hover {
  background-color: #0056b3;
}
</style>
