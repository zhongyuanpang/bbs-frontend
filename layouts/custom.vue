<template>
    <div class="z-layout">
        <div class="z-topBar">
            <NewHeader/>
        </div>
        <div class="z-main">
            <transition name="page" mode="out-in">
                <slot class="nuxt" />
            </transition>
        </div>
        <div class="z-bottom">
            <NewFooter/>
        </div>
    </div>
</template>


<script lang="ts" setup>
import NewHeader from "./NewHeader.vue";
import NewFooter from "./NewFooter.vue";
</script>

<style lang="scss" scoped>
$nav-height: 50px;
$footer-height: 100px;
$full-height: calc(100vh - $nav-height);

html {
  font-family: PingFang SC;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.nuxt {
  position: relative;
  width: 100%;
  height:100%;
  min-height: 100vh;
  background-color: #f6f6f6;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

/* Chrome/Safari */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #666;
  border-radius: 5px;
}
/* Firefox */
* {
  scrollbar-width: thin;
}
*::-webkit-scrollbar {
  display: none;
}
*::-moz-scrollbar {
  width: 8px;
}
*::-moz-scrollbar-thumb {
  background-color: #666;
  border-radius: 5px;
}

.z-layout {
  margin: 0;
  padding: 0;
}

.z-topBar {
  //border-bottom: 1px solid #e5e5e5;
}

.z-main {
  //margin-top: $nav-height;
  width: 100%;
  min-height: 100vh;
}

.z-bottom{
  //height: $footer-height;
}
</style>
