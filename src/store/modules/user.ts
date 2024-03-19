import { loginApi, logoutApi } from "@/api/auth"
import { store } from "@/store";
import { defineStore } from "pinia";
import{ref} from 'vue'

export const useUserStore = defineStore("user", () => {
  const user = ref<any>({
    roles: [],
    perms: [],
  });

  /**
   * 登录
   *
   * @param {LoginData}
   * @returns
   */
  function login(loginData: any) {
    return new Promise<void>((resolve, reject) => {
      loginApi(loginData)
        .then((response) => {
          const { accessToken ,csrf_token} = response;
          localStorage.setItem("token",accessToken); // Bearer eyJhbGciOiJIUzI1NiJ9.xxx.xxx
		  localStorage.setItem("X-CSRFToken",csrf_token); // Bearer eyJhbGciOiJIUzI1NiJ9.xxx.xxx
          resolve();
		  //返回
		  uni.switchTab({
		  	url:'/pages/views/mainview/index'
		  })
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // 获取信息(用户昵称、头像、角色集合、权限集合)
  // function getUserInfo() {
  //   return new Promise<UserInfo>((resolve, reject) => {
  //     getUserInfoApi()
  //       .then(({ data }) => {
  //         if (!data) {
  //           reject("Verification failed, please Login again.");
  //           return;
  //         }
  //         if (!data.roles || data.roles.length <= 0) {
  //           reject("getUserInfo: roles must be a non-null array!");
  //           return;
  //         }
  //         Object.assign(user.value, { ...data });
  //         resolve(data);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  // }

  // user logout
  function logout() {
    return new Promise<void>((resolve, reject) => {
      logoutApi()
        .then(() => {
          localStorage.setItem("token", "");
          location.reload(); // 清空路由
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // remove token
  function resetToken() {
    console.log("resetToken");
    return new Promise<void>((resolve) => {
      localStorage.setItem("token", "");
      resolve();
    });
  }

  return {
    user,
    login,
    // getUserInfo,
    logout,
    resetToken,
  };
});

// 非setup
export function useUserStoreHook() {
  return useUserStore(store);
}