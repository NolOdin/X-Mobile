const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const config = require('config');
const CrRouter = require('./routes/products-route.js')
const multer = require('multer')
const path = require('path')
const expressFileUpLoad = require('express-fileupload')
const bodyParser = require('body-parser'); 


const PORT = config.get('serverPort')

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json ({limit: '10mb', extended: true}))
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded ({limit: '10mb', extended: true}))
app.use(express.static(path.resolve(__dirname, 'avatars')))

app.use('/api/products', CrRouter )


async function start() {
	try {

	await mongoose.connect(config.get('dbUrl'), {useNewUrlParser: true,
		})
		app.listen(PORT, () => {
		console.log('сервер запущен ...', PORT)
		})

	}catch (e){
		console.log(e)
	}
}

start()