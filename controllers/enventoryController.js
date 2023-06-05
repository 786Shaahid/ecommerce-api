const Product=require('../models/enventory');

// for adding the product
module.exports.add_product=async (req,res)=>{
        try{
            const addProduct= await Product.create({
                    name:req.body.name,
                    quantity:req.body.quantity
                })
             return res.status(200).json({
                status:true,
                message:"Successfully Added Product In Inventory",
                data:addProduct
             })   
        }catch(err){
          return res.status(400).json({
            status:false,
            message:"Error in adding the product !",
            error:err
          }) 

        }


}
// find all product
module.exports.all_product=async (req,res)=>{
        try{
         const allProduct= await Product.find();  
             return res.status(200).json({
                status:true,
                message:"Get All Product From Database",
                data:{products:allProduct}
             })   
        }catch(err){
          return res.status(400).json({
            status:false,
            message:"Error in getting all  products !",
            error:err
          }) 

        }
}

// delete product

module.exports.delete_product=async (req,res)=>{
        try{
            const id=req.params.id
         const deleteProduct= await Product.findByIdAndDelete(id)
            
             return res.status(200).json({
                status:true,
                message:" Product Delated !",
                data:{deleted_items:deleteProduct}
             })   
        }catch(err){
          return res.status(400).json({
            status:false,
            message:"Error in deleteing  product !",
            error:err
          }) 

        }
}
// update the inventory
module.exports.update_product=async (req,res)=>{
        try{
            const id=req.params.id
         const updateProduct= await Product.findByIdAndUpdate(id,{quantity:req.body.quantity })
             return res.status(200).json({
                status:true,
                message:"  Updated Successfully !",
             })   
        }catch(err){
          return res.status(400).json({
            status:false,
            message:"Error in updating  product !",
            error:err
          }) 

        }
}

