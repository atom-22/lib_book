function bookController(){

	var bookDataCont = new dataController();
    // var books = bookDataCont.getAllBooks();

    var id = getIdFromQuerySring();
	var bookById = bookDataCont.getBooks(id);
	
	var book = angular.module('book', [ ]);

	book.controller('BookController', function(){
		this.bookById = bookById;
		
	});

	book.controller("PanelController", function(){
		this.tab = 1;
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
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