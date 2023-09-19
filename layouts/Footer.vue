<template>
  <section>
      <div class="foot container-fluid">
          <div class="content container">
              <div class="line_1">
                  <span>关于我们</span>
                  <span>加入我们</span>
                  <span>联系我</span>
              </div>
              <div class="line_2">
                  <span>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    name:"Footer",
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
    .foot {
        height: 100px;
        padding: 0; 
        .content{
            height: 100%;
            color: #999999;

            .line_1{
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .line_1>span{
                text-align: center;
                width: 100px;
            }
            .line_1>span:nth-child(1),
            .line_1>span:nth-child(2)
            {
                border-right: 1px solid #999999;
            }
            .line_2{
                height: 50px;
                display: flex;
                justify-content: center;
            }
        }  
    }
</style>