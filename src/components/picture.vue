<template>
    <div class="c-div">
      <img class="p_img" src="../picture/00001.jpg">
      <el-input class="input img" v-model="title" placeholder="请输入图片标题"></el-input>
    </div>
</template>
<script>
  export default {
    data() {
    return {
        title: "",
    };
  }
}
</script>
<style>
  .c-div
  {
    position: fixed;
    display: block;
    margin: 5px;
    width: 200px;
  }
  .p_img
  {
    width: 180px;
    height: 150px;
  }
  .input
  {
    width: 180px;
  }
</style>