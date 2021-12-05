import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Search.css'

import {productsFetchData} from '../actions/products.js'
import {connect, useDispatch} from 'react-redux';
import {Button, Container, CardGroup } from 'react-bootstrap'
import {useSelector} from 'react-redux'
import {productDelete} from '../actions/products'
import {getPosts} from '../actions/products'
import './Productss.css'
import { Card, Col, Row } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';





function Productss () {

  
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts(products));
  },[dispatch]);
 useEffect(() => {
    dispatch(productDelete(products));
  },[dispatch]);
  
 
  
  const {products} = useSelector((state) => state.products);
  const { Meta } = Card;



    return (

    	<div>
      
            <div className="site-card-wrapper">
             
              <Row >
              
                {products && products.map((products, index) => {
                    return  <Col span={5} offset={3} id='card-id'>
                    <Card key={index}
                              hoverable
                              style={{ width: 240 }}
                              cover={<img alt="example"  style={{ height: 300  }} src={'http://localhost:5000/' + products.avatar} />}
                              >
                              <Meta title={products.name + "  " + "Price: " + products.price + "P"} description={products.body} />
                              <Meta title={ <a onClick={() => dispatch(productDelete(products._id))} style={{color: 'red'}}><DeleteOutlined /></a> }  />
                            </Card>
                    </Col>
                    
                })}

              
             </Row>
          </div>

    	</div>	
        
    );
};


export default Productss;





