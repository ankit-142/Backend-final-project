import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="mainNavigation">
      <div className="navigationWrapper">
        <Link to="/" className="libraryLogo">
          <i className="fas fa-book"></i> Digital Library
        </Link>
        <div className="menuItems">
          <Link to="/" className="homeLink">
            <i className="fas fa-home"></i> Home
          </Link>
          <Link to="/books" className="browseLink">
            <i className="fas fa-search"></i> Browse Books
          </Link>
          <Link to="/add-book" className="addBookLink">
            <i className="fas fa-plus"></i> Add Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;