<template id="app_r">
    <div class="full">
     <el-row>
       <el-col :span="3" class="el-col left">
         <div class="left_r">
            <div class="_layer test"></div>
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
                     <textarea class="text comany-introduction"></textarea>                   
                   </div>
                 </el-col>
               </el-row>
            </div>
           <div class="_layer middle">         
           </div>
           <div class="_layer footer"></div>
         </div>
       </el-col>
       <el-col :span="3">
         <div class="right_r"></div>
       </el-col>
     </el-row>
   </div>
   </template>
   <style>
     .full
     {
       width: 100%;
       background-color: rgb(211, 196, 236);
     }
     .el-row.top
     {
       height: 320px;
       background-color:ivory;
     }
     .el-row-info
     {
       background-color:ivory;
     }
     .company-main-img
     {
       padding: 30px;
       width: 350px;
       height: 280px;
     }
     .text.comany-introduction
     {
       width: 300px;
       height: 280px;
       margin-top: 30px;
     }
     .el-row-info
     {
       height: 80px;
     }
     ._layer
     {
       height: 60px;
       background-color: rgb(211, 196, 236);
     }
     ._layer.test
     {
        background-color: rgb(211, 196, 236);
     }
     ._layer.top
     {
       display: block;
     }
     .el-col.left
     {
   
     }
     .left_r
     {
       height: 100%;
     }
     .center_r
     {
   
     }
   </style>