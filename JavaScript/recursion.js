//递归

// 求和
function sum(n) {
    if (n==1) return  1;
    return sum(n-1) +n;
}
console.log(sum(100))

// 阶乘
function factorial(n) {
    if(n==1) return n;
    return n * factorial(n-1);
}
console.log(factorial(5))

// 斐波那契数列
function fibonacci(n) {
    return n <2?n:factorial(n-1)+factorial(n-2);
}
console.log(fibonacci(5))

