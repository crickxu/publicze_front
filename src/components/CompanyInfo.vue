<template>
    <div class="body">
        <el-row class="el-row full">
          <el-col :span="3" class="el-col left">
            <div class="left_r">
               <div class="_layer left"></div>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="top">
                <img class="info logo"/>
                <label class="info label company">{{ companyinfo.name }}</label>
                <el-input class="el-input serch" v-model="serchValue" placeholder="搜索企业">
                    <el-button class="el-button serch" slot="suffix" type="text">搜索</el-button>
                </el-input>
            </div>
            <div class="info_div">
                <el-row>
                  <el-col :span="20">
                    <div class="left_info">
                        
                        <span class="info span">
                          <label class="info label code title">统一信用代码:</label>
                          <label class="info label code value">{{ companyinfo.creditCode }} </label>
                        </span>
                        <span class="info span">
                          <label class="info label nature title">企业性质:</label>
                          <label class="info label nature value">{{ companyinfo.natureName}}</label>
                       </span>
                    </div>
                  </el-col>
                  <el-col :span="4">
                    <div>
                      <el-button type="text" class="contract button">在线联系</el-button>
                   </div>
                </el-col>
                </el-row>
                             
            </div>
            <div class="split"></div>
            <div class="main div">
                <el-row>
                  <el-col :span="14">
                    <div class="main pic div">
                        <img class="main img" :src="companyinfo.imgPath"/>
                    </div>
                    
                  </el-col>
                  <el-col :span="10">
                    <div class="info left div">
                      <div class="info content"> 
                    <div class="info left div">
                        <label>地址：{{companyinfo.contact}}</label>
                      </div>
                      <div class="info left div">
                        <label>号码：{{companyinfo.mobileNum}}</label>
                      </div>
                      <div class="info left div">
                        <label>规模：{{ companyinfo.scale }}</label>
                      </div>
                      <div class="info left div">
                        <label>行业：{{ companyinfo.subIndustryName}}</label>
                      </div>
                      <div class="info left div">
                        <label>二级行业：{{companyinfo.thrIndustryName}}</label>
                      </div>
                    </div>
                    </div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <div class="div titleinfo">
                    <span>企业介绍</span>
                    </div>
                        <p>{{companyinfo.introduction}}</p>
                  </el-col>
                </el-row>
            </div>
            <div class="div titleinfo">
                <span class="span titleinfo">产品图片</span>
              </div>
              <div class="div imgsorvideos">
                <div class="div img">
                  <div v-for="(picinfo, index) in picinfos" :key="index">
                  <cpic :file_img="picinfo.fileid" :srcpath="picinfo.filepath" :ptitle="picinfo.filetitle"></cpic>
                </div>
                </div>
              </div>
              <div class="div titleinfo">
                <span>产品视频</span>
              </div>
              <div class="div imgsorvideos">
                <div v-for="(videoinfo, index) in videoinfos" :key="index">
                  <cvid file_img="videoinfo.fileid" :srcpath="videoinfo.filepath" :ptitle="videoinfo.filetitle"></cvid>
              </div>
            </div>           
          </el-col>
          <el-col :span="3"></el-col>
        </el-row>
    </div>
</template>
<script>
  import axios from 'axios';
  import cpic from './cpicture';
  import cvid from './cvideo';
  export default {
    data()
    {
      return {
        companyinfo: {
          companyNo: '',
          name: '',
          creditCode: '',
          natureId: 0,
          natureName: '',
          scale: 0,
          provinceAddr: '',
          cityAddr: '',
          contact: '',
          introduction: '',
          mobileNum: '',
          imgPath: '',
          eventType: 0,
          industry: '',
          subIndustry: '',
          subIndustryName: '',
          thrIndustry: '',
          thrIndustryName: ''
        },
        imgcompanyinfo: {
          companyNo: '',
          imgPath: '',
          imgTitle: '',
          discription: ''
        },
        videocompanyinfo: {
          companyNo: '',
          videoPath: '',
          videoTitle: '',
          discription: ''
        },
        videoinfos: [],
        picinfos: [],
      }
    },
    methods:
    {
      getcompanyinfo()
      {
        axios({
                 method: "get",
                 url: "http://localhost:8093/company/getCompanyByNo",
                 params: {
                   companyNo: this.$route.query.companyNo,
                },
             }).then((res) => {
                    var company = res.data;
                    if(company !=null)
                    {
                      this.companyinfo.companyNo = company.companyNo;
                      this.companyinfo.name = company.name;
                      this.companyinfo.creditCode = company.creditCode;
                      this.companyinfo.natureId = company.natureId;
                      this.companyinfo.natureName = company.natureName;
                      this.companyinfo.scale = company.scale;
                      this.companyinfo.provinceAddr =company.provinceAddr;
                      this.companyinfo.cityAddr = company.cityAddr;
                      this.companyinfo.contact = company.contact;
                      this.companyinfo.imgPath ="http://192.168.10.139/"+company.imgPath;
                      this.companyinfo.introduction =company.introduction;
                      this.companyinfo.mobileNum =company.mobileNum;
                      this.companyinfo.eventType =company.eventType;
                      this.companyinfo.industry =company.industry;
                      this.companyinfo.subIndustry =company.subIndustry;
                      this.companyinfo.subIndustryName = company.subIndustryName;
                      this.companyinfo.thrIndustry =company.thrIndustry;
                      this.companyinfo.thrIndustryName = company.thrIndustryName;
                    }
                  });
                  
                  axios({
                    method: "get",
                    url: "http://localhost:8093/file/filesInfo",
                    params: {
                       companyNo: this.$route.query.companyNo,
                    },
                    //responseType:'blob'
                  }).then((response)=>{
                    for(let i=0;i<response.data.length;i++)
                    {
                      let info ={
                        fileid :response.data[i].companyNo+response.data[i].id,
                        filetitle : response.data[i].title,
                        filepath:response.data[i].filePath

                      }
                      if(response.data[i].fileType==0&&!response.data[i].isMainImg)
                        this.picinfos.push(info);
                      else
                        this.videoinfos.push(info);
                    }
                  })
                
      }
    },
    mounted()
    {
       this.getcompanyinfo();
    },
    components:{
       cvid,
       cpic,
    }
  }
</script>
<style>
  .intro.img
  { 
    width: 250px;
    height: 180px;
  }
  .intro.video
  { 
    width: 250px;
    height: 180px;
  }
  .contract
  {
    padding: 8px;
    float: right;
    position: relative;
    top: 20px;
    right: 10px;
    background-color: aliceblue;
  }
  .left_info
  {
    position: relative;
  }
  .info.content
  {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .div.imgsorvideos
  {
     display: flex;
     flex-direction: row;
     align-items: flex-start;
  }
  .div.img
  {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 235px;
  }
  .lab.dis
  {
    color: brown;
  }
  .div.titleinfo
  {
    height: 40px;
    font-size: 20px;
    background-color: cadetblue;
  }
  .info
  {
    position:relative;
    float: left;
    font-family:'Times New Roman', Times, serif;
    font-size:small;
  }
  .info.logo
  {
    top: 5px;
    width: 40px;
    height: 40px;
  }
  .info.company
  {
    top:20px;
    font-size:2pc;
    color:brown;
  }
  .info.code
  {
    left: 30px;
    top:30px;
    padding-left: 8px;
    padding-right: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    background-color:rgb(227, 238, 240);
  }
  .main.div
  {
    background-color: white;
  }
  .main.img
  {
    width: 550px;
    height: 380px;
  }
  .text.comany-introduction
  {
    width: 500px;
    height: 200px;
    margin-top: 0px;
    font-size: x-large;
    color: brown;
  }
  .info.left
  {
    font-size:16px;
    margin-top: 25px;
  }
  .info.nature
  {
     left:60px;
     top: 30px;
     padding-left: 8px;
     padding-right: 4px;
     padding-top: 4px;
     padding-bottom: 4px;
     background-color:rgb(227, 238, 240);
  }
  .el-input.serch
  {
    float: right;
    border: 1px solid red;
    width: 280px;
    position: absolute;
    right: 0px;
    bottom: 10px;
  }
  .el-button.serch
  {
    padding-right: 0px;
    padding-top: 6px;
    height: 30px;
    width: 60px;
    margin-top: 5px;
    color: white;
    background-color: rgb(233, 14, 14);
  }
  .body
  {
    width: 100%;
    background-color: rgb(245, 246, 247);
  }
  .left_r
  {
    height: 60px;
  }
  .top
  {
    position: relative;
    height: 80px;
    width: 100%;
    
  }
  .info_div
  {
    height: 70px;
    width: 100%;
    border-radius: 12px;
    background-color:white;
  }
  .split
  {
    height: 20px;
  }
</style>