const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const dataModel = mongoose.model('records', dataSchema)


exports.getAllRecords = async(req,res)=>{
    try {
        const data = await dataModel.find(req.query)
        if (Object.entries(data).length === 0) {
            res.status(201).send('notfound')
        }
        else {
            res.status(201).send('login')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}



exports.insertRecords = async(req,res)=>{
    const data = new dataModel(req.body)
    try {
        const saveddata = await data.save()
        res.status(201).json(saveddata)
    } catch (error) {
        res.status(500).json(error)
    }
}

