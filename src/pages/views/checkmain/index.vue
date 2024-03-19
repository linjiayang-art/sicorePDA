<template>
  <view class="container">
    <view class="grid">
      <view
        v-for="(item, index) in gridItems"
        :key="index"
        class="grid-item"
        @click="handleClick(item)"
      >
        <image :src="item.icon" class="icon"></image>
        <text class="label">{{ item.label }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type GridItem = {
  icon: string;
  label: string;
  path:string
};

const gridItems = ref<GridItem[]>([
  { icon: '/static/icons/icon1.png', label: '场地点检' ,path:'sitecheck/index'},
  { icon: '/static/icons/icon2.png', label: '销售订单' ,path:'sitecheck/index'},
  { icon: '/static/icons/icon3.png', label: '生产任务' ,path:'sitecheck/index'},
  // ...添加所有所需的项
]);

const handleClick = (item: GridItem) => {
  console.log('Clicked on item: ', item.label);
  // 根据项目需求执行操作  // 使用 router 进行页面跳转
uni.navigateTo({
	url: item.path
});
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  max-width: 600px;
}

.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.icon {
  width: 50px;
  height: 50px;
}

.label {
  margin-top: 8px;
  font-size: 14px;
  color: #333;
}
</style>