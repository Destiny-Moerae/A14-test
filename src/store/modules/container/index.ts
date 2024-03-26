import { defineStore } from 'pinia';
import { getContainerList, getContainerById } from '@/api/container';
import { container } from './types';

const useContainerStore = defineStore('container', {
  state: () => ({
    containers: [] as container[],
  }),
  getters: {},
  actions: {
    async containerList() {
      const result = await getContainerList();
      this.$patch((state) => {
        state.containers = result.data;
      });
      return result.data;
    },
    async containerById(params: any) {
      const result = await getContainerById(params);
      return result.data;
    },
  },
});
export default useContainerStore;
