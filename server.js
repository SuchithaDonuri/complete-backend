
// it will start the server
const app = require('./src/app')
const noteModel=require('./models/note_model')
const connectDB=require('./src/db/db')
connectDB()


app.post('/notes', async (req,res) => {
    const data = req.body

    await noteModel.create({
        title: data.title,
        description:data.description
    })

    res.status(201).json({message: "Note created"})



}
)

app.get('/notes', async (req,res) => {
    const notes = await noteModel.find()

    res.status(200).json({message:"notes fetched", notes:notes})
})

app.delete('/notes/:id', async (req,res) => {

    const id = req.params.id

    await noteModel.findOneAndDelete({_id:id})

    res.status(200).json({message: "node deleted"})

})

app.patch('/notes/:id', async (req,res) => {
    const id = req.params.id
    const description= req.params.description

    await noteModel.findOneAndUpdate({_id:id}, {description:description})

    res.status(200).json({message:"node updated"})
})
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
    
})



