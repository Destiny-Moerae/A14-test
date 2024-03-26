<template>
  <div class="container">
    <div class="content panel"></div>
  </div>
</template>

<script setup lang='ts' name='details'>
import { useRoute } from 'vue-router';
import { getContainerById } from '@/api/container'

const route = useRoute()
const getResult = async () => {
  const result = await getContainerById(route.params)
  return result
}





</script>

<style scoped>
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
</style>