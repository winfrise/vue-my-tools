const TOKEN_KEY = 'admin_token'
const USER_INFO_KEY = 'admin_user_info'

export const storage = {
  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
  },
  getToken() {
    return localStorage.getItem(TOKEN_KEY)
  },
  removeToken() {
    localStorage.removeItem(TOKEN_KEY)
  },
  setUserInfo(user) {
    localStorage.setItem(USER_INFO_KEY, JSON.stringify(user))
  },
  getUserInfo() {
    const str = localStorage.getItem(USER_INFO_KEY)
    return str ? JSON.parse(str) : null
  },
  removeUserInfo() {
    localStorage.removeItem(USER_INFO_KEY)
  },
  clearAll() {
    this.removeToken()
    this.removeUserInfo()
  }
}
