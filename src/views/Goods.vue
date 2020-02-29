<template>
  <div id="goods">
      <div class="left-div">
        <ul class="content">
              <div @click="clicklest(index)" v-for="(item,index) in list" :key="index" :class="{active:sign==index}">
                {{ item.name }}
       </div>
        </ul>
      </div>

      <div class="right-div">
         <ul class="content">
            <div :id="index" v-for="(item,index) in list" :key="index">
                  <h4>{{ item.name }}</h4>
                  <div class="list" v-for="child in item.foods" :key="child.id">
                      <img :src="child.icon" alt=""> 
                      <div>
                        <p>{{ child.name }}</p>
                        <p>{{ child.description }}</p>
                        <p><span>月销量1132份</span> <span>好评率100%</span></p>
                        <p><span>￥{{child.price}}</span><span>￥28</span></p>
                      </div>
                  </div>
                
              
            </div>
          </ul>  
    
      

      </div>
     
  </div>
</template>

<script>
import {getRating} from '../api/api'
import BScroll from 'better-scroll'
  export default {
      data(){
        return{
          list:[],
          sign:'',
        }
      },
      created(){
      getRating().then((res)=>{
        console.log(res.data.data)
       this.list=res.data.data
      })
      },
      mounted(){
        new BScroll(document.querySelector('.left-div'),{
          click:true
        },)
        this.right=new BScroll(document.querySelector('.right-div'))
      },
      methods:{
       clicklest(tittle){
         this.sign=tittle
         this.right.scrollToElement(document.getElementById(tittle),600)
       }
      }

  }
</script>

<style lang="less">
  #goods{
    max-height: 720px;
    display: flex;
    .left-div{
      padding: 10px;  
      width: 80px;
      height: 400px;
      background: #f4f5f7;
      overflow: scroll;
      .active{
        background: #ffff;
      }
      div{
        height: 60px;
        border-bottom: 1px solid #DFE0E2;
        display: flex;
        align-items: center;
      }
    }
    .right-div{
      flex: 1;
       max-height: 400px;
        overflow: scroll;
      // background: forestgreen;
     div{
        h4{
          height: 30px;
          background: #f4f5f7;
          color: #9B9EA3;
          border-left: 2px solid #cccccc;
          display: flex;
          align-items: center;
          padding-left: 10px;
        }
   .list{
        display: flex;
       
        padding: 12px;
          p{
            margin-left: 10px;
          }
          p:first-child{
             font-weight: bold;
             color: #000;
          }
          p:nth-child(2){
            color: #ADAFB2;
            font-size: 12px;
          }
          p:nth-child(3){
            color: #ADAFB2;
            font-size: 12px;
          }
          p:nth-child(4){
            font-size: 14px;
            font-weight: bold;
            span:first-child{
              color: red;
            }
            span:nth-child(2){
              color: #cccccc;
              margin-left: 10px;
              text-decoration: line-through;
            }
          }
          img{
            display: inline-block;
            width: 60px;
            height: 60px;
            vertical-align: top;
          }
        }
     }
    }
  }
</style>