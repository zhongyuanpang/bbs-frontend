<template>
  <div class="container-fluid about_box">
      <div class="markBox" style="height:67px;background:white;"></div>
      <div class="container about_content">
          <div class="title">
                关于我们
          </div>
          <div class="about_info">
              <span><el-avatar size="medium" src="https://img2.baidu.com/it/u=1179175485,756963896&fm=26&fmt=auto&gp=0.jpg" ></el-avatar></span>
              <span style="margin-left:10px">nickname</span>
              <span style="margin-left:10px"><i class="el-icon-view"></i> 0</span>
              <span style="margin-left:10px"><i class="el-icon-time"></i> 2021-06-28</span>
          </div>
          <div class="content">
              <h1>MBBS</h1>
              <hr>
              <p>适合小白的笔记、学习、解决踩坑平台</p>
          </div>
      </div>
  </div>
</template>

<script>
// import index from '@/components/BlogCard/index.vue'
export default {
    // components: { index },
    data(){
        return{
        }
    },
    mounted(){

    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>
  .about_box{
    padding:0;

    .about_content{
      margin-top: 20px;
      background-color: #fff;
      border-radius: 8px;
      padding: 15px;
      box-shadow: 0 0 20px rgba(0,0,0,0.2);

      .title{
        margin-top: 20px;
        padding: 10px;
        font-size: 3em;
        font-weight: bolder;
        font-family:"楷体";
        color: #354a5f;
      }
      .about_info{
        padding: 15px 20px;
        display: flex;
        align-items: center;
        color: #999999;
        font-size: 0.8em;
        font-weight: bold;
      }
      .content{
        margin-top: 10px;
        padding: 15px 25px;
      }
    }
  }
</style>