<template>
  <div id="app">
    <h4>登录</h4>
    <!-- 调用element UI组件 -->
    <el-form
      :model="ruleForm2"
      status-icon
      :rules="rules2"
      ref="ruleForm2"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="ruleForm2.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item class="footer_btn">
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else if (/^[A-Za-z_@.]{6,10}$/.test(value)) {
        callback();
      } else {
        callback(new Error("请输入正确的账号"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (/^[0-9a-zA-Z]{6,16}$/.test(value)) {
        callback();
      } else {
        callback(new Error("请输入正确的密码"));
      }
    };

    return {
      ruleForm2: {
        pass: "",
        name: ""
      },
      rules2: {
        name: [
          { validator: validateName, trigger: "blur" },
          { required: true, message: "请输入账号！", trigger: "blur" },
          {
            min: 3,
            max: 16,
            message: "长度在 6 到 10个字符,以字母开头",
            trigger: "blur"
          }
        ],
        pass: [
          { validator: validatePass, trigger: "blur" },
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 16,
            message: "长度在 6 到 16个字符,以字母或者数字开头",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.ruleForm2.name);
          console.log(this.ruleForm2.pass);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>


<style >
#app {
  width: 400px;
  margin: 100px auto;
}
h4 {
  margin-left: 100px;
  color: #409eff;
  text-align: center;
}
.footer_btn{
  text-align: center;
}
</style>
