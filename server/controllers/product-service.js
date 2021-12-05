const fs = require('fs')
const Products = require('../models/Products.js');

class ProductService {

    async createProducts (req, res) {
        try{
            const {price, pem, name, body} = req.body
            const product = new Products({price, pem, body, name, avatar: req.file.originalname })
            if(!product){
                return res.status(201).json({message:'Файл не создан !'})
            }
            await product.save()
            return res.json(product)
        }catch(error){
            console.log(error)
        }
    }

     async updateProduct (req, res) {
        try{
            const {id} = req.params
            const { price, pem, name } = req.body
            const updatePro = { price, pem, name, avatar: req.file.originalname, _id: id }
                await Products.findByIdAndUpdate(id, updatePro, { new: true });
            if(!updatePro){
                return res.status(201).json({message:'Файл не обновлен !'})
            }

            return res.json(updatePro)
        }catch(error){
            console.log(error)
        }
    }




	async fetProducts(req, res) {
		try {

		const products = await Products.find()
		.then(products => res.send(products))
		return res.json({products})

		}catch(e){
			console.log(e)
			return res.status(500).json({message:'Невозможно получить файл !'})
		}
	}


    async imageProduct(req, res) {
        try {
            const productId = await Products.findById({_id: req.params.id})
            if (!productId) {
                return res.status(400).json({message: 'file not found'})
            }
            
            return res.json(productId)
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: 'Dir is not empty'})
        }
    }

    
	async deleteProduct(req, res) {
        try {
            const delproduct = await Products.findOneAndDelete({_id: req.params.id })
            if (!delproduct) {
                return res.status(400).json({message: 'file not found'})
            }
            return res.json({message: 'File was deleted'})
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: 'Dir is not empty'})
        }
    }



    

}

module.exports = new ProductService()
