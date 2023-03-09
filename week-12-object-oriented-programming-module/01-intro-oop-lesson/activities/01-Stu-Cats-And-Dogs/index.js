let dogs = {
   raining: true,
   noise: 'woof',

   makeNoise: function () {
      if (this.raining === true)
         console.log(this.noise)
         else {console.log('Not raining dogs')}
   }
}


let cats = {
   raining: false,
   noise: 'meow',

   makeNoise: function () {
      if (this.raining === true)
         console.log(this.noise)
         else {console.log('Not raining cats')}

   }
}

dogs.makeNoise()
cats.makeNoise()

function massHysteria (){
if (cats.raining === true && dogs.raining === true){
   console.log ('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA')
}
}
massHysteria()