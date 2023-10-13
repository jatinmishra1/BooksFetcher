const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema(
    {
        author:{type:String},
        country:{type:String},
        language:{type:String},
        link:{type:String},
        pages:{type:String},
        title:{type:String},
        year:{type:String},
        id:{type:Number}
},
  {timestamps : false}
)

const bookingModel = mongoose.model('books' , booksSchema)

module.exports = bookingModel