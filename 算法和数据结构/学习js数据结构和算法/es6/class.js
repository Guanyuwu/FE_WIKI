
//声明类
class Book{
    //构造函数
    constructor(name,pages,isbn){
        this.name = name;
        this.pages = pages;
        this.isbn = isbn;
    }
    //原型上的方法
    printIsbn(){
        console.log(this.isbn);
    }
}

let book = new Book('js',200,'sss');
console.log(book.name);
book.printIsbn();
//输出：
//js
//sss

//继承

class ITBook extends Book {
    constructor(name,pages,isbn,technology){
        super(name,pages,isbn);
        this.technology = technology;
    }

    printTechnology(){
        console.log(this.technology);
    }
}

let jsBook = new ITBook('学习JS算法', '200', '1234567890', 'JavaScript');
console.log(jsBook.title);
jsBook.printTechnology();


//为属性创建存取器函数
class Person{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }
}

let xiaoMing = new  Person('xm');
//直接对象.属性名 就可以取到属性值
console.log(xiaoMing.name);
// = 赋值会触发set
xiaoMing.name = 'setNew';
console.log(xiaoMing.name);
console.log(xiaoMing._name);