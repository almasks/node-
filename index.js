// const EventEmitter =require("node:events")

// const emitter =new EventEmitter()
// emitter.on('orderpizza',(size,topping)=>{
//     console.log(`ordererd pizza with ${size} size and ${topping} topping`)
// })
// emitter.on('orderpizza',(size)=>{
//     if(size==='large'){
//         console.log('served with complementery drink')
//     }
// })
// emitter.emit('orderpizza','large','mushrom')
// const PizzaShop=require('./pizzaShop')
// const ServeDrink=require('./getDrink')
// const pizzaShop = new PizzaShop()
// const drinks =new ServeDrink()
// pizzaShop.on("order",(size,toppings)=>{
//     console.log(`orderd pizza with ${size} and ${toppings}`)
//     drinks.drink(size)
// })
// pizzaShop.order("large","mushroom")
// pizzaShop.displayOrderNumber()
// const fs =require("node:fs")
// const fileContent =fs.readFileSync('./file.txt',"utf-8")
// console.log(fileContent)
// fs.readFile('./file.txt',"utf-8",(error,data)=>{
//     if(error){
//         console.log(error)
//     }else{
//         console.log(data)
//     }
// })
// fs.writeFileSync("./greet.txt","Hello world!!")

// fs.writeFile("./greet.txt","hello Almas",{flag:"a"},(err)=>{
//     if(err){
//         console.log(err)

//     }else{
//         console.log('file written')
//     }
// })
//fs /promise module
// const fs =require("node:fs/promises")
// fs.readFile("./file.txt","utf-8")
// .then(data=>console.log(data))
// .catch(error=>console.log(error))
// using async and await
const fs =require("node:fs/promises")
async function readFile(){
    try{
        const data = await fs.readFile("./file.txt","utf-8")
        console.log(data)
    }catch(err){
        console.log(err)
    }
}
readFile()
//using stream in fs module
// const fs =require("node:fs")
// const readableStream =fs.createReadStream("./file.txt",{
//     encoding:"utf-8"
// })
// const writableStream =fs.createWriteStream("./file1.txt")
// readableStream.on("data", (chunk)=>{
//     console.log(chunk)
//     writableStream.write(chunk)
// })
