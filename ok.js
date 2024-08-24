const zod = require('zod');
const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})
const hallo = createTodo.safeParse({
    title: 12,
    description: "system"
})
console.log(hallo)