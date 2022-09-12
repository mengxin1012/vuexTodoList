<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Header></Header>
          <Main></Main>
          <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
//导入todo文件
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  //注册组件
  data(){
    return {
      // todos:this.$store.getters.getCount
      todos:this.$store.state.todos
    }
  },
  components:{
    Header,
    Main,
    Footer
  },
  //watch监听
  watch:{
    todos:{
      immediate:true,
      deep:true,
      handler(newV,oldV){
        localStorage.setItem('xin',JSON.stringify(newV))
      }
    }
  },

}

</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
