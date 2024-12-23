import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer'
import { set as lodashSet } from 'lodash/fp'

const state = {
  base: {
    avatar: '',
    username: '彭士兴',
    area: '重庆',
    school: '四川理工学院',
    major: '轻化工程',
    degree: '本科',
    hometown: '河南',
    onSchoolTime: {
      beginTime: '2013.09',
      endTime: '2017.06',
    },
  },
  contact: {
    phone: '173****6051',
    email: '2644378911@qq.com',
    github: 'https://github.com/pengshixing',
    juejin: 'https://juejin.cn/user/325111175184573',
  },
  work: {
    job: '前端工程师',
    city: '重庆｜成都',
    cityList: ['重庆', '成都'],
  },
  hobby: '唱、跳、rap、篮球',
  skill:
    '熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码｜熟悉 React，了解并使用 Hooks 特性｜阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库｜了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件｜了解 Electron，了解 Node.js 以及 Git 团队协作开发工具｜了解设计模式，对于特定场景，能采用合适的设计模式进行解决｜了解基于微信公众号应用开发，采用 Taro 开发微信小程序，具备良好的网络基础知识',
  skillList: [
    '熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码',
    '熟悉 React，了解并使用 Hooks 特性',
    '阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库',
    '了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件',
    '了解 Electron，了解 Node.js 以及 Git 团队协作开发工具',
    '了解设计模式，对于特定场景，能采用合适的设计模式进行解决',
    '了解基于微信公众号应用开发，采用 Taro 开发微信小程序，具备良好的网络基础知识',
  ],
  evaluation:
    '具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境|具有代码洁癖，前后端分离，自我学习能力强，对新技术具有钻研精神',
  evaluationList: [
    '具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境。',
    '具有代码洁癖，前后端分离，自我学习能力强，对新技术具有钻研精神',
  ],
  certificate: ['全国英语四级证书'],
  // schoolExperience: [
  //   {
  //     beginTime: '2015.09',
  //     endTime: '2016.09',
  //     post: '文艺部会长',
  //     department: '校团委学生会',
  //     content:
  //       '计划、组织、协调各年级学生组织的文艺和文化娱乐活动｜承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目',
  //     parseContent: [
  //       '计划、组织、协调各年级学生组织的文艺和文化娱乐活动',
  //       '承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目',
  //     ],
  //     date: 1621145137865,
  //   },
  // ],
  workExperience: [
    {
      beginTime: '2023.11',
      endTime: '至今',
      post: '前端工程师',
      department: 'web前端',
      content:
        '负责日常开发，迭代，其他的没啥介绍了',
      parseContent: [
        '负责日常开发，迭代，其他的没啥介绍了',
      ],
      date: 1621145137865,
    },
  ],
  projectExperience: [
    {
      beginTime: '2024.10',
      endTime: '2024.11',
      projectName: '可视化简历平台',
      post: '前端工程师',
      content:
        'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版｜通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档',
      parseContent: [
        'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版',
        '通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档',
      ],
      date: 1621145137865,
    },
  ],
};

export type State = typeof state;

export type StateKeyType = keyof State

export type Action = {
  updateStore: <K extends keyof State, ValueType>(key: K, value: ValueType | State[K]) => void;
};
const useResumeModel = create(
  immer<State & Action>(set => ({
    ...state,
    updateStore: (key, value) => set(state => lodashSet(key, value)(state)),
  }))
);

export default useResumeModel;
