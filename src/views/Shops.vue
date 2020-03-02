<template>
    <div class="shops">
        <!-- 店铺名 -->
        <div class="tittle">
            <div class="left">
                <h4>{{list.name}}</h4>
                <p>
                    <Rate show-text :value.sync="valueCustomText">
                        <span style="color: #f5a623"></span>
                    </Rate>
                    <span class="sales">(661)</span>
                    <span class="sales">月销690单</span>
                </p>
            </div>
            <div class="right">
                <p>
                    <img src="../assets/imgs/star48_on@3x.png" alt="">
                </p>
                <p>
                    已收藏
                </p>
            </div>
        </div>
        <!-- 配送 -->
   
       <div class="delivery">
            <i-col span="8">
                <p class="top">起送价</p>
                <span class="price">{{list.minPrice}}</span>
                <span class="unit">元</span>
            </i-col>
            <i-col span="8">
                 <p class="top">商家配送</p>
                <span class="price">{{list.deliveryPrice}}</span>
                <span class="unit">元</span>
            </i-col>
            <i-col span="8">
                 <p class="top">平均配送时间</p>
                <span class="price">{{list.deliveryTime}}</span>
                <span class="unit">分钟</span>
            </i-col>
       </div>
       <!-- 一条线 -->
       <div class="line"></div>
       <!-- 描述 -->
           <h3>公告与活动</h3>
       <div class="text">
           <p>{{list.bulletin}}</p>
           <div class="feature" v-for="(v,i) in list.supports" :key="i">
               {{v.description}}
           </div>
       </div>
        <!-- 一条线 -->
       <div class="line"></div>
        <div class="picture">
            <h2>商家实景</h2>
            <p>
               <span>
                    <img :src="list.pics[0]" alt="">
               </span>
               <span>
                    <img :src="list.pics[1]" alt="">
               </span>
               <span>
                    <img :src="list.pics[2]" alt="">
               </span>
                
            </p>
        </div>
        <!-- 一条线 -->
       <div class="line"></div>
       <!-- 商家信息 -->
       <div class="info">
             <h2>商家信息</h2>
             <div v-for="item in list.infos" :key="item.id">
                 {{ item }}
             </div>
       </div>
    </div>
</template>

<script>
import {getgoods} from '../api/api'
    export default {
        data(){
            return{
                list:{},
                 valueCustomText: "4"
            }
        },
        created(){
            getgoods().then((res)=>{
                console.log(res.data.data)
                this.list=res.data.data
            })
        }
    }
</script>

<style lang="less">
    .shops{
        overflow: scroll;
        height: 400px;
        .tittle{
             padding: 10px;
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
            display: flex;
            justify-content: space-between;
          .left{
            .sales{
                font-size: 12px;
            }
            .ivu-rate-star-zero{
                width: 10px;
            }
         }
            .right{
                p{
                    color: #525659;
                    font-size: 14px;
                    text-align: center;
                    img{
                        width: 24px;

                    }
                }
            }
        }
        .delivery{
             padding: 10px;
            height: 80px;
            text-align: center;
            padding: 10px 0;
            .top{
                font-size: 12px;
                color: #a5aaae;
            }
            .price{
                font-size: 22px;
                color: #010b15;
            }
            .unit{
                font-size: 10px;
            }
            .ivu-col:nth-child(2){
                border-left: 1px solid #cccccc;
            }
            .ivu-col:nth-child(3){
                border-left: 1px solid #cccccc;
            }
        }
        .line{
            height: 20px;
            background: #f4f5f7;
            border-top: 1px solid #cccccc;
            border-bottom: 1px solid #cccccc;
        }
        h3{
            margin: 6px 10px;
            color: #010b15;
        }
        .text{
            padding: 0 16px;
            p{
                 color: #fc1b19;
                 margin-bottom: 10px;
            }
            .feature{
                background:url('../assets/imgs/discount_3@2x.png');
                background-repeat: no-repeat;
               background-position: 0px 12px;
                color: #010b15;
                border-top: 1px solid #cccccc;
                height: 50px;
                line-height: 50px;
                padding-left: 30px;
            }
        }
        .picture{
            h2{
                margin: 2px 6px 10px;
            }
            padding: 10px;
            p{
                display: flex;
                justify-content: space-around;
                span{
                    display: inline-block;
                     width: 100px;
                    height: 100px;
                }
                img{
                    height: 100%;
                    width: 100%;

                }
            }
        }
        .info{
            padding: 16px;
            div{
            padding-left: 10px;
            border-top: 1px solid #cccc;
            height: 50px;
           display: flex;
           align-items: center; 
            }
            
        }
      
    }
</style>