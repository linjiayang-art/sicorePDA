<template>
	<h1>hello{{userInfo}}</h1>
	<button @click="test">啊萨法萨法</button>
</template>

<script setup lang="ts">
	import{ref,onMounted,reactive} from 'vue'
	import {getUserInfo} from '@/api/auth'
	
	const test=()=>{
		getUserInfo().then((response)=>{
			userInfo.value=response.data
		})
	}
	
	const userInfo=ref()
	onMounted(()=>{
		getUserInfo().then((response)=>{
			userInfo.value=response.data
		})
	})
</script>

<style>
</style>