import { defineStore } from 'pinia'
import { loginAPI } from '@/api/auth'
import { storage } from '@/utils/storage'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: storage.getToken() || '',
    userInfo: storage.getUserInfo() || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    username: (state) => state.userInfo?.name || '游客'
  },
  actions: {
    async login(credentials) {
      try {
        const res = await loginAPI(credentials)
        this.token = res.token
        this.userInfo = res.user
        storage.setToken(res.token)
        storage.setUserInfo(res.user)
        return Promise.resolve()
      } catch (error) {
        return Promise.reject(error)
      }
    },
    logout() {
      this.token = ''
      this.userInfo = null
      storage.clearAll()
    }
  }
})
