<template>
  <div id="main">
        <div class="header" :style="{background:'url('+data.avatar+')',backgroundSize:'cover',}">
          <div class="background"></div>
            <div class="head">
                  <div class="left">
                        <img :src="data.avatar" alt="">
                  </div>
                  <div class="right">
                        <h3>
                          <img src="../assets/imgs/brand@2x.png" alt="">
                          {{data.name}}
                        </h3>
                        <p>
                          <span>{{data.description}}</span>
                          <span>/{{data.deliveryTime}}分钟送达</span>
                        </p>
                        <p class="sale">
                          <img src="../assets/imgs/decrease_1@2x.png" alt="">
                          <span>在线支付满28减5，满50减10</span>
                        </p>
                  </div>
            </div>
            <div class="button">
                <img src="../assets/imgs/bulletin@2x.png" alt="">
                <span>粥品香坊其烹饪粥料的秘方源于中国千年古法，再融合现代制作工艺</span>
            </div>
        </div>
      <!-- 切换 -->
      <div class="nav">
          <router-link @click.native="changeOn('0')" :class="{'on':ison==0}" to="/Main/Goods">商品</router-link>
          <router-link @click.native="changeOn('1')" :class="{'on':ison==1}" to="/Main/Comment">评论</router-link>
          <router-link @click.native="changeOn('2')" :class="{'on':ison==2}" to="/Main/Shops">商家</router-link>
      </div>
      <router-view></router-view>
          <!-- 购物车的底栏 -->
          <div class="shopCar">
            <div class="left">
              <div @click="show = !show" class="car">
                <img src="../assets/imgs/car.png" alt="">
              </div>
              <span>￥{{count}}</span>
            </div>
            <div class="center">
              另需配送费4元
            </div>
            <div class="right">
              ￥20起送
            </div>
              <!-- 购物车 -->
            <transition name="slide-fade">
                <div v-if="show" class="carBar">
                  <shopCar></shopCar>
                </div>
            </transition>
        </div>
    
      
  </div>
</template>

<script>
import shopCar from './ShopCar'
import { getgoods } from '../api/api'
  export default {
    data(){
      return{
        show:true,
        ison:'',
        data:{}
      }
    },
    mounted(){
      getgoods().then((res)=>{
        // console.log(res)
       this.data=res.data.data
      })
    },
    methods:{
      changeOn(h){
       this.ison=h
      }
    },
    computed:{
      count(){
       let result=0
       for (const item of  this.$store.getters.shopCar) {
          result+=item.num*item.price
       }  
       return result
      }
    },
    components:{
      shopCar
    }
  }
</script>

<style lang="less">
  #main{
    .on{
      color: red;

    }
    .background{
      height: 150px;
      position: absolute;
    }
    .header{
      height: 150px;
      padding: 20px;
      position: relative;
       .button{
         font-size: 12px;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
         img{
          width: 10%;
          height: 16%;
          vertical-align: middle;
          margin-right: 6px;
         }
       }
      .head{
        height: 100px;
        width: 100%;
       
        
        display: flex;
        .left{
            width: 25%;
            height: 74px;
            border: 1px solid #ffffff;
            margin-right: 20px;
            img{
              width: 100%;
              height:100%;
            }
        }
        .right{
            h3{
              color: #ffffff;
              margin-bottom: 4px;
              img{
                width: 16%;
                height: 16%;
                vertical-align: middle;
                margin-right: 6px;
              }
            }
            p{
              margin-bottom: 2px;
              span{
                color: #cccccc;
              }
            }
            .sale{
              img{
                width: 10%!important;
                height: 16%;
                vertical-align: middle;
                margin-right: 6px;
              }
            }
        }
      }
    }
    .nav{
      display: flex;
      justify-content: space-around;
      height: 40px;
      line-height: 40px;
      background: #ffffff;
      border-bottom: 1px solid #e5e6e8;
    }
    .shopCar{
        height: 50px;
        position: fixed;
        width: 100%;
        background:rgba(20, 28, 39, 0.9);
        bottom:0;
        display: flex;
        justify-content: space-between;
        .left{
          width: 30%;
           background: #2b343b;
          border: 1px solid #000;
          .car{
              z-index: 10;
              width: 50px;
              height: 50px;
              border-radius:25px; 
              border: 1px solid #000;
              position: absolute;
              left: 10px;
              bottom: 10px;
              background:  #2b343b;
              padding: 4px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          span{
            color: #ffffff;
            margin-right: 5%;
            line-height: 50px;
            font-size: 16px;
            float: right;
          }
        }
        .right{
          width: 30%;
          background: #2b343b;
          border: 1px solid #000;
           line-height: 50px;
           text-align: center;
           font-size: 16px;
        }
        .center{
           line-height: 50px;
           text-align: center;
           font-size: 16px;
        }
         .carBar{
          background: #ffffff;
          width: 100%;
          position: fixed;
          bottom: 50px;
          z-index: 5;
        }
    }
   
   /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
      transition: all .5s ease;
    }
    .slide-fade-leave-active {
      transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
      transform: translateY(300px);
      opacity: 0;
    }
  }
  .top{
    padding: 10px 20px 10px 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #cccc;
  }
  .food{
    padding: 20px;
    display: flex;
    justify-content: space-between;
    p:first-child{
      color: #000;
      font-weight: bold;
    }
   
  }
   
</style>
