import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import Home from './pages/Home';
import BrowseBooks from './pages/BrowseBooks';
import BookDetails from './pages/BookDetails';
import AddBook from './pages/AddBook';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* 404 route without header */}
          <Route path="*" element={<NotFound />} />
          
          {/* Routes with header */}
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
          <Route path="/books" element={
            <>
              <Header />
              <BrowseBooks />
            </>
          } />
          <Route path="/books/:category" element={
            <>
              <Header />
              <BrowseBooks />
            </>
          } />
          <Route path="/book/:id" element={
            <>
              <Header />
              <BookDetails />
            </>
          } />
          <Route path="/add-book" element={
            <>
              <Header />
              <AddBook />
            </>
          } />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
