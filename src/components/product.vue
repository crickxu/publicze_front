<template>
  <el-container>
    <el-header class="header">
    </el-header>
    <div class="aside">
        <div class="left">
        </div>
        <div class="center">
          <el-row>
            <el-col :span="12">
              <div class="comp div">
                <div>
                  <span class="info span"><label class="tag">*</label><label class="comp lab">产品所属行业：</label></span>
                </div>
              <div>
                <el-select class="custom-select" v-model="pro_selected" placeholder="" @change="fillthrpro">
                  <el-option v-for="item in professions" :key="item.value" :value="item.value" :label="item.label"></el-option>
                </el-select>
             </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="comp div">
                <div>
                  <span class="info span"><label class="tag">*</label><label class="comp lab">产品所属子行业：</label></span>
                </div>
              <div>
                <el-select class="custom-select" v-model="subpro_selected" @change="thrhandlechange" placeholder="">
                  <el-option v-for="item in sub_professions" :key="item.value" :value="item.value" :label="item.label"></el-option>
                </el-select>
             </div>
             </div>
            </el-col>
          </el-row>
          
        <el-row>
          <el-col :span="12">
            <div class="comp div">
               <div>
                 <span class="info span"><label class="tag">*</label><label class="comp lab">企业名称：</label></span>
               </div>
               <div>
                  <el-input class="input contact" v-model="companyName"/>
               </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="comp div">
               <div>
                 <span class="info span"><label class="tag">*</label><label class="comp lab">产品名称：</label></span>
               </div>
               <div>
                 <el-input class="input contact" v-model="proName" />
               </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18">
            <div class="comp div">
              <div>
               <span class="info span"><label class="comp lab">产品描述：</label></span>
              </div>
              <div>
                <el-input type="textarea" :rows="6" v-model="prodes" placeholder="请输入内容"></el-input>
              </div>
              </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="comp div">
              <div class="panel-div">
                <el-button type="primary" @click="addpic" class="add btn"><i class="fa fa-picture-o"></i>添加图片</el-button>
              </div>
              <div>
                <div class="picture_content div">
                <div v-for="(picinfo, index) in picinfos" :key="index">
                  <pic :f_input="picinfo.finputId" :file_img="picinfo.imgId" @getInfo="getInfoFromChild"></pic>
                 <!--<component :is='com' ></component> -->
                </div>
              </div>
            </div>
            </div>
          </el-col>
        </el-row>
        
        <div class="param boder div">
          <label class="param lab">动态参数</label>
        </div>
        <div class="boder div">
          <el-row>
            <el-col :span="24">
              <el-button type="primary" @click ="addparam" class="param btn">动态添加参数</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <table>
                <thead>
                <tr>
                 <th class="paramset">参数名</th>
                 <th class="paramset">参数值</th>
                 <th class="oprate"></th>
                </tr>
                </thead>
               <tbody>
                 <tr v-for="(row, index) in param_rows" :key="index">
                  <td><input class="paramset input" v-model="row.paramName" /></td>
                  <td><input class="paramset input" v-model="row.paramValue" /></td>
                  <td><el-button class="deletebtn" type="primary">删 除</el-button></td>
                 </tr>
              </tbody>
            </table>
            </el-col>
          </el-row>
        </div>
        <div>
          <el-button class="submmit" type="primary" @click="addpro">提 交</el-button>
        </div>
        </div>
        <div class="right"></div>
    </div>
    <el-footer class="footer"></el-footer>
  </el-container>
</template>
<script>
   import pic from './picture';
   import axios from 'axios';
   export default
   {
    props:{
    
    },
     data() {
      return{
        local_addr: "http://localhost:8093",
        server_addr: "http://111.230.49.63:30104",
        param_rows: [],
        professions: this.$route.query.professions,
        sub_professions: this.$route.query.sub_professions,
        companyName: this.$route.query.companyName,
        product_No: "",
        proName: "",
        prodes: "",
        img_src: require("../picture/default.jpg"),
        img_srcs: [],
        subpro_selected: this.$route.query.subindustry,
        pro_selected: this.$route.query.industry,
        picinfos: [],
        imgs: [],
        imgs_pro: [],
        videos:[],
        videos_pro: []
      }
    },
      methods:
      {
          addparam()
          {
            let row = {
              paramName : "",
              paramValue : ""
            }
            this.param_rows.push(row)
          },
          addpic()
          {
      
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
          getInfoFromChild(pfile,img_pro)
          {
             this.imgs.push(pfile);
             this.imgs_pro.push(img_pro);
          },
          addpro()
          {
            this.product_No ="PD" + new Date().getTime();
            axios.post(this.server_addr + '/product/addProduct',
            {
              trade: this.pro_selected,
              subTrade: this.subpro_selected,
              companyNo: this.$route.query.companyNo,
              companyName: this.companyName,
              productNo: this.product_No,
              productName: this.proName,
              productDes: this.prodes,
              imgSrc: this.img_srcs,
              proParam: JSON.stringify(this.param_rows)
            },
            {
               headers: {
                  'Content-Type': 'application/json'
               }
            }).then((res)=>{
              
              const formData = new FormData();
        
        if(this.imgs.length<=0)
        {
          formData.append('uploadimg',new File([],'uploadimg'));
        }
        for(let i=0;i<this.imgs.length;i++)
        {
          formData.append('uploadimg',this.imgs[i]);
        }
        if(this.videos.length<=0)
        {
          formData.append('uploadvideo',new File([],'uploadvideo'));
        }
        for(let n=0;n<this.videos.length;n++)
        {
          formData.append('uploadvideo',this.videos[n])
        }
        formData.append('imgspro',JSON.stringify(this.imgs_pro));
        formData.append('videospro',JSON.stringify(this.videos_pro));
        formData.append('companyNo',this.$route.query.companyNo+"#"+this.product_No);
        
        axios.post(this.server_addr+'/file/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
       })
       .then(response => {
           console.log(response.data);
        })
        .catch(error => {
           console.error("图片上传失败:"+error);
           this.$confirm('图片或视频上传失败，请联系客服', 'title', {
            confirmButtonText: 'confirm',
            cancelButtonText: 'cancel',
            type: 'warning'
           }).then(() => {
            
           }).catch(() => {});
        });
        this.$confirm('产品添加成功！', 'title', {
          confirmButtonText: 'confirm',
          cancelButtonText: 'cancel',
          type: 'warning'
        }).then(() => {
          
        }).catch(() => {});
      }).catch(err=>{
        console.error("产品添加失败:"+err);
        this.$confirm('产品添加失败:'+err, 'title', {
          confirmButtonText: 'confirm',
          cancelButtonText: 'cancel',
          type: 'warning'
        }).then(() => {
          
        }).catch(() => {});
          })
        }
      }, 
      mounted()
      {
        
      },
      components:{
        pic,
      }
   }
   
</script>
<style>
  .header
  {
    background-color: rgb(240, 240, 235); /* 可视化左右区域 */
    
  }
  .aside
  {
     display: flex;
     justify-content: space-between;
     padding: 0 0px;
  }
  .left,.right
  {
    width: 300px; /* 固定宽度 */
    background-color: rgb(240, 240, 235);
  }
  .center {
    flex-grow: 1; /* 中间部分自适应宽度 */
  }
  .input .el-input__inner
  {
    float: left;  
    height: 35px;
    font-size: 14px;
    width: 320px;
  }
  .custom-select 
  {
    float: left;
  }
  .param.lab
  {
     font-size: 16px;
     color: rgb(55, 95, 182);
     float: left;
     margin-bottom: 0px;
  }
  .param.boder.div
  {
    display: flex;
      height: 40px;
      background-image: linear-gradient(to right, rgb(235, 225, 225), rgb(148, 197, 238));
      align-items: center;
  }
 .custom-select .el-input__inner
  {
    height: 35px;
    
    /* 下面设置右侧按钮居中 
    .el-input__suffix {
        top: 5px;
    }
    .el-input__icon {
        line-height: inherit;
    }*/
  }
  .add.btn
  {
    float: left;
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 2px;
    padding: 5px;
  }
  .panel-div
  {
    margin-top: 10px;
    background-image: linear-gradient(to right, rgb(235, 225, 225), rgb(188, 201, 245));
  }
  .picture_content
  {
    display: flex;
    flex-direction:row;
    height: 200px;
  }
  .comp.lab
  {
    float: left;
    margin-top: 8px;
    margin-left: 5px;
    margin-bottom: 5px;
  }
  .comp.div
  {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .info
  {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .input
  {
    font-size: 14px;

  }
  .tag
  {
    margin-top: 15px;
    color: crimson;
  }
  .prod.img
  {
    width: 210px;
    height: 180px;
    float: left;
    margin-bottom: 5px;
  }
  .footer
  {
    background-color: black;
  }
  
  .param.btn
  {
    height: 30px;
    margin-top: 10px;
    padding: 5px;
    float: left;
  }
  
  table
  {
    border: 1px solid #5e5d5d;
    border-collapse: collapse;
  }
  .paramset
  {
    width: 100%;
    height: 100%;
    border: 0px;
    padding: 0px;
    margin: 0px;
  }
  th{
    background-color: #d4e2ee;
  }
  .paramset {
    height: 30px;
    width: 300px;
    border: 1px solid #7e848a;
}
.oprate
{
  width: 60px;
}
.deletebtn
{
  height: 25px;
  padding: 5px;
}
  .submmit
  {
    height: 30px;
    width: 80px;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>