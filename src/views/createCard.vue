<template>
  <div class="createWrap">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <div class="itemInfo">
        <el-form-item label="First Name" prop="firstName">
          <el-input v-model="ruleForm.firstName" class="w200"></el-input>
        </el-form-item>
        <el-form-item label="Last Name" prop="lastName">
          <el-input v-model="ruleForm.lastName" class="w200"></el-input>
        </el-form-item>
        <el-form-item label="Phone" prop="phone">
          <el-input v-model="ruleForm.phone" class="w300"></el-input>
        </el-form-item>
      </div>
      <div class="itemInfo">
        <el-form-item label="Limit Amount" prop="limitAmount">
          <el-input v-model="ruleForm.limitAmount" class="w200"></el-input>
        </el-form-item>
        <el-form-item label="limit Month" prop="limitMonth">
          <el-input v-model="ruleForm.limitMonth" class="w200"></el-input>
        </el-form-item>
      </div>
      <div class="itemInfo">
        <el-form-item label="Date of Birth" required>
          <el-date-picker prop="birth" type="date" placeholder="YYYY-MM-DD" v-model="ruleForm.birth" class="w220"></el-date-picker>
        </el-form-item>
        <el-form-item label="Address Notes" prop="notes">
          <el-input v-model="ruleForm.notes" class="w500"></el-input>
        </el-form-item>
      </div>
      <div class="itemInfo">
        <el-form-item label="Eamil" prop="email">
          <el-input v-model="ruleForm.email" class="w200"></el-input>
        </el-form-item>
        <el-form-item label="Billing Address" prop="billingAddress">
          <el-input v-model="ruleForm.billingAddress" class="w500"></el-input>
        </el-form-item>
      </div>
      <div class="itemInfo">
        <el-form-item label="City" prop="city">
          <el-input v-model="ruleForm.city" class="w150"></el-input>
        </el-form-item>
        <el-form-item label="Sates" prop="states">
          <el-input v-model="ruleForm.states" class="w150"></el-input>
        </el-form-item>
        <el-form-item label="zip" prop="zip">
          <el-input v-model="ruleForm.zip" class="w150"></el-input>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" class="submit">Order Create</el-button>
        <el-button @click="resetForm('ruleForm')" class="reset">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "home",
    components: {},
    data() {
      return {
        ruleForm: {
          firstName: '',
          lastName: '',
          birth: '',
          phone: '',
          limitAmount: '',
          limitMonth: '',
          email: '',
          billingAddress: '',
          notes: '',
          city: '',
          states: '',
          zip: ''
        },
        rules: {
          firstName: [{
            required: true,
            message: 'Please write first Name',
            trigger: 'blur'
          }],
          lastName: [{
            required: true,
            message: 'Please write last Name',
            trigger: 'blur'
          }],
          limitAmount: [{
            required: true,
            message: 'Please write limit Amount',
            trigger: 'change'
          }],
          limitMonth: [{
            required: true,
            message: 'Please write limit Month',
            trigger: 'change'
          }],
          billingAddress: [{
            required: true,
            message: 'Please write billing Address',
            trigger: 'change'
          }],
          city: [{
            required: true,
            message: 'Please write city',
            trigger: 'change'
          }],
          states: [{
            required: true,
            message: 'Please write states',
            trigger: 'change'
          }],
          zip: [{
            required: true,
            message: 'Please write zip',
            trigger: 'change'
          }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    created() {
      var _this = this;
    },
    mounted() {}
  };
</script>

<style lang="scss" scoped>
  .createWrap {
    padding: 30px 50px;
    .demo-ruleForm {
      width: 940px;
    }
    .itemInfo {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      >>>.el-form-item {
        margin-bottom: 30px;
        margin-right: 30px;
        label {
          width: 120px;
          text-align: left;
          float: left;
          line-height: 37px;
          color: #fff;
        }
      }
      >>>.el-form-item__error {
        color: red;
      }
      .w200 {
        >>>.el-input__inner {
          width: 200px;
          background-color: #0A0D2B;
          color: #fff;
          &:focus {
            border: 1px solid #FF9279;
          }
        }
      }
      .w220 {
        >>>.el-input__inner {
          width: 220px;
          background-color: #0A0D2B;
          color: #fff;
          &:focus {
            border: 1px solid #FF9279;
          }
        }
      }
      .w300 {
        >>>.el-input__inner {
          width: 300px;
          background-color: #0A0D2B;
          color: #fff;
          &:focus {
            border: 1px solid #FF9279;
          }
        }
      }
      .w150 {
        >>>.el-input__inner {
          width: 150px;
          background-color: #0A0D2B;
          color: #fff;
          &:focus {
            border: 1px solid #FF9279;
          }
        }
      }
      .w500 {
        >>>.el-input__inner {
          width: 500px;
          background-color: #0A0D2B;
          color: #fff;
          &:focus {
            border: 1px solid #FF9279;
          }
        }
      }
    }
    .submit {
      width: 170px;
      font-size: 16px;
      line-height: 40px;
      height: 40px;
      background-color: #FF9279;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      margin: 50px auto;
      cursor: pointer;
      margin: 0;
      padding: 0;
      border: 1px solid transparent; //自定义边框
      outline: none; //消除默认点击蓝色边框效果
      margin-right: 40px;
    }
    .reset {
      width: 170px;
      font-size: 16px;
      line-height: 40px;
      height: 40px;
      background-color: #fff;
      color: #000;
      text-align: center;
      border-radius: 6px;
      margin: 50px auto;
      cursor: pointer;
      margin: 0;
      padding: 0;
      border: 1px solid transparent; //自定义边框
      outline: none; //消除默认点击蓝色边框效果
    }
  }
</style>
