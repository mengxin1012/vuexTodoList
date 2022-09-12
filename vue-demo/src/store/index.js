import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//放入初始列表
const state={

    todos:JSON.parse(localStorage.getItem('xin'))||[{id:1,content:'梦馫',done:false},{id:2,content:'和泉妃爱',done:true}],
    str:'',
}
const mutations={
    //addlist添加列表
    ADDLIST(state,data){
        //根据数组长度变换id
        let index=state.todos.length+1
        //利用vue包装好的push方法推送进todos
        state.todos.push({id:index,content:data,done:false})
    },
    //remove删除单个
    REMOVE(state,index){
        //利用vue中包装好的数组方法 splice 根据索引截取 实现删除功能
        state.todos.splice(index,1)
    },
    //check改变单个选中状态
    CHECK(state,index){
        //根据索引 进行状态取反 因为是多选框 有checked属性
        state.todos[index].done=!state.todos[index].done
    },
    //removeall 全选删已选中元素
    REMOVEALL(state,data){
        //利用splice方法先清空数组 0-数组长度 然后用扩展运算符解构filter方法过滤出来的数组 并添加到todos
        //实现不改变地址删除
        state.todos.splice(0,state.todos.length,...data)
    },
    //checkall 全选全不选
    CHECKALL(state,data){
        //利用foreach 方法遍历修改数组中所有的done的boolean值
        state.todos.forEach(item=>item.done=data)
    },
    DATA(state,data){
        state.str=data
    },


}
const actions={
    //删除单个
    remove({commit},index){
        //将接收到的索引传给mutations
        commit('REMOVE',index)
    },
    //添加内容
    addList({commit,state},data){
        //判断输入框长度
        if(data.length==0){
            return confirm('输入框不能为空')
        }
        //利用累加器判断todos里有没有内容
        let res=state.todos.reduce((prev,item,index,arr)=>{
            return prev+(arr[index].content===data.trim())
        },0)
        // let res=this.todos.map(item=>item.content).includes(this.str.trim())
        //重复提示
        if (res){
            return confirm('名称重复')
        }
        commit('ADDLIST',data)
        // 添加完内容后清空输入框 此方法暂时无法在vuex中实现
        data=''
    },
    //单个状态改变
    change({commit},index){
        //传递索引
        commit('CHECK',index)
    },
    //删除所有已完成
    removeAll({commit,state}){
        //利用filter过滤done为false的对象(todos中每个索引对应一个对象), 将过滤出的新数组传递上去(mutations)
        let a=state.todos.filter(item=>!item.done)
        commit('REMOVEALL',a)
    },
    //全选 全不选
    checkAll(men,check){
        //利用event事件对象 通过点击全选全不选的按钮 改变todos中所有done的状态
        men.commit('CHECKALL',check.target.checked)
    },
    //input输入框的方法 但是无法使用
    data({commit},data){
        commit('DATA',data)
    },
}
const getters={
    //自动获取 数组中所有done的状态
    getCount(state){
        //遍历数组中每一个done 所有为true 则返回true  修改every数组方法长度为0会返回true的bug
        //利用数组长度不能等于0的方法解决bug 完成根据数组中所有done状态变化而变化的全选框
        return state.todos.every(item=>item.done)&&state.todos.length!=0
    }
}
export default new Vuex.Store({
state,
    mutations,
    actions,
    getters
})