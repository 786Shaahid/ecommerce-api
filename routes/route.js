const router=require('express').Router();
const enventoryController=require('../controllers/enventoryController');

// add  product 
router.post('/create',enventoryController.add_product);
// get all products
router.get('/',enventoryController.all_product);
// delete product
router.get('/:id',enventoryController.delete_product);
// update the inventory
router.post('/update/:id',enventoryController.update_product);

module.exports=router