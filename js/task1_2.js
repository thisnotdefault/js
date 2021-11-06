'use strict';
// es5
function Post(author,text,date){
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text){
    this.text = text;
}

function AttachedPost(autor,text,date, highlighted){
    Post.call(this, autor, text, date);
    this.highlighted = false;
}

AttachedPost.prototype.makeTextHighlighted = function(){
    this.highlighted = true;
}

// // es6
// class Post{
//     constructor(author,text,date){
//         this.author = author;
//         this.text = text;
//         this.date = date;
//     }

//     edit(text){
//         this.text = text;
//     }
// }

// class AttachedPost extends Post{
//     constructor(author, text, date, highlighted){
//         super(author,text,date);
//         this.highlighted = false;
//     }

//     makeTextHighlighted(){
//         this.highlighted = true;
//     }
    
// }

let test = new Post('Админ', 'Hello all', '6.11.2021');
console.log(test.text);
test.edit("goodbye all!");
console.log(test.text);

let test2 = new AttachedPost('Модератор', 'Важное сообщение', '6.11.2021');
console.log(test2);
test2.makeTextHighlighted();
console.log(test2);

