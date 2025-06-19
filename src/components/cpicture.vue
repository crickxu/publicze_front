<template>
    <div class="div content">
      <el-row>
        <el-col :span="24">

          <div class="pro info div">
            <div>
              <img class="p_img" ref ="fileimg" :src="bigsrc" :id="file_img" alt=""/>   
            </div>
              <div>
                <img class="small img" v-for="(imgsrc,index) in srcpaths" @click="setbigimg($event)" :src="imgsrc" :key="index"/>
              </div>
          </div>
          <div class="productinfo div">
            <div class="title div">
              <div class="title img div">
                <img class="flag img div" src="../picture/title2.png"/>
              </div>
              <div class="proname div">
                  <span class="title span">{{ ptitle }}</span>
              </div>
            </div>
            <div class="params div">
              <table class="params tb">
               <tbody>
                <tr class="param tr" v-for="(item ,index) in params" :key="index">
                   <td class="paramnameinfo">{{item.paramName }}</td>
                   <td class="paramvalueinfo">{{ item.paramValue }}</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
</template>
<script>
  export default {
    props:{
          srcpaths: [],
          file_img: "imgid",
          ptitle: "filetitle",
          bigsrc: "",
          params: []
        },
    data() {
    return {
        p_title: "",
        
      };
  },
  methods:{
    setbigimg(event)
    {
      this.bigsrc = event.target.src;
      //this.$nextTick();
    }
  }
}
</script>
<style>
  .title.div
  {
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
    margin-left: 10px;
  }
  .title.span
  {
    position: absolute;
    font-size: 20px;
    font-weight: 600;
    bottom: 5px;
    left: 5px;
  }
  .proname.div
  {
    width: 100%;
    position: relative;
    border-bottom: 2px;
    border-bottom-style: solid;
    border-bottom-color: rgb(148, 22, 22);
  }
  .pro.info
  {
    display: flex;
    flex-direction:column;
    border-width: 2px; 
    border-style: solid; 
    border-color: rgb(214, 232, 236); 
  }
  .small.img
  {
    height: 60px;
    width: 60px;
    float: left;
    margin-left: 5px;
  }
  .productinfo.div
  {
    margin-top: 25px;
    margin-bottom: 5px;
    /*
    border-top-style: solid;
    border-top-width: 2px;
    border-top-color: rgb(214, 232, 236); */
  }
  .params.div
  {
    position: relative;
  }
  .params.tb
  {
    position: relative;
    border-collapse: collapse;
    border-width: 2px;
    border-style: solid;
    border-color: darkgray;
    margin-top: 15px;
    left: 85px;
    text-align: left;
  }
  tr,td
  {
    border-width: 2px;
    height: 25px;
    border-style: solid;
    border-color:darkgray
  }
  .param.tr
  {
    margin-top: 10px;
    font-size: 16px;
  }
  .paramnameinfo
  {
    width: 120px;
  }
  .paramvalueinfo
  {
    width: 250px;
  }
  .p_img
  {
    width: 280px;
    height: 250px;
  }
  .input.img
  {
    
    float: right;
    color: white;
     background-color: rgb(238, 144, 81);
     height: 20px;
     font-size: 14px;
     
     padding-left: 10px;
     padding-right: 10px;
     padding-top: 5px;
     padding-bottom: 5px;
  }
</style>