const dataPlace=document.querySelectorAll('.dataPlace')
const row2=document.querySelectorAll(".row2")
const btn=document.querySelector(".btn")
const add=document.querySelector(".add")





class Bitcoin{
   constructor(row2){
       this.row2=row2
       this.getPrices(this.row2+1)
}


setPrices(row2, prices){
   for(let i = 0; i<row2.length; i++){
       row2[i].textContent=prices[i]
   }

}


   getPrices(row2){
       $.ajax({
           url:'https://bitpay.com/api/rates',
           dataType: 'json',
           success:(data)=>{
               this.prices = data
               for(let i=0; i<row2.length; i++){
                   this.prices[i]=data[i].rate.toFixed(2)
                   console.log(data)
               }
             

               this.setPrices(this.row2, this.prices)
               
           },
           error:error=>{
               console.log('error')
           }
       })
   }


   refresh(){
this.getPrices()
   }

}


const bit = new Bitcoin(row2)

function windowsPrompt(){
    output=window.prompt("Add Currency")
if(bit.output=bit.data[bit.array]){
    console.log("hello")
}else{
    console.log("Couldn't find country")
}
}

btn.addEventListener('click', function(e){
    bit.getPrices(row2)
})
add.addEventListener("click", windowsPrompt)
