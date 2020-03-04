<template>
    <div id="shopCarShop">
            <div class="top">
            <p>购物车</p>
            <p>清空</p>
        </div>
        <div class="shopFood" >
            <div v-for="(v,i) in shopcar" :key="i">
                <div class="bar"> 
                   <p>{{v.name}}</p>
                   <p class="rightBtn">
                        <button class="sub" @click="change(-1,v.name)">-</button>
                        <span>{{v.num}}</span>
                        <button class="add" @click="change(1,v.name)">+</button>
                   </p>
                </div>
               

            </div>
<!--                    
                  <button class="sub" @click="changeNum(-1)">-</button>
                    <span>1</span>
                    <button class="add" @click="changeNum(1)">+</button> -->
          
            
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        computed:{
            shopcar(){
                return this.$store.getters.shopCar
            }
        },
        methods:{
        change(val,name){
               this.$store.commit('changNum',{
                   val,name
               })
            }
        }

    }
</script>

<style lang="less">
#shopCarShop{
    .shopFood{
    height: 100%;
    .bar{
        padding: 16px;
        display: flex;
        justify-content: space-between;
        .rightBtn{
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


</style>