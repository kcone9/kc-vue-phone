<template>
<div class="parent">
<mt-header fixed title='会员登录' class='login'> 
    <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
    </router-link>
</mt-header>
<div class="field">
<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
</div>
<div class='check'><input type="checkbox" @change='check' ><span>记住我(两周内免登陆)</span></div>
<mt-button size='large' type='primary' @click='login'>登录</mt-button>
<div class="passreg"><router-link to='/forget'>忘记密码?</router-link><router-link to='/register'>立即注册</router-link></div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            username:'',
            password:'',
            ischeck:false
        }
    },methods:{
        dois(){
                var postdata=this.qs.stringify({
                    user_name:this.username,
                    pass:this.password
                })
                this.axios.post(`http://127.0.0.1:5050/user/login`,postdata).then(res=>{
                    // console.log(res.data.data)
                    if(res.data.code==1){
                        Toast('登录成功')
this.$router.push(`/home?user_name=${res.data.data[0].user_name}&user_id=${res.data.data[0].user_id}`)
                    }else{
                        Toast("登陆失败！用户名或密码错误")
                    }
                })
        },
        login(){
            if(this.username==''){
                Toast('用户名不能为空')
            }else if(this.password==''){
                Toast('密码不能为空')
            }else{//使用poss请求发送数据
            if(this.ischeck){
	    	localStorage.clear()
                localStorage['name']=this.username;
                this.dois()
            }else{
                this.dois()
            }
                }
        },
        check(e){
            var check=e.target.checked;
            this.ischeck=check;
            //用户是否同意免登陆
        }
    }
}
</script>
<style>
div>.login{
    background-color:#9d9aef;
}
.parent>.check>span{
    color:#868686;
    margin-left:2%;
}
</style>


