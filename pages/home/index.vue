<template>
    <section>
        <div class="index_box container-fluid">
    <!--      <div class="markBox" style="height:55px;"></div>-->
            <div class="row contentBox">
                <!-- 主页左侧列表 -->
                <div class="col-md-2 info_L">
                    <!-- 声明 -->
                    <div class="statement">
                        <div class="statement_title">
                            <span></span> <span>声明</span><span> State</span>
                        </div>
                        <div class="statement_content">
                            本站内容皆为原创原创精心编写，未经本人许可，任何人或组织不得转载或用于任何商业用途
                        </div>
                    </div>
                    <!-- 分类 -->
                    <div class="Classification">
                        <div class="Popular-title">
                            <span></span>
                            <span>前沿技术</span>
                            <span>Popular</span>
                        </div>
                        <div class="Popular-list" v-for="(item,index) in typeList" :key="index">
            <!--              <div><span  v-html="item.icon">{{ item.icon }}</span> </div>-->
            <!--              <div>{{ item.name }}</div>-->
                        </div>
                    </div>
                </div>

              <!-- 主页中间列表展示 -->
                <div class="col-md-7 contents">
                    <!-- 走马灯 -->
                    <el-carousel :interval="4000" type="card" height="270px">
                        <el-carousel-item v-for="(item,index) in blogList" :key="index">
                            <img :src="item.cover" class="image">
                            <h5 class="text_overflow">{{ item.title }}</h5>
                        </el-carousel-item>
                    </el-carousel>

                    <!-- 提示框 -->
                    <el-alert title="欢迎来到 laopang 博客社区^_^" type="warning" show-icon/>

                    <!-- 头部面包屑 -->
                    <div class="breadcrumb">
                        <el-breadcrumb separator="/">
                          <el-breadcrumb-item :to="{ path: '/' }">全部</el-breadcrumb-item>
                          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                          <!-- <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                          <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
                        </el-breadcrumb>
                    </div>

                    <!-- 博客列表 -->
                    <div class="blog_list" v-for="(item,index) in blogList" :key="index" >
                        <BlogCard :item="item"/>
                    </div>

                    <!-- 分页 -->
                    <div class="paging" v-if="blogList.length > 0">
                        <!--                        <el-pagination-->
                        <!--                            background-->
                        <!--                            layout="prev, pager, next"-->
                        <!--                            :total="100"-->
                        <!--                            :pager-count="5"-->
                        <!--                        />-->
                        <pagination
                            v-show="total>0"
                            :total="total"
                            :page.sync="queryParams.pageNum"
                            :limit.sync="queryParams.pageSize"
                            @pagination="getBlogList"
                        />
                    </div>
                </div>

                <!-- 右侧博客分类及信息展示 -->
                <div class="col-md-3 types_R">
                    <!-- 点击发布文章按钮 -->
                    <div class="editblog" @click="toEdit">
                        <i class="el-icon-edit"></i>&nbsp;编辑文章
                    </div>

                    <!-- 用户总评论、用户数、评论数 -->
                    <div class="blog_info_count">
                        <div>
                            <div>{{ bascInfo.userCount }}</div>
                            <div>用户数</div>
                        </div>
                        <div>
                            <div>{{ bascInfo.blogCount }}</div>
                            <div>文章</div>
                        </div>
                        <div>
                            <div>3</div>
                            <div>回复</div>
                        </div>
                    </div>


                    <!-- 公告 -->
                    <div class="announcement">
                        <div class="announcement_title">
                            <span>
                                <svg class="icon announcement_icon"  aria-hidden="true">
                                    <use xlink:href="#icon-laba"></use>
                                </svg>
                                公告
                            </span>
                        </div>
                        <div class="announcement_content">
                            欢迎大家
                        </div>
                    </div>

                    <!--  博客文章分类 -->
                    <div class="blog_type">
                        <div class="type_title">
                            <div>
                                <i class="iconfont icon-shushuben"></i>&nbsp;
                                <span>文章分类</span>
                            </div>
                            <div>
                                <span>更多</span>
                            </div>
                        </div>
                        <div class="type_list">
                            <div>
                                <span>文章</span>
                            </div>
                            <div>
                                <i class="el-icon-arrow-right" style="font-weight: bolder"></i>
                            </div>
                        </div>
                    </div>

                    <!-- 博客推荐专栏 -->
                    <div class="blog-Column">
                        <div class="blog-Column-title">
                            <span></span>
                            <span>专栏</span>
                            <span>Anthology</span>
                        </div>
                        <!-- 博客推荐列表 -->
                        <div class="blog-Column-recommend_list">
                            <div class="blog-Column-recommend_title">
                                Go语言基础
                            </div>
                            <div class="blog-Column-recommend_desc">
                                工欲善其事必先利其器
                            </div>
                        </div>
                    </div>

                    <!-- 推荐博主 -->
                    <div class="Recommended-author">
                        <div class="Recommended-author_title">
                            <span></span>
                            <span>技术大牛🐂</span>
                            <span>Author</span>
                        </div>
                        <div class="Recommended-author_Author">
                            <div class="Recommended-author_Author-avatar">
                                <img src="http://q1.qlogo.cn/g?b=qq&nk=3212990982&s=100" width="100%" height="100%" alt="">
                            </div>
                            <div class="Recommended-author_Author-info">
                                <div>nice</div>
                                <div>授人以渔</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { formatDate } from '@/utils/dateUtil.js'
// import { typeList,homeInfo } from '@/api/home.js'
// import { blogList} from '@/api/blog.js'
import BlogCard from '@/components/BlogCard';
import Pagination from "@/components/Pagination";
export default {
    name:'home',
    components:{BlogCard,Pagination},
    data(){
        return{
            //文章列表
            blogList:[],
            // 查询参数
            queryParams: {
              pageNum: 1,
              pageSize: 2,
            },
            // 条目数
            total: 0,
            color: 'success',
            //文章分类列表
            typeList:[],
            //基本展示信息
            bascInfo:{},
            // 轮播图模拟图片
            imgList: [
              {id:0,idView:'https://pic7.58cdn.com.cn/nowater/webim/big/n_v2b4b2e2dc599d43a18808b9e92564b239.png'},
              {id:1,idView:'https://pic8.58cdn.com.cn/nowater/webim/big/n_v2cb715979a9c84758b9b3e779f8d34b06.png'},
              {id:2,idView:'https://pic7.58cdn.com.cn/nowater/webim/big/n_v2b4b2e2dc599d43a18808b9e92564b239.png'},
              {id:3,idView:'https://pic7.58cdn.com.cn/nowater/webim/big/n_v2fdef8fbaac7a4218b02c074a80bd74e3.png'}
            ]
        }
    },
    mounted(){
      // this.getTypeList();
      // this.getHomeInfo();
      // this.getBlogList();
    },
    methods:{
        /**
         * 获取博客列表
         * */
        getBlogList(){
            blogList(this.queryParams).then(res=>{
                console.log(res);
                this.total = res.data.total;
                this.blogList = res.data.records;
            })
        },

        /**
         * 获取分类列表
         * */
        getTypeList(){
            typeList().then(res=>{
                this.typeList = res.data;
            })
        },

        /**
         * 获取主页展示基本信息
         * */
        getHomeInfo(){
            homeInfo().then(res=>{
              this.bascInfo = res.data;
            })
        },

        /**
         * 跳转发布文章
         * */
        toEdit(){
            // if(localStorage.getItem("islogin") == false || localStorage.getItem("islogin") == "false"){
            //     this.$message.error('您还未登录,请登录后编辑');
            //     return
            // }
            this.$router.push({name: "edit"});
        },
    },
    // 过滤器
    filters:{
        formatDate(time) {
            let date = new Date(time);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
    }
}
</script>


<style>
.el-carousel__item img{
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
<style lang="scss" scoped>
@import "~/assets/styles/pages/home/home.scss";
</style>
