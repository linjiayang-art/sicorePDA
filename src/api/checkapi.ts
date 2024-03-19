import request from '@/utils/request'


export function testApi(){
	return request({
		url:'/api/v1/pd_usage_chart',
		 method:'get'
	})
}