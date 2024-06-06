<template>
<div id="app-f">
    <div class="top_">
    </div>
    <div class="main_">
        <div class="adv_">
          <el-carousel :interval="4000">
            <el-carousel-item v-for="img in images" :key="img.id">
                <img :src="img.url" :alt="img.url"> 
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="menu_">
            <el-row>
              <el-col :span="12">
                <el-menu active-text-color="" mode="horizontal" default-active="">
                    <template v-for="releasetype in releasetypes">
                        <el-menu-item :index="releasetype.type">{{releasetype.typeName}}</el-menu-item>
                    </template>
                </el-menu>
              </el-col>
              <el-col :span="12" class="el-s">
                <div class="el-d">
                <el-input  class="el-m" v-model="i_text" placeholder="请输入关键词">
                </el-input>          
                <el-button class="el-m" type='primary' @click="fetchData" icon="el-icon-search">搜索</el-button>
                </div>
              </el-col>
            </el-row>
            <el-row class="el-area">
                <el-col :span="2">
                    <div style="margin-top: 18px;">地区:</div>
                </el-col>
                <el-col :span="22">
                    <el-menu mode="horizontal" default-active="">
                        <template v-for="region in parentregion">
                            <el-menu-item :index="region.regionNo">{{ region.name }}</el-menu-item>
                        </template>
                    </el-menu>
                </el-col>
            </el-row>
            <el-row class="el-sector">
                <el-col :span="2">
                    <div style="margin-top: 18px;">行业:</div>
                </el-col>
                <el-col :span="22">
                    <el-menu mode="horizontal" default-active="">
                        <el-menu-item index="1">不限</el-menu-item>
                        <el-menu-item index="2">制造业</el-menu-item>
                        <el-menu-item index="3">金融业</el-menu-item>
                        <el-menu-item index="4">房地产业</el-menu-item>
                        <el-menu-item index="5">电力、热力、燃气及水生产和供应业</el-menu-item>
                        <el-menu-item index="6">采矿业</el-menu-item>
                        <el-menu-item index="7">信息传输、软件和信息技术服务业</el-menu-item>
                        <el-menu-item index="8">教育</el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <div class="center_">
           <div class="d-left"></div> 
           <div class="d-center">
               <list></list>
               <list></list>
               <list></list>
               <list></list>
               <list></list>
               <list></list>
               <list></list>
               <list></list>
               <list></list>
               <list></list>
               <list></list>
               <list></list>
               <list></list>
               <list></list>
           </div>         
           <div class="d-right"></div>
        </div>
        <div class="footer_">
        </div>
    </div>
    
</div>
</template>
<script>
   import list from './list'
   import axios from 'axios';
   export default {
    data() {
    return {
        i_text: "",
        releasetypes: null,
        parentregion: null,
        images: [{id:1,url:require("../img/001.jpg")},{id:2,url:require("../img/002.jpg")},{id:3,url:require("../img/003.jpg")}]
    };
  },
  mounted()
  {
     this.fetchData(),
     this.getParentRegion()
  },
  methods:
  {
    fetchData() 
    {
      axios.get('http://localhost:8093/releaseTpye/getAll')
        .then(response => {
          // 处理返回的数据
          if(response.data!=null)
          {
            this.releasetypes=response.data
          }         
        }).catch(() => {console.log(response.data);})
        .catch(error => {
          // 处理错误
          console.error(error);
        });
    },
    getParentRegion()
    {
        axios.get('http://localhost:8093/region/getParent')
        .then(response => {
          // 处理返回的数据
          if(response.data!=null)
          {
            this.parentregion=response.data
          }         
        }).catch(() => {console.log(response.data);})
        .catch(error => {
          // 处理错误
          console.error(error);
        });
    }
  },
  components:{
    list
  }
};

</script>
<style>
    .top_
    {
        height: 60px;
        background-color:rgb(199, 193, 196);
    }
    .main_
    {
        
        width: 100%;
        height: 100%;
        margin-top: 5px;
        margin-left: 5%;
        margin-right: 5%;
        
    }
    .adv_
    {
        height: 100px;
        overflow:hidden;
        position: relative;
        background-color: rgb(225, 238, 238);
    }
    .adv_ img
    {
        width: 100%;
    }
    .el-s
    { 
        display:flex;
        margin-top: 10px;
    }
    .el-s input
    {
        width: 250px;
    }
    .el-m
    {
        display: flex;
        margin-left: 0px;
    }
    .el-d
    {
        display:flex;
    }
    
    .center_
    {
        display: flex;
    }
    .d-left
    {
        width: 20%;
        height: 100%;
        overflow: hidden;
        background-color: aliceblue;
    }
    .d-center
    {
        width: 55%;
        height: 100%;
    }
    .d-right
    {
        width: 25%;
        height: 100%;
    }
    .footer_
    {
        overflow: hidden;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color:lightslategray;
        height: 150px;
    }
</style>