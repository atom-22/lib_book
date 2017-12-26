function bookController(){
	var bookDataCont = new dataController();

    var editBut = document.getElementById('editBut'),
		cancelBut = document.getElementById('cancelBut'),
	 	saveBut = document.getElementById('saveBut'),
	 	backBut = document.getElementById('backBut'),
	 	deleteBut = document.getElementById('deleteBut');

	editBut.addEventListener("click", editButFunc, false);
	saveBut.addEventListener('click',saveButFunc,false);
	cancelBut.addEventListener('click',cancelButFunc,false);
	backBut.addEventListener('click',backButFunc,false);
	deleteBut.addEventListener('click',deleteButFunc,false);

    var id = getIdFromQuerySring();
	var bookById = bookDataCont.getBooks(id);

	if (bookById == null) {
		bookById = new Book();
	}

//Angular

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

	function setReadOnly(isReadOnly){													
		var selector = document.querySelectorAll("input[type='text']");
		for (var i = 0; i < selector.length;i++) {
			selector[i].readOnly = isReadOnly;
			selector[i].style.backgroundColor = "black";
		}
	}

	function backButFunc(){
		window.location = "library.html";
	}

	function editButFunc() {															//edit book's information
		setReadOnly(false);
 		editBut.style.visibility = "hidden";
 		cancelBut.style.visibility = "visible";
 		saveBut.style.visibility = "visible";
 		deleteBut.style.visibility = "visible";	
	}

	function deleteButFunc(){
		var answer = confirm("Are you sure?");
		if(answer) {
			var id = getIdFromQuerySring();
			console.log(id);
			window.localStorage.clear();
			window.location = window.location;
		}
		else{
 			return;
		}
	}

	function saveButFunc(){																//save information in new version
		setReadOnly(true);

		var queryString = "";

		if (!id) {
			var bookList = bookDataCont.getAllBooks();
			bookById.id = bookList.length + 1;
			bookList.push(bookById);
			queryString = "?id=" + bookById.id;
		}

		bookById.bookName = document.querySelector("input[name='Book Name']").value;
		bookById.author = document.querySelector("input[name='Author']").value;
		bookById.pubYear =document.querySelector("input[name='Pub Year']").value;
		bookById.pages = document.querySelector("input[name='Pages']").value;
		bookById.country = document.querySelector("input[name='Country']").value;
		bookById.isAvailable = document.querySelector("input[name='Is Available']").value;
		bookById.language = document.querySelector("input[name='Language']").value;
		
		bookDataCont.saveBook(bookById);
		window.location = window.location + queryString; 		
	}

	function cancelButFunc(){							 
		window.location = window.location;         			//refresh page
	}

}