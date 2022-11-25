let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro do velor é ${num[1]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log('O valor não fo encontrado')
} else {
    console.log(`O valor  está na posição ${pos}`)
}
