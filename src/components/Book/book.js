/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchBooks, deleteBook } from '../../redux/books/bookSlice';
import Loader from '../Loader/loader';

function Book() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.isLoading);
  const isError = useSelector((state) => state.books.isError);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = async (bookId) => {
    try {
      await dispatch(deleteBook(bookId));
      toast.success('Book Deleted!');
      dispatch(fetchBooks());
    } catch (error) {
      toast.error('Failed to delete the book.');
    }
  };

  const confirmDelete = (bookId) => {
    const result = window.confirm('Are you sure you want to delete this book?');
    if (result) {
      handleDelete(bookId);
    }
  };

  return (
    <div>
      <h1>Categories</h1>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p>Error loading categories.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <div key={book.id}>
              <li>{book.title}</li>
              <li>{book.id}</li>
              <button type="button" onClick={() => confirmDelete(book.id)}>Delete</button>
              <Link className="nav-link" to={`/edit_book/${book.id}`}>Edit</Link>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Book;
