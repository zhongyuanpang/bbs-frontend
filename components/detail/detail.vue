<template>
    <section>
        <div class="container showblog">
            <div class="row l_r">
                <div class="col-md-9 blog_info">
                    <div class="blog_content">
                        <div class="b_title">{{ articleDetail.title }}</div>
                        <div class="b_info">
                            <div>
                                <span><i class="el-icon-user-solid"></i>：{{ uInfo.user.nickname }}</span>
                                <span><i class="el-icon-time"></i>于{{ articleDetail.createTime | formatDate }}发布</span>
                                <span><i class="el-icon-view"></i> : {{ articleDetail.views }}</span>
                            </div>
                            <div>分类 : <span>jvav</span></div>
                        </div>
                        <!-- 博客内容 content -->
                        <div class="js-toc-content b_content typo typo-selection " v-html="articleDetail.content">
                            {{ articleDetail.content }}
                        </div>
                    </div>
                </div>
                <!-- 作者信息 -->
                <div class="col-md-3 user_info">
                    <div class="user">
                        <div class="u_avatar">
                            <vs-avatar size="100" circle badge writing badge-color="success">
                                <img :src="uInfo.user.avatar" alt="" />
                            </vs-avatar>
                            <div>{{ uInfo.user.nickname }}</div>
                        </div>
                        <div class="u_info">
                            <div>
                                <div>文章</div>
                                <div>{{ uInfo.blogCount }}</div>
                            </div>
                            <div>
                                <div>粉丝</div>
                                <div>0</div>
                            </div>
                            <div>
                                <div>获赞</div>
                                <div>0</div>
                            </div>
                        </div>
                    </div>
                    <!-- 目录 -->
                    <div class="centents">
                        <!-- 导航弹出层 -->
                        <div class="toc-container">
                            <ol class="js-toc"></ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { formatDate } from "@/utils/dateUtil.js";
export default {
    props:{
        articleDetail:{
            type:Object,
            default:{}
        },
        uInfo:{
            type:Object,
            default:{}
        }
    },
    data() {
        return {
        };
    },
    mounted() {
        // 目录生成
        // tocbot.init({
        //   // 添加到哪里
        //   tocSelector: '.js-toc',
        //   //  针对哪个id标签
        //   contentSelector: '.js-toc-content',
        //   // Which headings to grab inside of the contentSelector element.
        //   headingSelector: 'h1,h2,h3',
        //   // {#滚动跟随#}
        //   positionFixedSelector:'.js-toc',
        //   // 用于内容中相对或绝对定位的容器内的标题。
        //   hasInnerContainers: true,
        // });
    },
    methods: {
    },
    filters: {
        formatDate(time) {
            let date = new Date(time);
            return formatDate(date, "yyyy-MM-dd hh:mm:ss");
        },
    },
};
</script>

<style lang="scss" scoped>
//博客展示区域
.showblog {
  margin-top: 20px;
  height: auto;

  .l_r {
    .blog_info {
      padding: 0px 0px;
      .blog_content {
        background-color: #fff;
        border-radius: 10px;
        padding: 10px 0px;
        .b_title {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          height: 70px;
          display: flex;
          align-items: center;
          text-indent: 1em;
          font-size: 2em;
          font-weight: bolder;
          color: #354a5f;
        }
        .b_info {
          margin-top: 20px;
          height: 70px;
          background-color: #f6f6f6;
          border-radius: 5px;
          margin: 10px;
          & > div:nth-child(1) {
            height: 30px;
            display: flex;
            align-items: center;
            font-size: 0.9em;
            color: #999aaa;
            font-weight: 600;
            padding-left: 20px;
            & > span {
              margin-left: 20px;
            }
          }
          & > div:nth-child(2) {
            height: 40px;
            display: flex;
            align-items: center;
            font-size: 0.9em;
            color: #999aaa;
            font-weight: 600;
            padding-left: 40px;
            & > span {
              height: 30px;
              width: 60px;
              margin: 0px 10px;
              background-color: #fff;
              border-radius: 10px;
              color: #999999;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
        .b_content {
          margin: 20px 20px;
        }
      }
    }
    .user_info {
      padding: 0;
      .user {
        height: 300px;
        background-color: #fff;
        margin-left: 10px;
        border-radius: 10px;
        .u_avatar {
          height: 180px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 1.3em;
          font-weight: bold;
        }
        .u_info {
          height: 100px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          & > div {
            flex: 1;
            align-items: center;
            display: flex;
            justify-content: center;
            flex-direction: column;
            font-weight: bold;
          }
        }
      }
      .centents {
        background-color: #fff;
        margin-left: 10px;
        margin-top: 20px;
      }
    }
  }
}

.comments_list:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #f8f8f8;
}
</style>

<style scoped>
@import "@/assets/css/typo.css";
</style>