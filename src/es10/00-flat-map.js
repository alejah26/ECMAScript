//flat
const array=[1, 2, 7, 3, 1, [1,3,5,3,[8,5,4]]];
console.log(array.flat(3))

//flat map
const array2=[1,2,5,7]
console.log(array2.flatMap(v =>[v,v*2]))