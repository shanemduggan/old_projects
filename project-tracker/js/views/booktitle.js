var app = app || {};

app.BookTitleView = Backbone.View.extend({
    tagName: 'div',
    className: 'bookListContainer',
    template: _.template( $( '#bookListTemplate' ).html() ),

    render: function() {
        //this.el is what we defined in tagName. use $el to get access to jQuery html() function
        this.$el.html( this.template( this.model.attributes ) );

        return this;
    }
});