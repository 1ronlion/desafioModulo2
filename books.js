const DB = require("./db")

exports.getAll = () => DB

exports.getById = (id) => DB.find((book) => book.id == id)

exports.getByAuthor = (author) => DB.filter((book) => book.author.includes(author))

exports.getByName = (name) => DB.filter((book) => book.name.includes(name))

exports.getByTag = (tag) => DB.filter((book) => book.tags.includes(tag))






