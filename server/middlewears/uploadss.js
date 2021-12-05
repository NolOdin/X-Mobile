const FileUpLoader = require('express-fileupload')
const path = require('path')

const FileUpLoad = (req, res) => {
	
	if(req.files) {
		console.log(req.files)
		const file = req.files.avatar
		const fileName = file.name

		file.mv('./avatars/' + fileName, function () {
			try {
				console.log('file up loaded')
			}catch(error){
				console.log(error)
			}
		})	



	}
}

module.exports = FileUpLoad()