import { useUserStoreHook } from "@/store/modules/user";

// 定义请求参数的接口


interface RequestParams {
    url: string; // 请求URL
    method: 'get' | 'post' | 'put' | 'delete'; // 请求方法
    params?: Record<string, any>; // GET请求的参数
    data?: Record<string, any>; // POST/PUT请求的数据体
    headers?: Record<string, string>; // 请求头
}

// 基础URL
const BASE_URL = "http://127.0.0.1:9500";
const accessToken = localStorage.getItem("token");
const  csrf = localStorage.getItem("X-CSRFToken");
const request = ({
    url,
    method,
    params,
    data,
    headers,
}: RequestParams): Promise<any> => {
    return new Promise((resolve, reject) => {
        // 没有提供headers时的默认处理
        if (!headers) {
            // const token: string = uni.getStorageSync('token') || ''; // 确保token是字符串类型
            headers = {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: accessToken||"",
				'X-CSRFToken': csrf||"",
                TENANT_ID: '1', // 注意：Header中的值需要是字符串
			
            };
        }
        uni.request({
            url: BASE_URL + url,
            data: method === 'get' ? params : data,
            method: method.toUpperCase() as 'GET' | 'POST' | 'PUT' | 'DELETE', // 确保方法类型是大写
            header: headers,
            success: (res) => {
                const { code, msg, data } = res.data as { code: any; msg: string; data: any; }; // 假设响应的结构
                if (code === "200") {
                    resolve(data);
                } else {
                    uni.showToast({
                        icon: 'none',
                        duration: 3000,
                        title: msg,
                    });
                    reject(new Error(msg));
                }
            },
            fail: (error) => {
                console.log('请求错误：', error);
                uni.showToast({
                    icon: 'none',
                    duration: 3000,
                    title: '网络异常，请稍后重试！',
                });
                reject(error);
            },
            complete: () => {},
        });
    });
};

export default request;