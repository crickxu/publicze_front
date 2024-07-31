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
                <label class="info label company">异度空间(武汉)信息技术有限公司</label>
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
                          <label class="info label code value">91420100MADEF0WW0K</label>
                        </span>
                        <span class="info span">
                          <label class="info label nature title">企业性质:</label>
                          <label class="info label nature value">国有企业</label>
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
                        <img class="main img" src="../company_imgs/00008.jpg"/>
                    </div>
                    
                  </el-col>
                  <el-col :span="10">
                    <div class="info left div">
                      <div class="info content"> 
                    <div class="info left div">
                        <label>地址：湖北省武汉市东湖高新区</label>
                      </div>
                      <div class="info left div">
                        <label>号码：15618656701</label>
                      </div>
                      <div class="info left div">
                        <label>规模：55人</label>
                      </div>
                      <div class="info left div">
                        <label>行业：计算机软件</label>
                      </div>
                      <div class="info left div">
                        <label>二级行业：互联网开发</label>
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
                        <p>公司始建于1985年8月5日，由上世纪六十年代建设在秦岭山区的四个大型军工企业（853厂、895厂、4310厂、4320厂）联合组建，1993年整体搬迁至西安高新区电子工业园。公司现隶属于陕西省国资委，为陕西电子信息集团重要成员企业。公司是我国研究制造电子元器件、电子材料、太阳能光伏和半导体照明的高新技术企业，是我国军工电子科技成果转化的重要基地，中国电子元件行业协会副理事长单位、厚膜混合集成电路分会理事长单位，中国西部重要的电子元器件科研生产基地，在行业诸多领域处于核心和领先地位。  
发展无止境，改革无穷期。西京人信心满怀，正在为实现“专业引领、行业领先、造福职工、奉献社会”的美好愿景而努力奋斗！</p>
                  </el-col>
                </el-row>
            </div>
            <div class="div titleinfo">
                <span class="span titleinfo">产品图片</span>
              </div>
              <div class="div imgsorvideos">
                <div class="div img">
                    <img class="intro img"/>
                    <label class="lab dis">车轮滚滚</label>
                </div>
              </div>
              <div class="div titleinfo">
                <span>产品视频</span>
              </div>
              <div>
              <div class="div imgsorvideos">
                  <video class="intro video"></video>
              </div>
            </div>           
          </el-col>
          <el-col :span="3"></el-col>
        </el-row>
    </div>
</template>
<script>
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
     margin-top: 3px;
     margin-right: 5px;
     display: flex;
     flex-direction: column;
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