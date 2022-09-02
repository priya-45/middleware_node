// var number = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// i=0
// i=0
// m=[]
// while (i<number.length){
//     if (!m.includes(number[i])){
//         m.push(number[i])
//     }
// i=i+1}
// console.log(m)


var number = [1,7,9,8,2,34]
i=0
min=number[i]
max=0
li=[]
while (i<number.length){
    if (min>number[i]){
        min=number[i]
    }
    if (max<number[i]){
        max=number[i]
    }
    i=i+1}
    while (max>=min){
    if (number.includes(max)){
        li.push(max)
    }
    max=max-1
}
console.log(li)



