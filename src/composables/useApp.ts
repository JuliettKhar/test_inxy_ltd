import { ref } from 'vue';
import { data } from '../utils/data';
import { DataType } from '../types';

export default function useApp() {
  const newsData = ref<DataType[]>(data);

  const searchNews = (value: string) => {
    if (value) {
      newsData.value = data.filter(item => item.description.toLowerCase().includes(value.toLowerCase()) ||
          item.title.toLowerCase().includes(value.toLowerCase()));
    }
  };

  const clearResults = () => setTimeout(
    () => {
      newsData.value = data;
    },
    500,
  );


  return {
    newsData,
    searchNews,
    clearResults,
  };
}
