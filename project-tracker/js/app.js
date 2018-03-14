var app = app || {};

$(function() {
    var books = [
        { title: 'Paint mural', author: 'Douglas Crockford', releaseDate: '2016', keywords: 'Art, Painting, Street Art' },
        { title: 'Clean up Romaine st.', author: 'Alex MacCaw', releaseDate: '2014', keywords: 'Clean up, Trash, Neighborhood' },
        { title: 'Put on a show for retirees', author: 'Cay S. Horstmann', releaseDate: '2016', keywords: 'Retirement, Lonely old people' },
        { title: 'Art Car for Burning Man', author: 'Bret Easton Ellis', releaseDate: '1991', keywords: 'Art Festival' },
        { title: 'Build this app', author: 'Marijn Haverbeke', releaseDate: '2016', keywords: 'JavaScript Programming' }
    ];

    new app.LibraryView( books );
	new app.BookListView( books );
});