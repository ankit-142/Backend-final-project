import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../store/booksSlice';
import './AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: ''
  });
  const [errors, setErrors] = useState({});

  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery', 'Romance', 'Biography', 'Fantasy', 'Self-Help'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!formData.author.trim()) {
      newErrors.author = 'Author is required';
    }

    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    if (!formData.rating) {
      newErrors.rating = 'Rating is required';
    } else if (formData.rating < 1 || formData.rating > 5) {
      newErrors.rating = 'Rating must be between 1 and 5';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      dispatch(addBook({
        ...formData,
        rating: parseFloat(formData.rating)
      }));
      navigate('/books');
    }
  };

  return (
    <div className="addBookPage">
      <div className="pageTitle">
        <h1><i className="fas fa-plus-circle"></i> Add New Book</h1>
        <p>Share your favorite book with our community</p>
      </div>
      
      <form onSubmit={handleSubmit} className="newBookForm">
        <div className="inputRow">
          <div className="inputField">
            <label htmlFor="title">
              <i className="fas fa-book"></i> Book Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={errors.title ? 'inputError' : ''}
              placeholder="Enter book title"
            />
            {errors.title && <span className="validationMessage">{errors.title}</span>}
          </div>

          <div className="inputField">
            <label htmlFor="author">
              <i className="fas fa-user-edit"></i> Author *
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className={errors.author ? 'inputError' : ''}
              placeholder="Enter author name"
            />
            {errors.author && <span className="validationMessage">{errors.author}</span>}
          </div>
        </div>

        <div className="inputRow">
          <div className="inputField">
            <label htmlFor="category">
              <i className="fas fa-tags"></i> Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={errors.category ? 'inputError' : ''}
            >
              <option value="">Select a category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {errors.category && <span className="validationMessage">{errors.category}</span>}
          </div>

          <div className="inputField">
            <label htmlFor="rating">
              <i className="fas fa-star"></i> Rating (1-5) *
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="1"
              max="5"
              step="0.1"
              value={formData.rating}
              onChange={handleChange}
              className={errors.rating ? 'inputError' : ''}
              placeholder="4.5"
            />
            {errors.rating && <span className="validationMessage">{errors.rating}</span>}
          </div>
        </div>

        <div className="inputField">
          <label htmlFor="description">
            <i className="fas fa-align-left"></i> Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className={errors.description ? 'inputError' : ''}
            placeholder="Write a compelling description of the book..."
          />
          {errors.description && <span className="validationMessage">{errors.description}</span>}
        </div>

        <button type="submit" className="addToLibraryButton">
          <i className="fas fa-plus"></i> Add Book to Library
        </button>
      </form>
    </div>
  );
};

export default AddBook;