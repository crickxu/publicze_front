<template id="app_r">
 <div class="full">
  <el-row>
    <el-col :span="3" class="el-col left">
      <div class="left_r">
        <div class="_layer left"></div>
      </div>
    </el-col>
    <el-col :span="18">
      <div class="center_r">
        <div class="_layer top"></div>
          <div>
            <el-row class="el-row top">
              <el-col :span="9">
                <div>
                  <img class="company-main-img" src="../company_imgs/00008.jpg">
                </div>
              </el-col>
              <el-col :span="15">
                <div>
                  <textarea class="text comany-introduction" v-model="con_introduct"></textarea>
                </div>
              </el-col>
            </el-row>
         </div>
        <div class="_layer middle">         
        </div>
        <el-row class="el-row-info a">
            <el-col :span="12">
              <div class="div-l company_name"><span><i class="fa fa-plus-circle"></i>公司名称</span></div>
              <div>
                <el-input class="input company_name" v-model="company_name" placeholder="请输入公司名称">
                </el-input>
              </div>
            
            </el-col>
            <el-col :span="12">
              <div class="div-l credit_code"><span><i class="fa fa-plus-circle"></i>统一信用代码</span></div>
              <div>
                <el-input class="input credit_code" v-model="credit_code" placeholder="请输入统一信用代码"></el-input>
              </div>
            </el-col>
          </el-row>
          <el-row class="el-row-info b">
            <el-col :span="12">
              <div class="div-l nature"><span><i class="fa fa-plus-circle"></i>企业类型</span></div>
              <div>
                <el-select class="el-select nature" v-model="nature_selected" placeholder="国企">
                  <el-option v-for="item in natures" :key="item.value" :value="item.value" :label="item.label"></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="div-l scale"><span><i class="fa fa-plus-circle"></i>企业规模</span></div>
              <div>
                <el-input-number class="input scale" v-model="scale" placeholder=""></el-input-number>
              </div>
            </el-col>
          </el-row>
          <el-row class="el-row-info c">
            <el-col :span="12">
              <div class="div-l region"><span><i class="fa fa-plus-circle"></i>企业所在省</span></div>
              <div>
                <el-select class="el-select region" v-model="region_selected" placeholder="" @change="fillcity">
                  <el-option v-for="item in regions" :key="item.value" :value="item.value" :label="item.label"></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="div-l city"><span><i class="fa fa-plus-circle"></i>企业所在市</span></div>
              <div>
                <el-select class="el-select city" v-model="city_selected" placeholder="" @change="updateFun">
                  <el-option v-for="item in citys" :key="item.value" :value="item.value" :label="item.label"></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
          <el-row class="el-row-info d">
            <el-col :span="8">
              <div class="div-l contact"><span><i class="fa fa-address-card-o"></i>具体地址</span></div>
              <div>
                <el-input class="input contact" v-model="contact" placeholder=""></el-input>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="div-l mobile_num"><span><i class="fa fa-phone-square"></i>联系号码</span></div>
              <div>
                <el-input class="input mobile_num" v-model="mobile_num" placeholder=""></el-input>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="div-l event_type"><span><i class="fa fa-plus-circle"></i>发布类型</span></div>
              <div>
                <el-select class="el-select event_type" v-model="event_selected" placeholder="">
                  <el-option v-for="item in event_types" :key="item.value" :value="item.value" :label="item.label"></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
          <el-row class="el-row-info c">
            <el-col :span="8">
              <div class="div-l one_profession"><span><i class="fa fa-plus-circle"></i>一级行业</span></div>
              <div>
                <el-select class="el-select one_profession" v-model="onepro_selected" placeholder="" @change="filltwopro">
                  <el-option v-for="item in one_professions" :key="item.value" :value="item.value" :label="item.label"></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="div-l two_profession"><span><i class="fa fa-plus-circle"></i>二级行业</span></div>
              <div>
                <el-select class="el-select two_profession" v-model="twopro_selected" placeholder="" @change="fillthrpro">
                  <el-option v-for="item in two_professions" :key="item.value" :value="item.value" :label="item.label"></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="div-l thr_profession"><span><i class="fa fa-plus-circle"></i>三级行业</span></div>
              <div>
                <el-select class="el-select thr_profession" v-model="thrpro_selected" placeholder="">
                  <el-option v-for="item in thr_professions" :key="item.value" :value="item.value" :label="item.label"></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
        <div class="_layer footer"></div>
        <div>
          <div>
            <div class="title div">
              <el-button type="text" @click="addpic" class="add btn"><i class="fa fa-plus-circle"></i>添加图片</el-button>
            </div>
            <div class="content div">
              <div class="picture_content div"  id="p_content_div">
                <div v-for="(picinfo, index) in picinfos" :key="index">
                  <pic :f_input="picinfo.finputId" :file_img="picinfo.imgId" @getInfo="getInfoFromChild"></pic>
                 <!--<component :is='com' ></component> -->
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="title div">
              <el-button type="text" class="add btn"><i class="fa fa-plus-circle"></i>添加视频</el-button>
            </div>
            <div class="content div">
              <div class="video_content div">
                <input type="file" ref="videofileInput" class="videofile input" id="v_input" accept="video/*" style="display: none;" @change="handleVideoFileChange"/>
                <video class="p_video" src="../video/135353.mp4" @click="filevideoopen" id="file_video"></video>
                <el-input class="input img" v-model="v_title" placeholder="请输入视频标题"></el-input>
              </div>
            </div>
          </div>
          <div>
            <el-button type="primary" @click ="initEnterprise()" class="regist-btn">企业入驻</el-button>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="3">
      <div class="right_r"></div>
    </el-col>
  </el-row>
</div>
</template>
<script>
import pic from './picture'
import video from './video'
import axios from 'axios';
export default {
    data() {
    return {
        con_introduct: "",
        company_name: "",
        credit_code: "",
        scale: 1,
        contact: "",
        mobile_num: "",
        nature_selected: "",
        region_selected: "",
        city_selected: "",
        event_selected: "",
        onepro_selected: "",
        twopro_selected: "",
        thrpro_selected: "",
        p_title: "",
        v_title: "",
        srcpath: require("../picture/00001.jpg"),
        regions: [],
        natures: [{value:1,label:'国企'},{value:2,label:'央企'},{value:3,label:'民营企业'}],
        citys: [],
        event_types: [{value:1,label:'企业资源'},{value:2,label:'企业融资'},{value:3,label:'企业代理'}],
        one_professions: [],
        two_professions: [],
        thr_professions: [],
        imgs: [],
        imgs_pro: [],
        videos: [],
        videos_pro: [],
        coms: [],
        picinfos: []
    };
  },
  methods:
  {
    getInfoFromChild(pfile,img_pro)
    {
       this.imgs.push(pfile);
       this.imgs_pro.push(img_pro);
    },
    addpic()
    {
      //const moment = require('moment');
      //const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
      const timestamp = new Date().getTime();
      let finputid = "finput"+timestamp;
      let imgid = "img"+timestamp;
      var info = 
      {
        finputId: finputid,
        imgId: imgid
      }
      this.picinfos.push(info);
      //this.coms.push('pic');
    },

    filevideoopen()
    {
      document.getElementById('v_input').click();
    },
    handleVideoFileChange()
    {
       var pfile =  this.$refs.videofileInput.files[0];
       this.videos.push(pfile);
       var video_pro ={
        name: pfile.name,
        discrip: this.v_title
       }
       this.videos_pro.push(video_pro);
       if(window.FileReader)
       {
        var reader = new FileReader();
        reader.readAsDataURL(pfile);
        reader.onload=function()
        {
          var p_video = document.getElementById('file_video');
          p_video.src= this.result;
          
        }
       }
    },
    fillcity(pvalue)
    {
      let sregion = this.regions.find(e=>e.value==pvalue);  
      this.citys.splice(0, this.citys.length);
       if(sregion.children.length>0)
       { 
           sregion.children.forEach(element => {
            this.citys.push(element);  
          });
               
       }
       else
       {
        let scity = {
            label: sregion.label,
            value: sregion.value,
            children: sregion.children
        }
        this.citys.push(scity);
       }
       this.city_selected=this.citys[0].value;
    },
    filltwopro(fvalue)
    {
      let tpro = this.one_professions.find(e=>e.value==fvalue);
      this.two_professions.splice(0,this.two_professions.length);
      if(tpro.children.length>0)
      {
         tpro.children.forEach(e=>{this.two_professions.push(e)});
         this.twopro_selected = this.two_professions[0].value;
      }
    },
    fillthrpro(fvalue)
    {
       let tpro = this.two_professions.find(e=>e.value==fvalue);
       this.thr_professions.splice(0,this.thr_professions.length);
       if(tpro.children.length>0)
       {
         tpro.children.forEach(e=>{this.thr_professions.push(e)});
         this.thrpro_selected = this.thr_professions[0].value;
       } 
    },
    updateFun()
    {
      this.$forceUpdate();
    },
    initEnterprise()
    {
      axios.post('http://localhost:8093/company/addCompany',
        {
          
            userNo: "",
            name: this.company_name,
            creditCode: this.credit_code,
            natureId: this.nature_selected,
            scale: this.scale,
            provinceAddr: this.region_selected,
            cityAddr: this.city_selected,
            contact: this.contact,
            introduction: this.con_introduct,
            mobileNum: this.mobile_num,
            eventType: this.event_selected,
            industry: this.onepro_selected,
            subIndustry: this.twopro_selected,
            thrIndustry: this.thrpro_selected
            
        },
        {
          headers: {
            'Content-Type': 'application/json'
           }
        }
      ).then((res)=>{
        const formData = new FormData();
        for(let i=0;i<this.imgs.length;i++)
        {
          formData.append('uploadimg',this.imgs[i]);
        }
        for(let n=0;n<this.videos.length;n++)
        {
          formData.append('uploadvideo',this.videos[n])
        }
        formData.append('imgspro',JSON.stringify(this.imgs_pro));
        
        formData.append('videospro',JSON.stringify(this.videos_pro));
        this.$confirm(this.videos_pro, 'title', {
          confirmButtonText: 'confirm',
          cancelButtonText: 'cancel',
          type: 'warning'
        }).then(() => {
          
        }).catch(() => {});
        formData.append('companyNo','CP20240703010255');
        axios.post('http://localhost:8093/file/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
       })
        .then(response => {
           console.log(response.data);
        })
        .catch(error => {
           console.error("图片上传失败:"+error);
        });
      }).catch(err=>{
        console.error("公司注入失败:"+err);
      });
    },
    getParentRegion()
    {
        axios.get('http://localhost:8093/region/getRegions')
        .then(response => {
          // 处理返回的数据
          if(response.data!=null)
          {
            this.parentregion=response.data;
            for(let i=0;i<this.parentregion.length;i++)
            {
              let currentRegion= this.parentregion[i];
              let childrenoption=[]; 
              
              if(currentRegion.children!==null&&currentRegion.children!==undefined)
              {
                 for(let m=0;m<currentRegion.children.length;m++)
                 {
                    let currentchildren = {
                      label: currentRegion.children[m].name,
                      value: currentRegion.children[m].regionNo
                    }
                    childrenoption.push(currentchildren)
                 }
              }
              let currentOption= {
                label: currentRegion.name,
                value: currentRegion.regionNo,
                children: childrenoption
              }
            
              this.regions.push(currentOption)
              
            }
            this.region_selected = this.regions[0].value
          }        
        }).catch(() => {console.log(response.data);})
        .catch(error => {
          // 处理错误
          console.error(error);
        });
    },
    getProfession()
    {
        axios.get('http://localhost:8093/profession/getProfession')
        .then(response => {
          // 处理返回的数据
          if(response.data!=null)
          {
            this.parentprofession=response.data;
            
            for(let i=0;i<this.parentprofession.length;i++)
            {
              let childrenpoption=[]; 
              let currentProfession= this.parentprofession[i]; 
              if(currentProfession.children!==null&&currentProfession.children!==undefined)
              {
                
                 for(let m=0;m<currentProfession.children.length;m++)
                 {
                  
                    let secsubpoption=[]; 
                    let secsubProfession = currentProfession.children[m].children;
                    for(let n=0;n<secsubProfession.length;n++)
                    {
                      
                      let secsub = {
                        label: secsubProfession[n].name,
                        value: secsubProfession[n].professionNo
                      }
                      
                      secsubpoption.push(secsub);
                    }
                    let currentrenpoption = {
                      label: currentProfession.children[m].name,
                      value: currentProfession.children[m].professionNo,
                      children: secsubpoption
                    }
                    childrenpoption.push(currentrenpoption)
              
                }
              }
              
              let currentOption= {
                label: currentProfession.name,
                value: currentProfession.professionNo,
                children: childrenpoption
              }
              
              this.one_professions.push(currentOption)
              
            }
            this.onepro_selected = this.one_professions[0].value
          }         
        }).catch(() => {console.log(response.data);})
        .catch(error => {
          // 处理错误
          console.error(error);
        });
    },
  },
  mounted()
  {
      this.getParentRegion();
      this.getProfession();
  },
  components:{
    pic,
    video,
  }
}
</script>
<style>
  span{
    float: left;
  }
  .full
  {
    width: 100%;
    background-color: rgb(216, 207, 240);
  }
  .el-row.top
  {
    height: 320px;
    background-color:ivory;
  }
  .el-row-info
  {
    background-color:ivory;
    height: 70px;
  }
  .div-l
  {
    display: flex;
    margin-bottom: 2px;
  }
  .input
  {
    width: 230px;
    float: left;
  }
  .input.contact
  {
    width: 320px;
  }
  .input .el-input__inner
  {
    border: solid 1px #e0e6ca;
    height: 30px;
    padding: 0px;
  }
  .el-select
  {
    float: left;
  }
  .el-select .el-input__inner{
        height: 30px;
    }
  .company-main-img
  {
    padding: 30px;
    width: 350px;
    height: 280px;
  }
  .text.comany-introduction
  {
    width: 600px;
    height: 280px;
    margin-top: 30px;
  }
  ._layer
  {
    height: 60px;
    background-color: rgb(216, 207, 240);
  }

  ._layer.top
  {
    display: block;
  }
  .title.div
  {
    height: 40px;
    width: 100%;
    background-color: rgb(240, 236, 236);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .add.btn
  {
    font-size:14pt;
  }
  .title.span
  {
    margin-top: 10px;
  }
  .p_img
  {
    width: 250px;
    height: 200px;
  }
  .p_video
  {
    width: 280px;
    height: 150px;
  }
  .input.img
  {
    width: 200px;
  }
  .content.div
  {
    display:flex;
    width: 100%;
    background-color: ivory;
  }
  .picture_content
  {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 235px;
  }
  
  .video_content
  {
    width: 220px;
    height: 200px;
  }
</style>