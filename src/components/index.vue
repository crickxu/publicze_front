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
        </div>
        <div class="center_">
           <div class="d-left">
             <div class="t_region">地区</div>
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
                  <span class="custom-node leaf el-icon-search" v-if="!node.isLeaf" @mouseenter="mouseenterLeafprofession(node,'region')">{{node.label}}</span>
                  <span v-else class="custom-node noLeaf" @mouseenter="mouseenterSubcatprofession(node,'region')">{{node.label}}</span> 
                </template>
              </el-cascader-panel>
            </div>
             <div class="b_profession">行业</div>
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
              <template v-slot="{ node, data}">
                <!--<span class="custom-node leaf el-icon-share">{{node.label}}</span>-->
                
                <span class="custom-node leaf el-icon-share" v-if="!node.isLeaf" @mouseenter="mouseenterLeafprofession(node,'profession')">{{node.label}}</span>
                <span v-else class="custom-node noLeaf" @mouseenter="mouseenterSubcatprofession(node,'profession')">{{node.label}}</span> 
                
                </template>
             </el-cascader-panel>
            </div>
            </div>         
           <div class="d-center">
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
        categoryActive: '', // 当前选中的一级
        currentActiveTwo: '', // 当前选中的二级
        releasetypes: null,
        parentregion: null,
        parentprofession: null,
        pselectedOptions:[],
        selectedOptions:[],
        poptions:[],
        options:[],
        images: [{id:1,url:require("../img/001.jpg")},{id:2,url:require("../img/002.jpg")},{id:3,url:require("../img/003.jpg")}]
    };
  },
  mounted()
  {
     this.fetchData(),
     this.getParentRegion(),
     this.getProfession()
     this.nodetest()
  },
  methods:
  {
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
    .cascader-panel
    {
      position: absolute;
      height: 400px;
      background-color: beige;
    }
    .cascader-panel.region
    {
      height: 500px;
    }
    .el-cascader-menu__wrap
    {
      height: 100%;
    }
    .custom-node {
        padding: 0px 0px;
        position: relative;
        display:flex;
    }
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
    .t_region
    {
       width: 100%;
       height: 30px;
       background-color: lightslategray;
    }
    .b_profession
    {
       width: 100%;
       height: 30px;
       background-color: lightslategray;
    }
    .d-el-cascader-panel
    {
      width: 100%;
      height: 500px;
      position: static;
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
        position: static;
        background-color:rgb(190, 195, 199);
        height: 150px;
    }
</style>
