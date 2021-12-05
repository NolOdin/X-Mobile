import redux from 'redux'
import { combineReducers } from 'redux'
import {products} from './products'

const rootRducer = combineReducers({
	products
})

export default rootRducer;
