const mongoose = require('mongoose')
const { string } = require('zod')
const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
        }
    }
)

module.exports = mongoose.model("data", schema)