<template>
  <view class="container">
    <form @submit="submitForm">
      <view class="form-item">
   <text class="label">时间</text>
          <picker mode="time" v-model="formData.time">
            <view>{{ formData.time }}</view>
          </picker>
      </view>
      
      <view class="form-item">
        <text class="label">地点</text>
        <picker mode="selector" :range="locationOptions" v-model="formData.locationIndex">
          <view>{{ locationOptions[formData.locationIndex] }}</view>
        </picker>
      </view>
      
      <view class="form-item">
        <text class="label">温度</text>
        <input type="number" placeholder="请输入温度" v-model="formData.temperature" />
      </view>
      
      <view class="form-item">
        <text class="label">湿度</text>
        <input type="number" placeholder="请输入湿度" v-model="formData.humidity" />
      </view>
      
      <view class="form-item"   v-if="false">
        <text class="label">调控措施</text>
        <picker mode="selector" :range="controlMeasuresOptions" v-model="formData.controlMeasureIndex">
          <view>{{ controlMeasuresOptions[formData.controlMeasureIndex] }}</view>
        </picker>
      </view>
      
      <view class="form-item"   v-if="false">
        <text class="label">调控后温度</text>
        <input type="number" placeholder="请输入调控后温度" v-model="formData.afterControlTemperature" />
      </view>
      
      <view class="form-item"  v-if="false">
        <text class="label">调控后湿度</text>
        <input type="number" placeholder="请输入调控后湿度" v-model="formData.afterControlHumidity" />
      </view>
      
      <view class="form-item">
        <text class="label">备注</text>
        <input type="text" placeholder="请输入备注" v-model="formData.remark" />
      </view>
      
      <button type="submit" class="submit-button">提交点检</button>
    </form>
  </view>
</template>

<script setup lang="ts">
import { ref ,onMounted, reactive} from 'vue';

interface FormData {
  time: string;
  locationIndex: number;
  temperature: string;
  humidity: string;
  controlMeasureIndex: number;
  afterControlTemperature: string;
  afterControlHumidity: string;
  remark: string;
}

const formData = reactive<FormData>({
  time: '',
  locationIndex: 0,
  temperature: '',
  humidity: '',
  controlMeasureIndex: 0,
  afterControlTemperature: '',
  afterControlHumidity: '',
  remark: '',
});

// 获取当前时间并格式化为 HH:mm
const getCurrentTime = (): string => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

const locationOptions = ['地点A', '地点B', '地点C'];
const controlMeasuresOptions = ['无','开启空调', '开启加湿器', '开启除湿机'];

const submitForm = (event: Event) => {
  event.preventDefault();
  // 处理表单数据提交
  console.log('表单数据:', formData);
  // 在这里调用API或进行其他处理
};
onMounted(()=>{
	formData.time=getCurrentTime()
})

</script>

<style>
.container {
  padding: 15px;
}

.form-item {
  margin-bottom: 20px;
}

.label {
  display: block;
  margin-bottom: 5px;
}

.submit-button {
  display: block;
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
}

input[type='datetime-local'],
input[type='number'],
input[type='text'] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

picker {
  width: 100%;
  padding: 10px;
  background-color: #f8f8f8;
  border-radius: 4px;
  border: 1px solid #ddd;
}
</style>
