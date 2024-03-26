<template>
  <div class="left">
    <div class="banner">
      <div class="message">
        <h1>最近的登录</h1>
        <p>选择你的用户或者添加一个用户</p>
      </div>
      <div class="pictures">
        <div class="picture" v-show="isRemenberPassword">
          <img :src="storageRole.avatar" alt="加载失败" @click="clickImg">
          <div class="name">{{ storageRole.username }}</div>
          <div class="no" @click="clickNo"><icon-close-circle size="20px" /></div>

        </div>
        <div class="picture" @click="clickToRegister">
          <img src="@/assets/images/avatar2.png" alt="">
          <div class="name">Add an account</div>

        </div>

      </div>
    </div>
  </div>
</template>




<script setup lang='ts'>
import { reactive, ref } from 'vue';
import { onBeforeMount, onMounted } from 'vue';
import { useUserStore } from '@/store';
import router from '@/router';

const userStore = useUserStore()
const storageRole = reactive({
  avatar: "",
  username: ""
})
const isRemenberPassword = ref<boolean>()

onBeforeMount(async () => {

  const token = ref(localStorage.getItem("token") as string)

  const result = await userStore.tokenInfo(token.value)

  storageRole.avatar = result.avatar as string
  storageRole.username = result.name as string

})
interface loginConfig {
  rememberPassword: string,
  username: string | null,
  password: string | null
}
onMounted(() => {
  const savedConfig = localStorage.getItem("login-config");
  let config: loginConfig;
  // 使用类型断言来将返回值转换为你定义的类型
  if (savedConfig) {
    config = JSON.parse(savedConfig) as loginConfig;
    isRemenberPassword.value = JSON.parse(config.rememberPassword)
  } else {
    // 如果没有保存的配置，则创建一个默认的配置
    config = {
      rememberPassword: 'false',
      username: null,
      password: null
    };
  }

})
const clickImg = async () => {
  const config = JSON.parse(localStorage.getItem("login-config") as string);
  const storageInfo = {
    username: config.username,
    password: config.password
  }
  await userStore.login(storageInfo);
  const { redirect, ...othersQuery } = router.currentRoute.value.query;

  router.push({
    name: (redirect as string) || 'Workplace',
    query: {
      ...othersQuery,
    },
  });
}

const clickNo = () => {
  isRemenberPassword.value = false
}
const clickToRegister = () => {
  userStore.isShowRegister = true
}
</script>
<style scoped>
.left {
  position: relative;
}

.banner {
  position: absolute;
  top: 48%;
  left: 70%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: 400px;
  height: 400px;
  background-color: rgb(251, 251, 251);
  padding-left: 20px;
  border-radius: 20px;
}

.message {
  margin-top: 40px;

  h1 {
    color: rgb(51, 51, 51)
  }

  p {
    color: rgb(111, 111, 111)
  }
}

.pictures {
  display: flex;

}

.picture {
  position: relative;
  display: flex;
  flex-direction: column;

  width: 132px;
  border: solid 2px grey;
  border-radius: 10px;
  margin-right: 20px;

  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  transition-delay: 0s;

  cursor: pointer;
}

.picture:hover {
  transform: scale(1.05);
}


img {
  width: 130px;
  height: 130px;
  border-radius: 10px 10px 0 0;
}

.name {
  display: inline-block;
  margin: 0 auto;
  color: rgb(51, 51, 51);
  line-height: 24px;
}

.no {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  background-color: #fff;
}

.no:hover {
  background-color: #DCDCDC;
}

.no:active {
  background-color: gray;
}
</style>