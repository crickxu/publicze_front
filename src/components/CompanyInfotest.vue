<template>
    <div class="body">
        <el-row class="el-row full">
          <el-col :span="3" class="el-col left">
            <div class="left_r">
               <div class="_layer left"></div>
            </div>
          </el-col>
          <el-col :span="19">
            <div class="top">
                <img class="info logo"/>
                <label class="info label company">{{ companyinfo.name }}</label>
                <el-input class="el-input serch" v-model="serchValue" placeholder="搜索企业">
                    <el-button class="el-button serch" slot="suffix" type="text">搜索</el-button>
                </el-input>
            </div>
            <div class="info_div">
                <el-row class="top row">
                  <el-col :span="20">
                    <div class="top info">
                        
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
                    <div class="top info">
                      <el-button type="text" class="contract button">在线联系</el-button>
                   </div>
                </el-col>
                </el-row>                          
            </div>
            <div class="main div">
                <el-row class="main row">
                  <el-col :span="16" class="main col left">
                    <div class="main info">
                      <div class="main pic div">
                        <img class="main img" :src="companyinfo.imgPath"/>
                      </div>
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
                    <div class="left info div">
                    <div class="div titleinfo">
                    <span>企业介绍</span>
                    </div>
                    <p class="indent">{{companyinfo.introduction}}</p>
                    
                    <div class="div titleinfo">
                        <span class="span titleinfo">产品信息</span>
                    </div>
                    <div class="div viewcontent">
                      <div class="div proinfo" v-for="(picinfo, index) in picinfos" :key="index">
                        <cpic :file_img="picinfo.fileid" :srcpaths="picinfo.filepath" :ptitle="picinfo.filename" :params="picinfo.fileparams"></cpic>
                      </div>
                    </div>
                  </div>
                  </el-col>
                  <el-col :span="8">
                    <div class="right content"></div>
                  </el-col>
                </el-row>
            </div>                
          </el-col>
          <el-col :span="2"></el-col>
          <div class="footer_">
          <div class="footer left">
            <label>Copyright 异度空间(武汉)信息技术有限公司, All Rights Reserved</label>
          </div>
          <div class="footer right">
            <img src="../img/gongan.png"><label>鄂ICP备2025112386号-1</label>
          </div>
        </div>
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
        //server_addr: 'http://111.230.49.63:30104',
        server_addr: 'http://localhost:8093',
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
                 url: this.server_addr+"/company/getCompanyByNo",
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
                      this.companyinfo.imgPath =company.imgPath;
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
                    url: this.server_addr + "/file/filesInfo",
                    params: {
                       companyNo: this.$route.query.companyNo,
                    },
                    //responseType:'blob'
                  }).then((response)=>{
                    for(let i=0;i<response.data.length;i++)
                    {
                      let info ={
                        fileid :response.data[i].companyNo+response.data[i].id,
                        //filetitle : response.data[i].title,
                        filepath: response.data[i].filePaths,
                        filename: response.data[i].title,
                        fileparams: response.data[i].proparams

                      }
                      if(response.data[i].isMainImg)
                      {
                         this.companyinfo.imgPath = info.filepath
                      }
                      else
                      {
                         if(response.data[i].fileType==0)
                         {
                           this.picinfos.push(info);
                         }
                         else 
                            this.videoinfos.push(info);
                      }
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
  template
  {
    height: 100%;
  }
  .top.row
  {
    position: relative;
    bottom: 15px;
  }
  .main.row
  {
    display: flex;
    margin-top: 0px;
    margin-bottom: 15px;
    width: 100%;
  }
  .main.col
  {
    padding: 0px;
    /*background-color:  white; */
  }
  .main.col.left
  {
    width: 100%;
  }
  .info.row
  {
    display: flex;
  }
  .right.content
  {
    /*width: 280px;*/
    /*flex-grow: 1;*/
    height: 100%;
    margin-left: 15px;
    background-color: white;
  }
  .left.info.div
  {
    /*background-color: white;*/
    margin-top: 0px;
  }
  .indent
  {
    font-family: STXihei;
    text-align: left;
    text-indent: 2em;
    line-height: 2.5;
    border-width: 2px;
    border-color: aliceblue;
    background-color: white;
  }
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
  .info.content
  {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: STXihei;
  }
  .div.proinfo
  {
    margin-top: 10px;
    background-color: white;
    /*border-style: solid;
    border-width: 2px;
    border-color: rgb(214, 232, 236); 
    /*margin-left: 50px;*/
  }
  .div.viewcontent
  {
    display: flex;
    flex-direction: column; 
    /*justify-content: center;*/
  }
  .lab.dis
  {
    color: brown;
  }
  .div.titleinfo
  {
    height: 40px;
    font-size: 20px;
    margin-top: 0px;
    background-color: rgba(147, 182, 223, 0.808);
  }
  .info
  {
    position:relative;
    float: left;
    /*font-family:'Times New Roman', Times, serif;*/
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
  .main.info
  {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: white;
    margin-bottom: 15px;
    width: 100%;
  }
  .main.img
  {
    width: 450px;
    height: 350px;
    margin: 0px;
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
    height: 100%;
    background-color: rgb(228, 231, 233);
  }
  
  .top
  {
    position: relative;
    height: 80px;
    width: 100%;
    
  }
  .info_div
  {
    justify-items: center;
    height: 50px;
    width: 100%;
    border-radius: 12px;
    background-color:white;
  }
  .footer_
    {
      margin-top: 20px;
      display: flex;
      align-items: center;
      color: white;
        overflow: hidden;
        bottom: 0;
        left: 0;
        width: 100%;
        position: static;
        background-color:rgb(101, 103, 105);
        height: 80px;
    }
    .footer.left
    {
      position: relative;
      left: -80px;
      width: 60%;
    }
    .footer.right
    {
       width: 40%;
    }
</style>