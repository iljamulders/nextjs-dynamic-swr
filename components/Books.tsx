import React from 'react'

type Book = {
    id: number
    name: string
}

type BooksProps = {
    books?: Book[]
}

const Books: React.FC<BooksProps> = ({ books }) => {
    return <div>
        {
            books &&
            <ul>
                {
                    books.map(book => (
                        <li key={`book-${book.id}`}>{book.name}</li>
                    ))
                }
            </ul>
        }
    </div>
}

export default Books
