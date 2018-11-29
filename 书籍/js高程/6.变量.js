var obj = new Object();
var obj2 = obj;
obj.name = "Nicholas";
console.log(obj2.name)


function addTen(num){
    num +=10;
    return num;
}

var count = 20 ;
var result = addTen(count);
// count  num 值相同 但是互不影响
console.log(count);
console.log(result);

function  setName(obj){
    obj.name = "Nicholas";
}
var person = new Object();
console.log(person)
setName(person);
console.log(person.name);
console.log(person)


function setNam(obj){
    // obj.name = 'Nicholas';
    
    // obj = new Object();
    // obj.name = 'Greg';

    obj.age = 2;
    obj.age  ={a:1};
    obj.name = 'new 123123';

    obj = {a:111}
}

var per = new Object();
setNam(per);
console.log(per);
// 当函数内部重写obj时，这个变量引用的就是一个局部对象了，而这个局部对象会在执行完毕后立即被销毁

function appendString(str) {
	str += ', how are you?';
	return str;
}

var s = 'hi';

appendString(s);
console.log(s); //hi


// var  color = 'bule';
// function changeColor(){
//     if(color === 'blue'){
//         color = 'red';
//     }else{
//         color = 'blue';
//     }
// }
// changeColor();
// console.log('color is now ' + color);
// 全局作用域 和自己的变量对象 其中定义着arguments对象 可以在函数内部访问变量color 就是因为可以在这个作用域链中找到它
// 此外局部作用域中定义的变量可以在局部环境中与全局变量互换使用

var color = 'blue';
function changeColor(){
    var anotherColor = 'red';

    function swapColors(){
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;

    }
    swapColors();
}
//这里只能访问color
changeColor()


// if语句中的变量声明hi将变量 添加到当前执行环境
// for(var i =0; i  < 10; i++){
//     //i 相当于全局变量
//     doSomeThing(i);
// }

function add(num1, num2){
    //带var声明的的变量 说明sum是局部变量  省略之后 就变成全局变量了
    
    var sum = num1 + num2;
    return sum;
}

var result = add(10,20);
alert(sum); //访问不到

