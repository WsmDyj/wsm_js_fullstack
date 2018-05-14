// const arr = [1, 2, 3, 4, 1, 4, 5, 3];
// function unique(arr) {
//   // 严谨性
//   if (!Array.isArray(arr)) {
//     console.log('type error');
//     return ;
//   }
//   // 准备一个空数组, 结果数组，没有重复的元素的
//   const resultArr = [arr[0]];
//   for (let i = 1; i < arr.length; i++) {
//     // arr[i]
//     let flag = true;
//     for (let j = 0; j < resultArr.length; j++) {
//       if (arr[i] === arr[j]) {
//         flag = false;
//         break;
//       } 
//     }
//     if (flag) {
//       resultArr.push(arr[i]);
//     }
//   }
//   return resultArr
// }
// console.log(unique(arr))


// const arr= [1,2,3,4,1]
// function unique(arr){
//     let res = [];
//     for(let i=0;i<arr.length;i++){
//         if(res.indexOf(arr[i])=== -1){
//             res.push(arr[i])
//         }
//     }
//     return res
// }
// console.log(unique(arr))

// const arr= [1,2,3,4,1]
// function unique(arr){
//     return Array.prototype.filter.call(arr,function(item,index){
//         return arr.indexOf(item) === index;
//     })
// }
// console.log(unique(arr))


// const arr= [1,2,3,4,1]
// function unique(arr){
//   arr = arr.sort();
//   let res =[];
//   for(let i=0;i<arr.length;i++){
//       if(arr[i]!==arr[i-1]){
//             res.push(arr[i])
//       }
//   }
//   return res
// }
// console.log(unique(arr))


const arr= [1,2,3,4,1]
function unique(arr){
    return [...new Set(arr)]
}
console.log(unique(arr))