import react, {Comment} from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Lưu trữ một giá trị vào local storage
const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Đã lưu trữ dữ liệu thành công!');
  } catch (error) {
    console.error('Lỗi khi lưu trữ dữ liệu:', error);
  }
};

// Truy xuất một giá trị từ local storage
const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
     
      return value;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

// Xóa một giá trị từ local storage
const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);

  } catch (error) {
  }
};

// Xóa tất cả các giá trị từ local storage
const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    
  } catch (error) {
    
  }
};

export { storeData, getData, removeData, clearAllData };
