<template>
  <div>
    <div class="menu_photo">
      <div class="photo"></div>
    </div> 
    <el-menu mode="vertical" theme="dark" unique-opened :default-active="$route.path" :collapse="isCollapse">
      <sidebar-item :routes='permission_routers'></sidebar-item>
    </el-menu>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
<style scoped>
.menu_photo {
  padding: 1px;
  height:100px; 
  background-color: #324157
}
.menu_photo .photo {
  width: 50px;
  height: 50px;
  margin: 25px auto 0;
  border-radius: 25px;
  background: url('../../assets/bg.jpg') no-repeat center / cover;
}
</style>

