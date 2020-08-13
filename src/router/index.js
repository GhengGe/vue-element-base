import Vue from 'vue'
import Router from 'vue-router'
// import login from '@/views/login/login'
// import home from '@/views/home/home'
// import layout from '@/views/layout/index'
// import userData from '@/views/userInfo/userData'
// import user from '@/views/user/user'
// import system from '@/views/system/system'
// import role from '@/views/system/role/role'
// import department from '@/views/system/department/department'
// import dictionaries from '@/views/system/dictionaries/dictionaries'
// import menu from '@/views/system/menu/menu'
// import signIn from '@/views/system/signIn/signIn'
// import business from '@/views/system/business/business'
// import monitor from '@/views/system/monitor/monitor'
// import notice from '@/views/system/notice/notice'
// import statistics from '@/views/statistics/statistics'
// import vHistory from '@/views/statistics/vHistory/vHistory'
// import iForm from '@/views/statistics/iForm/iForm'
// import eLink from '@/views/statistics/eLink/eLink'
// import model from '@/views/model/model'
// import mSubmit from '@/views/model/mSubmit/mSubmit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login',
      component: () =>
      import('@/views/login/login')
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
      import('@/views/login/login'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/home',
      component: () =>
      import('@/views/layout/index'),
      children: [
        { path: '/home',
          name: 'home',
          component: () =>
          import('@/views/home/home'),
          meta: {
            title: '通知'
          }
        },
        { path: '/userData',
          name: 'userData',
          component: () =>
          import('@/views/userInfo/userData'),
          meta: {
            title: '个人中心'
          }
        },
        { path: '/table',
          name: 'table',
          component: () =>
          import('@/views/table/table'),
          children: [
            { path: '/btable',
              name: 'btable',
              component: () =>
              import('@/views/table/bTable/bTable'),
              meta: {
                title: '基本表格'
              }
            },
            { path: '/tExcel',
              name: 'tExcel',
              component: () =>
              import('@/views/table/tExcel/tExcel'),
              meta: {
                title: '导为Excel'
              }
            },
            { path: '/tJson',
              name: 'tJson',
              component: () =>
              import('@/views/table/tJson/tJson'),
              meta: {
                title: '导为JSON'
              }
            }
          ]
        },
        { path: '/user',
          name: 'user',
          component: () =>
              import('@/views/user/user'),
          meta: {
            title: '用户管理'
          }
        },
        { path: '/tab',
          name: 'tab',
          component: () =>
              import('@/views/tab/tab'),
          meta: {
            title: 'tab切换'
          }
        },
        { path: '/system',
          name: 'system',
          component: () =>
          import('@/views/system/system'),
          children: [
            { path: '/role',
              name: 'role',
              component: () =>
              import('@/views/system/role/role'),
              meta: {
                title: '角色管理'
              }
            },
            { path: '/menu',
              name: 'menu',
              component: () =>
              import('@/views/system/menu/menu'),
              meta: {
                title: '菜单管理'
              }
            },
            { path: '/notice',
              name: 'notice',
              component: () =>
              import('@/views/system/notice/notice'),
              meta: {
                title: '通知管理'
              }
            }
          ]
        }
      ]
    }
  ]
})
