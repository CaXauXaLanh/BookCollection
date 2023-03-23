import express from "express"
import apiController from "../controllers/apiController"
const upload = require("../utils/uploadIMG");
const router = express.Router()

const initAPIRouter = (app) => {
    router.get('/books', apiController.getAllBooks)
    router.post('/create-book', upload.single("image"), apiController.createBook)
    router.put('/update-book/:id', apiController.updateBook)
    router.delete('/delete-book/:id', apiController.deleteBook)

    return app.use('/api/v0/', router)
}

export default initAPIRouter