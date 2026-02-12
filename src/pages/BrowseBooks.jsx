import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookCard from '../components/BookCard';
import './BrowseBooks.css';

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector(state => state.books.books);
  const [searchTerm, setSearchTerm] = useState('');

  let filteredBooks = category 
    ? books.filter(book => book.category === category)
    : books;

  if (searchTerm) {
    filteredBooks = filteredBooks.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className="booksBrowsePage">
      <div className="pageHeader">
        <h1>
          <i className="fas fa-book"></i> 
          {category ? `${category} Books` : 'All Books'}
        </h1>
        <div className="bookSearchArea">
          <i className="fas fa-search searchIcon"></i>
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="booksCollection">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p className="noBooksMessage">
            <i className="fas fa-exclamation-circle"></i> 
            No books found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;