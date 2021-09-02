// Search_Book_Data

const searchBooks = () => {
    const searchTextInput = document.getElementById('input').value;

    // Empty_Search_Area

    if (searchTextInput === '') {
        const bookResultFound = document.getElementById('book_result_found')
        bookResultFound.innerHTML = `Please search any book for result`
    }

    // Search_Books_Area

    else {
        fetch(`https://openlibrary.org/search.json?q=${searchTextInput}`)
            .then(res => res.json())
            .then(data => displayBooks(data))
    }
}

// Display_Book_Result

const displayBooks = (books) => {

    // Display_no_result_found

    const bookResultFound = document.getElementById('book_result_found')
    if (books.numFound === 0) {
        bookResultFound.innerHTML = `No Result Found for '${document.getElementById('input').value}'`
        document.getElementById('input').value = ''
    }
    else {
        bookResultFound.innerHTML = `Here ${books.docs.length} books are shown from ${books.numFound} result for '${document.getElementById('input').value}'`
        document.getElementById('input').value = ''
    }

    // Display_Books_Details_In_Website
    
    const booksDiv = document.getElementById('books_div')
    booksDiv.textContent = ''
    books.docs.forEach(book => {
        const div = document.createElement('div')
        div.classList.add('innerDiv')
        div.innerHTML = `
        <img style="width: 100%;height:250px; margin-top:15px; border-radius:10px;" src=" https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg">
                    <h3>Name: ${book.title}</h3>
                    <h4>Author Name: ${book.author_name}</h4>
                    <h4>First Publisher: ${book.publisher}</h4>
                    <h3>First Publish: ${book.first_publish_year}</h3>`
        booksDiv.appendChild(div)
    })
}