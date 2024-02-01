const zod = require('zod')

const createCard = zod.object({
    name: zod.string().min(1).max(256),
    description: zod.string().min(1).max(256),
    interests: zod.array(zod.string().min(1).max(256)).refine(data => data.length <= 3),
    linkedin: zod.string().max(256), 
    twitter: zod.string().max(256),
})

const createAdmin = zod.object({
    username: zod.string().min(1).max(256),
    password: zod.string().min(6).max(256)
})

module.exports = {
    createAdmin,
    createCard
}