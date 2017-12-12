<style>
.mainApp{
  position:absolute;
  height:100%;
  width:100%;
}
</style>

<template>
	<div id="app" class="mainApp">
		<router-view></router-view>
	</div>
</template>

<script>
  export default{
    name: 'APP'
  }
</script>

<style lang="scss">
@import '~normalize.css/normalize.css';// normalize.css 样式格式化
@import './styles/index.scss'; // 全局自定义的css样式
</style>
