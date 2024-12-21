<template>
    <div class="c-div">
        <div class="i-div"> 
            <img class="i-g" :src="img_path" @click="opencompany" :id="company_no">      
        </div>
        <div class="info-div">
            <dl>
                <dd class="company dd"><span class="company_name">{{ company_name }}</span></dd>
                <dd class="region dd"><span class="region span">地区:{{area}}</span><span class="nature span">企业性质:{{ nature_name }}</span><span class="person_num">规模：66人</span></dd>
                <dd class="industry dd"><span class="industry name">所属行业:</span><span class="industry value">{{industry}}</span></dd> 
                <dd class="product dd">主要产品：{{ product_names }}</dd>
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
   .company_name
   {
     color: black;
     font-size: 21px;
     font-weight: 450px;
   }
   .region.span
   {
     background-color: rgb(221, 225, 230);
     padding-left: 10px;
     padding-right: 10px;
   }
   .person_num
   {
     margin-left: 40px;
     background-color: rgb(221, 225, 230);
     padding-left: 10px;
     padding-right: 10px;
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
   .industry.value
   {
    margin-left: 10px;
    font-size: 18px;
   
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
       height: 120px; 
       width: 180px; 
       overflow:hidden;     
   }
   .i-g
   {
      width: 100%;
      height: 100%;

   }
   .info-div dd
   {
       text-align: left;
   }
</style>
<script>
   export default
   {
       props:{
                img_path:"imgpath",
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
          }
      } 
   }
   
</script>