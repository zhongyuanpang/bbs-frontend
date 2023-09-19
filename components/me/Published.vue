<template>
    <!-- 已发布文章列表 -->
    <div class="article-list" v-if="show">
        <div class="article-title" @click="$router.push({name:'home'})">标题</div>
        <div class="article-content">描述</div>
        <div class="article-info">
            <!-- <div>分类: java</div>
            <div></div> -->
            <div class="info-L">
                <!-- <div>原创</div> -->
                <div>分类：java</div>
                <div><i class="el-icon-view"></i>: 999</div>
                <div><i class="el-icon-time"></i>: 2020-20-20</div>
            </div>
            <div class="info-R">
                <el-button size="small" @click="edit()"><i class="el-icon-edit-outline"></i> 编辑</el-button>
                <el-button size="small" @click="remove()"><i class="el-icon-delete"></i> 删除</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:[],
    data(){
        return{
            // 是否显示
            show:true
        }
    },
    mounted(){

    },
    methods:{
        // 编辑
        edit(){
            
        },
        // 删除
        remove(){
            this.$confirm("此操作将永久删除该作品, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            }).then(()=>{
                this.$message({
                    type: "success",
                    message: "删除成功!"
                });
                this.show = false;
            }).catch(() => {
                this.$message({
                    type: "info",
                    message: "已取消删除"
                });
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.article-list {
    border: 3px solid rgba(0, 0, 0, 0.3);
    margin-bottom: 15px;
    border-radius: 1px;

    .article-title {
        padding: 10px;
        cursor: pointer;
    }

    .article-content {
        padding: 10px 15px;
    }

    .article-info {
        display: flex;

    .info-L{
        padding: 10px;
        flex: 2;
        display: flex;
        flex-direction: row;
        &>div{
            font-size: 0.9em;
            // flex: 1;
            padding: 3px 15px;
            display: flex;
            // justify-content: center;
            align-items: center;
        }
    }

    .info-R{
        padding: 10px;
        flex: 1;
        text-align: center;
    }
    }
}
.article-list:hover{
    border: 3px dashed #09f;
}
</style>