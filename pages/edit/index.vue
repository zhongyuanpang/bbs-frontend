<template>
  <div class="edit_page">
    <!--  操作栏  -->
    <div class="toolBar">
      <el-row>
        <el-col :span="2">
<!--          @click="back"-->
          <div class="back-btn" >
            <el-icon><Back /></el-icon>&nbsp;返回
          </div>
        </el-col>
        <el-col :span="22">
          <div style="border: 1px solid"></div>
        </el-col>
      </el-row>
    </div>

    <!--  编辑器  -->
    <div class="edit_box">
        <div class="edit_content">
<!--          <mavon-editor-->
<!--              ref="md"-->
<!--              placeholder="请输入内容"-->
<!--              v-model="ruleForm.content"-->
<!--              :ishljs="true"-->
<!--              :shortCut="true"-->
<!--              codeStyle="atelier-heath-dark"-->
<!--              :toolbars="toolbars"-->
<!--              @imgAdd="$imgAdd"-->
<!--              class="editor"-->
<!--          />-->
        </div>
    </div>

<!--    <div class="container title">-->
<!--      <input type="text" v-model="ruleForm.title" placeholder="请输入博客标题" />-->
<!--    </div>-->
<!--    &lt;!&ndash;  编写文章区域  &ndash;&gt;-->
<!--    <div class="container edit_content">-->
<!--        <mavon-editor-->
<!--          ref="md"-->
<!--          placeholder="请输入博客内容"-->
<!--          style="z-index: 999;height: 100%"-->
<!--          v-model="ruleForm.content"-->
<!--          :ishljs="true"-->
<!--          :shortCut="true"-->
<!--          codeStyle="atelier-heath-dark"-->
<!--          :toolbars="toolbars"-->
<!--          @imgAdd="$imgAdd"-->
<!--        />-->
<!--          &lt;!&ndash; @imgDel="$imgDel" &ndash;&gt;-->
<!--    </div>-->


    <!--   文章信息  -->
<!--    <div class="container edit_info">-->
<!--      <el-form-->
<!--        :model="ruleForm"-->
<!--        :rules="rules"-->
<!--        ref="ruleForm"-->
<!--        label-width="100px"-->
<!--        class="demo-ruleForm"-->
<!--      >-->
<!--        <el-form-item label="首图地址" prop="cover">-->
<!--          <el-input v-model="ruleForm.cover" placeholder="选填、网络图片地址"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="文章分类" prop="typeId">-->
<!--          <el-select v-model="ruleForm.typeId" placeholder="文章分类">-->
<!--                <el-option-->
<!--                  v-for="item in typeList"-->
<!--                  :key="item.id"-->
<!--                  :label="item.name"-->
<!--                  :value="item.id">-->
<!--                </el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="文章标签" prop="tags">-->
<!--          <el-tag-->
<!--            style="margin-right:10px"-->
<!--            v-for="tag in this.tags"-->
<!--            :key="tag"-->
<!--            :disable-transitions="false"-->
<!--            @close="handleClose(tag)"-->
<!--            closable>-->
<!--            {{tag}}-->
<!--          </el-tag>-->
<!--          <el-popover-->
<!--            placement="bottom-start"-->
<!--            width="500"-->
<!--            trigger="manual"-->
<!--            v-model="tagVisible">-->
<!--            <div class="tag_popover">-->
<!--              <div class="tag_popover_header">-->
<!--                  <div>标签</div>-->
<!--                  <div><i class="el-icon-close" @click="tagVisible = false"></i></div>-->
<!--              </div>-->
<!--              <div class="tag_popover_input">-->
<!--                  <el-input v-model="tag" @change="changeTag" placeholder="Enter键入可添加自定义标签"></el-input>-->
<!--              </div>-->
<!--            </div>-->
<!--            <el-button slot="reference" icon="el-icon-plus" size="small" plain @click="tagVisible = true">添加文章标签</el-button>-->
<!--          </el-popover>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="文章类型" prop="flag">-->
<!--            <el-radio-group v-model="ruleForm.flag">-->
<!--              <el-radio label="原创"></el-radio>-->
<!--              <el-radio label="翻译"></el-radio>-->
<!--              <el-radio label="转载" @change="reprint"></el-radio>-->
<!--            </el-radio-group>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="发布形式" prop="published">-->
<!--          <el-radio-group v-model="ruleForm.published">-->
<!--            <el-radio label="1">隐私</el-radio>-->
<!--            <el-radio label="0">公开</el-radio>-->
<!--          </el-radio-group>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="文章描述" prop="description">-->
<!--          <el-input type="textarea" placeholder="描述(用于展示首页上)" v-model="ruleForm.description"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item>-->
<!--          <el-button type="primary" @click="submitForm('ruleForm')"-->
<!--            >立即发布</el-button-->
<!--          >-->
<!--          <el-button @click="resetForm('ruleForm')">重置</el-button>-->
<!--        </el-form-item>-->
<!--      </el-form>-->
<!--    </div>-->
  </div>
</template>

<script lang="ts" setup>
    definePageMeta({
        layout: false
    });
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref,reactive } from 'vue'
const count = ref({
  message: 'Hello, Vue 3!',
  count: 0
});
console.log(count);

const data = reactive({
  message: 'Hello, Vue 3!',
  count: 0
});
console.log(data);

</script>
<style lang="scss" scoped>
@import "~/assets/styles/pages/edit/edit.scss";
//.edit_box {
//  height: 100vh;
//  overflow: hidden;
//  background: red;
//  //padding: 0 0 50px 0;
//  .title {
//    margin-top: 30px;
//    background-color: #fff;
//    padding: 0;
//    border-radius: 7px;
//    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
//
//    & > input {
//      border: none;
//      height: 50px;
//      width: 100%;
//      border-radius: 7px;
//      text-indent: 1em;
//    }
//    & > input:hover {
//      font-weight: bolder;
//    }
//  }
//  .edit_content {
//    margin-top: 10px;
//    background-color: #fff;
//    height: 600px;
//    padding: 0;
//    border-radius: 5px;
//  }
//  .edit_info {
//    background-color: #fff;
//    margin-top: 30px;
//    padding: 10px 10px 10px 0px;
//    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
//    border-radius: 7px;
//  }
//}
</style>
<style scoped>
/* tag对话框头部 */
.tag_popover{
  height: 300px;
}
.tag_popover>.tag_popover_header{
  padding: 5px 0px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
}
.tag_popover>.tag_popover_header>div:nth-of-type(1){
  flex: 1;
  text-align: center;
  font-weight: 700;
}
.tag_popover>.tag_popover_header>div:nth-of-type(2){
  font-weight: 700;
  font-size: 1.1em;
  cursor: pointer;
}
/* tag对话框输入 */
.tag_popover_input{
  margin: 10px 0px;
}
</style>