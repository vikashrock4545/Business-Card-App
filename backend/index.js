const express = require('express');
const cors = require('cors');
const { createAdmin, createCard } = require('./validation');
const { admin, card } = require('./db');
const { adminMiddleware } = require('./auth')
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json())
app.use(cors())

app.post('/signup', async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const response = createAdmin.safeParse({
        username,
        password
    })
    if(response.success) {
        const isAdminExist = await admin.findOne({username: username})
        if(isAdminExist) {
            res.status(403).json({
                message: 'Username already exists try another username'
            })
            return
        }
        await admin.create({
            username,
            password
        })
        res.json({
            message: "Account created successfully!"
        })
    } else {
        res.status(403).json({
            message: "Invalid username or password format"
        })
    }
})

app.post('/add-card', adminMiddleware, async (req, res) => {
    const name = req.body.name
    const description =  req.body.description
    const interests = req.body.interests
    const linkedin = req.body.linkedin 
    const twitter = req.body.twitter
    
    const response = createCard.safeParse({
        name,
        description,
        interests,
        linkedin,
        twitter
    })
    
    if(response.success) {
        await card.create({
            name: response.data.name,
            description: response.data.description,
            linkedin: response.data.linkedin,
            twitter: response.data.twitter,
            interests: response.data.interests
        })
        res.json({
            message: "card created successfully"
        })
    } else {
        res.status(403).json({
            message: "Invalid card format"
        })
    }
})

app.get('/card', async (req, res) => {
    const response = await card.find({})
    res.json({
        response: response
    })
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})