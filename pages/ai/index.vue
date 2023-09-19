<template>
    <div class="">
        <!-- 悬浮小精灵 -->
        <div class="ai-box" ref="box" :style="{'background-image': 'url('+ ai_bg +')'}" v-show="!isChat" @mousedown="onMouseDown" @dblclick="isChat = !isChat">
            <div class="tip">你好，我是智能机器人！<br/>双击打开详情</div>
        </div>

        <!-- 对话框 -->
        <div class="chat-box" id="fullscreenDiv" v-show="isChat">
            <!-- 头部 -->
            <div class="header">
                智能AI助手
                <!-- 操作栏 -->
                <div class="toolbar">
                    <el-icon color="gray" size="23"  @click="setFullScreen">
                        <FullScreen v-if="fullscreen" />
                        <SemiSelect v-else />
                    </el-icon>
                    <el-icon color="gray" size="25" @click="isChat = !isChat"><CloseBold /></el-icon>
                </div>
            </div>
            <!-- 内容 -->
            <div class="body">
<!--                  <div v-for="(item,index) in chatList" :key="index"  class="message"  :class="item.position">-->
<!--                      <template v-if="item.position === 'left'">-->
<!--                          <div class="chat-avatar"><el-avatar :src="ai_bg"/></div>-->
<!--                          <div class="chat-content typo" v-html="item.content"></div>-->
<!--                      </template>-->
<!--                      <template v-else>-->
<!--                          <div class="chat-content">{{item.content}}</div>-->
<!--                          <div class="chat-avatar"><el-avatar>{{ userName }}</el-avatar></div>-->
<!--                      </template>-->
<!--                  </div>-->
                <iframe src="http://chat4.wuguokai.cn/"></iframe>
            </div>
            <!-- 底部 -->
<!--            <div class="footer">-->
<!--                <input placeholder="请输入内容.." v-model="search"/>-->
<!--                <span class="suffix-icon">-->
<!--                    <el-icon size="25" @click="sendMessage(search)"><Position /></el-icon>-->
<!--                </span>-->
<!--            </div>-->
        </div>

        <button @click="generateText">Generate Text</button>
        <p>{{ generatedText }}</p>

    </div>
</template>

<script lang="ts">
import { ElMessage } from 'element-plus'
import Prism from 'prismjs'

export default {
    name:'ai',
    data(){
        return{
            //小精灵图片
            // ai_bg:"https://pic1.58cdn.com.cn/nowater/webim/big/n_v2c001499e4fa440199d09e32bff26cb39.png",
            ai_bg:"https://pic5.58cdn.com.cn/nowater/webim/big/n_v2363e2c10e4a2470399a02768dcd4efc9.jpg",
            //是否展示对话框
            isChat:false,
            //用户名
            userName:"庞",
            //输入框组件
            search:"",
            //对话列表
            chatList:[
                {
                    name:"小A",
                    content:"你好！有什么问题我可以回答吗？",
                    position:"left"
                }
            ],

            // 最大化窗口
            fullscreen:true,

            //region  openAI
            apiKey: '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',
            // apiUrl_model: 'https://api.openai.com/v1/models', //模型url
            apiUrl_chat:  'https://api.openai.com/v1/chat/completions', //聊天url
            // apiUrl_chat:  'https://chat2.wuguokai.cn/api/chat-process', //聊天url
            generatedText: '',
            //endregion
        }
    },
    mounted(){
        this.$nextTick(()=>{
          Prism.highlightAll()
        })
    },
    methods:{

        /**
         * 拖动悬浮精灵
         * */
        onMouseDown(e) {
            const box = this.$refs.box;
            const startX = e.clientX;
            const startY = e.clientY;
            const offsetX = startX - box.offsetLeft;
            const offsetY = startY - box.offsetTop;

            const onMouseMove = (e) => {
                const left = e.clientX - offsetX;
                const top = e.clientY - offsetY;
                box.style.left = left + "px";
                box.style.top = top + "px";
            };

            const onMouseUp = () => {
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
            };

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
        },

        /**
         * 发送消息
         * */
        async sendMessage(msg){
            if (!msg){
                ElMessage({
                    message: '请输入您想知道的问题！',
                    type: 'warning',
                })
                return
            }

            this.search = ""

            //region  《发送消息》

            this.chatList.push({
                name:"小P",
                content:msg,
                position:"right"
            })

            let str = "以下是Java冒泡排序的示例代码：\n" +
                "\n" +
                "```java\n" +
                "public class BubbleSort {\n" +
                "    public static void bubbleSort(int[] arr) {\n" +
                "        int n = arr.length;\n" +
                "        for (int i = 0; i < n - 1; i++) {\n" +
                "            for (int j = 0; j < n - 1 - i; j++) {\n" +
                "                if (arr[j] > arr[j + 1]) {\n" +
                "                    int temp = arr[j];\n" +
                "                    arr[j] = arr[j + 1];\n" +
                "                    arr[j + 1] = temp;\n" +
                "                }\n" +
                "            }\n" +
                "        }\n" +
                "    }\n" +
                "\n" +
                "    public static void main(String[] args) {\n" +
                "        int[] arr = { 64, 34, 25, 12, 22, 11, 90 };\n" +
                "        bubbleSort(arr);\n" +
                "        System.out.println(\"排序后的数组：\");\n" +
                "        for (int num : arr) {\n" +
                "            System.out.print(num + \" \");\n" +
                "        }\n" +
                "    }\n" +
                "}\n" +
                "```\n" +
                "\n" +
                "冒泡排序的基本思路是依次比较相邻的两个元素，如果前一个元素比后一个大，则交换它们的位置，这样每一轮都将当前未排序部分中最大的元素放到了最后面，因此称为冒泡排序。通过多轮的比较和交换，可以完成对一个无序数组的排序。"

              this.chatList.push({
                  name:"小A",
                  content:str,
                  position:"left"
              })
            // let query = {prompt:msg,options:{},userId:`#/chat/${new Date().getTime()}`,usingContext:true};
            //
            // //聊天
            // let data = await $fetch(this.apiUrl_chat, {
            //   method: 'POST',
            //   body: JSON.stringify(query),
            // });
            //
            // // 假设输入 Blob 名为 inputBlob。
            // const blobPromise = this.parseBlobText(data);
            // blobPromise.then((text) => {
            //   console.log(text,"输出文本字符串"); // 输出文本字符串。
            //       this.chatList.push({
            //           name:"小A",
            //           content:text.toString(),
            //           position:"left"
            //       })
            // });


            //endregion

            //滚动到最底部
            this.$nextTick(()=>{

                Prism.highlightAll()

                var targetDiv = document.querySelector('.body'); // 获取目标div元素
                targetDiv.scrollTop = targetDiv.scrollHeight - targetDiv.clientHeight; // 计算滚动距离并赋值给目标div的scrollTop属性
            })
        },

        /**
         * 设置全屏展示
         * */
        setFullScreen(){
            // 获取需要最大化的div元素
            const fullscreenDiv = document.querySelector('#fullscreenDiv');

            if (!document.fullscreenElement) {
                // 如果当前没有元素全屏显示，则全屏该元素
                fullscreenDiv.requestFullscreen();
                this.fullscreen = false;
            } else {
                // 否则退出全屏
                document.exitFullscreen();
                this.fullscreen = true;
            }
        },

        /**
         * 获取消息
         * */
        generateText () {

            //获取模型
            // let data = await $fetch(this.apiUrl_model, {
            //     method: 'GET',
            //     headers: {
            //       'Authorization': `Bearer ${this.apiKey}`
            //     },
            // });
            // let query = {prompt:"java冒泡排序",options:{},userId:"#/chat/1686478061345",usingContext:true};

            //聊天
            $fetch(this.apiUrl_chat, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${this.apiKey}`
                },
                body: JSON.stringify({
                  model: "gpt-3.5-turbo",
                  messages: [{"role": "user", "content": "写一个独特的句子"}],
                }),
                // body: JSON.stringify(query),
            }).then(res=>{
              console.log(res)
            })

            // 假设输入 Blob 名为 inputBlob。
            // const blobPromise = this.parseBlobText(data);
            // blobPromise.then((text) => {
            //   console.log(text,"输出文本字符串"); // 输出文本字符串。
            // });
        },

        /**
         * 将Blob转为文本
         * */
        parseBlobText(blob) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                  resolve(reader.result);
                };
                reader.onerror = (err) => {
                  reject(err);
                };
                reader.readAsText(blob);
            });
        }
    },
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/pages/ai/typo.scss";

//悬浮小精灵
.ai-box{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    //box-shadow: 0 0 0 #dbdbdb inset, 0 0 50px #5959db;
    box-shadow: 0 0 0 #3486af inset, 0 0 50px #36edbf;
    position: fixed;
    bottom: 20px;
    right: 20px;
    animation: ghost 2s infinite;
    cursor: pointer;
    user-select: none;

    &:hover{
        transition: .3s all;
        .tip{
            display: block;
        }
    }

    .tip{
        display: none;
        position: absolute;
        width: 180px;
        padding: 10px;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
        border-radius: 10px;
        top: -85px;
        right: 0;
        font-size: 0.9em;
        background: #FFFFFF;

        &::before {
            content: '';
            width: 0;
            height: 0;
            border: 12px solid transparent;
            border-bottom-color: #FFFFFF;
            position: absolute;
            right: 15px;
            bottom: -24px;
            transform: rotate(180deg);
        }
    }
}

//对话框
.chat-box{
    width: 1000px;
    height: 90vh;
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 20px;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;

    .header{
        text-align: center;
        padding: 20px 0;
        font-weight: bold;
        font-size: 1.1em;
        .toolbar{
            position: absolute;
            top: 10px;
            right: 10px;
            text-align: right;
            .el-icon{
              cursor: pointer;
              margin-right: 10px;
            }
        }
    }

    .body{
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 400px;
        overflow-y: scroll;

        iframe{
          height: 100%;
        }

        .message {
            max-width: 90%;
            margin: 10px;
            padding: 10px;
        }

        .right {
            //align-self: flex-end;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .chat-avatar{
                .el-avatar{
                    background-color: rgb(160, 196, 255);
                }
            }

            .chat-content{
                padding: 5px 7px;
                margin-right: 10px;
                background-color: #95ec69;
                word-wrap: break-word;
                border-radius: 5px;
                max-width: 90%;
                box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
            }
        }

        .left {
            //align-self: flex-start;
            display: flex;

            .chat-avatar{
            }

            .chat-content{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                padding: 5px 10px;
                margin-left: 10px;
                background-color: #f1f1f1;
                word-wrap: break-word;
                border-radius: 5px;
                max-width: 80%;
                box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
                animation: typing 3s steps(30) forwards;
                white-space: pre-wrap;
                overflow: hidden;
                border-right: solid 2px #6699ff;
            }
        }

        .message:last-child {
            margin-bottom: 20px;
        }
    }

    .footer{
        padding: 20px;
        position: relative;
        input{
            width: 100%;
            height: 50px;
            border: 1px solid #152da5;
            border-radius: 6px;
            padding: 0 60px 0 15px;
            outline: none;
            position: relative;
            max-height: 100px;
            overflow-y: auto !important;
            word-wrap: break-word !important;
        }
        .suffix-icon{
            display: flex;
            position: absolute;
            top: 33px;
            right: 45px;
            cursor: pointer;
        }
    }
}

//动画
@keyframes ghost {
    0%,100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-15px);
    }
}

//打字机效果
@keyframes typing {
  from { max-width: 0 }
  to { max-width: 80% }
}

</style>