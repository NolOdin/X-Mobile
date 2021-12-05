import * as api from '../api/index'


export function getPosts () { 

	return async (dispatch) => {
		  try{
		    const { data } = await api.fetchPosts();

		    dispatch({ type: 'FETCH_ALL', products: data });
		  }catch(error) {
		    console.log(error);
		  }

		 }
};
export function productGet (productId) { 

	return async (dispatch) => {
		  try{
		    const { data } = await api.getProduct(productId);

		    dispatch({ type: 'PRODUCT_GET', payload: data });
		  }catch(error) {
		    console.log(error);
		  }

		 }
};


export function productCreate (post) {
	return async (dispatch) => {
		try{
			
			const {data} = await api.createProduct(post)
			dispatch({type: 'PRODUCT_CREATE', payload: data})
		}catch(e){
			console.log(e)
		}
	
	}

};


export function productUpdate  (productsId, post) { 
	return async (dispatch) => {
     try {
         const { data } = await api.updateProduct(productsId, post);

         dispatch({ type: 'PRODUCT_UPDATE', payload: data });
     } catch (error) {
     console.log(error.message);
  }
 }
};

export function productDelete(id) {
	return async (dispatch) => {
		try{
			
			await api.deleteProduct(id);
			dispatch({type: 'PRODUCT_DELETE', payload: id});
		}catch(e){
			console.log(e)
		}
	}
	
};