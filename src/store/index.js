import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        goodslist: [

        ],
    },
    mutations: {
        changeList(state, newArr) {
            state.goodslist = newArr
        },
        // 接受点击商品穿过来的值
        changNum(state, newNum) {
            //循环商品
            for (const obj of state.goodslist) {
                // console.log(obj)
                for (const goods of obj.foods) {
                    // 判定如果商品名字相同就对数量num进行数量的加1减1
                    if (goods.name == newNum.name) {
                        goods.num += newNum.val
                    }

                }

            }
        }

    },
    getters: {
        shopCar(state) {
            let arr = []
            let name = []
            for (let obj of state.goodslist) {
                for (let goods of obj.foods) {
                    // console.log(goods)
                    // 判定如果num大于0就往数组里面push
                    if (goods.num > 0) {
                        if (!name.includes(goods.name)) {
                            arr.push(goods)
                            name.push(goods.name)
                        }

                    }
                }

            }
            return arr
        }
    }
})