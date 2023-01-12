<template>
	<div class="hello">
		<div class="loading-box" v-loading='loading'></div>
		<button @click='loadingBtn'>显示隐藏</button>
	</div>
</template>

<script>
export default {
	name: 'loading',
	data() {
		return {
			loading: true
		}
	},
	methods: {
		loadingBtn() {
			this.loading = !this.loading
		}
	}


}
</script>
<style lang='less' scoped>
.loading-box {
	width: 400px;
	height: 400px;
	border: 1px solid #eee;
	position: relative;
}
button{
  cursor: pointer;
  position: absolute;
}
</style>