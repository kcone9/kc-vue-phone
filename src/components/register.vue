<template>
<div>
<mt-header fixed title='会员注册' class='head'> 
    <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
    </router-link>
</mt-header>
<div class="field">
<mt-field label="用户名" placeholder="用户名3-8位字符" v-model="username" :state='usersta'></mt-field>
<mt-field label="密码" placeholder="8至16位英文数字组合" type="password" v-model="password" :state='passsta'></mt-field>
<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email" :state='emailsta'></mt-field>
<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone" :state='phonesta'></mt-field>
</div>
<div class='check'><input type="checkbox" @change='check'>我已经同意并阅读 <router-link to=''>《会员注册协议》</router-link></div>
<mt-button size='large' type='primary' @click='register' >注册</mt-button>

</div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            username:'',nameplac:false,usersta:'',
            password:'',passplac:false,passsta:'',
            email:'',emailplac:false,emailsta:'',
            phone:'',phoneplac:false,phonesta:'',
            ischeck:false
        }
    },
    methods:{
        check(e){
            this.ischeck=e.target.checked;
        },
        register(){
            if(this.nameplac==false){
                Toast('用户名不符合要求');
            }else if(this.passplac==false){
                Toast('密码不符合要求');
            }else if(this.emailplac==false){
                Toast('邮箱格式不正确');
            }else if(this.phoneplac==false){
                Toast('您输入了错误的手机号');
            }else if(this.ischeck==false){
                Toast('您没同意条款')
            }else{
                var postdata=this.qs.stringify({
                    user_name:this.username,
                    pass:this.password,
                    email:this.email,
                    phone:this.phone
                })
                var postname=this.qs.stringify({
                    user_name:this.username
                })
                this.axios.post(`http://127.0.0.1:5050/user/uname`,postname).then(res=>{
                    if(res.data=='1'){
                        this.usersta='error'
                        Toast('该用户名已被占用！')

                    }else{
                        this.usersta='success'
                        this.axios.post('http://127.0.0.1:5050/user/register',postdata).then(res=>{
                    if(res.data.code=='1'){
                        Toast('注册成功！')
                        this.$router.push(`/home?user_name=${res.data.user}`)
                    }else{
                        Toast('注册失败！')
                    }
                })
                    }
                })
            }
        }
    },
    watch:{
       username(){
           var str=this.username.length
           if(str>=3 && str<=16){
               this.usersta='success'
               this.nameplac=true;
           }else{
               this.usersta='error'
               this.nameplac=false;
        }
           },
           password(){
               if(this.password.search(/\w{8,16}/ig)!=-1){
                   this.passsta='success';
                    this.passplac=true;
               }else{
                   this.passsta='error';
                    this.passplac=false;
               }
           },
           email(){
               if(this.email.search(/^(\w{1,20})@(\w{1,10}).com/ig)!=-1){
                   this.emailsta='success';
                    this.emailplac=true;
               }else{
                   this.emailsta='error';
                   this.emailplac=false;
               }
           },
           phone(){
               if(this.phone.search(/1[3-8]\d{9}/ig)!=-1){
                    this.phonesta='success';
                   this.phoneplac=true;
               }else{
                    this.phonesta='error';
                   this.phoneplac=false;
               }
           }
    }
}
</script>

<style>
div>.head{
    background-color:#9d9aef;
}
.field{
    padding-top:11%;
}
.app-container>div>.field>a>.mint-cell-wrapper>.mint-cell-value>input{
    margin-bottom:0 ;
}
.app-container>div>.field>a{
    border:1px soild rgba(0, 0, 0, .2);
    margin-top:1px;
}
.app-container>div>.check{
    width:100%;
    height:30px;
    line-height:30px;
}
.app-container>div>.check>a{
    color:blue;
}
.app-container>div>.check>input{
    width:16px;
    height:16px;
    vertical-align:middle;
    margin-left:6px;
    background-color:blue;
}
.app-container>div>.passreg{
    margin-top:2%;
    text-align:right;
}
.app-container>div>.passreg>a:last-child{
    margin-left:4%;
    margin-right:2%;
}
</style>
