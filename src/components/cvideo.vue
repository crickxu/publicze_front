<template>
    <div class="div content">
        <video class="p_video" :id="file_video" controls>
          <source :src="srcpath">
        </video>
        <span class="input video" type="" >{{ ptitle }}</span>
        <p>全方位就业指导服务，提升大学生就业能力,也可与其他系统的单据和凭证等结合使用</p>
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
    width: 320px;
    height: 280px;
  }
  .input.video
  {
    margin: 8px;
    color: white;
     background-color: rgb(243, 128, 51);
     font-size: 12px;
     padding-left: 10px;
     padding-right: 10px;
     padding-top: 5px;
     padding-bottom: 5px;
  }
</style>