import { DataType } from '../src/types';

export const sortData = (asc, data: DataType[]): DataType[] => (asc ? data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) :
  data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
