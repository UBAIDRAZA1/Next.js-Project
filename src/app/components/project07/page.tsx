import { useState, useEffect, FormEvent, CSSProperties } from "react";
import Image from "next/image"; // Import Image from Next.js

type Book = {
  id: number;
  title: string;
  author: string;
  available: boolean;
  imageUrl: string; // Add image property
};

export default function Project07() {
  const [books, setBooks] = useState<Book[]>([]);
  const [form, setForm] = useState<{ title: string; author: string; imageUrl: string; id?: number }>(
    { title: "", author: "", imageUrl: "" }
  );

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await fetch("/api/books");
    const data = await res.json();
    setBooks(data);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const method = form.id ? "PUT" : "POST";
    await fetch("/api/books", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ title: "", author: "", imageUrl: "" });
    fetchBooks();
  };

  const handleDelete = async (id: number) => {
    await fetch("/api/books", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchBooks();
  };

  const handleEdit = (book: Book) => {
    setForm(book);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Books Management</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Book Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Author Name"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          required
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          {form.id ? "Update" : "Add"} Book
        </button>
      </form>

      <ul style={styles.list}>
        {books.map((book) => (
          <li key={book.id} style={styles.listItem}>
            <Image
              src={book.imageUrl}
              alt={book.title}
              width={50}
              height={50}
              style={styles.image}
            />
            <div>
              <strong>{book.title}</strong> by <em>{book.author}</em>{" "}
              <span style={{ color: book.available ? "green" : "red" }}>
                ({book.available ? "Available" : "Unavailable"})
              </span>
            </div>
            <div>
              <button style={styles.editButton} onClick={() => handleEdit(book)}>
                Edit
              </button>
              <button style={styles.deleteButton} onClick={() => handleDelete(book.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "1.5rem",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  header: {
    textAlign: "center",
    marginBottom: "1.5rem",
    fontSize: "1.8rem",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginBottom: "2rem",
  },
  input: {
    padding: "0.8rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
  },
  button: {
    padding: "0.8rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  list: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.8rem",
    marginBottom: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "#fff",
  },
  image: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "4px",
    marginRight: "1rem",
  },
  editButton: {
    marginRight: "0.5rem",
    padding: "0.5rem 0.8rem",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
  deleteButton: {
    padding: "0.5rem 0.8rem",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
};
