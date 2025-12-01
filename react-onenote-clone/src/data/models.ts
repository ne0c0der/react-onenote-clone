export interface Slip {
  id: string;
  title: string;
  content: string;
  updatedAt: number;
}

export interface Book {
  id: string;
  title: string;
  slips: Slip[];
  updatedAt: number;

}

export interface Tote {
  id: string;
  title: string;
  books: Book[];
  updatedAt: number;
}