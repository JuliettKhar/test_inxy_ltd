import { ref } from 'vue';
import { DataType } from '../types';
import { sortData } from '../../utils';
import { fetchNews } from '../api';

export const useApp = () => {
  const newsData = ref<DataType[]>([]);

  const sortDataByDate = (asc: boolean) => {
    newsData.value = sortData(asc, newsData.value);
  };

  const getData = async (): Promise<void> => {
    try {
      const { data } = await fetchNews();
      newsData.value = sortData(true, data);
    } catch (e) {
      console.error(e);
    }
  };

  const clearResults = () => getData();

  const searchNewsData = async (value: string): Promise<void> => {
    if (value) {
      try {
        const { data } = await fetchNews(value);
        newsData.value = data;
      } catch (e) {
        console.error(e);
      }
    } else {
      clearResults();
    }
  };

  return {
    newsData,
    searchNewsData,
    clearResults,
    getData,
    sortDataByDate,
  };
};
