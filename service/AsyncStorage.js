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
      console.log('Dữ liệu đã được tìm thấy:', value);
      return value;
    } else {
      console.log('Không có dữ liệu được lưu trữ cho khóa này.');
      return null;
    }
  } catch (error) {
    console.error('Lỗi khi truy xuất dữ liệu:', error);
    return null;
  }
};

// Xóa một giá trị từ local storage
const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Đã xóa dữ liệu thành công!');
  } catch (error) {
    console.error('Lỗi khi xóa dữ liệu:', error);
  }
};

// Xóa tất cả các giá trị từ local storage
const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Đã xóa tất cả dữ liệu thành công!');
  } catch (error) {
    console.error('Lỗi khi xóa tất cả dữ liệu:', error);
  }
};

export { storeData, getData, removeData, clearAllData };
