import { createSlice } from '@reduxjs/toolkit';

// Professional book collection with 10 books
const initialBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    description: "A masterpiece of American literature exploring themes of wealth, love, and the American Dream in the Jazz Age.",
    rating: 4.5,
    popular: true,
    year: 1925
  },
  {
    id: 2,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    description: "An epic science fiction saga set on the desert planet Arrakis, featuring political intrigue and mystical powers.",
    rating: 4.8,
    popular: true,
    year: 1965
  },
  {
    id: 3,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    description: "A compelling narrative about how Homo sapiens came to dominate the world through cognitive, agricultural, and scientific revolutions.",
    rating: 4.6,
    popular: true,
    year: 2011
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    description: "A dystopian masterpiece about totalitarian surveillance and the struggle for individual freedom in a controlled society.",
    rating: 4.7,
    popular: false,
    year: 1949
  },
  {
    id: 5,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Mystery",
    description: "A psychological thriller about a woman who refuses to speak after allegedly murdering her husband.",
    rating: 4.3,
    popular: true,
    year: 2019
  },
  {
    id: 6,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Romance",
    description: "A timeless romance exploring love, marriage, and social expectations in 19th century England.",
    rating: 4.4,
    popular: false,
    year: 1813
  },
  {
    id: 7,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    category: "Biography",
    description: "An intimate portrait of the Apple co-founder, revealing his perfectionism, passion, and revolutionary impact on technology.",
    rating: 4.5,
    popular: false,
    year: 2011
  },
  {
    id: 8,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    description: "A magical adventure following Bilbo Baggins on an unexpected journey to reclaim a lost kingdom.",
    rating: 4.6,
    popular: true,
    year: 1937
  },
  {
    id: 9,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-Help",
    description: "A practical guide to building good habits and breaking bad ones through small, incremental changes.",
    rating: 4.7,
    popular: true,
    year: 2018
  },
  {
    id: 10,
    title: "The Midnight Library",
    author: "Matt Haig",
    category: "Fiction",
    description: "A philosophical novel about life's infinite possibilities and the choices that shape our existence.",
    rating: 4.2,
    popular: false,
    year: 2020
  }
];

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: initialBooks,
    nextId: 11
  },
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        ...action.payload,
        id: state.nextId,
        popular: false,
        year: new Date().getFullYear()
      };
      state.books.unshift(newBook);
      state.nextId += 1;
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;