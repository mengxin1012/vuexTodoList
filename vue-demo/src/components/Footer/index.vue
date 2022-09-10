<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="leng"/>
    </label>
    <span> <span>已完成{{$store.state.todos.filter(item=>item.done).length}}</span> / 全部{{$store.state.todos.length}} </span>
    <button class="btn btn-danger" @click="$store.dispatch('removeAll')">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed:{
    leng:{
      get(){
        return this.$store.state.todos.reduce((prev,item)=>prev+item.done,0)==this.$store.state.todos.length&&this.$store.state.todos.length
      },
      set(val){
        console.log(val)
        this.$store.dispatch('checkAll',val)
      }
    }
  }

};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>