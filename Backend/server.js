const express = require('express')
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');
const schema = require('../Database/mongoose.mongodb.js')
const { update, create } = require('./type.js');
app.use(express.json())
app.use(cors())


// get
app.get('/', async (req, res) => {
    const getpayload = await schema.find({}).sort({ _id: -1 });
    try {
        res.status(200).json(getpayload)
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

// delete
app.delete('/', async (req, res) => {
    const title = req.body;
    console.log(title)
    try {
        const user = await schema.findOne(title);
        console.log(user._id.toString())
        const deletepayload = await schema.findByIdAndDelete(user._id.toString())
        res.status(200).json(deletepayload);
    } catch (error) {
        res.status(400).json({ Error: error });
    }

})
// post 
app.post('/', async (req, res) => {
    const createPayload = req.body;
    try {
        const parsepayload = create.safeParse(createPayload);
        const createdPayload = await schema.create(parsepayload.data)
        console.log(createdPayload)
        res.status(200).json(createdPayload)

    } catch (error) {
        res.status(400).json({ Error: error })
    }

})
// put 
app.put('/', async (req, res) => {
    const createPayload = req.body;
    const payloadId = req.body.id;
    try {
        const parsepayload = update.safeParse(createPayload);
        const updatePayload = await schema.findByIdAndUpdate(payloadId)
    } catch (error) {

    }
})

mongoose.connect('mongodb://localhost:27017/ToDo')
    .then(() => {
        app.listen(3000, () => {
            console.log('Server Is Running In Port 3000')
        })
    })