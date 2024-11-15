export interface Category {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

export interface Book {
  rank: number;
  rank_last_week: number;
  publisher: string;
  title: string;
  author: string;
  weeks_on_list: number;
  amazon_product_url: string;
  book_image: string;
  description: string;
}

export interface BookList {
  name: string;
  books: Book[];
  display_name: string;
  list_name: string;
  list_name_encoded: string;
}

export interface BooksApiResponse {
  status: string;
  results: Category[];
}
