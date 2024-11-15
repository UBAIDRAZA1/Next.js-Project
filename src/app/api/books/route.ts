//http://localhost:3000/api/books

import { NextResponse } from "next/server";

type Book = {
  id: number;
  title: string;
  author: string;
  available: boolean;
  imageUrl: string;
};

// Simulated in-memory database
let books: Book[] = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowling", available: true , imageUrl: "/pic/image1.jpeg" },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", available: true , imageUrl: "/pic/image2.jpeg"},
  { id: 3, title: "Pride and Prejudice", author: "Jane Austen", available: false , imageUrl: "/pic/image1.jpeg"},
  { id: 4, title: "1984", author: "George Orwell", available: true , imageUrl: "/pic/image2.jpeg"},
  { id: 5, title: "Moby Dick", author: "Herman Melville", available: false , imageUrl: "/pic/image1.jpeg"},
];

// GET: Fetch only the first 4 books
export async function GET() {
  return NextResponse.json(books.slice(0, 4), { status: 200 });
}

// POST: Add a new book
export async function POST(req: Request) {
  const newBook: Book = await req.json();
  newBook.id = books.length + 1;
  books.push(newBook);
  return NextResponse.json(newBook, { status: 201 });
}

// PUT: Update an existing book
export async function PUT(req: Request) {
  const updatedBook: Book = await req.json();
  const index = books.findIndex((book) => book.id === updatedBook.id);
  if (index !== -1) {
    books[index] = { ...books[index], ...updatedBook };
    return NextResponse.json(books[index], { status: 200 });
  }
  return NextResponse.json({ message: "Book not found" }, { status: 404 });
}

// DELETE: Remove a book by ID
export async function DELETE(req: Request) {
  const { id } = await req.json();
  books = books.filter((book) => book.id !== id);
  return NextResponse.json({ message: "Book deleted" }, { status: 204 });
}
