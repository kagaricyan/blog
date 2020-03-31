<template>
  <mu-drawer :docked="false" :open.sync="params.openSideBar">
    <mu-list toggle-nested>
      <template v-for="item in params.sideBarMenus">
        <mu-list-item button nested :open="item.on" @toggle-nested="toggleSideBarMenus(item)">
          <mu-list-item-action>
            <mu-icon :value="item.icon"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>{{item.title}}</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
          </mu-list-item-action>
          <template v-for="i in item.menus">
            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>{{i.name}}</mu-list-item-title>
            </mu-list-item>
          </template>
        </mu-list-item>
      </template>
    </mu-list>
  </mu-drawer>
</template>

<script>
  export default {
    name: "SideBar",
    props: {
      params: {
        type: Object,
        default: () => ({
          openSideBar: false,
          sideBarMenus:[]
        })
      }
    },
    methods:{
      toggleSideBarMenus(res){
        this.params.sideBarMenus.forEach(item=>item.on=item.key===res.key)
      }
    }
  }
</script>

<style lang="stylus" scoped>
</style>