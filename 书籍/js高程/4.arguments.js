function howManyArgs(){
    // console.log(arguments);
    console.log(arguments.length);

    // console.log(typeof arguments);
    // console.log(Object.prototype.toString.call(arguments))
}
howManyArgs();
howManyArgs('1');
howManyArgs('Nihao','asd');

function doAdd(){
    if(arguments.length ==1 ){
        console.log(arguments[0] + '只有一个参数')
    }else{
        console.log(arguments[0] + arguments[1] + '两个参数')
    }
}

doAdd(10);
doAdd(30,20);

