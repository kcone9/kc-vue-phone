<template>
<div class="user">
<mt-header fixed title='会员中心' class='login'> 
<router-link to="/" slot="left">
<mt-button icon="back">返回</mt-button>
</router-link>
</mt-header>
<div class='header'><div class='tou'><img src="" alt=""></div><p class='uname'><span>用户名</span> <span>黄金会员</span></p></div>
<div class="order"><div class='order_th'><span class='mui-icon-extra mui-icon-extra-order'></span><span>我的订单</span><span class="mui-icon mui-icon-arrowright order_th_left"></span></div>
<div class="order_nav">
<div><div class='mui-icon-extra mui-icon-extra-card'></div><p>待收货</p></div>
<div><div class="mui-icon-extra mui-icon-extra-express"></div><p>待发货</p></div>
<div><div class="mui-icon-extra mui-icon-extra-gift"></div><p>待收货</p></div>
<div> <div class="mui-icon-extra mui-icon-extra-regist"></div><p>已收货</p> </div>
</div></div>
<ul class="list"><li><div class='list_left'><div class="text"><div class="mui-icon-extra mui-icon-extra-gift"></div><div>收货人信息</div></div></div><div><div class="mui-icon mui-icon-arrowright"></div></div></li>
<li><div class='list_left'><div class="text"><div class="mui-icon-extra mui-icon-extra-gold"></div><div>我的积分</div></div></div><div><div class="mui-icon mui-icon-arrowright"></div></div></li>
<li><div class='list_left'><div class="text"><div class="mui-icon mui-icon-star"></div><div>我的收藏</div></div></div><div><div class="mui-icon mui-icon-arrowright"></div></div></li>
<li><div class='list_left'><div class="text"><div class="mui-icon-extra mui-icon-extra-new"></div><div>最新公告</div></div></div><div><div class="mui-icon mui-icon-arrowright"></div></div></li>
<li><div class='list_left'><div class="text"><div class="mui-icon mui-icon-contact"></div><div>个人资料</div></div></div><div><div class="mui-icon mui-icon-arrowright"></div></div></li>
<li><div class='list_left'><div class="text"><div class="mui-icon mui-icon-locked"></div><div>修改密码</div></div></div><div><div class="mui-icon mui-icon-arrowright"></div></div></li>
<li><div class='list_left'><div class="text"><div class="mui-icon mui-icon-upload"></div><div>退出当前登录</div></div></div><div><div class="mui-icon mui-icon-arrowright"></div></div></li></ul>

</div>
</template>
<script>
export default {
    
}
</script>
<style >
.app-container>.user{
    background-color:#dad3d3;
}
div>.order{
    width:100%;
    height:134px;
    background-color:#fff;
}
div>.order>.order_th{
    width:100%;
    height:60px;
    border-bottom:1px solid #dad3d3;
    padding-left:4%;
}
div>.order>.order_th>span:first-child{
    padding:0 4%;
}
div>.order>.order_th>span:nth-child(2){
    color:coral;
    line-height:60px;
}
div>.order>.order_th>.order_th_left{
    float:right;
    line-height:60px;
}
div>.order>.order_nav{
    width:100%;
    height:74px;
    display:flex;
    justify-content:space-between;
}
div>.order>.order_nav>div{
    width:25%;
    height:100%;
    text-align:center;
    display:flex;
    flex-direction:column;
    margin-top:3%;
    align-items:center;
}
div>.order>.order_nav>div>p{
    margin-bottom:0;
}
div>.header{
    margin-top:40px;;
    width:100%;
    height:100px;
    position:relative;
    background-color:#fff;
    margin-bottom:2%;
}
div>.header>.tou{
    width:78px;
    height:78px;
    border:1px solid #dad3d3;
    border-radius:50%;
    margin-top:2%;
    margin-left:10%;
    display:inline-block;
}
div>.header>.tou>img{
    width:84px;
    height:84px;
}
div>.header>p{
    display:inline-block;
    width:50%;
    height:40px;
    position:absolute;
    top:30px;
    left:36%;
    margin-bottom:0;
}
div>.header>p>span{
    line-height:40px;
    display:inline-block;
}
div>.header>p>span:first-child{
    font-size:16px;
    width:38%;
    overflow:hidden;
	text-overflow:ellipsis;
	-webkit-line-clamp:1;
	-webkit-box-orient: vertical;
	display: -webkit-box;
}
div>.header>p>span:last-child{
    position:absolute;
    top:0;
    right:30%;
    color:red;
}
div>.list{
    list-style-type:none;
    width:100%;
    height:502px;
    padding-left:0;
    margin-bottom:0;
    background-color:#dad3d3;
}
div>.list>li{
    width:100%;
    height:70px;
    border-bottom:1px solid #dad3d3;
    background-color:#fff;
}
div>.list>li:nth-child(6){
    border:0;
}
div>.list>li:last-child{
    margin-top:10px;
    border:0;
}
div>.list>li>.list_left{
    float:left;
    width:50%;
    height:100%;
    display:flex;
}
div>.list>li>.list_left>div{
    align-self:center;
}
div>.list>li>div:last-child{
    width:50%;
    height:100%;
    float:right;
    display:flex;
    justify-content:flex-end;
}
div>.list>li>div:last-child>div{
    align-self:center;
}
div>.list>li>.list_left>.text{
    display:flex;
    margin:0 auto;
    width:80%;
    height:40px;
    justify-content:space-around;
}
div>.list>li>.list_left>.text>div{
    align-self:center;
    
}
</style>




