


const initialState = {
	products: [] 
}


export function products(state = initialState, action) {
	switch(action.type) {
		case 'FETCH_ALL':
		return { products: [...action.products]};
		case 'PRODUCT_GET':
		return { product: action.payload };
		case 'PRODUCT_CREATE':
		return [...products, action.products];
		case 'PRODUCT_DELETE':
		return {products: state.products.filter((post) => post._id !== action.payload)};
		case 'PRODUCT_UPDATE':
		return products.map((post) => (post === action.payload._id ? action.payload : post));

	default:
		return state;
	}
}