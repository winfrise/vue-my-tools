import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'

const routes = [
  { path: '/login', component: Login, meta: {title: '登陆'} },
  { path: '/', component: Dashboard, meta: { title: '仪表盘', requiresAuth: true } },
      {
        path: '/custom-seal-generator',
        component: () => import('@/views/CustomSealGenerator/SealGenerator.vue'),
        name: 'CustomSealGenerator',
        meta: {
          title: '印章生成大师',
          icon: 'vi-cib:telegram-plane'
        }
      },
      {
        path: '/powerfull-video-player',
        component: () => import('@/views/CustomPowerfulVideoPlayer/VideoPlayerPage.vue'),
        name: 'CustomPowerfulVideoPlayer',
        meta: {
          title: '视频播放器',
          icon: 'vi-cib:telegram-plane'
        }
      },
      {
        path: '/video-cropper',
        component: () => import('@/views/CustomCropperVideo/CropperVideoPage.vue'),
        name: 'CropperVideoPage',
        meta: {
          title: '视频裁剪',
          icon: 'vi-cib:telegram-plane'
        }
      },
      {
        path: '/ffmpeg-generator',
        component: () => import('@/views/CustomFfmpegGenerator/FfmpegGenerator.vue'),
        name: 'FfmpegGenerator',
        meta: {
          title: 'Ffmpeg命令生成',
          icon: 'vi-cib:telegram-plane'
        }
      },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('admin_token')
  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else if (to.path === '/login' && token) {
    next('/')
  } else {
    next()
  }
})

export default router
