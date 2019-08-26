function rand ([min=0,max=1000]) {
   if (min > max) [min, max] = [max, min]
   const valor = Math.random() * (max - min + 1) + min
   return Math.floor(valor)
}

console.log(rand([4,3]))
console.log(Math.floor(Math.random() * ((4+1) - 1) + 1))
