<template>
  <div class="container">
    <div class="content panel">
      <div class="title">{{ $t('workplace.title') }}</div>
      <a-divider />

      <a-card :style="{ width: '96%', margin: '20px' }">
        <icon-dashboard size="18" />
        <span style="color:18px;margin-left: 15px;">{{ $t('workplace.environmentInfo') }}</span>
        <ul v-for="( item, index ) in  environmentInfoList " :key="index">
          <li>
            <a-divider style="margin:0 20px" />
            <span style="display: inline-block;width:150px;padding-top: 20px;">{{ item.name }}</span>
            <span style="margin-left: 250px;">{{ item.value }}</span>
          </li>
        </ul>
      </a-card>

      <a-row :gutter="20" :style="{ marginBottom: '20px', margin: '20px' }">
        <a-col :span="8">
          <a-card :title="$t('workplace.containers')" :style="{ width: '100%' }">
            <template #extra>
              <router-link to="/local/containers">{{ $t('workplace.mores') }}</router-link>
            </template>
            {{ $t('workplace.containers') }}
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card :title="$t('workplace.images')" :style="{ width: '100%' }">
            <template #extra>
              <router-link to="/local/images">{{ $t('workplace.mores') }}</router-link>
            </template>
            {{ $t('workplace.images') }}
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card :title="$t('workplace.networks')" :style="{ width: '100%' }">
            <template #extra>
              <router-link to="/local/networks">{{ $t('workplace.mores') }}</router-link>
            </template>
            {{ $t('workplace.networks') }}
          </a-card>
        </a-col>
      </a-row>
      <a-row :gutter="20" :style="{ marginBottom: '20px', margin: '20px' }">
        <a-col :span="24">
          <a-card :title="$t('workplace.volumes')" :style="{ width: '100%' }">
            <template #extra>
              <router-link to="/local/volumes">{{ $t('workplace.mores') }}</router-link>
            </template>
            {{ $t('workplace.volumes') }}
          </a-card>
        </a-col>

      </a-row>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'



const environmentInfoList = reactive([
  { name: 'Environment', value: 'local' },
  { name: 'URL', value: '	/var/run/docker.sock' },
  { name: 'GPU', value: '	none' },
  { name: 'Tags', value: '-' },

])

</script>

<script lang="ts">
export default {
  name: 'Dashboard', // If you want the include property of keep-alive to take effect, you must name the component
};
</script>

<style lang="less" scoped>
.container {
  background-color: var(--color-fill-2);
  padding: 16px 20px;
  padding-bottom: 0;
  display: flex;
  height: 90vh;

}

.content {
  flex: 1;
  overflow: auto;
  width: 1147px;
  height: 100%;
}

.title {
  font-size: 20px;
  margin: 20px 30px;
}

ul li {
  list-style-type: none;
}



.left-side {
  flex: 1;
  overflow: auto;
}

.right-side {
  width: 280px;
  margin-left: 16px;
}

.panel {
  background-color: var(--color-bg-2);
  border-radius: 4px;
  overflow: auto;
}

:deep(.panel-border) {
  margin-bottom: 0;
  border-bottom: 1px solid rgb(var(--gray-2));
}

.moduler-wrap {
  border-radius: 4px;
  background-color: var(--color-bg-2);

  :deep(.text) {
    font-size: 12px;
    text-align: center;
    color: rgb(var(--gray-8));
  }

  :deep(.wrapper) {
    margin-bottom: 8px;
    text-align: center;
    cursor: pointer;

    &:last-child {
      .text {
        margin-bottom: 0;
      }
    }

    &:hover {
      .icon {
        color: rgb(var(--arcoblue-6));
        background-color: #e8f3ff;
      }

      .text {
        color: rgb(var(--arcoblue-6));
      }
    }
  }

  :deep(.icon) {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-bottom: 4px;
    color: rgb(var(--dark-gray-1));
    line-height: 32px;
    font-size: 16px;
    text-align: center;
    background-color: rgb(var(--gray-1));
    border-radius: 4px;
  }
}
</style>

<style lang="less" scoped>
// responsive
.mobile {
  .container {
    display: block;
  }

  .right-side {
    // display: none;
    width: 100%;
    margin-left: 0;
    margin-top: 16px;
  }
}
</style>
