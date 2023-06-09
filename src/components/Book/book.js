import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { DeleteBook } from '../../redux/books/bookSplice';
import './book.css';

function Book(props) {
  const {
    id,
    title,
    author,
    onDelete,
  } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(DeleteBook(id));
    onDelete();
  };

  return (
    <div className="book">
      <div>
        <p className="category">Category</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <div className="book-menu">
          <button className="button-3 line" type="button">Comments</button>
          <button className="button-3 line" type="button" onClick={handleDelete}>
            Remove
          </button>
          <button className="button-3" type="button">Edit</button>
        </div>
      </div>
      <div className="book-status">
        <div className="oval" />
        <div>
          <p className="percentage">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="book-progress">
        <div className="progress-bar" />
        <p className="current-chapter">Current Chapter</p>
        <p className="chapter">
          Chapter
          <span>
            17
          </span>
        </p>
        <button className="button-4" type="button">Update Progress</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
