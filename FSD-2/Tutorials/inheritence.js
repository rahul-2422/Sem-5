// let o1 = {x1:1}
// let o2 = Object.create(o1)
// o2.x2 = 3
// let o3 = Object.create(o2)
// o3.x3 = 7
// o3.x1 = 5
// o3.x3 = 17

// console.log(o1.x1 + "\n" + o3.x1 + "\n" + o2)


// let o1 = {x1 : 1}
// let o2 = Object.create(o1)
// o2.x2 = 3
// let o3 = Object.create(o2)
// o3.x3 = 5
// console.log(o3.prototype.o1);

// let o1 = Object.create({})
// o1.x1 = 1
// let o2 = Object.create(o1)
// o2.x2 = 2
// let o3 = Object.create(o2)
// o3.x3= 3
// o3.x2 = o3.x2+1
// o3.x1 = o3.x1+1
// console.log(o1)
// console.log(o2)
// console.log(o3)

let o1 = {x1 :1}
let o2 = Object.create(o1)
o2.x2 = 3
console.log(o1)
