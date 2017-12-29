var Book = function(){
	this.id = "";
	this.bookName = "";
	this.author= "";
	this.pubYear = "";
	this.pages = "";
	this.country = "";
	this.isAvailable = "";
	this.imageSrc = "";
	this.language = "";
	this.Reviews = ["FDGD"];
	this.description = '';
	this.bookHistory = '';
}

function dataController(){
	var library = new Array();
	var storageKey = "Library";

	this.getAllBooks = function(){
	
		var strBooks = getStorage(storageKey);
		if(strBooks != null){
			library = JSON.parse(strBooks);
		}
		else{
			var book1 = new Book();
			book1.bookName = "The Moon and Sixpense";
			book1.author = "Somerset Maugham";
			book1.pubYear = "1919";
			book1.pages = 263;
			book1.isAvailable = true;
			book1.country = "United Kingdom";
			book1.language = "English";
			book1.id = 1;
			book1.imageSrc = "images/1.jpg";
			// book1.description = "";
			// book1.bookHistory = "";
			library.push(book1);

			var book2 = new Book();
			book2.bookName = "One hundred years of solitude";
			book2.author = "Gabriel García Márquez";
			book2.pubYear = "1967";
			book2.pages = 417;
			book2.isAvailable = true;
			book2.country = "Colombia";
			book2.language = "Spanish";
			book2.id = 2;
			book2.imageSrc = "images/2.jpg";
			library.push(book2);

			var book3 = new Book();
			book3.bookName = "Tender is The Night";
			book3.author = "F. Scott Fitzgerald";
			book3.pubYear = "1932";
			book3.pages = 317;
			book3.isAvailable = true;
			book3.country = "United States";
			book3.language = "English";
			book3.id = 3;
			book3.imageSrc = "images/3.jpg";
			library.push(book3);

			var book4 = new Book();
			book4.bookName = "Theatre";
			book4.author = "Somerset Maugham";
			book4.pubYear = "1937";
			book4.pages = 304;
			book4.isAvailable = true;
			book4.country = "United Kingdom";
			book4.language = "English";
			book4.id = 4;
			book4.imageSrc = "images/4.jpg";
			library.push(book4);

			var book5 = new Book();
			book5.bookName = "Seven Habits of Highly Effective People";
			book5.author = "Stephen R. Covey";
			book5.pubYear = "1988";
			book5.pages = 384;
			book5.isAvailable = true;
			book5.country = "United States";
			book5.language = "English";
			book5.id = 5;
			book5.imageSrc = "images/5.jpg";
			library.push(book5);

			var book6 = new Book();
			book6.bookName = "Rich Dad Poor Dad";
			book6.author = "Robert Kiyosaki";
			book6.pubYear = "1997";
			book6.pages = 207;
			book6.isAvailable = true;
			book6.country = "United States";
			book6.language = "English";
			book6.id =6;
			book6.imageSrc = "images/6.jpg";
			library.push(book6);

			this.setStorage(storageKey,JSON.stringify(library));
			}
			
		return library;	
	}

	this.getBooks = function(id){
		if (library == null || library.length == 0) {
			library = this.getAllBooks();
		}

		for (var i = 0; i < library.length; i++){
			if (library[i].id==id) {
				return library[i];
			}
		}
		return null;
	}

	this.saveBook = function(bk){
		var std = this.getBooks(bk.id);
		std = bk;
		this.setStorage(storageKey,JSON.stringify(library));
	}
	
	this.setStorage = function(cname, cvalue) {
    	window.localStorage.setItem(cname,cvalue);
	}

//private function

	function getStorage(cname) {
		return	window.localStorage.getItem(cname);
	}

}