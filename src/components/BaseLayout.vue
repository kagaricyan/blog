<template>
  <div class="base-layout">
    <app-bar :params="renderData"></app-bar>
      <side-bar :params="renderData"></side-bar>
    <div class="g-main">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import AppBar from './AppBar'
  import SideBar from '@/components/SideBar'
  import sideBarMenus from '@/assets/js/sideBarMenus'

  export default {
    name: "BaseLayout",
    components: {
      AppBar,
      SideBar
    },
    data() {
      return {
        renderData: {
          openSideBar: false,
          sideBarMenus
        }
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .base-layout{
    display flex
    flex-direction: column
    overflow: hidden
    width: 100%
    height: 100%
    .g-main{
      display flex
      overflow: auto
      flex-grow 1
    }
  }
</style>