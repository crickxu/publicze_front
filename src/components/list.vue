<template>
    <div class="c-div" @click="opencompany">
        <div class="i-div"> 
            <img class="i-g" :src="img_path" @click="opencompany" :id="company_no">
            <!--<img class="i-g" src="../company_imgs/00002.jpg"  :id="company_no">-->       
        </div>
        <div class="info-div">
            <dl>
                <dd class="company dd"><span class="company_name">{{ company_name }}</span><span class="person_num">规模：{{ company_num + "人" }}</span></dd>
                <dd class="region dd"><span class="region span">地区:</span><span class="region value">{{area}}</span><span class="nature span">企业性质:</span><span class="nature value">{{ nature_name }}</span></dd>
                <dd class="industry dd"><span class="industry name">所属行业:</span><span class="industry value">{{industry}}</span></dd> 
                <dd class="product dd">主要产品：{{ product_names }}</dd>
                <dd class="addpro"><el-button class="addpro btn" type="primary" @click.stop="addpro">添加产品</el-button></dd>
            </dl>
        </div>
    </div>
</template>
<style>
   .region.dd
   {
    margin-top: 5px;
    font-size: 14px;

   }
   .addpro.btn
   {
      padding: 8px;
   }
   .company_name
   {
     font-family: STXihei;
     color: black;
     font-size: 18px;
     font-weight: 700;
   }
   .region.span
   {
     background-color: rgb(221, 225, 230);
     padding-left: 10px;
     padding-right: 10px;
   }
   .company.dd
   {
      position: relative;
   }
   .person_num
   {
     position: absolute;
     right: 20px;
     color: white;
     background-color: rgb(243, 128, 51);
     font-size: 12px;
     padding-left: 10px;
     padding-right: 10px;
     padding-top: 5px;
     padding-bottom: 5px;
   }
   .nature.span
   {
     margin-left: 40px;
     background-color: rgb(221, 225, 230);
     padding-left: 10px;
     padding-right: 10px;
   }
   .industry.dd
   {
    margin-top: 10px;
    font-size: 14px;
   }
   .industry.name
   {
    color: white;
    background-color: rgb(243, 128, 51);
    padding-top: 5px;
    padding-bottom: 5px;
   }
   .industry.value
   {
    margin-left: 10px;
    font-size: 16px;
   
   }
   .region.value
   {
     margin-left: 5px;
   }
   .nature.value
   {
     margin-left: 5px;
   }
   .product.dd
   {
     margin-top: 10px;
     font-size: 14px;
   }
   .c-div
   {
      display: flex;
      margin: 5px;
      background-color:honeydew;
   }
   .i-div
   {
       height: 160px; 
       width: 220px; 
       overflow:hidden;     
   }
   .i-g
   {
      width: 100%;
      height: 100%;

   }
   .info-div
   {
     flex-grow: 1;
     text-align: left;
   }
</style>
<script>
   export default
   {
       props:{
                img_path:"imgpath",
                company_num:"companynum",
                area: "addr",
                industry: "industry",
                nature_name:"naturename",
                company_name:"companyname",
                product_names:"productnames",
                company_no: "companyno"
             },
      methods:
      {
          opencompany()
          {
            this.$router.push({ name: 'companyInfo',query: { companyNo: this.company_no }})
          },
          addpro()
          {
            let indus = this.industry.split("/");
            this.$router.push({name:'product',query:{industry:indus[0],subindustry:indus[1],companyName:this.company_name,companyNo:this.company_no}});
          }
      } 
   }
   
</script>