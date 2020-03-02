<template>
    <div id="comment">
        <div class="top">
            <div class="left">
                <p>3.9</p>
                <p>综合评分</p>
                <p>高于周边商家69.2%</p>
            </div>
            <div class="right">
                <p>服务态度
                    <Rate show-text allow-half v-model="valueCustomText">
                    <span style="color: #f5a623">{{ valueCustomText }}</span>
                    </Rate>
                </p>
                <p>服务态度
                    <Rate show-text allow-half v-model="valueCustomText">
                    <span style="color: #f5a623">{{ valueCustomText }}</span>
                    </Rate>
                </p>
               
                <p>送达时间<span>44分钟</span></p>
            </div>
        </div>
        <div class="bar"></div>
        <div class="btn">
            <div class="line">
                <Button type="primary">全部<span style="font-size: 10px;">57</span></Button>
                <Button type="info">满意<span style="font-size: 10px;">47</span></Button>
                <Button type="success">不满意<span style="font-size: 10px;">10</span></Button>
            </div>
        </div>
        <div class="tittle">
            <p>只有内容的评价</p>
        </div>
        <div class="main" v-for="(v,i) in data" :key="i">
            <img :src="v.avatar" alt="">
            <div class="right">
                 <p>
                    <span>{{v.username}}</span>
                    <span>2007.5.12</span>              
                </p>
                <p>
                    <Rate show-text allow-half v-model="valueCustomText">
                    <span style="color: #f5a623;"></span>
                    </Rate>
                    <span class="time">80分钟送达</span>
                </p>
                <p class="text">
                    {{v.text}}
                </p>
                <p class="botton">
                    <img src="" alt="">
                    <span>大王香菇炉</span>
                    <span>大王香菇炉</span>
                    <span>大王香菇炉</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import {ratings} from '../api/api'
    export default {
        data(){
            return{
                data:{},
                valueCustomText: 4,
            }
        },
        mounted(){
            ratings().then((res)=>{
                console.log(res.data.data)
                this.data=res.data.data
            })
        }
    }
</script>

<style lang="less">
#comment{
        overflow: scroll;
        height: 400px;
    .top{
        padding: 10px;
        display: flex;
        height: 100px;
        .left{
            text-align: center;
            width: 35%;
            border-right:1px solid #cccccc; 
            p:first-child{
                font-size: 22px;
                color: yellow;
            }
            p:nth-child(2){
                font-size: 14px;
            }
            p:last-child{
                font-size: 12px;
                color: #cccc;
            }
        }
        .right{
            width: 65%;
            p{  
               height: 26px;
                line-height: 26px;
                margin-left: 16px;
                color: #000;
                display: flex;
                .ivu-rate-star-full{
                    margin-left: 10px;
                    width: 4px;
                    vertical-align: center;
                }
                .ivu-rate-text{
                margin-left: 0px;
                margin-bottom: 2px;
            }
            }
        }
    }
    .bar{
        height: 16px;
        background: #cccc;
    }
    .btn{
        padding: 10px;
       .line{
            border-bottom: 1px solid #cccccc;
            padding-bottom: 10px;
               span{
              font-size: 12px;
          }
        .ivu-btn-info{
            background: #ccecf7;
            border: 0;
            color: #4d545c;
            margin-left: 10px;
         
        }
        .ivu-btn-success{
            background: #eaebed;
            border: 0;
            color: #4d545c;
            margin-left: 10px;
        }
       }
    }
    .tittle{
        padding: 0 10px 10px 8px;
        border-bottom: 1px solid #cccccc;
        font-size: 12px;
        color: #cccccc;
    }
    .main{
        display: flex;
        padding: 10px;
       
        img{
            width: 30px;
            height: 30px;
         
        }
        .right{
            margin-left: 10px;
            .ivu-rate-star-full:before{
                width: 6px;
            }
            .ivu-rate{
               font-size: 16px;
            }
            .time{
                font-size: 12px;
                color: #cccc;
            }
            .text{
                font-size: 14px;
                color: #000;
                margin: 6px 0;
            }
            .botton{
                span{
                    display: inline-block;
                    border: 1px solid #cccccc;
                    margin-left: 10px;
                }
            }
            
          
        }   
    }
}
</style>