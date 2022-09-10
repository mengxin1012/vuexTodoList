import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state={
    todos:JSON.parse(localStorage.getItem('xin'))||[{id:1,content:'梦馫',done:false},{id:2,content:'和泉妃爱',done:true}],
    // str:''
}
const mutations={
    ADDLIST(state,data){
        let index=state.todos.length+1
        state.todos.push({id:index,content:data,done:false})
    },
    REMOVE(state,index){
        state.todos.splice(index,1)
    },
    CHECK(state,index){
        state.todos[index].done=!state.todos[index].done
    },
    REMOVEALL(state,data){
        // console.log(res)

        state.todos=data
    },
    CHECKALL(state,data){
        state.todos.forEach(item=>item.done=data)
    },
    DATA(state,data){
        state.str=data
    }


}
const actions={
    remove({commit},index){
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
        // 添加完内容后清空输入框
        data=''
    },
    change({commit},index){
        commit('CHECK',index)
    },
    removeAll({commit,state}){
        let a=state.todos.filter(item=>!item.done)
        commit('REMOVEALL',a)
    },
    checkAll(men,check){
        men.commit('CHECKALL',check)
    },
    data({commit},data){
        return commit('DATA',data)
    }
}
const getters={
    getCount(state){
        return state.todos
    }
}
export default new Vuex.Store({
state,
    mutations,
    actions,
    getters
})