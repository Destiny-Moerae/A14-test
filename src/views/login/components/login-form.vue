<template>
  <div class="login-form-wrapper">
    <div class="login-form-error-msg">{{ errorMessage }}</div>
    <a-form ref="loginForm" :model="userInfo" class="login-form" layout="vertical" @submit="handleSubmit">
      <span class="msg">你的用户名</span>
      <a-form-item class="input" field="username"
        :rules="[{ required: true, message: $t('login.form.userName.errMsg') }]" :validate-trigger="['change', 'blur']"
        hide-label>
        <a-input v-model="userInfo.username" size="large" :placeholder="$t('login.form.userName.placeholder')">
          <template #prefix>
            <icon-user />
          </template>
        </a-input>
      </a-form-item>
      <span class="msg">你的密码</span>
      <a-form-item class="input" field="password"
        :rules="[{ required: true, message: $t('login.form.password.errMsg') }]" :validate-trigger="['change', 'blur']"
        hide-label>
        <a-input-password v-model="userInfo.password" size="large" :placeholder="$t('login.form.password.placeholder')"
          allow-clear>
          <template #prefix>
            <icon-lock />
          </template>
        </a-input-password>
      </a-form-item>
      <a-space :size="16" direction="vertical">
        <div class="login-form-password-actions">
          <a-checkbox checked="rememberPassword" :model-value="loginConfig.rememberPassword"
            @change="setRememberPassword as any">
            {{ $t('login.form.rememberPassword') }}
          </a-checkbox>
          <a-link>{{ $t('login.form.forgetPassword') }}</a-link>
        </div>
        <a-button class="loginButton" type="primary" html-type="submit" long :loading="loading">
          {{ $t('login.form.login') }}
        </a-button>
        <a-button type="text" long class="login-form-register-btn" @click="clickRegisterBtn">
          {{ $t('login.form.register') }}
        </a-button>
      </a-space>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { Message } from '@arco-design/web-vue';
import { ValidatedError } from '@arco-design/web-vue/es/form/interface';
import { useI18n } from 'vue-i18n';
import { useStorage } from '@vueuse/core';
import { useUserStore } from '@/store';
import useLoading from '@/hooks/loading';
import type { LoginData } from '@/api/user';

const router = useRouter();
const { t } = useI18n();
const errorMessage = ref('');
const { loading, setLoading } = useLoading();
const userStore = useUserStore();



const loginConfig = useStorage('login-config', {
  rememberPassword: true,
  username: 'admin', // 演示默认值
  password: 'admin', // demo default value
});
const userInfo = reactive({
  username: loginConfig.value.username,
  password: loginConfig.value.password,
});

const handleSubmit = async ({
  errors,
  values,
}: {
  errors: Record<string, ValidatedError> | undefined;
  values: Record<string, any>;
}) => {
  if (loading.value) return;
  if (!errors) {
    setLoading(true);
    try {

      await userStore.login(values as LoginData);
      const { redirect, ...othersQuery } = router.currentRoute.value.query;

      router.push({
        name: (redirect as string) || 'Workplace',
        query: {
          ...othersQuery,
        },
      });
      Message.success(t('login.form.login.success'));
      const { rememberPassword } = loginConfig.value;
      const { username, password } = values;
      // 实际生产环境需要进行加密存储。
      // The actual production environment requires encrypted storage.
      loginConfig.value.username = rememberPassword ? username : '';
      loginConfig.value.password = rememberPassword ? password : '';
    } catch (err) {
      errorMessage.value = (err as Error).message;
    } finally {
      setLoading(false);
    }
  }
};
const setRememberPassword = (value: boolean) => {
  loginConfig.value.rememberPassword = value;
};
const clickRegisterBtn = () => {
  userStore.isShowRegister = true
}

</script>

<style lang="less" scoped>
// * {
//   margin: 0;
//   padding: 0;
// }

.login-form {
  &-wrapper {
    box-sizing: border-box;
    height: 350px;
    width: 500px;
    background-color: #fff;
    border: solid 1px darkgray;
    border-radius: 10px;
    padding: 20px 40px;
  }

  &-title {
    color: var(--color-text-1);
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  &-sub-title {
    color: var(--color-text-3);
    font-size: 16px;
    line-height: 24px;
  }

  &-error-msg {
    height: 32px;
    color: rgb(var(--red-6));
    line-height: 32px;
  }

  &-password-actions {
    display: flex;
    justify-content: space-between;
  }

  &-register-btn {
    color: var(--color-text-3) !important;
  }

  .msg {
    line-height: 22px;
    color: rgb(110, 110, 100);
  }



  .loginButton {
    border-radius: 40px;
    margin: 0 auto;
    width: 90%;
    height: 40px;
  }
}
</style>
