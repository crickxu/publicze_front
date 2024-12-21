<template>
    <div class="div content">
        <input type="file" ref="videofileInput" class="videofile input" :id="v_input" accept="video/*" style="display: none;" @change="handleVideoFileChange"/>
        <video class="p_video" :src="srcpath" @click="fileopen" :id="file_video"></video>
        <el-input class="input video" v-model="v_title" placeholder="请输入视频标题"></el-input>
    </div>
</template>
<script>
  export default {
    props:{
          v_input: "inputid",
          file_video: "videoid"
        },
    data() {
    return {
        v_title: "",
        srcpath: require("../video/135353.mp4"),
    };
  },
  methods:{
    fileopen()
    {
      document.getElementById(this.$props.v_input).click();
    },
    
    handleVideoFileChange()
    {
       //var pfile =  this.$refs.videofileInput.files[0];
       var pfile =  document.getElementById(this.$props.v_input).files[0];
       //this.videos.push(pfile);
       var video_pro ={
        name: pfile.name,
        discrip: this.v_title
       }
       var videoid = this.$props.file_video;
       //this.videos_pro.push(video_pro);
       if(window.FileReader)
       {
        var reader = new FileReader();
        reader.readAsDataURL(pfile);
        reader.onload=function()
        {
          var p_video = document.getElementById(videoid);
          p_video.src= this.result;
          
        }
       }
       this.$emit("getvInfo",pfile,video_pro);
    },
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