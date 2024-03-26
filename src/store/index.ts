import { createPinia } from 'pinia';
import useAppStore from './modules/app';
import useUserStore from './modules/user';
import useTabBarStore from './modules/tab-bar';
import useContainerStore from './modules/container';

const pinia = createPinia();

export { useAppStore, useUserStore, useTabBarStore, useContainerStore };
export default pinia;
