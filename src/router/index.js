import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

Vue.use(Router)

/* layout */
import Layout from '../views/layout/Layout'
import WhiteList from '../views/listManagement/cheatList/whiteList'
import GreyList from '../views/listManagement/cheatList/greyList'
import BlackList from '../views/listManagement/cheatList/blackList'
import OverdueList from '../views/listManagement/overdueList/overdueList'

/**
* icon : the icon show in the sidebar
* hidden : if `hidden:true` will not show in the sidebar
* redirect : if `redirect:noredirect` will no redirct in the levelbar
* noDropdown : if `noDropdown:true` will has no submenu
* meta : { role: ['admin'] }  will control the page role
**/
export const constantRouterMap = [
    { path: '/login', component: _import('login/index'), hidden: true },
    { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
    { path: '/404', component: _import('errorPage/404'), hidden: true },
    { path: '/401', component: _import('errorPage/401'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [{ path: 'dashboard', component: _import('dashboard/index') }]
  }
  // {
  //   path: '/introduction',
  //   component: Layout,
  //   redirect: '/introduction/index',
  //   icon: 'people',
  //   noDropdown: true,
  //   children: [{ path: 'index', component: _import('introduction/index'), name: '简述' }]
  // }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  // bangsun
  {
    path: '/businessMarket',
    component: Layout,
    redirect: '/businessMarket/riskMap',
    name: '业务大盘',
    icon: 'clipboard',
    children: [
      { path: 'riskMap', component: _import('businessMarket/riskMap'), name: '风险地图' }
    ]
  },
  {
    path: '/riskAlarmManagement',
    component: Layout,
    redirect: '/riskAlarmManagement/checkTable',
    name: '风险预警管理',
    icon: 'bug',
    children: [
      { path: 'riskCheck', component: _import('riskAlarmManagement/checkTable'), name: '风险预警核查管理' }
    ]
  },
  {
    path: '/creditAuditManagement',
    component: Layout,
    redirect: '/creditAuditManagement/manualAudit',
    name: '信用审核管理',
    icon: 'table',
    children: [
      { path: 'manaualAudit', component: _import('creditAuditManagement/manualAudit'), name: '人工信用审核管理' },
      { path: 'systemAudit', component: _import('creditAuditManagement/systemAudit'), name: '系统自动审核管理' }
    ]
  },
  {
    path: '/monitorPlatform',
    component: Layout,
    redirect: '/monitorPlatform/policy',
    name: '监控平台',
    icon: 'eye',
    children: [
      { path: 'policy', component: _import('monitorPlatform/policy'), name: '决策流监控' }
    ]
  },
  {
    path: '/listManagement',
    component: Layout,
    redirect: 'noredirect',
    name: '名单管理',
    icon: 'people',
    children: [
      {
        path: '/listManagement/cheatList',
        component: Layout,
        redirect: '/listManagement/cheatList/whiteList',
        name: '欺诈',
        icon: 'table',
        children: [
          { path: 'whiteList', component: WhiteList, name: '白名单' },
          { path: 'greyList', component: GreyList, name: '灰名单' },
          { path: 'blackList', component: BlackList, name: '黑名单' }
        ]
      },
      {
        path: '/listManagement/overdueList',
        component: Layout,
        redirect: 'noredirect',
        name: '逾期',
        icon: 'table',
        children: [
          { path: 'overdueList', component: OverdueList, name: '逾期名单' }
        ]
      }
    ]
  },
  {
    path: '/infoQuery',
    component: Layout,
    redirect: Layout,
    name: '信息查询管理',
    icon: 'icon',
    children: [
      { path: 'userInfo', component: _import('infoQuery/userInfo'), name: '用户信息' },
      { path: 'physicsInfo', component: _import('infoQuery/physicsInfo'), name: '物理信息' },
      { path: 'applyInfo', component: _import('infoQuery/applyInfo'), name: '申请信息' }
    ]
  },
  {
    path: '/systemSettings',
    component: Layout,
    redirect: Layout,
    name: '系统设置',
    icon: 'user',
    children: [
      { path: 'user', component: _import('systemSettings/user'), name: '系统用户' },
      { path: 'role', component: _import('systemSettings/role'), name: '系统角色' },
      { path: 'settings', component: _import('systemSettings/settings'), name: '系统配置' }
    ]
  }
  // demo
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/index',
  //   name: '权限测试',
  //   icon: 'lock',
  //   meta: { role: ['admin'] },
  //   noDropdown: true,
  //   children: [{ path: 'index', component: _import('permission/index'), name: '权限测试页', meta: { role: ['admin'] }}]
  // },
  // {
  //   path: '/icon',
  //   component: Layout,
  //   icon: 'icon',
  //   noDropdown: true,
  //   children: [{ path: 'index', component: _import('svg-icons/index'), name: 'icons' }]
  // },
  // {
  //   path: '/components',
  //   component: Layout,
  //   redirect: '/components/index',
  //   name: '组件',
  //   icon: 'component',
  //   children: [
  //     { path: 'index', component: _import('components/index'), name: '介绍 ' },
  //     { path: 'tinymce', component: _import('components/tinymce'), name: '富文本编辑器' },
  //     { path: 'markdown', component: _import('components/markdown'), name: 'Markdown' },
  //     { path: 'jsoneditor', component: _import('components/jsonEditor'), name: 'JSON编辑器' },
  //     { path: 'dndlist', component: _import('components/dndList'), name: '列表拖拽' },
  //     { path: 'splitpane', component: _import('components/splitpane'), name: 'SplitPane' },
  //     { path: 'avatarupload', component: _import('components/avatarUpload'), name: '头像上传' },
  //     { path: 'dropzone', component: _import('components/dropzone'), name: 'Dropzone' },
  //     { path: 'sticky', component: _import('components/sticky'), name: 'Sticky' },
  //     { path: 'countto', component: _import('components/countTo'), name: 'CountTo' },
  //     { path: 'mixin', component: _import('components/mixin'), name: '小组件' },
  //     { path: 'backtotop', component: _import('components/backToTop'), name: '返回顶部' }
  //   ]
  // },
  // {
  //   path: '/charts',
  //   component: Layout,
  //   redirect: '/charts/index',
  //   name: '图表',
  //   icon: 'chart',
  //   children: [
  //     { path: 'index', component: _import('charts/index'), name: '介绍' },
  //     { path: 'keyboard', component: _import('charts/keyboard'), name: '键盘图表' },
  //     { path: 'keyboard2', component: _import('charts/keyboard2'), name: '键盘图表2' },
  //     { path: 'line', component: _import('charts/line'), name: '折线图' },
  //     { path: 'mixchart', component: _import('charts/mixChart'), name: '混合图表' }
  //   ]
  // },
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: '综合实例',
  //   icon: 'example',
  //   children: [
  //     {
  //       path: '/example/table',
  //       component: _import('example/table/index'),
  //       redirect: '/example/table/table',
  //       name: 'Table',
  //       icon: 'table',
  //       children: [
  //         { path: 'dynamictable', component: _import('example/table/dynamictable/index'), name: '动态table' },
  //         { path: 'dragtable', component: _import('example/table/dragTable'), name: '拖拽table' },
  //         { path: 'inline_edit_table', component: _import('example/table/inlineEditTable'), name: 'table内编辑' },
  //         { path: 'table', component: _import('example/table/table'), name: '综合table' }
  //       ]
  //     },
  //     { path: 'form/edit', icon: 'form', component: _import('example/form'), name: '编辑Form', meta: { isEdit: true }},
  //     { path: 'form/create', icon: 'form', component: _import('example/form'), name: '创建Form' },
  //     { path: 'tab/index', icon: 'tab', component: _import('example/tab/index'), name: 'Tab' }
  //   ]
  // },
  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: '错误页面',
  //   icon: '404',
  //   children: [
  //     { path: '401', component: _import('errorPage/401'), name: '401' },
  //     { path: '404', component: _import('errorPage/404'), name: '404' }
  //   ]
  // },
  // {
  //   path: '/errlog',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'errlog',
  //   icon: 'bug',
  //   noDropdown: true,
  //   children: [{ path: 'log', component: _import('errlog/index'), name: '错误日志' }]
  // },
  // {
  //   path: '/excel',
  //   component: Layout,
  //   redirect: '/excel/download',
  //   name: 'excel',
  //   icon: 'excel',
  //   children: [
  //     { path: 'download', component: _import('excel/index'), name: 'export excel' },
  //     { path: 'download2', component: _import('excel/selectExcel'), name: 'export selected' },
  //     { path: 'upload', component: _import('excel/uploadExcel'), name: 'upload excel' }
  //   ]
  // },
  // {
  //   path: '/zip',
  //   component: Layout,
  //   redirect: '/zip/download',
  //   name: 'zip',
  //   icon: 'zip',
  //   children: [
  //     { path: 'download', component: _import('zip/index'), name: 'export zip' }
  //   ]
  // },
  // {
  //   path: '/theme',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   name: 'theme',
  //   icon: 'theme',
  //   noDropdown: true,
  //   children: [{ path: 'index', component: _import('theme/index'), name: '换肤' }]
  // },
  // {
  //   path: '/clipboard',
  //   component: Layout,
  //   redirect: 'noredirect',
  //   icon: 'clipboard',
  //   noDropdown: true,
  //   children: [{ path: 'index', component: _import('clipboard/index'), name: 'clipboard' }]
  // },

  // { path: '*', redirect: '/404', hidden: true }
]
