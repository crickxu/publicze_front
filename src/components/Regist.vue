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
              <div class="div-l company_name"><span>公司名称</span></div>
              <div>
                <el-input class="input company_name" v-model="company_name" placeholder="请输入公司名称">
                </el-input>
              </div>
            
            </el-col>
            <el-col :span="12">
              <div class="div-l credit_code"><span>统一信用代码</span></div>
              <div>
                <el-input class="input credit_code" v-model="credit_code" placeholder="请输入统一信用代码"></el-input>
              </div>
            </el-col>
          </el-row>
          <el-row class="el-row-info b">
            <el-col :span="12">
              <div class="div-l nature"><span>企业类型</span></div>
              <div>
                <el-select class="el-select nature" v-model="nature_selected" placeholder="国企">
                  <el-option v-for="item in natures" :key="item.value" :value="item.value" :label="item.label"></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="div-l scale"><span>企业规模</span></div>
              <div>
                <el-input-number class="input scale" v-model="scale" placeholder=""></el-input-number>
              </div>
            </el-col>
          </el-row>
          <el-row class="el-row-info c">
            <el-col :span="12">
              <div class="div-l region"><span>企业所在省</span></div>
              <div>
                <el-select class="el-select region" v-model="region_selected" placeholder="" @change="fillcity">
                  <el-option v-for="item in regions" :key="item.value" :value="item.value" :label="item.label"></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="div-l city"><span>企业所在市</span></div>
              <div>
                <el-select class="el-select city" v-model="city_selected" placeholder="" @change="updateFun">
                  <el-option v-for="item in citys" :key="item.value" :value="item.value" :label="item.label"></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
          <el-row class="el-row-info d">
            <el-col :span="8">
              <div class="div-l contact"><span>具体地址</span></div>
              <div>
                <el-input class="input contact" v-model="contact" placeholder=""></el-input>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="div-l mobile_num"><span>联系号码</span></div>
              <div>
                <el-input class="input mobile_num" v-model="mobile_num" placeholder=""></el-input>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="div-l event_type"><span>发布类型</span></div>
              <div>
                <el-select class="el-select event_type" v-model="event_selected" placeholder="">
                  <el-option v-for="item in event_types" :key="item.value" :value="item.value" :label="item.label"></el-option>
                </el-select>
              </div>
            </el-col>
          </el-row>
          <el-row class="el-row-info c">
            <el-col :span="8">
              <div class="div-l one_profession"><span>一级行业</span></div>
              <div>
                <el-select class="el-select one_profession" v-model="onepro_selected" placeholder="" @change="filltwopro">
                  <el-option v-for="item in one_professions" :key="item.value" :value="item.value" :label="item.label"></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="div-l two_profession"><span>二级行业</span></div>
              <div>
                <el-select class="el-select two_profession" v-model="twopro_selected" placeholder="" @change="fillthrpro">
                  <el-option v-for="item in two_professions" :key="item.value" :value="item.value" :label="item.label"></el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="div-l thr_profession"><span>三级行业</span></div>
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
              <span>添加图片</span>
              <el-button type="text"></el-button>
            </div>
            <div class="content div">
              <div class="picture_content div" id="p_content_div">
                <input type="file" ref="fileInput" class="file input" id="f_input" accept="image/*" style="display: none;" @change="handleFileChange"/>
                <img class="p_img" ref ="fileimg" :src="srcpath" id="file_img" @click="fileopen()" alt=""/>
                <el-input class="input img" v-model="p_title" placeholder="请输入图片标题"></el-input>
              </div>
            </div>
          </div>
          <div>
            <div class="title div">
              <span>添加视频</span>
              <el-button type="text"></el-button>
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
            <el-button type="primary" @click ="initEnterprise()" class="regist-btn el-icon-view">企业入驻</el-button>
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
    };
  },
  methods:
  {
    fileopen()
    {
      document.getElementById('f_input').click();
    },
    filevideoopen()
    {
      document.getElementById('v_input').click();
    },
    handleFileChange()
    {
       var pfile =  this.$refs.fileInput.files[0];
       if(window.FileReader)
       {
        var reader = new FileReader();
        reader.readAsDataURL(pfile);
        reader.onload=function()
        {
          var p_img = document.getElementById('file_img');
          p_img.src= this.result;
          
        }
       }
    },
    handleVideoFileChange()
    {
       var pfile =  this.$refs.videofileInput.files[0];
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
      this.$router.push('regist');
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
  }
  .p_img
  {
    width: 250px;
    height: 220px;
  }
  .p_video
  {
    width: 280px;
    height: 150px;
  }
  .input.img
  {
    width: 180px;
  }
  .content.div
  {
    display:flex;
    height: 200px;
    width: 100%;
    background-color: ivory;
  }
  .picture_content
  {
    width: 280px;
    height: 260px;
  }
  .video_content
  {
    width: 220px;
    height: 200px;
  }
</style>