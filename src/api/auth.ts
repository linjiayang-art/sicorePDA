import request from '@/utils/request'

export function loginApi(data:any){
	return request({
		url:'/api/v1/auth/login',
		method:'post',
		data:data
	})
	
}

export function getUserInfo(){
	return request({
		    url: '/api/v1/users/me',
		    method: 'get'
	})
}

export  function logoutApi(){
	return request({
		    url: '/api/v1/auth/logout',
		    method: 'delete'
	})
}