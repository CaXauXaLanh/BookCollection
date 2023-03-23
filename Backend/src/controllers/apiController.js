import pool from "../configs/connectDB";

let getAllBooks = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM books");

    return res.status(200).json({
        message: "ok",
        data: rows,
    });
};

let createBook = async (req, res) => {
    let { name, pages, language, description } = req.body;
    if (!name || !pages || !language || !description) {
        return res.status(400).json({
            message: "Invalid params",
        });
    }
    let image
    if (req.file) {
        image = "/img/" + req.file.filename 
    }
    await pool.execute(
        `insert into books(name, pages, language, description, image) values (?, ?, ?, ?)`,
        [name, pages, language, description, image],
    );
    return res.status(200).json({
        message: "ok",
    });
}

let updateBook = async (req, res) => {
    let {name, pages, language, description, my_id} = req.body
    await pool.execute('update users set name = ?, pages = ?, language = ?, description = ? where my_id = ?', [name, pages, language, description, my_id])
    return res.status(200).json({
        message: "ok",
    });
}

let deleteBook = async (req, res) => {
    let my_id = req.body.bookID
    await pool.execute('delete from users where my_id = ?', [my_id])
    return res.status(200).json({
        message: "ok",
    });
}

module.exports = {
    getAllBooks,
    createBook,
    updateBook,
    deleteBook
}
