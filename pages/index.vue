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

<script>
// import { switchImg} from '@/api/index'
definePageMeta({
    layout: "custom",
});
export default {
    name:'index',
    data(){
        return{
            // 键盘按下c键总数
            num:0,
            // 背景图片
               bgImg:null,
            islogin:null
        }
    },
    mounted(){
        if(localStorage.getItem("bgImg") == "" || localStorage.getItem("bgImg") == undefined){
            this.bgImg = "https://pic4.58cdn.com.cn/nowater/webim/big/n_v2de74646f6a2c4900930636be8584feb9.jpg"
        }else{
            this.bgImg = localStorage.getItem("bgImg")
        }
        // window.addEventListener("keydown", this.clickOther);
    },
    methods:{
        clickOther(e) {
            if(e.keyCode == 67){
                this.num++;
                if(this.num == 5){
                   this.num = 0
                   switchImg().then(res=>{
                      this.bgImg = res.data
                      localStorage.setItem("bgImg",res.data)
                   })
                }
            }
        }
    },
    beforeDestroy() {  // 实例销毁之前对点击事件进行解绑
      // this.num = 0;
      // window.removeEventListener('keydown', this.clickOther);
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/pages/index/index.scss";
</style>
