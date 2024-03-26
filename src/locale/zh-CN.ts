import localeLogin from '@/views/login/locale/zh-CN';
import localeMessageBox from '@/components/message-box/locale/zh-CN';

import localeWorkplace from '@/views/dashboard/workplace/locale/zh-CN';
import localeContainer from '@/views/local/containers/locale/zh-CN';

import localeSettings from './zh-CN/settings';

export default {
  'project.title': '桌面管理系统',
  'menu.local': '本地',
  'menu.networks': '网络',
  'menu.stacks': '栈',
  'menu.volumes': '数据卷',
  'menu.images': '镜像',
  'menu.containers': '容器',
  'menu.containerList': '容器列表',
  'menu.containerDetails': '容器详情',
  'menu.dashboard': '仪表盘',
  'menu.server.dashboard': '仪表盘-服务端',
  'menu.server.workplace': '工作台-服务端',
  'menu.server.monitor': '实时监控-服务端',
  'menu.list': '列表页',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'menu.arcoWebsite': 'Arco Design',
  'menu.faq': '常见问题',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  ...localeSettings,
  ...localeLogin,
  ...localeWorkplace,
  ...localeMessageBox,
  ...localeContainer,
};
