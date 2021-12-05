const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'avatars');

	},
	filename: (req, file, cb) => {
		


		cb(null, file.originalname)
		console.log(file)
	}
})





const upload = multer({storage: storage })

module.exports = upload.single('avatar')