let books = [];

fetch('books.json')
.then(res => res.json())
.then(data => {
    books = data;
    renderBooks(books)
});

function renderBooks(list) {
    const grid = document.querySelector('.grid-books');
    grid.innerHTML = '';

    list.forEach(book => {
        const card = `
            <article class="book-card">
                <img src="${book.capa}" alt="${book.titulo} de ${book.autor}" class="book-cover" />
                <div class="book-info">
                    <h3>${book.titulo}</h3>
                    <p>${book.autor}</p>
                    <span class="tag">${book.categoria}</span>
                </div>
            </article>
        `;

        grid.innerHTML += card;
    });
}

const buttons = document.querySelectorAll('.btn-categorias');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {

        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const categoria = btn.dataset.categoria;

        if (categoria === 'todos') {
            renderBooks(books);
        } else {
            const filtrados = books.filter(book => book.categoria === categoria);
            renderBooks(filtrados)
        }
    });
});

console.log(buttons.length);
