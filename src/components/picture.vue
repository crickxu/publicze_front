<template>
    <div class="div content">
        <input type="file" ref="fileInput" class="file input" :id="f_input" accept="image/*" style="display: none;" @change="handleFileChange"/>
        <img class="p_img" ref ="fileimg" :src="srcpath" :id="file_img" @click="fileopen()" alt=""/>
        <el-input class="input img" v-model="p_title" placeholder="请输入图片标题"></el-input>
    </div>
</template>
<script>
  export default {
    props:{
          f_input: "inputid",
          file_img: "imgid"
        },
    data() {
    return {
        p_title: "",
        srcpath: require("../picture/default.jpg"),
      };
  },
  methods:{
    fileopen()
    {
      document.getElementById(this.$props.f_input).click();
    },
    handleFileChange()
    {
      //var pfile =  this.$refs.fileInput.files[0];
       var pfile =  document.getElementById(this.$props.f_input).files[0];
       var img_pro ={
        name: pfile.name,
        isMainImg: 0,
        discrip: this.p_title
       }
       var imgid = this.$props.file_img;
       if(window.FileReader)
       {
        var reader = new FileReader();
        reader.readAsDataURL(pfile);
        reader.onload=function()
        {
          //var p_img= this.$refs.fileimg;
          var p_img = document.getElementById(imgid);
          p_img.src= this.result;
        }
       }
       this.$emit("getInfo",pfile,img_pro);
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