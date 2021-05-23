<template>
  <div>
      <h3>个人档案</h3>
      <ul>
          <li>名字：{{$route.query.name}}</li>
          <li>年龄：{{$route.query.age}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'profile'
}
</script>

<style scoped>
div{
    padding: 30px;
    margin-top: 30px;
    border:1px dotted #ff0000;
}
</style>