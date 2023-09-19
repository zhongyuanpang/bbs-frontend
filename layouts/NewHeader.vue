<template>
    <!-- 粘性导航 -->
    <header>
        <div class="left">
            <!-- logo -->
            <a href="#" class="logo">
                <img src="https://pic3.58cdn.com.cn/nowater/webim/big/n_v2b60501fb846d4a1abcb3e85c4716770d.png" alt="">
                laopang
            </a>
            <!-- 跳转菜单 -->
            <div class="navbar">
                <NuxtLink :to="{name:'home'}"><span>江湖</span></NuxtLink>
                <NuxtLink :to="{name:'about'}"><span>文章</span></NuxtLink>
                <NuxtLink :to="{name:'ai'}"><span>AI</span></NuxtLink>
            </div>
        </div>

        <div class="right">
            <div class="user_login">
<!--                <vs-button-->
<!--                    @click="$router.push({name:'login'})"-->
<!--                    v-if="!isLogin"-->
<!--                >-->
<!--                    <i class="el-icon-s-custom"></i> &nbsp;-->
<!--                    登录-->
<!--                </vs-button>-->
                <el-button type="primary">
                    <el-icon style="vertical-align: middle;">
                        <UserFilled />
                    </el-icon>
                    <span style="vertical-align: middle;"> 登录 </span>
                </el-button>

                <div v-if="isLogin" style="display:flex;align-items:center">
                    <div class="dropbtn">
                        <el-avatar :src="user.avatar"></el-avatar>
                        <i class="el-icon-caret-bottom"></i>
                    </div>

                    <div class="dropdown-content">
                        <nuxt-link :to="{name:'me'}">
                            <div class="list_1"><i class="el-icon-s-home"></i> 进入主页</div>
                        </nuxt-link>
                        <div class="nickname">{{ user.nickname }}</div>
                        <div class="list_2">
                            <div>
                                <div>0</div>
                                <div>文章</div>
                            </div>
                            <div>
                                <div>0</div>
                                <div>关注</div>
                            </div>
                            <div>
                                <div>0</div>
                                <div>粉丝</div>
                            </div>
                        </div>
                        <div class="list_3">
                            <nuxt-link :to="{name:'me'}"  style="color: #858585">
                                <div class="user_home">
                                      <span><i class="el-icon-s-home"></i> 个人中心</span>
                                </div>
                            </nuxt-link>
                            <nuxt-link :to="{name:'me1'}" style="color: #858585">
                                <div class="user_account">
                                    <div><i class="el-icon-user-solid"></i> 账号</div>
                                    <div>12345</div>
                                </div>
                            </nuxt-link>
                            <nuxt-link :to="{name:'me2'}" style="color: #858585">
                                <div class="user_seeting">
                                    <sapn><i class="el-icon-setting"></i> 设置</sapn>
                                </div>
                            </nuxt-link>
                        </div>
                        <div class="list_4">
                            <nuxt-link :to="{name:'login'}" style="color: #858585">
                                <div class="out" @click="logout">
                                      <span><i class="iconfont icon-tuichu"></i> 退出</span>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 小屏幕侧边菜单弹出按钮 -->
            <div style="display:flex;flex-direction: row;">
                <vs-button
                  icon
                  relief
                  dark
                  animation-type="rotate"
                  class="mb_menu"
                  @click="activeSidebar = !activeSidebar"
                >
                    <i class='el-icon-s-unfold'></i>
                    <template #animate>
                        <i class='el-icon-s-unfold'></i>
                    </template>
                </vs-button>
            </div>
      </div>
    </header>
</template>

<script>
    import Cookie from "js-cookie"
    export default {
        name: "NewHeader",
        data() {
            return {
                isActive: 0,
                //导航栏默认选中
                active: 'index',
                //导航栏颜色
                dark: 'dark',
                //默认侧边栏隐藏
                activeSidebar: false,
                // 是否登录
                isLogin: false,
                // 存储用户信息
                user: {}
            }
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
                // let token = Cookie.get("auth")
                // let decoded = decode(token)
                // this.$store.commit("setUserInfo", JSON.parse(decoded.sub));
                this.user = JSON.parse(localStorage.getItem("userInfo"))
            } else {
                this.isLogin = false;
            }
        },
        methods: {
            // 获取登录状态改变 登录与个人信息
            decideLoginState() {
                var oriSetItem = localStorage.setItem;
                localStorage.setItem = function (key, value) {
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
            // 退出登录
            logout() {
                localStorage.clear();
                Cookie.remove("auth");
                localStorage.setItem('islogin', false)
            }
        }
    }
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 766px) and (max-width: 1150px) {
  header{
    padding: 10px 20px !important;
  }
}

@media only screen and (min-width: 10px) and (max-width: 760px) {

  header{
    padding: 10px 85px !important;
  }
  .navbar {
    display: none;
  }

  .user_login {
    display: none !important;
  }

  header.sticky {
    height: 50px !important;
  }

  .logo {
    margin-left: -80px;
  }

  .mb_menu {
    display: block !important;
    font-size: 1.1em;
    position: relative;
    left: 85px;
    text-align: right;
    border: none !important;
  }
}
// 去除nuxt-link下滑线
a {
  text-decoration: none;
}

.nuxt-link-active {
  text-decoration: none;
}

.mb_menu {
  display: none;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  transition: 0.6s;
  padding: 10px 100px;
  z-index: 2;
  // box-shadow: 0px 1px 4px rgba(255,255,255,255),
  // 0px 0px 20px rgba(255,255,255,255) inset;
  color: white;

  // 左侧
  .left{
      display: flex;
      flex: 1;
      .logo {
          position: relative;
          font-weight: 700;
          color: white;
          font-size: 1.7em;
          font-family:'Times New Roman', Times, serif;
          display: flex;
          align-items: center;
          justify-content: center;
          &>img{
              width: 50px;
              display: flex;
              margin-right: 7px;
          }
      }
      .navbar {
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 20px;
          & span{
              padding: 1px;
              margin-left: 10px;
              width: 65px;
              display: flex;
              justify-content: center;
              border-radius: 20px;
              color: white;
              font-size: 15px;
              transition: .3s;
          }
          & span:hover{
              background-color: #2196f3;
          }
      }
  }

  // 右侧
  .right{
    display: flex;
    align-items: center;
    .user_login {
      position: relative;
      display: inline-block;

      .dropbtn {
        z-index: 99;
        display: flex;
        align-items: center;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        border-radius: 10px;
        width: 290px;
        box-shadow: 0 0 10px rgba(255, 255, 255, 255);
        top: -1px;
        left: -220px;
        color: white;

        .list_1 {
          padding: 10px;
          font-size: 0.8em;
          color: white;
        }

        .nickname {
          margin-top: 10px;
          text-align: center;
          font-size: 1.5em;
          font-weight: bold;
        }

        .list_2 {
          padding: 5px;
          display: flex;
          flex-direction: row;
          border-bottom: 1px solid white;
        }

        .list_2>div {
          padding: 5px;
          display: flex;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          font-size: 0.9em;
          font-weight: bolder;
          // font-family:"黑体"
        }

        .list_2>div:hover {
          background-color: rgba(255, 255, 255, 0.5);
          font-weight: bolder;
        }

        .list_3 {
          font-size: 0.7em;
          border-bottom: 1px solid white;
          color: white !important;

          .user_home {
            padding: 10px;
            display: flex;
            align-items: center;
          }

          .user_account {
            padding: 10px;
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          .user_account div:nth-child(1) {
            flex: 1;
            margin-left: -1px;
          }

          .user_seeting {
            padding: 10px;
            display: flex;
            align-items: center;
          }

          & div{
            margin: 5px;
            color: white;
          }
          & div:hover{
            background-color: #1e9fff;
            font-weight: bold;
          }
        }

        .list_4 {
          margin-top: 5px;
          font-size: 0.8em;
          color: white;

          .out {
            padding: 8px;
            margin: 5px;
            color: white;
          }

          & div:hover{
            background-color: #1e9fff;
            font-weight: bold;
          }
        }
      }
    }

    .user_login:hover {
      .dropdown-content {
        display: inline-block;
      }
    }
  }
}
</style>
