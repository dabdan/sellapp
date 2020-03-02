<template>
  <div id="goods">
      <div class="left-div">
        <ul class="content">
              <div @click="clicklest(index)" v-for="(item,index) in goodslist" :key="index" :class="{active:sign==index}">
                {{ item.name }}
       </div>
        </ul>
      </div>

      <div class="right-div">
         <ul class="content">
            <div :id="index" v-for="(item,index) in goodslist" :key="index">
                  <h4>{{ item.name }}</h4>
                  <div class="list" v-for="(child,i) in item.foods" :key="i">
                      <img :src="child.icon" alt=""> 
                      <div class="right">
                        <p>{{ child.name }}</p>
                        <p>{{ child.description }}</p>
                        <p><span>月销量1132份</span> <span>好评率100%</span></p>
                        <div class="btn">
                              <p class="left">
                                <span>￥{{child.price}}</span>
                                <span>￥28</span>
                              </p>
                              <p class="right">
                                <button class="sub" v-show="num<=0? '':'true'" @click="changeNum(-1,index,i)">-</button>
                                <span>{{num}}</span>
                                <button class="add" @click="changeNum(1,index,i)">+</button>
                          </p>
                        </div>
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
          // list:[],
          sign:'',
          num:1,
        }
      },
      created(){
       
      getRating().then((res)=>{
        // console.log(res.data.data)
      this.$store.commit('changeList', res.data.data)
      })
      },
      mounted(){
        new BScroll(document.querySelector('.left-div'),{
          click:true
        },)
        this.right=new BScroll(document.querySelector('.right-div'),{
          click:true,
          probeType:3,
        })
        this.right.on('scroll',(obj)=>{
          let Y=Math.abs(obj.y)
          for (const item of this.getHeight) {
             if(Y>item.min&& Y<item.max){
               this.sign=item.index
             }
          }
        })
      },
      methods:{
       clicklest(tittle){
         this.sign=tittle
         this.right.scrollToElement(document.getElementById(tittle),600)
       },
       changeNum(n,index,i){

         console.log(n,index,i)
        this.num+=n
        //  var num=this.goodslist[index].foods[i]+=n
        //  console.log(num)
        
       }
      },
      computed:{
       
        getHeight(){
          var arr=[]
          var result=0
          for (let i = 0; i < this.list.length; i++) {
            // console.log(this.list[i])
           var divHeight=document.getElementById(i).offsetHeight
          //  console.log(divHeight)
           arr.push({min:result,max:result+divHeight,index:i})
          //  console.log(arr)
          result+=divHeight
           
          }
          return arr
        },
        goodslist(){
          return this.$store.state.goodslist
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
      overflow: scroll;
       height: 400px;
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
           
          }
          img{
            display: inline-block;
            width: 60px;
            height: 60px;
            vertical-align: top;
          }
          .right{
            .btn{
              display: flex;
              justify-content: space-between;
              .left{
                  span:first-child{
                      color: red;
                  }
                  span:nth-child(2){
                    color: #cccccc;
                    margin-left: 10px;
                    text-decoration: line-through;
                  }
              }
              .right{
                .sub{
                  border: 2px solid #009fd8;
                  width: 16px;
                  height: 16px;
                  border-radius: 8px;
                  text-align: center;
                  line-height: 14px;
                  font-size: 20px;
                  margin-right: 10px;

                }
                .add{
                  border: 0;
                  width: 16px;
                  height: 16px;
                  border-radius: 8px;
                  text-align: center;
                  line-height: 16px;
                  font-size: 20px;
                  background: #009fd8;
                  color: #ffff;
                  margin-left: 10px;
                }
                span{
                  line-height: 16px;
                }
              }
            }
          }
        }
     }
    }
  }
</style>