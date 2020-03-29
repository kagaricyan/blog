<template>
  <div class="base-layout">
    <app-bar :params="renderData"></app-bar>
    <side-bar :params="renderData"></side-bar>
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
    overflow: auto
    width: 100%
    min-height: 100%
  }
</style>