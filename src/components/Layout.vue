<template>
  <el-container style="height: 100vh">
    <el-aside width="200px" style="background-color: #334455; color: white">
      <div class="logo">Admin</div>
      <Sidebar />
    </el-aside>

    <el-container>
      <el-header style="display: flex; justify-content: space-between; align-items: center">
        <div>欢迎，{{ authStore.username }}</div>
        <el-button @click="logout" size="small" type="danger">退出登录</el-button>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store/auth'
import Sidebar from '@/components/Sidebar.vue'

const router = useRouter()
const authStore = useAuthStore()

const logout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<style scoped>
.logo {
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: #2c3e50;
}
.el-header {
  background-color: #ffffff;
  border-bottom: 1px solid #eee;
}
</style>
