<template>
  <div class="container">

    <div class="content panel">
      <div class="toolBar">

        <div class="toolBarTitle">
          <img src="@/assets/images/container.png" alt="">
          <span>{{ $t('container.Containers') }}</span>
        </div>
        <a-input-search :style="{ width: '190px', height: '35px' }" :placeholder="$t('container.SearchPlaceHolder')"
          search-button />
        <div class="toolBarBtns">
          <a-button type="outline">
            <template #icon>
              <icon-play-arrow />
            </template>
            <template #default>{{ $t('container.Start') }}</template>
          </a-button>
          <a-button type="outline">
            <template #icon>
              <icon-record-stop />
            </template>
            <template #default>{{ $t('container.Stop') }}</template>
          </a-button>
          <a-button type="outline">
            <template #icon>
              <icon-stop />
            </template>
            <template #default>{{ $t('container.Kill') }}</template>
          </a-button>
          <a-button type="outline">
            <template #icon>
              <icon-refresh />
            </template>
            <template #default>{{ $t('container.Restart') }}</template>
          </a-button>
          <a-button type="outline">
            <template #icon>
              <icon-pause />
            </template>
            <template #default>{{ $t('container.Pause') }}</template>
          </a-button>
          <a-button type="outline">
            <template #icon>
              <icon-play-arrow />
            </template>
            <template #default>{{ $t('container.Resume') }}</template>
          </a-button>
          <a-button type="outline">
            <template #icon>
              <icon-delete />
            </template>
            <template #default>{{ $t('container.Remove') }}</template>
          </a-button>
        </div>
        <div class="toolBarAddBtn">
          <a-button type="primary">
            <template #icon>
              <icon-plus />
            </template>
            <template #default>{{ $t('container.Add container') }}</template>
          </a-button>
        </div>
      </div>
      <a-table :columns="columns" :data="datas" :row-selection="rowSelection as any">
        <template #name>
          <router-link :to="{
            name: 'ContainerDetails',
            params: {
              id: 64
            }
          }">portainer</router-link>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, reactive, onMounted, watch } from 'vue'
import { useContainerStore } from '@/store'


const containerStore = useContainerStore()

const instance = getCurrentInstance()!;
const columns = reactive([
  {
    title: instance.appContext.config.globalProperties.$t('container.Name'),
    slotName: "name"
  },
  {
    title: instance.appContext.config.globalProperties.$t('container.State'),
    dataIndex: "state"
  },
  {
    title: instance.appContext.config.globalProperties.$t('container.Quick Actions'),
    dataIndex: "quickActions"
  },
  {
    title: instance.appContext.config.globalProperties.$t('container.Image'),
    dataIndex: "image"
  },
  {
    title: instance.appContext.config.globalProperties.$t('container.Created'),
    dataIndex: "created"
  },
  {
    title: instance.appContext.config.globalProperties.$t('container.IP Address'),
    dataIndex: "ipAddress"
  },
  {
    title: instance.appContext.config.globalProperties.$t('container.Published Ports'),
    dataIndex: "publishedPorts"
  },
  {
    title: instance.appContext.config.globalProperties.$t('container.Ownership'),
    dataIndex: "ownership"
  },

])

const datas = reactive([{
  key: '0',
  name: 'portainer',
  state: 'running',
  quickActions: '123',
}])

const rowSelection = reactive({
  type: 'checkbox',
  showCheckedAll: true,
  onlyCurrent: false,
});

// 监听多个属性的改变
onMounted(() => {
  const propertiesToWatch = [
    'container.Name',
    'container.State',
    'container.Quick Actions',
    'container.Image',
    'container.Created',
    'container.IP Address',
    'container.Published Ports',
    'container.Ownership'

  ];

  propertiesToWatch.forEach(property => {
    watch(() => instance.appContext.config.globalProperties.$t(property), (newVal, oldVal) => {
      // 进行相应的更新操作
      const columnIndex = columns.findIndex(col => col.title === oldVal)
      if (columnIndex !== -1) {
        columns[columnIndex].title = newVal;
      }
    });
  });
});


</script>

<script lang="ts">
export default {
  name: 'Container',
};
</script>

<style lang="less" scoped>
li {
  list-style: none;
}

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

.panel {
  background-color: var(--color-bg-2);
  border-radius: 4px;
  overflow: auto;
}

.toolBar {
  display: flex;
  padding: 20px;
  align-items: center;

  .toolBarTitle {
    display: flex;
    align-items: center;
    width: 180px;
    color: #101828;
    font: 16px Inter;
  }

  .toolBarBtns {
    margin-left: 20px;
  }

  .toolBarAddBtn {
    margin-left: 30px;
  }
}
</style>