// Imports
import express from "express"
import menuRoutes from "./Routes/menuRouter.mjs"


// Initialize express into a variable
const app = express()
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Sever is active on port: ${PORT}`)
})

// Middleware
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

// Global error handler for internal errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});
// Routes
app.use('/menu', Menu.mjs)




// app.get('/', (req, res) => {
//     res.send('server is working')
// });

// app.get('/user/:id',(req, res) => {
//     res.send(req.params.id)
// })

