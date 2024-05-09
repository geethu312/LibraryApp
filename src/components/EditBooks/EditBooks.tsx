import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContext from "../../common/AppContext";
import "../../styles/AddEditBookStyles.scss";

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

interface AddBookProps {
  onAddBook?: (newBook: Book) => void;
}

const EditBooks: React.FC<AddBookProps> = ({}) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  var contextObj: any = useContext(AppContext);

  const [formData, setFormData] = useState<Book>({
    id: Date.now(),
    title: "",
    author: "",
    subtitle: "",
    published: "",
    publisher: "",
    pages: 0,
    description: "",
    website: "",
    image: "",
  });

  useEffect(() => {
    if (id) {
      const selectedBook = contextObj.books.find(
        (book: Book) => book.id === parseInt(id)
      );
      if (selectedBook) {
        setFormData(selectedBook);
      } else {
        alert("Book not found!");
        navigate("/books");
      }
    }
  }, [id, contextObj.books, navigate]);

  const handleEditBookClick = () => {
    if (!formData.title.trim() || !formData.author.trim()) {
      alert("Title and Author fields are required.");
      return;
    }
    const bookIndex = contextObj.books.findIndex(
      (book: Book) => book.id === formData.id
    );

    if (bookIndex === -1) {
      alert("Book not found!");
      navigate("/books");
      return;
    }
    const updatedBooks = [...contextObj.books];
    updatedBooks[bookIndex] = { ...formData };
    contextObj.setBooks(updatedBooks);
    navigate("/books");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBackClick = () => {
    navigate("/books");
  };

  return (
    <>
      <div className="add-book">
        <h1>Edit a Book</h1>
        <form>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Author:</label>
            <input
              type="text"
              placeholder="Author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Subtitle:</label>
            <input
              type="text"
              placeholder="Subtitle"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Published:</label>
            <input
              type="text"
              placeholder="Published"
              name="published"
              value={formData.published}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Publisher:</label>
            <input
              type="text"
              placeholder="Publisher"
              name="publisher"
              value={formData.publisher}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Pages:</label>
            <input
              type="number"
              placeholder="Pages"
              name="pages"
              value={formData.pages}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Website:</label>
            <input
              type="text"
              placeholder="Website"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Image:</label>
            <input
              type="text"
              placeholder="Image URL"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </div>
          <div className="form-group desc">
            <label>Description:</label>
            <textarea
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={8}
            />
          </div>
          <div className="btns">
            <button type="button" onClick={handleBackClick}>
              Back
            </button>
            <button onClick={handleEditBookClick}>Save Changes</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditBooks;
