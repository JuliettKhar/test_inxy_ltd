import axios from '../plugins/axios';
import { ApiResponse, DataType } from '../types';

export const fetchNews = (value: string = ''): Promise<ApiResponse<DataType[]>> =>
  axios.get(`http://localhost:3001/posts?q=${value}`);
