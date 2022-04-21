const mid1= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid1")
    //counter
    next()
}

const headervaluecheck= function ( req, res, next) {
    const header = req.headers

    console.log(header)
    const A = header["isFreeAppUser"]
    console.log(A)
    if(A == true || A == false){
        console.log("isFreeAppUser is present")
    next()
    }
    else {console.log("isFreeAppUser is Not present")}
}

const headercheck= function ( req, res, next) {
    const header = req.headers["isFreeAppUser"]

    console.log(header)
    
    if(header == true || header == false){
        console.log("isFreeAppUser is present")
    next()
    }
    else {console.log("isFreeAppUser is Not present")}
}






module.exports.mid1= mid1
module.exports.headercheck= headercheck
module.exports.headervaluecheck= headervaluecheck






/*
const createOrder = async function(req,res){
    let data = req.body
    let userId = req.body.userId
    let productId = req.body.productId
    let header = req.headers["isfreeappuser"]
    let price = await productModel.find({productId})
    let userValidation  = await userModel.exists({userId})
    let productValidation = await productModel.exists({productId})
    if(userValidation){
        if(productValidation){
            let purchase = await orderModel.create(data)
            if(header == true){
                await userModel.find({_id : userId}).update({balance:   `${balance}-${price}`},{new:true})
            }
            res.send({success : purchase})
        } else{
            res.send({err: "the product is not present"})}
    }else{
        res.send({alert: "you are not a registered user, please register"})}
}

module.exports.createOrder = createOrder*/