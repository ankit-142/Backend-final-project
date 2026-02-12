import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import './Home.css';

const Home = () => {
  const books = useSelector(state => state.books.books);
  const popularBooks = books.filter(book => book.popular);
  const categories = [...new Set(books.map(book => book.category))];

  return (
    <div className="homePage">
      <div className="welcomeBanner">
        <div className="bannerContent">
          <h1><i className="fas fa-book-reader"></i> Welcome to Digital Library</h1>
          <p>Discover, explore, and immerse yourself in a world of knowledge with our curated collection of exceptional books</p>
        </div>
      </div>

      <div className="libraryStatistics">
        <div className="statisticsGrid">
          <div className="statisticCard">
            <i className="fas fa-books statisticIcon"></i>
            <span className="numberDisplay">{books.length}</span>
            <div className="statisticLabel">Total Books</div>
          </div>
          <div className="statisticCard">
            <i className="fas fa-list statisticIcon"></i>
            <span className="numberDisplay">{categories.length}</span>
            <div className="statisticLabel">Categories</div>
          </div>
          <div className="statisticCard">
            <i className="fas fa-fire statisticIcon"></i>
            <span className="numberDisplay">{popularBooks.length}</span>
            <div className="statisticLabel">Popular Books</div>
          </div>
        </div>
      </div>

      <section className="pageSection bookCategories">
        <h2><i className="fas fa-th-large"></i> Browse by Category</h2>
        <div className="categoriesGrid">
          {categories.map(category => (
            <Link key={category} to={`/books/${category}`} className="categoryTile">
              <i className="fas fa-folder-open categoryIcon"></i>
              <h3>{category}</h3>
              <p>{books.filter(book => book.category === category).length} books available</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="pageSection featuredBooks">
        <h2><i className="fas fa-star"></i> Featured Books</h2>
        <div className="booksCollection">
          {popularBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;