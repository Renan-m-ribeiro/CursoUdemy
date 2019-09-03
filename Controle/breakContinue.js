const nums = [1,2,3,4,5,6,7,8,9,10]

// BREAK desfia o fluxo pra fora do laço corrente
for (let x in nums ) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)   
}

// CONTINUE interrompe a repeticao corrente
// e vai pra a prox. repeticao
for (let y in nums) {
    if (y==5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
    
}

// externo: é tratado como um rotulo
// BREAK para funcionar nao apenas no for anterior
// é necessario utiliza-lo no rotulo.
externo:
for (let a in nums) {
    for (let b in nums) {
        if(a==2 && b==2) break externo
        console.log(`Par = ${a},${b}`)
    }
}