import { DataType } from '../src/types';

const sortDataWithDateByAsc:{ [key: string]: (a: number, b: number)=> number } = {
  true: (a: number, b: number): number => a - b,
  false: (a: number, b: number): number => b - a,
};

export const sortData = (asc: boolean, data: DataType[]): DataType[] => {
  const sortFuncByAsc = sortDataWithDateByAsc[String(asc)];

  return data.sort((a, b) => sortFuncByAsc(
    new Date(a.date).getTime(),
    new Date(b.date).getTime(),
  ));
};
