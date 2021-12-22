console.log("this is project");
class Book {
    constructor(givenname, givenauthor, giventype) {
        this.name = givenname;
        this.author = givenauthor;
        this.type = giventype;
        
  }
}
function Display() {}
Display.prototype.add = function (book) {
  console.log("adding to UI");
  let tablebody = document.getElementById("tablebody");
  let uistring = `
                        <tr>
                                
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
  tablebody.innerHTML += uistring;
};
Display.prototype.clear = function () {
  let libraryform = document.getElementById("libraryform");
  libraryform.reset();
};
Display.prototype.valid = function (book) {
  if (book.name.length > 2 || book.author.length > 2) {
    return true;
  } else {
    return false;
  }
};
Display.prototype.show = function (types,showmess) {
  let mess = document.getElementById("mess");
  mess.innerHTML = `<div class="alert alert-${types} alert-dismissible fade show" role="alert">

                    <strong><h1>MESSAGE :</h1></strong> ${showmess}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`;
setTimeout(() => {
    mess.innerHTML = ''
}, 2000);

            
};

let libraryform = document.getElementById("libraryform");
libraryform.addEventListener("submit", libraryformsubmit);

function libraryformsubmit(e) {
  e.preventDefault();
  console.log("heyy!! you have submitted your assignment");
  let name = document.getElementById("bookname").value;
  let author = document.getElementById("Author").value;
  let type;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  let book = new Book(name, author, type);
  console.log(book);
  let display = new Display();
  if (display.valid(book)) {

    display.show("sucess", ' your book is added into the file');
  } else {
    display.show("error" , ` <h4>sorry your book is unable to get into yhe libryary</h4>`);
  }
  display.valid(book);
  display.add(book);
  display.clear();
  
}
