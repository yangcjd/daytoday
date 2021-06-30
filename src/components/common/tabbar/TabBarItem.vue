<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-active"></slot></div>
		<!-- <div :class="{ac: isActive}"><slot name="item-text"></slot></div> -->
		<div :style="activeStyle"><slot name="item-text"></slot></div>
		<!-- <img src="../../assets/img/tabbar/home.svg" />
		<div>首页</div> -->
	</div>
</template>

<script>
	export default {
		name: 'TabBarItem',
		props: {
			path: String,
			activeColor: {
				type: String,
				default: '#d81e06'
			}
		},
		data() {
			return {
			//	isActive: true
			}
		},
		computed: {
			isActive(){
				return this.$route.path.indexOf(this.path) != -1
			},
			activeStyle(){
				return this.isActive ? {color: this.activeColor} : {}
			}
		},
		methods: {
			itemClick(){
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		flex: 1;
		text-align: center;
		font-size: 14px;
	}
	
	.tab-bar-item img{
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle;
		margin-bottom: 2px;
	}
	/* .ac{
		color: #d81e06;
	} */
</style>
