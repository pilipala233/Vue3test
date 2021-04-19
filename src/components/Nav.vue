<template>
  <van-nav-bar
    title="疫情防控报备证明"
    left-text=""
	left-arrow
	style="padding-top: 25px;"
  >
    <template #right>
		<div class="wc-float">
			<div class="wc-float-div vomdom">
				<img src="@/assets/more.png" alt="" >
			</div>
			
			<div class="wc-float-div">
				<img src="@/assets/close.png" alt=""></div>			
		</div>

    </template>
  </van-nav-bar>
</template>

<script>

import { NavBar } from 'vant';

export default {
  name: 'Nav',
  components: {
    'van-nav-bar':NavBar

  },
}
</script>

<style >
.van-nav-bar__title {
    /* margin: 0 auto; */
    margin-left: 1rem;
}
</style>
<style scoped >

.wc-float{
	display: flex;
	position: relative;
}
.wc-float-div{
	height:28px;
	width:42px;
	background-color: rgb(0 0 0 / 20%);
	display: flex;
	justify-content: center;
	align-items: center;
}
.vomdom::after{

	content: "";
	width: 0px;
	border-left: 1px solid #CCCCCC;

	height: 20px;

	margin: 0 auto;
	position: absolute;
	left: 0;
    right: 0;
  
    

}
.wc-float-div>img{
	
	height: 18px;
	width: 18px;
}
.wc-float>div:nth-child(1){
	margin-left: 5px;
	border-radius: 15px 0 0 15px;
}

.wc-float>div:nth-child(2){
	margin-right: 5px;
	border-radius: 0 15px 15px 0;
}
</style>
