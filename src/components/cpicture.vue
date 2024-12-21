<template>
    <div class="div content">
        <img class="p_img" ref ="fileimg" :src="srcpath" :id="file_img" alt=""/>
        <h3 class="input img" type="" >{{ ptitle }}</h3>
    </div>
</template>
<script>
  export default {
    props:{
          srcpath: "filepath",
          file_img: "imgid",
          ptitle: "filetitle"
        },
    data() {
    return {
        p_title: "",
      };
  },
  methods:{
    
  }
}
</script>
<style>
  .div.content
  {
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    margin-left: 5px;
    margin-top: 10px;
    margin-right: 10px;
  }
  .p_img
  {
    width: 220px;
    height: 180px;
  }
  .input.img
  {
    margin: 8px;
    width: 210px;
  }
</style>