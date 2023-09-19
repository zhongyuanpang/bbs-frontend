<template>
    <div class="container-fluid me_box ">
        <!-- <div class="markBox" style="height:70px;background:white;"></div> -->
        <div class="me_show_info ">
            <div class="me_show_info_T">
                <img class="me_background" :src="user.background" width="100%" height="100%" alt="">
                <div class="me_info ">
                    <div class="me container">
                        <div class="avatar">
                            <el-avatar :size="80 " :src="user.avatar" style="border:2px solid #fff"></el-avatar>
                        </div>
                        <div class="user_info">
                            <div class="me_name">{{ user.nickname }} &nbsp;<i class="el-icon-male" style="color:cyan"></i> <i v-if="false" class="el-icon-female" style="color:pink"></i></div>
                            <div class="introduce">introduce</div>
                        </div>
                         <div>
                            111
                        </div>
                    </div>
                </div>
            </div>
            <div class="me_show_info_B container">
                <el-tabs :stretch="true" class="tabs" v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="主页" name="home">
                        <div class="home row">
                            <div class="home_L col-md-8">

                            </div>
                            <div class="home_R col-md-4">
                                <div class="R_info">
                                    <div class="R_info_t">

                                    </div>
                                    <div class="R_info_c">
                                        <div>
                                            <div>0</div>
                                            <div>文章数</div>
                                        </div>
                                        <div>
                                            <div>0</div>
                                            <div>评论数</div>
                                        </div>
                                        <div>
                                            <div>0</div>
                                            <div>日记数</div>
                                        </div>
                                    </div>
                                    <div class="R_info_b">
                                        <h3>账号信息</h3>
                                        <p></p>
                                        <p>
                                            <i class="el-icon-user-solid"></i>
                                            <span>昵称: {{ user.nickname }} </span>
                                        </p>
                                        <p>
                                            <i class="iconfont icon-date"></i>
                                            <span>创建时间: {{ user.createTime | formatDate }}</span>
                                        </p>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="江湖" name="blog">
                        <div class="blog">
                            <el-tabs class="blog_tabs" lazy="true" type="border-card" tab-position="left" style="height: 700px;">
                                <el-tab-pane label="文章管理">
                                    <!-- 文章发布管理 -->
                                    <div class="article">
                                        <ul class="tab-title">
                                            <li @click="cur=0" :class="{active:cur==0}">已发布</li>
                                            <li @click="cur=1" :class="{active:cur==1}">草稿</li>
                                            <!-- <li @click="cur=2" :class="{active:cur==2}">发布失败</li> -->
                                        </ul>
                                        <div class="tab-content">
                                            <div class="published" v-show="cur==0">
                                                <!-- 已发布文章列表 -->
                                                <Published />
                                                <Published />
                                                <Published /><Published /><Published /><Published /><Published /><Published /><Published />
                                                <Published /><Published /><Published /><Published /><Published />
                                            </div>
                                            <div class="draft" v-show="cur==1">草稿</div>
                                            <!-- <div v-show="cur==2">发布失败</div> -->
                                        </div>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="配置管理">管理</el-tab-pane>
                            </el-tabs>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="日记" name="diary">
                                <div class="diary">

                                </div>
                    </el-tab-pane>
                    <el-tab-pane label="设置" name="set">
                        <div class="set">
                            <el-tabs class="set_tabs" lazy="true" type="border-card" tab-position="left" style="height: 500px;">
                                <el-tab-pane label="账号设置">账号设置</el-tab-pane>
                                <el-tab-pane label="修改资料">修改资料</el-tab-pane>
                                <el-tab-pane label="编辑主页">主页内容编辑</el-tab-pane>
                                <el-tab-pane label="个人设置">
                                    <div style="display:flex;">
                                        <el-input v-model="BG" placeholder="请输入要修改的背景链接"></el-input>
                                        <el-button type="success" icon="el-icon-edit" style="margin-left:20px" @click="setBG()">修改</el-button>
                                    </div>

                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import { formatDate } from '@/utils/dateUtil.js'
// import Published from '../../components/me/Published'
export default {
  // components: { Published },
    name:'me',
    data(){
        return{
            // 用户页tab默认选项
            activeName: 'home',

            // 存储用户信息
            user:{},

            // 背景图片
            BG:'',

            // 用户文章管理tab默认第一个
            cur:0
        }
    },
    mounted(){
        if(this.$route.query.activeName != null || this.$route.query.activeName != undefined){
            this.activeName = this.$route.query.activeName
        }
        if (localStorage.getItem("islogin") == true || localStorage.getItem("islogin") == "true") {
            this.user = JSON.parse(localStorage.getItem("userInfo"))
        } else {
            console.log("您还未登录");
        }
    },
    methods:{
        handleClick(tab, event) {
            console.log(tab, event);
        },

        // 修改背景图片
        setBG(){
            let bg = this.BG;
            let id = this.user.id;
            this.$request.editBg(bg,id).then(res=>{
                this.user = res.data.data
                localStorage.setItem("userInfo",JSON.stringify(res.data.data))
            })
        }
    },
    filters:{
      formatDate(time) {
            // let date = new Date(time);
            // return formatDate(date, 'yyyy-MM-dd');
      }
    }

}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/pages/me/me.scss";
</style>