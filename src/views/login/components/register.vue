<template>
  <div class="registerForm">
    <a-form ref="registerForm" :model="registerInfo" class="register-form" layout="vertical">

      <span class="msg">你的用户名</span>
      <a-form-item class="input" field="username"
        :rules="[{ required: true, message: $t('login.form.userName.errMsg') }]" :validate-trigger="['change', 'blur']"
        hide-label>
        <a-input v-model="registerInfo.username" size="large">
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
      </a-form-item>
      <span class="msg">你的密码</span>
      <a-form-item class="input" field="password"
        :rules="[{ required: true, message: $t('login.form.password.errMsg') }]" :validate-trigger="['change', 'blur']"
        hide-label>
        <a-input-password v-model="registerInfo.password" size="large" allow-clear>
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>
      <a-space :size="16" direction="vertical">

        <a-button type="primary" long class="login-form-register-btn">
          {{ $t('login.form.register') }}
        </a-button>
      </a-space>
    </a-form>
    <div class="no" @click="clickNo"><icon-close-circle size="20px" /></div>
  </div>
  <!-- <div class="overplay"></div> -->
</template>



<script setup lang='ts'>
import { useStorage } from '@vueuse/core';
import { reactive } from 'vue';
import { useUserStore } from '@/store';

const userStore = useUserStore()
const registerConfig = useStorage('register-config', {
  username: '', // 演示默认值
  password: '', // demo default value
});

const registerInfo = reactive({
  username: registerConfig.value.username,
  password: registerConfig.value.password,
});

const clickNo = () => {
  userStore.isShowRegister = false
}
</script>
<style scoped>
.registerForm {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  height: 350px;
  width: 500px;
  /* z-index: 1000; */

  background-color: #fff;
  border: solid 1px darkgray;
  border-radius: 10px;
  padding: 60px 40px;
}

.no {
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 50%;
}

.no:hover {
  background-color: #DCDCDC;
}

.no:active {
  background-color: gray;
}

/* .overplay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

} */
</style>