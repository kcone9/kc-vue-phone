<template>
    <div class='forget'>
<mt-header fixed title='忘记密码'> 
    <router-link to="/login" slot="left">
    <mt-button icon="back">返回</mt-button>
    </router-link>
</mt-header>
<ul class="handle">
        <li><input type="text" placeholder='输入您绑定的邮箱' autofocus> </li>
        <li><input type="text" placeholdar='验证码'><button>获取验证码</button></li>
</ul>
<mt-button size='large' type='primary' @click='next'>下一步</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    methods:{
        next(){

        }
    }
}
</script>
<style>
div>.handle{
    margin-top:10%;
    width:100%;
    list-style-type:none;
    padding:12px 16px;
    margin-bottom:10px;
}
div>.handle>li{
    width:100%;
    height:50px;
    font-size:20px;
}
div>.handle>li:first-child{
    text-align:left;
    line-height:50px;
    color:#bababa;
}
div>.handle>li:first-child>input{
    width:100%;
    height:100%;
}
div>.handle>li:not(:first-child){
    color:#bababa;
}
div>.handle>li>input{
    width:60%;
    height:100%;
    margin-bottom:0;
    display:inline-block;
}
div>.handle>li>button{
    width:40%;
    height:100%;
    display:inline-block;
    font-size:18px;
}
div>.mint-button{
    background-color:#9d9aef;
    height:50px;
    width:80%;
    margin:0 auto;
}
.app-container>div{
    height:736px;
}
</style>


