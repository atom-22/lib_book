
function libController(){
	var dataCont = new dataController();
	var books = dataCont.getAllBooks();

	var addNewBook = document.getElementById('addNewBook');

	addNewBook.addEventListener("click", addNewBookFunc, false);
	
	var library = angular.module('library', [ ]);

	library.controller('LibController', function(){
		this.books = books;
		console.log(books);
	});

	function addNewBookFunc(){
		window.location = "book.html?";
	}
}