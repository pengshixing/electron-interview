export interface IRecommendSkill {
  uid: string;
  label: string;
  styles: {
    bg: string;
    font: string;
  };
}

const colors = [
  {
    // 绿色
    bg: '#f0f8ec',
    font: '#78c74f',
  },
  {
    // 灰色
    bg: '#f4f4f4',
    font: '#a3a7ab',
  },
  {
    // 橙色
    bg: '#fdf6ec',
    font: '#f0c588',
  },
  {
    // 蓝色
    bg: '#ecf5ff',
    font: '#67afff',
  },
  {
    // 红色
    bg: '#fef0ef',
    font: '#f88c8b',
  },
];

import { createUID } from '../utils';

const RecommendSkill: IRecommendSkill[] = [
  {
    label: 'Vue.js',
    styles: colors[0],
  },
  {
    label: '数据双向绑定原理',
    styles: colors[2],
  },
  {
    label: 'React.js',
    styles: colors[4],
  },
  {
    label: 'VScode',
    styles: colors[2],
  },
  {
    label: 'Angular.js',
    styles: colors[4],
  },
  {
    label: 'Webpack',
    styles: colors[3],
  },
  {
    label: 'React Hooks',
    styles: colors[2],
  },
  {
    label: '开源',
    styles: colors[0],
  },
  {
    label: '了解 MYSQL',
    styles: colors[4],
  },
  {
    label: '微信小程序',
    styles: colors[0],
  },
  {
    label: 'Taro',
    styles: colors[4],
  },
  {
    label: '微信公众号开发',
    styles: colors[3],
  },
  {
    label: 'Babel',
    styles: colors[1],
  },
  {
    label: 'TypeScript',
    styles: colors[4],
  },
  {
    label: 'Electron',
    styles: colors[2],
  },
  {
    label: 'Server',
    styles: colors[2],
  },
  {
    label: 'ESLint',
    styles: colors[3],
  },
  {
    label: '跨域解决',
    styles: colors[0],
  },
  {
    label: '自动化测试',
    styles: colors[4],
  },
  {
    label: 'Linux',
    styles: colors[2],
  },
  {
    label: 'Git',
    styles: colors[0],
  },
  {
    label: '设计模式',
    styles: colors[1],
  },
  {
    label: 'Redis',
    styles: colors[4],
  },
  {
    label: '数据库优化',
    styles: colors[3],
  },
  {
    label: '正则表达式',
    styles: colors[1],
  },
  {
    label: '具备良好的网络基础知识',
    styles: colors[0],
  },
  {
    label: '数据存储',
    styles: colors[4],
  },
  {
    label: 'Echarts',
    styles: colors[3],
  },
].map((item) => ({ ...item, uid: createUID() }));

export default RecommendSkill;
