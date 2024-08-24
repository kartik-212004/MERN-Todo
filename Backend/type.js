const zod = require('zod');


const createTodo = zod.object({
    title: zod.string()
})

const updateTodo = zod.object({
    id: zod.number()
})

module.exports = { update: updateTodo, create: createTodo };