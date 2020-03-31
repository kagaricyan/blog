<template>
  <mu-appbar color="primary">
    <mu-button icon slot="left" @click="toggleSideBar">
      <mu-icon value="menu"></mu-icon>
    </mu-button>
    <template slot="right">
      <!--      <mu-text-field  class="u-search-box" icon="search"></mu-text-field>-->
      <mu-menu  open-on-hover>
        <mu-button icon>
          <mu-icon value="color_lens"></mu-icon>
        </mu-button>
        <mu-list slot="content">
          <mu-list-item button :ripple="false">
            <mu-list-item-action>
              <span class="u-color s-default"></span>
            </mu-list-item-action>
            <mu-list-item-title>默认</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false">
            <mu-list-item-action>
              <span class="u-color s-bilibili"></span>
            </mu-list-item-action>
            <mu-list-item-title>哔哩粉</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false">
            <mu-list-item-action>
              <span class="u-color s-dark"></span>
            </mu-list-item-action>
            <mu-list-item-title>Dark</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-menu>
      <mu-button icon @click="gotoGithub">
        <mu-icon value="feedback"></mu-icon>
      </mu-button>
    </template>
  </mu-appbar>
</template>

<script>
  export default {
    name: "AppBar",
    props: {
      params: {
        type: Object,
        default: () => ({
          openSideBar: false
        })
      }
    },
    methods: {
      toggleSideBar() {
        this.params.openSideBar = !this.params.openSideBar
      },
      gotoGithub(){
        window.open('https://github.com/kagari2613/blog/issues','_blank')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .mu-appbar {
    width: 100%
    flex-shrink 0
    .u-search-box {
      display inline-flex
      align-content center
      overflow: hidden
      width: 200px
      height: 32px
      color: #fff;
      background: hsla(0, 0%, 100%, .15);
    }
    .mu-menu {
      width: 48px
      height: 48px
    }
  }
  .u-color {
    display inline-block
    overflow: hidden
    width: 24px
    height: 24px
    border-radius 50%
    &.s-default{
      background-color: #2196f3
    }
    &.s-bilibili{
      background-color: #fb6299
    }
    &.s-dark{
      background-color: #fb6299
    }
  }

</style>