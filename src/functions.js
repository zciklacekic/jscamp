function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi : ürün : " + productName + " adet : " + quantity) 
}


addToCart(3,"Yumurta")
addToCart(10)
addToCart(15)

let sayHello = (productName) =>{
    console.log("Hello World " + productName)
}

sayHello("ürün 1")

let sayHello2 = function (productName) {
    console.log("Hello World 2 " + productName)  
}

sayHello2("ürün 2")



function addToCart2(productName,quantity,unitPrice) {
    
}

addToCart2("Elma", 5, 10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

function addToCart3(product) {
    console.log("ürün : " + product.productName)
    console.log("adet : " + product.quantity)  
    console.log("fiyat: " + product.unitPrice)   
}

let product1={productName:"Elma", unitPrice:10, quantity:5}
addToCart3(product1)



let product2={productName:"Elma", unitPrice:10, quantity:5}
let product3={productName:"Elma", unitPrice:10, quantity:5}
product2=product3
product2.productName = "KARPUZ"
console.log(product3.productName)
addToCart3(product3) //referans tip degerle değil referans adresi ile ilgilenir.

let sayi1= 10
let sayi2= 20
sayi1=sayi2
sayi2=100
console.log(sayi1) //degertip sadece degerler ile ilgilenir

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

function add(bisey,...numbers) { //... rest operatoru
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
        total=total +numbers[i]
        
        
    }
    console.log("Toplam : "+total)
    console.log("Bişey  : "+bisey)
}
add(20,30)
add(20,30,40)
add(20,30,40,50)

let numbers= [30,10,500,600,120]
console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [          //destructring
    {name:"İç Anadolu",population:20},
    {name:"Marmara",population:30},
    {name:"Karadeniz",population:10},
    [
        ["Ankara","Konya"],
        ["Istanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]

console.log(icAnadolu)
console.log(marmara)
console.log(icAnadoluSehirleri)
let newProductName,newUnitPrice,newQuantity 
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity} = 
    {productName:"Elma", unitPrice:10, quantity:5})
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
