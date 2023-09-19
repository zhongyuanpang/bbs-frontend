<template>
    <div class="blog_list row">
        <div class="blog-info col-md-9">
            <div class="b_title" ><span class="left-to-right" @click="toArticleDetail(item.blogId)">{{ item.title }}</span></div>
            <div class="b_describe">{{ item.description }}</div>
            <div class="user_blog_info">
                <div><el-avatar size="small" :src="item.user.avatar" ></el-avatar></div>
                <div style="padding-left:5px">{{ item.user.nickname }}</div>
                <span><strong>时间 : </strong>{{ item.createTime | formatDate }}</span>
                <span><strong>浏览 : </strong>{{ item.views }}</span>
                <span><strong>分类 : </strong>java</span>
            </div>
        </div>
        <div class="cover col-md-3">
            <img class="cover-img" v-if="item.cover" :src="item.cover" width="100%" height="100%" alt="">
        </div>
    </div>
</template>

<script>
import { formatDate } from '@/utils/dateUtil.js'
export default {
    props:{
        item:{
            type:Object,
            default:{}
        }
    },
    filters:{
      formatDate(time) {
          let date = new Date(time);
          return formatDate(date, 'yyyy-MM-dd hh:mm');
      }
    },
    methods:{
        // 跳转文章详情页
        toArticleDetail(blogId){
            // let detailId = {
            //       "blogId":blogId,
            //       "userId":userId
            // }
            // localStorage.setItem("articleDetailId",encrypt(JSON.stringify(detailId)));
            this.$router.push({ name:"article",query:{blogId:blogId}});
        }
    }

}
</script>

<style lang="scss" scoped>

a{
  text-decoration: none;
}
.blog_list{
    display: flex;
    flex-direction: row;
    background-color: #fff;
    margin: 7px 0px;
    .blog-info{
        .b_title{
            height: 50px;
            display: flex;
            align-items: center;
            font-weight: bolder;
            font-size: 1.3em;
            padding-left: 1em;
            color: #354a5f;
            cursor: pointer;
        }

        .b_describe{
            height: 30px;
            display: flex;
            align-items: center;
            color: #a9a9a9;
            padding-left: 1.7em;
            font-size: 0.8em;
            font-family: "Helvetica";
            font-weight: 400;
            cursor: pointer;
        }

        .user_blog_info{
            height: 60px;
            padding-left: 1.3em;
            display: flex;
            align-items: center;
            font-size: 0.8em;
            color: #a9a9a9;
            font-weight: 500;
        }

        .user_blog_info>span{
                padding-left: 20px;
        }
    }
    .cover{
    //    flex: 1.5;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        .cover-img{
            height: 120px;
            width: 100%;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
}
.blog_list:hover{
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
}


.left-to-right{
  position:relative;
}
.left-to-right::after{
  content:'';
  display:block;
  /*开始时候下划线的宽度为0*/
  width:0;
  height:3px;
  position:absolute;
  left:0;
  bottom:-3px;
  background:green;
  border-radius: 20px;
  /*这里我们设定所有改变都有动画效果，可以自己指定样式才有动画效果*/
  transition:all 0.3s ease-in-out;
}
.left-to-right:hover::after{
  width:100%;
}
</style>
