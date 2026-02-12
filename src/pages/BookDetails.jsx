import { useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector(state => state.books.books);
  const book = books.find(book => book.id === parseInt(id));

  if (!book) {
    return (
      <div className="bookDetailsPage">
        <h1><i className="fas fa-exclamation-triangle"></i> Book not found</h1>
        <Link to="/books" className="goBackButton">
          <i className="fas fa-arrow-left"></i> Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="bookDetailsPage">
      <div className="bookInformationCard">
        <div className="bookHeader">
          <i className="fas fa-book-open bookDetailIcon"></i>
          <h1>{book.title}</h1>
        </div>
        <h2><i className="fas fa-user"></i> {book.author}</h2>
        <div className="bookMetaData">
          <span className="genreTag">
            <i className="fas fa-tag"></i> {book.category}
          </span>
          <span className="starRating">
            <i className="fas fa-star"></i> {book.rating}
          </span>
          <span className="yearInfo">
            <i className="fas fa-calendar"></i> {book.year}
          </span>
        </div>
        <div className="bookDescription">
          <h3><i className="fas fa-align-left"></i> Description</h3>
          <p>{book.description}</p>
        </div>
        <button onClick={() => navigate('/books')} className="goBackButton">
          <i className="fas fa-arrow-left"></i> Back to Browse
        </button>
      </div>
    </div>
  );
};

export default BookDetails;