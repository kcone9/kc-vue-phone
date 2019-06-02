<template>
  <!--若这自己代入一class属性的话是没用的，查看浏览器页面根本显示不出自己的class要用页面出现的class名操作才有效果-->
  <div>
    <div id="aside" :style="aside">
      <ul :style="ul">
        <li>
          <router-link to="/list">
            首页
            <i class="mui-icon mui-icon-forward"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/list">
            服装
            <i class="mui-icon mui-icon-forward"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/list">
            饰品
            <i class="mui-icon mui-icon-forward"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/list">
            鞋袜
            <i class="mui-icon mui-icon-forward"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/list">
            包包
            <i class="mui-icon mui-icon-forward"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/list">
            电脑
            <i class="mui-icon mui-icon-forward"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/list">
            手机
            <i class="mui-icon mui-icon-forward"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/list">
            家电
            <i class="mui-icon mui-icon-forward"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/list">
            玩具
            <i class="mui-icon mui-icon-forward"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/list">
            联系我们
            <i class="mui-icon mui-icon-forward"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/list">
            会员登录
            <i class="mui-icon mui-icon-forward"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/list">
            会员注册
            <i class="mui-icon mui-icon-forward"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/list">
            会员中心
            <i class="mui-icon mui-icon-forward"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/list">
            留言板
            <i class="mui-icon mui-icon-forward"></i>
          </router-link>
        </li>
      </ul>
      <div @click="clo"></div>
    </div>
    <div class="parent">
      <mt-header fixed title="万世批发网" class="index">
        <router-link to="/" slot="left">
          <mt-button icon @click="goaside">
            <span class="mui-icon mui-icon-list"></span>
          </mt-button>
        </router-link>
      </mt-header>
      <div class="operate">
        <router-link class="active" v-show="good" to="/login">
          <span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span> 登录
        </router-link>
        <router-link class="active" v-show="isuser" :to="userurl">
          <span class="mui-icon mui-icon-contact mui-icon-icon-contact-filled"></span>
          {{user}}
        </router-link>
        <a @click="logout">
          <span class="mui-icon-extra mui-icon-extra-addpeople"></span>
          {{register}}
        </a>
        <router-link to="/cartlist">
          <span class="mui-icon-extra mui-icon-extra-cart"></span>购物车
        </router-link>
      </div>
      <div class="mui-content">
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/list">
              <img src="./image/index/grid/clothing.jpg" alt>
              <div class="mui-media-body">服装</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/list">
              <img src="./image/index/grid/jewelry.jpg" alt>
              <div class="mui-media-body">首饰</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/list">
              <img src="./image/index/grid/shoe.jpg" alt>
              <div class="mui-media-body">鞋袜</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/list">
              <img src="./image/index/grid/handbag.jpg" alt>
              <div class="mui-media-body">包包</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/list">
              <img src="./image/index/grid/computer.jpg" alt>
              <div class="mui-media-body">电脑</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/list">
              <img src="./image/index/grid/phone.jpg" alt>
              <div class="mui-media-body">手机</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/list">
              <img src="./image/index/grid/wiring.jpg" alt>
              <div class="mui-media-body">家电</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/list">
              <img src="./image/index/grid/toy.jpg" alt>
              <div class="mui-media-body">玩具</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/list">
              <img src="./image/index/grid/body.jpg" alt>
              <div class="mui-media-body">母婴用品</div>
            </router-link>
          </li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
            <router-link to="/list">
              <img src="./image/index/grid/cheap.jpg" alt>
              <div class="mui-media-body">特价</div>
            </router-link>
          </li>
        </ul>
      </div>
      <mt-swipe :auto="2500" class="home">
        <!--加入home原因是css样式还控制details.vue的元素，加home单独控制本页面-->
        <mt-swipe-item>
          <img src="./image/index/swipe/swipt1.jpg" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./image/index/swipe/swipt2.jpg" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./image/index/swipe/swipt3.jpg" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./image/index/swipe/swipt4.jpg" alt>
        </mt-swipe-item>
      </mt-swipe>
      <div class="mui-content body">
        <div class="mui-row">
          <div class="mui-col-sm-4 mui-col-xs-4" v-for="(n,i) of body1" :key="i">
            <router-link :to="`/details?id=${n.lid}`">
              <img :src="n.href" alt>
              <p>{{n.clothing}}</p>
            </router-link>
          </div>
          <!--
        <div class="mui-col-sm-4 mui-col-xs-4"><router-link to='/details'>
            <img src="./image/index/body/body2.jpg" alt="">
	    <p>2.4G遥控越野车 耐摔充电攀岩遥控车 大脚漂移四驱越野攀爬车</p></router-link>
        </div>
	<div class="mui-col-sm-4 mui-col-xs-4"><router-link to='/details'>
            <img src="./image/index/body/body3.jpg" alt="">
	    <p>x5c遥控飞机 超大耐摔四轴飞行器 儿童玩具航拍无人机 飞机航模</p></router-link>
          </div>-->
        </div>
        <div class="mui-row one">
          <div class="mui-col-sm-4 mui-col-xs-4" v-for="(n,i) of body2" :key="i">
            <router-link :to="`/details?id=${n.lid}`">
              <img :src="n.href" alt>
              <p>{{n.clothing}}</p>
            </router-link>
          </div>
          <!--
        <div class="mui-col-sm-4 mui-col-xs-4"><router-link to='/details'>
            <img src="./image/index/body/body5.jpg" alt="">
	    <p>澳捷尔正品hellokitty凯蒂猫公仔毛绒玩具kt猫抱枕玩偶女生日礼物</p></router-link>
        </div>
	<div class="mui-col-sm-4 mui-col-xs-4"><router-link to='/details'>
            <img src="./image/index/body/body6.jpg" alt="">
	    <p>爆款 1:12超大手势感应遥控变形车 充电一键变形机器人儿童玩具</p></router-link>
          </div>-->
        </div>
      </div>
      <div class="mui-content clothing">
        <div class="mui-row not">
          <div class="mui-col-sm-6 mui-col-xs-6">
            <img src="./image/index/clothing/clothing1.jpg" alt>
          </div>
          <div class="mui-col-sm-6 mui-col-xs-6">
            <img src="./image/index/clothing/clothing2.jpg" alt>
          </div>
        </div>
        <div class="mui-row">
          <div class="mui-col-sm-6 mui-col-xs-6">
            <img src="./image/index/clothing/clothing3.jpg" alt>
          </div>
          <div class="mui-col-sm-6 mui-col-xs-6">
            <img src="./image/index/clothing/clothing4.jpg" alt>
          </div>
        </div>
        <div class="mui-row">
          <div class="mui-col-sm-6 mui-col-xs-6">
            <img src="./image/index/clothing/clothing5.jpg" alt>
          </div>
          <div class="mui-col-sm-6 mui-col-xs-6">
            <img src="./image/index/clothing/clothing6.jpg" alt>
          </div>
        </div>
        <div class="mui-row">
          <div class="mui-col-sm-6 mui-col-xs-6">
            <img src="./image/index/clothing/clothing7.jpg" alt>
          </div>
          <div class="mui-col-sm-6 mui-col-xs-6">
            <img src="./image/index/clothing/clothing8.jpg" alt>
          </div>
        </div>
      </div>
      <div class="mui-content clothing underwear">
        <div class="mui-row not">
          <div class="mui-col-sm-6 mui-col-xs-6">
            <img src="./image/index/underwear/underwear1.jpg" alt>
            <p>2018pink英文字母运动小背心女抹胸带胸垫美背文胸吊带打底夏外贸</p>
          </div>
          <div class="mui-col-sm-6 mui-col-xs-6">
            <img src="./image/index/underwear/underwear2.jpg" alt>
            <p>厂家批文胸套装可爱微商少女学生小胸罩有钢圈女士内衣一件</p>
          </div>
        </div>
        <div class="mui-row">
          <div class="mui-col-sm-6 mui-col-xs-6">
            <img src="./image/index/underwear/underwear3.jpg" alt>
            <p>厂家少女内衣无钢圈文胸学生发育期纯棉质可爱女童小背心式</p>
          </div>
          <div class="mui-col-sm-6 mui-col-xs-6">
            <img src="./image/index/underwear/underwear4.jpg" alt>
            <p>厂家直销 活泼银点少女文胸罩套装 纯棉蕾丝学生少女内衣一件代发</p>
          </div>
        </div>
      </div>
      <div class="mui-content body phone">
        <div class="mui-row">
          <div class="mui-col-sm-4 mui-col-xs-4">
            <img src="./image/index/phone/phone1.jpg" alt>
            <p>HOOT/虹动三网通 4G智能手机一体机电信联通4g 全网通手机双卡X6P</p>
          </div>
          <div class="mui-col-sm-4 mui-col-xs-4">
            <img src="./image/index/phone/phone2.gif" alt>
            <p>7寸四核双卡双待3G电脑WiFi平板电脑</p>
          </div>
          <div class="mui-col-sm-4 mui-col-xs-4">
            <img src="./image/index/phone/phone3.jpg" alt>
            <p>9寸高清平板电脑 可打电话GSP导航蓝牙FM 8G大容量 厂家直销</p>
          </div>
        </div>
        <div class="mui-row">
          <div class="mui-col-sm-4 mui-col-xs-4">
            <img src="./image/index/phone/phone4.jpg" alt>
            <p>10.1寸八核平板电脑视网膜屏 双卡通话4G全网通带导航工厂定制</p>
          </div>
          <div class="mui-col-sm-4 mui-col-xs-4">
            <img src="./image/index/phone/phone5.jpg" alt>
            <p>10.1四核高清二合一平板电脑IPS屏 工厂定制PC OEM</p>
          </div>
          <div class="mui-col-sm-4 mui-col-xs-4">
            <img src="./image/index/phone/phone6.jpg" alt>
            <p>10.1英寸四核手机平板电脑可打电话通话3G WIFI导航定制厂家批发</p>
          </div>
        </div>
        <div class="mui-row">
          <div class="mui-col-sm-4 mui-col-xs-4">
            <img src="./image/index/phone/phone7.jpg" alt>
            <p>2018国产正品迷你安卓手机全网通电信4G指纹解锁八核5寸智能手机</p>
          </div>
          <div class="mui-col-sm-4 mui-col-xs-4">
            <img src="./image/index/phone/phone8.jpg" alt>
            <p>2018新品独秀LM1智能手机双曲屏十核6G运行电信4G全网通手机批发</p>
          </div>
          <div class="mui-col-sm-4 mui-col-xs-4">
            <img src="./image/index/phone/phone9.jpg" alt>
            <p>HOOT/虹动H8S 5寸八核4g版双卡双待国产智能机 安卓智能手机批发</p>
          </div>
        </div>
        <div class="mui-row">
          <div class="mui-col-sm-4 mui-col-xs-4">
            <img src="./image/index/phone/phone10.jpg" alt>
            <p>HOOT/虹动M13 低价批发 原装国产 8核 4G智能手机 双卡双待一体机</p>
          </div>
          <div class="mui-col-sm-4 mui-col-xs-4">
            <img src="./image/index/phone/phone11.jpg" alt>
            <p>电信4G手机 6.5寸大屏全网通三网通4G智能机十核安卓智能手机超薄</p>
          </div>
          <div class="mui-col-sm-4 mui-col-xs-4">
            <img src="./image/index/phone/phone12.jpg" alt>
            <p>工厂直销OEM定制贴牌笔记本电脑 11.6寸上网本折叠触摸轻薄超级本</p>
          </div>
        </div>
      </div>
      <ul
        class="soll"
        v-infinite-scroll="getMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="50"
      >
        <li v-for="(item,i) of list" :key="i">
          <div data-idx="i" @click="dis(i,0)">
            <img :src="item.img1" alt>
            <p>{{item.title1}}</p>
            <div><p>{{item.price1}}</p> <p><i class="mui-icon mui-icon-more"></i></p></div>
          </div>
          <div data-idx="i+1" @click="dis(i,1)">
            <img :src="item.img2" alt>
            <p>{{item.title2}}</p>
            <div><p>{{item.price2}}</p><p><i class="mui-icon mui-icon-more"></i></p></div>
          </div>
        </li>
      </ul>
      <mt-spinner type="fading-circle" color="#26a2ff"></mt-spinner>
    </div>
  </div>
</template>
<script>
import { MessageBox, Toast, Indicator } from "mint-ui";
export default {
  data() {
    return {
      good: true,
      user: "登录",
      userurl: "/user",
      isuser: false,
      register: "注册",
      user_name: this.$route.query.user_name,
      userid: this.$route.query.user_id,
      body1: [],
      body2: [],
      aside: { width: "0%" },
      asi: true,
      ul: { opacity: "0" },
      list: [] //1,2,3,4,5,6,7,8,9,7,9,78,34
    };
  },
  methods: {
    judeg(name) {
      if (name) {
        //判断用户名 是否存在 用户没有点击localstorage时如何判断用户的登录状态？
        this.good = false;
        this.isuser = true;
        this.user = name;
        this.register = "注销";
        this.userurl = "/user";
      } else {
        this.good = true;
        this.isuser = false;
        this.register = "注册";
        this.user = "登录";
        this.userurl = "/login";
      }
    },
    islogin(bool) {
      //用户注销和用户是否登录判断 非localstorage bool是true注销 false 判断登录
      if (bool) {
        this.axios.get("http://127.0.0.1:5050/user/islogin?no=0");
      } else {
        this.axios.get("http://127.0.0.1:5050/user/islogin").then(res => {
          if (res.data.code == 1) {
            //用户已处于登录状态
            this.judeg(res.data.reg.name);
            return true;
          } else {
            this.judeg(false);
            return false; //用户未登录
          }
        });
      }
    },
    go() {
      var value = localStorage.getItem("name"); //判断localstoreage有没有数据，没有就显示注销
      if (value == null) {
        this.judeg(this.user_name);
      } else {
        this.judeg(value); //有就让用户名显示出来
      }
      this.axios.get("http://127.0.0.1:5050/details/all").then(res => {
        var body = res.data;
        this.body1 = [body[12], body[13], body[14]];
        this.body2 = [body[15], body[16], body[17]];
      });
      this.islogin(false);
    },
    logout() {
      if (this.register == "注销") {
        MessageBox.confirm("", {
          message: "您确定注销该用户吗？",
          title: "提示",
          confirmButtonText: "确定",
          cancelButtonText: "取消"
        })
          .then(action => {
            if (action == "confirm") {
              //点击确定返回confirm
              if (localStorage.getItem("name") != null) {
                //若本地保存的localStorage不是空的就清除
                localStorage.clear();
              }
              console.log(233);
              this.islogin(true);
              location.replace("http://127.0.0.1:8090/");
            }
          })
          .catch(err => {
            if (err == "cancel") {
              //点击取消返回cancel
              Toast({
                message: "已取消",
                iconClass: "mui-icon mui-icon-checkmarkempty"
              });
            }
          });
      } else {
        this.$router.push("/register");
      }
    },
    getMore() {
      var rows = [];
      /*Indicator.open({
			text:"正在加载",
			spinnerType:"fading-circle"
		})*/
      for (var i = 1; i <= 10; i++) {
        var obj = {};
        if (i > 1 && i <= 5) {
          obj.img1 = `http://127.0.0.1:5050/images/scroll/${i + (i - 1)}.jpg`;
          obj.img2 = `http://127.0.0.1:5050/images/scroll/${i + i}.jpg`;
          obj.title1 = "商品" + (i + (i - 1));
          obj.title2 = "商品" + (i + i);
          obj.price1 = 100 + i + (i - 1);
          obj.price2 = 100 + i + i;
        } else if (i == 1) {
          obj.img1 = `http://127.0.0.1:5050/images/scroll/${i}.jpg`;
          obj.img2 = `http://127.0.0.1:5050/images/scroll/${i + 1}.jpg`;
          obj.title1 = "商品" + i;
          obj.title2 = "商品" + (i + 1);
          obj.price1 = 100 + i;
          obj.price2 = 100 + i + 1;
        } else {
          continue;
        }
        rows.push(obj);
      }

      setTimeout(() => {
        /*for(var i=1;i<=10;i++){
			 rows.push(Math.floor(Math.random()*100))
		}
		// Indicator.close()
		this.list= this.list.concat(rows);
		},1500)*/
        // var rows=[]
        for (var i = 1; i <= 10; i++) {
          var obj = {};
          if (i > 1 && i <= 5) {
            obj.img1 = `http://127.0.0.1:5050/images/scroll/${i + (i - 1)}.jpg`;
            obj.img2 = `http://127.0.0.1:5050/images/scroll/${i + i}.jpg`;
            obj.title1 = "商品" + (i + (i - 1));
            obj.title2 = "商品" + (i + i);
            obj.price1 = 100 + i + (i - 1);
            obj.price2 = 100 + i + i;
          } else if (i == 1) {
            obj.img1 = `http://127.0.0.1:5050/images/scroll/${i}.jpg`;
            obj.img2 = `http://127.0.0.1:5050/images/scroll/${i + 1}.jpg`;
            obj.title1 = "商品" + i;
            obj.title2 = "商品" + (i + 1);
            obj.price1 = 100 + i;
            obj.price2 = 100 + i + 1;
          } else {
            continue;
          }
          this.list.push(obj);
          // this.list= this.list.concat(rows);
        }
      });
      console.log(rows);
    },
    goaside() {
      if (this.asi) {
        this.aside.width = "100%";
        this.asi = false;
        this.ul.opacity = "1";
      } else {
        this.aside.width = "0%";
        this.asi = true;
        this.ul.opacity = "0";
      }
    },
    clo() {
      this.aside.width = "0%";
      this.asi = true;
      this.ul.opacity = "0";
	},
	dis(i,e){
		
	}
  },
  created() {
    this.go();
  },
  watch: {}
};
</script>
<style>
#aside {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 5%;
  z-index: 10;
  transition: 1s;
  display: flex;
}
#aside > div {
  width: 40%;
  background-color: transparent;
}
#aside > ul {
  list-style-type: none;
  transition: 1s;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  width: 60%;
  height: 100%;
  background-color: #404248;
  overflow: auto;
}
#aside > ul > li {
  height: 6%;
  width: 100%;
  border-bottom: 1px solid #4a4d54;
}
#aside > ul > li > a {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 0 4%;
}
.parent {
}
div > .index {
  background-color: #9d9aef;
}
.app-container > div > .parent > .operate {
  padding-top: 12%;
}
.app-container
  > div
  > .parent
  > .operate
  > .active
  > .mui-icon-icon-contact-filled {
  margin-left: 4%;
}
.app-container > div > .parent > .operate > a > .mui-icon-extra-addpeople {
  margin-left: 4%;
}
.app-container > div > .parent > .operate > a > .mui-icon-extra-cart {
  margin-left: 4%;
}
.mui-content > ul > li > a > img {
  width: 100%;
  height: 100%;
}
.parent > .mui-content > .mui-table-view:first-child {
  margin-top: 0;
}
.parent > .mui-content > ul {
  background-color: #fff;
}
.parent > .home > .mint-swipe-items-wrap > .mint-swipe-item > img {
  width: 100%;
}
.app-container > div > .parent > .home {
  height: 235px;
}
.parent > .body {
  padding-top: 2%;
}
.parent > .body,
.parent > .clothing {
  padding-bottom: 2%;
  background-color: #fff;
}
.body > .mui-row img {
  width: 92%;
  height: 92%;
}
.body > .mui-row p {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  width: 98%;
  height: 20px;
  text-align: center;
}
.body > .mui-row img:first-child {
  margin-left: 4%;
}
.body > .one {
  padding-top: 1%;
}
.clothing > .mui-row img {
  width: 92%;
}
.clothing > .mui-row img:first-child {
  margin-left: 4%;
}
.clothing > .mui-row:not(.not) {
  padding-top: 2%;
}
.parent > .underwear {
  margin-top: 4%;
}
.underwear > .mui-row p {
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  width: 98%;
  height: 20px;
}
.parent > .phone {
  background-color: rgba(147, 188, 190, 1);
}
.soll {
  width: 100%;
  padding-left: 0;
  margin-top: 2%;
  margin-bottom: 0;
}
.soll > li {
  display: flex;
}
.soll > li:not(:first-child) {
  margin-top: 2%;
}
.soll > li > div,
.soll > li > div > img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.soll > li > div {
  width: 50%;
  height: 280px;
  margin: 0 1%;
}
.soll > li > div >div>p{
	margin-bottom:0;
}
.soll > li > div >div>p:first-child{
	color:red;
}
.soll > li > div > img {
  width: 100%;
  height: 200px;
  display: block;
}
.soll > li > div > p {
  width: 100%;
  height: 52px;
  font-size: 16px;
  margin-bottom: 0; 
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
.soll > li > div > div {
  width: 100%;
  height: 28px;
  color: #ff5057;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.soll > li > div:first-child {
}

.soll > li > div:last-child {
}
</style>














