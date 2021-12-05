import React, {useState} from 'react'

import {useDispatch} from 'react-redux'
import {productCreate} from '../actions/products'
import { Form, Input, Button, Checkbox, Upload, message} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import './SetFructs.css'


const SetProducts = () => {

	const [Products, setProducts] = useState({name: '', price:'', avatar: '', body: '' })
  console.log(Products)
	const dispatch = useDispatch()

	
	const handleSubmit = (e, avatar) => {
		e.preventDefault();
		dispatch(productCreate(Products))
    
	}


  const fileHundles = event => {
    console.log(event.target.files[0])
  }

	
  

    return (
   <div className="row justify-content-center">


 <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      id='form-item'
    >

      <Form.Item
        label="Product name"
        name="name"
        rules={[{ required: true, message: 'Please input product name!' }]}
      >
        <Input value={Products.name} onChange={(e) => setProducts({...Products, name: e.target.value}) } />
      </Form.Item>

      <Form.Item
        label="Product price"
        name="text"
        rules={[{ required: true, message: 'Please input product price!' }]}
        onSubmit={handleSubmit}
      >
        <Input value={Products.price} onChange={(e) => setProducts({...Products, price: e.target.value}) } />
      </Form.Item>

       <Form.Item name={['user', 'introduction']} label="product body" onSubmit={handleSubmit}>
        <Input.TextArea value={Products.body} onChange={(e) => setProducts({...Products, body: e.target.value}) } />
      </Form.Item>
      <Form.Item name={['file', 'file']} label="product image" onSubmit={handleSubmit}>
      <input name="myFile" encType='multipart/form-data' type="file" onChange={(e) => setProducts({...Products, avatar: e.target.files[0]}) } />
      </Form.Item>
      
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}  onSubmit={handleSubmit} >
        <Button type="primary" htmlType="submit" onClick={handleSubmit} >
          Submit
        </Button>
      </Form.Item>
    </Form>



    	</div>
        
    );
};


export default SetProducts;
