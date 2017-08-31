<template>
	<div>
		<div class='container border-1px'>
			<div class="tab-item"><router-link to="/goods">商品</router-link></div>
			<div class="tab-item"><router-link to="/ratings">评论</router-link></div>
			<div class="tab-item"><router-link to="/seller">商家</router-link></div>
		</div>
	    <div>
	        <router-view></router-view>
	    </div>
    </div>
</template>
<script>
import axios from 'axios'
import  'common/less/index'
export default {
	name:'Tab',
	data(){
		return {
			
		}
	},
	mounted(){
		axios.get('/api/seller')
		.then(function (response) {
		console.log(response);
		})
		.catch(function (error) {
		console.log(error);
		});
	}
}
</script>
<style scoped lang='less'>
@import url(../../common/less/index);
	.container{
		display: flex;
		width: 100%;
		height: 40px;
		line-height: 40px;
		.border-1px(rgba(7,17,27,.1));

		& .tab-item{
			flex:1;
			text-align: center;

			& > a{
				display: block;
				font-size: 14px;
				color: #4d555d
			}

			& >a.active{
				color: #f01414
			}
		}
	}

</style>