<template>
    <!-- 粘性导航 -->
    <header>
        <!-- 左侧 -->
        <div class="left">
            <!-- logo -->
            <a href="#" class="logo">
                <img src="https://pic3.58cdn.com.cn/nowater/webim/big/n_v2b60501fb846d4a1abcb3e85c4716770d.png" alt="">
                laopang
            </a>
            <!-- 跳转菜单 -->
            <div class="menu">
                <NuxtLink :to="{name:'home'}" :class="{ active : isActive == 0 }" v-on:click.native="isactive(0)">江湖</NuxtLink>
                <NuxtLink :to="{name:'about'}" :class="{ active : isActive == 2 }" v-on:click.native="isactive(2)">关于</NuxtLink>
                <NuxtLink :to="{name:'ai'}" :class="{ active : isActive == 3 }" v-on:click.native="isactive(3)">AI</NuxtLink>
            </div>
        </div>

        <!-- 右侧 -->
        <div class="right">
            <!--region  【搜索】 -->
            <div class="search-box">
                <div class="search">
                    <input type="text" placeholder="想搜啥?">
                    <a class="search-btn">
                        <svg t="1628904762300" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2039" width="28" height="28"><path d="M400.696889 801.393778A400.668444 400.668444 0 1 1 400.696889 0a400.668444 400.668444 0 0 1 0 801.393778z m0-89.031111a311.637333 311.637333 0 1 0 0-623.331556 311.637333 311.637333 0 0 0 0 623.331556z" fill="#d81e06" p-id="2040"></path><path d="M667.904 601.998222l314.766222 314.823111-62.919111 62.976-314.823111-314.823111z" fill="#d81e06" p-id="2041"></path></svg>
                    </a>
                </div>
            </div>
            <!--endregion -->


            <!--region  【登录信息】 -->
            <div class="user_login">
<!--                <div v-if="isLogin" style="display: flex; align-items: center">-->
<!--                    <div class="dropbtn">-->
<!--                        <el-avatar-->
<!--                            :src="user.avatar"-->
<!--                        ></el-avatar>-->
<!--                        <i class="el-icon-caret-bottom"></i>-->
<!--                    </div>-->

<!--                    <div class="dropdown-content">-->
<!--                        <nuxt-link :to="{ name: 'me' }" v-on:click.native="isactive(5)" :class="{ active: isActive == 5 }">-->
<!--                            <div class="list_1">-->
<!--                                <i class="el-icon-s-home"></i> 进入主页-->
<!--                            </div>-->
<!--                        </nuxt-link>-->
<!--                        <div class="nickname">{{ user.nickname }}</div>-->

<!--                        <div class="list_2">-->
<!--                            <div>-->
<!--                                <div>0</div>-->
<!--                                <div>文章</div>-->
<!--                            </div>-->
<!--                            <div>-->
<!--                                <div>0</div>-->
<!--                                <div>关注</div>-->
<!--                            </div>-->
<!--                            <div>-->
<!--                                <div>0</div>-->
<!--                                <div>粉丝</div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="list_3">-->
<!--                            <nuxt-link :to="{ name: 'me' }" style="color: #858585">-->
<!--                                <div class="user_home">-->
<!--                                    <span><i class="el-icon-s-home"></i> 个人中心</span>-->
<!--                                </div>-->
<!--                            </nuxt-link>-->
<!--                            <nuxt-link :to="{ name: 'me' }" style="color: #858585">-->
<!--                                <div class="user_account">-->
<!--                                    <div><i class="el-icon-user-solid"></i> 账号</div>-->
<!--                                    <div>12345</div>-->
<!--                                </div>-->
<!--                            </nuxt-link>-->
<!--                            <nuxt-link-->
<!--                                :to="{ name: 'me', query: { activeName: 'set' } }"-->
<!--                                style="color: #858585"-->
<!--                            >-->
<!--                                <div class="user_seeting">-->
<!--                                    <sapn><i class="el-icon-setting"></i> 设置</sapn>-->
<!--                                </div>-->
<!--                            </nuxt-link>-->
<!--                        </div>-->
<!--                        <div class="list_4">-->
<!--                            <nuxt-link :to="{ name: 'login' }" style="color: #858585">-->
<!--                                <div class="out" @click="logout">-->
<!--                                    <span><i class="iconfont icon-tuichu"></i> 退出</span>-->
<!--                                </div>-->
<!--                            </nuxt-link>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <vs-button-->
<!--                    upload-->
<!--                    @click="$router.push({ name: 'login' })"-->
<!--                    v-if="!isLogin"-->
<!--                >-->
<!--                    <i class="el-icon-s-custom"></i> &nbsp; 登录-->
<!--                </vs-button>-->
                <el-button type="primary">
                    <el-icon style="vertical-align: middle;">
                      <UserFilled />
                    </el-icon>
                    <span style="vertical-align: middle;"> 登录 </span>
                </el-button>
            </div>
            <!--endregion -->
<!--            <div style="display: flex; flex-direction: row">-->
<!--                <el-button icon="el-icon-search" class="mb_menu" circle></el-button>-->
<!--                <el-button-->
<!--                    icon="el-icon-s-unfold"-->
<!--                    @click="activeSidebar = !activeSidebar"-->
<!--                    class="mb_menu"-->
<!--                    circle-->
<!--                ></el-button>-->
<!--                 <i class="el-icon-s-operation" ></i>-->
<!--            </div>-->
        </div>
    </header>
</template>
<script>
import Cookie from "js-cookie"
export default {
    name: "Header",
    data() {
        return {
          //
          isActive: 0,
          //导航栏默认选中
          active: "index",
          //导航栏颜色
          dark: "dark",
          //默认侧边栏隐藏
          activeSidebar: false,
          // 是否登录
          isLogin: false,
          // 存储用户信息
          user:{}
        };
    },
    mounted() {
        let auth = Cookie.get("auth");
        if (auth == undefined || auth == null) {
            // localStorage.clear();
            localStorage.setItem("islogin", false);
        }

        this.decideLoginState();

        let isLogin = localStorage.getItem("islogin");

        if (isLogin == true || isLogin == "true") {
            this.user = JSON.parse(localStorage.getItem("userInfo"))
        } else {
            this.isLogin = false;
            // console.log( localStorage.getItem("userInfo"),"--------------------------- { userInfo false }");
        }

        window.addEventListener("scroll", () => {
            let header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);
        });
    },
    methods: {
        // 获取登录状态改变 登录与个人信息
        decideLoginState() {
            var oriSetItem = localStorage.setItem;
            localStorage.setItem = function(key, value) {
                //这里抛出自定义事件
                var event = new Event("setItemEvent");
                event.newKey = key;
                event.newValue = value;
                window.dispatchEvent(event);
                //实现原方法
                oriSetItem.apply(this, arguments);
            };
            window.addEventListener("setItemEvent", e => {
                this.isLogin = e.currentTarget.localStorage.islogin;
                if (this.isLogin == true || this.isLogin == "true") {
                    // let token = Cookie.get("auth")
                    // let decoded = decode(token)
                    // this.$store.commit("setUserInfo", JSON.parse(decoded.sub));
                    this.user = JSON.parse(localStorage.getItem("userInfo"))
                } else {
                    this.isLogin = false;
                }
            });
            this.isLogin = localStorage.getItem("islogin");
        },
        // 导航栏状态
        isactive(index) {
            this.isActive = index;
        },
        // 退出登录
        logout(){
            localStorage.clear();
            Cookie.remove("auth");
            localStorage.setItem('islogin',false)
        }
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/header.scss";
</style>
