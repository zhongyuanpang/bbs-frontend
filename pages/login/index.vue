<template>
    <div class="login_box container-fluid">
        <div class="login container">
            <div class="show_info col-lg-7">
                <div>
                    <h3>欢迎登录</h3>
                    <p>老庞社区老庞社区老庞社区老庞社区老庞社区老庞社区老庞社区老庞社区老庞社区老庞社区老庞社区老庞社区老庞社区</p>
                </div>
            </div>
            <div class="login_in col-lg-5 col-md-12 col-sm-12">
                <div class="tab">
                    <el-tabs v-model="activeName" :stretch="true">
                        <el-tab-pane label="登录" name="login">
                            <div class="login_form">
                                <el-form
                                    :model="lgForm"
                                    :rules="loginrules"
                                    ref="lgForm"
                                    class="demo-registerForm loginForm"
                                >
                                    <el-form-item prop="username" label="邮箱">
                                        <el-input
                                            v-model="lgForm.username"
                                            placeholder="请输入邮箱"
                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item label="密码" prop="password">
                                        <el-input
                                            type="password"
                                            v-model="lgForm.password"
                                            placeholder="请输入密码"
                                            show-password
                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button
                                            class="loginBtn"
                                            type="danger"
                                            @click="signInForm"
                                        >登录
                                        </el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </el-tab-pane>

                        <el-tab-pane label="注册" name="register">
                            <el-form
                                :model="registerForm"
                                status-icon
                                :rules="rules"
                                ref="registerForm"
                                label-width="70px"
                                class="demo-registerForm registerForm"
                            >
                              <el-form-item prop="username" label="邮箱">
                                <el-input
                                    v-model="registerForm.username"
                                    placeholder="请输入邮箱"
                                ></el-input>
                              </el-form-item>
                              <el-form-item label="昵称" prop="nickname">
                                <el-input
                                    v-model="registerForm.nickname"
                                    placeholder="请输入昵称"
                                ></el-input>
                              </el-form-item>
                              <el-form-item label="密码" prop="password">
                                <el-input
                                    type="password"
                                    v-model="registerForm.password"
                                    autocomplete="off"
                                    show-password
                                    placeholder="请输入密码"
                                ></el-input>
                              </el-form-item>
                              <el-form-item label="确认密码" prop="checkPass">
                                <el-input
                                    type="password"
                                    v-model="registerForm.checkPass"
                                    autocomplete="off"
                                    show-password
                                    placeholder="请再次确认密码"
                                ></el-input>
                              </el-form-item>
                              <el-form-item label="验证码" prop="code">
                                <el-input
                                    placeholder="验证码"
                                    class="code"
                                    autocomplete="off"
                                    v-model="registerForm.code"
                                >111
                                </el-input
                                >
                                <el-button
                                    class="getcode"
                                    type="danger"
                                    :disabled="times != TIMER_TIME"
                                    @click.native="sendCode"
                                >{{ codeText }}
                                </el-button
                                >
                              </el-form-item>

                              <el-form-item>
                                <el-button
                                    class="registerBtn"
                                    type="danger"
                                    @click="submitForm('registerForm')"
                                >注册
                                </el-button
                                >
                              </el-form-item>
                            </el-form>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Cookie from "js-cookie"
import decode from "jwt-decode";
import {encrypt, decrypt} from '~/utils/crypto'
// import {sendCode, login, register} from '@/api/login'

export default {
  name: "Login",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.checkPass !== "") {
          this.$refs.registerForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        username: "",
        nickname: "",
        password: "",
        checkPass: "",
        code: "",
      },
      // 登录的表单
      lgForm: {
        username: "3212990982@qq.com",
        password: "pangzy1013",
      },
      // 登录表单的input校验
      loginrules: {
        username: [
          {required: true, message: "请输入邮箱地址", trigger: "blur"},
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        password: [
          {required: true, validator: validatePass, trigger: "blur"},
        ],
      },
      //  注册表单的input校验
      rules: {
        username: [
          {required: true, message: "请输入邮箱地址", trigger: "blur"},
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        nickname: [
          {required: true, message: "请输入您的名称", trigger: "blur"},
          {min: 3, max: 7, message: "昵称长度在 3 到 7 个字符", trigger: "blur"},
        ],
        password: [
          {required: true, validator: validatePass, trigger: "blur"},
          {min: 6, max: 12, message: "密码长度在 6 到 12位之间哦", trigger: "blur"}
        ],
        checkPass: [
          {required: true, validator: validatePass2, trigger: "blur"},
          {min: 6, max: 12, message: "密码长度在 6 到 12位之间哦", trigger: "blur"}
        ],
        code: [
          {required: true, message: "请输入验证码", trigger: "blur"}
        ]
      },

      // tab默认选中
      activeName: "login",

      //验证码时间
      TIMER_TIME: 60,

      times: null,

      timer: null,
    };
  },
  mounted() {
    this.times = this.TIMER_TIME;
  },
  computed: {
    codeText() {
      return this.times == this.TIMER_TIME
          ? "获取验证码"
          : `${this.times == null ? "获取验证码" : this.times + "s后重试"}`;
    },
  },
  methods: {
    /**
     * 提交注册表单
     * */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          register(this.registerForm).then((res) => {
            this.$notify.success({
              title: 'Ye',
              message: '恭喜您，注册成功',
              showClose: true
            });
            this.registerForm.username = '';
            this.registerForm.nickname = '';
            this.registerForm.password = '';
            this.registerForm.checkPass = '';
            this.registerForm.code = '';
            this.times != this.TIMER_TIME;

            setTimeout(() => {
              this.activeName = "login"
            }, 2000);
          })
        } else {
          this.$notify.info({
            title: '提示',
            message: '请填写表单',
            showClose: true
          });
          return false;
        }
      });
    },

    /**
     * 登录提交表单
     * */
    signInForm() {
      login(this.lgForm).then(res => {
        // switch(res.msg){
        //     case "密码不正确":
        //           this.$notify.error({
        //               title: 'error',
        //               message: '账号或密码错误！!',
        //               showClose: true
        //           });
        //     break;
        //     case "登录成功":
        let token = res.data
        let decoded = decode(token);
        // this.$store.commit("setUserInfo", JSON.parse(decoded.sub));
        // console.log(this.$store.state.userInfo,"11111");
        localStorage.setItem("userInfo", decoded.user)
        Cookie.set("auth", token)
        // Cookie.set("Authorization",res.data.data)
        localStorage.setItem("islogin", true)
        this.$notify.success({
          title: 'success',
          message: '登录成功',
          showClose: true
        });
        this.$router.push({name: 'home'})
        localStorage.setItem("islogin", true)

        // console.log(JSON.parse(decoded.sub),"登录存储至VUEX");
        // this.$store.commit("setUserInfo", JSON.parse(decoded.sub));
        // console.log(this.$store.state.userInfo);

        //     break;
        //     case "该用户不存在":
        //         localStorage.setItem("islogin",true)
        //         this.$notify.warning({
        //             title: '',
        //             message: '该用户不存在请前去注册',
        //             showClose: false
        //         });
        //     break;
        // }
      })
    },

    /**
     * 开启计时发送验证码
     * */
    sendCode() {
      let email = this.registerForm.username;
      if (email == "") {
        this.$message({
          message: '邮箱不能为空哦~',
          type: 'warning'
        });
      } else {
        //  注册发送邮箱验证码
        sendCode(email).then(res => {
          this.$notify.error({
            title: '',
            message: '该用户已注册',
            showClose: false
          });
          this.startTimer();
        })
      }
    },

    /**
     * 验证码定时器
     * */
    async startTimer() {
      this.$notify.success({
        title: '',
        message: '验证码已发送邮箱，请注意查看！',
        showClose: false
      });
      if (this.times !== this.TIMER_TIME) {
        return;
      }
      const that = this;
      this.timer = setTimeout(function temp() {
        that.timer = setTimeout(temp, 1000);
        if (that.times <= 0) {
          clearTimeout(that.timer);
          that.times = that.TIMER_TIME;
        } else {
          that.times--;
        }
      }, 0);
    },
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/pages/login/login.scss";
</style>>
