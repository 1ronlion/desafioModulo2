const books = require("./books.js");

let parameter1 = proccess.argv[2];
let parameter2 = proccess.argv[3];
let parameter3 = proccess.argv[4];

console.log("Este es mi cambio");



switch (parameter1) {
  case "--get":
    books.getById();
    break;

  case "--author":
    books.getByAuthor();
    break;

  case "--tag":
    books.getByTag();
    break;

  default:
    books.getAll();
}



function main (){
    
    let result = books.getByName("Hamlet");
    console.log("🚀 ~ result:", result);

}

main()

//- node index.js --tag drama --author jul --sort name    
// --> Devuelve un array con los libros cuyo tag y autor contienen 
// las subcadenas indicadas por parámetro, ordenado alfabéticamente según el título.