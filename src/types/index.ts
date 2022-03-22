export interface DataType {
  title: string;
  date: string;
  from: string;
  description: string;
  image: string;
}

enum ResponseStatus {
  Success = 'success',
  Error = 'error',
}

export type ApiResponse<T> = {
  status: ResponseStatus.Success;
  data: T;
};
