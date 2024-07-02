<template>
    <div class="c-div">
      <video class="p_video" src="../video/135353.mp4"></video>
      <el-input class="input img" v-model="title" placeholder=""></el-input>
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
    width: 200px;
  }
  .p_video
  {
    width: 180px;
    height: 150px;
  }
  .input
  {
    width: 180px;
  }
</style>