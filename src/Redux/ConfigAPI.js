import React,{Component, useState, useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {selectUserToken} from './selector/userSelector';


export const DefaultUrl ="https://fc9c-58-186-128-19.ngrok-free.app";

axios.interceptors.request.use(
    async config => {
      try {
        // Lấy token từ AsyncStorage
        const token = await useSelector(selectUserToken());
        // Nếu token tồn tại, thêm vào headers của yêu cầu
        if (token !==null ) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (error) {
        // console.log('Lỗi khi lấy token từ redux:', error);
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );