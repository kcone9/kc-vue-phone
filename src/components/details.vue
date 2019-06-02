<template>
  <div class="deta">
    <div class="base">
      <div>
        <div class="mui-icon mui-icon-star-filled" :style="sty" @click="coll"></div>
        <div class="cart" @click="cart(1)">加入购物车</div>
        <div @click="cart(0)">立即购买</div>
      </div>
    </div>
    <div class="fav" :style="cartcli">
      <div @click="cart()" :style="top"></div>
      <div>
        <p>
          <i class="mui-icon mui-icon-closeempty" @click="cart()"></i>
        </p>
        <div>
          <img src="http://127.0.0.1:5050/images/c/cart.jpg" alt>
          <p>
            <span class="first">￥45</span>
            <span>库存143件</span>
            <span>选择：颜色大小</span>
          </p>
        </div>
        <p class="color">
          <span>颜色分类</span>
          <span>
            <button>黄色</button>
            <button>红色</button>
          </span>
        </p>
        
        <p class="price">
          <span>购买数量</span>
          <span>
            <button @click="prices($event,-1)">-</button>
            <span>{{pricen}}</span>
            <button @click="prices($event,+1)">+</button>
          </span>
        </p>
        <div class="btn"><button>确定</button></div>
      </div>
    </div>
    <div class="home" :style="home">
      <div class="mui-icon mui-icon-home" @click="share(1)"></div>
      <div class="mui-icon-extra mui-icon-extra-share" @click="share(0)"></div>
    </div>
    <mt-swipe :auto="2500" class="details">
      <mt-swipe-item>
        <img src="./image/details/btuin/car1.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./image/details/btuin/car2.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./image/details/btuin/car3.jpg" alt>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./image/details/btuin/car4.jpg" alt>
      </mt-swipe-item>
    </mt-swipe>
    <div class="title">
      <p>澳捷尔正版儿童维尼熊毛绒玩具新款小熊公仔大号维尼熊跳跳虎玩偶</p>
    </div>
    <div class="nav-icon">
      <div class="mui-icon mui-icon-arrowleft" @click="back(1)"></div>
      <div class="mui-icon-extra mui-icon-extra-cart" @click="back(2)"></div>
      <div class="mui-icon mui-icon-more" @click="back(3)"></div>
    </div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell">
        请选择 颜色 尺码
        <div class="mui-icon mui-icon-arrowright"></div>
      </li>
    </ul>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">详情</mt-tab-item>
      <mt-tab-item id="2">参数</mt-tab-item>
      <mt-tab-item id="3">评论</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1" class="det">
        <img src="./image/details/btuin/de1.jpg" alt>
        <img src="./image/details/btuin/de2.jpg" alt>
        <img src="./image/details/btuin/de3.jpg" alt>
        <img src="./image/details/btuin/de4.jpg" alt>
        <img src="./image/details/btuin/de5.jpg" alt>
        <img src="./image/details/btuin/de6.jpg" alt>
        <img src="./image/details/btuin/de7.jpg" alt>
        <img src="./image/details/btuin/de8.jpg" alt>
        <img src="./image/details/btuin/de9.jpg" alt>
        <img src="./image/details/btuin/de10.jpg" alt>
        <img src="./image/details/btuin/de11.jpg" alt>
        <img src="./image/details/btuin/de12.jpg" alt>
      </mt-tab-container-item>
      <mt-tab-container-item id="2" class="meter">
        <ul class="tab">
          <li>
            <span>公仔名称</span>
            <p>正版维尼熊公仔</p>
          </li>
          <li>
            <span>品牌</span>
            <p>Aoger</p>
          </li>
          <li>
            <span>材质</span>
            <p>超柔短毛绒</p>
          </li>
          <li>
            <span>大长型号</span>
            <p>中号22-30cm</p>
          </li>
          <li>
            <span>零售价</span>
            <p>88.00</p>
          </li>
          <li>
            <span>批发价</span>
            <p>比38元更低</p>
          </li>
          <li>
            <span>编号</span>
            <p>w205</p>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="3" class="con">
        <div class="special">
          <img src="./image/details/special.jpg" alt>
          <p>亲~~快来评论吧！</p>
        </div>
        <p>
          <span class="mui-icon mui-icon-compose"></span>我要评论！
        </p>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "1",pricen:1,
      active: "",
      sty: { color: "rgba(255,156,1,0.3)", opacity: "1" },
      issty: true,
      cartcli: { height: "0%", visibility: "hidden" },
      iscart: true,
      home: { height: "0px", opacity: "0", visibility: "h" },
      ishome: true,
      bot: { height: "50%" },
      top: { height: "50%" }
    };
  },
  methods: {
    coll(e) {
      if (this.issty) {
        this.sty.color = "rgba(255,156,1,1)";
        this.issty = false;
      } else {
        this.sty.color = "rgba(255,156,1,0.3)";
        this.issty = true;
      }
    },
    cart(i) {
      if (this.iscart) {
        this.cartcli.height = "100%";
        this.cartcli.opacity = "1";
        this.cartcli.visibility = "visible";
        this.iscart = false;
      } else {
        this.cartcli.height = "0%";
        this.cartcli.opacity = "0";
        this.cartcli.visibility = "hidden";
        this.iscart = true;
      }
    },
    prices(e,i){
        e.preventDefault()
        this.pricen=this.pricen+i
        if(this.pricen<1){
            this.pricen=1
        }
    },
    share(e) {
      if (e == 1) {
        this.$router.push("/home");
      } else {
        //出现分享轮播 或 其他分享样式
      }
    },
    back(e) {
      if (e == 1) {
        this.$router.push("/home");
      } else if (e == 2) {
        this.$router.push("/cartlist");
      } else {
        if (this.ishome) {
          this.home.height = "90px";
          this.home.opacity = "1";
          this.home.visibility = "visible";
          this.ishome = false;
        } else {
          this.home.height = "0px";
          this.home.opacity = "0";
          this.home.visibility = "hidden";
          this.ishome = true;
        }
      }
    }
  },
  created() {},
  components: {}
};
</script>
<style>
/*先前不能控制宽高是因为home.vue控制本页面的元素*/
.app-container > .deta {
  background-color: transparent;
}
.deta > .home {
  width: 10%;
  height: 0px;
  position: fixed;
  right: 10px;
  top: 8%;
  z-index: 2;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  transition: 0.5s;
  visibility: hidden;
}
.deta > .home > div {
  width: 100%;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(213, 213, 214, 0.8);
}
.deta > .home > div:first-child {
}
.deta > .fav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 0%;
  opacity: 1;
  z-index: 2;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  visibility: hidden;
}
.deta > .fav > div:first-child {
}
.deta > .fav > div:first-child,
.deta > .fav > div:last-child {
  height: 50%;
  width: 100%;
}
.deta > .fav > div:last-child {
  background-color: #fff;
}
.deta > .fav > div:last-child > p {
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 0;
}
.deta > .fav > div:last-child > p > i {
  position: absolute;
  right: 2%;
  font-size: 40px;
}
.deta > .fav > div:last-child > div {
  width: 100%;
  height: 40%;
  box-sizing: border-box;
  padding: 2px 6px;
  display: flex;
  align-items: center;
}
.deta > .fav > div:last-child > .color {
  width: 100%;
  height: 22%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 6px;
  border-bottom: 1px solid #f5f5f5;
}
.deta > .fav > div:last-child > p > span {
  width: 100%;
  height: 35%;
  color: black;
}
.deta > .fav > div:last-child > p > span:last-child {
  height: 65%;
  margin-top: 4px;
}
.deta > .fav > div:last-child > p > span > button {
  width: 30%;
  margin-right: 6px;
}
.deta > .fav > div:last-child > .price {
  width: 100%;
  height: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.deta > .fav > div:last-child > .price > span:first-child {
  box-sizing: border-box;
  padding: 0 6px;
  display: flex;
  align-items: center;
}
.deta > .fav > div:last-child > .price > span:last-child {
  display: flex;
  margin-top: 0;
  justify-content: flex-end;
  align-items: center;
}
.deta > .fav > div:last-child > .price > span:last-child > button {
  width: 30px;
  height: 30px;
  margin-right: 0;
  background-color:#f5f5f5;
  border:0;
}
.deta > .fav > div:last-child > .price > span:last-child > span {
  width: 30px;
  height: 30px;
  font-size:12px;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#f5f5f5;
  margin:0 2px;
}
.deta > .fav > div:last-child >.btn{
    width:100%;
    height:14%;
    margin-top:2%;
    display:flex;
    justify-content:center;
    align-items:center;
}
.deta > .fav > div:last-child >.btn>button{
    width:98%;
    background-color:#ff7101;
    border-radius:20px;
}
.deta > .fav > div:last-child > div > img {
  width: 30%;
  height: 92px;
  display: flex;
}
.deta > .fav > div:last-child > div > p {
  width: 66%;
  height: 92px;
  margin-bottom: 0;
  margin-left: 6px;
  display: flex;
  flex-direction: column;
}
.deta > .fav > div:last-child > div > p > span {
  width: 100%;
  box-sizing: border-box;
  padding: 0 6px;
}
.deta > .fav > div:last-child > div > p > .first {
  height: 40%;
  color: #fd5100;
  font-size: 22px;
  display: flex;
  align-items: center;
}
.deta > .fav > div:last-child > div > p > span:not(.first) {
  height: 30%;
}
.deta > .fav > div:last-child > div > p > span:nth-child(2) {
  color: #9c9c9c;
}
.deta > .fav > div:last-child > div > p > span:last-child {
  color: black;
}
/* ------------------------------- */
.deta > .base {
  width: 100%;
  height: 6%;
  position: fixed;
  bottom: 0;
  z-index: 1;
  background-color: #ffffff;
}
.deta > .base > div {
  width: 80;
  height: 100%;
  margin-left: 15%;
  margin-right: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.deta > .base > div > div:first-child {
  width: 10%;
  color: rgba(255, 156, 1, 0.3);
}
.deta > .base > div > div:last-child,
.deta > .base > div > .cart {
  width: 45%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.deta > .base > div > div:last-child {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: #9d9aef;
  color: #fff;
}
.deta > .base > div > .cart {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border: 1px solid #9d9aef;
}
.details > .mint-swipe-items-wrap > .mint-swipe-item > img {
  height: 100%;
  width: 100%;
}
.deta > .details {
  height: 345px;
  width: 100%;
}
.deta > .nav-icon {
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 50px;
  top: 0;
}
.deta > .nav-icon > div {
  background-color: rgba(213, 213, 214, 0.8);
  text-align: center;
  line-height: 36px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.deta > .nav-icon > div:first-child {
  margin-top: 7px;
  margin-left: 10px;
}
.deta > .nav-icon > div:last-child {
  position: absolute;
  right: 0;
  top: 0;
  top: 7px;
  right: 10px;
}
.deta > .nav-icon > div:nth-child(2) {
  position: absolute;
  top: 7px;
  right: 66px;
}
.deta > .title {
  position: absolute;
  width: 100%;
  height: 50px;
  top: 266px;
}
.deta > .title > p {
  margin: 0 auto;
  height: 100%;
  width: 90%;
  color: #fff;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
.mint-navbar > .mint-tab-item > .mint-tab-item-label {
  font-size: 18px;
}

.meter > .tab {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  background-color: #fff;
  margin-top: 4px;
}
.meter > .tab > li > span {
  display: inline-block;
  color: #c2c2c2;
  width: 40%;
  height: 100%;
  line-height: 53px;
  padding-left: 4%;
}
.meter > .tab > li > p {
  display: inline-block;
  margin-bottom: 0;
  width: 50%;
  height: 100%;
  line-height: 53px;
  color: #333;
}
.meter > .tab > li {
  width: 100%;
  height: 53px;
  border: 1px solid #dddddd;
}
.mint-tab-container-wrap > .det > img {
  width: 100%;
}
.mint-tab-container-wrap > .con {
  text-align: center;
  width: 100%;
}
.mint-tab-container-wrap > .con > p {
  text-align: right;
  padding-top: 4px;
  color: rgba(157, 154, 239, 1);
}
</style>
