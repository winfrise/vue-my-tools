<!-- src/components/SidebarItem.vue -->
<template>
  <div v-if="!item.meta?.hidden">
    <!-- 无子路由：菜单项 -->
    <el-menu-item
      v-if="!hasChildren(item)"
      :index="resolvePath(item.path)"
      @click="handleClick(item)"
    >
      <el-icon>
        <component :is="item.meta?.icon || 'Menu'" />
      </el-icon>
      <span>{{ item.meta?.title }}</span>
    </el-menu-item>

    <!-- 有子路由：子菜单 -->
    <el-sub-menu
      v-else
      :index="resolvePath(item.path)"
    >
      <template #title>
        <el-icon>
          <component :is="item.meta?.icon || 'Menu'" />
        </el-icon>
        <span>{{ item.meta?.title }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(item.path)"
      />
    </el-sub-menu>
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  item: { type: Object, required: true },
  basePath: { type: String, default: '' }
})

const router = useRouter()
const instance = getCurrentInstance()

const hasChildren = (route) => {
  return route.children && route.children.length > 0
}

const resolvePath = (path) => {
  let fullPath = props.basePath ? `${props.basePath}/${path}` : path
  // 移除重复斜杠
  fullPath = fullPath.replace(/\/+/g, '/')
  // 确保以 / 开头
  if (!fullPath.startsWith('/')) {
    fullPath = '/' + fullPath
  }
  return fullPath
}

const handleClick = (item) => {
  if (item.path && !hasChildren(item)) {
    router.push(resolvePath(item.path))
  }
}
</script>