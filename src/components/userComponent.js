import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Loaded")

let logger1= new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Zafer","Ciklacekic","Istanbul")
let user2 = new User(2,"Engin","Demirog","Ankara")

//userService.add(user1)
//userService.add(user2)


//console.log(userService.list())
//console.log(userService.getById(1))


let customer = {id:1,firstName:"Zafer"}

//Prototyping
customer.lastName = "Ciklacekic"

console.log(customer.lastName)

console.log("----------------------")
userService.load()
let customerToAdd = new Customer(10,"Seda","Yilmaz","Ankara","h25")
customerToAdd.type = "customer"
userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log("----------------------")
console.log(userService.getCustomersSorted())