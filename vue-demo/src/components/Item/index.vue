<template>
  <li @mouseenter="isSel=true" @mouseleave="isSel=false">
    <label>
      <input type="checkbox" :checked="todo.done" @change="$store.dispatch('change',index)"/>
      <span v-show="!todo.isEdit">{{todo.content}}</span>
      <input
          v-show="todo.isEdit"
          type="text"
          :value="todo.content"/>
    </label>
    <button class="btn" v-show="isSel" @click="$store.dispatch('remove',index)">删除</button>
<!--    <button class="btn" v-show="isSel" @click="edit(todo)">编辑</button>-->
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "Item",
  data(){
    return {
      isSel:false,
      isEdit:false
    }
  },
  props:{
    todo:{
      require:true,
      type:Object
    },

    index:{
      require:true,
      type:Number
    }
  },
  methods:{

    edit(todo){
      //编辑方法 还未写完的方法
      // todo.isEdit=this.isSel
      if (todo.hasOwnProperty('isEdit')){
        todo.isEdit=true
      }else {
        this.$set(todo,'isEdit',true)
      }
    },
    // blur(todo){
    //   if
    //   todo.isEdit=false
    //   this.$men.$emit('updateTodo',todo.id,e.target.value)
    // }
  }
}
</script>

<style scoped>

/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>