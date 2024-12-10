export type Todo = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export type Book = {
  id: number;
  title: string;
  price: number;
  isRead: boolean;
};
export type CurrencyType = {
  amount: number;
  base: string;
  date: Date;
  data: { [key: string]: { code: string; value: number } };
  rates: { [key: string]: number };
};
