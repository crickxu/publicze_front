<template>
    <div class="div content">
        <video class="p_video" :id="file_video" controls>
          <source :src="srcpath">
        </video>
        <h3 class="input img" type="" >{{ ptitle }}</h3>
    </div>
</template>
<script>
  export default {
    props:{
          srcpath: "filepath",
          file_video: "videoid",
          ptitle: "filetitle"
        },
    data() {
    return {
        srcpath: require("../video/135353.mp4"),
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
  .p_video
  {
    width: 220px;
    height: 180px;
  }
  .input.video
  {
    margin: 8px;
    width: 210px;
  }
</style>