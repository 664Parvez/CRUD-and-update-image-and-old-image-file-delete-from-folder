const router = require('express').Router()

const {allData, postForm, sendData, updateForm, updateData, deleteData} = require('../controllers/data.controller')
const multer = require('multer')


router.get('/all-data', allData)


// Show Data Form
router.get('/data-form', postForm)


// Post Data to Database

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer( { storage : storage } ).single('image')

router.post('/data-form', upload, sendData)

// Post Data to Database


// Update Form Show
router.get('/update/:id', upload, updateForm)
router.post('/update/:id', upload, updateData)


// Delete Data
router.get('/delete/:id', deleteData)


module.exports = router