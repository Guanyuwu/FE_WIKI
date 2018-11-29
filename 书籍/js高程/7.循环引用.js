function problem(){
    var objA = new Object();
    var objB = new Object();

    objA.someOtherObject1 = objB;
    objB.someOtherObject = objA;
    
    return objA;
}
console.log(problem());