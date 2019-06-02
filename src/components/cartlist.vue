<template>
<div class='cart'>
<mt-header fixed title='会员中心' class='login'> 
<router-link to="/" slot="left">
<mt-button icon="back">返回</mt-button>
</router-link>
</mt-header>
<ul class='cartlist'>
    <li v-for='(item,i) of list' :key='i'><div class="left"><div @click="check(i)" :class="{'mui-icon':item.cb,'mui-icon-checkmarkempty':item.cb}"></div><img class="gg" src="./image/recommend/re3.jpg" alt=""><div>
        </div></div><div class="right"><div ><div><div class="title">{{item.clothing}}</div> <div class="del mui-icon mui-icon-trash"></div></div>
        <div>{{item.logo}}</div></div><div><div class="but"><button @click="numinfo($event,-1,i)">-</button><input type="number" v-model="item.num" :data-idn='i'><button @click="numinfo($event,+1,i)">+</button></div><div class="price">
            <div>{{item.price}}</div></div></div></div></li>
</ul>
<div class="all"><div><div :class="{'all-btn mui-icon mui-icon-checkmarkempty':all}" @click="alls()"></div><div>全选</div></div><div><div>总计:<span>{{allprice}}</span></div><!--div>已选{{check}}</div--></div><div><button>下单</button></div></div>

</div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            all:false,
            allprice:0,
            list:[],
            num:1
        }},
        methods:{
            go(){
                this.axios.get('http://127.0.0.1:5050/details/cartlist').then(res=>{
                    if(res.data.code==2){
                        Toast('您未登陆');
                        setTimeout(function(){
                            location.href='http://127.0.0.1:8090/#/login'
                        },1500)
                    }else{
                        var rows=res.data.data.data;
                        for(var l of rows){
                            l.cb=false
                            l.prices=l.price
                        }
                        this.list=rows
                    }
                })
            },
            check(i){
                if(this.list[i].cb==false){
                    this.list[i].cb=true
                }else{
                    this.list[i].cb=false
                }
                this.allprice=0
                var num=0
                for(var l of this.list){
                    if(l.cb==true){
                        num=num+1
                        this.allprice=this.allprice+parseInt(l.price)
                    }
                }
                if(num==this.list.length){
                    this.all=true
                }else{
                    this.all=false
                }
            },
            alls(){
                if(this.all){
                    this.all=false
                    for(var l of this.list){
                    l.cb=false
                    }
                    this.allprice=0
                }else{
                    this.all=true
                    for(var l of this.list){
                    l.cb=true
                    }
                    this.allprice=0
                    for(var l of this.list){
                    if(l.cb==true){
                        this.allprice=this.allprice+parseInt(l.price)
                    }
                }
                }
                
            },
            numinfo(e,val,i){
                e.preventDefault()
                this.list[i].num=this.list[i].num+val
                if(this.list[i].num<1){
                    this.list[i].num=1
                }
                this.list[i].price=parseInt(this.list[i].num * parseInt(this.list[i].prices))
                if(this.list[i].cb){
                    this.allprice=0
                    for(var l of this.list){
                    if(l.cb==true){
                        this.allprice=this.allprice+parseInt(l.price)
                    }
                        }
                            }
            }
        },
    created(){
        this.go()
    }
}
</script>
<style>
/*.app-container*/
.app-container>.cart{
    background-color:#f3f3f3;
}
.app-container>.cart>.cartlist{
    width:100%;
    /* height:100%; 不能固定100%高这样高就会变成手机的最大像素 会变成固定值 */
    margin-top:40px;
    list-style-type:none;
    padding-left:0;
    margin-bottom:0;
    background-color:#fff;
}
.cart>.cartlist>li{
    width:100%;
    height:130px;
    padding:5px 4px;
    display:flex;
    border-bottom:1px solid #dad3d3;
}
.cart>.cartlist>li>.left{
    width:40%;
    height:120px;
    display:flex;
}
.cart>.cartlist>li>.left>div{
    padding:0 8px;
}
.cart>.cartlist>li>.left>div:first-child{
    width:40%;
    height:28.5%;
    border-radius:50%;
    border:1px solid #dad3d3;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0;
    margin: 0 6px;
    box-sizing:border-box;
}
.cart>.cartlist>li>.left div,img{
    align-self:center;
}
.cartlist>li>.left>.gg{
    width:60%;
    height:84px;
    border:1px solid #dad3d3;
}
.cartlist>li>.right{
    width:60%;
    height:120px;
}
.cartlist>li>.right>div:first-child{
    width:100%;
    height:60%;
}
.cartlist>li>.right>div:first-child>div:first-child{
    width:100%;
    height:60%;
    display:flex;
}
.cartlist>li>.right>div:first-child>div:first-child>.title{
    width:80%;
    height:100%;
    overflow:hidden;
	text-overflow:ellipsis;
	-webkit-line-clamp:2;
	-webkit-box-orient: vertical;
	display: -webkit-box;
}
.cartlist>li>.right>div:first-child>div:first-child>.del{
    width:20%;
    height:100%;
    text-align:center;
}
.cartlist>li>.right>div:first-child>div:last-child{
    width:100%;
    height:40%;
    overflow:hidden;
	text-overflow:ellipsis;
	-webkit-line-clamp:2;
	-webkit-box-orient: vertical;
	display: -webkit-box;
}
.cartlist>li>.right>div:last-child{
    width:100%;
    height:40%;
    display:flex;
    justify-content:space-between;
}
.cartlist>li>.right>div:last-child>.but{
    width:50%;
    height:40px;
    display:flex;
}
.cartlist>li>.right>div:last-child>.but>button{
    padding:0;
    width:38px;
    height:38px;
}
.cartlist>li>.right>div:last-child>.price{
    width:50%;
    height:40px;
    display:flex;
    justify-content:flex-end;
}
.cartlist>li>.right>div:last-child>.price>div{
    align-self:center;
    width:70%;
    margin-right:10%;
    overflow:hidden;
	text-overflow:ellipsis;
	-webkit-line-clamp:1;
	-webkit-box-orient: vertical;
	display: -webkit-box;
    text-align:right;
    color:red;
}
.cartlist>li>.right>div:last-child>div{
    align-self:center;
}
.cartlist>li>.right>div:last-child>.but>input{
    margin-bottom:0;
    padding:0;
    text-align:center;
    width:40%;
    font-size:14px;
}
.cart>.all{
    width:100%;
    height:70px;
    border-top:1px solid #dad3d3;
    position:fixed;
    bottom:0;
    z-index:5;
    display:flex;
    background-color:#fff;
}
.cart>.all>div{
    align-self:center;
}
.cart>.all>div:first-child{
    width:30%;
    height:100%;
    display:flex;
}
.cart>.all>div:first-child>div{
    align-self:center;
    
}
.cart>.all>div:first-child>div:first-child{
    width:30%;
    height:34px;
    border:1px solid #dad3d3;
    margin:0 4px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
}
.cart>.all>div:first-child>.all-btn{
    width:24px;
    height:24px;
    border:1px solid #dad3d3;;
    border-radius:50%;
    margin: 0 8px;
}
.cart>.all>div:nth-child(2){
    width:30%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
}
.cart>.all>div:nth-child(2)>div{
    align-self:center;
    width:100%;
    text-align:center;
    overflow:hidden;
	text-overflow:ellipsis;
	-webkit-line-clamp:1;
	-webkit-box-orient: vertical;
	display: -webkit-box;
}
.cart>.all>div:nth-child(2)>div>span{
    color:red;
}
.cart>.all>div:last-child{
    width:40%;
    height:100%;
    display:flex;
    justify-content:center;
}
.cart>.all>div:last-child>button{
    width:80%;
    height:60%;
    align-self:center;
    background-color:#9d9aef;
}

</style>
