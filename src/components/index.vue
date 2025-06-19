<template>
<div id="app-f">
    <div class="top_">
      <div class="btn_div">
        <el-button type="primary" class="single btn" @click ="initEnterprise()"><i class="fa fa-user"></i>登录</el-button>
        <el-button type="primary" class="single btn" @click ="initEnterprise()"><i class="fa fa-user-plus"></i>注册</el-button>
        <el-button type="primary" class="single btn" @click ="initEnterprise()"><i class="fa fa-gear"></i>企业入驻</el-button>
        <el-button type="primary" class="single btn" @click ="initEnterprise()"><i class="fa fa-file-text"></i>发布公告</el-button>
      </div>
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
            <el-row class="menu el-row">
              <el-col :span="12">
                <el-menu class="title menu" active-text-color="#409EFF" mode="horizontal" default-active="0">
                    <template v-for="releasetype in releasetypes">
                        <el-menu-item class="menuitem" :index="releasetype.type">{{releasetype.typeName}}</el-menu-item>
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
            <el-row class="list area">
              <div class="container city">
                 <div
                    v-for="item in options"
                    :key="item.value"
                    class="item"
                    @mouseover="divview(item.value)"
                    @mouseout="divdisplay(item.value)"
                    @click="conserch(0,item.value)"
                    >
                  {{ item.label }}
                  <div class="citys item " :ref="item.value">
                    <ul>
                      <li v-for="city in item.children" class="city" @click="conserch(1,city.value)">
                        <span class="li-content">
                        {{ city.label }}
                      </span>
                      </li>
                    </ul>
                  </div>
                 </div>
              </div>
            </el-row>
            <el-row class="list region">
              <div class="container region">
                  <div
                    v-for="item in poptions"
                    :key="item.value"
                    class="item"
                    @mouseover="divview(item.value)"
                    @mouseout="divdisplay(item.value)"
                    @click="conserch(2,item.value)"
                  >
                  {{ item.label }}
                  <div class="regions item " :ref="item.value">
                    <ul class="my_ul">
                      <li v-for="region in item.children" class="region" @click="conserch(3,region.value)">
                        <span class="li-content">
                        {{ region.label }}
                        </span>
                      </li>
                    </ul>
                  </div>
                 </div>
              </div>
            </el-row>
        </div>
        <div class="center_">
          <div class="d-left"></div>
           <!--
           <div class="d-left">
             <div class="t_region"></div>
            
             <div class="d-el-cascader-panel region" @mouseleave="professionpanelleave('region')">
              <el-cascader-panel
                class="cascader-panel region"
                popper-class="cascaderRadio"
                :options="options"
                v-model="value"
                :show-all-levels="false" 
                ref="r_cascader"
                :props="{ expandTrigger: 'hover'}">
                <template v-slot="{ node, data}">
                  <div class="region list div">
                  <i class="	fa fa-map-marker"></i><span class="custom-node leaf" v-if="!node.isLeaf" @mouseenter="mouseenterLeafprofession(node,'region')">{{node.label}}</span>
                  <span v-else class="custom-node noLeaf" @mouseenter="mouseenterSubcatprofession(node,'region')">{{node.label}}</span> 
                </div>
                </template>
              </el-cascader-panel>
            </div>
             <div class="b_profession"></div>
             <div class="d-el-cascader-panel profession" @mouseleave = "professionpanelleave('profession')">
             <el-cascader-panel 
               ref="cascader-panel" 
               class="cascader-panel profession" 
               popper-class="cascaderRadio_f"              
               :options="poptions" 
               v-model="value" 
               :show-all-levels="false" 
               :props="{ expandTrigger: 'hover'}"
              >
              <template v-slot="{ node, data}"> -->
                <!--<span class="custom-node leaf el-icon-share">{{node.label}}</span>-->
                <!--                                  
                <i class="fa fa-universal-access"></i><span class="custom-node leaf" v-if="!node.isLeaf" @mouseenter="mouseenterLeafprofession(node,'profession')">{{node.label}}</span>
                <span v-else class="custom-node noLeaf" @mouseenter="mouseenterSubcatprofession(node,'profession')">{{node.label}}</span> 
                
                </template>
             </el-cascader-panel>
            </div>
            </div>  -->     
           <div class="d-center">
             <div class="company div" v-for="(company, index) in companys" :key="index">
               <list :img_path="company.imgPath" :area="company.provinceAddrName" :industry="company.industryName" :nature_name="company.natureName" :company_name="company.name" :company_no="company.companyNo" :company_num="company.scale"></list>
              </div>
           </div>         
           <div class="d-right"></div>
        </div>
        <div class="footer_">
          <div class="footer left">
            <label>Copyright 异度空间(武汉)信息技术有限公司, All Rights Reserved</label>
          </div>
          <div class="footer right">
            <img src="../img/gongan.png"><label>鄂ICP备2025112386号-1</label>
          </div>
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
        server_addr: 'http://111.230.49.63:30104',
        //server_addr: 'http://localhost:8093',
        i_text: "",
        categoryActive: '', // 当前选中的一级
        currentActiveTwo: '', // 当前选中的二级
        releasetypes: null,
        parentregion: null,
        parentprofession: null,
        poptions:[],
        options:[],
        images: [{id:1,url:require("../img/001.jpg")},{id:2,url:require("../img/002.jpg")},{id:3,url:require("../img/003.jpg")}],
        companys:[]
    };
  },
  mounted()
  {
     this.fetchData(),
     this.getParentRegion(),
     this.getProfession(),
     this.getcompanys()
  },
  methods:
  {
    conserch(serchtype, paramid)
    {
      let cprovice =null;
      let ccity =null;
      let cindustry =null;
      let csub_industry =null;
      if(serchtype ==0)
         cprovice = paramid;
      if(serchtype ==1)
         ccity = paramid;
      if(serchtype ==2)
         cindustry = paramid;
      if(serchtype ==3)
         csub_industry =paramid;
       axios({
                 method: "get",
                 url: this.server_addr + "/company/getCompanysByCon",
                 params: {
                  provinceAddr: cprovice,
                  cityAddr: ccity,
                  industry: cindustry,
                  subIndustry: csub_industry
                 }
             }).then((res) => {
              this.companys = res.data;
             })
    },
    divview(refvalue)
    {
      this.$nextTick(()=>{
        var el = this.$refs[refvalue][0];
        el.style.display = 'block';
      })
    },
    divdisplay(refvalue)
    {
      this.$nextTick(()=>{
        var el = this.$refs[refvalue][0];
        el.style.display = 'none';
      })
    },
    initEnterprise()
    {
      this.$router.push('regist');
    },
    professionpanelleave(title)
    {
      let all_node = document.querySelectorAll('.el-cascader-menu');
      let el_node = [];
      for(let i=0;i<all_node.length;i++)
      {
        if(all_node[i].parentElement.className.includes(title))
        {
          el_node.push(all_node[i]);
        }
      }
       for(let m=0;m<el_node.length;m++)
       {
        
        if(m>0)
        {
          el_node[m].style.display = 'none'
        }
       }
    },
    getcompanys()
    {
      axios({
                 method: "get",
                 url: this.server_addr + "/company/getCompanys",
             }).then((res) => {
              this.companys = res.data;
             })
            

    },
    fetchData() 
    {
      axios.get(this.server_addr+'/releaseTpye/getAll')
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
        axios.get(this.server_addr+'/region/getRegions')
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
            
              this.options.push(currentOption)
            }
          }         
        }).catch(() => {console.log(response.data);})
        .catch(error => {
          // 处理错误
          console.error(error);
        });
    },
    getProfession()
    {
        axios.get(this.server_addr+'/profession/getProfession')
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
              
              this.poptions.push(currentOption)
              
            }
          }         
        }).catch(() => {console.log(response.data);})
        .catch(error => {
          // 处理错误
          console.error(error);
        });
    },
    handleChange(value) {
                console.log(value);
            },
    mouseenterSubcatprofession(node,title)
    {
       //let el_node = document.querySelectorAll('.el-popper .el-cascader__dropdown .specialCascaderRadio .el-cascader-panel .el-cascader-menu');
      let all_node = document.querySelectorAll('.el-cascader-menu');
      let el_node = [];
      for(let i=0;i<all_node.length;i++)
      {
        if(all_node[i].parentElement.className.includes(title))
        {
          el_node.push(all_node[i]);
        }
      }
       if (el_node[node.level] && el_node.length > 0) {
          el_node[node.level].style.display = "none";
          this.cascaderRecursion(el_node,node)
        } 
        else {
                console.log('none');
        }
    },
    
    mouseenterLeafprofession (node,title) {
      // console.log('联级选择鼠标移出');
      let all_node = document.querySelectorAll('.el-cascader-menu');
      let el_node = [];
      for(let i=0;i<all_node.length;i++)
      {
        if(all_node[i].parentElement.className.includes(title))
        {
          el_node.push(all_node[i]);
        }
      }
      //let el_node = document.querySelectorAll('.el-popper .el-cascader__dropdown .specialCascaderRadio .el-cascader-panel .el-cascader-menu');
       if (el_node[node.level] && el_node.length > 0) {
          el_node[node.level].style.display = "block";
       }
    },
    // 级联的递归（因为层级数量未知）
    cascaderRecursion(el_node,node){
      function handle(i){
          if(el_node[node.level + i]){
              el_node[node.level + i].style.display = "none";
              i++
              handle(i)
          }else{
              return
          }
      }
      handle(1)
    },
    // 一级菜单点击事件
  handleChangeCategory(e){
	  this.categoryActive = e
    this.currentActiveTwo = ''
  },
// 二级菜单点击事件
  handleChangeCategoryTwo(e, bigC){
	  this.categoryActive = bigC
    this.currentActiveTwo = e
   }       

  },
  components:{
    list
  }
};

</script>
<style>
/*
li::marker {
  font-size: 60px;
  color:rgb(235, 121, 99);
}*/
li::marker {
  font-size: 25px;
  vertical-align: middle;
}
.li-content {
  color: black;
  margin-left: -20px;
  font-size:15px;
  vertical-align: top;
  margin-bottom:5px;
}
  .regions.item
  {
    /*
    transition: opacity 0.5s ease; */ /* 平滑的淡入淡出效果 */
    /* opacity: 0; /* 初始透明度为0 */ 
    position: absolute;
    bottom: -100; /* 将子元素定位到父元素的底部 */
    display: none;
    background-color:rgb(221, 231, 240);
    width: 180px;
  }
  .citys
  {
    position: absolute;
    bottom: -100; /* 将子元素定位到父元素的底部 */
    display: none;
    background-color:rgb(221, 231, 240);
    width: 120px;
  }
  .container {
    justify-content: start;/* 水平排列，从左开始 */
    overflow-wrap: break-word;/* 换行 */
    align-items: center; 
    position: relative;
    /* height: 60px;
     /*display: flex;         /* 设定为flex容器 */ 
     /*flex-direction: row; 
     place-items: center; */
     /*white-space: normal;   /* 允许文本换行 */
  }
  .container.region
  {
    display: flex;
    align-items: center; 
    height: 40px
  }
  .item
  {
    display: inline-block;
    font-family: "Helvetica", "Arial", sans-serif;
    font-size: small;
    margin-left: 18px;
    
  }
  .citys.item
  {
    display: none;
    z-index: 1;
  }
    .fa.fa-map-marker
    {
      position: absolute;
      left: 10px;
      top: 10px;
      font-size: 18px;
      color: rgb(119, 128, 201);
    }
    .fa.fa-universal-access
    {
      position: absolute;
      left: 10px;
      top: 10px;
      font-size: 16px;
      color: rgb(119, 128, 201);
    }
    .company.div
    {
      width: 100%;
    }
    .menuitem
    {
      font-size:18px;
      font-weight: 500;
    }
    .cascader-panel
    {
      position: absolute;
      height: 400px;
      margin-bottom: 10px;
      margin-right: 0px;
    }
    .cascader-panel.region
    {
      height: 500px;
    }
    .cascader-panel.region .el-icon-arrow-right
    {
      display: none;
    }
    .el-cascader-menu__wrap
    {
      height: 100%;
      margin-bottom: 0px;
      margin-right: 0px;
    }
    .custom-node {
        padding: 0px 0px;
        position: relative;
        display:flex;
    }
    .top_
    {
        height: 50px;
        background-color:rgb(199, 193, 196);
    }
    .list
    {
      height: 50px;
      background-color: rgb(221, 231, 240);
      margin-bottom: 5px;
      border-radius:10px;
      border-style: solid;
      border-color:coral;
      border-width: 1px;
    }
    .list.region
    {
      height: 40px;
    }
    
    .btn_div
    {
      float: right;
      margin-right: 50px;
      margin-top: 15px;
    }
    .single.btn
    {
       height: 30px;
       width: 80px;
       text-align: center;
       padding: 0px;
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
        width: 18%;
        height: 100%;
        background-color:rgb(253, 253, 253);
    }
    .t_region 
    {
       width: 100%;
       height: 40px;
       color:rgb(127, 130, 133);
       font-size: 20px;
       font-weight:550;
       text-align: center;
       letter-spacing: 20px;
       background-color: rgb(207, 217, 243);
       border-radius: 10px;
    }
    .b_profession
    {
      width: 100%;
      height: 40px;
       color: rgb(81, 112, 111);
       font-size: 20px;
       font-weight:550;
       text-align: center;
       letter-spacing: 20px;
       background-color: rgb(207, 217, 243);
       border-radius: 10px;
    }
    .d-el-cascader-panel
    {
      width: 100%;
      height: 500px;
      position: static;
      border-radius: 10px;
    }
    .d-center
    {
        width: 57%;
        height: 100%;
        display: flex;
        flex-direction:column;
        align-items: flex-start;
        margin-top: 1px;
    }
    .d-right
    {
        width: 25%;
        height: 100%;
    }
    .footer_
    {
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
