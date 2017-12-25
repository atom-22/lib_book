function bookController(){

	var bookDataCont = new dataController();
    // var books = bookDataCont.getAllBooks();

    var id = getIdFromQuerySring();
	var bookById = bookDataCont.getBooks(id);
	
	var book = angular.module('book', [ ]);

	book.controller('BookController', function(){
		this.bookById = bookById;
		
	});


//private function
	function getIdFromQuerySring(){
		var key = 'id=';	
 		var qsIndex = window.location.search.indexOf(key); 
		var qsSub = window.location.search.substring(qsIndex);
		var amp = qsSub.indexOf('&');
		amp = amp == -1?qsSub.length:amp; 
		var id = qsSub.substring(key.length,amp);
		return id;
	}



}