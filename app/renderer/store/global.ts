import { create } from 'zustand'

// 状态接口定义
interface State {
  appName: string
}

type Action = {
  updateAppName: (token: string) => void
}

export const useGlobalStore = create<State & Action>((set) => ({
  appName: '简历应用平台',
  updateAppName: () => set((state) => ({ appName: state.appName }))
}))

