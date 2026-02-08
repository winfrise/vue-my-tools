<!-- src/components/Sidebar.vue -->
<template>
  <el-scrollbar>
    <el-menu
      :default-active="activeMenu"
      background-color="#334455"
      text-color="#bfcbd9"
      active-text-color="#409eff"
      :collapse="false"
      :unique-opened="true"
      router
    >
      <sidebar-item
        v-for="route in sidebarRoutes"
        :key="route.path"
        :item="route"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="jsx" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SidebarItem from './SidebarItem.vue'

// 获取当前路由用于高亮
const route = useRoute()
const router = useRouter()

// 从 router 中提取需要显示的菜单路由
const sidebarRoutes = computed(() => {

  return router.options.routes.filter(item => !item.hidden)
})

// 当前激活的菜单（支持嵌套路由高亮）
const activeMenu = computed(() => {
  const { path } = route
  // 如果是根路径，激活首页
  if (path === '/') return '/'
  return path
})

</script>

<style scoped>
:deep(.el-menu) {
  border-right: none;
}
</style>