import { Link } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book }) => {
  return (
    <div className="libraryBookItem">
      <div className="bookIcon">
        <i className="fas fa-book-open"></i>
      </div>
      <h3>{book.title}</h3>
      <p className="authorName">
        <i className="fas fa-user"></i> {book.author}
      </p>
      <div className="bookInformation">
        <span className="genreTag">
          <i className="fas fa-tag"></i> {book.category}
        </span>
        <span className="starRating">
          <i className="fas fa-star"></i> {book.rating}
        </span>
      </div>
      <div className="publicationYear">
        <i className="fas fa-calendar"></i> {book.year}
      </div>
      <Link to={`/book/${book.id}`} className="readMoreButton">
        <i className="fas fa-eye"></i> View Details
      </Link>
    </div>
  );
};

export default BookCard;