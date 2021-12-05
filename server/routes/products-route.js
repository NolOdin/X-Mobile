const Router = require('express');
const Products = require('../models/Products.js')
const ProductService = require('../controllers/product-service.js')
const uploadFile = require('../middlewears/uploads.js')


const router = new Router()



router.post('/create', uploadFile , ProductService.createProducts)
router.get('/', ProductService.fetProducts )
router.get('/:id', ProductService.imageProduct )
router.patch('/update/:id', uploadFile ,ProductService.updateProduct )
router.delete('/delete/:id', ProductService.deleteProduct )

module.exports = router

