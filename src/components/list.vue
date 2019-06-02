<template>
<div calss='li'>
<mt-header fixed title='万世批发网'> 
    <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
    </router-link>
</mt-header>
<div class='operate'><router-link to='./login'><span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled" ></span> 登录</router-link>
<router-link to='./register'><span class="mui-icon-extra mui-icon-extra-addpeople"></span> 注册</router-link>
<router-link to='/shop'><span class="mui-icon-extra mui-icon-extra-cart"></span>购物车</router-link>
</div>
<ul class="mui-table-view">
   <div></div> <li class="mui-table-view-cell">服装 衫 裤 裙 内衣 </li>
</ul>
<div class='nav'>
<div>名称<span class="mui-icon mui-icon-arrowdown"></span></div><div>时间</div><div>价格</div><div>筛选<span class="mui-icon-extra mui-icon-extra-topic"></span></div>
</div>
<ul class="shoplist"><li><img src="./image/list/clothing/clo1.jpg" alt=""><p>2018秋季新款风衣女衣服 韩国女士薄款休闲连帽开衫学生外套卫衣</p></li>
<li><img src="./image/list/clothing/clo2.jpg" alt=""><p>【仅供天天特价爆款】夏季新款女装七分袖大码连衣裙A字裙女裙子</p></li>
<li><img src="./image/list/clothing/clo3.jpg" alt=""><p>18春秋新款新生儿衣服纯棉婴儿衣服内衣 宝宝和尚服一件代发</p></li>
<li><img src="./image/list/clothing/clo4.jpg" alt=""><p>18年夏季新款女士睡衣牛奶丝短袖短裤绣花斑马休闲套装自产自销</p></li>
<li><img src="./image/list/clothing/clo5.jpg" alt=""><p>18秋季新款 纯棉儿童内衣套装 宝宝秋衣秋裤 童内衣内裤一件代发</p></li>
<li><img src="./image/list/clothing/clo6.jpg" alt=""><p>18秋季新款婴儿连体衣 纯棉宝宝哈 婴幼儿长袖爬服童装一件代发</p></li>
<li><img src="./image/list/clothing/clo7.jpg" alt=""><p>18秋男女童长袖t恤 儿童打底衫中小童纯棉单件上衣一件代发</p></li>
<li><img src="./image/list/clothing/clo8.jpg" alt=""><p>18春秋款中大童内衣内裤纯棉套装 儿童秋衣秋裤套装长袖满花</p></li>
<li><img src="./image/list/clothing/clo9.jpg" alt=""><p>18夏季儿童短袖套装 彩棉提花宝宝夏装童装男童t恤套装卡通</p></li>
<li><img src="./image/list/clothing/clo10.jpg" alt=""><p>18夏季女士中长款睡衣牛奶丝短袖七分裤卡通唐老鸭套装自产自销</p></li>
</ul>

</div>
</template>
<script>
export default {
    data(){
        return{
            rihght:[{
                content:'Delete',
                style:{background:'red',color:'#817bf3'},
                handler:()=>this.$messagebox('deaete')
            }]
        }
    }
}
</script>
<style>
div>.operate{
padding-top:12%;
padding-bottom:2.5%;
}
.app-container .operate .mui-icon-icon-contact-filled{
	margin-left:4%;
}
.app-container>div>.operate>a>.mui-icon-extra-addpeople{
	margin-left:4%;
}
.app-container>div>.operate>a>.mui-icon-extra-cart{
	margin-left:4%;
}
.mui-table-view{
    color:#9e9aef;
}
.mui-table-view>div{
    margin-top:1%;
    width:2%;
    height:30px;
    background-color:#9e9aef;
    float:left;
}
div>.nav{
    display:flex;
    justify-content:space-around;
    width:100%;
    height:50px;
}
div>.nav>div{
    width:24%;
    height:80%;
    text-align:center;
    line-height:40px;
    margin-top:1%;
}
div>.shoplist{
    list-style-type:none;
    width:100%;
    height:100%;
    padding-left:0;
    margin-top:4px;
}
div>.shoplist>li{
    position:relative;
    padding:4px 6px;
    background-color:#fff;
}
div>.shoplist>li>img{
    width:120px;
    height:120px;
    display:inline-block;
    vertical-align:middle;
}
div>.shoplist>li>p{
    width:64%;
    height:40px;
    display:inline-block;
    position:absolute;
    top:30%;
    right:3%;
    margin-bottom:0;
    font-size:18px;
    overflow:hidden;
	text-overflow:ellipsis;
	-webkit-line-clamp:2;
	-webkit-box-orient: vertical;
    padding-left:2%;
}
</style>


