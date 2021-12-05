import axios from 'axios'


export const createProduct = (Products) => {
  const url = 'http://localhost:5000/api/products/create';
  const formData = new FormData();
    formData.append('name', Products.name );
    formData.append('price', Products.price );
    formData.append('body', Products.body );
    formData.append('avatar', Products.avatar );

    console.log(formData)
  const config = {
   headers: {
      'Content-Type': 'multipart/form-data'
        } 
    }  
  return axios.post(url, formData, config ).then(res => console.log(res).catch( err => console.log(err)))

  };

export const fetchPosts = () => axios.get("http://localhost:5000/api/products");

export const getProduct = (productId) => axios.get(`http://localhost:5000/api/products/${productId}`);


export const updateProduct = (id, ProductUpdate, updatePro) => {
  const url = `http://localhost:5000/api/products/update/${id}`;
  const formData = new FormData();
    formData.append('name', ProductUpdate.name );
    formData.append('price', ProductUpdate.price );
    formData.append('avatar', ProductUpdate.avatar );

    console.log(formData)
  const config = {
   headers: {
      'Content-Type': 'multipart/form-data'
        } 
    }  
  return axios.post(url, formData, config, updatePro ).then(res => console.log(res).catch( err => console.log(err)))

  };


 export const deleteProduct = (id) => axios.delete(`http://localhost:5000/api/products/delete/${id}`);

