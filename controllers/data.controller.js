const Model = require('../models/file.model')
const fs = require('fs')

// JSON show
const allData = async (req, res) => {
    const data = await Model.find()
    res.send(data)
}

// Post form show
const postForm = (req, res) => {
    res.render('sendForm')
}

// Data Send to Database
const sendData = async (req, res) => {
    try {
        
        const data = new Model({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            image: req.file.filename
        })

        await data.save()
        res.redirect('/')

    } catch (error) {
        res.send(error)
    }
}


// Update form show
const updateForm = async (req, res) => {
    const data = await Model.findById(req.params.id)
    res.render('updateForm', {
        item: data
    })
}

// Update Data
const updateData = async (req, res) => {

    if (req.file) {
        var record = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            image : req.file.filename
        }

        try {
            fs.unlinkSync('./uploads/' + req.body.old_img)
        } catch (error) {
            res.send('Old image file is not deleted')
        }

            
    } else {
        var record = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
        }
    }

    await Model.findByIdAndUpdate(req.params.id, record)
    res.redirect('/')
}

// Update Data


// Delete Data
const deleteData = async (req, res) => {
    await Model.findByIdAndDelete(req.params.id)
    res.redirect('/')
}





module.exports = {allData, postForm, sendData, updateForm, updateData, deleteData}