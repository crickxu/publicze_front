<template>
    <div class="c-div">
        <div class="i-div"> 
            <img class="i-g" src="../company_imgs/00002.jpg">      
        </div>
        <div class="info-div">
            <dl>
                <dd>地区:湖北</dd>
                <dd>所属行业:软件开发</dd> 
                <dd>异度空间(武汉)信息技术有限公司</dd>             
            </dl>
        </div>
    </div>
</template>
<style>
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
       margin-top: 15px;
   }
</style>
<script>
   export default
   {
      
   } 
</script>