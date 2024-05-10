import React, { useState, useContext } from "react";
import Card from "../Card/Card";
import { Link, useNavigate } from "react-router-dom";
import "./SearchBooks.scss";
import AppContext from "../../common/AppContext";

interface Book {
  id: number;
  title: string;
  author: string;
  subtitle?: string;
  published?: string;
  publisher?: string;
  pages?: number;
  description?: string;
  website?: string;
  image: string;
}
const SearchBooks: React.FC = () => {
  const navigate = useNavigate();
  var contextObj: any = useContext(AppContext);
  // console.log(contextObj.books);

  const [searchText, setSearchText] = useState("");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(contextObj.books);

  const handleSearch = () => {
    const searchResults = contextObj.books.filter((book: any) =>
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredBooks(searchResults);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleCloseDetails = () => {
    setSelectedBook(null);
  };

  const handleDelete = (id: number) => {
    const updatedBooks = contextObj.books.filter((book: any) => book.id !== id);
    contextObj.setBooks(updatedBooks);
    if (selectedBook && selectedBook.id === id) {
      setSelectedBook(null);
      setFilteredBooks(updatedBooks);
    }
  };

  const handleEdit = (id: number) => {
    navigate(`/edit-book/${id}`);
  };

  return (
    <div>
      <div className="title">
        <h3>FREE EBOOKS AND DEALS</h3>
      </div>
      {!selectedBook && (
        <div className="input__wrapper">
          <input
            type="text"
            placeholder="Search Books"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSearch}>Find Books</button>
          <Link to="/add-book">
            <button type="submit">Add Book</button>
          </Link>
        </div>
      )}

      {selectedBook ? (
        <div className="details">
          <h2>{selectedBook.title}</h2>
          <img src={selectedBook.image} alt={selectedBook.title} />
          <p>{selectedBook.author}</p>
          <p>{selectedBook.description}</p>
          <button onClick={() => handleEdit(selectedBook.id)}>Edit</button>
          <button onClick={() => handleDelete(selectedBook.id)}>Delete</button>
          <button onClick={handleCloseDetails}>Close</button>
        </div>
      ) : (
        <div className="row">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book: any) => (
              <Card
                key={book.id}
                onImageClick={() => setSelectedBook(book)}
                image={book.image}
                title={book.title}
                author={book.author}
              />
            ))
          ) : (
            <div className="notFound">No Books Found</div>
          )}
        </div>
      )}
    </div>
  );
};
export default SearchBooks;
