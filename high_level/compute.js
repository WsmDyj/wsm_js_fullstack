function add(a,b){
    return a+b;
}
function minus(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
// function compute(a,b,operate){
//    switch(opreate){
//        case '+':
//            return add(a, b);
//            break;
//        case '-':
//            return minus(a, b);
//            break;
//        case '*':
//            return divide(a, b);
//            break;
//        case '/':
//            return multiply(a, b);
//            break;
//    }
// }

// 高阶函数，函数的参数或者返回值是函数
function compute(a,b,fn){
  return fn(a,b);
}
console.log(compute(5,8,add))

// js callback fn
// 练习将函数作为参数传递