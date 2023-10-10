<script setup lang='ts'>
// import { switchImg} from '@/api/index'
import {ref,onMounted,onBeforeUnmount} from 'vue'

definePageMeta({
  layout: "custom",
});
// 键盘按下c键总数
const num = ref<number>(0)

// 背景图片
let bgImg = ref<string>("https://pic5.58cdn.com.cn/nowater/webim/big/n_v24a973e9eb1094e41ba72d15a43d5c0f8.png")
const islogin = ref(null)

onMounted(()=>{
  if(localStorage.getItem("bgImg")){
    bgImg.value = localStorage.getItem("bgImg")
  }
  // window.addEventListener("keydown", this.clickOther);
})

onBeforeUnmount(()=>{
  // this.num = 0;
  // window.removeEventListener('keydown', this.clickOther);
})

function clickOther(event: { keyCode: number; }) {
  if(event.keyCode == 67){
    num.value++;
    if(num.value === 5){
      num.value = 0
      // switchImg().then(res=>{
      //   this.bgImg = res.data
      //   localStorage.setItem("bgImg",res.data)
      // })
    }
  }
}
</script>

<template>
    <div class="container-fluid index_box" :style="{'background-image': 'url('+ bgImg +')'}">
        <div class="welcome_box container">
            <div class="line1">
                <el-icon><MoonNight /></el-icon>&nbsp;LPYYDS
            </div>
            <div class="line2">
                授人以鱼不如 授人以渔
            </div>
            <div class="line3">
                凡是能杀死你的，最终都会让你变强
            </div>
            <div class="line4">
                <a href="./login">
                    <p>
                        <span class="bg"></span>
                        <span class="base"></span>
                        <span class="text">登录</span>
                    </p>
                </a>
                <a class="white" href="./home">
                    <p>
                        <span class="bg"></span>
                        <span class="base"></span>
                        <span class="text"><i class="el-icon-document-copy"></i> 文章</span>
                    </p>
                </a>
                <a class="transparent" href="./about">
                    <p>
                        <span class="bg"></span>
                        <span class="base"></span>
                        <span class="text"><i class="el-icon-moon-night"></i> 关于我</span>
                    </p>
                </a>
            </div>
            <div class="info">
                连续按5下 【C】 键可切换背景
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/pages/index/index.scss";
</style>
