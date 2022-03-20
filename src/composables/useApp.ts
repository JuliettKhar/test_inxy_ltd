import { ref } from 'vue';
import { DataType } from '../types';
import axios from 'axios';
import { sortData } from '../../utils';

export default function useApp() {
  const newsData = ref<DataType[]>([]);

  const searchNews = async(value: string) => {
    if (value) {
      try {
        const { data } = await axios.get(`http://localhost:3001/posts?q=${value}`);
        newsData.value = data;
      } catch (e) {
        console.error(e);
      }
    }
  };

  const sortDataByDate = (asc: boolean) => {
    newsData.value = sortData(
      asc,
      newsData.value,
    );
  };

  const getData = async() => {
    try {
      const { data } = await axios.get('http://localhost:3001/posts');
      newsData.value = sortData(
        true,
        data,
      );
    } catch (e) {
      console.error(e);
    }
  };

  const clearResults = () => setTimeout(
    () => {
      getData();
    },
    500,
  );


  return {
    newsData,
    searchNews,
    clearResults,
    getData,
    sortDataByDate,
  };
}
