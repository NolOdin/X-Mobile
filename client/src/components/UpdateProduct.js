import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap'
import {productUpdate, productGet} from '../actions/products'
import {useSelector, useDispatch} from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';


const UpdateProduct = ({match}) => {


	const [ProductUpdate, setProductUpdate] = useState({name: '', price:'', avatar: '' })

	
	
	const productsId = match.params.productsId
	



	const dispatch = useDispatch();
	
	const { product } = useSelector(state => state.products);
	
   /* <form action="" class="search-bar">
        <input type="search" name="search" onChange={(e) => {console.log(e.target.value)}} pattern=".*\S.*" required />
        <button class="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>
      */

   
	useEffect(()=> {
		if(!product){

		
		dispatch(productGet(productsId))
		}else{
			setProductUpdate(product.name, product.price, product.avatar )
		}
	
			
	}, [dispatch, productsId, product])

	const handleSubmit = (e, avatar) => {
		e.preventDefault();
		dispatch(productUpdate(ProductUpdate))
    
	}
	const fileHundles = event => {
        console.log(event.target.files[0])
    }

    const productHundles = event => {
        console.log(event.target.value)
    }
    return (

   

 	<div className="row justify-content-center">
		 <Form className="col-4"  encType='multipart/form-data'>
		  <Form.Group className="mb-3" >
		    <Form.Label id="label-id">Product name</Form.Label>
		   <Form.Control type="text" onChange={(e) => setProductUpdate({...ProductUpdate, name: e.target.value}) } placeholder="Update the name"  id="name-upload"/>
		  </Form.Group>

		  <Form.Group className="mb-3" >
		    <Form.Label>Product price</Form.Label>
		      <Form.Control type="text" onChange={(e) => setProductUpdate({...ProductUpdate, price: e.target.value}) } placeholder="Update the price" id="price-upload" />
		  </Form.Group>
		  <Form.Group controlId="formFile" className="mb-3"  method="POST" encType='multipart/form-data'  >
		    <Form.Label>Update the fructs  Image  file </Form.Label>

		    <Form.Control type="file" onChange={(e) => setProductUpdate({...ProductUpdate, avatar: e.target.files[0]}) } name="avatar"  multiple  />
		  
		  </Form.Group>
		   
		  <Button variant="primary" type="submit" onClick={handleSubmit} >
		   Set Product
		  </Button>
		</Form>
	</div>

    );
};


export default UpdateProduct;
