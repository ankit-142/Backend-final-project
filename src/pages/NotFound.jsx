import { Link, useLocation } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="pageNotFoundScreen">
      <div className="errorPageContent">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <p className="brokenUrlDisplay">Invalid URL: <code>{location.pathname}</code></p>
        <Link to="/" className="returnHomeButton">Go Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;