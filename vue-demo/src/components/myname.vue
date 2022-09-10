<template>
<div>
  <div>{{num}}</div>
  <div>{{mmse}}</div>
  <div>{{name}}</div>
  <div>{{age}}</div>
  <div>{{change}}</div>
</div>


</template>

<script>
export default {
  name: "myName",
  props:['mmse','name','age','change'],
  data(){
    return {
      num:70
    }
  }
}
</script>

<style scoped>

</style>