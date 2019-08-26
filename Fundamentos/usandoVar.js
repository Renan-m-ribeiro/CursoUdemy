{
   {
      {
         {
             var sera = 'Será???'
         }
      }
   }
}

console.log(sera)

// dentro da function a variavel não se torna global
function teste () {
   var local = 123
   console.log(local)
}

teste()
console.log(local)
