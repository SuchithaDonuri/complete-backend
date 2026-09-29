
// it will start the server
const app = require('./src/app')

app.get('/',(req,res) => {
    res.send("Hello world")
})

app.get('/about', (req,res) => {
    res.send("This is about page")
}
)

app.get('/home', (req,res) => {
    res.send("This is home page")
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
    
})

