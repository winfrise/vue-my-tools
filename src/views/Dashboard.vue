<template>
  <h2>仪表盘</h2>
  <p>当前用户：{{ authStore.userInfo?.name }}</p>
  <p>Token: {{ authStore.token }}</p>
</template>

<script setup>
import { useAuthStore } from '@/store/auth'

const authStore = useAuthStore()
</script>

<style scoped>

</style>
