const req = require("express/lib/request")

const userSchema= require("../models/user")
const orderSchema = require("../models/Order")
const ProductSchema = require("../models/product")

const res = require("express/lib/response")
const user = require("../models/user")
const product = require("../models/product")




const createUser1= async function (req, res) {
    let User = req.body
    let UserCreated = await userSchema.create(User)
    res.send({data: UserCreated})
    }

 const createOrder= async function (req, res) {
     let freeUser = req.isFreeAppUser
     if(!req.body.userId && !req.body.productId) return res.send({msg: 'userId and Product is required'})
     let userbalance = await user.findOne({_id: req.body.userId}).select('balance')
     let productPrince = await user.findOne({_id: req.body.productId}).select('price')
     if(!freeUser && userbalance.balance >= productPrince.price){
         let newbalance = userbalance.balance - productPrince.price
         let orderData = await order.create({
            userId:req.body.userId,
            productId: req.body.productId,
            amount: productPrice.price,
            get amount() {
                return this._amount
            },
            set amount(value) {
                this._amount = value
            },
            isFreeAppUser: false
         })
         await user.findOneAndUpdate({_id:req.body.userId},{balance: newbalance})
         res.send({msg: orderData})
     }
    if(!freeUser && userbalance.balance < product.price)
    return res.send({msg: "insufficient balance"})
    if(freeUser){
        let orderData = await order.create({
            userId:req.body.userId,
            productId:req.body.productId,
            amount: 0,
            isFreeAppUser: true
        })
    }
    }

    const createProduct= async function (req, res) {
        let order = req.body
        let orderCreated = await ProductSchema.create(order)
        res.send({data: orderCreated})
        }

        const getOrder= async function (req, res) {
            console.log(userId, productId)
            let getorder = await orderSchema.find()//.populate(['Product', 'User1'])
            res.send({data: getorder})
        }






/*const basicCode= async function(req, res) {
    const product = re
    res.send({ msg: "This is coming from controller (handler)"})
    
    }*/


    module.exports.createUser1= createUser1
    module.exports.createOrder= createOrder
    module.exports.createProduct= createProduct
    module.exports.getOrder= getOrder