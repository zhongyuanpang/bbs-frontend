<script setup lang="ts">
definePageMeta({
  layout: false
});
import {ref} from 'vue'
import {menuList} from "./toolData"

const collapsed = ref(false);
const iconUrl = ref('https://tdesign.gtimg.com/site/baseLogo-light.png');

// 默认选中
const defaultActive = ref<string>("AI创作平台")

const changeCollapsed = () => {
  collapsed.value = !collapsed.value;
  iconUrl.value = collapsed.value
      ? 'https://oteam-tdesign-1258344706.cos.ap-guangzhou.myqcloud.com/site/logo%402x.png'
      : 'https://tdesign.gtimg.com/site/baseLogo-light.png';
};

// 选中事件
const changeHandler = (active: string) => {
  defaultActive.value = active
};

// 回到主页
const goHome = () => {
  navigateTo('/')
}
</script>

<template>

  <t-layout>
    <!--region  < 左侧导航栏 > -->
    <t-aside style="border-top: 1px solid var(--component-border)">
      <t-menu theme="dark"
              :default-value="defaultActive"
              :collapsed="collapsed"
              expand-mutex
              height="550px"
              @change="changeHandler">
        <template #logo>
          <img :width="collapsed ? 35 : 136" :src="iconUrl" style="margin-left: 25px" alt="logo"/>
        </template>
        <t-menu-group title="">
          <t-submenu v-for="(item,index) in menuList" :key="index" :value="item.name" :title="item.name" value="2-1">
            <template #icon>
              <t-icon :name="item.icon"/>
            </template>
            <template v-if="item.children">
              <t-menu-item v-for="(citem,cindex) in item.children" :key="cindex" :value="citem.name">{{citem.name}}</t-menu-item>
            </template>
          </t-submenu>
        </t-menu-group>
        <template #operations>
          <t-button class="t-demo-collapse-btn" variant="text" shape="square" @click="changeCollapsed">
            <template #icon>
              <t-icon name="view-list"/>
            </template>
          </t-button>
        </template>
      </t-menu>
    </t-aside>
    <!--endregion  -->

    <!--region  < 右侧头部、内容 > -->
    <t-layout style="height: 100vh">
      <!--region  < 头部 >  -->
      <t-header>
        <t-head-menu theme="dark" value="item" height="120px">
<!--          <template #logo>-->
<!--            <img width="136" style="margin-left: 20px" class="logo"-->
<!--                 src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo"/>-->
<!--          </template>-->

          <template #operations>
            <a href="javascript:;" @click="goHome">
              <t-icon class="t-menu__operations-icon" name="home"/>
            </a>
          </template>
        </t-head-menu>
      </t-header>
      <!--endregion -->

      <!--region  < 内容 >  -->
      <t-content theme="dark">
        <div></div>
      </t-content>
      <!--endregion  -->

      <!--region  < 脚部 >  -->
      <t-footer>Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights Reserved</t-footer>
      <!--endregion -->
    </t-layout>
    <!--endregion -->
  </t-layout>
</template>

<style lang="scss" scoped>

</style>
