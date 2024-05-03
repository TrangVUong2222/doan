import react from 'react'
import axios from 'axios'
import {getData} from "./AsyncStorage"


axios.defaults.baseURL ="";
axios.defaults.timeout="5000",
axios.defaults.


axios.interceptors.request.use(
    async config => {
      try {
        // Lấy token từ AsyncStorage
        const token = await getData('token');
        // Nếu token tồn tại, thêm vào headers của yêu cầu
        if (token !==null) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (error) {
        console.error('Lỗi khi lấy token từ AsyncStorage:', error);
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );