<template>
  <div ref="container" class="container">

    <Banner />

    <div class="content">
      <div class="content-inner">
        <LoginForm />
        <ResiterForm v-show="userStore.isShowRegister" />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store';
import { ref, onMounted } from 'vue';
import Footer from '@/components/footer/index.vue';
import Banner from './components/banner.vue';
import LoginForm from './components/login-form.vue';
import ResiterForm from './components/register.vue';

const userStore = useUserStore()
const container = ref()



</script>

<style lang="less" scoped>
.container {
  display: flex;
  height: 100vh;
  background: url('@/assets/images/background.png');
  background-size: cover;

  .left {
    width: 550px;
    // background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
  }

  .content {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;

  }

  .footer {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
  }
}

.logo {
  position: fixed;
  top: 24px;
  left: 22px;
  z-index: 1;
  display: inline-flex;
  align-items: center;

  &-text {
    margin-right: 4px;
    margin-left: 4px;
    color: var(--color-fill-1);
    font-size: 20px;
  }
}
</style>

<style lang="less" scoped>
// responsive
@media (max-width: @screen-lg) {
  .container {
    .banner {
      width: 25%;
    }
  }
}
</style>
