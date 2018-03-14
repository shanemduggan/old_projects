var app = app || {};

$(function() {
    var books = [
        { title: 'The Gunslinger', author: 'Stephen King', coverImage: 'http://ecx.images-amazon.com/images/I/712AYRgV0LL.jpg', rating: 'Rating: 5/5 ', description: 'Interesting narrative and easy to read. I would definitely recommend reading this and will be looking forward to the rest of the Tower series.' },
        { title: 'Developing Backbone.js Applications', author: 'Addy Osmani', coverImage: 'https://addyosmani.com/backbone-fundamentals/img/oreilly.jpg', rating: 'Rating: 5/5 ', description: 'Interesting narrative and easy to read. I would definitely recommend reading this and will be looking forward to the rest of the Tower series.' },
        { title: 'Good Manners for Nice People Who Sometimes Say F*ck', author: 'Amy Alkon', coverImage: 'http://d.gr-assets.com/books/1398199422l/18404243.jpg', rating: 'Rating: 3.5/5 ', description: 'Interesting narrative and easy to read.' },
		{ title: 'The Gunslinger', author: 'Stephen King', coverImage: 'http://ecx.images-amazon.com/images/I/712AYRgV0LL.jpg', rating: 'Rating: 5/5 ', description: 'Interesting narrative and easy to read. I would definitely recommend reading this and will be looking forward to the rest of the Tower series.' },
        { title: 'Developing Backbone.js Applications', author: 'Addy Osmani', coverImage: 'https://addyosmani.com/backbone-fundamentals/img/oreilly.jpg', rating: 'Rating: 5/5 ', description: 'Interesting narrative and easy to read. I would definitely recommend reading this and will be looking forward to the rest of the Tower series.' },
        { title: 'The Gunslinger', author: 'Stephen King', coverImage: 'http://ecx.images-amazon.com/images/I/712AYRgV0LL.jpg', rating: 'Rating: 5/5 ', description: 'Interesting narrative and easy to read. I would definitely recommend reading this and will be looking forward to the rest of the Tower series.' },
		//{ title: 'American Psycho', author: 'Bret Easton Ellis', releaseDate: '1991', keywords: 'Novel Splatter' },
        //{ title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', releaseDate: '2011', keywords: 'JavaScript Programming' }
    ];

    new app.LibraryView( books );
});

