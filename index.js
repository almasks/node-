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

//******************** */ const fs =require("node:fs")****************
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
//*************************fs /promise module*********************
// const fs =require("node:fs/promises")
// fs.readFile("./file.txt","utf-8")
// .then(data=>console.log(data))
// .catch(error=>console.log(error))
// ****************************using async and await*******************
// const fs =require("node:fs/promises")
// async function readFile(){
//     try{
//         const data = await fs.readFile("./file.txt","utf-8")
//         console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }
// readFile()
//**********************using stream in fs module**************************
// const fs =require("node:fs")
// const readableStream =fs.createReadStream("./file.txt",{
//     encoding:"utf-8"
// })
// const writableStream =fs.createWriteStream("./file2.txt")
// // readableStream.pipe(writableStream)

// readableStream.on("data", (chunk)=>{
//     console.log(chunk)
//     writableStream.write(chunk)
// })
// ****************using pipe ****************

// const fs =require("node:fs")
// const zlib=require("node:zlib");
// const gzip =zlib.createGzip()
// const readableStream =fs.createReadStream("./file.txt",{
//     encoding:"utf-8"
// })
// readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz'))
// const writableStream =fs.createWriteStream("./file2.txt")
// readableStream.pipe(writableStream)
//***************node server*************
// const http = require("node:http")
// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':"text/plain"})
//     res.end("hello world welcome almas")
//     console.log(req)

// })
// server.listen(3004,()=>{
//     console.log("server created on port 3004")
// })
//****************create json response*********************
// const http=require("node:http")
// const server=http.createServer((req,res)=>{
//     const superHero={
//         firstName:"Bruce",
//         lastName:"Wayne"
//     }
//     res.writeHead(200,{"Content-Type":"application/json"})
//     res.end(JSON.stringify(superHero))
// })
// server.listen(3001,()=>{
//     console.log("server created with json response in port 3001")
// })
//**********************html response 1st method********************
// const http=require("node:http")
//  const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html"})
//     res.end("<h1>hello world</h1>")
//  })
//  server.listen(3001,()=>{
//     console.log("server created on port 3001 with html")
//  })
//*****************html response second method***********
// const http =require("node:http")
// const fs=require("node:fs")
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html"})
//     const html = fs.readFileSync("./index.html","utf-8")
//     res.end(html)
// })
// server.listen(3002,()=>{
//     console.log('server created on port 3002 with file from index')
// })
//***************http 3rd method ***********************
// const http =require("node:http")
// const fs=require("node:fs")
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html"})
//     fs.createReadStream("./index.html").pipe(res)
// })
// server.listen(3002,()=>{
//     console.log('server created on port 3002 with file from index')
// })
// ***************html templete**************
// const http =require("node:http")
// const fs=require("node:fs")
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text:html"})
//     const name="Almas"
//     let html=fs.readFileSync("./index.html","utf-8")
//     html=html.replace("{{name}}",name)
//     res.end(html)
// })
// server.listen(3001,()=>{
//     console.log("server created and html templete in port 3001")
// })
//*************http routing */*********** */
const http =require("node:http")
const fs =require('node:fs')
const server =http.createServer((req,res)=>{
if(req.url==="/"){
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("home page")
}else if(req.url==="/about"){
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("about page")
}else if(req.url==="/api"){
    res.writeHead(200,{"Content-Type":"application/json"})
    res.end(JSON.stringify({
        firstName:"Bruce",
        lastName:"Wayne"
    }))
    
}
else{
    res.writeHead(400)
    res.end("no page has found")
}
})
server.listen(3001,()=>{
    console.log("server portal created on 3001")
})